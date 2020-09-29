<template>
  <div class="hello">
    <AntDiy
      :leftMenu="leftMenu"
      :pageData.sync="pageData"
      :urlList="urlList"
      :sharing="sharing"
    ></AntDiy>
    <AntUrlDialog
      :dialog-visible="showDialog"
      @dialog-cancel="showDialog = false"
      @antClick="antClick"
      :ant-data="urlData"
      atitle="弹窗标题"
    ></AntUrlDialog>
    <div class="itu-box-url-box" @click="showDialog = true">点击</div>
    <div>富文本编辑器</div>
    {{ msg }}
    <ant-editor-tinymce ref="editor" v-model="msg"> </ant-editor-tinymce>
  </div>
</template>

<script>
import member from "../assets/member.png";
export default {
  name: "HelloWorld",
  data() {
    return {
      // 富文本
      msg: "请输入内容",
      // 富文本
      showDialog: false, // 弹窗控制
      urlData: [
        {
          level: 2, // 级别，1代表只有一级分类，2代表有2级分类
          title: "商城页面",
          childList: [
            {
              title: "商城链接",
              type: "url", // 类型
              info: "注：app暂不支持的链接，在App端点击时，不跳转页面",
              childList: [
                {
                  title: "商城首页",
                  url: "home/home"
                },
                {
                  title: "分类",
                  url: "home/list"
                }
              ]
            }
          ]
        },
        {
          level: 1, // 级别，1代表只有一级分类，2代表有2级分类
          title: "商品",
          type: "list", // 类型   Url：普通链接显示按钮类型，list：显示列表类型，call：拨打电话（childList为空），
          info: "注：这里是商品的连接测试",
          search: {
            url:
              "https://private-dev.heikeit.com/addons/up_vipcard/inc/web/public/index.php?s=/Apitest/getall", // 搜索链接，系统会自己通过发送POST请求，POST请求会添加parame中的参数，同时系统自动会添加几个参数，search：搜索关键词，可能为空，pageSize：每页显示条数15条，currentPage：当前页面
            parame: {
              token: "123456"
            }
          }
        },
        {
          level: 1, // 级别，1代表只有一级分类，2代表有2级分类
          title: "拨打电话",
          type: "call", // 类型   Url：普通链接显示按钮类型，list：显示列表类型，call：拨打电话（childList为空），
          info: "添加电话号码链接"
        },
        {
          level: 1, // 级别，1代表只有一级分类，2代表有2级分类
          title: "拨打电话",
          type: "call" // 类型   Url：普通链接显示按钮类型，list：显示列表类型，call：拨打电话（childList为空），
        }
      ],
      leftMenu: [
        {
          title: "基础组件",
          btns: [
            {
              type: "member",
              title: "会员信息",
              img: member
            },
            {
              type: "order",
              title: "订单图标组",
              img: ""
            },
            {
              type: "memberIcon",
              title: "常用图标组",
              img: ""
            }
          ]
        },
        {
          title: "商品类",
          btns: [
            {
              type: "goods",
              title: "商品组",
              img: ""
            },
            {
              type: "tabbar",
              title: "选项卡",
              img: ""
            },
            {
              type: "guess",
              title: "猜你喜欢",
              img: ""
            },
            {
              type: "goodsRanking",
              title: "商品排行",
              img: ""
            }
          ]
        },
        {
          title: "图文类",
          btns: [
            {
              type: "notice",
              title: "公告",
              img: ""
            },
            {
              type: "search",
              title: "搜索框",
              img: ""
            },
            {
              type: "fixedsearch",
              title: "固定搜索框",
              img: ""
            },
            {
              type: "banner",
              title: "图片轮播",
              img: ""
            },
            {
              type: "picture",
              title: "图片",
              img: ""
            },
            {
              type: "hotspot",
              title: "热区",
              img: ""
            },
            {
              type: "pictures",
              title: "图片展播",
              img: ""
            },
            {
              type: "cube",
              title: "魔方",
              img: ""
            },
            {
              type: "listmenu",
              title: "列表导航",
              img: ""
            },
            {
              type: "line",
              title: "辅助线",
              img: ""
            },
            {
              type: "title",
              title: "标题栏",
              img: ""
            },
            {
              type: "richtext",
              title: "富文本",
              img: ""
            },
            {
              type: "blank",
              title: "辅助空白",
              img: ""
            },
            {
              type: "audio",
              title: "音频播放",
              img: ""
            },
            {
              type: "menu",
              title: "按钮组",
              img: ""
            },
            {
              type: "form",
              title: "表单",
              img: ""
            },
            {
              type: "video",
              title: "视频播放",
              img: ""
            },
            {
              type: "float",
              title: "浮动按钮",
              img: ""
            }
          ]
        },
        {
          title: "营销类",
          btns: [
            {
              type: "coupon",
              title: "优惠劵",
              img: ""
            },
            {
              type: "groups",
              title: "拼团",
              img: ""
            },
            {
              type: "seckill",
              title: "秒杀",
              img: ""
            },
            {
              type: "countdown",
              title: "倒计时",
              img: ""
            },
            {
              type: "bargain",
              title: "砍价",
              img: ""
            },
            {
              type: "presell",
              title: "定价膨胀",
              img: ""
            },
            {
              type: "wxlive",
              title: "小程序直播",
              img: ""
            },
            {
              type: "live",
              title: "直播带货",
              img: ""
            }
          ]
        },
        {
          title: "其他组件",
          btns: [
            {
              type: "popadvertising",
              title: "弹窗广告",
              img: ""
            },
            {
              type: "storeLocation",
              title: "门店定位",
              img: ""
            },
            {
              type: "storeLise",
              title: "门店信息",
              img: ""
            }
          ]
        }
      ],
      pageData: [],
      urlList: [
        {
          title: "",
          url: ""
        }
      ],
      sharing: {
        type: 0, // 背景类型（0：系统设置，1：自定义）
        title: "", // 分享标题
        appimg: "", // 公众号img
        wxapptype: "", // 小程序分享类型（0：页面截图，1：自定义图片）
        wxappimg: "", // 小程序分享图片
        info: "" // 分享时候的简介
      } //分享数据
    };
  },
  methods: {
    antClick(e) {
      console.log("弹窗返回值：", e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  /*width: 1300px;*/
  width: 100%;
  height: 600px;
  border: 1px #42b983 solid;
  background-color: #f2f4f7;
}
</style>
