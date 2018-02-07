<template>
	<section id="contact" class="hero section is-light is-bold">
		<div class="columns is-variable is-centered">
			<div class="column is-narrow">
				<div class="columns is-variable is-8 is-vcentered">
					<div class="column is-narrow has-text-centered">
						<div class="columns is-variable">
							<div class="column is-narrow" v-for="item in items" >
								<a class="" :href="item.link" target="_blank"><span :class="item.class" class="fa-5x fa is-mobile"></span></a>
							</div>
						</div>
					</div>
					<div class="column is-narrow has-text-centered">
						<div class="">
							<h3 class="title is-2">Get in Touch!</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'contact',
	data() {
		return {
			items: [{
				link: 'https://www.xing.com/profile/Falko_Moeller2',
				class: 'fa-xing'
			}, {
				link: 'https://www.linkedin.com/in/falkomoeller',
				class: 'fa-linkedin'
			}, {
				link: 'mailto:contact@falkomoeller.de',
				class: 'fa-envelope'
			}],
		};
	},
}
</script>