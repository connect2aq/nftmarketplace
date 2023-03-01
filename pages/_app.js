import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

//internal imports
import { Footer, Navbar } from '@/components';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar></Navbar>
        <Component {...pageProps} />
        <Footer></Footer>
      </div>

      <Script
        src="https://kit.fontawesome.com/165a6340e3.js"
        crossorigin="anonymous"
      ></Script>
    </ThemeProvider>
  );
}
