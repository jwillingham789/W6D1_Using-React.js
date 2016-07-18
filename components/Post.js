import React from 'react'
import Headline from './Headline'
import Date from './Date'
import Thumbnail from './Thumbnail'

class Post extends React.Component {
  render() {
    return <div>
      <Headline {...this.props}/>
      <Thumbnail {...this.props}/>
      <Date {...this.props}/>
    </div>
  }
}

export default Post
