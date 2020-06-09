import { h } from 'preact';
import { useState } from 'preact/hooks';

import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import style from './style.css';

export function FormattedCodeBlock(props) {
	const [component, setComponent] = useState(null);
	if (component) {
		return component;
	}
	if (!props.class) {
		return (<code class={style.inline}>{props.children}</code>);
	}
	throw new Promise(resolve => {
		let language;
		const highlighter = import(
			/* webpackChunkName: "prism-light" */
			'react-syntax-highlighter/dist/esm/prism-light'
		);
		let languageSyntax;
		switch (props.class) {
			case 'lang-js':
				language = 'javascript';
				languageSyntax = import(
					/* webpackChunkName: "prism-lang-js" */
					'react-syntax-highlighter/dist/esm/languages/prism/javascript'
				);
				break;
			case 'lang-html':
				language = 'html';
				languageSyntax = import(
					/* webpackChunkName: "prism-lang-html" */
					'react-syntax-highlighter/dist/esm/languages/prism/markup'
				);
				break;
			case 'lang-css':
				language = 'css';
				languageSyntax = import(
					/* webpackChunkName: "prism-lang-css" */
					'react-syntax-highlighter/dist/esm/languages/prism/css'
				);
				break;
			case 'lang-ts':
				language = 'typescript';
				languageSyntax = import(
					/* webpackChunkName: "prism-lang-ts" */
					'react-syntax-highlighter/dist/esm/languages/prism/typescript'
				);
				break;
			default:
				language = 'markdown';
				languageSyntax = import(
					/* webpackChunkName: "prism-lang-md" */
					'react-syntax-highlighter/dist/esm/languages/prism/markdown'
				);
				break;
		}
		Promise.all([highlighter, languageSyntax]).then(values => {
			const [SyntaxHighlighter, languageHighlighter] = values.map(m => m.default);
			getFormattedCodeBlock(SyntaxHighlighter, languageHighlighter, language, setComponent, resolve, props);
		});
	});
}

function getFormattedCodeBlock(SyntaxHighlighter, languageHighlighter, language, setState, resolve, props) {
	SyntaxHighlighter.registerLanguage(language, languageHighlighter);
	setState(
		<SyntaxHighlighter language={language} style={vs}>
			{props.children}
		</SyntaxHighlighter>
	);
	resolve();
}
