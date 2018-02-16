import React from 'react';
import ReactDOM from 'react-dom'; 
import { createStore, applyMiddleware,compose } from 'redux';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'; 
import { Provider } from 'react-redux';

import './stylesheets/main.scss';
import { reducers } from './reducers/index';

import App from './components/App';
import Home from './pages/Home';
import UserEdit from './pages/UserEdit';
import NotFound from './pages/NotFound';


let users = []; //variable let karena state nya biar bisa diubah2
for (let i = 1; i < 30; i++){
    users.push({
        id: i,
        username: 'kikan ' + i,
        job: 'karyawan ' + i ,
    })
}

const initial_state = {
    users: {
        list : users,
    },
}

console.log('users',users)

let middleware  = applyMiddleware(routerMiddleware(browserHistory)); //jembatan buat assign value ke store
// console.log("middleware",middleware);
if (process.env.NODE_ENV !== 'production'){
    middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension ());
}

const store = createStore(reducers, initial_state,middleware);
// console.log("store",store);
const history = syncHistoryWithStore(browserHistory,store);
// console.log("history",history);

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {history}>
            <Route path="/" component = {App}>
                <IndexRoute component = {Home}/>
                <Route path = "user-edit(/:id)" component={UserEdit}/>
                <Route path = "*" component = {NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'));
