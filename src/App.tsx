import React from "react";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "@/stores";
import AppRoutes from "@/routes";

function App() {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <AppRoutes />
            </ChakraProvider>
        </Provider>
    );
}

export default App;
