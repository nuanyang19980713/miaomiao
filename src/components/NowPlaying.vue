<template>
    <div class="nowPlaying">
        <HotMovieList v-for="i in new Array(8)"></HotMovieList>
    </div>
</template>

<script>
    import HotMovieList from "./movie/hotMovieList"
    export default {
        name: "NowPlaying",
        components: {HotMovieList}
    }
</script>

<style scoped>

</style>
