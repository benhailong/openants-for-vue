<template>
  <div class="hello">
      <AntDiy :leftMenu="leftMenu"></AntDiy>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data(){
      return {
          leftMenu:[
              {
                  title: "基础组件",
                  btns: [
                      {
                          type: "member",
                          title: "会员信息",
                          img: '',
                      },{
                          type: "order",
                          title: "订单图标组",
                          img: '',
                      },{
                          type: "memberIcon",
                          title: "常用图标组",
                          img: '',
                      }
                  ]
              },{
                  title: "商品类",
                  btns: [
                      {
                          type: "goods",
                          title: "商品组",
                          img: '',
                      },{
                          type: "tabbar",
                          title: "选项卡",
                          img: '',
                      },{
                          type: "guess",
                          title: "猜你喜欢",
                          img: '',
                      },{
                          type: "goodsRanking",
                          title: "商品排行",
                          img: '',
                      }
                  ]
              },{
                  title: "图文类",
                  btns: [
                      {
                          type: "notice",
                          title: "公告",
                          img: '',
                      },{
                          type: "search",
                          title: "搜索框",
                          img: '',
                      },{
                          type: "fixedsearch",
                          title: "固定搜索框",
                          img: '',
                      },{
                          type: "banner",
                          title: "图片轮播",
                          img: '',
                      },{
                          type: "picture",
                          title: "图片",
                          img: '',
                      },{
                          type: "hotspot",
                          title: "热区",
                          img: '',
                      },{
                          type: "pictures",
                          title: "图片展播",
                          img: '',
                      },{
                          type: "cube",
                          title: "魔方",
                          img: '',
                      },{
                          type: "listmenu",
                          title: "列表导航",
                          img: '',
                      },{
                          type: "line",
                          title: "辅助线",
                          img: '',
                      },{
                          type: "title",
                          title: "标题栏",
                          img: '',
                      },{
                          type: "richtext",
                          title: "富文本",
                          img: '',
                      },{
                          type: "blank",
                          title: "辅助空白",
                          img: '',
                      },{
                          type: "audio",
                          title: "音频播放",
                          img: '',
                      },{
                          type: "menu",
                          title: "按钮组",
                          img: '',
                      },{
                          type: "form",
                          title: "表单",
                          img: '',
                      },{
                          type: "video",
                          title: "视频播放",
                          img: '',
                      },{
                          type: "float",
                          title: "浮动按钮",
                          img: '',
                      }
                  ]
              },{
                  title: "营销类",
                  btns: [
                      {
                          type: "coupon",
                          title: "优惠劵",
                          img: '',
                      },{
                          type: "groups",
                          title: "拼团",
                          img: '',
                      },{
                          type: "seckill",
                          title: "秒杀",
                          img: '',
                      },{
                          type: "countdown",
                          title: "倒计时",
                          img: '',
                      },{
                          type: "bargain",
                          title: "砍价",
                          img: '',
                      },{
                          type: "presell",
                          title: "定价膨胀",
                          img: '',
                      },{
                          type: "wxlive",
                          title: "小程序直播",
                          img: '',
                      },{
                          type: "live",
                          title: "直播带货",
                          img: '',
                      }
                  ]
              },{
                  title: "其他组件",
                  btns: [
                      {
                          type: "popadvertising",
                          title: "弹窗广告",
                          img: '',
                      },{
                          type: "storeLocation",
                          title: "门店定位",
                          img: '',
                      },{
                          type: "storeLise",
                          title: "门店信息",
                          img: '',
                      }
                  ]
              }
          ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
    width: 1300px;
    height: 600px;
    border: 1px #42b983 solid;
    background-color: #f2f4f7;
}
</style>
