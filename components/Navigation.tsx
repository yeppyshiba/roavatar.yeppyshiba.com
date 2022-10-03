import React from "react";
import {
    useDisclosure,
    Flex,
    IconButton,
    Button,
    Text,
    useColorMode,
    useColorModeValue,
    useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import DrawerContainer from "./DrawerContainer";

const Navigation = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onClose, onToggle } = useDisclosure();

    return (
        <>
            <Flex
                as={"header"}
                bg={useColorModeValue("white", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                w={"full"}
                h={16}
                px={{ base: 4 }}
                py={{ base: 2 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
                position={"fixed"}
                zIndex={"docked"}
            >
                <Flex display={{ base: "flex", md: "none" }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>

                <Flex flex={1} mx={4} justify={"start"}>
                    <Text
                        textAlign={useBreakpointValue({ base: "center", md: "left" })}
                        fontFamily="heading"
                        color={useColorModeValue("gray.800", "white")}
                    >
                        Logo
                    </Text>
                </Flex>

                <Flex alignItems={"center"}>
                    <Button variant="solid" colorScheme={"teal"} size={"sm"} mr={4} leftIcon={<AddIcon />}>
                        Add
                    </Button>
                    <Button variant="solid" colorScheme={"teal"} size={"sm"} onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>

            <DrawerContainer isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Navigation;
