import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";
import "./index.scss";
import LoadingPage from "./shared/LoadingPage/LoadingPage";

ReactDOM.render(
    <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>
    </BrowserRouter>,
    document.getElementById("root")
);
