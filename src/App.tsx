import { ConnectButton, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { useAccount, WagmiProvider } from 'wagmi'
import { Profile } from './Components/Profile/Profile'
import { config } from './Config/Config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient()

function AppContent() {
  const { isConnected } = useAccount()

  const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column' as const,
        fontFamily: "'Inter', sans-serif, system-ui",
    },
    header: {
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        position: 'sticky' as const,
        top: 0,
        zIndex: 10,
        backgroundColor: 'rgba(20,20,20,0.8)'
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: '800',
        background: 'linear-gradient(to right, #646cff, #9f5afd)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        cursor: 'pointer'
    },
    main: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center' as const,
    },
    heroTitle: {
        fontSize: '3.5rem',
        lineHeight: '1.1',
        marginBottom: '1rem',
        maxWidth: '800px',
        fontWeight: '700'
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        color: '#888',
        marginBottom: '2.5rem',
        maxWidth: '600px',
        lineHeight: '1.6'
    },
    footer: {
        padding: '2rem',
        textAlign: 'center' as const,
        color: '#666',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        fontSize: '0.9rem'
    }
  }

  return (
    <div style={styles.container}>
        <header style={styles.header}>
            <div style={styles.logo}>ENS Scanner</div>
            <ConnectButton showBalance={false} accountStatus="avatar" />
        </header>

        <main style={styles.main}>
            <h1 style={styles.heroTitle}>
                Discover your <br />
                <span style={{color: '#646cff'}}>Web3 Identity</span>
            </h1>
            <p style={styles.heroSubtitle}>
                Connect your wallet to instantly resolve your Ethereum Name Service (ENS) profile. 
                Simple, fast, and decentralized.
            </p>

            <div style={{transform: 'scale(1.1)', marginBottom: isConnected ? '0' : '3rem'}}>
                 {!isConnected && <ConnectButton />}
            </div>

            {isConnected && (
                <div style={{animation: 'fadeIn 0.5s ease-out'}}>
                    <Profile />
                </div>
            )}
        </main>

        <footer style={styles.footer}>
            <p>© {new Date().getFullYear()} ENS Proof of Concept. Built with Vite, RainbowKit & Wagmi.</p>
        </footer>
    </div>
  )
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <AppContent />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App