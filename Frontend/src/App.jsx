import { BrowserRouter, Routes, Route } from "react-router";

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

import Homepage from "./Pages/Homepage";
import Airdrop from "./Pages/Airdrop";
import CreateWallet from "./Pages/CreateWallet";
import SendSol from "./Pages/SendSol";
import TokenLaunchap from "./Pages/TokenLaunchpad";




function App(){

  const wallets=[];
  const network = WalletAdapterNetwork.Devnet;
  const endpoint=clusterApiUrl(network);

  return <div>

            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <BrowserRouter>
                          <Routes>
                              <Route path="/" element={<Homepage/>}/> 
                              <Route path="/Airdrop" element={<Airdrop/>}/>
                              <Route path="/CreateWallet" element={<CreateWallet/>} />
                              <Route path="/SendSol" element={<SendSol/>} />
                              <Route path="/tokenlaunchpad" element={<TokenLaunchap/>}/>
                          </Routes>
                      </BrowserRouter>
                </WalletProvider>
            </ConnectionProvider>
             
         </div>
}

export default App;