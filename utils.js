const sumOfArray = function sumOfArray (arr) {
    let result = 0
    let i = 0
    let j = arr.length - 1
    for (i, j; i <= j; i++, j--) {
        if (i < j) {
            result += arr[i] + arr[j]
        }
        else if (i = j) {
            result += arr[i]
        }
    }
    return result
}




module.exports = {


    matrixProduct: function (matrixA, matrixB) {
        let numOfRowsA = matrixA.length
        let numOfColumnA = matrixA[0].length
        let numOfColumnB = matrixB[0].length
        let result = []

        for (let i = 0; i < numOfRowsA; i++) {
            result.push([])
        }
        for (let i = 0; i < numOfRowsA; i++) {
            for (let j = 0; j < numOfColumnB; j++) {
                result[i][j] = 0
                for (let r = 0; r < numOfColumnA; r++) {
                    result[i][j] += matrixA[i][r] * matrixB[r][j]
                }
            }

        }
        return result
    },

    matrixSum: function (mat1, mat2) {
        let result = []
        for (let row = 0; row < mat1.length; row++) {
            for (let cell = 0; cell < mat1[row].length; cell++) {
                result.push((mat1[row][cell]) + (mat2[row][cell]))

            }
        }
        return result

    },

    sumOfEachRow: function(mat){
        let result=[]
       for(let row = 0; row < mat.length; row++){
        result.push(sumOfArray(mat[row]))
       }
       return result
     }




}


