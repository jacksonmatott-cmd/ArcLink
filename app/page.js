```jsx
const navigation = [
  "Dashboard",
  "Server",
  "Players",
  "Staff",
  "Vehicles",
  "Calls",
  "Logs",
  "Moderation",
  "Commands"
];

export default function Home() {
  return (
    <main className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">A</div>
          <div>
            <div className="brand-name">ArcLink</div>
            <div className="brand-subtitle">Arclight</div>
          </div>
        </div>

        <nav>
          {navigation.map((item, index) => (
            <button
              key={item}
              className={`nav-item ${index === 0 ? "active" : ""}`}
            >
              <span>{item}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className="nav-item">Settings</button>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <h1>Dashboard</h1>
            <p>ER:LC Server Management</p>
          </div>

          <div className="status">
            <span className="status-dot"></span>
            Server Online
          </div>
        </header>

        <div className="server-card">
          <div>
            <span className="label">SERVER</span>
            <h2>Liberty County</h2>
            <p>ER:LC Private Server</p>
          </div>

          <div className="server-status">
            <span className="status-dot"></span>
            ONLINE
          </div>
        </div>

        <div className="stats">
          <div className="stat-card">
            <span className="label">PLAYERS</span>
            <strong>24</strong>
            <span className="muted">of 40 slots</span>
          </div>

          <div className="stat-card">
            <span className="label">STAFF ONLINE</span>
            <strong>5</strong>
            <span className="muted">staff members</span>
          </div>

          <div className="stat-card">
            <span className="label">QUEUE</span>
            <strong>0</strong>
            <span className="muted">players waiting</span>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest activity from your server</p>
            </div>
          </div>

          <div className="activity">
            <div className="activity-item">
              <div className="activity-icon">+</div>
              <div>
                <strong>Player joined</strong>
                <p>Waiting for ER:LC connection</p>
              </div>
              <span className="time">Just now</span>
            </div>

            <div className="activity-item">
              <div className="activity-icon">●</div>
              <div>
                <strong>Server connected</strong>
                <p>ArcLink is monitoring the server</p>
              </div>
              <span className="time">Just now</span>
            </div>

            <div className="activity-item">
              <div className="activity-icon">!</div>
              <div>
                <strong>No recent activity</strong>
                <p>Real server data will appear here once the API is connected.</p>
              </div>
              <span className="time">—</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```
