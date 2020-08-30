<template>
  <div id="slide11" class="slide_content">
    <section data-place="slide11">
      <h2>UCMR3 vs PFAS18 Analysis</h2>
      <br/>
      <p>Regional PFAS data were separated into two different datasets.</p>
      <ul>
        <li>
          <u>UCMR3 Data (aka PFAS6)</u> - Fewer PFAS analytes (n=6) but better geospatial coverage
        </li>

        <li>
          <u>PFAS18</u> - More PFAS analytes (n=18) but poorer geospatial coverage
        </li>
      </ul>

      <p>Due to the expanded geographic coverage, the UCMR3 dataset was more instrumental in identifying forensic
        outliers along Fountain Creek.</p>
      <p>The component plot describes the individual PFAS compounds that drive how compounds separate along the x- and
        y-axes of the scores plot. Samples that plot close together have similar patterns of data and may be related in
        source. Samples are color-coded to show Total PFAS (TPFAS6) concentration.</p>
      <img
        align="center"
        src="../../assets/img/img_slide11_figure.png"
        alt="Score Plot"
        width="250px"
        height="auto"
      />
      <br/>
      <input type="checkbox" id="layer_Slides1112_TPFAS6CheckBox"/>
      <label for="checkbox">
        UCMR3 (PFAS6) PCA
        Scores
      </label>
      <br/>
      <input type="checkbox" id="layer_Slides1112_TPFAS18CheckBox"/>
      <label for="checkbox">
        PFAS18 PCA
        Scores
      </label>
      <br/>
      <br/>

      <!--<img src="../../assets/img/beijing.jpg" alt="" class="notfloat"/>-->

      <!-- <div class="container-fluid col" id="metric-modal"></div> -->
    </section>
  </div>
</template>

<script>
  export default {
    name: "VSlide11",
    data() {
      return {};
    }
  };
</script>

<style scoped>

  li:before {
    content: "" !important;
  }

  ul{
    padding-inline-start: 10px!important;
  }

  ul li {
    list-style: none;
    padding-left: -10px;
  }
</style>
