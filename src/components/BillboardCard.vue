<template>
    <v-container>
      <v-layout justify-center class="mt-2">
        <v-flex v-for="(image,index) in getShowCovers" :key="index">
          <v-card width="210px" class="mx-3">
            <v-img :src="image.src" height="400px"></v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            getShowCovers: 'getShowCovers'
        })
    }
}
</script>

<style scoped src="../styles/netflix-card.css">

</style>