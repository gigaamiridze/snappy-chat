import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { GlobalStyles } from './assets';
import { router } from './routes';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyles />
      <Helmet>
        <link href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap' rel='stylesheet' />
      </Helmet>
    </ThemeProvider>
  )
}

export default App;