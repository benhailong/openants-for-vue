<template>
  <div class="box-show" style="margin-bottom: 20px">
    <div class="diy-right-title">
      <div
        class="diy-right-title-img"
        :style="{ background: 'url(' + ico + ') no-repeat -12px 0px' }"
      ></div>
      <div>会员信息</div>
    </div>
    <div class="diy-right-box">
      <div class="diy-right-box-title">选择背景色</div>
      <AntFormColorPicker
        title="左侧"
        :color.sync="data.bgColorLeft"
        @antChange="colorleft"
      ></AntFormColorPicker>
      <AntFormColorPicker
        title="右侧"
        :color.sync="data.bgColorRight"
        @antChange="colorright"
      ></AntFormColorPicker>
    </div>
  </div>
</template>

<script>
import member from "../../../theme-default/images/icon/member.png";
import AntFormColorPicker from "./../../../form/colorPicker/src/main";
export default {
  name: "memberSetting",
  props: {
    ico: {
      // 文本
      type: String
    },
    data: {
      // 文本
      type: Object
    }
  },
  data() {
    return {
      img: member
    };
  },
  components: {
    // 第三方组件实例化
    AntFormColorPicker
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
      this.data.bgColorLeft = e.color;
      this.$emit("antChange", {
        retdata: this.data
      });
    },
    colorright(e) {
      console.log("返回的颜色右边", e);
      this.data.bgColorRight = e.color;
      this.$emit("antChange", {
        retdata: this.data
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
