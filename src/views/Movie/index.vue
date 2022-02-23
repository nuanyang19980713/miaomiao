<template>
    <div id="movie">
    <Header title="喵喵电影"></Header>
       <div id="content">
            <div class="movie-menu">
                <router-link to="/movie/city" tag="div" class="city-name">
                    <span>新余</span>
                    <i class="iconfont icon-xiangxia"></i>
                </router-link>
                <div class="hot_switch">
                    <router-link tag="div" to="/movie/nowPlaying" class="hot-item">正在热映</router-link>
                    <router-link tag="div" to="/movie/comingSoon" class="hot-item">即将上映</router-link>
                </div>
                <router-link to="/movie/search" tag="div" class="search">
                    <i class="iconfont icon-sousuo"></i>
                </router-link>
            </div>
       </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue'
    import Footer from '@/components/Footer.vue'
    export default {
        name: "Movie",
        components: {
            Header,
            Footer
        }
    }
</script>

<style scoped lang="less">
    .center(@height) {
        line-height: @height;
        text-align: center;
    }
    #movie {
        width: 100%;
        height: 100%;
        padding-bottom: 40px;
        padding-top: 92px;

        #content {
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            width: 100%;
            height: 50px;
            position: fixed;
            left: 0;
            top: 47px;

            .movie-menu {
                height: 100%;
                display: flex;
                background-color: white;

                .city-name {
                    flex: 1;
                    .center(50px);

                    i {
                        font-size: 12px;
                        color: silver;
                        margin-left: 2px;
                    }
                }

                .hot_switch {
                    display: flex;
                    flex: 2;

                    .hot-item {
                        flex: 1;
                        .center(50px);
                    }
                }

                .search {
                    width: 50px;
                    .center(50px);

                    i {
                        font-size: 24px;
                        color: #ff695d;
                    }
                }
            }

            .router-link-exact-active {
                border-bottom: 2px solid red;
            }
        }
    }
</style>
