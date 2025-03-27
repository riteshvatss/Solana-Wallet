import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, SystemProgram } from "@solana/web3.js";
import { Transaction } from "@solana/web3.js";
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';


function SendSol(){

    const wallet=useWallet();
    const {connection}=useConnection();

    async function SendAmount() {

        console.log("sendsol")

        const pubkey=wallet.publicKey;
        if (!pubkey) throw new WalletNotConnectedError();

        const amount=document.getElementById("amount").value;
        const to=document.getElementById("to").value;

        const transaction= new Transaction();

        transaction.add(SystemProgram.transfer({
            fromPubkey:pubkey,
            toPubkey:to,
            lamports: amount*LAMPORTS_PER_SOL
        }))

        await wallet.sendTransaction(transaction,connection);

        
    }

    return  <div className="grid justify-center h-screen w-screen  bg-black ">

                 <div className="pt-64">
                    <input id="amount" placeholder="Amount" className="h-12  w-72 pl-4 rounded-md shadow-xl"></input>
                 </div>

                 <div className="py-4">
                    <input id="amount" placeholder="Reciever Address" className="h-12  w-72 pl-4 rounded-md shadow-xl"></input>
                 </div>
                       
                 <div className="pt-1 grid justify-center h-11  mb-52 w-32 pl-36 "  > 
                    <button className="bg-blue-400 h-11 w-36 text-white    font-semibold rounded-3xl shadow-xl" onClick={SendSol}>Send Sol</button>
                 </div>

            </div>       
}

export default SendSol;