import React from "react";
import type { NextPage } from "next";
import Layout from "@components/Layout";
import { Flex } from "@chakra-ui/react";
import Meta from "@components/Meta";
import Preview from "@components/Preview";

const Add: NextPage = () => {
    return (
        <>
            <Meta />
            <Layout>
                <Flex pt={16} h={"100vh"} alignItems={"stretch"}>
                    <Flex flex={3}>draw</Flex>
                    <Flex flex={1} display={{ base: "none", md: "flex" }}>
                        <Preview />
                    </Flex>
                </Flex>
            </Layout>
        </>
    );
};

export default Add;
