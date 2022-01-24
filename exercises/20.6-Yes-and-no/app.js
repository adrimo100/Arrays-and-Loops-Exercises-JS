let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let wikiWoko = (value) =>{
    
    let output = value == 0 ? "woko" : "wiki";

    return output;
}

let newArray = theBools.map(wikiWoko);

console.log(newArray);