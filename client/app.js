import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root
  )
}
render(App)

// ReactDOM.render(<App />,document.getElementById('root'))
if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default
    // ReactDOM.render(<NextApp/>,document.getElementById('root'))
    render(NextApp)
  })
}