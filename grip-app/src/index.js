import React /*{ lazy, Suspense } */ from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import * as serviceWorker from './serviceWorker/serviceWorker';
import App from './app/App';

//Added Suspense version of code:  12sec on slow 3G for fallback, but slower by 2secs final load. I'm maybe using it wrong. Leaving code here for later--removing one method on deploy.

// const AppSuspense = lazy(() => import('./app/App'));
// const AppFallback = (
// 	<div>
// 		<h1>Please wait. Loading...</h1>
// 	</div>
// );

// ReactDOM.render(
// 	<Suspense fallback={AppFallback}>
// 		<AppSuspense />
// 	</Suspense>,

// 	document.getElementById('root')
// );

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
