<template>
  <div style="height: 100%;display: flex;justify-content: space-between">
    <diyLeft :list="leftMenu" @antClick="changeLeft"></diyLeft>
    <diyMiddle
      :pagedata.sync="pageData"
      :antNamber.sync="index"
      @del="del"
      @antChange="changeDiv"
    ></diyMiddle>
    <diyRight
      v-if="index != -1"
      :changeData.sync="changeData"
      :ico="getIco()"
      @antChange="changeret"
    ></diyRight>
    <diyRight v-if="index == -1" @change="changeret"></diyRight>
  </div>
</template>

<script>
import diyLeft from "./diy-left";
import diyMiddle from "./diy-middle";
import diyRight from "./diy-right";
export default {
  name: "AntDiy", // 组件的name属性（后面有提到这里有个坑）
  props: {
    leftMenu: {
      // 文本
      type: Array
    },
    sharing: {
      type: Object
    }, // 分享的参数
    urlList: {
      type: Array
    },
    pageData: {
      // 页面的配置数据
      type: Array
    }
  },
  data() {
    return {
      index: -1,
      changeData: {}
    };
  },
  components: {
    diyLeft,
    diyMiddle,
    diyRight
  },
  methods: {
    changeret(e) {
      this.changeData = e.retdata;
      if (this.index != -1) {
        this.pageData[this.index] = this.changeData;
      }
    },
    changeLeft(e) {
      console.log(e);
      this.pageData.push(e);
      console.log(this.pageData);
    },
    del(e) {
      this.index == -1;
      this.pageData.splice(e.index, 1);
    },
    changeDiv(e) {
      this.index = e.index;
      this.changeData = this.pageData[this.index];
      console.log("当前选中", e.index);
    },
    getIco() {
      if (this.index == "-1") {
        return " ";
      }
      var type = this.pageData[this.index].type;

      for (let i = 0; i < this.leftMenu.length; i++) {
        var btns = this.leftMenu[i].btns;
        for (let n = 0; n < btns.length; n++) {
          if (btns[n].type == type) {
            console.log("这里有问题？", btns[n].img);
            return btns[n].img;
          }
        }
      }
    }
  }
};
</script>

<style scoped>
@import "../../theme-default/css/ants.css";
@import "../../theme-default/css/diy.css";
</style>
