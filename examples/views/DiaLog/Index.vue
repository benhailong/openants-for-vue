<!--
@Author benhailong
@Time 2020/9/25 2:34 下午
-->
<template>
  <div style="text-align: left">
    <div class="main-top">
      <span style="color: #ff6900;font-weight: bold;">链接选择器</span>
    </div>
    <AntUrlDialog
      :dialog-visible="showDialog"
      @dialog-cancel="showDialog = false"
      @antClick="antClick"
      :ant-data="url"
      :atitle="atitle"
    ></AntUrlDialog>
    <div class="dia-inpot">
      <div class="dia-inpot-title">弹窗标题</div>
      <el-input v-model="atitle" placeholder="请输入" size="mini"></el-input>
    </div>
    <div class="dia-inpot">
      <div class="dia-inpot-title">数据</div>
      <vue-json-editor
        style="width: 600px;"
        v-model="url"
        :mode="'code'"
        lang="zh"
      ></vue-json-editor>
    </div>
    <div class="dia-inpot" v-if="returldata">
      <div class="dia-inpot-title">返回值</div>
      <pre>{{ returldata }}</pre>
    </div>
    <el-button type="primary" @click="showDialog = true" size="mini"
      >弹出链接选择器</el-button
    >
    <div class="main-top" style="margin-top: 20px">
      <span style="color: #ff6900;font-weight: bold;">图片选择器</span>
    </div>
    <AntImageDialog
      :dialog-visible="imgShowDialog"
      @dialog-cancel="imgShowDialog = false"
      @antClick="antClick"
      :ant-data="imageData"
    ></AntImageDialog>
    <el-button type="primary" @click="imgShowDialog = true" size="mini"
      >弹出图片选择器</el-button
    >
  </div>
</template>

<script>
import diaLogUrl from "../../json/diaLogUrl.json";
import diaLogImage from "../../json/diaLogImage.json";
import vueJsonEditor from "vue-json-editor";
export default {
  name: "DiaLogIndex",
  props: {},
  data() {
    return {
      atitle: "链接选择器",
      showDialog: false, // 弹窗控制
      url: diaLogUrl.data,
      returldata: "",
      imgShowDialog: false, // 图片选择器相关参数
      imageData: diaLogImage.data
    };
  },
  components: {
    vueJsonEditor
  },
  mounted: function() {
    // this.url = diaLogUrl.data;
  },
  methods: {
    // 方法
    antClick(e) {
      console.log("弹窗返回值：", e);
      this.returldata = e;
    }
  }
};
</script>

<style scoped>
@import "../../assets/scss/index.css";
/deep/.jsoneditor {
  border: 1px solid #dddfe6;
}
/deep/.jsoneditor-menu {
  display: none;
}
</style>
