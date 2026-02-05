import { ConnectButton, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { useAccount, WagmiProvider } from 'wagmi'
import { Profile } from './Components/Profile/Profile'
import { config } from './Config/Config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient()

function AppContent() {
  const { isConnected } = useAccount()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '50px', fontFamily: 'sans-serif' }}>
        <h2>ENS - RainbowKit</h2>
        <ConnectButton />
        
        {isConnected && (
          <>
            <hr style={{ width: '100%' }} />
            <Profile />
          </>
        )}
    </div>
  )
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <AppContent />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App