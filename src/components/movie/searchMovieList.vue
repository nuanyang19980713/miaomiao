<template>
    <div class="movie-item">
        <div class="movie-img">
            <img src="https://p0.meituan.net/movie/e389349a7256f654a80e1d1c08d864833173078.jpg@464w_644h_1e_1c" alt="">
        </div>
        <div class="movie-detail">
            <p class="title">
                这个杀手不太冷静
                <span>
                                8.5
                            </span>
            </p>
            <p class="english-name">Too Cool To Kill</p>
            <p class="movie-type">喜剧</p>
            <p class="coming-time">
                2022-02-01
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MovieDetail"
    }
</script>

<style scoped lang="less">
    .movie-item {
        border-bottom: 2px solid #eee;
        padding: 10px;
        height: 140px;
        width: 100%;
        display: flex;
        .movie-img {
            flex: 1;
        }
        .movie-detail {
            flex: 3;
            padding-left: 5px;
            display: flex;
            flex-direction: column;
            p {
                flex: 1;
            }
            .title {
                display: flex;
                flex: 2;
                justify-content: space-between;
                font-weight: bold;
                font-size: 20px;
                align-items: center;
                span {
                    color: orange;
                }
            }
        }
    }
</style>
