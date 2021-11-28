const matrixA = [
    [1 , 2 ,3],
    [3,  4 ,6],
]

const matrixB = [
    [2 , 3 ,3],
    [4 , 5 ,6],
    [1 , 2, 3]
]

function matrixProduct(matrixA,matrixB){
let numOfRowsA=matrixA.length
let numOfColumnA=matrixA[0].length
let numOfColumnB=matrixB[0].length
let result=[]

for(let i=0; i<numOfRowsA;i++){
result.push([])
}
for(let i=0; i<numOfRowsA;i++){
    for(let j=0; j<numOfColumnB;j++){
      result[i][j]=0
    for(let r=0;r<numOfColumnA;r++){
        result[i][j]+=matrixA[i][r]*matrixB[r][j] 
    }
}

}
return result
}
console.log(matrixProduct(matrixA,matrixB))