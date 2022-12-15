
function receivesAFunction (calllback){
    calllback();
}


function returnsANamedFunction(){
    return function sayName (){
        console.log(`Hi, I am Martha and I am a named function!`)
    }
}

function returnsAnAnonymousFunction(){
    return function(){ 1 + 1 }
}


