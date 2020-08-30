<template>
    <div>
    <div id="slides" class="col-sm-4 col-md-4 ">
        <div>
            <VHeader/>

            <div class="header" id="myHeader">
                <div><input type="button" id="logoutBtn" class="btn btn-outline-light" value="Logout" @click="doLogout"></div>
            </div>

        </div>
        <div class="main content mt-5">

            <VSlide01/>
            <VSlide02/>
            <VSlide03/>
            <VSlide04/>
            <VSlide05/>
            <VSlide06/>
            <VSlide07/>
            <VSlide08/>
            <VSlide09/>
            <VSlide10/>
            <VSlide11/>
            <!--<VSlide12/>-->
            <VSlide13/>
            <VSlide14/>
            <VSlide15/>
            <VSlide16/>


            <VLast/>

        </div>
        <div>
            <!--<VFooter/>-->
        </div>

    </div>

<!--    <div id="mySidenav" class="sidenav">-->
<!--        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>-->
<!--        <div id="tableofContent">-->
<!--            <strong>Slide Index</strong><br/>-->
<!--            <div id="radio_container">-->

<!--                <div class="form-check">-->
<!--                    <a href="#headerBox">Slide 01</a>-->
<!--                    <p>Title</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    &lt;!&ndash;<input class="form-check-input isAtoggle" type="checkbox" id="tce1990_toggle">&ndash;&gt;-->
<!--                    &lt;!&ndash;<label class="form-check-label">&ndash;&gt;-->
<!--                        &lt;!&ndash;TCE > 1990 in GW&ndash;&gt;-->
<!--                    &lt;!&ndash;</label>&ndash;&gt;-->
<!--                    <a href="#slide02">Slide 02</a>-->
<!--                    <p>Regional Economic Development</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide03">Slide 03</a>-->
<!--                    <p>Potential Sources of PFAS</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide04">Slide 04</a>-->
<!--                    <p>Impact of Groundwater Pumping</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide05">Slide 05</a>-->
<!--                    <p>PFAS Detections in Groundwater</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide06">Slide 06</a>-->
<!--                    <p>Peterson AFB Conceptual Site Model</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide07">Slide 07</a>-->
<!--                    <p>Paleochannels Control the Potential Migration of PFAS to Fountain Creek</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide08">Slide 08</a>-->
<!--                    <p>Peterson AFB Geostatistical and Trend Analysis</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide09">Slide 09</a>-->
<!--                    <p>USGS Pharmaceuticals and Personal Care Products and Isotope Data</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide10">Slide 10</a>-->
<!--                    <p>Peterson AFB Forensic Fingerprinting</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide11">Slide 11</a>-->
<!--                    <p>UCMR3 vs PFAS18 Analysis</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide13">Slide 12</a>-->
<!--                    <p>PFAS Compounds</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide14">Slide 13</a>-->
<!--                    <p>Multiple Sources Are Potentially Present Along Fountain Creek</p>                        </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide15">Slide 14</a>-->
<!--                    <p>Scores and Component Plots</p>-->
<!--                </div>-->

<!--                <div class="form-check">-->
<!--                    <a href="#slide16">Slide 15</a>-->
<!--                    <p>Summary</p>-->
<!--                </div>-->
<!--            </div>  &lt;!&ndash; end of radio_container &ndash;&gt;-->


<!--            <br>-->
<!--            <br>-->
<!--            <br>-->


<!--        </div> &lt;!&ndash; end of tableofContent &ndash;&gt;-->
<!--    </div>-->

<!--        <div id="div1">-->
<!--            <span id="openNav" style="font-size:16px; color:#62abf1; cursor:pointer; ">&#9776; Table of Contents</span>-->
<!--        </div>-->

<!--        <div id="div1"><input type="button" id="logoutBtn" class="btn btn-outline-light" value="Logout" @click="doLogout"></div>-->

    <!--<span id="openNav" style="font-size:22px; color:#f1f1f1; cursor:pointer; position:absolute; top:10px; left:14px;">&#9776; Menu</span>-->
    </div>


</template>

