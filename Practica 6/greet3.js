function Greetr(){
    this.greeting = "hello from the function constructor";
    this.greet=function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr;