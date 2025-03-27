import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';

import image1 from "../image/image1.webp"
import { useNavigate } from 'react-router';
import GetBalance from './getBalance';
function Content(){
    const navigate=useNavigate();
    return(
        <div className='grid grid-cols-2 pt-32 text-white'>

            <div className='p-16 pl-32 pt-20' >

                <div className='font-mono text-7xl font-extrabold'>
                    Seamless Wallet
                </div>

                <div className='pt-5 text-xl'>
                    Secure, Powerful, and Fully Yours—The Best Wallet for the Decentralized Future 🚀
                </div>


                <div className='grid grid-cols-2 pt-2'>
                    <div className='pt-4 text-xl font-bold text-fuchsia-200'>
                        Don't Have Account!!
                    </div>

                    <div className='pt-3'>
                    
                        <button onClick={()=>navigate("/createwallet")} className='bg-gray-300 w-32 h-10 rounded-3xl text-black font-bold '> CReate One?</button>
                        
                    </div>
                </div>

            </div>

            <div>
                <img src={image1 } className='rounded-3xl h-screen pl-40 pt-10'></img>

            </div>

        </div>
    )

}

export default Content;