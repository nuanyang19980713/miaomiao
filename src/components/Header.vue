<template>
<header id="header">
    <h1>{{title}}</h1>
</header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: {
                type: String,
                require: true,
                default: '喵喵电影'
            }
        }
    }
</script>

<style scoped lang="less">
#header {
    background: #e54747;
    height: 50px;
    color: #fff;
    width: 100%;
    position: fixed;
    left:0;
    top: 0;
    h1 {
        height: 100%;
        text-align: center;
        line-height: 50px;
        font-weight: normal;
        font-size: 18px;
    }
}
</style>
