import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { GlobalStyles } from './assets';
import { ToastNote } from './layouts';
import { router } from './routes';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AnimatePresence mode='wait'>
        <RouterProvider router={router} />
      </AnimatePresence>
      <Helmet>
        <link href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap' rel='stylesheet' />
      </Helmet>
      <ToastNote />
    </ThemeProvider>
  )
}

export default App;