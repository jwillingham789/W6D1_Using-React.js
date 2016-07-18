import React from 'react'

var imgStyle = {
  float: 'left',
  clear: 'both',
  marginBottom: '10px'
}

class Thumbnail extends React.Component {
  render() {
    return <img style={imgStyle} src={this.props.src} />
  }
}

export default Thumbnail
