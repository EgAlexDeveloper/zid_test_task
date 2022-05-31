import { render } from "react-dom";
import App from './container/app/App';
import { Provider } from 'react-redux';
import { store } from './container/store';
import { BrowserRouter } from 'react-router-dom';
import './assets/scss/main.scss';

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root")
);
