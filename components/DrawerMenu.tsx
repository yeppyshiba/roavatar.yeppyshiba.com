import React, { FunctionComponent } from "react";
import { Box, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import MenuItems from "@models/MenuItems";
import Link from "next/link";

interface DrawerMenuProps {
    title: string;
    onClose: () => void;
}

const DrawerMenu: FunctionComponent<DrawerMenuProps> = ({ title, onClose }) => {
    return (
        <Box
            bg={useColorModeValue("white", "gray.900")}
            borderRight={"1px"}
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h={"full"}
        >
            <Flex h={20} alignItems={"center"} mx={8} justifyContent="space-between">
                <Text fontSize={"2xl"} fontWeight="bold">
                    {title}
                </Text>
                <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
            </Flex>
            {MenuItems.map((entry) => (
                <Flex key={entry.label} align={"center"} p={4} mx={4} borderRadius={"lg"}>
                    <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
                        <Link href={entry.link}>{entry.label}</Link>
                    </Text>
                </Flex>
            ))}
        </Box>
    );
};

export default DrawerMenu;
