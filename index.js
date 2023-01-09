const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const flatArr = matrix.reduce((acc,val)=>{
    return acc.concat(val)
},[])

console.log(flatArr)