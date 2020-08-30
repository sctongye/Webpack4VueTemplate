<template>
    <div id="app">

        <!--上线-->
        <div v-if="this.$store.state.token">
            <VIndex/>
        </div>
        <div v-else>
            <VLogin/>
        </div>

        <!--测试-->
        <!--<div>-->
            <!--<VIndex/>-->
        <!--</div>-->


    </div>
</template>

<script>



    import VIndex from '@components/VIndex';  //根据上面的判断 有token就进这里，没Token就去登录页面
    import VLogin from '@components/VLogin';



    export default {
        name: 'App',
        components: {
            VIndex,
            VLogin
        }
    }
</script>

<style>

</style>
