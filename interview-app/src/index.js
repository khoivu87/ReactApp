import React from 'react';
import ReactDOM from 'react-dom';
import ShopApp from './Components/ShopApp';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    (
        <BrowserRouter>
            <ShopApp />
        </BrowserRouter>
    )
    ,
    document.getElementById('root')
);