<template>
  <div class="box-show" style="margin-bottom: 20px">
    <div class="diy-right-title">
      <div
        class="diy-right-title-img"
        :style="{ background: 'url(' + getico() + ') no-repeat -12px -4px' }"
      ></div>
      <div>订单图标组</div>
    </div>
    <div class="diy-right-box">
      <div class="diy-right-box-title">颜色选择</div>
      <AntFormColorPicker
        title="文字"
        :color.sync="antdata.fontColor"
        @antChange="fontColor"
      ></AntFormColorPicker>
    </div>
    <div class="diy-right-box">
      <div class="diy-right-box-title">图标</div>
      <div style="padding: 10px">
        <template v-for="(ant, index) in antdata.list">
          <ImageTitleUrl
            :img.sync="ant.image"
            :key="String(index)"
            :title.sync="ant.title"
            :url.sync="ant.url"
          ></ImageTitleUrl>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import order from "../../../theme-default/images/icon/order.png";
import AntFormColorPicker from "./../../../form/colorPicker/src/main";
import ImageTitleUrl from "./../util/image-title-url";
export default {
  name: "orderSetting",
  props: {
    ico: {
      // 文本
      type: String
    },
    antdata: {
      // 文本
      type: Object
    }
  },
  data() {
    return {
      img: order
    };
  },
  components: {
    // 第三方组件实例化
    AntFormColorPicker,
    ImageTitleUrl
  },
  computed: {},
  methods: {
    // 方法
    getico() {
      console.log("ico", this.ico);
      // return this.img;
      return this.ico == "" || this.ico == undefined ? this.img : this.ico;
    },
    fontColor(e) {
      this.data.fontColor = e.color;
    }
  },
  mounted() {}
};
</script>

<style scoped>
@import "../../../theme-default/css/ants.css";
@import "../../../theme-default/css/diy.css";
</style>
