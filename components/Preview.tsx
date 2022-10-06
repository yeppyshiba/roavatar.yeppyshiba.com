import React from "react";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Canvas, RootState, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RobloxModel = () => {
    const result = useLoader(FBXLoader, "./roblox.fbx");
    return <primitive object={result} />;
};

const onCreated = (state: RootState) => {
    console.log(state.camera);
};

const Preview = () => {
    return (
        <Canvas onCreated={onCreated}>
            <OrbitControls />
            <mesh>
                <ambientLight intensity={1.0} />
                <directionalLight position={[-1, 0, 1]} intensity={0.5} />
                <RobloxModel />
                <meshStandardMaterial attach={"material"} color={0xa3b18a} />
            </mesh>
        </Canvas>
    );
};

export default Preview;
