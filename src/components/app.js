import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import Header from './header';
import GAnalytics from 'ganalytics';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Blogs from '../routes/blogs';
import Blog from '../routes/blog';
import Contact from '../routes/contact';
import ContactSuccess from '../routes/contact-success';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		if (typeof window !== 'undefined') {
			window.ga.send('pageview');
		}
	};

	constructor() {
		super();
		if (typeof window !== 'undefined') {
			window.ga = new GAnalytics('UA-91863394-2', { aid: 1 });
		}
	}

	render(props) {
		return (
			<Provider value={props}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Blogs path="/blogs/" />
						<Blog path="/blog/:name" />
						<Contact path="/contact/" />
						<ContactSuccess path="/contact/success" />
					</Router>
				</div>
			</Provider>
		);
	}
}
