/*
 * Variables, Data Type, and Typing
 */

let dog = {
    name: "steve",
    color: "brown",
    breed: "pug",
    size: "small",
    bark: function (typeOfBark){
        console.log("bark!");
    },
};

function x(y) {
    y.num = y.num +5;
    console.log(y);
}

let y = {
    name: "Tom",
    num: 10,
};
x(y);
console.log(y);