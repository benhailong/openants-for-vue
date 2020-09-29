<template>
  <div class="tinymce-editor">
    <editor
      v-model="myValue"
      :init="init"
      :disabled="disabled"
      @onClick="onClick"
    >
    </editor>
    <button @click="showDialog = true">sss</button>
    <AntImageDialog
      :dialog-visible="showDialog"
      @dialog-cancel="showDialog = false"
      @antClick="antClick"
      :ant-data="urlData"
    ></AntImageDialog>
  </div>
</template>
<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import "tinymce/themes/silver";
// 编辑器插件plugins
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
// import "tinymce/plugins/antimage"; // 插入上传图片插件
import "../../../theme-default/tinymce/plugins/antimage/index"; // 插入上传图片插件
import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/wordcount"; // 字数统计插件
import "tinymce/plugins/code";
import "tinymce/plugins/preview";

import "tinymce/icons/default";
import "tinymce/skins/ui/oxide/skin.css";
import language from "../../../theme-default/tinymce/langs/zh_CN.js";

// ls s
import AntImageDialog from "../../../dialog/image/src/main";
// ls e

export default {
  name: "AntEditorTinymce",
  components: {
    Editor,
    AntImageDialog
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    // 基本路径，默认为空根目录，如果你的项目发布后的地址为目录形式，
    // 即abc.com/tinymce，baseUrl需要配置成tinymce，不然发布后资源会找不到
    baseUrl: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: "lists antimage media table wordcount code"
    },
    toolbar: {
      type: [String, Array],
      default:
        "bold italic underline forecolor backcolor alignnone |  formatselect fontselect fontsizeselect | alignleft aligncenter alignright alignjustify | antimage | bullist numlist outdent indent | removeformat code"
    }
  },
  data() {
    return {
      // ls s
      showDialog: false, // 弹窗控制
      urlData: [
        { id: 1, title: "分类1" },
        { id: 2, title: "分类2" },
        { id: 3, title: "分类3" },
        { id: 4, title: "分类4" }
      ],
      // ls e
      init: {
        language_url: language,
        language: "zh_CN",
        skin_url: "/tinymce/skins/ui/oxide",
        content_css: "/tinymce/skins/content/default/content.css",
        // skin_url: `${this.baseUrl}/tinymce/skins/ui/oxide-dark`, // 暗色系
        // content_css: `${this.baseUrl}/tinymce/skins/content/dark/content.css`, // 暗色系
        height: 300,
        plugins: this.plugins,
        toolbar: this.toolbar,
        branding: false,
        menubar: "file edit",
        clickImage: this.clickImage,
        menu: {
          file: {
            title: "File",
            items: "newdocument"
          },
          edit: {
            title: "Edit",
            items: "undo redo | cut copy paste pastetext | selectall"
          }
        }
        // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
        // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-antimage-upload/#images_upload_handler
        // images_upload_handler: (blobInfo, success, failure) => {
        //   const img = "data:antimage/jpeg;base64," + blobInfo.base64();
        //   success(img);
        // }
      },
      myValue: this.value
    };
  },
  mounted() {
    tinymce.init({});
  },
  methods: {
    // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
    // 需要什么事件可以自己增加
    onClick(e) {
      this.$emit("onClick", e, tinymce);
    },
    // 可以添加一些自己的自定义事件，如清空内容
    clear() {
      this.myValue = "";
    },
    antClick(e) {
      console.log("弹窗返回值：", e);
    },
    clickImage() {
      console.log("弹");
      this.showDialog = true;
    }
  },
  watch: {
    value(newValue) {
      this.myValue = newValue;
    },
    myValue(newValue) {
      this.$emit("input", newValue);
    }
  }
};
</script>
