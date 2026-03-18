import { useEffect, useMemo, useState } from 'react'

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
    .slice(0, 24)
}

function formatUpdatedAt(date) {
  return new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export default function Players() {
  const [search, setSearch] = useState('')
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [status, setStatus] = useState({
    loading: true,
    error: false,
    online: false,
    playersOnline: 0,
    playersMax: 0,
    playerNames: [],
    updatedAt: null,
  })

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
          updatedAt: new Date(),
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
          updatedAt: new Date(),
        }))
      }
    }

    loadStatus()
    const intervalId = window.setInterval(loadStatus, REFRESH_INTERVAL_MS)

    return () => {
      isMounted = false
      window.clearInterval(intervalId)
    }
  }, [])

  const filteredPlayers = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) {
      return status.playerNames
    }

    return status.playerNames.filter((playerName) => playerName.toLowerCase().includes(query))
  }, [search, status.playerNames])

  const stats = useMemo(() => {
    const onlineNames = status.playerNames
    const freeSlots = Math.max((status.playersMax || 0) - status.playersOnline, 0)

    return [
      {
        title: '\u0412 \u0441\u0435\u0442\u0438 \u0441\u0435\u0439\u0447\u0430\u0441',
        accent: 'violet',
        rows: onlineNames.length
          ? onlineNames.map((playerName, index) => ({
              rank: index + 1,
              avatar: `https://mc-heads.net/avatar/${encodeURIComponent(playerName)}/32`,
              name: playerName,
              meta: '\u0410\u043a\u0442\u0438\u0432\u0435\u043d \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435',
            }))
          : [
              {
                rank: '•',
                name: '\u041f\u043e\u043a\u0430 \u043f\u0443\u0441\u0442\u043e',
                meta: '\u041d\u0438\u043a\u0442\u043e \u043d\u0435 \u0432 \u0441\u0435\u0442\u0438',
              },
            ],
      },
      {
        title: '\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0435 \u0441\u043b\u043e\u0442\u044b',
        accent: 'pink',
        rows: [
          {
            rank: 1,
            name: `${freeSlots}`,
            meta: '\u043c\u0435\u0441\u0442 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e',
          },
          {
            rank: 2,
            name: `${status.playersMax || 0}`,
            meta: '\u0432\u0441\u0435\u0433\u043e \u0441\u043b\u043e\u0442\u043e\u0432',
          },
          {
            rank: 3,
            name: `${status.playersOnline}`,
            meta: '\u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u043e\u043d\u043b\u0430\u0439\u043d',
          },
        ],
      },
    ]
  }, [status])

  return (
    <section id="players" className="section players-section">
      <div className="container players-screen">
        <div className="players-summary-pill">
          <span className="players-summary-text">
            {status.loading
              ? '\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043e\u043d\u043b\u0430\u0439\u043d\u0430'
              : `${status.playersOnline} \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u043e\u043d\u043b\u0430\u0439\u043d`}
          </span>
          <span className="players-summary-divider">{'\u2022'}</span>
          <span className="players-summary-text">
            {`\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e ${formatUpdatedAt(status.updatedAt ?? new Date())}`}
          </span>
        </div>

        <div className="section-heading players-heading players-heading-centered">
          <p className="eyebrow">{'\u0418\u0433\u0440\u043e\u043a\u0438 \u0432 \u0441\u0435\u0442\u0438'}</p>
          <h2>{'\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0438 \u0438 \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0435\u0440\u0432\u0435\u0440\u0430'}</h2>
          <p className="rules-note">
            {
              '\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u0438\u0433\u0440\u043e\u043a\u0430, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043a\u0430 \u0431\u044b\u0441\u0442\u0440\u043e \u043d\u0430\u0439\u0442\u0438 \u043d\u0443\u0436\u043d\u044b\u0439 \u043d\u0438\u043a \u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c, \u043a\u0442\u043e \u0441\u0435\u0439\u0447\u0430\u0441 \u0432 \u0438\u0433\u0440\u0435.'
            }
          </p>
        </div>

        <label className="players-search" htmlFor="players-search">
          <span className="players-search-icon" aria-hidden="true"></span>
          <input
            id="players-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0438\u043a\u0443...'}
          />
        </label>

        <div className="players-stats-grid">
          {stats.map((card) => (
            <article key={card.title} className={`players-stat-card players-stat-card-${card.accent}`}>
              <h3>{card.title}</h3>
              <div className="players-stat-list">
                {card.rows.map((row) => (
                  <div key={`${card.title}-${row.rank}-${row.name}`} className="players-stat-row">
                    {row.avatar ? (
                      <img src={row.avatar} alt={row.name} className="players-stat-avatar" loading="lazy" />
                    ) : (
                      <span className="players-stat-rank">{row.rank}</span>
                    )}
                    <div className="players-stat-meta">
                      <strong>{row.name}</strong>
                      <span>{row.meta}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="players-card-grid">
          {filteredPlayers.length ? (
            filteredPlayers.map((playerName) => (
              <button key={playerName} type="button" className="players-card" onClick={() => setSelectedPlayer(playerName)}>
                <div className="players-card-avatar-wrap">
                  <img
                    src={`https://mc-heads.net/avatar/${encodeURIComponent(playerName)}/96`}
                    alt={playerName}
                    className="players-card-avatar"
                    loading="lazy"
                  />
                  <span className="players-card-online-dot" aria-hidden="true"></span>
                </div>
                <strong className="players-card-name">{playerName}</strong>
              </button>
            ))
          ) : (
            <div className="players-empty-state">
              {status.error
                ? '\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u043e\u0432. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0447\u0443\u0442\u044c \u043f\u043e\u0437\u0436\u0435.'
                : '\u041f\u043e \u0442\u0430\u043a\u043e\u043c\u0443 \u043d\u0438\u043a\u0443 \u043d\u0438\u043a\u043e\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.'}
            </div>
          )}
        </div>

        {selectedPlayer ? (
          <div className="players-modal" role="dialog" aria-modal="true" aria-label={selectedPlayer} onClick={() => setSelectedPlayer(null)}>
            <div className="players-modal-card" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="players-modal-close"
                onClick={() => setSelectedPlayer(null)}
                aria-label={'\u0417\u0430\u043a\u0440\u044b\u0442\u044c'}
              >
                {'\u00d7'}
              </button>

              <div className="players-modal-header">
                <img
                  src={`https://mc-heads.net/avatar/${encodeURIComponent(selectedPlayer)}/64`}
                  alt={selectedPlayer}
                  className="players-modal-head"
                />
                <div className="players-modal-title">
                  <h3>{selectedPlayer}</h3>
                  <p>{'\u0421\u0442\u0430\u0442\u0443\u0441 \u0438\u0433\u0440\u043e\u043a\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 Ember Saga'}</p>
                </div>
              </div>

              <div className="players-modal-layout">
                <div className="players-modal-skin-wrap">
                  <img
                    src={`https://mc-heads.net/body/${encodeURIComponent(selectedPlayer)}/right`}
                    alt={selectedPlayer}
                    className="players-modal-skin"
                  />
                  <div className="players-modal-status">
                    <span className="players-modal-status-dot" aria-hidden="true"></span>
                    <span>{status.online ? '\u041e\u043d\u043b\u0430\u0439\u043d' : '\u041d\u0435 \u0432 \u0441\u0435\u0442\u0438'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
