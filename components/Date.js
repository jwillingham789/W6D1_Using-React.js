import React from 'react'

var dateStyle = {
  marginLeft: '5px'
}

class Date extends React.Component {
  render() {
    return <h4 style={dateStyle}>{this.props.date}</h4>
  }
}

export default Date
