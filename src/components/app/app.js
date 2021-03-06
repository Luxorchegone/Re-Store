import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../header';
import {
    CartPage,
    HomePage
} from '../pages';
import './app.css';

const App = () => {
    
    return (
        <main className="container">
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/cart" component={CartPage} />
            </Switch>
        </main>
    );
}
export default App;