<template>
    <div id="slide08" class="slide_content">
    <section data-place="slide08">
        <br/>
        <h2>Peterson AFB Geostatistical and Trend Analysis</h2>
        <br/>
        <br/>
        <p>Geostatistical tools complement the ESS and support source identification.  Variogram analysis of data structure and one-way Mann-Kendall test of trends were conducted on all PFOS/PFOA Sum data collected to date across the region through June 2019.
        </p>

        <p>Data showed no consistent structure or trend.  Hole effects in the data elucidate the presence of multiple sources in the area.
        </p>

        <p>Trends were determined to a 95% confidence level for wells with three (3) or more data points.  All but two (2) locations on Peterson AFB and airport property are decreasing in trend.  Multiple locations along Fountain Creek have increasing trends and may highlight areas of continuing sources.
        </p>
        <br/>
        <input type="checkbox" id="layer_Slide8_EPAPFCSumCheckBox"> <label for="checkbox">PFOS/PFOA Sum in GW (ug/L)</label><br>
        <input type="checkbox" id="layer_Slide8_OffsiteTrendsCheckBox"> <label for="checkbox">Off-site Trends</label><br>
        <input type="checkbox" id="layer_Slide8_OnsiteTrendsCheckBox"> <label for="checkbox">On-site Trends</label><br>
        <br/>
        <br/>
        <br/>

        <!--<img src="../../assets/img/beijing.jpg" alt="" class="notfloat"/>-->

        <!-- <div class="container-fluid col" id="metric-modal"></div> -->
    </section>
    </div>
</template>

<script>
    export default {
        name: "VSlide08",
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
