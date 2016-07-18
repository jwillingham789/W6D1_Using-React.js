import React from 'react'

var headerStyle = {
  display: 'inline-block',
  marginLeft: '5px'
}

class Headline extends React.Component {
  render() {
    return <h1 style={headerStyle}><a href='#'>{this.props.text}</a></h1>
  }
}

export default Headline
