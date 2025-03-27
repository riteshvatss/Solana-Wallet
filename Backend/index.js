import express from express;
const app=new express();
app.litsen(3000,()=>{
    console.log("hello");
})