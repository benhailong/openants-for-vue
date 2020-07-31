<template>
    <div style="height: 100%;display: flex;justify-content: space-between">
        <diyLeft :list="leftMenu"></diyLeft>
        <diyMiddle></diyMiddle>
        <diyRight></diyRight>
    </div>
</template>

<script>
    import diyLeft from "./diy-left";
    import diyMiddle from "./diy-middle";
    import diyRight from "./diy-right";
    export default {
        name: 'AntDiy', // 组件的name属性（后面有提到这里有个坑）
        props: {
            leftMenu: { // 文本
                type: Array
            }
        },
        components:{
            diyLeft,diyMiddle,diyRight
        },
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
    @import "../../theme-default/css/ants.css";
    @import "../../theme-default/css/diy.css";
</style>
