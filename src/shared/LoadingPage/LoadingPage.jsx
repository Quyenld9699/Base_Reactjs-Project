import React from "react";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import "./loading_page.scss";
export default function LoadingPage() {
    return (
        <div className="bg_loader">
            <div class="loading">
                <div class="loading__square"></div>
                <div class="loading__square"></div>
                <div class="loading__square"></div>
                <div class="loading__square"></div>
                <div class="loading__square"></div>
                <div class="loading__square"></div>
                <div class="loading__square"></div>
            </div>
            <LoadingComponent />
        </div>
    );
}
