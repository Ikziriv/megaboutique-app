<script>
    // @ts-nocheck
	import { Swipe, SwipeItem } from 'svelte-swipe';
	const swipeConfig = {
		autoplay: true,
		delay: 3000,
		showIndicators: true,
		transitionDuration: 3000,
		defaultIndex: 0
	};
</script>


<div class="w-full h-[336px] realtive rounded-lg">
	<div class="flex justify-center items-center w-full h-[336px] py-0 relative rounded-lg">
		<Swipe {...swipeConfig}>
			<SwipeItem>
				<div class="relative w-full h-auto">
					<img
						src="/img/slide1.jpg"
						class="rounded-lg w-full h-auto"
						alt=""
					/>
				</div>
			</SwipeItem>
			<SwipeItem>
				<div class="relative w-full h-auto">
					<img
						src="/img/slide2.jpg"
						class="rounded-lg w-full h-auto"
						alt=""
					/>
				</div>
			</SwipeItem>
			<SwipeItem>
				<div class="relative w-full h-auto">
					<img
						src="/img/slide3.jpg"
						class="rounded-lg w-full h-auto"
						alt=""
					/>
				</div>
			</SwipeItem>
			<SwipeItem>
				<div class="relative w-full h-auto">
					<img
						src="/img/slide4.jpg"
						class="rounded-lg w-full h-auto"
						alt=""
					/>
				</div>
			</SwipeItem>
		</Swipe>
	</div>
</div>

<style>
</style>