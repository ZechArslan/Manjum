// import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import "../assets/scss/theme.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/slices";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import dynamic from "next/dynamic";
import dynamic from "next/dynamic";
// const route11 = dynamic(() => import("react-router-dom").then((mod) => mod.BrowserRouter), {
  // ssr: false
// });

const store = configureStore({ reducer: rootReducer, devTools: true });
export default function Home({ Component, pageProps }: any) {
  let [loaded, setLoaded] = useState(false)
const MyComponentWithLib = dynamic(() => import('react-router-dom').then(mod=>{
  // setLoaded(true);
  return mod.BrowserRouter}), { ssr: false });
  return (
    <React.Fragment>
     {true && <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </BrowserRouter>}
    </React.Fragment>
  );
}