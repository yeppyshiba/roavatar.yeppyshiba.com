import React, { FunctionComponent } from "react";
import { Drawer, DrawerContent } from "@chakra-ui/react";
import DrawerMenu from "./DrawerMenu";

interface DrawerContainerProps {
    isOpen: boolean;
    onClose: () => void;
}

const DrawerContainer: FunctionComponent<DrawerContainerProps> = ({ isOpen, onClose }) => {
    return (
        <Drawer
            autoFocus={false}
            blockScrollOnMount={true}
            closeOnEsc={true}
            closeOnOverlayClick={true}
            isOpen={isOpen}
            onClose={onClose}
            placement={"left"}
            returnFocusOnClose={false}
            size={"xs"}
        >
            <DrawerContent>
                <DrawerMenu onClose={onClose} title={"Title"} />
            </DrawerContent>
        </Drawer>
    );
};

export default DrawerContainer;
