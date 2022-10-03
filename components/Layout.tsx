import React, { FunctionComponent, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import Navigation from "./Navigation";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Navigation />
            <Box pt={16} minH={"100vh"}>
                {children}
            </Box>
        </>
    );
};

export default Layout;
