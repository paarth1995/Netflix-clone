<template>
  <div id="app">
    <v-app dark>
      <v-content>
        <transition name="fade" mode="out-in" appear>
          <router-view ref="view"></router-view>
        </transition>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>


