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
					<p>Engineer on Google chrome team by the day and @preactjs core team member by the night.</p>
					<p>
						Previously, I was a part of Google AMP project and Flipkart's Mobile web team where I worked with the respective project's performance tasks and create developer solutions to provide well lit solutions to developer.
					</p>
					<p> I contribute to some open source projects including preact-cli, workbox, google chrome's critter library and more.</p>
				</div>
			</div>
		</div>
		<div class={style.bio}>
			<p class={style.bioleft}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
				culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<p class={style.bioright}>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
				ab illo inventore veritatis et quasi architecto beatae vitae dicta
				sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
				aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
				dolorem ipsum quia dolor sit amet, consectetur.
			</p>
		</div>
	</div>
);

export default Home;
