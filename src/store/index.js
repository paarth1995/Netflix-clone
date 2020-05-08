import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dialog: false,
    userData: [{
      name: 'Person 1',
      title: 'Person 1',
      src: require('../assets/img1.jpg'),
      route: '/Billboard'
    },
    {
      name: 'Person 2',
      title: 'Person 2',
      src: require('../assets/img2.jpg'),
      route: '/Billboard'
    },
    {
      name: 'Person 3',
      title: 'Person 3',
      src: require('../assets/img3.jpg'),
      route: '/Billboard'
    },
    {
      name: 'Person 4',
      title: 'Person 4',
      src: require('../assets/img4.jpg'),
      route: '/Billboard'
    }
  ],
  showCovers: [
    { src: "https://i.pinimg.com/236x/7b/02/e2/7b02e22fb2cbedcf6f4c1b56fdf0ba05.jpg" },
    { src: "https://i.pinimg.com/236x/30/2b/de/302bde67550deab92d5b9031d0405c9b.jpg" },
    { src: "https://i.pinimg.com/236x/5f/41/b2/5f41b2a0e36fedf7106801795c68ef94.jpg"  },
    { src: "https://i.pinimg.com/236x/38/13/2a/38132a460e0dfa36834a009d642d6a55.jpg"},
    { src: "https://i.pinimg.com/originals/fb/82/3d/fb823d7900bb62c2df31c694c9277ddf.jpg"},
    { src: 'https://i.pinimg.com/236x/6e/28/85/6e2885790d1754b3f0c1d14303b83d29--marvel-comics-universe.jpg' }
  ],
  currentUserName: '',
  currentUserAvatar: ''
  },
  getters: {
    getDialog: (state) => state.dialog,
    getUserData: (state) => state.userData,
    getCurrentUserName: (state) => state.currentUserName,
    getCurrentUserAvatar: (state) => state.currentUserAvatar,
    getShowCovers: (state) => state.showCovers,
  },
  mutations: {
    openDialog(state) {
      state.dialog = !state.dialog;
    },
    closeDialog(state) {
      state.dialog = false;
    },
    setCurrentUserName(state, payload) {
      state.currentUserName = payload
    },
    setCurrentUserAvatar(state, payload) {
      state.currentUserAvatar = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
