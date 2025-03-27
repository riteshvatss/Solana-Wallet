
import { Keypair } from "@solana/web3.js";
import * as bip39 from "bip39"
import bs58 from 'bs58'
import { useEffect, useState } from "react";

function CreateWallet(){

    const [keypairr,  setKeypairr]=useState();
    const [mnemonicc,setMnemonicc]=useState([]);
    const [regenerate,setRegenerate]=useState(false);
    const [getkeypair,setGetkeypair]=useState(false);

    
    useEffect(()=>{
        const mnemonic =  bip39.generateMnemonic();
        const MnemoicArray=mnemonic.split(" ");
        setMnemonicc(MnemoicArray);

        // arguments: (mnemonic, password)
        const seed = bip39.mnemonicToSeedSync(mnemonic, "");
    
        const keypair1 = Keypair.fromSeed(seed.slice(0, 32));
        setKeypairr(keypair1);

    },[regenerate]);

    useEffect(()=>{
        if(getkeypair){
            alert("publicKey:"+ keypairr.publicKey.toBase58())
            alert("privateKey: "+ bs58.encode(keypairr.secretKey))

        }
        setGetkeypair(false);
    },[keypairr,getkeypair])

    return <><div className="flex flex-col items-center text-white bg-black h-screen w-screen  pt-48 pr-4" >      
            <div className="outline outline-2 outline-white outline-offset-2  rounded-2xl py-2  ">

       
                <div className="font-bold text-2xl text-center pt-4 ">
                    Generated Menomnic
                </div>

                <div className="grid grid-cols-4 pt-10 pl-6 pr-6 pb-6">
                    {mnemonicc.map((ele, index) => (
                    <div className="p-3 text-lg font-bold " key={index} >
                        <div className="outline outline-2 outline-white outline-offset-2 rounded-lg text-center px-2">
                        {ele}
                        </div>
                    </div>
                    ))}
                </div >
                <button onClick={()=>{setGetkeypair(!getkeypair)}} className="text-xl ml-24 mb-6 p-1 text-black font-xl font-bold px-2 bg-slate-300 rounded-2xl pl-4"> GenerateKey</button>
                <button onClick={()=>{setRegenerate(!regenerate)}} className="text-xl  ml-4 mb-6 p-1 text-black font-xl font-bold px-2 bg-slate-300 rounded-2xl "> ReGenerate </button>

          </div>
          </div>
      

          </>
    
    

}

export default CreateWallet; 