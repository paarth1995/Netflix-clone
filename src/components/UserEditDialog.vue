<template>
    <v-dialog v-model="getDialog" width="600px" persistent>
        <v-card>
            <v-card-title class="headline">Edit Mode</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-layout row>
                    <v-flex xs3>
                        <v-img :src="img" height="100px" width="100px"></v-img>
                    </v-flex>
                    <v-flex xs9>
                        <v-text-field v-model="title" solo></v-text-field>
                        <div class="title font-weight-light">Language:</div>
                        <v-select solo class="mt-2" :items="languages" v-model="defaultLanguage"></v-select>
                        <v-divider></v-divider>
                        <div class="title font-weight-light mt-3">Maturity Settings:</div>
                        <div class="mt-3 profile-entry">ALL MATURITY SETTINGS</div>
                        <div class="mt-3 subheading">Show titles of all maturity ratings for this profile.</div>
                        <v-hover>
                            <v-btn style="margin-left:-2px" slot-scope="{hover}" outline color="#808080"
                                :class="[ hover ? 'white--text' : '#808080--text', 'mt-3', 'mb-4']">
                                EDIT</v-btn>
                        </v-hover>
                        <v-divider></v-divider>
                        <div class="mt-3 title font-weight-light">Autoplay controls</div>
                        <v-checkbox hide-details v-model="checkbox1"
                            label="Autoplay next episode in a series on all devices">
                        </v-checkbox>
                        <v-checkbox hide-details v-model="checkbox2"
                            label="Autoplay previews while browsing on all devices">
                        </v-checkbox>
                    </v-flex>
                </v-layout>
                <v-divider class="mt-4"></v-divider>
                <v-layout align-center justify-space-between row fill-height class="mt-3">
                    <v-card-actions>
                        <v-hover>
                            <v-btn slot-scope="{hover}" :color="hover ? 'red' : 'white'" class="dark--text mx-4" large>
                                SAVE</v-btn>
                        </v-hover>
                        <v-hover>
                            <v-btn slot-scope="{hover}" color="#808080"
                                :class="['mx-4', hover ? 'white--text' : '#808080--text']" 
                                outline large @click="closeDialog">CANCEL</v-btn>
                        </v-hover>
                        <v-hover>
                            <v-btn slot-scope="{hover}" outline large
                                color="#808080"
                                :class="['mx-4', hover ? 'white--text' : '#808080--text']">
                                DELETE PROFILE</v-btn>
                        </v-hover>
                    </v-card-actions>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import {
        mapGetters,
        mapMutations
    } from 'vuex'
    export default {
        props: {
            img: {
                type: String
            },
            title: {
                type: String
            }
        },
        data() {
            return {
                checkbox1: true,
                checkbox2: true,
                languages: [
                    'English',
                    'Spanish',
                    'German',
                    'Dutch'
                ],
                defaultLanguage: 'English'
            }
        },
        computed: {
            ...mapGetters({
                getDialog: 'getDialog'
            })
        },
        methods: {
            ...mapMutations({
                closeDialog: 'closeDialog'
            })
        }
    }
</script>


<style scoped>
    .profile-entry {
        border-radius: 2px;
        background: #333;
        padding: 7px 10px;
        font-weight: bold;
        margin-right: 5px;
        width: 190px;
    }
</style>