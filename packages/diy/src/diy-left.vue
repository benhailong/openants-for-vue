<template>
  <div class="diy-left" style="height: 100%">
    <el-scrollbar>
      <div style="height: 100%;margin: 10px">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            :title="l.title"
            :name="index"
            v-for="(l, index) in list"
            :key="String(index)"
          >
            <div class="zj-z">
              <template v-for="(b, index2) in l.btns">
                <div
                  class="zj"
                  v-if="b.type == 'audio'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.audio + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'banner'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.banner + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'bargain'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.bargain + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'blank'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.blank + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'countdown'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.countdown + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'coupon'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.coupon + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'cube'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.cube + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'fixedsearch'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.fixedsearch + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'float'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.float + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'form'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.form + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'goods'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.goods + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'goodsRanking'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.goodsRanking + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'groups'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.groups + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'guess'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.guess + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'hotspot'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.hotspot + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'line'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.line + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'listmenu'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.listmenu + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'live'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.live + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'menu'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.menu + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'notice'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.notice + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'picture'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.picture + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'pictures'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.pictures + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'popadvertising'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.popadvertising + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'presell'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.presell + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'richtext'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.richtext + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'search'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.search + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'seckill'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.seckill + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'storeLise'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.storeLise + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'storeLocation'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.storeLocation + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'tabbar'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.tabbar + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'title'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.title + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'video'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.video + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'wxlive'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.wxlive + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  @click="antChange(b.type)"
                  v-else-if="b.type == 'member'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.member + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'memberIcon'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.memberIcon + ')'
                  }"
                  :key="String(index2)"
                >
                  {{ b.title }}
                </div>
                <div
                  class="zj"
                  v-else-if="b.type == 'order'"
                  :style="{
                    backgroundImage: imgIsNotNull(b.img)
                      ? 'url(' + b.img + ')'
                      : 'url(' + antImages.order + ')'
                  }"
                  :key="String(index2)"
                  @click="antChange(b.type)"
                >
                  {{ b.title }}
                </div>
              </template>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import antImages from "./js/import-img";
import antJsons from "./js/import-json";
export default {
  name: "diy-left",
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {
      activeNames: ["0"],
      antImages: antImages
    };
  },
  components: {
    // 第三方组件实例化
  },
  computed: {},
  methods: {
    // 方法
    handleChange(val) {
      console.log(val);
    },
    // 判断图标是否为空
    imgIsNotNull(img) {
      return img != "";
    },
    antChange(e) {
      var data = { type: e, isShow: true, data: {} };
      if (e == "member") {
        data.data = antJsons.member;
      } else if (e == "order") {
        data.data = antJsons.order;
      }

      this.$emit("antClick", data);
    }
  },
  mounted() {}
};
</script>

<style scoped>
@import "../../theme-default/css/ants.css";
@import "../../theme-default/css/diy.css";
</style>
