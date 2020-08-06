<template>
  <div
    class="diy-mamber"
    :style="{
      background: 'linear-gradient(90deg,' + bgColorOne + ',' + bgColorTwo + ')'
    }"
  >
    <div class="menber-header">
      <img :src="personImg" alt="" class="person-img" />
      <div>
        <div class="u-name">微信会员小花</div>
        <div class="u-level">
          <img :src="personInfoVip" alt="" class="level-icon" />
          <div>普通会员</div>
        </div>
        <div class="coupon">
          <p>8张券待使用</p>
          <div class="es-btn-default-o">点击查看</div>
        </div>
        <img :src="personInfoCard" alt="" class="coupon-bg" />
      </div>
    </div>
    <div class="balance">
      <div class="flex" style="border-right: 2px solid rgb(255, 255, 255);">
        <img :src="personInfoBalance" alt="" class="icon-balance" />
        <span class="bold">余额：8888</span>
      </div>
      <div class="flex">
        <img :src="personInfoCoupon" alt="" class="icon-balance" />
        <span class="bold">积分：8888</span>
      </div>
    </div>
  </div>
</template>

<script>
import personImg from "../../../theme-default/images/person_img.jpg";
import personInfoVip from "../../../theme-default/images/person_info_vip.png";
import personInfoCard from "../../../theme-default/images/person_info_card.png";
import personInfoBalance from "../../../theme-default/images/person_info_balance.png";
import personInfoCoupon from "../../../theme-default/images/person_info_coupon.png";
export default {
  name: "mamber",
  props: {
    bgColorOne: {
      type: String,
      default: "#fd463e"
    },
    bgColorTwo: {
      type: String,
      default: "#ff3883"
    },
    personImg: {
      type: String,
      default: personImg
    },
    showDelBtn: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      personInfoVip: personInfoVip,
      personInfoCard: personInfoCard,
      personInfoBalance: personInfoBalance,
      personInfoCoupon: personInfoCoupon
    };
  },
  components: {
    // 第三方组件实例化
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
@import "../../../theme-default/css/ants.css";
@import "../../../theme-default/css/diy.css";
</style>
