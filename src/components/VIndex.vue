<template>
    <div id="app">
        <div class="container-fluid">
            <div class="row">
                <VSideBar/>
                <VMap/>

                <div id="mySidenav" class="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <div id="tableofContent">
                        <strong>Slide Index</strong><br/>
                        <div id="radio_container">

                            <div class="form-check">
                                <a href="#headerBox">Slide 01</a>
                                <p>Introduction</p>
                            </div>

                            <div class="form-check">
                                <!--<input class="form-check-input isAtoggle" type="checkbox" id="tce1990_toggle">-->
                                <!--<label class="form-check-label">-->
                                    <!--TCE > 1990 in GW-->
                                <!--</label>-->
                                <a href="#slide02">Slide 02</a>
                                <p>Regional Economic Development</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide03">Slide 03</a>
                                <p>Potential Sources of PFAS</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide04">Slide 04</a>
                                <p>Impact of Groundwater Pumping</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide05">Slide 05</a>
                                <p>PFAS Detections in Groundwater</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide06">Slide 06</a>
                                <p>Peterson AFB Conceptual Site Model</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide07">Slide 07</a>
                                <p>Paleochannels Control the Potential Migration of PFAS to Fountain Creek</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide08">Slide 08</a>
                                <p>Peterson AFB Geostatistical and Trend Analysis</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide09">Slide 09</a>
                                <p>USGS Pharmaceuticals and Personal Care Products and Isotope Data</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide10">Slide 10</a>
                                <p>Peterson AFB Forensic Fingerprinting</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide11">Slide 11</a>
                                <p>UCMR3 vs PFAS18 Analysis</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide13">Slide 12</a>
                                <p>PFAS Compounds</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide14">Slide 13</a>
                                <p>Multiple Sources Are Potentially Present Along Fountain Creek</p>                        </div>

                            <div class="form-check">
                                <a href="#slide15">Slide 14</a>
                                <p>Proactive Measures to Protect Human Health</p>
                            </div>

                            <div class="form-check">
                                <a href="#slide16">Slide 15</a>
                                <p>Summary</p>
                            </div>
                        </div>  <!-- end of radio_container -->


                        <br>
                        <br>
                        <br>


                    </div> <!-- end of tableofContent -->
                </div>


                <div id="div1">
                    <span id="openNav">&#9776; Table of Contents</span>
                </div>


                <!--<VChart/>-->
            </div>
        </div>
    </div>
</template>

<script>

    import $ from 'jquery';
    import VMap from './VMap';
    import VSideBar from './VSideBar';
    // import VChart from './VChart';

    export default {
        name: "VIndex",
        data(){
            return{

            }
        },
        components: {
            VSideBar,
            VMap,
            // VChart,
        },
        mounted(){
               $("#div1").click(function () {
                // console.log("okle");
                document.getElementById("mySidenav").style.width = "300px";
            });
        }
    }
</script>

<style>

</style>
