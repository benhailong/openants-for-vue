<template>
  <div class="itu-z">
    <urlDialog
      :dialog-visible="showDialog"
      @dialog-cancel="showDialog = false"
    ></urlDialog>
    <div class="itu-box">
      <div class="itu-box-left itu-box-image-title">图片</div>
      <div class="itu-box-img">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="img" :src="img" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
    <div class="itu-box">
      <div class="itu-box-left itu-box-image-input">文字</div>
      <div style="flex: 1;padding-right: 10px">
        <el-input
          v-model="rtitle"
          placeholder="请输入内容"
          size="mini"
          maxlength="5"
          show-word-limit
        ></el-input>
      </div>
    </div>
    <div class="itu-box">
      <div class="itu-box-left itu-box-image-input">链接</div>
      <div style="flex: 1;padding-right: 10px">
        <div class="itu-box-url-box" @click="showDialog = true">
          <i class="el-icon-link itu-box-url-url-ico"></i>请选择连接
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import urlDialog from "../../../dialog/url/src/main";
export default {
  name: "ImageTitleUrl",
  props: {
    img: {
      type: String
    },
    title: {
      type: String
    },
    url: {
      type: String
    }
  },
  data() {
    return {
      rtitle: this.title,
      showDialog: false
    };
  },
  watch: {
    rtitle(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.$emit("update:title", newVal);
      console.log("修改后：", this.title);
    }
  },
  components: {
    // 第三方组件实例化
    urlDialog
  },
  computed: {},
  methods: {
    handleAvatarSuccess(res, file) {
      this.img = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    open() {}
  },
  mounted() {}
};
</script>

<style scoped>
@import "../../../theme-default/css/ants.css";
@import "../../../theme-default/css/diy.css";
/deep/.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
/deep/.avatar-uploader .el-upload:hover {
  border-color: #fd463e;
}
.avatar-uploader-icon {
  font-size: 14px;
  color: #8c939d;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.avatar {
  width: 50px;
  height: 50px;
  display: block;
}
</style>
