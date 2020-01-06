import { h } from 'preact';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('javascript', js);

import style from './style';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<article class={style.blogcontainer}>
			{getBlogBody(data, isLoading)}
		</article>
	);
};

function CodeBlock(props) {
	let language;
	switch (props.class) {
		case 'lang-js':
			language = 'javascript';
			break;
		case 'lang-html':
			language = 'html';
			break;
		case 'lang-css':
			language = 'css';
			break;
		case 'lang-ts':
			language = 'typescript';
			break;
	}
	return (
		<SyntaxHighlighter language={language} style={ghcolors}>
			{props.children}
		</SyntaxHighlighter>
	);
}

function getBlogBody(data, isLoading) {


	if (isLoading) {
		return (
			<div class={style.loadingPlaceholder}>
				<h1 class={`${style.blogtitle} loading`} >&nbsp;</h1>
				<caption class={`${style.blogsubtitle} loading`}>&nbsp;</caption>
				<div class={style.blogbody}>
					<div class={`${style.loadingBody} loading`} />
					<div class={`${style.loadingBody} loading`} />
					<div class={`${style.loadingBody} loading`} />
				</div>
			</div>
		);
	}

	if (data && data.data) {
		const { details, content } = data.data;
		return (
			<div>
				<h1 class={style.blogtitle}>{details.title}</h1>
				{ details.subtitle && <caption class={style.blogsubtitle}>{details.subtitle}</caption> }
				{ details.cover && <div class={style.blogcover} style={`background-image:url(${details.cover})`} /> }
				<div class={style.blogbody}>
					<Markdown options={{
						overrides: {
							code: {
								component: CodeBlock
							}
						}
					}}
					>{ content }</Markdown>
				</div>
			</div>
		);
	}
}

export default blogs;
