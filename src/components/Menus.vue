<template>
    <Menu :theme="theme2" width="100%" @on-select="selectMenu">
        <Submenu name="1">
            <template slot="title"><Icon type="ios-paper"></Icon>目录</template>
            <Menu-item name="a">let和const</Menu-item>
            <Menu-item name="b">箭头函数</Menu-item>
            <Menu-item name="c">解构赋值</Menu-item>
            <Menu-item name="d">模板字符串</Menu-item>
            <Menu-item name="e">不定参数与默认参数</Menu-item>
            <Menu-item name="f">Set和Map集合</Menu-item>
            <Menu-item name="g">Symbols</Menu-item>
            <Menu-item name="h">for-of循环</Menu-item>
            <Menu-item name="i">类Class</Menu-item>
            <Menu-item name="j">模块Modules</Menu-item>
            <Menu-item name="k">Generator生成器</Menu-item>
        </Submenu>
    </Menu>
</template>

<style>
.ivu-menu{
    width: 100% ;
}
.ivu-menu-vertical.ivu-menu-light:after{
    width: 0;
}

</style>

<script>
    export default {
        name: "menu",
        data () {
            return {
                theme2: 'light'
            }
        },
        methods: {
            selectMenu(name) {
                this.$store.commit("updateMenu", name);
            }
        }
    }
</script>