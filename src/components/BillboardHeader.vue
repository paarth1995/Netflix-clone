<template>
<div>
    <v-toolbar flat depressed style="background-color: transparent">
        <v-toolbar-title style="cursor:pointer" >
               <router-link to="/" class="display-1 font-weight-medium error--text"> NETFLIX</router-link>
            </v-toolbar-title>
            <div class="mt-1" v-for="opt in mainOptions" :key="opt"><span class="mx-4">{{opt}}</span></div>
            <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-icon class="mx-3">search</v-icon>
            <div class="mt-4 mx-3">DVD</div>
            <v-icon class="mx-3">redeem</v-icon>
            <v-icon class="mx-3">notifications</v-icon>
            <v-menu open-on-hover width="50px">
                <template v-slot:activator="{ on }">
                    <v-card style="cursor:pointer" v-on="on" class="mx-3 mt-3 mb-3">
                        <v-img height="30px" width="30px" 
                        :src="getCurrentUserAvatar" alt="avatar"  style="cursor:pointer"></v-img>
                    </v-card>
                </template>
                <v-list>
                    <v-list-tile v-for="user in filteredUserList" :key="user.name">
                        <v-layout row fill-height>
                            <v-flex xs3>
                                <v-card class="mt-1">
                                    <v-img height="30px" width="30px" :src="user.src"></v-img>
                                </v-card>
                            </v-flex>
                            <v-flex xs9 class="ml-3 mt-2">
                                <div>{{user.name}}</div>
                            </v-flex>
                        </v-layout>
                    </v-list-tile>
                    <router-link to="/">
                        <div class="ml-2">Manage Profiles</div>
                    </router-link>
                    <v-divider class="mt-2"></v-divider>
                    <div class="mt-2 ml-2">Account</div>
                    <div class="mt-2 ml-2">Help Center</div>
                    <div class="mt-2 ml-2">Sign out of Netflix</div>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
    <BillboardPanel />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BillboardPanel from './BillboardPanel'
export default {
    name: 'Billboard',
    components: {
        BillboardPanel
    },
    data() {
        return {
            mainOptions: ['Home', 'TV Shows', 'Movies', 'Latest', 'My List']
        }
    },
    computed: {
        ...mapGetters({
            getCurrentUserAvatar: 'getCurrentUserAvatar',
            getCurrentUserName: 'getCurrentUserName',
            getUserData: 'getUserData'
        }),
        filteredUserList() {
            return this.getUserData.filter(el => el.name !== this.getCurrentUserName)
        }
    }
}
</script>

<style scoped>
.router-link-active {
    color: white;
    text-decoration: none;
}
</style>