<template>
    <div class="hotMovieList">
        <div class="movie-info">
            <div class="movie-img">
                <img src="https://p0.meituan.net/mmdb/3b0eff9fd7a620388efd2addee7448be4496405.png@464w_644h_1e_1c"/>
            </div>
            <!-- 电影描述-->
            <div class="movie-description">
                <!-- 电影名称 -->
                <p class="movie-title">
                    长津湖之水门桥</p>
                <!--观众评论-->
                <p class="author-comment">
                    观众评 <span>9.2</span>
                </p>
                <p class="movie-type">
                    剧情 历史 战争
                </p>
                <p class="comingTime">
                    2022-02-01 08:00中国大陆上映
                </p>
            </div>
        </div>
        <!--  买电影票      -->
        <div class="buyTicket">
            <button class="btn-danger">
                购买
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hotMovieList"
    }
</script>

<style scoped lang="less">
    .hotMovieList {
        padding: 12px;
        width: 100%;
        height: 140px;
        display: flex;
        border-bottom: 1px solid #d5d5d5;
        .movie-info {
            flex: 3;
            display: flex;
            .movie-img {
               width: 35%;
                height: 100%;
            }
            .movie-description {
                flex: 1;
                padding-left: 7px;
                .movie-title {
                    font-size: 18px;
                    font-weight: bold;
                }
                .author-comment {
                    font-size: 15px;
                    span {
                        color: orange;
                    }
                }
            }

        }
        .buyTicket {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .btn-danger {
                color: #fff;
                background-color: #dc3545;
                width: 45px;
                height: 30px;
                font-weight: bold;
                font-size: 14px;
                border: none;
            }
        }
    }
</style>
