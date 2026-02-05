import { ConnectButton, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
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
        backgroundColor: '#ffffff',
        color: '#1a202c'
    },
    header: {
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #e2e8f0',
        backdropFilter: 'blur(10px)',
        position: 'sticky' as const,
        top: 0,
        zIndex: 10,
        backgroundColor: 'rgba(255,255,255,0.9)'
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: '800',
        background: 'linear-gradient(to right, #00a86b, #008f5d)',
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
        fontWeight: '700',
        color: '#1a202c'
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        color: '#4a5568',
        marginBottom: '2.5rem',
        maxWidth: '600px',
        lineHeight: '1.6'
    },
    footer: {
        padding: '2rem',
        textAlign: 'center' as const,
        color: '#718096',
        borderTop: '1px solid #e2e8f0',
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
                <span style={{color: '#00a86b'}}>Web3 Identity</span>
            </h1>
            <p style={styles.heroSubtitle}>
                Connect your wallet to instantly resolve your Ethereum Name Service (ENS) profile. 
                Simple, fast, and decentralized.
            </p>

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
        <RainbowKitProvider theme={lightTheme({
            accentColor: '#00a86b',
            accentColorForeground: 'white',
            borderRadius: 'medium',
        })}>
          <AppContent />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App