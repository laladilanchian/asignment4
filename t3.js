const arr=[1,2,3,5]

function sumOfArray(arr){
    let result = 0
    let i=0
    let j=arr.length-1
for(i, j; i<=j; i++, j--){
   if(i<j){
        result += arr[i]+arr[j]
   }
else if(i=j){
    result+=arr[i]
}
}
return result
}
console.log(sumOfArray(arr))

const mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const utils =

function sumOfEachRow(mat){
   let result=[]
  for(let row = 0; row < mat.length; row++){
   result.push(sumOfArray(mat[row]))
  }
  return result
}
console.log(sumOfEachRow(mat))