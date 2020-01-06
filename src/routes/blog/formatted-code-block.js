import { h } from 'preact';
import { useState } from 'preact/hooks';

import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function FormattedCodeBlock(props) {
	const [component, setComponent] = useState(null);
	if (component) {
		return component;
	}
	throw new Promise(resolve => {
		let language;
		const highlighter = import('react-syntax-highlighter/dist/esm/prism-light');
		let languageSyntax;
		switch (props.class) {
			case 'lang-js':
				language = 'javascript';
				languageSyntax = import('react-syntax-highlighter/dist/esm/languages/prism/javascript');
				break;
			case 'lang-html':
				language = 'html';
				languageSyntax = import('react-syntax-highlighter/dist/esm/languages/prism/markup');
				break;
			case 'lang-css':
				language = 'css';
				languageSyntax = import('react-syntax-highlighter/dist/esm/languages/prism/css');
				break;
			case 'lang-ts':
				language = 'typescript';
				languageSyntax = import('react-syntax-highlighter/dist/esm/languages/prism/typescript');
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
		<SyntaxHighlighter language={language} style={ghcolors}>
			{props.children}
		</SyntaxHighlighter>
	);
	resolve();
}
