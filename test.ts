
const func = async ()=>{
    setTimeout(()=>{
        console.log("sesh");
    },3000)
}

let a = await func(); 

console.log("asd");
export {};