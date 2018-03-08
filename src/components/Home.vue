<template>
	<v-container>
		<v-layout row wrap class="mb-2">
			<v-flex xs12 sm6 class="text-sm-right text-xs-center">
				<v-btn info large router to="/meetups">Explore Meetups</v-btn>
			</v-flex>
			<v-flex xs12 sm6 class="text-sm-left text-xs-center">
				<v-btn info large router to="/meetup/new">Organize Meetups</v-btn>
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex xs12>
				<v-carousel style="pointer">
					<v-carousel-item
					v-for="meetup in meetups"
					v-bind:src="meetup.imageURL"
					:key="meetup.id"
					@click="onLoadMeetup()"
					>
					<div class="title">
						{{ meetup.title}}
					</div>
					</v-carousel-item>
				</v-carousel>
			</v-flex>
		</v-layout>
		<v-layout row wrap class="mt-2">
			<v-flex xs12 class="text-xs-center">
				<p>
					Join our awesome meetups!
				</p>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script>
	export default {
		data () {
			return {
				meetups: [
					{imageURL: 'https://lonelyplanetimages.imgix.net/mastheads/stock-photo-roman-sunset-77415821.jpg?sharp=10&vib=20&w=1200', id: 'asdasd', title: 'Meetup in Rome'},
					{imageURL: 'https://static1.eurocentres.com/cdn/farfuture/83ZTKH3XL9C4xe4PgBNQC23NFo5vn37MvZ_G4sDQ3Zk/mtime:1505483245/sites/default/files/styles/ec_slider_content_breakpoints_theme_ec_responsive_full_1_5x/public/par_eiffel_1400x650.jpg?itok=gCyXICEG&timestamp=1505483222', id: 'uniqueid2', title: 'Meetup in Paris'},
				]
			}
		},
		methods: {
			onLoadMeetup(id) {
				this.$router.push('/meetups/' + id)
			}
		}
	}
</script>

<style scoped>
	.title {
		position:absolute;
		bottom:50px;
		background-color:rgba(0,0,0,0.5);
		color:#ffffff;
		font-size:2em;
	}
</style>
