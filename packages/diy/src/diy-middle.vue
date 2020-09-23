<template>
  <div class="diy-middle" style="height: 100%">
    <el-scrollbar>
      <div style="height: 100%">
        <div class="diy-phone">
          <div class="diy-phone-body">
            <template v-for="(pd, index) in pagedata">
              <div
                :class="[
                  'diy-div',
                  antNamber == index ? 'diy-active' : '',
                  pd.isShow ? '' : 'diy-show'
                ]"
                :key="String(index)"
                @click="antChange(index)"
              >
                <div style="position:relative">
                  <el-popover
                    placement="bottom-end"
                    width="160"
                    :ref="'i-' + String(index)"
                    :style="{ display: antNamber == index ? 'block' : 'none' }"
                    v-model="visible[index]"
                  >
                    <p>确定删除吗</p>
                    <div style="text-align: right; margin: 0">
                      <el-button type="primary" size="mini" @click="del"
                        >删除</el-button
                      >
                      <el-button size="mini" type="text" @click="antClouse"
                        >取消</el-button
                      >
                    </div>
                    <i class="el-icon-close diy-del" slot="reference"></i>
                  </el-popover>
                </div>
                <member
                  v-if="pd.type == 'member'"
                  :bgColorOne.sync="pd.data.bgColorLeft"
                  :bgColorTwo.sync="pd.data.bgColorRight"
                  :showDelBtn="antNamber == index"
                  :index.sync="index"
                  @del="del"
                ></member>
                <order
                  v-else-if="pd.type == 'order'"
                  :antdata.sync="pd.data"
                  :index.sync="index"
                ></order>
              </div>
            </template>
          </div>
        </div>
      </div>
    </el-scrollbar>
    <div class="diy-flx">
      <el-tooltip
        class="item"
        effect="dark"
        :content="showtext()"
        placement="right"
        style="line-height: 42px;width: 42px"
      >
        <i
          class="el-icon-view diy-icon"
          v-if="antNamber == -1"
          style="color: #8b8c8e"
        ></i>
        <i v-else class="el-icon-view diy-icon" @click="updateIsShow"></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="上移组件"
        placement="right"
        style="line-height: 42px;width: 42px"
      >
        <i
          class="el-icon-arrow-up diy-icon"
          v-if="antNamber <= 0"
          style="color: #8b8c8e"
        ></i>

        <i v-else class="el-icon-arrow-up diy-icon" @click="upGo"></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="下移组件"
        placement="right"
        style="line-height: 42px;width: 42px"
      >
        <i
          class="el-icon-arrow-down diy-icon"
          v-if="antNamber >= pagedata.length - 1 || antNamber == -1"
          style="color: #8b8c8e"
        ></i>
        <i v-else class="el-icon-arrow-down diy-icon" @click="downGo"></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="复制组件"
        placement="right"
        style="line-height: 42px;width: 42px"
      >
        <i
          v-if="antNamber == -1"
          class="el-icon-document-copy diy-icon"
          style="color: #8b8c8e"
        ></i>
        <i v-else class="el-icon-document-copy diy-icon" @click="copy"></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="分享设置"
        placement="right"
        style="line-height: 42px;width: 42px"
      >
        <i class="el-icon-upload2 diy-icon"></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="设置"
        placement="right"
        style="line-height: 42px;width: 42px"
      >
        <i
          class="el-icon-setting diy-icon"
          v-if="antNamber == -1 || pagedata[antNamber].antbg == undefined"
          style="color: #8b8c8e"
        ></i>
        <i v-else class="el-icon-setting diy-icon"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import member from "./common/member";
import order from "./common/order";
export default {
  name: "diymiddle",
  props: {
    pagedata: {
      type: Array
    },
    antNamber: {
      type: Number
    }
  },
  data() {
    return {
      visible: []
    };
  },
  components: {
    // 第三方组件实例化
    member,
    order
  },
  computed: {},
  methods: {
    // 复制组件
    copy() {
      console.log("sss");
      var a = JSON.parse(JSON.stringify(this.pagedata[this.antNamber]));
      var data = this.pagedata;
      data.splice(this.antNamber, 0, a);
      this.$emit("update:pagedata", data);
      this.$emit("antChange", {
        index: this.antNamber
      });
    },
    showtext() {
      if (this.antNamber == -1) {
        return "隐藏";
      }
      return this.pagedata[this.antNamber].isShow ? "隐藏" : "显示";
    },
    updateIsShow() {
      this.pagedata[this.antNamber].isShow = !this.pagedata[this.antNamber]
        .isShow;
    },
    // 上移
    upGo() {
      this.pagedata[this.antNamber] = this.pagedata.splice(
        this.antNamber - 1,
        1,
        this.pagedata[this.antNamber]
      )[0];
      this.$emit("update:antNamber", this.antNamber - 1);
    },
    downGo() {
      this.pagedata[this.antNamber] = this.pagedata.splice(
        this.antNamber + 1,
        1,
        this.pagedata[this.antNamber]
      )[0];
      this.$emit("update:antNamber", this.antNamber + 1);
    },
    antChange(index) {
      this.$emit("update:antNamber", index);
      this.$emit("antChange", {
        index: index
      });
    },
    // 方法
    del() {
      this.visible[this.antNamber] = false;
      var a = this.antNamber;
      this.$emit("update:antNamber", -1);
      this.$emit("del", {
        index: a
      });
    },
    antClouse() {
      this.$set(this.visible, this.antNamber, false);
    }
  },
  mounted() {}
};
</script>

<style scoped>
@import "../../theme-default/css/ants.css";
@import "../../theme-default/css/diy.css";
</style>
