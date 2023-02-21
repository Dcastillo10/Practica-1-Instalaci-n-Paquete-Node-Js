//revealind module pattern
let greeting="Hello from greet 5";

let greet=()=>{
    console.log(greeting);
}
let jump=()=>{
    console.log("i'm jumping")
}

let talk=()=>{
    console.log("i'm talking")
}

let code=()=>{
    console.log("i'm coding")
}

let shout=()=>{
    console.log('IM SHOUTING!!')
}


module.exports={
    greet: greet,
    jump: jump,
    talk: talk,
    code: code,
    shout: shout

}