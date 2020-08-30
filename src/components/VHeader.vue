<template>
    <div >
        <div id="headerBox" class="top-container">
            <h2>Peterson AFB</h2>
            <h6 class="page-header">
                NewFields Government Services</h6>
        </div>

<!--        <div class="header" id="myHeader">-->
<!--            <div><input type="button" id="logoutBtn" class="btn btn-outline-light" value="Logout" @click="doLogout"></div>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "VHeader",
        data(){
            return{

            }
        },
        // methods:{
        //     doLogout(){
        //         this.$store.commit('clearToken');
        //     }
        // }
    }
</script>

<style scoped>
    #headerBox{
      	background: url('../assets/img/headerbg.jpg') no-repeat 0px 0px;
        font-family: 'Open Sans', sans-serif;
        background-size:cover;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
        color: white;
        text-shadow: 2px 2px rgba(80, 0, 0, 0.75);
        height: 180px;
    }

  /*#logoutBtn{*/
  /*    !*position: absolute;*!*/
  /*    font-size: 12px;*/
  /*    right: 10px;*/
  /*    top: 5px;*/
  /*}*/
</style>
