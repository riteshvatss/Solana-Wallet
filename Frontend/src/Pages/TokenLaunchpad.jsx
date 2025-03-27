import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import {createMint,getMinimumBalanceForRentExemptAccount,TOKEN_2022_PROGRAM_ID,createInitializeMint2Instruction} from "@solana/spl-token"

function TokenLaunchpad(){
    const {connection}=useConnection();
    const wallet=useWallet();

    async getTok(){
    const TokenKeypair=Keypair.generate();
    const lamports=await getMinimumBalanceForRentExemptAccount(connection);

    const transaction=new Transaction().add(
        SystemProgram.createAccount({
             /** The account that will transfer lamports to the created account */
                fromPubkey: wallet.publicKey,
                /** Public key of the created account */
                newAccountPubkey: TokenKeypair.publicKey,
                /** Amount of lamports to transfer to the created account */
                lamports,
                /** Amount of space in bytes to allocate to the created account */
                space: MINT_SIZE,
                /** Public key of the program to assign as the owner of the created account */
                programId: TOKEN_2022_PROGRAM_ID,
        }),

        createInitializeMint2Instruction(TokenKeypair.publicKey,9,wallet.publicKey,wallet.publicKey,TOKEN_2022_PROGRAM_ID)
    );
    
    transaction.feePayer=wallet.publicKey;
    transaction.recentBlockhash=await connection.getLatestBlockhash().b

}




    return<div> 

    </div>
}

export default TokenLaunchpad