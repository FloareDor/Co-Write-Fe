import "@/styles/globals.css";
import React from 'react';
import type { AppProps } from 'next/app';
import { GoogleOAuthProvider } from "@react-oauth/google";


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GoogleOAuthProvider clientId='973825955462-fv2qg0cqp65ad8eq7bnp7a65if4frmmj.apps.googleusercontent.com'>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
};

    export default App;