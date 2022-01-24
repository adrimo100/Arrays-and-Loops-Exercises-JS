let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

const mergeTwoList = (arr) => {

    let odd = [];
    let even = [];

    let total = []

    arr.forEach(number => {
        if(number % 2 == 0)
            even.push(number);
        else
            odd.push(number);
    });

    odd.forEach(element => {
        total.push(element);
    });

    even.forEach(element => {
        total.push(element);
    });

    return total;

}


console.log(mergeTwoList(list_of_numbers))
