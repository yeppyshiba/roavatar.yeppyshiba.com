import React, { FunctionComponent } from "react";
import Head from "next/head";

interface MetaProps {
    title?: string;
    description?: string;
}

const Meta: FunctionComponent<MetaProps> = ({ title, description }) => {
    return (
        <Head>
            <title>{title || "Create Next App"}</title>
            <meta name="description" content={description || "Generated by create next app"} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default Meta;