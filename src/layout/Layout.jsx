import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

export default function Layout() {
    return (
        <>
            <Header />
            <Sidebar />
            <Content />
        </>
    );
}
