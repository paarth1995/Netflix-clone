<template>
  <div>
    <div class="mt-4">
        <span class="display-1 font-weight-medium error--text ml-5">NETFLIX</span>
    </div>
    <v-container>
      <v-layout align-center justify-center row fill-height>
        <div v-if="!editMode" class="display-3 mb-5 mt-3 pt-3">Who's watching?</div>
        <div v-else class="display-3 mb-5 mt-3 pt-3">Manage Profiles:</div>
      </v-layout>
      <v-layout align-center justify-center row fill-height>
        <v-flex v-for="(user,index) in getUserData" :key="index">
          <v-card style="cursor:pointer" @click="changeRouteAndGetUser(index)" class="mx-4">
            <v-img :class="{'editMode': editMode}" :src="user.src" height="200px" style="width:100%">
              <v-container v-if="editMode">
                <v-layout align-center justify-center row fill-height>
                  <v-icon @click.stop="openDialogAndGetUser(index)" class="mt-5" color="white" large>create</v-icon>
                </v-layout>
              </v-container>
            </v-img>
          </v-card>
          <div class="text-xs-center mt-3 title white--text">
            {{user.name}}
          </div>
        </v-flex>
      </v-layout>
      <v-layout class="mt-5 pt-3" align-center justify-center row fill-height>
        <v-hover>
          <v-btn slot-scope="{hover}" v-if="!editMode" @click="editMode = true" outline large color="#808080"
            :class="['profile-gate-btn', hover ? 'white--text' : '#808080--text']" > MANAGE PROFILES</v-btn>
        </v-hover>
        <v-hover>
          <v-btn slot-scope="{hover}" v-if="editMode" @click="editMode = false" large
            :color="hover ? 'red black--text' : 'white dark--text'">DONE</v-btn>
        </v-hover>
      </v-layout>
    </v-container>
    <UserEditDialog :img="getCurrentUserAvatar" :title="getCurrentUserName"/>
  </div>
</template>

<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex';
  import UserEditDialog from './UserEditDialog'
  export default {
    name: 'Usercard',
    components: {
      UserEditDialog
    },
    data() {
      return {
        editMode: false,
      }
    },
    methods: {
      ...mapMutations({
        openDialog: 'openDialog',
        setCurrentUserName: 'setCurrentUserName',
        setCurrentUserAvatar: 'setCurrentUserAvatar'
      }),
      openDialogAndGetUser(index) {
        this.openDialog();
        this.setCurrentUserName(this.getUserData[index].name)
        this.setCurrentUserAvatar(this.getUserData[index].src)
      },
      changeRouteAndGetUser(index) {
        this.setCurrentUserName(this.getUserData[index].name)
        this.setCurrentUserAvatar(this.getUserData[index].src)
        this.$router.push( { name: 'Billboard', params: {index: index }});
        console.log('Helloooo', this.getCurrentUserName);
        console.log('This worked???', this.getCurrentUserAvatar);
      },
    },
    computed: {
      ...mapGetters({
        getUserData: 'getUserData',
        getCurrentUserName: 'getCurrentUserName',
        getCurrentUserAvatar: 'getCurrentUserAvatar'
      })
    }
  }
</script>

<style scoped>
  .profile-gate-btn {
    height: 45px;
  }

  .v-btn--large:hover {
    color: #fff;
    border: 1px solid #fff;
  }

  .editMode .v-image__image {
    opacity: .3;
  }
</style>
