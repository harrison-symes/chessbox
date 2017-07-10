import React from 'react'

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cell: props.cell,
      style: {
        backgroundColor: props.cell.isWhite ? "white" : "black" ,
        width: '10vh',
        height: '10vh'
      }
    }
  }
  render() {
    let {style} = this.state
    return (
      <div className='cell' style={style} >
        Cell
      </div>
    )
  }
}

export default Cell
