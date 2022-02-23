<template>
  <div id="cinema">
    <Header title="喵喵影院"></Header>
      <div class="cinema-menu">
        <router-link to="" tag="div" class="cinema-item">
            <span>全程</span>
             <i class="iconfont icon-xiangxia"></i>
        </router-link>
        <router-link to="" tag="div" class="cinema-item">
            <span>品牌</span>
             <i class="iconfont icon-xiangxia"></i>
        </router-link>
        <router-link to="" tag="div" class="cinema-item">
            <span>特色</span>
             <i class="iconfont icon-xiangxia"></i>
        </router-link>
      </div>
    <!-- 影院的列表信息  -->
    <div class="cinema-list">
      <div class="list-info">
        <!-- 电影的价格和影院的名称 -->
        <p class="cinema-name">
          大地影院(敖东世纪店)
          <span class="price">
            22.9 元起
          </span>
        </p>
        <p class="address">
          新余市渝水区解放东路
        </p>
        <p class="badge">
          <span>小吃</span>
          <span>折扣卡</span>
        </p>
      </div>
      <div class="distance">
        1763.5km
      </div>
    </div> <div class="cinema-list">
      <div class="list-info">
        <!-- 电影的价格和影院的名称 -->
        <p class="cinema-name">
          大地影院(敖东世纪店)
          <span class="price">
            22.9 元起
          </span>
        </p>
        <p class="address">
          新余市渝水区解放东路
        </p>
        <p class="badge">
          <span>小吃</span>
          <span>折扣卡</span>
        </p>
      </div>
      <div class="distance">
        1763.5km
      </div>
    </div> <div class="cinema-list">
      <div class="list-info">
        <!-- 电影的价格和影院的名称 -->
        <p class="cinema-name">
          大地影院(敖东世纪店)
          <span class="price">
            22.9 元起
          </span>
        </p>
        <p class="address">
          新余市渝水区解放东路
        </p>
        <p class="badge">
          <span>小吃</span>
          <span>折扣卡</span>
        </p>
      </div>
      <div class="distance">
        1763.5km
      </div>
    </div> <div class="cinema-list">
      <div class="list-info">
        <!-- 电影的价格和影院的名称 -->
        <p class="cinema-name">
          大地影院(敖东世纪店)
          <span class="price">
            22.9 元起
          </span>
        </p>
        <p class="address">
          新余市渝水区解放东路
        </p>
        <p class="badge">
          <span>小吃</span>
          <span>折扣卡</span>
        </p>
      </div>
      <div class="distance">
        1763.5km
      </div>
    </div> <div class="cinema-list">
      <div class="list-info">
        <!-- 电影的价格和影院的名称 -->
        <p class="cinema-name">
          大地影院(敖东世纪店)
          <span class="price">
            22.9 元起
          </span>
        </p>
        <p class="address">
          新余市渝水区解放东路
        </p>
        <p class="badge">
          <span>小吃</span>
          <span>折扣卡</span>
        </p>
      </div>
      <div class="distance">
        1763.5km
      </div>
    </div> <div class="cinema-list">
      <div class="list-info">
        <!-- 电影的价格和影院的名称 -->
        <p class="cinema-name">
          大地影院(敖东世纪店)
          <span class="price">
            22.9 元起
          </span>
        </p>
        <p class="address">
          新余市渝水区解放东路
        </p>
        <p class="badge">
          <span>小吃</span>
          <span>折扣卡</span>
        </p>
      </div>
      <div class="distance">
        1763.5km
      </div>
    </div> <div class="cinema-list">
      <div class="list-info">
        <!-- 电影的价格和影院的名称 -->
        <p class="cinema-name">
          大地影院(敖东世纪店)
          <span class="price">
            22.9 元起
          </span>
        </p>
        <p class="address">
          新余市渝水区解放东路
        </p>
        <p class="badge">
          <span>小吃</span>
          <span>折扣卡</span>
        </p>
      </div>
      <div class="distance">
        1763.5km
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
    export default {
      name: "Cinema",
      components: {
        Header,
        Footer
      }
    }
</script>

<style scoped lang="less">
  #cinema {
    width: 100%;
    height: 100%;
    padding-bottom: 40px;
    padding-top: 92px;

    .cinema-menu {
      width: 100%;
      height: 44px;
      display: flex;
      position: fixed;
      background-color: white;
      top: 49px;
      left: 0;
      border-bottom: 1px solid #eee;

      .cinema-item {
        flex: 1;
        text-align: center;
        line-height: 44px;

        .router-link-exact-active {
          color: wheat;
        }

        i {
          font-size: 12px;
          margin-left: 6px;
        }
      }
    }

    .cinema-list {
      width: 100%;
      height: 100px;
      padding: 10px;
      display: flex;
      border-bottom: 1px solid #eee;

      .list-info {
        flex: 3;

        .cinema-name {
          height: 40%;

          span {
            color: red;
          }
        }

        .address {
          color: #c9c6c6;
          font-size: 13px;
          margin-bottom: 5px;
        }

        .badge {
          span {
            border: 1px solid orange;
            color: orange;
            font-size: 12px;

            &:first-child {
              margin-right: 3px;
            }
          }
        }
      }

      .distance {
        flex: 1;
        text-align: center;
        line-height: 100px;
        color: #c5cca5;
        font-size: 13px;
      }
    }
  }
</style>
