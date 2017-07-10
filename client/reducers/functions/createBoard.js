export default function createBoard (size) {
  return Array(size).fill(0).map((e, i) => createRow(i, size))
}

const createRow = (i, size) => {
  return Array(size).fill(0).map((el, j) => {
    var isDoubleEven = (i%2 == 0 && j%2 == 0)
    var isDoubleOdd = (i%2 != 0 && j%2 != 0)
    console.log({i, j, isDoubleEven, isDoubleOdd});
    return {
      isWhite: (isDoubleOdd || isDoubleEven)

    }
  })
}
