<template>
    <div id="chartdiv" class="chartdiv">

        <h1>这是一个大Chart</h1>
    </div>

</template>

<script>


    export default {
        name: "VChart",
        data(){
            return{

            }
        },
        components:{


        },

    }
</script>

<style scoped>

    #chartdiv{
        float: right;
        z-index: 1;
        position: fixed;
        top: 20px;
        right: 20px;
        /*z-index: 400;*/
        /*padding: 1em;*/
        background: white;
    }

</style>
