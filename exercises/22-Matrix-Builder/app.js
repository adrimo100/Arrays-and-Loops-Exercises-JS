// Code goes here

let matrixBuilder = (dimension) =>{

    matrix = []

    for(i = 0; i < dimension; i++){
        
        matrix.push([]);
        
        for(j = 0; j < dimension; j++){

            if(Math.random() >= 0.5)
                matrix[i].push(1)
            else
            matrix[i].push(0);
        }
    }

    return matrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5))