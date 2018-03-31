import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { lightBlue, pink } from 'material-ui/colors'
import reducers from './reducer'
// import './config/loading'
const theme = createMuiTheme({
  palette: {
    primary: 
    {
      light: '#757ce8',
      main: '#29B6F6',
      dark: '#039BE5',
      contrastText: '#fff',
    },
    secondary:{
      main:'#2196F3',
      contrastText: '#fff',
    },
    accent: pink,
    type: 'light',
  },
}
)
const store=createStore(reducers,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

const root = document.getElementById('root')
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider  store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Component />
        </MuiThemeProvider>
      </BrowserRouter>
      </Provider>
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