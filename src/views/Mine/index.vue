<template>
    <div id="mine">
        <Header title="我的喵喵"></Header>
        <Login></Login>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import Login from "../../components/logIn/Login"
    export default {
        name: 'Mine',
        components: {
            Login,
            Header,
            Footer
        }
    }
</script>

<style scoped lang="less">
#mine {
    width: 100%;
    height: 100%;
    padding-bottom: 40px;
    padding-top: 50px;
}
</style>
