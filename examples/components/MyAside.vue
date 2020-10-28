<!--
@Author benhailong
@Time 2020/9/25 9:37 上午
-->
<template>
  <div>
    <div style="position: fixed;background-color: #ff6900">
      <img alt="Vue logo" class="logo" src="../assets/logo3.png" />
    </div>
    <div style="padding-top: 80px">
      <div
        :class="[action == index ? 'left-btn left-btn-active' : 'left-btn']"
        v-for="(menu, index) in leftMenu"
        :key="String(index)"
        @click="onClick(index, menu.lable, menu.path)"
      >
        <i :class="menu.icon" style="margin-right: 10px"></i>
        {{ menu.lable }}
      </div>
    </div>
  </div>
</template>

<script>
import menu from "../json/menu.json";
export default {
  name: "MyAside",
  props: {
    action: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      leftMenu: []
    };
  },
  components: {
    // 第三方组件实例化
  },
  mounted() {
    this.leftMenu = menu.menu;
  },
  methods: {
    // 方法
    onClick(index, lable, path) {
      this.$emit("aclick", {
        index: index,
        oneName: lable,
        path: path
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/index.scss";
</style>
