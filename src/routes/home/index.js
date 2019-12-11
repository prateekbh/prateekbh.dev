import { h } from "preact";
import style from "./style";

const Home = () => (
	<div class={style.home}>
		<div class={style.about}>
			<div class={style.imageContainer}>
				<img class={style.image} src="/assets/profile.jpg" />
			</div>
			<div class={style.quote}>
				<div class={style.details}>
					Hey 👋🏻! I am Prateek Bhatnagar.
					<p>Engineer on Google chrome team by the day and <a href="https://github.com/preactjs/preact">@preactjs</a> core team member by the night.</p>
					<p>
						Previously, I was a part of the <a href="https://github.com/ampproject/amphtml/">AMP project</a> and <a href="https://flipkart.com">Flipkart</a>'s Mobile web team where I worked with the respective project's performance tasks and create developer solutions to provide well lit solutions to developer.
					</p>
					<p> I contribute to some open source projects including <a href="https://github.com/preactjs/preact-cli">preact-cli</a>, <a href="https://github.com/GoogleChrome/workbox">workbox</a>, google chrome's critter library and <a href="https://github.com/prateekbh">more.</a></p>
				</div>
			</div>
		</div>
		<section class={style.social}>
			<span>Get in touch</span>
			<img class={style.icon} src='/assets/twitter.png' />
			<img class={style.icon} src='/assets/github.png' />
			<img class={style.icon} src='/assets/instagram.png' />
			<img class={style.icon} src='/assets/linkedin.png' />
		</section>
	</div>
);

export default Home;
