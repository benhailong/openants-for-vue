<template>
  <div class="diy-right" style="height: 100%">
    <el-scrollbar>
      <div style="height: 100%">
        <template v-if="changeData == undefined || changeData.length <= 0">
          <setting></setting>
        </template>
        <template v-else>
          <mamberSetting
            v-if="changeData.type == 'member'"
            :ico="ico"
            :data.sync="changeData.data"
            @antChange="antChange"
          ></mamberSetting>
          <orderSetting
            v-if="changeData.type == 'order'"
            :ico="ico"
            :antdata.sync="changeData.data"
            @antChange="antChange"
          ></orderSetting>
        </template>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import mamberSetting from "./setting/member-setting";
import orderSetting from "./setting/order-setting";
import setting from "./setting/setting";
export default {
  name: "diyRight",
  props: {
    changeData: { type: Object },
    ico: {
      type: String
    }
  },
  data() {
    return {};
  },
  components: {
    // 第三方组件实例化
    mamberSetting,
    setting,
    orderSetting
  },
  computed: {},
  methods: {
    // 方法
    antChange(e) {
      this.changeData.data = e.retdata;
      this.$emit("antChange", {
        retdata: this.changeData
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
@import "../../theme-default/css/ants.css";
@import "../../theme-default/css/diy.css";
</style>
