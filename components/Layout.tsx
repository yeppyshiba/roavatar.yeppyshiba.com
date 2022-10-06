import React, { FunctionComponent, PropsWithChildren } from "react";
import Navigation from "./Navigation";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
};

export default Layout;