<script>

    import $ from 'jquery';

    // function openNav() {
    //     document.getElementById("mySidenav").style.width = "220px";
    // }
    //
    // function closeNav() {
    //     document.getElementById("mySidenav").style.width = "0";
    // }


    import VHeader from './VHeader';

    import VSlide01 from '@components/slides/VSlide01';
    import VSlide02 from '@components/slides/VSlide02';
    import VSlide03 from '@components/slides/VSlide03';
    import VSlide04 from '@components/slides/VSlide04';
    import VSlide05 from '@components/slides/VSlide05';
    import VSlide06 from '@components/slides/VSlide06';

    import VSlide07 from '@components/slides/VSlide07';
    import VSlide08 from '@components/slides/VSlide08';
    import VSlide09 from '@components/slides/VSlide09';
    import VSlide10 from '@components/slides/VSlide10';
    import VSlide11 from '@components/slides/VSlide11';
    // import VSlide12 from '@components/slides/VSlide12';
    import VSlide13 from '@components/slides/VSlide13';
    import VSlide14 from '@components/slides/VSlide14';
    import VSlide15 from '@components/slides/VSlide15';
    import VSlide16 from '@components/slides/VSlide16';

    import VLast from '@components/slides/VLast';

    // import VFooter from './VFooter';


    export default {
        name: "VSideBar",
        data(){
            return{

            }
        },
        components:{

            VHeader,

            VSlide01,
            VSlide02,
            VSlide03,
            VSlide04,
            VSlide05,
            VSlide06,

            VSlide07,
            VSlide08,
            VSlide09,
            VSlide10,
            VSlide11,
            // VSlide12,
            VSlide13,
            VSlide14,
            VSlide15,
            VSlide16,

            VLast,

            // VFooter,
        },

        methods:{
            doLogout(){
                this.$store.commit('clearToken');
            }
        },

        mounted() {
            window.onscroll = function () {
                myFunction()
            };

            var header = document.getElementById("myHeader");
            var sticky = header.offsetTop;

            function myFunction() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }

            let anchorlinks = document.querySelectorAll('a[href^="#"]')

            for (let item of anchorlinks) { // relitere
                item.addEventListener('click', (e)=> {
                    let hashval = item.getAttribute('href')
                    let target = document.querySelector(hashval)
                    target.scrollIntoView({
                        behavior: 'smooth'
                    })
                    history.pushState(null, null, hashval)
                    e.preventDefault()
                })
            }


            // $("#div1").click(function () {
            //     console.log("okle");
            //     document.getElementById("mySidenav").style.width = "300px";
            // });

            $("#map").click(function(){
                $("#mySidenav").css("width", 0);
                /*$("#tooltip3").hide();*/
            });

            $("#slides").click(function(){
                $("#mySidenav").css("width", 0);
                /*$("#tooltip3").hide();*/
            });




        }
    }
</script>

<style scoped>

    #logoutBtn{
        /*position: absolute;*/
        font-size: 12px;
        right: 10px;
        top: 5px;
    }

    /*#div1{*/
    /*    margin-left: 30px;*/
    /*    width: "auto";*/
    /*    height: 40px;*/
    /*    position:fixed;*/
    /*    left:0;*/
    /*    bottom: 20px;*/
    /*}*/


    /*.sidenav {*/
    /*    height: 100%;*/
    /*    width: 0px;*/
    /*    position: fixed;*/
    /*    z-index: 2001;*/
    /*    top: 0;*/
    /*    right: 0;*/
    /*    background-color: rgba(71, 68, 67, 0.95);*/
    /*    overflow-x: hidden;*/
    /*    !*     overflow-y: hidden; *!*/
    /*    !*   overflow-y: scroll; *!*/
    /*    transition: 0.5s;*/
    /*    padding-top: 30px;*/
    /*    font-family: 'Saira Extra Condensed', sans-serif;*/
    /*    font-size: 8px;*/
    /*    color:#d7f4c3;*/
    /*    opacity:0.85;*/
    /*    !*     overflow: hidden;*/
    /*    overflow-y: scroll; *!*/
    /*}*/


    /*.sidenav #radio_container{*/

    /*    padding: 0px 8px 0px 8px;*/
    /*    margin: 0 auto;*/
    /*    !* width: 200px; *!*/
    /*    text-align: left;*/

    /*}*/


    /*#tableofContent {*/
    /*    text-align: center;*/
    /*    margin: 1px auto;*/
    /*    !* width: 500px; *!*/
    /*    padding: 2px;*/
    /*    !*line-height: 4px;*!*/
    /*    -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);*/
    /*    !* -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3); *!*/
    /*    !* box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);*/
    /*    border-radius: 10px; *!*/
    /*    font-size: 16px;*/
    /*    font-family: "Verdana", Times, serif;*/
    /*}*/

    /*.form-check {*/
    /*    margin: 8px auto;*/
    /*}*/

    /*.form-check a{*/
    /*    font-size: 18px;*/
    /*    color: #e2c311 !important;*/
    /*}*/

    /*.form-check p{*/
    /*    font-size: 14px;*/
    /*    color: #fff8f9 !important;*/
    /*}*/

</style>
