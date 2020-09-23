<template>
  <div>
    <div class="diy-order-title">
      <div class="diy-order-title-left">我的订单</div>
      <div class="diy-order-title-right">
        全部订单 <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="diy-order-btn-list">
      <template v-for="(ant, index) in antdata.list">
        <div class="diy-order-btn-box" :key="String(index)">
          <img class="diy-order-btn-list-image" :src="logo" alt="" />
          <div
            class="diy-order-btn-list-title"
            :style="{ color: antdata.fontColor }"
          >
            {{ ant.title }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import logo from "../../../theme-default/images/logo.png";
export default {
  name: "order",
  props: {
    antdata: {},
    showDelBtn: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      logo: logo
    };
  },
  components: {
    // 第三方组件实例化
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
@import "../../../theme-default/css/ants.css";
@import "../../../theme-default/css/diy.css";
</style>
