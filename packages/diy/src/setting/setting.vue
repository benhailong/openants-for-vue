<template>
  <div class="box-show" style="margin-bottom: 20px">
    <div class="diy-right-title">
      <div>页面设置</div>
    </div>
    <div class="diy-right-box">
      <div class="diy-right-box-title">页面标题</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "memberSetting",
  props: {
    data: {
      // 文本
      type: Array
    }
  },
  data() {
    return {
      retdata: this.data
    };
  },
  components: {
    // 第三方组件实例化
  },
  computed: {},
  methods: {
    // 方法
    getico() {
      console.log("ico", this.ico);
      // return this.img;
      return this.ico == "" || this.ico == undefined ? this.img : this.ico;
    },
    colorleft(e) {
      console.log("返回的颜色左边", e);
      this.retdata.bgColorLeft = e.color;
      this.$emit("antChange", {
        retdata: this.retdata
      });
    },
    colorright(e) {
      console.log("返回的颜色右边", e);
      this.retdata.bgColorRight = e.color;
      this.$emit("antChange", {
        retdata: this.retdata
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
@import "../../../theme-default/css/ants.css";
@import "../../../theme-default/css/diy.css";
</style>
