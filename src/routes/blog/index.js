import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js/lib/highlight';
import ts from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/htmlbars';
import css from 'highlight.js/lib/languages/css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', ts);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);

import style from './style';
import 'highlight.js/styles/github.css';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<article class={style.blogcontainer}>
			{getBlogBody(data, isLoading)}
		</article>
	);
};

function CodeBlock(props) {
	return <pre><code>{props.children}</code></pre>
}

function getBlogBody(data, isLoading) {
	let blogDiv;
	useEffect(() => {
		if (blogDiv) {
			//hljs.configure({ useBR: true });
			setTimeout(() => {
				blogDiv.querySelectorAll('code').forEach((block) => {
					hljs.highlightBlock(block);
				});
			}, 100);
		}
	}, []);


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
				<div class={style.blogbody} ref={c => blogDiv = c}>
					<Markdown options={{
            overrides: {
                code: {
                    component: CodeBlock,
                },
            },
        }}>{ content }</Markdown>
				</div>
			</div>
		);
	}
}

export default blogs;
