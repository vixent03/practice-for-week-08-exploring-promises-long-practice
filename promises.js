/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function num1 (){
    return 1
}
async function num2(){
    return 2

}
console.log('num1',num1())
console.log('num2',num2())
num2().then(result => console.log(result));



/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
async function waiting(){
    const value = await  num2()
    console.log('waiting',value)
}



/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here
async function waitForPromise(){
    const promise = new Promise((reslove) =>{
        setTimeout(() => {
            reslove('plenty')
        },1000)
    })
    const result =await promise
    console.log(`my promise is ${result}`)
}

waitForPromise()




/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
new Promise((resolve) =>{
    setTimeout(() => {
        resolve('too plenty stop playing')
    },2000)
}).then(resolved => console.log('my other promise is',resolved))



/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms){
     return new Promise(resolve => setTimeout(resolve,ms))
}
(async function testwait(){
    await wait(2000)
    console.log('waited 2 seconds')
})();



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const tryRandomPromise = (random) => new Promise((resolve,reject) =>{
    if(random >= 0.5){
        resolve("successful !!!")
    }else{
        reject('random error')
    }
})

for(let i = 0; i < 10; i++){
    const random = Math.random()
    wait(2000 + random * 1000)
    .then(() => tryRandomPromise(random))
    .then(result => console.log('try random #',i,result))
    .catch(error => console.error('try random #',i, error))
}



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const tryAgain = async(i) =>{
     const random = Math.random()
    wait(4000 + random + 1000 )
    try{
        const result = await tryRandomPromise(random)
        console.log('try again #',i, result)
    }catch(error){
        console.error('try again #',i, error)
    }

}
console.log('------------phase 7 -------------')
for(let i = 0; i < 10; i++){
    tryAgain(i)
}



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
