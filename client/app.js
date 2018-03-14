import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { lightBlue, pink } from 'material-ui/colors'


const theme = createMuiTheme({
  palette: {
    primary: 
    {
      light: '#757ce8',
      main: '#29B6F6',
      dark: '#039BE5',
    },
    secondary:{
      main:'#0321E5'
    },
    accent: pink,
    type: 'light'
  },
  
})
const root = document.getElementById('root')
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Component />
        </MuiThemeProvider>
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