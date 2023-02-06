import '@/styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab)

config.autoAddCss = false; 


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
