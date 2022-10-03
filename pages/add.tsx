import React from "react";
import type { NextPage } from "next";
import Layout from "@components/Layout";
import { Box, Flex } from "@chakra-ui/react";
import Meta from "@components/Meta";

const Add: NextPage = () => {
    return (
        <>
            <Meta />
            <Layout>
                <Flex bg={"blue"} alignItems={"center"} justifyContent={"center"}>
                    <Box flex={3}>draw</Box>
                    <Box flex={1} display={{ base: "none", md: "flex" }} bg={"red"}>
                        preview
                    </Box>
                </Flex>
            </Layout>
        </>
    );
};

export default Add;
