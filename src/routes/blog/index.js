import { h } from 'preact';
import { Suspense } from 'preact/compat';
import { usePrerenderData } from '@preact/prerender-data-provider';
import Markdown from 'markdown-to-jsx';
import { FormattedCodeBlock } from './formatted-code-block';

import style from './style';

const blogs = (props) => {
	const [data, isLoading] = usePrerenderData(props);
	return (
		<article class={style.blogcontainer}>
			{getBlogBody(data, isLoading)}
		</article>
	);
};

function CodeBlock(props) {
	if (typeof window === "undefined") {
		return (<pre><code>{props.children}</code></pre>);
	}
	return (
		<Suspense fallback={<pre><code>{props.children}</code></pre>}>
			<FormattedCodeBlock {...props} />
		</Suspense>
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
							},

						}
					}}
					>{ content }</Markdown>
				</div>
			</div>
		);
	}
}

export default blogs;
