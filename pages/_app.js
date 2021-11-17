import React , { Fragment, useMemo } from 'react';
import dynamic from "next/dynamic"; 
import { useRouter } from 'next/router'

import '../styles/globals.css';

/**
 * import Design UIlayout
 * such Footer - sidebar - navigation
 */
const LayoutBack = dynamic(() => import("../layout/backoffice/BackLayout"));
const LayoutFront = dynamic(() => import("../layout/frontoffice/FrontLayout"));



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isbackoffice = useMemo(() => router.asPath.includes("/app/"), [router]);


  /**
   * On LOGIN or REGISTER page
   * set default layout
   */
  if(["/signin","/signup"].includes(router.asPath)){
    return <Component {...pageProps} />
  }

  /**
   * Here's we gonna put all context provider
   * such auth context - lang context - settings
   */

  return (
    <Fragment>
      {isbackoffice ? <LayoutBack> <Component {...pageProps} /></LayoutBack>
      : <LayoutFront><Component {...pageProps} /></LayoutFront>}
  </Fragment>)
}

export default MyApp
