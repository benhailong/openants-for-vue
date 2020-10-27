<!--
@Author benhailong
@Time 2020/10/27 11:02 上午
-->
<template>
  <div style="text-align: left">
    <div class="main-top">
      <span style="color: #ff6900;font-weight: bold;">富文本编辑器</span>
    </div>
    <ant-editor-tinymce
      ref="editor"
      v-model="msg"
      :ant-data="imageData"
      baseUrl="http://file-wxunpor.heikeit.com/"
    >
    </ant-editor-tinymce>
    <div class="main-top" style="margin-top: 20px;background-color: #f4f4f5">
      <span style="color: #909399;font-weight: bold;">html数据展示</span>
    </div>
    <div>{{ msg }}</div>
    <div class="main-top" style="margin-top: 20px;background-color: #f4f4f5">
      <span style="color: #909399;font-weight: bold;">效果展示</span>
    </div>
    <div v-html="msg"></div>
  </div>
</template>

<script>
import diaLogImage from "../../json/diaLogImage.json";
export default {
  name: "",
  props: {},
  data() {
    return {
      msg: "请输入内容",
      imageData: diaLogImage.data
    };
  },
  components: {
    // 第三方组件实例化
  },
  mounted: function() {},
  methods: {
    // 方法
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/index.scss";
</style>
