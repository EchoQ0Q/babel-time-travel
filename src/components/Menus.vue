<template>
    <Menu :theme="theme2" width="100%" @on-select="selectMenu">
        <Submenu name="1">
            <template slot="title"><Icon type="ios-paper"></Icon>内容管理</template>
            <Menu-item name="a">文章管理</Menu-item>
            <Menu-item name="1-2">评论管理</Menu-item>
            <Menu-item name="1-3">举报管理</Menu-item>
        </Submenu>
        <Submenu name="2">
            <template slot="title"><Icon type="ios-paper"></Icon>用户管理</template>
            <Menu-item name="2-1">新增用户</Menu-item>
            <Menu-item name="2-2">活跃用户</Menu-item>
        </Submenu>
        <Submenu name="3">
            <template slot="title"><Icon type="ios-paper"></Icon>统计分析</template>
            <Menu-item name="3-1">新增和启动</Menu-item>
            <Menu-item name="3-2">活跃分析</Menu-item>
            <Menu-item name="3-3">时段分析</Menu-item>
            <Menu-item name="3-4">用户留存</Menu-item>
            <Menu-item name="3-5">流失用户</Menu-item>
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