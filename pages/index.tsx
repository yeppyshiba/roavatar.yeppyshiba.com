import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import Path from "@enums/Path";
import Meta from "@components/Meta";

const Home: NextPage = () => {
    return (
        <>
            <Meta />
            <Flex
                w={"full"}
                h={"100vh"}
                backgroundImage={
                    "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
                }
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
            >
                <VStack
                    w={"full"}
                    justify={"center"}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
                >
                    <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
                        <Text
                            color={"white"}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                        >
                            Roblox Avatar Maker
                        </Text>
                        <Stack direction={"row"} align={"center"}>
                            <Link href={Path.ADD}>
                                <Button bg={"blue.400"} rounded={"full"} color={"white"} _hover={{ bg: "blue.500" }}>
                                    Generate
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </VStack>
            </Flex>
        </>
    );
};

export default Home;
