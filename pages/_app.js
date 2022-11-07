import '../styles/globals.css'
import Layout from './componets/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'next-themes'
import Navigation from './componets/Navigation';

function MyApp({ Component, pageProps }) {
  return (

    <ThemeProvider>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </ThemeProvider>
  );

}

export default MyApp
