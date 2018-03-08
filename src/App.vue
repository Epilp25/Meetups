<template >
	<v-app id="">
		<v-navigation-drawer v-model="drawer" fixed class="hidden-md-and-up">
		  <v-list>
		    <v-list-tile
				v-for="item in menuItems"
				:key="item.text"
				router
				:to="item.link">
		      <v-list-tile-action>
		        <v-icon>{{ item.icon }}</v-icon>
		      </v-list-tile-action>
		      <v-list-tile-content>
		        <v-list-tile-title>{{ item.text }}</v-list-tile-title>
		      </v-list-tile-content>
		    </v-list-tile>
		  </v-list>
		</v-navigation-drawer>
		<v-toolbar class="primary" dark>
			<v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
			<v-toolbar-title>
				<router-link to="/" tag="span" style="cursor:pointer;">
					DevMeetup
				</router-link>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="visible-xs-and-up hidden-sm-and-down">
			<v-btn flat
			v-for="item in menuItems"
			:key="item.text"
			router
			:to="item.link">
				{{ item.text }}
			</v-btn>
			</v-toolbar-items>
		</v-toolbar>


		<v-content>
			<v-container fluid>
				<v-layout >
					  <router-view></router-view>
				</v-layout>
			</v-container>
		</v-content>
		<v-btn
			fab
			bottom
			right
			color="pink"
			dark
			fixed
			@click.stop="dialog = !dialog"
		>
			<v-icon>message</v-icon>
		</v-btn>
		<v-dialog v-model="dialog" width="800px">
			<v-card>
				<v-card-title
					class="grey lighten-4 py-4 title"
				>
					Need Help With a Project?
				</v-card-title>
				<v-container grid-list-sm class="pa-4">
					<v-layout row wrap>
						<v-flex xs12 align-center justify-space-between>
							<v-layout align-center>
								<v-avatar size="40px" class="mr-3">
									<img
										src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
										alt=""
									>
								</v-avatar>
								<v-text-field
									placeholder="Name"
								></v-text-field>
							</v-layout>
						</v-flex>
						<v-flex xs6>
							<v-text-field
								prepend-icon="business"
								placeholder="Company"
							></v-text-field>
						</v-flex>
						<v-flex xs6>
							<v-text-field
								placeholder="Job title"
							></v-text-field>
						</v-flex>
						<v-flex xs12>
							<v-text-field
								prepend-icon="mail"
								placeholder="Email"
							></v-text-field>
						</v-flex>
						<v-flex xs12>
							<v-text-field
								type="tel"
								prepend-icon="phone"
								placeholder="(000) 000 - 0000"
								mask="phone"
							></v-text-field>
						</v-flex>
						<v-flex xs12>
							<v-text-field
								prepend-icon="notes"
								placeholder="Project Info"
                multi-line
							></v-text-field>
						</v-flex>
					</v-layout>
				</v-container>
				<v-card-actions>
					<v-btn flat color="primary">More</v-btn>
					<v-spacer></v-spacer>
					<v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
					<v-btn flat @click="dialog = false">Save</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-footer class="primary" app>
	    <span class="white--text">&copy; 2017</span>
	  </v-footer>
	</v-app>
</template>

<script>
  export default {
	data: () => ({
    dialog: false,
    drawer: null,
    menuItems: [
      { icon: 'supervisor_account', text: 'View Meetups', link: '/meetups' },
      { icon: 'room', text: 'Organize Meetup', link: 'meetup/new' },
      { icon: 'person', text: 'Profile', link: '/profile' },
      { icon: 'face', text: 'Sign Up ', link: '/signup' },
      { icon: 'lock_open', text: 'Sign in', link: '/signin'}
    ]
    }),
  	props: {
  		source: String
  	}
  }
</script>
