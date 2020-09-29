<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" style="overflow-x: hidden;">
        <MyAside :action="menuindex" @aclick="leftPush"></MyAside>
      </el-aside>
      <el-main><router-view /></el-main>
    </el-container>
    <!--    <img alt="Vue logo" class="logo" src="./assets/logo.png" />-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import { mapGetters } from "vuex";
import MyAside from "./components/MyAside.vue";

export default {
  name: "App",
  data() {
    return {
      action: 0
    };
  },
  mounted() {
    this.action = this.$store.state.leftMenu.menuindex;
  },
  methods: {
    leftPush(e) {
      this.$store.commit("setMenuIndex", e.index);
      this.$router.push(e.path);
    }
  },
  computed: {
    ...mapGetters(["menuindex"])
  },
  components: {
    // HelloWorld
    MyAside
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
.el-container {
  height: 100vh;
}

.el-aside {
  color: #333;
  text-align: center;
  border-right: 1px #e9eef3 solid;
}

.el-main {
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
}

.el-container:nth-child(7) .el-aside {
}
</style>
