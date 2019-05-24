import React, {Component} from "react";
import configureStore from "./app/configureStore";
import {Provider} from 'react-redux';

import EntryPoint from './app/navigation/Router';

const App = props => {
    return (
        <Provider store={configureStore()}>
            <EntryPoint />
        </Provider>
    )
};

export default App;