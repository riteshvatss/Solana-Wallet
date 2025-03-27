import { Keypair,SystemProgram,Transaction } from "@solana/web3.js";
import { useConnection,useWallet } from "@solana/wallet-adapter-react";
import{MINT_SIZE,TOKEN_2022_PROGRAM_ID,createInitializeMint2Instruction,createMint,getMinimumBalanceForRentExemptMint} from "@solana/spl-token"

 function TokenLAunchpad(){
        const {connection} =useConnection();
        const wallet=useWallet();

        async function getToken(){

              const TokenKeypair=Keypair.generate();
              const lamports=await getMinimumBalanceForRentExemptMint(connection);

              const transaction =new Transaction().add(
                     SystemProgram.createAccount({
                            fromPubkey:wallet.publicKey,
                            newAccountPubkey:TokenKeypair.publicKey,
                            space:MINT_SIZE,
                            lamports,
                            programId:TOKEN_2022_PROGRAM_ID,

                     });

                     createInitializeMint2Instruction(TokenKeypair.publicKey,9,wallet.publicKey.wallet.publicKey,TOKEN_2022_PROGRAM_ID);

              )
                     transaction.feePayer=wallet.publicKey;
                     transaction.recentBlockhash=(await connection.getLatestBlockhash()).blockhash;
                     transaction.partialSign(TokenKeypair);

                     await wallet.sendTransaction(transaction,connection);

                     console.log('Token Mint created At ' + TokenKeypair.publicKey.toBase58());

              

        }

        return <div>
              <input placeholder="Name"></input>
              <input placeholder="Symbol"></input>
              <input placeholder="Image url"></input>
              <input placeholder="Initial Supply"></input>
              <button onClick={getToken} >Create Token</button>
        </div>


 }