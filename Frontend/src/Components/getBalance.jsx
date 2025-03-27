import { useConnection } from "@solana/wallet-adapter-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

function GetBalance(){
    const wallet=useWallet();
    const {connection}=useConnection();
    
    const [balance,setBalance]=useState();


    

    useEffect(()=>{
        async function  getba() {
            
        
            const balnc=await connection.getBalance(wallet.publicKey);
            setBalance(balnc);
        }
        getba();    
    },[wallet,connection]);
    return<div >Your balance is {balance}

    </div>

}

export default GetBalance;