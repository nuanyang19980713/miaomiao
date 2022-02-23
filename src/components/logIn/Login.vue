<template>
    <div class="login">
        <div class="username">
            <input type="text" placeholder="账号名/手机号/Email"/>
        </div>
        <div class="username">
            <input type="password" placeholder="请输入你的密码"/>
        </div>
        <p class="start-login">
            <button class="btn-login">登入</button>
        </p>
        <p>
            <a href="#">立刻注册</a>
            <a href="#">找回密码</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped lang="less">
.login {
    width: 100%;
    display: flex;
    flex-direction: column;
    div {
      height: 40px;
    }
    input {
        width: 100%;
        height: 100%;
        border: none;
        border-bottom: 2px solid #eee;
        padding: 4px 10px;
        outline: none;
        &:last-child {
            margin-top: 2px;
        }
    }
    .start-login{
        padding: 15px 10px;
        .btn-login {
            background-color: #fd3637;
            color: #fff;
            font-size: 20px;
            width: 100%;
            height: 50px;
            border: none;
        }
    }
    p {
        display: flex;
        justify-content: space-between;
        padding: 0 4px;
        a {
            text-decoration: none;
            color: red;
            font-size: 13px;
        }
    }
}
</style>
