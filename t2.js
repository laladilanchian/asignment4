const mat1=[
    [1 , 2 ,1 ],
    [3 , 4 ,1 ],
]

const mat2=[
    [2 , 3 ,1 ],
    [4 , 5  ,1]
]
function matrixSum(mat1, mat2){
    let result=[]
    for(let row=0; row<mat1.length; row++){
    for(let cell=0; cell<mat1[row].length; cell++){
        result.push((mat1[row][cell])+(mat2[row][cell])) 
        
    }
    }
    console.log(result)

}
matrixSum(mat1,mat2)