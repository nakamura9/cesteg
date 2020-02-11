import React from 'react';
import ReactDOM from 'react-dom'
import Products from './products'
import News from './news'

ReactDOM.render(<News />, document.getElementById('news-root'))
ReactDOM.render(<Products />, document.getElementById('products-root'))