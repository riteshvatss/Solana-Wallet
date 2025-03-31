import express from "express"
const app=express();
const port =3000;
import jwt from "jsonwebtokem";
const secretKey = 'abcde12345';
import { Keypair,SystemProgram,Transaction } from "@solana/web3.js";
import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient();

app.post("/sigup",(req,res)=>{

    const First_name=req.headers.first_name;
    const last_name=req.headers.last_name;
    const Mobile_number=req.headers.mobile_numer;
    const Password=req.headers.Password;
    const k=Keypair.gen erate();
    const Public_key=k.publicKey;
    const Private_key=secretKey()

    prisma.user.create({
        data:{
            First_name,
            Mobile_number,
            Last_name,




        }

    })


     

    const token = jwt.sign({

        }, secretKey, { expiresIn: '1h' });
    
        console.log(token);

})

app.listen(port,()=>{
 
    console.log("running On "+port+"the pub key is"+ p);
})