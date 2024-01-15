import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../assets/scss/theme.scss";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/slices";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import dynamic from "next/dynamic";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import VerticalLayout from "@/Layouts/VerticalLayout";

// const route11 = dynamic(() => import("react-router-dom").then((mod) => mod.BrowserRouter), {
// ssr: false
// });

// const store = configureStore({ reducer: rootReducer, devTools: true });
// export function Home({ Component, pageProps }: AppProps) {
//   let [loaded, setLoaded] = useState(false)
// const MyComponentWithLib = dynamic(() => import('react-router-dom').then(mod=>{
//   // setLoaded(true);
//   return mod.BrowserRouter}), { ssr: false });
//   console.log('set loaded true', loaded, MyComponentWithLib);
//   return (
//     <React.Fragment>
//       <h2>test</h2>
//      {true && <BrowserRouter basename={process.env.PUBLIC_URL}>
//         <Provider store={store}>
//           <Component {...pageProps} />
//         </Provider>
//       </BrowserRouter>}
//     </React.Fragment>
//   );
// }

const DynamicHeader = dynamic(() => import("../../src/pages/app"), {
  ssr: false,
});

export default function App({ Component, pageProps }: any) {
  const router = useRouter();

  return (
    <>
    <VerticalLayout>
      <DynamicHeader pageProps={pageProps} Component={Component} />
      </VerticalLayout>
    </>
  );
}

// const DynamicHeader = (await  import('react-router-dom').default, {
//   loading: () => <p>Loading...</p>,
// })

// export default function Home() {
//   return <DynamicHeader />
// }
