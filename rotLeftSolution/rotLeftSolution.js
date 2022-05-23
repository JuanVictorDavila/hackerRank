function rotLeft(a, d) {
    const resultArr = a.concat();

    for (let index = 0; index < d; index +=1) {
        const first = resultArr.shift();
        resultArr.push(first);
    }

    return resultArr;
}
const sampleArr = [1 , 2, 3, 4, 5];
console.log(rotLeft(sampleArr, 3));