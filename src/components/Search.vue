<template>
    <div id="search">
        <header>
            <i class="iconfont icon-sousuo"></i>
            <input type="text"/>
        </header>
        <main>
            <div class="search-title">
                电影/电视剧/综艺
            </div>
            <div class="search-result">
                <searchMovieList></searchMovieList>
                <searchMovieList></searchMovieList>
            </div>
        </main>
    </div>
</template>

<script>
    import searchMovieList from "./movie/searchMovieList"
    export default {
        name: "Search",
        components: {searchMovieList}
    }
</script>

<style scoped lang="less">
  #search {
      header {
          height: 40px;
          background: #eee;
          position: relative;
          padding: 8px 15px;
          i {
              position: absolute;
              left: 20px;
              top: 10px;
              font-size: 22px;
          }
          input {
              width: 100%;
              height: 100%;
              padding-left: 20px;
          }
      }
      main {
          .search-title {
              height: 44px;
              border-top: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              color: #9c9797;
              font-weight: bold;
              line-height: 44px;
              padding-left: 16px;
          }

      }
  }
</style>
