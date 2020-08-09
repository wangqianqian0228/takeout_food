// let a = '123456789555'.split('')
// 将一维数组转换为任意长度的二维数组
function twoArray(arr, number) {
    const arrArr = []; //创建一个空的二维数组
    let minArr = [];
    arr.forEach(item => {
        if (minArr.length === number) {
            minArr = [] //又创建了一个空数组，追加到二维数组里面
        }
        if (minArr.length === 0) {
            arrArr.push(minArr)
        }
        minArr.push(item)
    })
    //  return ....
    return arrArr
}
// const result = twoArray(a, 5);
// console.log(result);
//  实现 [[....], [....]]