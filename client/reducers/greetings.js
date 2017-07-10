import createBoard from './functions/createBoard'

function board (state = [], action) {
  switch (action.type) {
    case 'INIT_BOARD':
      return createBoard(8)
    default:
      return state
  }
}

export default board
