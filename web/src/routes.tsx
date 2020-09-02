import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import BookList from './pages/BookList';
import BookForm from './pages/BookForm';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/read" component={BookList}/>
            <Route path="/lend" component={BookForm}/>
        </BrowserRouter>   
    );
};