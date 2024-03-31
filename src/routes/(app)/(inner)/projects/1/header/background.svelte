<script lang="ts">
	import { house } from '$1/graphics';
	import { page } from '$app/stores';
	import type { WpPost } from '$lib/wp';

	type HeroVideo = {
		mp4: string;
		webm: string | undefined;
	};

	type HeroVideos = HeroVideo[];

	let heroVideos: HeroVideos;
	let bgMp4: string | undefined;
	let bgWebm: string | undefined;

	$: bgMp4 = $page.data?.post?.hero_video_src;
	$: bgWebm = $page.data?.post?.hero_video_webm_src;
	$: heroVideos = $page.data.heroVideos;

	function playlist(node: HTMLDivElement, backgrounds: [string, string | undefined]) {
		let playing = 0;

		function play() {
			const videoEle: HTMLCollection = node.children;

			if (playing > videoEle.length - 1) playing = 0;
			const playingElement = videoEle[playing] as unknown as HTMLVideoElement;
			playingElement.classList.remove('hidden');
			for (const e of videoEle) {
				if (e !== playingElement && e instanceof HTMLVideoElement) {
					e.classList.add('hidden');

					e.pause();
					e.currentTime = 0;
				}
			}

			playingElement.play();
			playingElement.addEventListener('ended', ended);

			function ended() {
				playingElement.removeEventListener('ended', ended);

				playingElement.currentTime = 0;
				playingElement.pause();
				playing++;

				play();
			}

			return () => {
				playingElement.removeEventListener('ended', ended);
				playingElement.pause();
				playingElement.currentTime = 0;
			};
		}

		let kill = play();

		return {
			update(bg: [string, string | undefined]) {
				kill();
				kill = play();
			}
		};
	}

	function featuredImage(post: WpPost) {
		let media: string = '';

		try {
			media =
				post._embedded?.['wp:featuredmedia']?.[0]?.media_details.sizes?.large?.source_url ||
				'';
			if (!media) {
				media = post._embedded?.['wp:featuredmedia']?.[0].source_url || '';
			}
		} catch (_) {
			media = '';
		}

		return media || house;
	}

	function videos(backgrounds: [string, string | undefined]): HeroVideos {
		const [background, webm] = backgrounds;
		const _heroVideos = [...heroVideos];

		// Remove last two videos
		const lastVideo: HeroVideo | undefined = _heroVideos.pop();
		const secondToLast: HeroVideo | undefined = _heroVideos.pop();

		_heroVideos.push({ mp4: background, webm });

		if (secondToLast) _heroVideos.push(secondToLast);
		if (lastVideo) _heroVideos.push(lastVideo);

		return _heroVideos;
	}
</script>

{#if bgMp4}
	<div class="bg-blue-500 absolute inset-0 overflow-hidden" use:playlist={[bgMp4, bgWebm]}>
		{#each videos([bgMp4, bgWebm]) as { mp4, webm } (mp4)}
			<video muted class="w-full h-full object-cover">
				<source src={mp4} type="video/mp4" />

				{#if webm}
					<source src={webm} type="video/webm" />
				{/if}
			</video>
		{/each}
	</div>
{:else}
	<div
		class="background absolute inset-0 mix-blend-multiply"
		style="--bg: no-repeat center/cover url('{featuredImage($page.data.post)}');"
	/>
{/if}

<style lang="postcss">
	.background {
		background:
			linear-gradient(180deg, rgba(0, 41, 70, 0.78) 7.65%, rgba(0, 81, 138, 0.82) 100%),
			var(--bg, transparent),
			lightgray 50% / cover no-repeat;
	}
</style>
