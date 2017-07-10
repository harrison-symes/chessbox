import React from 'react'
import {connect} from 'react-redux'
import Cell from './Cell'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: props.size,
      board: props.board || [[]]
    }
  }
  componentDidMount() {
    this.props.dispatch({type: 'INIT_BOARD'})
  }
  componentWillReceiveProps({board}) {
    this.setState({board})
    console.log({board});
  }
  renderCell(cell, key) {
    return <Cell key={key} cell={cell} />
  }
  renderRow(row, key) {
    return <div
      key={key}
      className="row"
      style={{
        display: 'inline-block',
        float: 'left'
      }}
      >
      {row.map(this.renderCell)}
    </div>
  }
  renderBoard() {
    return this.state.board.map(this.renderRow.bind(this))
  }
  render(){
    return (
      <div className="board">
        {this.renderBoard()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
}

export default connect(mapStateToProps)(Board)
