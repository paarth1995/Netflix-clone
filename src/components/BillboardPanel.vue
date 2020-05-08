<template>
    <div>
        <img src="https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaHLTaNoUZKtnJCVSGg0rn8X4zsyr4hjUM4T0PRIEi0bYQwXKXl_CeiTQmSsbR8oVcwA0xUJ12KzFGvE_hmh6cU9-MjO.webp?r=2c7"
            width="100%">
        <div class="title-wrapper">
            <img src="https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABbhI2DLZ9pUiS3nWEOoKbOm9YSNzigp24qTbvHw_VnqDdeeC3LBaRYnOpowQ4DH9HWfbMzfuFtqMQbP4mXlZcCFzoPqCFTyguzp6mdnNMxHQbIKSlFjAnGbusP9K2vt2KoDlXOsupXXkYfWMQpy5jqC0UYYSe-WptVjJwDwPmoE8Eg.webp?r=22f"
                width="90%">
            <div class="mt-2" style="width:490px">
                <span style="word-break: break-all;font-size:1.3em">
                    With millions of euros and their lives on the line, nine robbers attempt to pull off the greatest
                    heist of all time.
                </span>
            </div>
            <v-btn large class="dark--text title mt-4" color="white">
                <v-icon large>play_arrow</v-icon> Play
            </v-btn>
        </div>
        <h1 class="ml-5 pt-5">Netflix Originals</h1>
        <BillboardCard />
    </div>
</template>

<script>
import BillboardCard from './BillboardCard'
    export default {
        components: {
            BillboardCard
        }
    }
</script>

<style scoped>
    .title-wrapper {
        position: absolute;
        bottom: 630px;
        left: 100px;
    }
</style>