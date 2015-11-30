/**
 * Created by ronnie on 15/11/20.
 */
import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./containers/App.js";
import todoApp from "./reducers/reducers";

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('content')
);