import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";

function Airdrop(){

    const wallet=useWallet();
    const {connection}=useConnection();  

    async function  AirdropIt() {

            const pubkey=wallet.publicKey;
            if (!pubkey) throw new WalletNotConnectedError();

            const amount=document.getElementById("amount").value;

            const Total_sol=amount*LAMPORTS_PER_SOL;

            const succ=await connection.requestAirdrop(pubkey,Total_sol);

            if(succ){
                alert(Total_sol+"Airdroped Succesfully")
            }
            else{
                alert("Error in Airdroped")
            }

     }
      return <div>

                   <div className="grid justify-center  w-screen h-screen bg-black">

                        <div className="pt-64">
                            <input id="amount" placeholder="enter the amount" className="h-12  w-72 pl-4 rounded-md shadow-xl"></input>
                        </div>

                        <div className="pt-1 grid justify-center h-11  mb-52 w-32 pl-36 "  > 
                            <button className="bg-blue-500  h-11 w-32 text-white    font-semibold rounded-3xl shadow-xl" onClick={AirdropIt}>Airdrop</button>
                        </div>

                    </div>
                    
             </div>
}

export default Airdrop;