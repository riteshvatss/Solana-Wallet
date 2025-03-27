
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';

import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app

import '@solana/wallet-adapter-react-ui/styles.css';

import Appbar from '../Components/Appbar';
import Content from '../Components/Content';

function Homepage(){
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = clusterApiUrl(network);

    const wallets = [];
    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
              <div className='bg-black'>  
                  <Appbar></Appbar>
                  <Content></Content>    
              </div>
            </WalletProvider>  
        </ConnectionProvider>
       
    );
};
export default Homepage;