// Add your code here
let lyricsGenerator = (arr) => {

    let output = "";

    let countOnes = 0;

    for(let beat of arr){
        if(beat == 0)
            output += "Boom "
        if(beat == 1){
            countOnes++;
            output += "Drop the base "
        }
            
        if(countOnes == 3){
            countOnes = 0;
            output += "!!!Break the base!!! ";
        }
    }

    return output;

}


// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))