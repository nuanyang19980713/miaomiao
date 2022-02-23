<template>
    <footer id="footer">
        <ul class="tab">
            <router-link to="/movie" tag="li">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link to="/cinema" tag="li">
                <i class="iconfont icon-yanchu"></i>
                <p>影院</p>
            </router-link>
            <router-link to="/mine" tag="li">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="less">

#footer {
    position: fixed;
    bottom: 0;
    background: white;
    border-top: 2px #ebe8e3 solid;
    width: 100%;
    height: 50px;
    left: 0;
    ul {
        height: 100%;
        display: flex;
        li {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            p{
                margin-top: 2px;
            }
            i {
                font-size: 23px;
            }
        }
    }
}
</style>
