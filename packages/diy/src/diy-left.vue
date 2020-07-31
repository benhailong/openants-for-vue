<template>
    <div class="diy-left" style="height: 100%">
        <el-scrollbar>
            <div style="height: 100%;margin: 10px">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item :title="l.title" :name="index" v-for="(l,index) in list" :key="String(index)">
                        <div class="zj-z">
                            <template v-for="(b,index2) in l.btns">
                                <div class="zj" v-if="b.type=='audio'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+audio+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='banner'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+banner+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='bargain'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+bargain+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='blank'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+blank+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='countdown'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+countdown+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='coupon'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+coupon+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='cube'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+cube+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='fixedsearch'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+fixedsearch+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='float'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+float+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='form'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+form+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='goods'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+goods+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='goodsRanking'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+goodsRanking+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='groups'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+groups+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='guess'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+guess+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='hotspot'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+hotspot+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='line'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+line+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='listmenu'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+listmenu+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='live'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+live+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='menu'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+menu+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='notice'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+notice+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='picture'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+picture+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='pictures'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+pictures+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='popadvertising'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+popadvertising+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='presell'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+presell+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='richtext'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+richtext+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='search'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+search+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='seckill'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+seckill+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='storeLise'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+storeLise+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='storeLocation'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+storeLocation+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='tabbar'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+tabbar+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='title'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+title+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='video'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+video+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='wxlive'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+wxlive+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='member'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+member+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='memberIcon'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+memberIcon+')'}"  :key="String(index2)">{{b.title}}</div>
                                <div class="zj" v-else-if="b.type=='order'" :style="{'backgroundImage': imgIsNotNull(b.img) ? 'url('+b.img+')' : 'url('+order+')'}"  :key="String(index2)">{{b.title}}</div>
                            </template>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
    import audio from "../../theme-default/images/icon/audio.png";
    import banner from "../../theme-default/images/icon/banner.png";
    import bargain from "../../theme-default/images/icon/bargain.png";
    import blank from "../../theme-default/images/icon/blank.png";
    import countdown from "../../theme-default/images/icon/countdown.png";
    import coupon from "../../theme-default/images/icon/coupon.png";
    import cube from "../../theme-default/images/icon/cube.png";
    import fixedsearch from "../../theme-default/images/icon/fixedsearch.png";
    import float from "../../theme-default/images/icon/float.png";
    import form from "../../theme-default/images/icon/form.png";
    import goods from "../../theme-default/images/icon/goods.png";
    import goodsRanking from "../../theme-default/images/icon/goodsRanking.png";
    import groups from "../../theme-default/images/icon/groups.png";
    import guess from "../../theme-default/images/icon/guess.png";
    import hotspot from "../../theme-default/images/icon/hotspot.png";
    import line from "../../theme-default/images/icon/line.png";
    import listmenu from "../../theme-default/images/icon/listmenu.png";
    import live from "../../theme-default/images/icon/live.png";
    import menu from "../../theme-default/images/icon/menu.png";
    import notice from "../../theme-default/images/icon/notice.png";
    import picture from "../../theme-default/images/icon/picture.png";
    import pictures from "../../theme-default/images/icon/pictures.png";
    import popadvertising from "../../theme-default/images/icon/popadvertising.png";
    import presell from "../../theme-default/images/icon/presell.png";
    import richtext from "../../theme-default/images/icon/richtext.png";
    import search from "../../theme-default/images/icon/search.png";
    import seckill from "../../theme-default/images/icon/seckill.png";
    import storeLise from "../../theme-default/images/icon/storeLise.png";
    import storeLocation from "../../theme-default/images/icon/storeLocation.png";
    import tabbar from "../../theme-default/images/icon/tabbar.png";
    import title from "../../theme-default/images/icon/title.png";
    import video from "../../theme-default/images/icon/video.png";
    import wxlive from "../../theme-default/images/icon/wxlive.png";
    import member from "../../theme-default/images/icon/member.png";
    import memberIcon from "../../theme-default/images/icon/memberIcon.png";
    import order from "../../theme-default/images/icon/order.png";
    export default {
        name: "diy-left",
        props: {
            list:{
                type: Array
            }
        },
        data() {
            return {
                activeNames: ['0'],
                member: member,
                memberIcon: memberIcon,
                order: order,
                audio: audio,
                banner: banner,
                bargain: bargain,
                blank: blank,
                countdown: countdown,
                coupon: coupon,
                cube: cube,
                fixedsearch: fixedsearch,
                float: float,
                form: form,
                goods: goods,
                goodsRanking: goodsRanking,
                groups: groups,
                guess: guess,
                hotspot: hotspot,
                line: line,
                listmenu: listmenu,
                live: live,
                menu: menu,
                notice: notice,
                picture: picture,
                pictures: pictures,
                popadvertising: popadvertising,
                presell: presell,
                richtext: richtext,
                search: search,
                seckill: seckill,
                storeLise: storeLise,
                storeLocation: storeLocation,
                tabbar: tabbar,
                title: title,
                video: video,
                wxlive: wxlive,

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
            imgIsNotNull(img){
                return img!='';
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    @import "../../theme-default/css/ants.css";
    @import "../../theme-default/css/diy.css";
</style>
