const utils=require("./utils")

const matrixA = [
    [1 , 2 ,3],
    [3,  4 ,6],
]

const matrixB = [
    [2 , 3 ,3],
    [4 , 5 ,6],
    [1 , 2, 3]
]

const mat1=[
    [1 , 2 ,1 ],
    [3 , 4 ,1 ],
]

const mat2=[
    [2 , 3 ,1 ],
    [4 , 5  ,1]
]

const mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(utils.matrixProduct(matrixA,matrixB))

console.log(utils.matrixSum(mat1,mat2))

console.log(utils.sumOfEachRow(mat))