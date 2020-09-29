<template>
  <div>
    <!--    <button style="background-color: #ff0000;color: #ffffff">{{ text }}</button>-->
    <!--    <el-button type="success">{{ text }}</el-button>-->
    <!--    <el-antimage :src="banner"></el-antimage>-->
    <!--    <div-->
    <!--      class="background-42b983"-->
    <!--      :style="{-->
    <!--        width: '76px',-->
    <!--        height: '76px',-->
    <!--        background: 'url(' + banner + ')'-->
    <!--      }"-->
    <!--    ></div>-->
    <!--    <div class="background-42b983">{{ text }}</div>-->
    <div class="tttt">{{ text }}</div>
  </div>
</template>

<script>
import banner from "../../theme-default/images/icon/banner.png";
export default {
  name: "datePicker", // 组件的name属性（后面有提到这里有个坑）
  props: {
    text: {
      // 文本
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {
      banner: banner
    };
  }
};
</script>

<style lang="scss" scoped>
.tttt {
  background-color: #fb6638;
}
</style>
