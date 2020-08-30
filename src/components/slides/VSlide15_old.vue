<template>
  <div id="slide15" class="slide_content">
    <section data-place="slide15">
      <h2>Proactive Measures to Protect Human Health</h2>
      <br />
      <p>Although the US Air Force is not the only source of PFOS/PFOA in the area, they have voluntarily completed and/or funded several interim remedial measures to protect human health. These measures include:</p>

      <ul>
        <li>Providing bottled water for private well owners awaiting a treatment system or have refused a treatment system,</li>
        <li>Installing reverse osmosis units under the kitchen sink in 27 homes,</li>
        <li>Installing ion exchange systems at two water districts,</li>
        <li>Connecting two additional wells to the Widefield ion exchange system and funding an ion exchange system for its five other wells,</li>
        <li>Purchasing replacement water for Security until a 6,800 gpm ion exchange system can be installed for 24 impacted wells,</li>
        <li>Installing two 500 gpm granular activated carbon (GAC) systems and funding a 1,500 gpm ion exchange system to treat groundwater from four city of Fountain wells,</li>
        <li>Installing a 300 gpm ion exchange system for Stratmoor Hills and a 50 gpm ion exchange system for Security Mobile Home Park, and</li>
        <li>Connecting a church whose well has been impacted to city water.</li>
      </ul>

      <input type="checkbox" id="layer_Slide15_PublicWaterSystemPFCSumCheckBox" />
      <label for="checkbox">Public Water System Wells - PFC Sum (PFOS+PFOA) ug/L</label>
      <br />
      <input type="checkbox" id="layer_Slide15_WatershedsCheckBox" />
      <label for="checkbox">Water Districts</label>
      <br />
      <input type="checkbox" id="layer_Slide15_WaterTreatmentSystemsCheckBox" />
      <label for="checkbox">Water Treatment Systems</label>
      <br />
      <br />

      <!--<img src="../../assets/img/beijing.jpg" alt="" class="notfloat"/>-->

      <!-- <div class="container-fluid col" id="metric-modal"></div> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "VSlide15",
  data() {
    return {};
  }
};
</script>

<style scoped>
/* ul {
  list-style: inside !important;
  padding-left: 2px;
} */

ul > li {
  font-size: 14px;
  list-style-type: none;
}
</style>
