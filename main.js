import React from 'react'
import ReactDOM from 'react-dom'
import Post from './components/Post'
import Headline from './components/Headline'
import Date from './components/Date'
import Thumbnail from './components/Thumbnail'

ReactDOM.render(<div>
    <Post src="https://unsplash.it/100/100?random" text="Awesome Header" date="2016-07-11"/>
    <Post src="https://unsplash.it/100/100?random" text="Can You Believe It?" date="2016-07-12"/>
    <Post src="https://unsplash.it/100/100?random" text="This is React" date="2016-07-13"/>
    <Post src="https://unsplash.it/100/100?random" text="It's So Easy" date="2016-07-14"/>
    <Post src="https://unsplash.it/100/100?random" text="Wowowow It's Cool" date="2016-07-15"/>
</div>,
document.getElementById('posts'))
