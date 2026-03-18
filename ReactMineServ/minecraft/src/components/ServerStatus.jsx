import { useEffect, useRef, useState } from 'react'

const SERVER_ADDRESS = 'debustember.gomc.me'
const STATUS_URL = `https://api.mcstatus.io/v2/status/java/${SERVER_ADDRESS}`
const REFRESH_INTERVAL_MS = 60000

function getPlayerNames(players) {
  if (!players || !Array.isArray(players.list)) {
    return []
  }

  return players.list
    .map((player) => {
      if (typeof player === 'string') {
        return player
      }

      if (player && typeof player.name_clean === 'string') {
        return player.name_clean
      }

      if (player && typeof player.name_raw === 'string') {
        return player.name_raw
      }

      return null
    })
    .filter(Boolean)
    .slice(0, 5)
}

function formatVersion(version) {
  if (!version) {
    return 'Unavailable'
  }

  const rawVersion = version.name_clean ?? version.name_raw ?? version.name ?? 'Unavailable'
  const matchedVersion = rawVersion.match(/\d+(?:\.\d+)+(?:[-\w.]*)?/)

  return matchedVersion ? matchedVersion[0] : rawVersion
}

export default function ServerStatus({ mode = 'full' }) {
  const [status, setStatus] = useState({
    loading: true,
    error: false,
    online: false,
    playersOnline: 0,
    playersMax: 0,
    playerNames: [],
    version: 'Unavailable',
    motd: '',
    iconUrl: '',
  })
  const [copyState, setCopyState] = useState('idle')
  const copyTimeoutRef = useRef(null)

  useEffect(() => {
    let isMounted = true

    const loadStatus = async () => {
      try {
        const response = await fetch(STATUS_URL, {
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`Status request failed: ${response.status}`)
        }

        const data = await response.json()
        if (!isMounted) {
          return
        }

        setStatus({
          loading: false,
          error: false,
          online: Boolean(data.online),
          playersOnline: data.players?.online ?? 0,
          playersMax: data.players?.max ?? 0,
          playerNames: getPlayerNames(data.players),
          version: formatVersion(data.version),
          motd: data.motd?.clean ?? data.motd?.raw ?? '',
          iconUrl: data.icon_url ?? '',
        })
      } catch {
        if (!isMounted) {
          return
        }

        setStatus((current) => ({
          ...current,
          loading: false,
          error: true,
          online: false,
          playerNames: [],
        }))
      }
    }

    loadStatus()
    const intervalId = window.setInterval(loadStatus, REFRESH_INTERVAL_MS)

    return () => {
      isMounted = false
      window.clearInterval(intervalId)
      window.clearTimeout(copyTimeoutRef.current)
    }
  }, [])

  const handleCopyIp = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_ADDRESS)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }

    window.clearTimeout(copyTimeoutRef.current)
    copyTimeoutRef.current = window.setTimeout(() => {
      setCopyState('idle')
    }, 1800)
  }

  return (
    <section className="server-status-card" aria-label="Статус сервера">
      <div className="server-status-topline">
        <span className="server-status-kicker">Статус сервера</span>
        <span className={`server-status-pill ${status.online ? 'server-status-pill-online' : 'server-status-pill-offline'}`}>
          {status.loading ? 'Обновление...' : status.online ? 'Онлайн' : 'Оффлайн'}
        </span>
      </div>

      <div className="server-status-grid">
        <div className="server-status-main">
          <div className="server-status-row">
            <span className="server-status-label">Игроки</span>
            <strong>{status.playersOnline}</strong>
          </div>
          <div className="server-status-row">
            <span className="server-status-label">Версия</span>
            <strong>{status.version}</strong>
          </div>
          <div className="server-status-row">
            <span className="server-status-label">IP</span>
            <div className="server-status-ip-wrap">
              <strong>{SERVER_ADDRESS}</strong>
              <button type="button" className="server-status-copy" onClick={handleCopyIp} aria-label="Скопировать IP">
                <span className="server-status-copy-icon" aria-hidden="true"></span>
              </button>
              {copyState === 'copied' ? <span className="server-status-copy-feedback">IP скопирован</span> : null}
            </div>
          </div>
        </div>

        <div className="server-status-side">
          {status.iconUrl ? <img src={status.iconUrl} alt="Server icon" className="server-status-icon" /> : null}
          {status.error ? (
            <p className="server-status-note">Status is temporarily unavailable. Please try again later.</p>
          ) : null}
        </div>
      </div>

      {status.playersOnline > 0 && status.playerNames.length ? (
        <div className="server-status-players" aria-label="Players online">
          {status.playerNames.map((playerName) => (
            <div key={playerName} className="server-status-player">
              <img
                src={`https://mc-heads.net/avatar/${encodeURIComponent(playerName)}/32`}
                alt={playerName}
                className="server-status-avatar"
                loading="lazy"
              />
              <span>{playerName}</span>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  )
}
