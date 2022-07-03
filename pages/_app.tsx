import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutComponent from "../components/layout.component";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}