<template>
  <div class="myswitch">
    <div class="switch-title">{{ title }}</div>
    <el-popover
      placement="top"
      width="200"
      trigger="hover"
      :content="content"
      popper-class="switch-popper"
      :visible-arrow="false"
    >
      <i class="el-icon-question" v-if="content != ''" slot="reference"></i>
    </el-popover>
    <el-switch
      class="switch-switch"
      v-model="value"
      @change="change"
      :disabled="disabled"
      :active-color="activeColor"
    ></el-switch>
  </div>
</template>

<script>
export default {
  name: "AntFormSwitch",
  props: {
    title: {
      type: String,
      default: "默认值"
    },
    content: {
      type: String,
      default: ""
    },
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      // 打开时候的背景色
      type: String,
      default: "#FB6638"
    },
    disabled: {
      // 是否禁用
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  components: {
    // 第三方组件实例化
  },
  computed: {},
  methods: {
    // 方法
    change() {
      this.$emit("antChange", {
        value: this.value
      });
    }
  },
  mounted() {}
};
</script>

<style>
.myswitch {
  display: flex;
  height: 40px;
  line-height: 40px;
}
.switch-title {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  width: 150px;
  text-align: right;
  padding-right: 10px;
}
.switch-switch {
  margin-top: 9px;
  margin-left: 10px;
}

.el-popover.switch-popper {
  background: #2d3d50 !important;
  border: 0;
  color: #ffffff;
}
/*/deep/.popper__arrow {*/
/*  border-left-color: #2d3d50 !important;*/
/*}*/
/*/deep/.popper__arrow::after {*/
/*  border-left-color: #2d3d50 !important;*/
/*}*/
</style>
