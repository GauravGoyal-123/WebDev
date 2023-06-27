let getFirstName = (name) => name.split(' ')[0];
const multiplier = {
    arr : [1, 6],
    multiplyBy : 2,
    multiply() {
        const newArr = this.arr.map((val) => {
            return val * this.multiplyBy;
        });
        return newArr;
    }

}
console.log(multiplier.multiply());
console.log(getFirstName("Gaurav Goyal"));