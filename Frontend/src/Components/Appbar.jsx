import {
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { NavLink } from 'react-router';
import { useNavigate } from 'react-router';

function Appbar(){
    const navigate=useNavigate();
       
        
    return <div className='flex justify-between text-white fixed w-full bg-black pb-4 pt-3 shadow-xl'>
             
                <div className=' text-2xl font-serif font-semibold pl-10 pt-4 '>
                    SOLANA
                </div>
          
                <div className='pt-5'>
                    <button onClick={()=>navigate("/SendSol")} className='px-4 font-medium'>Send-Sol</button>
                    <button onClick={()=>navigate("/Airdrop")} className='px-4 font-medium'>Airdrop</button>
                    <button onClick={()=>navigate("/createwallet")}className='px-4 font-medium'>Create-Wallet</button>
                    <button onClick={()=>navigate("/tokenlaunchpad")}className='px-4 font-medium'>LaunchToken</button>
                </div> 

                <div className='pr-20 pt-4 rounded-lg'>
                    <WalletModalProvider>
                        <WalletMultiButton />
                    </WalletModalProvider>   
                 </div>
               
           </div>
}

export default Appbar;