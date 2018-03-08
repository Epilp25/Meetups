<template>
	<v-container>
		<v-layout row wrap>
			<v-flex text-center>
			<v-card dark>
				<v-container fluid>
					<v-layout row>
						<v-flex xs5>
							<v-card-media
								 src="https://static1.eurocentres.com/cdn/farfuture/83ZTKH3XL9C4xe4PgBNQC23NFo5vn37MvZ_G4sDQ3Zk/mtime:1505483245/sites/default/files/styles/ec_slider_content_breakpoints_theme_ec_responsive_full_1_5x/public/par_eiffel_1400x650.jpg?itok=gCyXICEG&timestamp=1505483222"
								 height="125px"
							 ></v-card-media>
						</v-flex>
						<v-flex xs7 sm8 md9>
							<v-card-title primary-title>
								<div>
									<h3 class="headline white--text">My Meetup</h3>
									<div>4/3/2018</div>
								</div>
							</v-card-title>
							<v-card-actions>
								<v-btn flat to="/meetups/1">
									<v-icon left>arrow_forward</v-icon>
									View Meetup</v-btn>
							</v-card-actions>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
