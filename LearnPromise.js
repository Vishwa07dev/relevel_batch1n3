
/**
 * I am going to define a function that returns
 * the promise
 */
function func1() {

    return new Promise(function(resolve, reject){

        setTimeout(() => {

            err = true;
            if(!err){
                resolve();
            }else{
                reject();
            }
            
        }, 2000);
    })
};
/** 
func1().then(()=>{
    console.log("Promise is successfull");
}).catch(()=>{
    console.log("Promise failed");
})
**/



try{
    
    throw "Error";

}catch(err){
    console.log("Inside the catch block");
    console.log(err.message);
}
/** 
try{

    setTimeout(()=>{
        throw "error"
    },3000);

}catch(err){
    console.log("Inside the catch block again");
    console.log(err.message); 
}
**/


async function getHello() {
    return "Hello Students";
}

console.log(getHello());