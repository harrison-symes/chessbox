import React from 'react'
import Cell from './Cell'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size = props.size,
      board = this.createBoard(size)
    }
  }
  
  createBoard(size) {
    this.setState({board: this.newBoard(size)})
  }
  newBoard(size) {
    let {size, board} = this.state
    return Array(size).fill(0).map(() => Array(size))
  }
  renderCell(cell) {
    return <Cell cell={cell} />
  }
  renderRow(row) {
    return row.map(renderCell)
  }
  renderBoard() {
    return this.board.map(renderRow)
  }
  render(){
    return (
      <div className="board">
        {this.renderBoard()}
      </div>
    )
  }
}
