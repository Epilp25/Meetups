<template>
<v-app>
<!-- Mobile Nav -->
<v-navigation-drawer v-model="drawer" fixed app>
  <v-list>
    <v-list-tile v-for="item in menuItems" :key="item.title" @click="">
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>
<!-- Desktop Nav -->
  <v-toolbar class="primary" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>DevMeetup</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-for="item in menuItems" :key="item.title" @click="">
    <v-list-tile slot="activator">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ item.title }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
    <v-btn flat>
      <v-icon>{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-container fluid fill-height>

  </v-container>

  <main>
    <router-view> </router-view>
  </main>
  <v-footer class="primary" app>
    <span class="white--text">&copy; 2017</span>
  </v-footer>
</v-app>
</template>
