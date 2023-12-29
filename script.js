
//Part 1 Stack overflow

let counter = 0;



function increment(counter) {
    counter++;
    console.log(counter);
    return increment(counter);
}

try {
    //counter = increment(counter);

} catch (error) {
    console.log(counter);
    console.log(error);

}

//Part 2 Trampolines

let arrays = [1, 2, 3, [4, 5,[6, 7, 8]],[9, [10]]];

function flattenArray(array) {
    let output = []

    for (let i = 0; i <array.length;i++){
        if(Array.isArray(array[i])){
            return () => 
                output.concat(flattenArray(array[i]));

        }else{
            output.push(array[i]);
        }
    }
    return () =>  output;
    
}

//What even is trampolining
const trampoline = (f, ...args) => {
    let output = [];
    let result = f(...args);
    while (typeof result === "function"){
        result = result();
        output.concat(result);
    }
    return output
}

console.log(trampoline(flattenArray(arrays)));

//part 3 Deferred Execution

let textHolder = document.getElementById("textHolder");

console.log(textHolder);

function primeList(n){
    let newHTML = `<p>Prime Numbers</p>`;

    for (let i = 2;i <=n;i ++){
        if (isPrime(i)){
        newHTML += `<p>${i}</p>`
        }
    }
    textHolder.innerHTML += newHTML;
}


function isPrime(n){
    if(n <= 1){
        return false;
    }
    for(let i = 2;i <= n; i ++){
        if ((n%i) === 0){
            return false;
        }
        return true;
    }
}

for(let i=0 ;i<100 ;i++){
    console.log(i,isPrime(i));
}
console.log("Done");

primeList(10000);
//alert("NUMBERS ARE LISTED")

setTimeout(alert("Numbers Are Listed"),1);