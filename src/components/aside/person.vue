<template>
    <div class="common-use">
        <div>
            <span>姓名：</span>
            <span>{{this.$store.state.inf.name}}</span>
        </div>
        <div>
            <span>卡号：</span>
            <span>{{this.$store.state.inf.number}}</span>
        </div>
        <div>
            <span>学院：</span>
            <span>{{this.$store.state.inf.college}}</span>
        </div>
        <div>
            <span>专业：</span>
            <span>{{this.$store.state.inf.zhuanye}}</span>
        </div>
        <div>
            <span>寝室：</span>
            <span>{{this.$store.state.inf.qinshi}}</span>
        </div>
    </div>
</template>


<style lang="less">
</style>
