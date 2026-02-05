# ENS Proof of Concept (ens_prueba)

This project is a Proof of Concept (PoC) demonstrating how to integrate **RainbowKit**, **Wagmi**, and **Viem** into a React application to connect an Ethereum wallet and resolve ENS (Ethereum Name Service) names.


## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Web3 Libraries**:
  - [RainbowKit](https://www.rainbowkit.com/): For wallet connection UI.
  - [Wagmi](https://wagmi.sh/): React Hooks for Ethereum.
  - [Viem](https://viem.sh/): TypeScript Interface for Ethereum.
  - [TanStack Query](https://tanstack.com/query/latest): For async state management.

## Features

- **Wallet Connection**: Connect via various wallets (MetaMask, Rainbow, WalletConnect, etc.) using RainbowKit's `ConnectButton`.
- **ENS Resolution**: Automatically fetches and displays the ENS name associated with the connected wallet address using Wagmi's `useEnsName` hook.

## Project Structure

- `src/App.tsx`: Main application entry point. Sets up the providers (`WagmiProvider`, `QueryClientProvider`, `RainbowKitProvider`) and layout.
- `src/Config/Config.tsx`: Wagmi configuration file (chains, transports, connectors).
- `src/Components/Profile/Profile.tsx`: Component that displays the ENS name.

## Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn
    # or
    pnpm install
    ```

2.  **Run the development server**:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

3.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the app for production.
- `lint`: Runs ESLint.
- `preview`: Previews the production build locally.
