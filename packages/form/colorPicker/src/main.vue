<template>
  <div>
    <div class="ant-color-picker">
      <div class="ant-color-picker-title">{{ title }}</div>
      <el-color-picker
        v-model="retColor"
        size="mini"
        @change="change"
      ></el-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: "AntFormColorPicker",
  props: {
    title: {
      type: String,
      default: "默认值"
    },
    color: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      retColor: this.color
    };
  },
  watch: {
    color(newV, oldV) {
      // do something
      console.log(newV, oldV);
      this.retColor = newV;
    }
  },
  methods: {
    change(e) {
      this.$emit("antChange", {
        color: e
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.ant-color-picker {
  height: 30px;
  display: flex;
  margin-top: 5px;
}
.ant-color-picker-title {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  width: 60px;
  text-align: right;
  color: #666;
}
/deep/.el-color-picker--mini .el-color-picker__trigger {
  width: 60px;
}
/deep/.el-color-picker--mini {
  margin-left: 10px;
}
/deep/.el-color-picker__empty,
.el-color-picker__icon {
  display: none;
}
/deep/.el-color-picker__icon {
  display: none;
}
</style>
