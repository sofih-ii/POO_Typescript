console.log(Math.PI);
console.log(Math.max(1, 2, 4, 6, 7));

class MyMath {
    static readonly PI = 3.1416;

    static max(...numbers : number[]){
        return numbers.reduce((max, item)=> max > item ? max: item)
    }
}
//const math = new MyMath();
console.log('MyMath.PI',MyMath.PI);
console.log('MyMath.max',MyMath.max(1, 2, 3, 4));

const numbers1 = [-1, -2, -3, -4, -5, -6, -7, -8, -9]
console.log('MyMath.max',MyMath.max(...numbers1));
