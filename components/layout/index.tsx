import Nav                     from './Nav';
import type { AppProps }       from 'next/app'
import { useState, ReactNode } from 'react';

type propsType = {
    children : ReactNode,
}

function Layout ( props : propsType) {
    const {children} = props;

    return (
        <>
            <Nav />
            {children}
        </>
    )
}

export default Layout;