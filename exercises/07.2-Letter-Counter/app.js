let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for(let i = 0; i < par.length; i++){
    if(par[i] != " ")
        if(counts[par[i].toLowerCase()] == undefined)
            counts[par[i].toLowerCase()] = 1;
        else
        counts[par[i].toLowerCase()]++;

}


console.log(counts);