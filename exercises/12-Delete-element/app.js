var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below

const deletePerson = (target) => {
    return people.filter((element) => element != target);
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
