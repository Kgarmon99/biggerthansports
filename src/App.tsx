function App() {
  return (
    <div style={{
      background: '#0a0a1a',
      color: '#fff',
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px'
    }}>
      <div style={{ maxWidth: '520px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #00E676, #00C853)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px',
          fontSize: '40px',
          fontWeight: 900,
          color: '#0a0a1a'
        }}>B</div>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 900,
          marginBottom: '12px',
          letterSpacing: '-0.5px'
        }}>Bigger Than Sports Foundation</h1>
        <p style={{
          fontSize: '18px',
          color: '#00E676',
          fontWeight: 600,
          marginBottom: '24px'
        }}>Site Under Construction</p>
        <div style={{
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, #00E676, #00C853)',
          margin: '0 auto 40px',
          borderRadius: '2px'
        }}></div>
        <p style={{
          fontSize: '16px',
          lineHeight: 1.6,
          opacity: 0.8,
          marginBottom: '40px'
        }}>
          We're working on something amazing for the Cincinnati community.<br/>
          Updates coming soon — check back shortly!
        </p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          opacity: 0.7,
          marginTop: '32px'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            background: '#00E676',
            borderRadius: '50%',
            display: 'inline-block'
          }}></span>
          <span>Updating</span>
        </div>
        <p style={{
          fontSize: '14px',
          opacity: 0.6,
          marginTop: '40px'
        }}>
          Questions? <a href="mailto:info@biggerthansportsfoundation.com" style={{ color: '#00E676', textDecoration: 'none' }}>info@biggerthansportsfoundation.com</a>
        </p>
      </div>
    </div>
  );
}

export default App;
