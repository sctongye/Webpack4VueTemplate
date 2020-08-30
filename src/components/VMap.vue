<template>
  <div id="mapParent">
    <div id="map" class="col-sm-8 col-md-8 sidebar"></div>
    <div id="info-pane">
      <!--<svg id="chartCanvas"></svg>-->
    </div>
    <!--<div class="slide-pane"></div>-->

    <!--<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">-->
    <!--<div class="modal-dialog" role="document">-->
    <!--<div class="modal-content">-->
    <!--<div class="modal-header">-->
    <!--<h5 class="modal-title" id="exampleModalLongTitle">Plot Slides</h5>-->
    <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
    <!--<span aria-hidden="true">&times;</span>-->
    <!--</button>-->
    <!--</div>-->
    <!--<div class="modal-body">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide29.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide30.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide31.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide32.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide33.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide34.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide35.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide36.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide37.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide38.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide39.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide40.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide41.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide42.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide43.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide44.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide45.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide46.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide47.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide48.PNG" width="100%">-->
    <!--</div>-->
    <!--<div class="modal-footer">-->
    <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="modal fade" id="ModalLong_Slide13" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">-->
    <!--<div class="modal-dialog" role="document">-->
    <!--<div class="modal-content">-->
    <!--<div class="modal-header">-->
    <!--<h5 class="modal-title" id="ModalLong_Slide13Title">Plot Slides</h5>-->
    <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
    <!--<span aria-hidden="true">&times;</span>-->
    <!--</button>-->
    <!--</div>-->
    <!--<div class="modal-body">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide55.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide56.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide57.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide58.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide59.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide60.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide61.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide62.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide63.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide64.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide65.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide66.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide67.PNG" width="100%">-->
    <!--<img src="'+ pathPrefix+'static/img/innerImg_Slide68.PNG" width="100%">-->
    <!--</div>-->
    <!--<div class="modal-footer">-->
    <!--<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import $, * as jQuery from "jquery";
import * as d3 from "d3";
import "bootstrap/dist/js/bootstrap.min";
// import overallLayers from '../assets/data/layers_overall.js'
// require('../assets/data/layers_overall2.js')();
// import pumpingData from '../assets/data/pumpingData.js';
// const pumpingData = require("../assets/data/pumpingData.js");
import pumpingData2 from "../assets/data/pumpingData.js";
import timeseriesGWData2 from "../assets/data/timeseriesGWData.js";
import scoreData2 from "../assets/data/scoreData.js";
import piechartdat2 from "../assets/data/pie_slide10_data.js";
import { _ } from "underscore";

// var cloneLayer = require('leaflet-clonelayer');

var pumpingData = JSON.parse(JSON.stringify(pumpingData2)); // time series 的数据
var timeseriesGWData = JSON.parse(JSON.stringify(timeseriesGWData2)); // GW 的 d3js time series chart 数据
var scoreData = JSON.parse(JSON.stringify(scoreData2));
var piechartdata = JSON.parse(JSON.stringify(piechartdat2));
// console.log("the Data is: ", pumpingData);

//开发环境和生产环境路径不同
const isProd = process.env.NODE_ENV === "production";
const configVar = require("../../config");
const pathPrefix = isProd
  ? configVar.build.assetsPublicPath
  : configVar.dev.assetsPublicPath;

export default {
  name: "VMap",
  data() {
    return {
      layer_world: null

      // pumpingData: JSON.parse(JSON.stringify(pumpingData)),
    };
  },
  mounted() {
    // overallLayers,
    this.init();
  },
  methods: {
    init() {
      (function($) {
        "use strict";

        L.CanvasIcon = L.Icon.extend({
          options: {
            /** @var {L.Point} */
            iconSize: [24, 24],
            /** @var {L.Point} */
            iconAnchor: [12, 12],
            /** @var {Function} */
            drawIcon: null,
            /** @var {string} */
            className: "leaflet-canvas-icon"
          },

          /**
           * @param {HTMLElement} icon
           * @returns {HTMLCanvasElement}
           */
          createIcon: function(icon) {
            var size = L.point(this.options.iconSize);

            if (!icon || icon.tagName != "CANVAS") {
              icon = document.createElement("canvas");
            }

            icon.width = size.x;
            icon.height = size.y;

            this._setIconStyles(icon, "icon");

            return icon;
          },

          /**
           * @param {HTMLElement} icon
           * @returns {null}
           */
          createShadow: function(icon) {
            return null;
          },

          /**
           * @param {HTMLElement} icon
           * @param {string} type
           * @private
           */
          _setIconStyles: function(icon, type) {
            if (typeof this.options.drawIcon == "function") {
              this.options.drawIcon.apply(this, arguments);
            }

            L.Icon.prototype._setIconStyles.apply(this, arguments);
          }
        });

        /**
         * Canvas Icon factory
         * @param {Object} options
         * @returns {L.CanvasIcon}
         */
        L.canvasIcon = function(options) {
          return new L.CanvasIcon(options);
        };

        /**
         * AMD compatibility
         */
        if (typeof define == "function" && define.amd) {
          define(L.CanvasIcon);
        }

        L.PiechartIcon = L.CanvasIcon.extend({
          options: {
            iconSize: [48, 48],
            iconAnchor: [24, 24],
            popupAnchor: [24, 24],
            className: "leaflet-piechart-icon",
            valueField: "value",
            nameField: "name"
            /*
                             data: [
                                 {
                                     name: 'Value',
                                     value: 20, // Percentage or raw value
                                     style: {
                                         fillStyle: 'rgba(255,0,0,.5)',
                                         strokeStyle: 'rgba(255,0,0,.5)',
                                         lineWidth: 1
                                     }
                                 },
                             ...
                             ]
                             */
          },

          /**
           * @param {HTMLCanvasElement} icon
           * @param {string} type
           */
          _setIconStyles: function(icon, type) {
            var data = this.options.data;
            if (
              type == "icon" &&
              data &&
              L.Util.isArray(data) &&
              icon.getContext
            ) {
              var ctx = icon.getContext("2d");
              var size = L.point(this.options.iconSize);
              var center = size.divideBy(2);
              ctx.clearRect(0, 0, size.x, size.y);

              var valueField = this.options.valueField;
              var total = this._getTotal(data, valueField);
              var x = center.x;
              var y = center.y;
              if (total) {
                var radius = Math.min(x, y);
                var fraction = (Math.PI / total) * 2;
                var startAngle = -Math.PI / 2;
                var stopAngle;
                var style;
                for (var i = 0, l = data.length; i < l; i++) {
                  ctx.beginPath();
                  style = data[i].style || this._getStyle(i, l);
                  this._applyStyle(ctx, style);
                  stopAngle = fraction * data[i][valueField] + startAngle;
                  ctx.arc(
                    x,
                    y,
                    radius - Math.ceil((style.lineWidth || 0) / 2),
                    startAngle,
                    stopAngle
                  );
                  ctx.stroke();
                  ctx.lineTo(x, y);
                  startAngle = stopAngle;
                  ctx.fill();
                  ctx.closePath();
                }
              }
            }
            L.CanvasIcon.prototype._setIconStyles.apply(this, arguments);
          },

          /**
           * @param {Object[]} data Array of objects
           * @param {string} field Field to summarize
           * @returns {number}
           * @private
           */
          _getTotal: function(data, field) {
            var total = 0;
            for (var i = 0, l = data.length; i < l; i++) {
              total += +data[i][field];
            }
            return total;
          },

          /**
           * Applies context style
           * @param {CanvasRenderingContext2D} ctx
           * @param {Object} props
           * @private
           */
          _applyStyle: function(ctx, props) {
            for (var i in props) {
              ctx[i] = props[i];
            }
          },

          /**
           * Generates style for chart segment
           * @param {number} segment Segment number
           * @param {number} total Total segments
           * @returns {{fillStyle: string, strokeStyle: string, lineWidth: number}}
           * @private
           */
          _getStyle: function(segment, total) {
            /**
             * Converts an HSL color value to RGB. Conversion formula
             * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
             * Assumes h, s, and l are contained in the set [0, 1] and
             * returns r, g, and b in the set [0, 255].
             * @url http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
             *
             * @param {number} h The hue
             * @param {number} s The saturation
             * @param {number} l The lightness
             * @return {string} The RGB representation
             */
            var hslToRgb = function(h, s, l) {
              var r, g, b;
              if (s == 0) {
                r = g = b = l; // achromatic
              } else {
                var hue2rgb = function(p, q, t) {
                  if (t < 0) t += 1;
                  if (t > 1) t -= 1;
                  if (t < 1 / 6) return p + (q - p) * 6 * t;
                  if (t < 1 / 2) return q;
                  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                  return p;
                };

                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
              }

              return (
                Math.round(r * 255) +
                "," +
                Math.round(g * 255) +
                "," +
                Math.round(b * 255)
              );
            };

            var angle = 360 / (total * 2.5);
            var offset = (segment % 2) * total;
            var hue = (angle * (offset + (segment - (segment % 2)))) / 360;
            var rgb = hslToRgb(hue, 0.7, 0.5);
            return {
              fillStyle: "rgba(" + rgb + ",.5)",
              strokeStyle: "rgba(" + rgb + ",.7)",
              lineWidth: 1
            };
          }
        });

        /**
         * Pie char Icon factory
         * @param {Object} options
         * @returns {L.PiechartIcon}
         */
        L.piechartIcon = function(options) {
          return new L.PiechartIcon(options);
        };

        /**
         * Pie chart Marker
         * @type {L.Marker}
         */
        L.PiechartMarker = L.Marker.extend({
          options: {
            icon: null,
            radius: 20,
            riseOnHover: true
          },

          initialize: function(latlng, options) {
            var opts = {};
            L.Util.extend(opts, options);
            if (opts.radius) {
              var diameter = opts.radius * 2;
              opts.iconSize = [diameter, diameter];
              opts.iconAnchor = [opts.radius, opts.radius];
            }
            opts.icon = L.piechartIcon(opts);
            L.Marker.prototype.initialize.apply(this, [latlng, opts]);
          }
        });

        /**
         * Pie chart Marker factory
         * @param {L.LatLng} latlng
         * @param {Object} options
         * @returns {L.PiechartMarker}
         */
        L.piechartMarker = function(latlng, options) {
          return new L.PiechartMarker(latlng, options);
        };

        // magnifying glass library
        // leaflet.magnifyingglass.js

        // L.MagnifyingGlass = L.Layer.extend({
        //     options: {
        //         radius: 100,
        //         zoomOffset: 3,
        //         layers: [ ],
        //         fixedPosition: false,
        //         latLng: [0, 0],
        //         fixedZoom: -1
        //     },
        //
        //     initialize: function(options) {
        //         L.Util.setOptions(this, options);
        //         this._fixedZoom = (this.options.fixedZoom != -1);
        //         this._mainMap = null;
        //         this._glassMap = null;
        //     },
        //
        //     getMap: function(){
        //         return this._glassMap;
        //     },
        //
        //     _createMiniMap: function(elt) {
        //         return new L.Map(elt, {
        //             layers: this.options.layers,
        //             zoom: this._getZoom(),
        //             maxZoom: this._mainMap.getMaxZoom(),
        //             minZoom: this._mainMap.getMinZoom(),
        //             crs: this._mainMap.options.crs,
        //             fadeAnimation: false,
        //             // disable every controls and interaction means
        //             attributionControl: false,
        //             zoomControl: false,
        //             boxZoom: false,
        //             touchZoom: false,
        //             scrollWheelZoom: false,
        //             doubleClickZoom: false,
        //             dragging: false,
        //             keyboard: false,
        //         });
        //     },
        //
        //     _getZoom: function() {
        //         return (this._fixedZoom) ?
        //             this.options.fixedZoom :
        //             this._mainMap.getZoom() + this.options.zoomOffset;
        //     },
        //
        //     _updateZoom: function() {
        //         this._glassMap.setZoom(this._getZoom());
        //     },
        //
        //     setRadius: function(radius) {
        //         this.options.radius = radius;
        //         if(this._wrapperElt) {
        //             this._wrapperElt.style.width = this.options.radius * 2 + 'px';
        //             this._wrapperElt.style.height = this.options.radius * 2 + 'px';
        //         }
        //     },
        //
        //     setLatLng: function(latLng) {
        //         this.options.latLng = latLng;
        //         this._update(latLng);
        //     },
        //
        //     _updateFromMouse: function(evt) {
        //         this._update(evt.latlng, evt.layerPoint);
        //     },
        //
        //     _updateFixed: function() {
        //         this._update(this.options.latLng);
        //     },
        //
        //     _update: function(latLng, layerPoint) {
        //         // update mini map view, forcing no animation
        //         this._glassMap.setView(latLng, this._getZoom(), {
        //             pan : { animate: false }
        //         });
        //
        //         // update the layer element position on the main map,
        //         // using the one provided or reprojecting it
        //         layerPoint = layerPoint || this._mainMap.latLngToLayerPoint(latLng);
        //         this._wrapperElt.style.left = layerPoint.x - this.options.radius + 'px';
        //         this._wrapperElt.style.top = layerPoint.y - this.options.radius + 'px';
        //     },
        //
        //     /**
        //      As defined by ILayer
        //      */
        //     onAdd: function(map) {
        //         this._mainMap = map;
        //         // create a wrapper element and a container for the map inside it
        //         this._wrapperElt = L.DomUtil.create('div', 'leaflet-magnifying-glass');
        //         var glassMapElt = L.DomUtil.create('div', '', this._wrapperElt);
        //         // Webkit border-radius clipping workaround (see CSS)
        //         if(L.Browser.webkit)
        //             L.DomUtil.addClass(glassMapElt, 'leaflet-magnifying-glass-webkit');
        //         // build the map
        //         this._glassMap = this._createMiniMap(glassMapElt);
        //
        //         // forward some DOM events as Leaflet events
        //         L.DomEvent.addListener(this._wrapperElt, 'click', this._fireClick, this);
        //
        //         var opts = this.options;
        //
        //         this.setRadius(opts.radius);
        //         this.setLatLng(opts.latLng);
        //
        //         this._glassMap.whenReady(function() {
        //             if(opts.fixedPosition) {
        //                 this._mainMap.on('zoomend', this._updateFixed, this);
        //                 // for now, hide the elements during zoom transitions
        //                 L.DomUtil.addClass(this._wrapperElt, ('leaflet-zoom-hide'));
        //             } else {
        //                 this._mainMap.on('mousemove', this._updateFromMouse, this);
        //                 if(!this._fixedZoom) {
        //                     this._mainMap.on('zoomend', this._updateZoom, this);
        //                 }
        //             }
        //         }, this);
        //
        //         // add the magnifying glass as a layer to the top-most pane
        //         map.getPanes().popupPane.appendChild(this._wrapperElt);
        //
        //         // needed after the element has been added, otherwise tile loading is messy
        //         this._glassMap.invalidateSize();
        //
        //         return this;
        //     },
        //
        //     _fireClick: function(domMouseEvt) {
        //         this.fire('click', domMouseEvt);
        //         L.DomEvent.stopPropagation(domMouseEvt);
        //     },
        //
        //     /**
        //      As defined by ILayer
        //      */
        //     onRemove: function(map) {
        //         map.off('viewreset', this._updateFixed, this);
        //         map.off('mousemove', this._updateFromMouse, this);
        //         map.off('zoomend', this._updateZoom, this);
        //         // layers must be explicitely removed before map destruction,
        //         // otherwise they can't be reused if the mg is re-added
        //         for(var i=0, l=this.options.layers.length; i<l; i++) {
        //             this._glassMap.removeLayer(this.options.layers[i]);
        //         }
        //         this._glassMap.remove();
        //         L.DomEvent.removeListener(this._wrapperElt, 'click', this._fireClick);
        //         map.getPanes().popupPane.removeChild(this._wrapperElt);
        //         this._mainMap = null;
        //
        //         return this;
        //     }
        // });
        //
        // L.magnifyingGlass = function (options) {
        //     return new L.MagnifyingGlass(options);
        // };

        // example_button.js

        // L.Control.MagnifyingGlass = L.Control.extend({
        //
        //     _magnifyingGlass: false,
        //
        //     options: {
        //         position: 'topleft',
        //         title: 'Toggle Magnifying Glass',
        //         forceSeparateButton: false
        //     },
        //
        //     initialize: function (magnifyingGlass, options) {
        //         this._magnifyingGlass = magnifyingGlass;
        //         // Override default options
        //         for (var i in options) if (options.hasOwnProperty(i) && this.options.hasOwnProperty(i)) this.options[i] = options[i];
        //     },
        //
        //     onAdd: function (map) {
        //         var className = 'leaflet-control-magnifying-glass', container;
        //
        //         if (map.zoomControl && !this.options.forceSeparateButton) {
        //             container = map.zoomControl._container;
        //         } else {
        //             container = L.DomUtil.create('div', 'leaflet-bar');
        //         }
        //
        //         this._createButton(this.options.title, className, container, this._clicked, map, this._magnifyingGlass);
        //         return container;
        //     },
        //
        //     _createButton: function (title, className, container, method, map, magnifyingGlass) {
        //         var link = L.DomUtil.create('a', className, container);
        //         link.href = '#';
        //         link.title = title;
        //
        //         L.DomEvent
        //             .addListener(link, 'click', L.DomEvent.stopPropagation)
        //             .addListener(link, 'click', L.DomEvent.preventDefault)
        //             .addListener(link, 'click', function() {method(map, magnifyingGlass);}, map);
        //
        //         return link;
        //     },
        //
        //     _clicked: function (map, magnifyingGlass) {
        //         if (!magnifyingGlass) {
        //             return;
        //         }
        //
        //         if (map.hasLayer(magnifyingGlass)) {
        //             map.removeLayer(magnifyingGlass);
        //         } else {
        //             magnifyingGlass.addTo(map);
        //         }
        //     }
        // });
        //
        // L.control.magnifyingglass = function (magnifyingGlass, options) {
        //     return new L.Control.MagnifyingGlass(magnifyingGlass, options);
        // };

        // end of Magnifying Glass

        $.fn.storymap = function(options) {
          var defaults = {
            selector: "[data-place]",
            breakpointPos: "45.333%",
            createMap: function() {
              // create a map in the "map" div, set the view to a given place and zoom
              // var map = L.map('map').setView([38.723, -104.718], 11);
              //
              // // add an OpenStreetMap tile layer
              // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
              //     attribution: 'Storytelling WebGIS',
              // }).addTo(map);

              var tileUrl =
                "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
              var tileOptions = {
                attribution: "Storytelling WebGIS"
              };

              var map = new L.Map("map", {
                center: [38.723, -104.718],
                zoom: 11,
                layers: [L.tileLayer(tileUrl, tileOptions)]
              });

              // 所有slides都有的layers

              function pop_Overall_COSpringsAirport(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>Category: </b>' +
                  feature.properties["Category"] +
                  "</td>\
                    </tr>\
                </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Overall_COSpringsAirport() {
                return {
                  pane: "pane_Overall_COSpringsAirport",
                  opacity: 1,
                  color: "rgba(153, 204, 255,1.0)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 2.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(203,151,131,0.0)"
                };
              }

              map.createPane("pane_Overall_COSpringsAirport");
              map.getPane("pane_Overall_COSpringsAirport").style.zIndex = 401;
              map.getPane("pane_Overall_COSpringsAirport").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Overall_COSpringsAirport_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Overall_COSpringsAirport",
                  /*onEachFeature: pop_Overall_COSpringsAirport,*/
                  style: style_Overall_COSpringsAirport,
                  className: "Layer_Overall_COSpringsAirport"
                };
              }

              var Layer_Overall_COSpringsAirport = new L.GeoJSON.AJAX(
                pathPrefix + "static/data/Overall_COSpringsAirport.geojson",
                layer_Overall_COSpringsAirport_Info()
              );
              Layer_Overall_COSpringsAirport.addTo(map);

              function pop_Overall_FountainCreek(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>Category: </b>' +
                  feature.properties["Category"] +
                  "</td>\
                    </tr>\
                </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Overall_FountainCreek() {
                return {
                  pane: "pane_Overall_FountainCreek",
                  opacity: 1,
                  color: "rgba(82, 165, 237,1.0)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 2.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(203,151,131,0.0)"
                };
              }

              map.createPane("pane_Overall_FountainCreek");
              map.getPane("pane_Overall_FountainCreek").style.zIndex = 401;
              map.getPane("pane_Overall_FountainCreek").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Overall_FountainCreek_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Overall_FountainCreek",
                  /*onEachFeature: pop_Overall_PetersonCarsonBound,*/
                  style: style_Overall_FountainCreek,
                  className: "layer_Overall_FountainCreek"
                };
              }

              var Layer_Overall_FountainCreek = new L.GeoJSON.AJAX(
                pathPrefix + "static/data/Overall_FountainCreek.geojson",
                layer_Overall_FountainCreek_Info()
              );

              Layer_Overall_FountainCreek.addTo(map);

              function pop_Overall_CarsonBound(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>Category: </b>' +
                  feature.properties["Category"] +
                  "</td>\
                    </tr>\
                </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Overall_CarsonBound() {
                return {
                  pane: "pane_Overall_CarsonBound",
                  opacity: 1,
                  color: "rgba(255, 255, 204,1.0)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 2.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(203,151,131,0.0)"
                };
              }

              map.createPane("pane_Overall_CarsonBound");
              map.getPane("pane_Overall_CarsonBound").style.zIndex = 401;
              map.getPane("pane_Overall_CarsonBound").style["mix-blend-mode"] =
                "normal";

              function layer_Overall_CarsonBound_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Overall_CarsonBound",
                  /*onEachFeature: pop_Overall_CarsonBound,*/
                  style: style_Overall_CarsonBound,
                  className: "Layer_Overall_CarsonBound"
                };
              }

              var Layer_Overall_CarsonBound = new L.GeoJSON.AJAX(
                pathPrefix + "static/data/Overall_CarsonBound.geojson",
                layer_Overall_CarsonBound_Info()
              );
              Layer_Overall_CarsonBound.addTo(map);

              function pop_Overall_PetersonBound(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>Category: </b>' +
                  feature.properties["Category"] +
                  "</td>\
                    </tr>\
                </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Overall_PetersonBound() {
                return {
                  pane: "pane_Overall_PetersonBound",
                  opacity: 1,
                  color: "rgba(198, 253, 163,1.0)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 2.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(203,151,131,0.0)"
                };
              }

              map.createPane("pane_Overall_PetersonBound");
              map.getPane("pane_Overall_PetersonBound").style.zIndex = 401;
              map.getPane("pane_Overall_PetersonBound").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Overall_PetersonBound_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Overall_PetersonBound",
                  /*onEachFeature: pop_Overall_CarsonBound,*/
                  style: style_Overall_PetersonBound,
                  className: "Layer_Overall_PetersonBound"
                };
              }

              var Layer_Overall_PetersonBound = new L.GeoJSON.AJAX(
                pathPrefix + "static/data/Overall_PetersonBound.geojson",
                layer_Overall_PetersonBound_Info()
              );
              Layer_Overall_PetersonBound.addTo(map);

              //                         class areaShape{
              //                             constructor(name) {
              //                                 this.pop_layer = function (feature, layer) {
              //                                     var popupContent = '<table>\
              //     <tr>\
              //         <td colspan="2"><b>' + feature.properties['Name'] + '</b></td>\
              //     </tr>\
              // </table>';
              //                                     layer.bindPopup(popupContent, {maxHeight: 400});
              //                                 };
              //
              //                                 this.style_layer = function() {
              //                                     return {
              //                                         pane: 'pane_Overall_BigJohnsonReservoir',
              //                                         opacity: 1,
              //                                         color: 'rgba(82, 165, 237,1.0)',
              //                                         dashArray: '',
              //                                         lineCap: 'butt',
              //                                         lineJoin: 'miter',
              //                                         weight: 2.0,
              //                                         fill: true,
              //                                         fillOpacity: 1,
              //                                         fillColor: 'rgba(82, 165, 237,1)',
              //                                     }
              //                                 };
              //
              //                                 function layer_Info() {
              //                                     return {
              //                                         attribution: '<a href=""></a>',
              //                                         onEachFeature: this.pop_layer,
              //                                         style: this.style_layer,
              //                                         className: "layer_"+name,
              //                                     }
              //                                 }
              //
              //                             }
              //                         }
              //
              //                         var bigJohnsonReservoir = new areaShape("Overall_BigJohnsonReservoir");
              //
              //                         var Layer_Overall_BigJohnsonReservoir = new L.GeoJSON.AJAX(pathPrefix + "static/data/Overall_BigJohnsonReservoir.geojson", bigJohnsonReservoir.layer_Info);
              //                         Layer_Overall_BigJohnsonReservoir.addTo(map);

              //                             function pop_Overall_BigJohnsonReservoir(feature, layer) {
              //                                 var popupContent = '<table>\
              //     <tr>\
              //         <td colspan="2"><b>' + feature.properties['Name'] + '</b></td>\
              //     </tr>\
              // </table>';
              //                                 layer.bindPopup(popupContent, {maxHeight: 400});
              //                             }
              //
              //                             function style_Overall_BigJohnsonReservoir() {
              //                                 return {
              //                                     pane: 'pane_Overall_BigJohnsonReservoir',
              //                                     opacity: 1,
              //                                     color: 'rgba(82, 165, 237,1.0)',
              //                                     dashArray: '',
              //                                     lineCap: 'butt',
              //                                     lineJoin: 'miter',
              //                                     weight: 2.0,
              //                                     fill: true,
              //                                     fillOpacity: 1,
              //                                     fillColor: 'rgba(82, 165, 237,0.8)',
              //                                 }
              //                             }
              //
              //                             map.createPane('pane_Overall_BigJohnsonReservoir');
              //                             map.getPane('pane_Overall_BigJohnsonReservoir').style.zIndex = 401;
              //                             map.getPane('pane_Overall_BigJohnsonReservoir').style['mix-blend-mode'] = 'normal';
              //
              //                             function layer_Overall_BigJohnsonReservoir_Info() {
              //                                 return {
              //                                     attribution: '<a href=""></a>',
              //                                     pane: 'pane_Overall_BigJohnsonReservoir',
              //                                     onEachFeature: pop_Overall_BigJohnsonReservoir,
              //                                     style: style_Overall_BigJohnsonReservoir,
              //                                     className: "layer_Overall_BigJohnsonReservoir",
              //                                 }
              //                             }
              //
              //
              //
              //
              //
              //                             var Layer_Overall_BigJohnsonReservoir = new L.GeoJSON.AJAX(pathPrefix + "static/data/Overall_BigJohnsonReservoir.geojson", layer_Overall_BigJohnsonReservoir_Info());
              //                             Layer_Overall_BigJohnsonReservoir.addTo(map);

              function style_textlabel_Slide1() {
                return {
                  opacity: 0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/img_circle_1.png",
                    iconSize: [1, 1],
                    className: "layer_textlabel label_slide1" //别忘了加进cleanalllayer要删除的数组
                  })
                };
              }

              var marker1 = new L.marker(
                [38.719, -104.725],
                style_textlabel_Slide1()
              ); //opacity may be set to zero
              var marker2 = new L.marker(
                [38.785, -104.654],
                style_textlabel_Slide1()
              ); //opacity may be set to zero
              var marker3 = new L.marker(
                [38.8406, -104.6743],
                style_textlabel_Slide1()
              ); //opacity may be set to zero

              marker1.bindTooltip("Fort Carson", {
                permanent: true,
                className: "map-text-label",
                offset: [0, 0]
              });
              marker2.bindTooltip("CO Springs Airport", {
                permanent: true,
                className: "map-text-label",
                offset: [0, 0]
              });
              marker3.bindTooltip("Peterson AFB", {
                permanent: true,
                className: "map-text-label",
                offset: [0, 0]
              });

              marker1.addTo(map);
              marker2.addTo(map);
              marker3.addTo(map);

              // END 所有slides都有的layers

              // function addDataToMap(data, map) {
              //     var dataLayer = L.geoJson(data);
              //     dataLayer.addTo(map);
              // }

              // 那一坨本来在这

              return map;
            }
          };

          var settings = $.extend(defaults, options);
          // console.log(settings)

          if (typeof L === "undefined") {
            throw new Error("Storymap requires Laeaflet");
          }
          if (typeof _ === "undefined") {
            throw new Error("Storymap requires underscore.js");
          }

          function getDistanceToTop(elem, top) {
            var docViewTop = $(window).scrollTop();
            var elemTop = $(elem).offset().top;
            var dist = elemTop - docViewTop;
            var d1 = top - dist;
            if (d1 < 0) {
              return $(window).height();
            }
            return d1;
          }

          // function highlightTopPara(paragraphs, top) {

          //     var distances = $.map(paragraphs, function (element) {
          //         var dist = getDistanceToTop(element, top);
          //         return { el: $(element), distance: dist };
          //     });

          //     function findMin(pre, cur) {
          //         if (pre.distance > cur.distance) {
          //             return cur;
          //         } else {
          //             return pre;
          //         }
          //     }

          //     var closest = distances.reduce(findMin);

          //     $.each(paragraphs, function (key, element) {
          //         var paragraph = $(element);
          //         if (paragraph[0] !== closest.el[0]) {
          //             paragraph.trigger('notviewing');
          //         }
          //     });

          //     if (!closest.el.hasClass('viewing')) {
          //         closest.el.trigger('viewing');
          //     }
          // }

          function highlightTopPara(paragraphs, top) {
            var distances = _.map(paragraphs, function(element) {
              var dist = getDistanceToTop(element, top);
              return {
                el: $(element),
                distance: dist
              };
            });

            var closest = _.min(distances, function(dist) {
              return dist.distance;
            });

            _.each(paragraphs, function(element) {
              var paragraph = $(element);
              if (paragraph[0] !== closest.el[0]) {
                paragraph.trigger("notviewing");
              }
            });

            if (!closest.el.hasClass("viewing")) {
              closest.el.trigger("viewing");
            }
          }

          function watchHighlight(element, searchfor, top) {
            var paragraphs = element.find(searchfor);
            highlightTopPara(paragraphs, top);
            $(window).scroll(function() {
              highlightTopPara(paragraphs, top);
            });
          }

          var makeStoryMap = function(element, markers) {
            var topElem = $('<div class="breakpoint-current"></div>').css(
              "top",
              settings.breakpointPos
            );
            $("body").append(topElem);

            var top = topElem.offset().top - $(window).scrollTop();

            var searchfor = settings.selector;

            var paragraphs = element.find(searchfor);

            paragraphs.on("viewing", function() {
              $(this).removeClass("notviewing");
              $(this).addClass("viewing");
            });

            paragraphs.on("notviewing", function() {
              $(this).removeClass("viewing");
              $(this).addClass("notviewing");
            });

            watchHighlight(element, searchfor, top);

            var map = settings.createMap();

            var initPoint = map.getCenter();
            var initZoom = map.getZoom();

            var fg = L.featureGroup().addTo(map);

            function showMapView(key) {
              //console.log(key)

              map.setView(initPoint, initZoom, true);

              //在此添加所有layer的变量名
              // "layer_Overall_BigJohnsonReservoir",
              function cleanAllLayer() {
                var allSlideLayers = [
                  "layer_Overall_AntlersHotel",
                  "layer_Overall_FountainCreek",
                  "leaflet-image-layer",
                  "layer_imageSlide02",
                  "layer_slide2_AntlersHotel",
                  "layer_slide2_FCreek",
                  "layer_slide2_BJR",
                  "layer_Slide2_1947Aerial",
                  "layer_Slide3_PRP",
                  "layer_Slide4_Pumping16May",
                  "layer_Slide4_Pumping16Oct",
                  "layer_Slide4_Watersheds",
                  "layer_Slide5_RCRA",
                  "layer_Slide5_GWPFCSum",
                  "layer_Slide6_SEPFCSum",
                  "layer_Slide6_SOPFCSum",
                  "layer_Slide6_SWPFCSum",
                  "legend_Slide3_PRP",
                  "legend_Slide4_Pumping16May",
                  "legend_Slide4_Pumping16Oct",
                  "legend_Slide4_Watersheds",
                  "legend_Slide5_GWPFCSum",
                  "legend_Slide6_SEPFCSum",
                  "legend_Slide6_SOPFCSum",
                  "legend_Slide6_SWPFCSum",
                  "theChart",
                  "legend_Slide7",
                  "legend_Slide7_ct_1718ngs",
                  "legend_Slide7_ct_may17",
                  "legend_Slide7_ct_BdRck",
                  "layer_Slide7_SaturatedAlluvium",
                  "layer_Slide7_BedrockContour2017July",
                  "leaflet-tooltip",
                  "layer_Slide7_GWFlowPaths",
                  "layer_Slide7_Label_Triangles",
                  "layer_Slide7_GWContour2017May",
                  "layer_Slide7_GWContour201718NGS",
                  "layer_Slide7_AA_point",
                  "layer_Slide7_AA_line",
                  "layer_Slide7_BB_point",
                  "layer_Slide7_BB_line",
                  "layer_Slide8_EPAPFCSum",
                  "layer_Slide8_OffsiteTrends",
                  "layer_Slide8_OnsiteTrends",
                  "layer_Slide9_FountainCreekGnL",
                  "layer_Slide9_GWBorom",
                  "layer_Slide9_GWGadolinium",
                  "layer_Slide9_GWdoxy1816",
                  "layer_Slide9_GWMetformin",
                  "layer_Slide9_Label_Triangles",
                  "layer_Slide9_WWTPlant",
                  "layer_Slide9_FacilityDisposalPipeline",
                  "legend_Slide8_EPAPFCSum",
                  "legend_Slide8_OffsiteTrends",
                  "legend_Slide8_OnsiteTrends",
                  "legend_Slide9_GWBorom",
                  "legend_Slide9_GWGadolinium",
                  "legend_Slide9_GWdoxy1816",
                  "legend_Slide9_GWMetformin",
                  "leaflet-piechart-icon",
                  "legend_Slide10_Pie",
                  "layer_Slides1112_TPFAS6",
                  "layer_Slides1112_TPFAS18",
                  "legend_Slides11_TPFAS6",
                  "legend_Slides11_TPFAS18",
                  "layer_Slide13_PFBA",
                  "layer_Slide13_PFPeA",
                  "layer_Slide13_PFHxA",
                  "layer_Slide13_PFHpA",
                  "layer_Slide13_PFOA",
                  "layer_Slide13_PFNA",
                  "layer_Slide13_PFDA",
                  "layer_Slide13_PFUnDA",
                  "layer_Slide13_PFBS",
                  "layer_Slide13_PFHxS",
                  "layer_Slide13_PFOS",
                  "layer_Slide13_PFOSA",
                  "layer_Slide13_62FTS",
                  "layer_Slide13_82FTS",
                  "legend_Slide13_PFAS",
                  "legend_Slide13_PFBA",
                  "layer_Slide13_PFPeA_circleR",
                  "layer_Slide13_PFHxA_circleR",
                  "layer_Slide13_PFHpA_circleR",
                  "layer_Slide13_PFOA_circleR",
                  "layer_Slide13_PFNA_circleR",
                  "layer_Slide13_PFNA_circleG",
                  "layer_Slide13_PFBS_circleR",
                  "layer_Slide13_PFBS_circleG",
                  "layer_Slide13_PFHxS_circleR",
                  "layer_Slide13_PFOS_circleR",
                  "layer_Slide13_62FTS_circleR1",
                  "layer_Slide13_62FTS_circleR2",
                  "layer_Slide13_PFDA_circleR",
                  "layer_Slide13_PFUnDA_circleR",
                  "layer_Slide13_82FTS_circleR",
                  "layer_Slide14_EPAPFCSum",
                  "layer_Slide13_PFBA_circleR_fortcarson",
                  "layer_Slide13_PFPeA_circleR_fortcarson",
                  "layer_Slide13_PFHxA_circleR_fortcarson",
                  "layer_Slide13_62FTS_circleR_fortcarson",
                  "legend_Slide14_EPAPFCSum",
                  "layer_Slide15_WaterTreatmentSystems",
                  "layer_Slide15_PublicWaterSystemPFCSum",
                  "legend_Slide15_PublicWaterSystemPFCSum",
                  "layer_Slide15_Watersheds",
                  "legend_Slide15_Watersheds",
                  "leaflet-popup-content-wrapper"
                ];

                for (var i = allSlideLayers.length - 1; i >= 0; --i) {
                  var element = document.getElementsByClassName(
                    allSlideLayers[i]
                  );
                  //console.log(element);

                  for (var j = element.length - 1; j >= 0; --j) {
                    element[j].remove();
                  }
                }
              }

              cleanAllLayer();

              function cleanTheLayer(layerClassName) {
                var element = document.getElementsByClassName(layerClassName);
                // console.log(element);

                for (var i = element.length - 1; i >= 0; --i) {
                  element[i].remove();
                }
              }

              var bounds_group = new L.featureGroup([]);
              // var LayerGroup = L.layerGroup().addTo(map);

              // 地图 Feature 数据

              var Slide11HTMLBox =
                '\
		<div class="slide11-pane"><br>\
				<ul>\
				<b>Paleo Drainage Contour</b><font size="1">&nbsp&nbsp&nbspfeet&nbsp</font><br>\
				    <li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(253,231,37,1.0);stroke-width:2" /></svg>&nbsp&nbsp1650</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(214,226,26,1.0);stroke-width:2" /></svg>&nbsp&nbsp1700</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(171,220,50,1.0);stroke-width:2" /></svg>&nbsp&nbsp1750</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(130,212,76,1.0);stroke-width:2" /></svg>&nbsp&nbsp1800</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(93,201,98,1.0);stroke-width:2" /></svg>&nbsp&nbsp1850</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(61,188,116,1.0);stroke-width:2" /></svg>&nbsp&nbsp1900</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(39,174,128,1.0);stroke-width:2" /></svg>&nbsp&nbsp1950</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(30,160,136,1.0);stroke-width:2" /></svg>&nbsp&nbsp2000</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(32,144,141,1.0);stroke-width:2" /></svg>&nbsp&nbsp2050</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(38,129,142,1.0);stroke-width:2" /></svg>&nbsp&nbsp2100</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(43,114,142,1.0);stroke-width:2" /></svg>&nbsp&nbsp2150</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(51,99,141,1.0);stroke-width:2" /></svg>&nbsp&nbsp2200</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(58,82,139,1.0);stroke-width:2" /></svg>&nbsp&nbsp2250</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(66,64,134,1.0);stroke-width:2" /></svg>&nbsp&nbsp2300</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(70,44,123,1.0);stroke-width:2" /></svg>&nbsp&nbsp2350</li>\
					<li><svg width="25" height="14"><line x1="0" y1="9" x2="25" y2="9" style="stroke:rgba(72,24,106,1.0);stroke-width:2" /></svg>&nbsp&nbsp2400</li>\
				 </ul>\
			</div>\
		';

              // ******************************* LEGEND ***************************

              var Legend_Slide3_PRP = L.control({ position: "bottomleft" });

              Legend_Slide3_PRP.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide3_PRP"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>Potentially Responsible Parties</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP01.png" class="legendIcon">&nbsp;Airport</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP02.png" class="legendIcon">&nbsp;Asphalt and Concrete Manufacturing and Recycling (active)</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP03.png" class="legendIcon">&nbsp;Automotive</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP04.png" class="legendIcon">&nbsp;Commerical Irrigation</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP05.png" class="legendIcon">&nbsp;Dry Cleaners</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP06.png" class="legendIcon">&nbsp;Dry Cleaners/RCRA</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP07.png" class="legendIcon">&nbsp;Fire Departments</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP08.png" class="legendIcon">&nbsp;Fuel Farms</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP09.png" class="legendIcon">&nbsp;Metal Plating and Coatings (active)</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP10.png" class="legendIcon">&nbsp;Metal Plating and Coatings (active)/RCRA</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP11.png" class="legendIcon">&nbsp;Metal Plating and Coatings (closed)</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP16.png" class="legendIcon">&nbsp;Military</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP17.png" class="legendIcon">&nbsp;Military Fire Departments</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP12.png" class="legendIcon">&nbsp;Quarry</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP13.png" class="legendIcon">&nbsp;RCRA</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP14.png" class="legendIcon">&nbsp;Semi Conductor Manufacturing</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_PRP15.png" class="legendIcon">&nbsp;Wastewater Treatment Plant, Biosolids, Landfills, and Power Plants</li>\
                                  </ul></div>'
                );

                // <li><span style="background:#D188BF;"></span>Airport</li>
                // <li><span style="background:#79F55B;"></span>Asphalt and Concrete Manufacturing and Recycling (active)</li>
                // <li><span style="background:#62D9D5;"></span>Automotive</li>
                // <li><span style="background:#998639;"></span>Commerical Irrigation</li>
                // <li><span style="background:#4B4ED1;"></span>Dry Cleaners</li>
                // <li><span style="background:#2F8744;"></span>Dry Cleaners/RCRA</li>
                // <li><span style="background:#BF4343;"></span>Fire Departments</li>
                // <li><span style="background:#4979A6;"></span>Fuel Farms</li>
                // <li><span style="background:#CAF2A2;"></span>Metal Plating and Coatings (active)</li>
                // <li><span style="background:#F760F7;"></span>Metal Plating and Coatings (active)/RCRA</li>
                // <li><span style="background:#8C3894;"></span>Metal Plating and Coatings (closed)</li>
                // <li><span style="background:#F0E354;"></span>Quarry</li>
                // <li><span style="background:#F2A380;"></span>RCRA</li>
                // <li><span style="background:#63E69B;"></span>Semi Conductor Manufacturing</li>
                // <li><span style="background:#872F52;"></span>Wastewater Treatment Plant, Biosolids, Landfills, and Power Plants</li>

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide4_Pumping16May = L.control({
                position: "bottomleft"
              });

              Legend_Slide4_Pumping16May.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide4_Pumping16May"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>&lt; May 2016</b> (Gallons)</li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_triangle_1.png" class="legendIcon">&nbsp;0 - 5,000,000</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_triangle_2.png" class="legendIcon">&nbsp;5,000,001 - 10,000,000</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_triangle_4.png" class="legendIcon">&nbsp;10,000,001 - 20,000,000</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_triangle_6.png" class="legendIcon">&nbsp;20,000,001 - 33,886,000</li>\
                                  </ul></div>'
                );

                // <li><span style="background:#38A800;"></span>0 - 5,000,000</li>
                // <li><span style="background:#B0E000;"></span>5,000,001 - 10,000,000</li>
                // <li><span style="background:#FFAA00;"></span>10,000,001 - 20,000,000</li>
                // <li><span style="background:#FF0000;"></span>20,000,001 - 33,886,000</li>

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide4_Pumping16Oct = L.control({
                position: "bottomleft"
              });

              Legend_Slide4_Pumping16Oct.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide4_Pumping16Oct"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>&gt; Oct 2016</b> (Gallons)</li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_triangle_1.png" class="legendIcon">&nbsp;0 - 5,000,000</li>\n                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_triangle_2.png" class="legendIcon">&nbsp;5,000,001 - 10,000,000</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_triangle_4.png" class="legendIcon">&nbsp;10,000,001 - 20,000,000</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_triangle_6.png" class="legendIcon">&nbsp;20,000,001 - 43,935,000</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide4_Watersheds = L.control({
                position: "bottomleft"
              });

              Legend_Slide4_Watersheds.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide4_Watersheds"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>Water Districts</b></li><br>\
                                    <li><span style="background:#62804B; border: 1px solid #909090;"></span>Academy</li>\
                                    <li><span style="background:#E8BEFF; border: 1px solid #909090;"></span>CSU - Ft Carson</li>\
                                    <li><span style="background:#FA6E69; border: 1px solid #909090;"></span>CSU-USAFA</li>\
                                    <li><span style="background:#A7B8FA; border: 1px solid #909090;"></span>Cherokee</li>\
                                    <li><span style="background:#FFAA00; border: 1px solid #909090;"></span>Colorado Springs</li>\
                                    <li><span style="background:#56E3E1; border: 1px solid #909090;"></span>Donala</li>\
                                    <li><span style="background:#F5EE69; border: 1px solid #909090;"></span>Falcon Highlands</li>\
                                    <li><span style="background:#303085; border: 1px solid #909090;"></span>Forest Lakes</li>\
                                    <li><span style="background:#824D67; border: 1px solid #909090;"></span>Forest View</li>\
                                    <li><span style="background:#366C87; border: 1px solid #909090;"></span>Fountain</li>\
                                    <li><span style="background:#B1F7A1; border: 1px solid #909090;"></span>Meridian Ranch</li>\
                                    <li><span style="background:#D19356; border: 1px solid #909090;"></span>Monument</li>\
                                    <li><span style="background:#E872B7; border: 1px solid #909090;"></span>Paint Brush Hills</li>\
                                    <li><span style="background:#8474ED; border: 1px solid #909090;"></span>Park Forest</li>\
                                    <li><span style="background:#913637; border: 1px solid #909090;"></span>Security</li>\
                                    <li><span style="background:#898944; border: 1px solid #909090;"></span>Shriever AFB</li>\
                                    <li><span style="background:#4FE381; border: 1px solid #909090;"></span>Stratmoor Hills</li>\
                                    <li><span style="background:#ABCD66; border: 1px solid #909090;"></span>Triview</li>\
                                    <li><span style="background:#DB8A99; border: 1px solid #909090;"></span>Westmoor</li>\
                                    <li><span style="background:#E60000; border: 1px solid #909090;"></span>Widefield</li>\
                                    <li><span style="background:#F5CA7A; border: 1px solid #909090;"></span>Woodmen Hills</li>\
                                    <li><span style="background:#833CA3; border: 1px solid #909090;"></span>Woodmoor</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };
              // var Legend_Slide5_RCRA = L.control({position: 'bottomleft'});
              //
              // Legend_Slide5_RCRA.onAdd = function (map) {
              //
              //     var div = L.DomUtil.create('div', 'info legend legend_Slide5_RCRA'),
              //         labels = [];
              //
              //     labels.push('<div class="legend2"><ul class="legend-labels">\
              //     <li><span style="background:#f56725;"></span>A-A\'</li>\
              //     <li><span style="background:#e0f525;"></span>B-B\'</li>\
              //     <li><span style="background:#1cad21;"></span>C-C\'</li>\
              //     <li><span style="background:#1c58ad;"></span>D-D\'</li>\
              //   </ul></div>');
              //
              //
              //     div.innerHTML = labels.join('<br>');
              //     return div;
              // };

              var Legend_Slide5_GWPFCSum = L.control({
                position: "bottomleft"
              });

              Legend_Slide5_GWPFCSum.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide5_GWPFCSum"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>PFOS/PFOA Sum in GW</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_1.png" class="legendIcon">&nbsp;ND</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_2.png" class="legendIcon">&nbsp;0.001 - 0.040</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_3.png" class="legendIcon">&nbsp;0.041 - 0.070  Lifetime HA</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_4.png" class="legendIcon">&nbsp;0.071 - 0.080  Sum Residential RSL</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_5.png" class="legendIcon">&nbsp;0.081 - 3.000</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_6.png" class="legendIcon">&nbsp;3.001 - 15.000</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_7.png" class="legendIcon">&nbsp;15.001 - 174.000  Max Detected</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide6_SEPFCSum = L.control({
                position: "bottomleft"
              });

              Legend_Slide6_SEPFCSum.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide6_SEPFCSum"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>PFOS/PFOA Sum in Sediment</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_hexigon_1.png" class="legendIcon">&nbsp;ND</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_hexigon_2.png" class="legendIcon">&nbsp;0.01 - 126.00  Residential RSL</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_hexigon_3.png" class="legendIcon">&nbsp;126.01 - 200.00</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_hexigon_4.png" class="legendIcon">&nbsp;200.01 - 371.00  Max Detected</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide6_SOPFCSum = L.control({
                position: "bottomleft"
              });

              Legend_Slide6_SOPFCSum.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide6_SOPFCSum"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>PFOS/PFOA Sum in Soil</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_square_0.png" class="legendIcon">&nbsp;0.00 - 0.55</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_square_1.png" class="legendIcon">&nbsp;0.56 - 7.00</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_square_6.png" class="legendIcon">&nbsp;7.01 - 126.00  Residential RSL</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_square_4.png" class="legendIcon">&nbsp;126.01 - 1260.00</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_square_5.png" class="legendIcon">&nbsp;1260.01 - 8602.90  Max Detected</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide6_SWPFCSum = L.control({
                position: "bottomleft"
              });

              Legend_Slide6_SWPFCSum.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide6_SWPFCSum"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>PFOS/PFOA Sum in SW</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_ndiamond_1.png" class="legendIcon" style="width:12px; height:12px;">&nbsp;ND</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_ndiamond_2.png" class="legendIcon" style="width:12px; height:12px;">&nbsp;0.001 - 0.039</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_ndiamond_3.png" class="legendIcon" style="width:12px; height:12px;">&nbsp;0.040 - 0.100</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_ndiamond_4.png" class="legendIcon" style="width:12px; height:12px;">&nbsp;0.101 - 0.400</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_ndiamond_5.png" class="legendIcon" style="width:12px; height:12px;">&nbsp;0.401 - 0.826</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide7 = L.control({ position: "bottomleft" });

              Legend_Slide7.onAdd = function(map) {
                var div = L.DomUtil.create("div", "info legend legend_Slide7"),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>Legend</b></li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides7_AAlegend.png" class="legendIcon_slide7">&nbsp;&nbsp;A-A’</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides7_BBlegend.png" class="legendIcon_slide7">&nbsp;&nbsp;B-B’</li>\
                                  </ul></div>'
                );

                // <li><img src="'+ pathPrefix+'static/img/img_slides7_FlowPath.png" class="legendIcon_slide7">&nbsp;&nbsp;GW Flow Paths</li>

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide7_ct_1718ngs = L.control({
                position: "bottomleft"
              });

              Legend_Slide7_ct_1718ngs.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide7_ct_1718ngs"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>NGS 2017/2018 GW Contour - ft</b></li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#20CC10;stroke-width:2" /></svg>&nbsp;&nbsp;5940.00 - 5995.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#31DE82;stroke-width:2" /></svg>&nbsp;&nbsp;5995.01 - 6040.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#00F2F2;stroke-width:2" /></svg>&nbsp;&nbsp;6040.01 - 6085.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#3283ED;stroke-width:2" /></svg>&nbsp;&nbsp;6085.01 - 6130.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#0220E3;stroke-width:2" /></svg>&nbsp;&nbsp;6130.01 - 6180.00</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide7_ct_may17 = L.control({
                position: "bottomleft"
              });

              Legend_Slide7_ct_may17.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide7_ct_may17"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>Contour May 2017 - ft</b></li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#38A800;stroke-width:2" /></svg>&nbsp;&nbsp;5640.00 - 5760.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#8BD100;stroke-width:2" /></svg>&nbsp;&nbsp;5760.01 - 5870.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#FFFF00;stroke-width:2" /></svg>&nbsp;&nbsp;5870.01 - 5960.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#FF8000;stroke-width:2" /></svg>&nbsp;&nbsp;5960.01 - 6060.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#FF0000;stroke-width:2" /></svg>&nbsp;&nbsp;6060.01 - 6210.00</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide7_ct_BdRck = L.control({
                position: "bottomleft"
              });

              Legend_Slide7_ct_BdRck.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide7_ct_BdRck"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>Bedrock Contours July 2017 - ft</b></li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#FFFFFF;stroke-width:2" /></svg>&nbsp;&nbsp;5720.00 - 5860.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#A8A8A8;stroke-width:2" /></svg>&nbsp;&nbsp;5860.01 - 5980.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#545454;stroke-width:2" /></svg>&nbsp;&nbsp;5980.01 - 6120.00</li>\
                                    <li><svg height="10" width="30"><line x1="0" y1="5" x2="30" y2="5" style="stroke:#000000;stroke-width:2" /></svg>&nbsp;&nbsp;6120.01 - 6260.00</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide8_EPAPFCSum = L.control({
                position: "bottomleft"
              });

              Legend_Slide8_EPAPFCSum.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide8_EPAPFCSum"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>EPA PFOS/PFOA Sum in GW ug/L</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_1.png" class="legendIcon">&nbsp;ND</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_2.png" class="legendIcon">&nbsp;0.001 - 0.040</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_3.png" class="legendIcon">&nbsp;0.041 - 0.070  Lifetime HA</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_4.png" class="legendIcon">&nbsp;0.071 - 0.080  Sum Residential RSL</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_5.png" class="legendIcon">&nbsp;0.081 - 3.000</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_6.png" class="legendIcon">&nbsp;3.001 - 15.000</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_EPAPFCSum_7.png" class="legendIcon">&nbsp;15.001 - 174.000  Max Detected</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide8_OffsiteTrends = L.control({
                position: "bottomleft"
              });

              Legend_Slide8_OffsiteTrends.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide8_OffsiteTrends"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>Off-site Trends</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_trend_purple.png" class="legendIcon">&nbsp;No Trend</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_trend_yellow.png" class="legendIcon">&nbsp;Stable</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_trend_blue.png" class="legendIcon">&nbsp;Decreasing</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_trend_red.png" class="legendIcon">&nbsp;Increasing</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide8_OnsiteTrends = L.control({
                position: "bottomleft"
              });

              Legend_Slide8_OnsiteTrends.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide8_OnsiteTrends"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>On-site Trends</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_trend_purple.png" class="legendIcon">&nbsp;No Trend</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_trend_blue.png" class="legendIcon">&nbsp;Decreasing</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides8_trend_red.png" class="legendIcon">&nbsp;Increasing</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide9_GWBorom = L.control({ position: "bottomleft" });

              Legend_Slide9_GWBorom.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide9_GWBorom"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
    <li><b>Boron in GW ug/L</b></li><br>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_Boron_1.png" class="legendIcon">&nbsp;0 - 90</li>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_Boron_2.png" class="legendIcon">&nbsp;91 - 200</li>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_Boron_3.png" class="legendIcon">&nbsp;201 - 430</li>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_Boron_4.png" class="legendIcon">&nbsp;431 - 900</li>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_Boron_5.png" class="legendIcon">&nbsp;901 - 2200</li>\
  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };



              var Legend_Slide9_GWGadolinium = L.control({ position: "bottomleft" });

              Legend_Slide9_GWGadolinium.onAdd = function(map) {
                var div = L.DomUtil.create(
                  "div",
                  "info legend legend_Slide9_GWGadolinium"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
    <li><b>Gadolinium in GW ug/L</b></li><br>\
    <li><img src="' +
                  pathPrefix +
                  'static/img/img_slides9_doxy_1.png" class="legendIcon">&nbsp;ND</li>\
  <li><img src="' +
                  pathPrefix +
                  'static/img/img_slides9_doxy_3.png" class="legendIcon">&nbsp;0.001 - 0.044</li>\
  <li><img src="' +
                  pathPrefix +
                  'static/img/img_slides9_doxy_5.png" class="legendIcon">&nbsp;0.045 - 0.094</li>\
</ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };



              var Legend_Slide9_GWdoxy1816 = L.control({
                position: "bottomleft"
              });

              Legend_Slide9_GWdoxy1816.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide9_GWdoxy1816"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
    <li><b>delta oxygen-18/oxygen-16 in GW</b></li><br>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_doxy_1.png" class="legendIcon">&nbsp;-13.180000 - -12.000000</li>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_doxy_2.png" class="legendIcon">&nbsp;-11.999999 - -11.000000</li>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_doxy_3.png" class="legendIcon">&nbsp;-10.999999 - -10.000000</li>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_doxy_4.png" class="legendIcon">&nbsp;-9.999999 - -9.000000</li>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_doxy_5.png" class="legendIcon">&nbsp;-8.999999 - -8.020000</li>\
  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide9_GWMetformin = L.control({
                position: "bottomleft"
              });

              Legend_Slide9_GWMetformin.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide9_GWMetformin"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
    <li><b>Metformin in GW ug/L</b></li><br>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_metf_1.png" class="legendIcon">&nbsp;0.00</li>\
    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides9_metf_2.png" class="legendIcon">&nbsp;0.01 - 0.09</li>\
  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide10_Pie = L.control({ position: "bottomleft" });

              Legend_Slide10_Pie.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide10_Pie"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>Pie Chart</b></li><br>\
                                    <li><span style="background:#4ce600;"></span>PFBS</li>\
                                    <li><span style="background:#ff00c5;"></span>PFHpA</li>\
                                    <li><span style="background:#734c00;"></span>PFHxS</li>\
                                    <li><span style="background:#e60000;"></span>PFNA</li>\
                                    <li><span style="background:#005ce6;"></span>PFOA</li>\
                                    <li><span style="background:#ffff00;"></span>PFOS</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slides11_TPFAS6 = L.control({
                position: "bottomleft"
              });

              Legend_Slides11_TPFAS6.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slides11_TPFAS6"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>UCMR3 (PFAS6) PCA Scores</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS6_1.png" class="legendIcon">&nbsp;0.10 - 1.00</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS6_2.png" class="legendIcon">&nbsp;1.01 - 10.00</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS6_3.png" class="legendIcon">&nbsp;10.01 - 100.00</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS6_4.png" class="legendIcon">&nbsp;100.01 - 99999999.00</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slides11_TPFAS18 = L.control({
                position: "bottomleft"
              });

              Legend_Slides11_TPFAS18.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slides11_TPFAS18"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>PFAS18 PCA Scores ug/L</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS18_1.png" class="legendIcon">&nbsp;0.1-0.5</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS18_2.png" class="legendIcon">&nbsp;0.5-1</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS18_3.png" class="legendIcon">&nbsp;1-5</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS18_4.png" class="legendIcon">&nbsp;5-10</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS18_5.png" class="legendIcon">&nbsp;10-50</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS18_6.png" class="legendIcon">&nbsp;50-100</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS18_7.png" class="legendIcon">&nbsp;100-500</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides11_PFAS18_8.png" class="legendIcon">&nbsp;> 500</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

              var PFAStext =
                '<div class="legend2"><ul class="legend-labels">\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFAS_1.png" class="legendIcon">&nbsp;ND</li>\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFAS_2.png" class="legendIcon">&nbsp;\t&lt; 10</li>\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFAS_3.png" class="legendIcon">&nbsp;10 - 50</li>\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFAS_4.png" class="legendIcon">&nbsp;50 - 100</li>\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFAS_5.png" class="legendIcon">&nbsp;100 - 500</li>\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFAS_6.png" class="legendIcon">&nbsp;500 - 1,000</li>\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFAS_7.png" class="legendIcon">&nbsp;&gt; 1,000</li>\
                </ul></div>';

              var PFOAtext =
                '<div class="legend2"><ul class="legend-labels">\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFOA_01.png" class="legendIcon"> 0.000 - 0.069</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOA_02.png" class="legendIcon"> 0.070 - 0.200</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOA_03.png" class="legendIcon"> 0.201 - 0.400</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOA_04.png" class="legendIcon"> 0.401 - 1.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOA_05.png" class="legendIcon"> 1.001 - 3.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOA_06.png" class="legendIcon"> 3.001 - 103.000</li>\
                </ul></div>';

              var PFHpAtext =
                '<div class="legend2"><ul class="legend-labels">\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFHpA_01.png" class="legendIcon"> ND</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHpA_02.png" class="legendIcon"> 0.001 - 0.070</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHpA_03.png" class="legendIcon"> 0.071 - 0.400</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHpA_04.png" class="legendIcon"> 0.401 - 1.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHpA_05.png" class="legendIcon"> 1.001 - 3.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHpA_06.png" class="legendIcon"> 3.001 - 9.850</li>\
                </ul></div>';

              var PFNAtext =
                '<div class="legend2"><ul class="legend-labels">\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFNA_01.png" class="legendIcon"> ND</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFNA_02.png" class="legendIcon"> 0.001 - 0.004</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFNA_03.png" class="legendIcon"> 0.005 - 0.006</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFNA_04.png" class="legendIcon"> 0.007 - 0.008</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFNA_05.png" class="legendIcon"> 0.009 - 0.010</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFNA_06.png" class="legendIcon"> 0.011 - 1.300</li>\
                </ul></div>';

              var PFDAtext =
                '<div class="legend2"><ul class="legend-labels">\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFDA_01.png" class="legendIcon"> ND</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFDA_02.png" class="legendIcon"> 0.001 - 0.004</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFDA_03.png" class="legendIcon"> 0.005 - 0.006</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFDA_04.png" class="legendIcon"> 0.007 - 0.008</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFDA_05.png" class="legendIcon"> 0.009 - 0.010</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFDA_06.png" class="legendIcon"> 0.011 - 1.500</li>\
                </ul></div>';

              var PFHxAtext =
                '<div class="legend2"><ul class="legend-labels">\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxA_01.png" class="legendIcon"> ND</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxA_02.png" class="legendIcon"> 0.0001 - 0.0700</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxA_03.png" class="legendIcon"> 0.0701 - 27.0000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxA_04.png" class="legendIcon"> 27.0001 - 57.0000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxA_05.png" class="legendIcon"> 57.0001 - 140.0000</li>\
                </ul></div>';

              var PFPeAtext =
                '<div class="legend2"><ul class="legend-labels">\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFPeA_01.png" class="legendIcon"> ND</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFPeA_02.png" class="legendIcon"> 0.0001 - 0.0700</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFPeA_03.png" class="legendIcon"> 0.0701 - 6.4000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFPeA_04.png" class="legendIcon"> 6.4001 - 17.0000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFPeA_05.png" class="legendIcon"> 17.0001 - 40.2000</li>\
                </ul></div>';

              var PFUnDAtext =
                '<div class="legend2"><ul class="legend-labels">\
                 <li><img src="' + pathPrefix + 'static/img/img_slides13_PFUnA_01.png" class="legendIcon"> ND</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFUnA_02.png" class="legendIcon"> 0.001 - 0.004</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFUnA_03.png" class="legendIcon"> 0.005 - 0.006</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFUnA_04.png" class="legendIcon"> 0.007 - 0.008</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFUnA_05.png" class="legendIcon"> 0.009 - 0.010</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFUnA_06.png" class="legendIcon"> 0.011 - 0.970</li>\
                </ul></div>';

              var PFBAtext =
                '<div class="legend2"><ul class="legend-labels">\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFBA_01.png" class="legendIcon"> 0.000 - 0.069</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFBA_02.png" class="legendIcon"> 0.070 - 0.200</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFBA_03.png" class="legendIcon"> 0.201 - 0.400</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFBA_04.png" class="legendIcon"> 0.401 - 1.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFBA_05.png" class="legendIcon"> 1.001 - 3.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFBA_06.png" class="legendIcon"> 3.001 - 21.000</li>\
                </ul></div>';

              var PFHxStext =
                '<div class="legend2"><ul class="legend-labels">\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxS_01.png" class="legendIcon"> 0.000 - 0.069</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxS_02.png" class="legendIcon"> 0.070 - 0.200</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxS_03.png" class="legendIcon"> 0.201 - 0.400</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxS_04.png" class="legendIcon"> 0.401 - 1.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxS_05.png" class="legendIcon"> 1.001 - 3.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFHxS_06.png" class="legendIcon"> 3.001 - 150.000</li>\
                </ul></div>';

              var PFBStext =
                '<div class="legend2"><ul class="legend-labels">\
                  <li><img src="' + pathPrefix + 'static/img/img_slides13_PFBS_01.png" class="legendIcon"> 0.000 - 0.069</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFBS_02.png" class="legendIcon"> 0.070 - 0.200</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFBS_03.png" class="legendIcon"> 0.201 - 0.400</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFBS_04.png" class="legendIcon"> 0.401 - 1.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFBS_05.png" class="legendIcon"> 1.001 - 3.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFBS_06.png" class="legendIcon"> 3.001 - 60.000</li>\
                </ul></div>';

              var PFOStext =
                '<div class="legend2"><ul class="legend-labels">\
                 <li><img src="' + pathPrefix + 'static/img/img_slides13_PFOS_01.png" class="legendIcon"> 0.000000 - 0.069000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOS_02.png" class="legendIcon"> 0.069001 - 0.200000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOS_03.png" class="legendIcon"> 0.200001 - 0.400000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOS_04.png" class="legendIcon"> 0.400001 - 1.000000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOS_05.png" class="legendIcon"> 1.000001 - 3.000000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOS_06.png" class="legendIcon"> 3.000001 - 170.000000</li>\
                </ul></div>';

              var PFOSAtext =
                '<div class="legend2"><ul class="legend-labels">\
               <li><img src="' + pathPrefix + 'static/img/img_slides13_PFOSA_01.png" class="legendIcon"> ND</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOSA_02.png" class="legendIcon"> 0.0001 - 0.0700</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOSA_03.png" class="legendIcon"> 0.0701 - 27.0000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOSA_04.png" class="legendIcon"> 27.0001 - 57.0000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_PFOSA_05.png" class="legendIcon"> 57.0001 - 140.0000</li>\
                </ul></div>';

              var FTS62text =
                '<div class="legend2"><ul class="legend-labels">\
          <li><img src="' + pathPrefix + 'static/img/img_slides13_FTS62_01.png" class="legendIcon"> 0.000 - 0.069</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_FTS62_02.png" class="legendIcon"> 0.070 - 0.200</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_FTS62_03.png" class="legendIcon"> 0.201 - 0.400</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_FTS62_04.png" class="legendIcon"> 0.401 - 1.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_FTS62_05.png" class="legendIcon"> 1.001 - 75.000</li>\
                </ul></div>';

              var FTS82text =
                '<div class="legend2"><ul class="legend-labels">\
				 <li><img src="' + pathPrefix + 'static/img/img_slides13_FTS82_01.png" class="legendIcon"> 0.000 - 0.069</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_FTS82_02.png" class="legendIcon"> 0.070 - 0.200</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_FTS82_03.png" class="legendIcon"> 0.201 - 0.400</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_FTS82_04.png" class="legendIcon"> 0.401 - 1.000</li>\
					<li><img src="' + pathPrefix + 'static/img/img_slides13_FTS82_05.png" class="legendIcon"> 1.001 - 75.000</li>\
                </ul></div>';






              var Legend_Slide13_PFAS = L.control({ position: "bottomleft" });

              var Legend_Slide13_PFBA_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFPeA_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFHxA_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFHpA_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFOA_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFNA_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFDA_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFUnDA_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFBS_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFHxS_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFOS_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_PFOSA_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_62FTS_theme = L.control({
                position: "bottomleft"
              });
              var Legend_Slide13_82FTS_theme = L.control({
                position: "bottomleft"
              });

              Legend_Slide13_PFBA_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFBA in GW </b>(ug/L):<br>");
                labels.push(PFBAtext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFPeA_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFPeA in GW </b>(ug/L):<br>");
                labels.push(PFPeAtext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFHxA_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFHxA in GW </b>(ug/L):<br>");
                labels.push(PFHxAtext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFHpA_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFHpA in GW </b>(ug/L):<br>");
                labels.push(PFHpAtext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFOA_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFOA in GW </b>(ug/L):<br>");
                labels.push(PFOAtext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFNA_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFNA in GW </b>(ug/L):<br>");
                labels.push(PFNAtext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFDA_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFDA in GW </b>(ug/L):<br>");
                labels.push(PFDAtext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFUnDA_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFUnDA in GW </b>(ug/L):<br>");
                labels.push(PFUnDAtext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFBS_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFBS in GW </b>(ug/L):<br>");
                labels.push(PFBStext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFHxS_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFHxS in GW </b>(ug/L):<br>");
                labels.push(PFHxStext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFOS_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFOS in GW </b>(ug/L):<br>");
                labels.push(PFOStext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_PFOSA_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>PFOSA in GW </b>(ug/L):<br>");
                labels.push(PFOSAtext);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_62FTS_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>6:2 FTS in GW </b>(ug/L):<br>");
                labels.push(FTS62text);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              Legend_Slide13_82FTS_theme.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS"
                  ),
                  labels = [];
                labels.push("<b>8:2 FTS in GW </b>(ug/L):<br>");
                labels.push(FTS82text);
                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFBA = L.control({ position: "bottomleft" });

              Legend_Slide13_PFBA.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFBA"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Ft Carson source area notable off-site<br>\
                                    (red circle)\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFPeA = L.control({ position: "bottomleft" });

              Legend_Slide13_PFPeA.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFPeA"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    At least one elevated concentration that<br>\
                                    may be upgradient of Peterson AFB groundwater<br>\
                                    influence. Ft Carson source area notable off-site<br>\
                                    (red circle)\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFHxA = L.control({ position: "bottomleft" });

              Legend_Slide13_PFHxA.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFHxA"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    At least one elevated concentration that<br>\
                                    may be upgradient of Peterson AFB groundwater<br>\
                                    influence. Ft Carson source area notable off-site<br>\
                                    (red circle)\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFHpA = L.control({ position: "bottomleft" });

              Legend_Slide13_PFHpA.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFHpA"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Ft Carson source area notable off-site<br>\
                                    (red circle)\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFOA = L.control({ position: "bottomleft" });

              Legend_Slide13_PFOA.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFOA"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Ft Carson source area notable off-site<br>\
                                    (red circle)\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFNA = L.control({ position: "bottomleft" });

              Legend_Slide13_PFNA.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFNA"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Ft Carson source area notable off-site<br>\
                                    (red circle)<br>\
                                    Elevated PFNA concentrations far removed<br>\
                                    from Peterson AFB (green circle). PFNA is<br>\
                                    less mobile than shorter chain PFAS and<br>\
                                    it’s presence here cannot be explained by<br>\
                                    transport from the Peterson source area.\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFDA = L.control({ position: "bottomleft" });

              Legend_Slide13_PFDA.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFDA"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Ft Carson source area notable off-site (red circle).\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFUnDA = L.control({ position: "bottomleft" });

              Legend_Slide13_PFUnDA.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFUnDA"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Ft Carson source area notable off-site (red circle).\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFBS = L.control({ position: "bottomleft" });

              Legend_Slide13_PFBS.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFBS"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Ft Carson source area notable off-site<br>\
                                    (red circle)<br>\
                                    At least one elevated concentration that<br>\
                                    may be upgradient of Peterson AFB groundwater<br>\
                                    influence (green circle)\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFHxS = L.control({ position: "bottomleft" });

              Legend_Slide13_PFHxS.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFHxS"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Ft Carson source area notable off-site<br>\
                                    (red circle)\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFOS = L.control({ position: "bottomleft" });

              Legend_Slide13_PFOS.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFOS"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Ft Carson source area notable off-site<br>\
                                    (red circle)\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_PFOSA = L.control({ position: "bottomleft" });

              Legend_Slide13_PFOSA.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_PFOSA"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    PFOSA has a source on Peterson\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_62FTS = L.control({ position: "bottomleft" });

              Legend_Slide13_62FTS.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_62FTS"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Two elevated 6:2FTS concentrations off site,<br>\
                                    Ft Carson source area notable off-site<br>\
                                    (red circles)<br>\
                                    Fate and transport of 6:2FTS is not well<br>\
                                    understood, though it is notable that these<br>\
                                    two concentrations are amidst a number of<br>\
                                    samples that were ND\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide13_82FTS = L.control({ position: "bottomleft" });

              Legend_Slide13_82FTS.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide13_PFAS legend_Slide13_82FTS"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend3">\
                                    <b>Note</b>:<br>\
                                    Ft Carson source area notable off-site (red circle).\
                                  </div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

              var Legend_Slide14_EPAPFCSum = L.control({
                position: "bottomleft"
              });

              Legend_Slide14_EPAPFCSum.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide14_EPAPFCSum"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>Forensic Outliers</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides14_FO_1.png" class="legendIcon">&nbsp;0.000</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides14_FO_2.png" class="legendIcon">&nbsp;0.001 - 0.030</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides14_FO_3.png" class="legendIcon">&nbsp;0.031 - 0.069</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides14_FO_4.png" class="legendIcon">&nbsp;0.070 - 0.100</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides14_FO_5.png" class="legendIcon">&nbsp;0.101 - 0.300</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides14_FO_6.png" class="legendIcon">&nbsp;0.301 - 0.776</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides14_FO_7.png" class="legendIcon">&nbsp;0.777 - 174.000</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              var Legend_Slide15_PublicWaterSystemPFCSum = L.control({
                position: "bottomleft"
              });

              Legend_Slide15_PublicWaterSystemPFCSum.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide15_PublicWaterSystemPFCSum"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>PFOS/PFOA Sum - ug/L</b></li><br>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides15_PWS_1.png" class="legendIcon">&nbsp;0.000 - 0.069</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides15_PWS_2.png" class="legendIcon">&nbsp;0.070 - 0.100</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides15_PWS_3.png" class="legendIcon">&nbsp;0.101 - 0.300</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides15_PWS_4.png" class="legendIcon">&nbsp;0.301 - 0.700</li>\
                                    <li><img src="' +
                    pathPrefix +
                    'static/img/img_slides15_PWS_5.png" class="legendIcon">&nbsp;0.701 - 1.370</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              //
              // var Legend_Slide3_PRP = '\
              //     <div data-sid=01 class="info_new_temp legend_temp chemicallegend">\
              //             <b>PFC Sum</b><font size="1">&nbsp&nbsp&nbspμg/L</font><br>\
              //         <ul class="legend-labels_temp">\
              //             <li><svg width="25" height="14"><rect x="0" y="0" width="25" height="14" style="fill:rgba(26,150,65,1.0);stroke:rgba(106,31,12,1.0);stroke-width:3;fill-opacity:0.9;stroke-opacity:0.1" /></svg>&nbsp&nbsp0.000 - 0.069</li>\
              //             <li><svg width="25" height="14"><rect x="0" y="0" width="25" height="14" style="fill:rgba(138,204,98,1.0);stroke:rgba(106,31,12,1.0);stroke-width:3;fill-opacity:0.9;stroke-opacity:0.1" /></svg>&nbsp&nbsp0.070 - 1.000</li>\
              //             <li><svg width="25" height="14"><rect x="0" y="0" width="25" height="14" style="fill:rgba(220,240,158,1.0);stroke:rgba(106,31,12,1.0);stroke-width:3;fill-opacity:0.9;stroke-opacity:0.1" /></svg>&nbsp&nbsp1.001 - 2.000</li>\
              //             <li><svg width="25" height="14"><rect x="0" y="0" width="25" height="14" style="fill:rgba(255,223,154,1.0);stroke:rgba(106,31,12,1.0);stroke-width:3;fill-opacity:0.9;stroke-opacity:0.1" /></svg>&nbsp&nbsp2.001 - 5.000</li>\
              //             <li><svg width="25" height="14"><rect x="0" y="0" width="25" height="14" style="fill:rgba(246,144,83,1.0);stroke:rgba(106,31,12,1.0);stroke-width:3;fill-opacity:0.9;stroke-opacity:0.1" /></svg>&nbsp&nbsp5.001 - 10.000</li>\
              //             <li><svg width="25" height="14"><rect x="0" y="0" width="25" height="14" style="fill:rgba(215,25,28,1.0);stroke:rgba(106,31,12,1.0);stroke-width:3;fill-opacity:0.9;stroke-opacity:0.1" /></svg>&nbsp&nbsp10.001 - 167.000</li>\
              //          </ul>\
              //         </div>\
              //     '

              var Legend_Slide15_Watersheds = L.control({
                position: "bottomleft"
              });

              Legend_Slide15_Watersheds.onAdd = function(map) {
                var div = L.DomUtil.create(
                    "div",
                    "info legend legend_Slide15_Watersheds"
                  ),
                  labels = [];

                labels.push(
                  '<div class="legend2"><ul class="legend-labels">\
                                    <li><b>Water Districts</b></li><br>\
                                    <li><span style="background:#366C87; border: 1px solid #909090;"></span>Fountain</li>\
                                    <li><span style="background:#913637; border: 1px solid #909090;"></span>Security</li>\
                                    <li><span style="background:#4FE381; border: 1px solid #909090;"></span>Stratmoor Hills</li>\
                                    <li><span style="background:#E60000; border: 1px solid #909090;"></span>Widefield</li>\
                                  </ul></div>'
                );

                div.innerHTML = labels.join("<br>");
                return div;
              };

              // ******************************** 选择性 Overall Layers ********************************

              // console.log(overallLayers)

              // overallLayers.pop_Overall_FountainCreek();
              // overallLayers.style_Overall_FountainCreek();
              // map.createPane('pane_Overall_FountainCreek');
              // map.getPane('pane_Overall_FountainCreek').style.zIndex = 401;
              // map.getPane('pane_Overall_FountainCreek');
              // overallLayers.layer_Overall_FountainCreek_Info();

              function pop_Overall_FountainCreek(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>Category: </b>' +
                  feature.properties["Category"] +
                  "</td>\
                    </tr>\
                </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Overall_FountainCreek() {
                return {
                  pane: "pane_Overall_FountainCreek",
                  opacity: 1,
                  color: "rgba(82, 165, 237,1.0)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 2.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(203,151,131,0.0)"
                };
              }

              map.createPane("pane_Overall_FountainCreek");
              map.getPane("pane_Overall_FountainCreek").style.zIndex = 401;
              map.getPane("pane_Overall_FountainCreek").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Overall_FountainCreek_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Overall_FountainCreek",
                  /*onEachFeature: pop_Overall_PetersonCarsonBound,*/
                  style: style_Overall_FountainCreek,
                  className: "layer_Overall_FountainCreek"
                };
              }

              //
              //                 function pop_Overall_BigJohnsonReservoir(feature, layer) {
              //                     var popupContent = '<table>\
              //     <tr>\
              //         <td colspan="2"><b>' + feature.properties['Name'] + '</b></td>\
              //     </tr>\
              // </table>';
              //                     layer.bindPopup(popupContent, {maxHeight: 400});
              //                 }
              //
              //                 function style_Overall_BigJohnsonReservoir() {
              //                     return {
              //                         pane: 'pane_Overall_BigJohnsonReservoir',
              //                         opacity: 1,
              //                         color: 'rgba(82, 165, 237,1.0)',
              //                         dashArray: '',
              //                         lineCap: 'butt',
              //                         lineJoin: 'miter',
              //                         weight: 2.0,
              //                         fill: true,
              //                         fillOpacity: 1,
              //                         fillColor: 'rgba(82, 165, 237,0.8)',
              //                     }
              //                 }
              //
              //                 map.createPane('pane_Overall_BigJohnsonReservoir');
              //                 map.getPane('pane_Overall_BigJohnsonReservoir').style.zIndex = 401;
              //                 map.getPane('pane_Overall_BigJohnsonReservoir').style['mix-blend-mode'] = 'normal';
              //
              //                 function layer_Overall_BigJohnsonReservoir_Info() {
              //                     return {
              //                         attribution: '<a href=""></a>',
              //                         pane: 'pane_Overall_BigJohnsonReservoir',
              //                         onEachFeature: pop_Overall_BigJohnsonReservoir,
              //                         style: style_Overall_BigJohnsonReservoir,
              //                         className: "layer_Overall_BigJohnsonReservoir",
              //                     }
              //                 }

              //                 function pop_Overall_AntlersHotel(feature, layer) {
              //                     var popupContent = '<table>\
              //     <tr>\
              //        <td colspan="2"><b>' + feature.properties['Name'] + '</b></td>\
              //     </tr>\
              // </table>';
              //                     layer.bindPopup(popupContent, {maxHeight: 400});
              //                 }
              //
              //                 function style_Overall_AntlersHotel(feature) {
              //
              //
              //                         return {
              //                             pane: 'pane_Overall_AntlersHotel',
              //                             rotationAngle: 0.0,
              //                             rotationOrigin: 'center center',
              //                             icon: L.icon({
              //                                 iconUrl: pathPrefix + 'static/img/img_hotel.png',
              //                                 iconSize: [45, 45],
              //                                 className: "layer_Overall_AntlersHotel", //别忘了加进cleanalllayer要删除的数组
              //                             }),
              //                         }
              //                 }
              //
              //                 map.createPane('pane_Overall_AntlersHotel');
              //                 map.getPane('pane_Overall_AntlersHotel').style.zIndex = 421;
              //                 map.getPane('pane_Overall_AntlersHotel').style['mix-blend-mode'] = 'normal';
              //
              //                 function layer_Overall_AntlersHotel_Info() { // 修改这里
              //                     return {
              //                         attribution: '<a href=""></a>',
              //                         pane: 'pane_Overall_AntlersHotel',
              //                         onEachFeature: pop_Overall_AntlersHotel,
              //                         pointToLayer: function (feature, latlng) {
              //                             var context = {
              //                                 feature: feature,
              //                                 variables: {}
              //                             };
              //                             return L.marker(latlng, style_Overall_AntlersHotel(feature));
              //                         },
              //                     }
              //                 }

              // ******************************** end 选择性 Overall Layers ********************************

              function pop_slide2_AntlersHotel(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                       <td colspan="2"><img src="' +
                  pathPrefix +
                  'static/img/img_Slide2_AntlersHotel.png" width="500"></td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><b>Antlers Hotel</b></td>\
                    </tr>\
                </table>';
                layer.bindPopup(popupContent, {
                  maxWidth: "auto",
                  maxHeight: "auto"
                });
              }

              function style_slide2_AntlersHotel(feature) {
                return {
                  pane: "pane_slide2_AntlersHotel",
                  rotationAngle: 0.0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/img_hotel.png",
                    iconSize: [45, 45],
                    className: "layer_slide2_AntlersHotel" //别忘了加进cleanalllayer要删除的数组
                  })
                };
              }

              map.createPane("pane_slide2_AntlersHotel");
              map.getPane("pane_slide2_AntlersHotel").style.zIndex = 421;
              map.getPane("pane_slide2_AntlersHotel").style["mix-blend-mode"] =
                "normal";

              function layer_slide2_AntlersHotel_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_slide2_AntlersHotel",
                  onEachFeature: pop_slide2_AntlersHotel,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_slide2_AntlersHotel(feature));
                  }
                };
              }

              function pop_slide2_FCreek(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><img src="' +
                  pathPrefix +
                  'static/img/img_Slide2_FCreek1.png" width="500"></td>\
                    </tr>\
                    <tr>\
                        <td colspan="2"><img src="' +
                  pathPrefix +
                  'static/img/img_Slide2_FCreek2.png" width="500"></td>\
                    </tr>\
                    <tr>\
                    <td colspan="2"><b>Fountain Creek</b></td>\
                    </tr>\
                </table>';
                layer.bindPopup(popupContent, {
                  maxWidth: "auto",
                  maxHeight: "auto"
                });
              }

              function style_slide2_FCreek(feature) {
                return {
                  pane: "pane_slide2_FCreek",
                  rotationAngle: 0.0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/icon_FC.png",
                    iconSize: [50, 50],
                    className: "layer_slide2_FCreek" //别忘了加进cleanalllayer要删除的数组
                  })
                };
              }

              map.createPane("pane_slide2_FCreek");
              map.getPane("pane_slide2_FCreek").style.zIndex = 421;
              map.getPane("pane_slide2_FCreek").style["mix-blend-mode"] =
                "normal";

              function layer_slide2_FCreek_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_slide2_FCreek",
                  onEachFeature: pop_slide2_FCreek,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_slide2_FCreek(feature));
                  }
                };
              }

              function pop_slide2_BJR(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                       <td colspan="2"><img src="' +
                  pathPrefix +
                  'static/img/img_Slide2_BJRespng.png" width="500"></td>\
                    </tr>\
                    <tr>\
                       <td colspan="2"><b>Big Johnson Reservoir</b></td>\
                    </tr>\
                </table>';
                layer.bindPopup(popupContent, {
                  maxWidth: "auto",
                  maxHeight: "auto"
                });
              }

              function style_slide2_BJR(feature) {
                return {
                  pane: "pane_slide2_BJR",
                  rotationAngle: 0.0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/icon_BJR.png",
                    iconSize: [60, 60],
                    className: "layer_slide2_BJR" //别忘了加进cleanalllayer要删除的数组
                  })
                };
              }

              map.createPane("pane_slide2_BJR");
              map.getPane("pane_slide2_BJR").style.zIndex = 421;
              map.getPane("pane_slide2_BJR").style["mix-blend-mode"] = "normal";

              function layer_slide2_BJR_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_slide2_BJR",
                  onEachFeature: pop_slide2_BJR,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_slide2_BJR(feature));
                  }
                };
              }

              function pop_Slide2_1947Aerial(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                       <td colspan="2"><img src="' +
                  pathPrefix +
                  'static/img/Slide2_1947.jpg" width="500"></td>\
                    </tr>\
                    <tr>\
                       <td colspan="2"><b>1947 Historical Aerial</b></td>\
                    </tr>\
                </table>';
                layer.bindPopup(popupContent, {
                  maxWidth: "auto",
                  maxHeight: "auto"
                });
              }

              function style_Slide2_1947Aerial(feature) {
                return {
                  pane: "pane_Slide2_1947Aerial",
                  rotationAngle: 0.0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/icon_1947Aerial.png",
                    iconSize: [0, 0],
                    className: "layer_Slide2_1947Aerial" //别忘了加进cleanalllayer要删除的数组
                  })
                };
              }

              map.createPane("pane_Slide2_1947Aerial");
              map.getPane("pane_Slide2_1947Aerial").style.zIndex = 421;
              map.getPane("pane_Slide2_1947Aerial").style["mix-blend-mode"] =
                "normal";

              function layer_Slide2_1947Aerial_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide2_1947Aerial",
                  onEachFeature: pop_Slide2_1947Aerial,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide2_1947Aerial(feature));
                  }
                };
              }

              // ******************************* Slide 3 - Potentially Responsible Parties | Feature ***************************

              function pop_Slide3_PRP(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>Name: ' +
                  feature.properties["Name"] +
                  '</b></td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">Category: ' +
                  feature.properties["Category"] +
                  "</td>\
                    </tr>\
                </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide3_PRP(feature) {
                switch (feature.properties["Category"]) {
                  case "Airport":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP01.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Asphalt and Concrete Manufacturing and Recycling (active)":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP02.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Automotive":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP03.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Commerical Irrigation":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP04.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Dry Cleaners":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP05.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Dry Cleaners/RCRA":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP06.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Fire Departments":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP07.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Fuel Farms":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP08.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Metal Plating and Coatings (active)":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP09.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Metal Plating and Coatings (active)/RCRA":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP10.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Metal Plating and Coatings (closed)":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP11.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Military":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP16.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Quarry":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP12.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "RCRA":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP13.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Semi Conductor Manufacturing":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP14.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Wastewater Treatment Plant, Biosolids, Landfills, and  Power Plants":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP15.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;

                  case "Military Fire Dept.":
                    return {
                      pane: "pane_Slide3_PRP",
                      rotationAngle: 0.0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_PRP17.png",
                        iconSize: [25, 25],
                        className: "layer_Slide3_PRP" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                    break;
                }

                // return {
                //     pane: 'pane_Slide3_PRP',
                //     rotationAngle: 0.0,
                //     rotationOrigin: 'center center',
                //     icon: L.icon({
                //         iconUrl: pathPrefix + 'static/img/pass.png',
                //         iconSize: [25, 25],
                //         className: "layer_Slide3_PRP", //别忘了加紧cleanalllayer要删除的数组
                //     }),
                // }
              }

              map.createPane("pane_Slide3_PRP");
              map.getPane("pane_Slide3_PRP").style.zIndex = 428;
              map.getPane("pane_Slide3_PRP").style["mix-blend-mode"] = "normal";

              function layer_Slide3_PRP_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide3_PRP",
                  onEachFeature: pop_Slide3_PRP,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide3_PRP(feature));
                  }
                };
              }

              // var layer_Slide3_PRP = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide3_PRP.geojson", layer_Slide3_PRP_Info());

              // ******************************* end Slide 3 - Potentially Responsible Parties | Feature ***************************

              // Blank ---------------------------------------------

              // ******************************* Slide 4 - Pumping themes | Feature ***************************

              var pumping16MayIconSize = [35, 35],
                pumping16OctIconSize = [20, 20];

              function pop_Slide4_Pumping16May(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>LOCID: </b>' +
                  feature.properties["LOCID"] +
                  "<br><b> Rate: </b>" +
                  feature.properties["GPM_RATE"] +
                  "</td>\
                    </tr>\
                </table>";
                // layer.bindPopup(popupContent, {maxHeight: 400});
                layer.bindPopup(
                  function somethingCool(feature) {
                    // console.log();
                    cleanTheLayer("theChart");
                    plotChem(feature.feature.properties["LOCID"], "May");
                    return popupContent;
                  },
                  { maxHeight: 400 }
                );

                // console.log(layer);

                // console.log(feature.properties['LOCID']);
              }

              function style_Slide4_Pumping16May(feature) {
                if (feature.properties["GPM_RATE"] <= 5000000) {
                  return {
                    pane: "pane_Slide4_Pumping16May",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_triangle_1.png",
                      iconSize: pumping16MayIconSize,
                      className: "layer_Slide4_Pumping16May" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                } else if (
                  feature.properties["GPM_RATE"] > 5000000 &&
                  feature.properties["GPM_RATE"] <= 10000000
                ) {
                  return {
                    pane: "pane_Slide4_Pumping16May",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_triangle_2.png",
                      iconSize: pumping16MayIconSize,
                      className: "layer_Slide4_Pumping16May" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                } else if (
                  feature.properties["GPM_RATE"] > 10000000 &&
                  feature.properties["GPM_RATE"] <= 20000000
                ) {
                  return {
                    pane: "pane_Slide4_Pumping16May",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_triangle_4.png",
                      iconSize: pumping16MayIconSize,
                      className: "layer_Slide4_Pumping16May" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                } else if (feature.properties["GPM_RATE"] > 20000000) {
                  return {
                    pane: "pane_Slide4_Pumping16May",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_triangle_6.png",
                      iconSize: pumping16MayIconSize,
                      className: "layer_Slide4_Pumping16May" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide4_Pumping16May");
              map.getPane("pane_Slide4_Pumping16May").style.zIndex = 421;
              map.getPane("pane_Slide4_Pumping16May").style["mix-blend-mode"] =
                "normal";

              function layer_Slide4_Pumping16May_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide4_Pumping16May",
                  onEachFeature: pop_Slide4_Pumping16May,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide4_Pumping16May(feature));
                  }
                };
              }

              // var layer_Slide4_Pumping16May = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide4_Pumping16May.geojson", layer_Slide4_Pumping16May_Info());

              // layer_Slide4_Pumping16May.addTo(map);

              function pop_Slide4_Pumping16Oct(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>LOCID: </b>' +
                  feature.properties["LOCID"] +
                  "<br><b> Rate: </b>" +
                  feature.properties["GPM_RATE"] +
                  "</td>\
                    </tr>\
                </table>";
                layer.bindPopup(
                  function somethingCool(feature) {
                    // console.log();
                    cleanTheLayer("theChart");
                    plotChem(feature.feature.properties["LOCID"], "Oct");
                    return popupContent;
                  },
                  { maxHeight: 400 }
                );
              }

              function style_Slide4_Pumping16Oct(feature) {
                if (feature.properties["GPM_RATE"] <= 5000000) {
                  return {
                    pane: "pane_Slide4_Pumping16Oct",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_triangle_1.png",
                      iconSize: pumping16OctIconSize,
                      className: "layer_Slide4_Pumping16Oct" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                } else if (
                  feature.properties["GPM_RATE"] > 5000000 &&
                  feature.properties["GPM_RATE"] <= 10000000
                ) {
                  return {
                    pane: "pane_Slide4_Pumping16Oct",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_triangle_2.png",
                      iconSize: pumping16OctIconSize,
                      className: "layer_Slide4_Pumping16Oct" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                } else if (
                  feature.properties["GPM_RATE"] > 10000000 &&
                  feature.properties["GPM_RATE"] <= 20000000
                ) {
                  return {
                    pane: "pane_Slide4_Pumping16Oct",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_triangle_4.png",
                      iconSize: pumping16OctIconSize,
                      className: "layer_Slide4_Pumping16Oct" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                } else if (feature.properties["GPM_RATE"] > 20000000) {
                  return {
                    pane: "pane_Slide4_Pumping16Oct",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_triangle_6.png",
                      iconSize: pumping16OctIconSize,
                      className: "layer_Slide4_Pumping16Oct" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide4_Pumping16Oct");
              map.getPane("pane_Slide4_Pumping16Oct").style.zIndex = 421;
              map.getPane("pane_Slide4_Pumping16Oct").style["mix-blend-mode"] =
                "normal";

              function layer_Slide4_Pumping16Oct_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide4_Pumping16Oct",
                  onEachFeature: pop_Slide4_Pumping16Oct,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide4_Pumping16Oct(feature));
                  }
                };
              }

              // var layer_Slide4_Pumping16Oct = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide4_Pumping16Oct.geojson", layer_Slide4_Pumping16Oct_Info());

              // layer_Slide4_Pumping16Oct.addTo(map);

              function pop_Slide4_Watersheds(feature, layer) {
                var popupContent =
                  '<table>\
                                    <tr>\
                                    <td colspan="2"><b>' +
                  feature.properties["Name"] +
                  "</b></td>\
                                    </tr>\
                                    </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide4_Watersheds(feature) {
                switch (feature.properties["Name"]) {
                  case "Monument":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 1.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#D19356"
                    };
                    break;

                  case "Forest View":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 1.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#824D67"
                    };
                    break;

                  case "Forest Lakes":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#303085"
                    };
                    break;

                  case "Woodmoor":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#833CA3"
                    };
                    break;

                  case "Triview":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#ABCD66"
                    };
                    break;

                  case "Academy":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#62804B"
                    };
                    break;

                  case "CSU-USAFA":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#FA6E69"
                    };
                    break;

                  case "Donala":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#56E3E1"
                    };
                    break;

                  case "Colorado Springs":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 1.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#FFAA00"
                    };
                    break;

                  case "Cherokee":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#A7B8FA"
                    };
                    break;

                  case "Park Forest":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#8474ED"
                    };
                    break;

                  case "Westmoor":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#DB8A99"
                    };
                    break;

                  case "Paint Brush Hills":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#E872B7"
                    };
                    break;

                  case "Meridian Ranch":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#B1F7A1"
                    };
                    break;

                  case "Woodmen Hills":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#F5CA7A"
                    };
                    break;

                  case "Falcon Highlands":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#F5EE69"
                    };
                    break;

                  case "Shriever AFB":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#898944"
                    };
                    break;

                  case "Stratmoor Hills":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#4FE381"
                    };
                    break;

                  case "CSU - Ft Carson":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#E8BEFF"
                    };
                    break;

                  case "Security":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#913637"
                    };
                    break;

                  case "Widefield":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#E60000"
                    };
                    break;

                  case "Fountain":
                    return {
                      pane: "pane_Slide4_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#366C87"
                    };
                    break;
                }
              }

              map.createPane("pane_Slide4_Watersheds");
              map.getPane("pane_Slide4_Watersheds").style.zIndex = 401;
              map.getPane("pane_Slide4_Watersheds").style["mix-blend-mode"] =
                "normal";

              function layer_Slide4_Watersheds_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide4_Watersheds",
                  onEachFeature: pop_Slide4_Watersheds,
                  style: style_Slide4_Watersheds,
                  className: "layer_Slide4_Watersheds"
                };
              }

              // ******************************* end Slide 4 - Pumping themes  | Feature ***************************

              // Blank ---------------------------------------------

              // ******************************* Slide 5 - RCRA facilities | Feature ***************************

              function pop_Slide5_RCRA(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>Site: </b>' +
                  feature.properties["Site_Name"] +
                  "</td>\
                    </tr>\
                </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide5_RCRA() {
                return {
                  pane: "pane_Slide5_RCRA",
                  rotationAngle: 0.0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/img_RCRA.png",
                    iconSize: [20, 20],
                    className: "layer_Slide5_RCRA"
                  })
                };
              }

              map.createPane("pane_Slide5_RCRA");
              map.getPane("pane_Slide5_RCRA").style.zIndex = 421;
              map.getPane("pane_Slide5_RCRA").style["mix-blend-mode"] =
                "normal";

              function layer_Slide5_RCRA_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide5_RCRA",
                  onEachFeature: pop_Slide5_RCRA,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide5_RCRA(feature));
                  }
                };
              }

              //
              // var layer_Slide5_RCRA = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide5_RCRA.geojson", layer_Slide5_RCRA_Info());

              // var layer_Slide5_RCRA = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide5_GWPFCSum.geojson", {
              //     className: "Layer_Slide5_GWPFCSum"
              // });

              // ******************************* end Slide 5 - RCRA facilities  | Feature ***************************

              // Blank ---------------------------------------------

              // ******************************* Slide 6 - all PFC Sum by media | Feature ***************************

              function pop_Slide5_GWPFCSum(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " ug/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(function somethingCool(feature) {

                    cleanTheLayer("theChart");
                    plotChem_GW(feature.feature.properties["Well_ID"], "EPA_PFCSum");
                    return popupContent;
                  },
                  { maxHeight: 400 }
                  );
              }

              function style_Slide5_GWPFCSum(feature) {
                if (feature.properties["Result"] === 0) {
                  return {
                    pane: "pane_Slide5_GWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides8_EPAPFCSum_1.png",
                      iconSize: [18, 16],
                      className: "layer_Slide5_GWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0 &&
                  feature.properties["Result"] <= 0.040
                ) {
                  return {
                    pane: "pane_Slide5_GWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides8_EPAPFCSum_2.png",
                      iconSize: [18, 16],
                      className: "layer_Slide5_GWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.040 &&
                  feature.properties["Result"] <= 0.070
                ) {
                  return {
                    pane: "pane_Slide5_GWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides8_EPAPFCSum_3.png",
                      iconSize: [18, 16],
                      className: "layer_Slide5_GWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.070 &&
                  feature.properties["Result"] <= 0.080
                ) {
                  return {
                    pane: "pane_Slide5_GWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides8_EPAPFCSum_4.png",
                      iconSize: [18, 16],
                      className: "layer_Slide5_GWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.080 &&
                  feature.properties["Result"] <= 3
                ) {
                  return {
                    pane: "pane_Slide5_GWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides8_EPAPFCSum_5.png",
                      iconSize: [18, 16],
                      className: "layer_Slide5_GWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 3 &&
                  feature.properties["Result"] <= 15
                ) {
                  return {
                    pane: "pane_Slide5_GWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides8_EPAPFCSum_6.png",
                      iconSize: [18, 16],
                      className: "layer_Slide5_GWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result"] > 15) {
                  return {
                    pane: "pane_Slide5_GWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides8_EPAPFCSum_7.png",
                      iconSize: [18, 16],
                      className: "layer_Slide5_GWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide5_GWPFCSum");
              map.getPane("pane_Slide5_GWPFCSum").style.zIndex = 421;
              map.getPane("pane_Slide5_GWPFCSum").style["mix-blend-mode"] =
                "normal";

              function layer_Slide5_GWPFCSum_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide5_GWPFCSum",
                  onEachFeature: pop_Slide5_GWPFCSum,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide5_GWPFCSum(feature));
                  }
                };
              }

              // var layer_Slide5_GWPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide5_GWPFCSum.geojson", layer_Slide5_GWPFCSum_Info());

              function pop_Slide6_SEPFCSum(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>LOCID: </b>' +
                  feature.properties["LOC_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " ug/kg" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide6_SEPFCSum(feature) {

                if (feature.properties["Result"] === 0) {
                  return {
                    pane: "pane_Slide6_SEPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_hexigon_1.png",
                      iconSize: [20, 20],
                      className: "layer_Slide6_SEPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0 &&
                  feature.properties["Result"] <= 126
                ) {
                  return {
                    pane: "pane_Slide6_SEPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_hexigon_2.png",
                      iconSize: [20, 20],
                      className: "layer_Slide6_SEPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 126 &&
                  feature.properties["Result"] <= 200
                ) {
                  return {
                    pane: "pane_Slide6_SEPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_hexigon_3.png",
                      iconSize: [20, 20],
                      className: "layer_Slide6_SEPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result"] > 200) {
                  return {
                    pane: "pane_Slide6_SEPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_hexigon_4.png",
                      iconSize: [20, 20],
                      className: "layer_Slide6_SEPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide6_SEPFCSum");
              map.getPane("pane_Slide6_SEPFCSum").style.zIndex = 421;
              map.getPane("pane_Slide6_SEPFCSum").style["mix-blend-mode"] =
                "normal";

              function layer_Slide6_SEPFCSum_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide6_SEPFCSum",
                  onEachFeature: pop_Slide6_SEPFCSum,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide6_SEPFCSum(feature));
                  }
                };
              }

              // var layer_Slide6_SEPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide6_SEPFCSum.geojson", layer_Slide6_SEPFCSum_Info());

              function pop_Slide6_SOPFCSum(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>LOCID: </b>' +
                  feature.properties["LOC_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " ug/kg" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide6_SOPFCSum(feature) {
                if (feature.properties["Result"] <= 0.55) {
                  return {
                    pane: "pane_Slide6_SOPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_square_0.png",
                      iconSize: [16, 16],
                      className: "layer_Slide6_SOPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.55 &&
                  feature.properties["Result"] <= 7
                ) {
                  return {
                    pane: "pane_Slide6_SOPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_square_1.png",
                      iconSize: [16, 16],
                      className: "layer_Slide6_SOPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 7 &&
                  feature.properties["Result"] <= 126
                ) {
                  return {
                    pane: "pane_Slide6_SOPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_square_6.png",
                      iconSize: [16, 16],
                      className: "layer_Slide6_SOPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 126 &&
                  feature.properties["Result"] <= 1260
                ) {
                  return {
                    pane: "pane_Slide6_SOPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_square_4.png",
                      iconSize: [16, 16],
                      className: "layer_Slide6_SOPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result"] > 1260) {
                  return {
                    pane: "pane_Slide6_SOPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_square_5.png",
                      iconSize: [16, 16],
                      className: "layer_Slide6_SOPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide6_SOPFCSum");
              map.getPane("pane_Slide6_SOPFCSum").style.zIndex = 421;
              map.getPane("pane_Slide6_SOPFCSum").style["mix-blend-mode"] =
                "normal";

              function layer_Slide6_SOPFCSum_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide6_SOPFCSum",
                  onEachFeature: pop_Slide6_SOPFCSum,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide6_SOPFCSum(feature));
                  }
                };
              }

              // var layer_Slide6_SOPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide6_SOPFCSum.geojson", layer_Slide6_SOPFCSum_Info());

              function pop_Slide6_SWPFCSum(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                        <td colspan="2"><b>LOCID: </b>' +
                  feature.properties["SWLOC_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " ug/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide6_SWPFCSum(feature) {
                if (feature.properties["Result"] === 0) {
                  return {
                    pane: "pane_Slide6_SWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_ndiamond_1.png",
                      iconSize: [26, 26],
                      className: "layer_Slide6_SWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0 &&
                  feature.properties["Result"] <= 0.039
                ) {
                  return {
                    pane: "pane_Slide6_SWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_ndiamond_2.png",
                      iconSize: [26, 26],
                      className: "layer_Slide6_SWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.039 &&
                  feature.properties["Result"] <= 0.1
                ) {
                  return {
                    pane: "pane_Slide6_SWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_ndiamond_3.png",
                      iconSize: [26, 26],
                      className: "layer_Slide6_SWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.1 &&
                  feature.properties["Result"] <= 0.4
                ) {
                  return {
                    pane: "pane_Slide6_SWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_ndiamond_4.png",
                      iconSize: [26, 26],
                      className: "layer_Slide6_SWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result"] > 0.4) {
                  return {
                    pane: "pane_Slide6_SWPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_ndiamond_5.png",
                      iconSize: [26, 26],
                      className: "layer_Slide6_SWPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide6_SWPFCSum");
              map.getPane("pane_Slide6_SWPFCSum").style.zIndex = 421;
              map.getPane("pane_Slide6_SWPFCSum").style["mix-blend-mode"] =
                "normal";

              function layer_Slide6_SWPFCSum_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide6_SWPFCSum",
                  onEachFeature: pop_Slide6_SWPFCSum,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide6_SWPFCSum(feature));
                  }
                };
              }

              // var layer_Slide6_SWPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide6_SWPFCSum.geojson", ayer_Slide6_SWPFCSum_Info());

              //
              // var layer_Slide5_RCRA = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide5_RCRA.geojson", {
              //     className: "Layer_Slide5_RCRA"
              // });

              // var layer_Slide6_SEPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide6_SEPFCSum.geojson", {
              //     className: "Layer_Slide6_SEPFCSum"
              // });
              //
              // var layer_Slide6_SOPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide6_SOPFCSum.geojson", {
              //     className: "Layer_Slide6_SOPFCSum"
              // });
              //
              // var layer_Slide6_SWPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide6_SWPFCSum.geojson", {
              //     className: "Layer_Slide6_SWPFCSum"
              // });

              // ******************************* end Slide 6 - all PFC Sum by media  | Feature ***************************

              // ******************************* Slide 7 ***************************

              function pop_Slide7_SaturatedAlluvium(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>' +
                  feature.properties["Name"] +
                  "</b></td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide7_SaturatedAlluvium() {
                return {
                  pane: "pane_Slide7_SaturatedAlluvium",
                  opacity: 1,
                  color: "rgba(193, 195, 197,0.8)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 2.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(253, 249, 232,0.6)"
                };
              }

              map.createPane("pane_Slide7_SaturatedAlluvium");
              map.getPane("pane_Slide7_SaturatedAlluvium").style.zIndex = 401;
              map.getPane("pane_Slide7_SaturatedAlluvium").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Slide7_SaturatedAlluvium_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide7_SaturatedAlluvium",
                  //onEachFeature: pop_Slide7_SaturatedAlluvium,
                  style: style_Slide7_SaturatedAlluvium,
                  className: "layer_Slide7_SaturatedAlluvium"
                };
              }

              function pop_Slide7_GWFlowPaths(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>' +
                  feature.properties["Name"] +
                  "</b></td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide7_GWFlowPaths() {
                return {
                  pane: "pane_Slide7_GWFlowPaths",
                  opacity: 1,
                  color: "rgb(0,0,0)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 4.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(16, 117, 204,0.8)"
                };
              }

              map.createPane("pane_Slide7_GWFlowPaths");
              map.getPane("pane_Slide7_GWFlowPaths").style.zIndex = 401;
              map.getPane("pane_Slide7_GWFlowPaths").style["mix-blend-mode"] =
                "normal";

              function layer_Slide7_GWFlowPaths_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide7_GWFlowPaths",
                  //onEachFeature: pop_Slide7_GWFlowPaths,
                  style: style_Slide7_GWFlowPaths,
                  className: "layer_Slide7_GWFlowPaths"
                };
              }

              function pop_Slide7_BedrockContour2017July(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>' +
                  feature.properties["Elevation"] +
                  "</b></td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide7_BedrockContour2017July(feature) {
                if (feature.properties["Elevation"] <= 5860.0) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#FFFFFF",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (
                  feature.properties["Elevation"] > 5860.0 &&
                  feature.properties["Elevation"] <= 5980.0
                ) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#A8A8A8",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (
                  feature.properties["Elevation"] > 5980.0 &&
                  feature.properties["Elevation"] <= 6120.0
                ) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#545454",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (feature.properties["Elevation"] > 6120.0) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#000000",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
              }

              map.createPane("pane_Slide7_BedrockContour2017July");
              map.getPane(
                "pane_Slide7_BedrockContour2017July"
              ).style.zIndex = 401;
              map.getPane("pane_Slide7_BedrockContour2017July").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Slide7_BedrockContour2017July_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide7_BedrockContour2017July",
                  onEachFeature: pop_Slide7_BedrockContour2017July,
                  style: style_Slide7_BedrockContour2017July,
                  className: "layer_Slide7_BedrockContour2017July"
                };
              }

              function pop_Slide7_GWContour2017May(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>' +
                  feature.properties["Elevation"] +
                  "</b></td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide7_GWContour2017May(feature) {
                if (feature.properties["Elevation"] <= 5760.0) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#38A800",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (
                  feature.properties["Elevation"] > 5760.0 &&
                  feature.properties["Elevation"] <= 5870.0
                ) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#8BD100",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (
                  feature.properties["Elevation"] > 5870.0 &&
                  feature.properties["Elevation"] <= 5960.0
                ) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#FFFF00",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (
                  feature.properties["Elevation"] > 5960.0 &&
                  feature.properties["Elevation"] <= 6060.0
                ) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#FF8000",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (feature.properties["Elevation"] > 6060.0) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#FF0000",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
              }

              map.createPane("pane_Slide7_GWContour2017May");
              map.getPane("pane_Slide7_GWContour2017May").style.zIndex = 401;
              map.getPane("pane_Slide7_GWContour2017May").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Slide7_GWContour2017May_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide7_GWContour2017May",
                  onEachFeature: pop_Slide7_GWContour2017May,
                  style: style_Slide7_GWContour2017May,
                  className: "layer_Slide7_GWContour2017May"
                };
              }

              function pop_Slide7_GWContour201718NGS(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>' +
                  feature.properties["VALUE"] +
                  "</b></td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide7_GWContour201718NGS(feature) {
                if (feature.properties["VALUE"] <= 5995.0) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#20CC10",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (
                  feature.properties["VALUE"] > 5995.0 &&
                  feature.properties["VALUE"] <= 6040.0
                ) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#31DE82",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (
                  feature.properties["VALUE"] > 6040.0 &&
                  feature.properties["VALUE"] <= 6085.0
                ) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#00F2F2",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (
                  feature.properties["VALUE"] > 6085.0 &&
                  feature.properties["VALUE"] <= 6130.0
                ) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#3283ED",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
                if (feature.properties["VALUE"] > 6130.0) {
                  return {
                    pane: "pane_Slide7_GWContour201718NGS",
                    opacity: 1,
                    color: "#0220E3",
                    dashArray: "",
                    lineCap: "butt",
                    lineJoin: "miter",
                    weight: 2.0,
                    fill: true,
                    fillOpacity: 1,
                    fillColor: "rgba(82, 165, 237,0.0)"
                  };
                }
              }

              map.createPane("pane_Slide7_GWContour201718NGS");
              map.getPane("pane_Slide7_GWContour201718NGS").style.zIndex = 401;
              map.getPane("pane_Slide7_GWContour201718NGS").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Slide7_GWContour201718NGS_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide7_GWContour201718NGS",
                  onEachFeature: pop_Slide7_GWContour201718NGS,
                  style: style_Slide7_GWContour201718NGS,
                  className: "layer_Slide7_GWContour201718NGS"
                };
              }

              function pop_Slide7_AA_point(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "</td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide7_AA_point(feature) {
                return {
                  pane: "pane_Slide7_AA_point",
                  rotationAngle: 0.0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/img_slides7_aa.png",
                    iconSize: [16, 16],
                    className: "layer_Slide7_AA_point" //别忘了加进cleanalllayer要删除的数组
                  })
                };
              }

              map.createPane("pane_Slide7_AA_point");
              map.getPane("pane_Slide7_AA_point").style.zIndex = 421;
              map.getPane("pane_Slide7_AA_point").style["mix-blend-mode"] =
                "normal";

              function layer_Slide7_AA_point_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide7_AA_point",
                  onEachFeature: pop_Slide7_AA_point,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide7_AA_point(feature));
                  }
                };
              }

              function pop_Slide7_AA_line(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>' +
                  feature.properties["Name"] +
                  '</b><a href="' + pathPrefix + 'static/img/img_CS_AA.jpg" target="blank">  Open in full</a></td><br>\
<td colspan="2"><img src="' +
                  pathPrefix +
                  'static/img/img_CS_AA.jpg" width="600"></td>\
</tr>\
</table>';
                layer.bindPopup(popupContent, {
                  minWidth: 620,
                  maxHeight: "auto"
                });
              }

              function style_Slide7_AA_line() {
                return {
                  pane: "pane_Slide7_AA_line",
                  opacity: 1,
                  color: "rgba(255, 255, 0,1.0)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 2.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(82, 165, 237,0.0)"
                };
              }

              map.createPane("pane_Slide7_AA_line");
              map.getPane("pane_Slide7_AA_line").style.zIndex = 401;
              map.getPane("pane_Slide7_AA_line").style["mix-blend-mode"] =
                "normal";

              function layer_Slide7_AA_line_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide7_AA_line",
                  onEachFeature: pop_Slide7_AA_line,
                  style: style_Slide7_AA_line,
                  className: "layer_Slide7_AA_line"
                };
              }

              function pop_Slide7_BB_point(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "</td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide7_BB_point(feature) {
                return {
                  pane: "pane_Slide7_BB_point",
                  rotationAngle: 0.0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/img_slides7_bb.png",
                    iconSize: [16, 16],
                    className: "layer_Slide7_BB_point" //别忘了加进cleanalllayer要删除的数组
                  })
                };
              }

              map.createPane("pane_Slide7_BB_point");
              map.getPane("pane_Slide7_BB_point").style.zIndex = 421;
              map.getPane("pane_Slide7_BB_point").style["mix-blend-mode"] =
                "normal";

              function layer_Slide7_BB_point_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide7_BB_point",
                  onEachFeature: pop_Slide7_BB_point,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide7_BB_point(feature));
                  }
                };
              }

              function pop_Slide7_BB_line(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>' +
                  feature.properties["Name"] +
                  '</b><a href="' + pathPrefix + 'static/img/img_CS_BB.jpg" target="blank">  Open in full</a></td><br>\
<td colspan="2"><img src="' +
                  pathPrefix +
                  'static/img/img_CS_BB.jpg" width="600"></td>\
</tr>\
</table>';
                layer.bindPopup(popupContent, {
                  minWidth: 620,
                  maxHeight: "auto"
                });
              }

              function style_Slide7_BB_line() {
                return {
                  pane: "pane_Slide7_BB_line",
                  opacity: 1,
                  color: "rgba(0, 197, 255,1.0)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 2.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(82, 165, 237,0.0)"
                };
              }

              map.createPane("pane_Slide7_BB_line");
              map.getPane("pane_Slide7_BB_line").style.zIndex = 401;
              map.getPane("pane_Slide7_BB_line").style["mix-blend-mode"] =
                "normal";

              function layer_Slide7_BB_line_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide7_BB_line",
                  onEachFeature: pop_Slide7_BB_line,
                  style: style_Slide7_BB_line,
                  className: "layer_Slide7_BB_line"
                };
              }

              function pop_Slide7_Label_Triangles(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["LOC_ID"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " ug/kg</td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide7_Label_Triangles(feature) {
                if (feature.properties["Id"] == "1") {
                  return {
                    pane: "pane_Slide7_Label_Triangles",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides7_FlowArrow1.png",
                      iconSize: [20, 20],
                      className: "layer_Slide7_Label_Triangles" //别忘了加进cleanalllayer要删除的数组 slide7_Arrow_SandCreek
                    })
                  };
                } else if (feature.properties["Id"] == "2") {
                  return {
                    pane: "pane_Slide7_Label_Triangles",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides7_FlowArrow2.png",
                      iconSize: [20, 20],
                      className: "layer_Slide7_Label_Triangles" //别忘了加进cleanalllayer要删除的数组 slide7_Arrow_SandCreek
                    })
                  };
                } else if (feature.properties["Id"] == "3") {
                  return {
                    pane: "pane_Slide7_Label_Triangles",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides7_FlowArrow3.png",
                      iconSize: [20, 20],
                      className: "layer_Slide7_Label_Triangles" //别忘了加进cleanalllayer要删除的数组 slide7_Arrow_SandCreek
                    })
                  };
                } else {
                  return {
                    pane: "pane_Slide7_Label_Triangles",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides7_FlowArrow4.png",
                      iconSize: [20, 20],
                      className: "layer_Slide7_Label_Triangles" //别忘了加进cleanalllayer要删除的数组 slide7_Arrow_SandCreek
                    })
                  };
                }
              }

              map.createPane("pane_Slide7_Label_Triangles");
              map.getPane("pane_Slide7_Label_Triangles").style.zIndex = 421;
              map.getPane("pane_Slide7_Label_Triangles").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Slide7_Label_Triangles_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide7_Label_Triangles",
                  // onEachFeature: pop_Slide9_Label_Triangles,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(
                      latlng,
                      style_Slide7_Label_Triangles(feature)
                    );
                  }
                };
              }

              // ******************************* end Slide 7 ***************************
              //////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////
              // ******************************* Slide 8 ***************************

              function pop_Slide8_EPAPFCSum(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " ug/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
</tr>\
</table>";
                layer.bindPopup(function somethingCool(feature) {

                    cleanTheLayer("theChart");
                    plotChem_GW(feature.feature.properties["Well_ID"], "EPA_PFCSum");
                    return popupContent;
                  },
                  { maxHeight: 400 }
                  );
              }

              function style_Slide8_EPAPFCSum(feature) {
                if (feature.properties["Result"] === 0) {
                  return {
                    pane: "pane_Slide8_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_EPAPFCSum_1.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0 &&
                  feature.properties["Result"] <= 0.039
                ) {
                  return {
                    pane: "pane_Slide8_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_EPAPFCSum_2.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.039 &&
                  feature.properties["Result"] <= 0.069
                ) {
                  return {
                    pane: "pane_Slide8_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_EPAPFCSum_3.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.069 &&
                  feature.properties["Result"] <= 0.1
                ) {
                  return {
                    pane: "pane_Slide8_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_EPAPFCSum_4.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.1 &&
                  feature.properties["Result"] <= 0.3
                ) {
                  return {
                    pane: "pane_Slide8_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_EPAPFCSum_5.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.3 &&
                  feature.properties["Result"] <= 1
                ) {
                  return {
                    pane: "pane_Slide8_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_EPAPFCSum_6.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result"] > 1) {
                  return {
                    pane: "pane_Slide8_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_EPAPFCSum_7.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide8_EPAPFCSum");
              map.getPane("pane_Slide8_EPAPFCSum").style.zIndex = 421;
              map.getPane("pane_Slide8_EPAPFCSum").style["mix-blend-mode"] =
                "normal";

              function layer_Slide8_EPAPFCSum_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide8_EPAPFCSum",
                  onEachFeature: pop_Slide8_EPAPFCSum,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide8_EPAPFCSum(feature));
                  }
                };
              }

              function pop_Slide8_OffsiteTrends(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "</td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide8_OffsiteTrends(feature) {
                if (feature.properties["Trend"] == 0.0) {
                  return {
                    pane: "pane_Slide8_OffsiteTrends",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_trend_purple.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_OffsiteTrends" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Trend"] == 1.0) {
                  return {
                    pane: "pane_Slide8_OffsiteTrends",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_trend_blue.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_OffsiteTrends" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Trend"] == 2.0) {
                  return {
                    pane: "pane_Slide8_OffsiteTrends",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_trend_red.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_OffsiteTrends" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Trend"] == 4.0) {
                  return {
                    pane: "pane_Slide8_OffsiteTrends",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_trend_yellow.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_OffsiteTrends" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide8_OffsiteTrends");
              map.getPane("pane_Slide8_OffsiteTrends").style.zIndex = 421;
              map.getPane("pane_Slide8_OffsiteTrends").style["mix-blend-mode"] =
                "normal";

              function layer_Slide8_OffsiteTrends_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide8_OffsiteTrends",
                  onEachFeature: pop_Slide8_OffsiteTrends,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(
                      latlng,
                      style_Slide8_OffsiteTrends(feature)
                    );
                  }
                };
              }

              function pop_Slide8_OnsiteTrends(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "</td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide8_OnsiteTrends(feature) {
                // console.log(feature.properties['Trend'])

                if (feature.properties["Trend"] == 0.0) {
                  return {
                    pane: "pane_Slide8_OnsiteTrends",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_trend_purple.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_OnsiteTrends" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Trend"] == 1.0) {
                  return {
                    pane: "pane_Slide8_OnsiteTrends",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_trend_blue.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_OnsiteTrends" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Trend"] == 2.0) {
                  return {
                    pane: "pane_Slide8_OnsiteTrends",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides8_trend_red.png",
                      iconSize: [16, 16],
                      className: "layer_Slide8_OnsiteTrends" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide8_OnsiteTrends");
              map.getPane("pane_Slide8_OnsiteTrends").style.zIndex = 421;
              map.getPane("pane_Slide8_OnsiteTrends").style["mix-blend-mode"] =
                "normal";

              function layer_Slide8_OnsiteTrends_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide8_OnsiteTrends",
                  onEachFeature: pop_Slide8_OnsiteTrends,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide8_OnsiteTrends(feature));
                  }
                };
              }

              // ******************************* end Slide 8 ***************************
              //////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////
              // ******************************* Slide 9 ***************************

              function pop_Slide9_FountainCreekGnL(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>' +
                  feature.properties["Name"] +
                  "</b></td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide9_FountainCreekGnL() {
                return {
                  pane: "pane_Slide9_FountainCreekGnL",
                  opacity: 1,
                  color: "rgba(0, 0, 0,1.0)",
                  dashArray: "",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 2.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(82, 165, 237,0.0)"
                };
              }

              map.createPane("pane_Slide9_FountainCreekGnL");
              map.getPane("pane_Slide9_FountainCreekGnL").style.zIndex = 401;
              map.getPane("pane_Slide9_FountainCreekGnL").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Slide9_FountainCreekGnL_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide9_FountainCreekGnL",
                  onEachFeature: pop_Slide9_FountainCreekGnL,
                  style: style_Slide9_FountainCreekGnL,
                  className: "layer_Slide9_FountainCreekGnL"
                };
              }

              function pop_Slide9_GWBorom(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " ug/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide9_GWBorom(feature) {
                if (feature.properties["Result"] <= 90) {
                  return {
                    pane: "pane_Slide9_GWBorom",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides9_Boron_1.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWBorom" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 90 &&
                  feature.properties["Result"] <= 200
                ) {
                  return {
                    pane: "pane_Slide9_GWBorom",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides9_Boron_2.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWBorom" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 200 &&
                  feature.properties["Result"] <= 430
                ) {
                  return {
                    pane: "pane_Slide9_GWBorom",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides9_Boron_3.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWBorom" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 430 &&
                  feature.properties["Result"] <= 900
                ) {
                  return {
                    pane: "pane_Slide9_GWBorom",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides9_Boron_4.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWBorom" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result"] > 900) {
                  return {
                    pane: "pane_Slide9_GWBorom",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides9_Boron_5.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWBorom" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide9_GWBorom");
              map.getPane("pane_Slide9_GWBorom").style.zIndex = 421;
              map.getPane("pane_Slide9_GWBorom").style["mix-blend-mode"] =
                "normal";

              function layer_Slide9_GWBorom_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide9_GWBorom",
                  onEachFeature: pop_Slide9_GWBorom,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide9_GWBorom(feature));
                  }
                };
              }



              function pop_Slide9_GWGadolinium(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " ug/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide9_GWGadolinium(feature) {
                if (feature.properties["Result"] <= 0) {
                  return {
                    pane: "pane_Slide9_GWGadolinium",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides9_doxy_1.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWGadolinium" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0 &&
                  feature.properties["Result"] <= 0.044
                ) {
                  return {
                    pane: "pane_Slide9_GWGadolinium",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides9_doxy_3.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWGadolinium" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.044
                ) {
                  return {
                    pane: "pane_Slide9_GWGadolinium",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides9_doxy_5.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWGadolinium" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

              }

              map.createPane("pane_Slide9_GWGadolinium");
              map.getPane("pane_Slide9_GWGadolinium").style.zIndex = 421;
              map.getPane("pane_Slide9_GWGadolinium").style["mix-blend-mode"] =
                "normal";

              function layer_Slide9_GWGadolinium_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide9_GWGadolinium",
                  onEachFeature: pop_Slide9_GWGadolinium,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide9_GWGadolinium(feature));
                  }
                };
              }



              function pop_Slide9_GWdoxy1816(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " per mil" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide9_GWdoxy1816(feature) {
                if (feature.properties["Result"] <= -12) {
                  return {
                    pane: "pane_Slide9_GWdoxy1816",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides9_doxy_1.png",
                      iconSize: [12, 12],
                      className: "layer_Slide9_GWdoxy1816" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > -12 &&
                  feature.properties["Result"] <= -11
                ) {
                  return {
                    pane: "pane_Slide9_GWdoxy1816",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides9_doxy_2.png",
                      iconSize: [14, 14],
                      className: "layer_Slide9_GWdoxy1816" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > -11 &&
                  feature.properties["Result"] <= -10
                ) {
                  return {
                    pane: "pane_Slide9_GWdoxy1816",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides9_doxy_3.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWdoxy1816" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > -10 &&
                  feature.properties["Result"] <= -9
                ) {
                  return {
                    pane: "pane_Slide9_GWdoxy1816",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides9_doxy_4.png",
                      iconSize: [18, 18],
                      className: "layer_Slide9_GWdoxy1816" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result"] > -9) {
                  return {
                    pane: "pane_Slide9_GWdoxy1816",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides9_doxy_5.png",
                      iconSize: [20, 20],
                      className: "layer_Slide9_GWdoxy1816" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide9_GWdoxy1816");
              map.getPane("pane_Slide9_GWdoxy1816").style.zIndex = 421;
              map.getPane("pane_Slide9_GWdoxy1816").style["mix-blend-mode"] =
                "normal";

              function layer_Slide9_GWdoxy1816_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide9_GWdoxy1816",
                  onEachFeature: pop_Slide9_GWdoxy1816,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide9_GWdoxy1816(feature));
                  }
                };
              }

              function pop_Slide9_GWMetformin(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " ug/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide9_GWMetformin(feature) {
                if (feature.properties["Result"] == 0.0) {
                  return {
                    pane: "pane_Slide9_GWMetformin",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides9_metf_1.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWMetformin" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result"] > 0.0) {
                  return {
                    pane: "pane_Slide9_GWMetformin",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides9_metf_2.png",
                      iconSize: [16, 16],
                      className: "layer_Slide9_GWMetformin" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide9_GWMetformin");
              map.getPane("pane_Slide9_GWMetformin").style.zIndex = 421;
              map.getPane("pane_Slide9_GWMetformin").style["mix-blend-mode"] =
                "normal";

              function layer_Slide9_GWMetformin_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide9_GWMetformin",
                  onEachFeature: pop_Slide9_GWMetformin,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide9_GWMetformin(feature));
                  }
                };
              }



              function style_Slide9_Label_Triangles(feature) {
                return {
                  pane: "pane_Slide9_Label_Triangles",
                  rotationAngle: 0.0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/img_slides9_arrow.png",
                    iconSize: [26, 26],
                    className: "layer_Slide9_Label_Triangles" //别忘了加进cleanalllayer要删除的数组
                  })
                };
              }

              map.createPane("pane_Slide9_Label_Triangles");
              map.getPane("pane_Slide9_Label_Triangles").style.zIndex = 421;
              map.getPane("pane_Slide9_Label_Triangles").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Slide9_Label_Triangles_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide9_Label_Triangles",
                  // onEachFeature: pop_Slide9_Label_Triangles,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(
                      latlng,
                      style_Slide9_Label_Triangles(feature)
                    );
                  }
                };
              }

              //
              // Slide9_Label_Text 点

              function pop_Slide9_WWTPlant(feature, layer) {
                var popupContent =
                  '<table>\
                                    <tr>\
                                    <td colspan="2">' +
                  feature.properties["Name"] +
                  "</td>\
                                    </tr>\
                                    </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide9_WWTPlant(feature) {
                return {
                  pane: "pane_Slide9_WWTPlant",
                  rotationAngle: 0.0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/img_slides9_WWTPlant.png",
                    iconSize: [26, 26],
                    className: "layer_Slide9_WWTPlant" //别忘了加进cleanalllayer要删除的数组
                  })
                };
              }

              map.createPane("pane_Slide9_WWTPlant");
              map.getPane("pane_Slide9_WWTPlant").style.zIndex = 421;
              map.getPane("pane_Slide9_WWTPlant").style["mix-blend-mode"] =
                "normal";

              function layer_Slide9_WWTPlant_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide9_WWTPlant",
                  // onEachFeature: pop_Slide9_WWTPlant,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide9_WWTPlant(feature));
                  }
                };
              }



              // function pop_Slide9_FacilityDisposalPipeline(feature, layer) {
              //   var popupContent =
              //     '<table>\
              //       <tr>\
              //           <td colspan="2"><b>Category: </b>' +
              //     feature.properties["Category"] +
              //     "</td>\
              //       </tr>\
              //   </table>";
              //   layer.bindPopup(popupContent, { maxHeight: 400 });
              // }

              function style_Slide9_FacilityDisposalPipeline() {
                return {
                  pane: "pane_Slide9_FacilityDisposalPipeline",
                  opacity: 1,
                  color: "rgb(255,41,41)",
                  dashArray: "4",
                  lineCap: "butt",
                  lineJoin: "miter",
                  weight: 3.0,
                  fill: true,
                  fillOpacity: 1,
                  fillColor: "rgba(203,151,131,0.0)"
                };
              }

              map.createPane("pane_Slide9_FacilityDisposalPipeline");
              map.getPane("pane_Slide9_FacilityDisposalPipeline").style.zIndex = 401;
              map.getPane("pane_Slide9_FacilityDisposalPipeline").style[
                "mix-blend-mode"
                ] = "normal";

              function layer_Slide9_FacilityDisposalPipeline_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide9_FacilityDisposalPipeline",
                  /*onEachFeature: pop_Slide9_FacilityDisposalPipeline,*/
                  style: style_Slide9_FacilityDisposalPipeline,
                  className: "layer_Slide9_FacilityDisposalPipeline"
                };
              }




              // ******************************* end Slide 9 ***************************
              //////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////
              // ******************************* Slide 10 ***************************

              function piechartadded() {
                // console.log(piechartdata["piechartdata"][0]);
                var marker = [];
                var i;
                for (i = 0; i < piechartdata["piechartdata"].length; i++) {
                  marker[i] = new L.piechartMarker(
                    L.latLng([
                      piechartdata["piechartdata"][i][9],
                      piechartdata["piechartdata"][i][8]
                    ]),
                    {
                      radius: 10,
                      data: [
                        {
                          name: "PFBS",
                          value: piechartdata["piechartdata"][i][2],
                          style: {
                            fillStyle: "rgba(76,230,0,1)"
                          }
                        },
                        {
                          name: "PFHpA",
                          value: piechartdata["piechartdata"][i][3],
                          style: {
                            fillStyle: "rgba(255,0,197,1)"
                          }
                        },
                        {
                          name: "PFHxS",
                          value: piechartdata["piechartdata"][i][4],
                          style: {
                            fillStyle: "rgba(115,76,0,1)"
                          }
                        },
                        {
                          name: "PFNA",
                          value: piechartdata["piechartdata"][i][5],
                          style: {
                            fillStyle: "rgba(230,0,0,1)"
                          }
                        },
                        {
                          name: "PFOA",
                          value: piechartdata["piechartdata"][i][6],
                          style: {
                            fillStyle: "rgba(0,92,230,1)"
                          }
                        },
                        {
                          name: "PFOS",
                          value: piechartdata["piechartdata"][i][7],
                          style: {
                            fillStyle: "rgba(255,255,0,1)"
                          }
                        }
                      ]
                    }
                  );
                  var piepopuptext =
                    '<table>\
					<tr>\
					<td colspan="2"><b>LOCID</b>: </td><td>' +
                    piechartdata["piechartdata"][i][0] +
                    '</td>\
					</tr>\
					<tr>\
					<td colspan="2"><b>Date</b>: </td><td>' +
                    piechartdata["piechartdata"][i][1] +
                    '</td>\
					</tr>\
					<tr>\
                            <td colspan="2" class="piecharttd"><b>PFBS<span style="background:#4ce600;"></span></b>: </td><td>' +
                    piechartdata["piechartdata"][i][2] +
                    " ug/L (" +
                    (
                      (piechartdata["piechartdata"][i][2] /
                        (piechartdata["piechartdata"][i][3] +
                          piechartdata["piechartdata"][i][4] +
                          piechartdata["piechartdata"][i][5] +
                          piechartdata["piechartdata"][i][6] +
                          piechartdata["piechartdata"][i][7] +
                          piechartdata["piechartdata"][i][2])) *
                      100
                    ).toFixed(1) +
                    '%)</td>\
                    </tr>\
                    <tr>\
                            <td colspan="2" class="piecharttd"><b>PFHpA<span style="background:#ff00c5;"></span></b>: </td><td>' +
                    piechartdata["piechartdata"][i][3] +
                    " ug/L (" +
                    (
                      (piechartdata["piechartdata"][i][3] /
                        (piechartdata["piechartdata"][i][3] +
                          piechartdata["piechartdata"][i][4] +
                          piechartdata["piechartdata"][i][5] +
                          piechartdata["piechartdata"][i][6] +
                          piechartdata["piechartdata"][i][7] +
                          piechartdata["piechartdata"][i][2])) *
                      100
                    ).toFixed(1) +
                    '%)</td>\
                    </tr>\
                    <tr>\
                            <td colspan="2" class="piecharttd"><b>PFHxS<span style="background:#734c00;"></span></b>: </td><td>' +
                    piechartdata["piechartdata"][i][4] +
                    " ug/L (" +
                    (
                      (piechartdata["piechartdata"][i][4] /
                        (piechartdata["piechartdata"][i][3] +
                          piechartdata["piechartdata"][i][4] +
                          piechartdata["piechartdata"][i][5] +
                          piechartdata["piechartdata"][i][6] +
                          piechartdata["piechartdata"][i][7] +
                          piechartdata["piechartdata"][i][2])) *
                      100
                    ).toFixed(1) +
                    '%)</td>\
                    </tr>\
                    <tr>\
                            <td colspan="2" class="piecharttd"><b>PFNA<span style="background:#e60000;"></span></b>: </td><td>' +
                    piechartdata["piechartdata"][i][5] +
                    " ug/L (" +
                    (
                      (piechartdata["piechartdata"][i][5] /
                        (piechartdata["piechartdata"][i][3] +
                          piechartdata["piechartdata"][i][4] +
                          piechartdata["piechartdata"][i][5] +
                          piechartdata["piechartdata"][i][6] +
                          piechartdata["piechartdata"][i][7] +
                          piechartdata["piechartdata"][i][2])) *
                      100
                    ).toFixed(1) +
                    '%)</td>\
                    </tr>\
                    <tr>\
                            <td colspan="2" class="piecharttd"><b>PFOA<span style="background:#005ce6;"></span></b>: </td><td>' +
                    piechartdata["piechartdata"][i][6] +
                    " ug/L (" +
                    (
                      (piechartdata["piechartdata"][i][6] /
                        (piechartdata["piechartdata"][i][3] +
                          piechartdata["piechartdata"][i][4] +
                          piechartdata["piechartdata"][i][5] +
                          piechartdata["piechartdata"][i][6] +
                          piechartdata["piechartdata"][i][7] +
                          piechartdata["piechartdata"][i][2])) *
                      100
                    ).toFixed(1) +
                    '%)</td>\
                    </tr>\
                    <tr>\
                            <td colspan="2" class="piecharttd"><b>PFOS<span style="background:#ffff00;"></span></b>: </td><td>' +
                    piechartdata["piechartdata"][i][7] +
                    " ug/L (" +
                    (
                      (piechartdata["piechartdata"][i][7] /
                        (piechartdata["piechartdata"][i][3] +
                          piechartdata["piechartdata"][i][4] +
                          piechartdata["piechartdata"][i][5] +
                          piechartdata["piechartdata"][i][6] +
                          piechartdata["piechartdata"][i][7] +
                          piechartdata["piechartdata"][i][2])) *
                      100
                    ).toFixed(1) +
                    "%)</td>\
	            </table>";
                  /* <b>LOCID</b>:".concat(piechartdata[i][0],"<br><b>Date</b>: ",piechartdata[i][1])*/

                  marker[i].bindPopup(piepopuptext, {
                    minWidth: 200,
                    maxWidth: 500,
                    // maxWidth: "auto",
                    closeButton: false,
                    offset: L.point(0, -20)
                  });

                  marker[i].addTo(map);
                  /*marker[i].on('mouseover', function() { this.openPopup(); });
                                        marker[i].on('mouseout', function() { this.closePopup(); });*/
                }
              }

              // ******************************* end Slide 10 ***************************
              //////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////
              // ******************************* Slide 11 ***************************

              function pop_Slides1112_TPFAS6(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Result: </b>" +
                  feature.properties["TPFAS6"] +
                  "</td>\
</tr>\
</table>";
                layer.bindPopup(
                  function somethingCool(feature) {
                    // console.log();
                    cleanTheLayer("theChart");
                    plotScore(feature.feature.properties["Well_ID"], "UCMR");
                    return popupContent;
                  },
                  { maxHeight: 400 }
                );
              }

              function style_Slides1112_TPFAS6(feature) {
                if (feature.properties["TPFAS6"] <= 1) {
                  return {
                    pane: "pane_Slides1112_TPFAS6",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS6_1.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS6" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["TPFAS6"] > 1 &&
                  feature.properties["TPFAS6"] <= 10
                ) {
                  return {
                    pane: "pane_Slides1112_TPFAS6",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS6_2.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS6" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["TPFAS6"] > 10 &&
                  feature.properties["TPFAS6"] <= 100
                ) {
                  return {
                    pane: "pane_Slides1112_TPFAS6",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS6_3.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS6" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["TPFAS6"] > 100) {
                  return {
                    pane: "pane_Slides1112_TPFAS6",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS6_4.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS6" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slides1112_TPFAS6");
              map.getPane("pane_Slides1112_TPFAS6").style.zIndex = 421;
              map.getPane("pane_Slides1112_TPFAS6").style["mix-blend-mode"] =
                "normal";

              function layer_Slides1112_TPFAS6_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slides1112_TPFAS6",
                  onEachFeature: pop_Slides1112_TPFAS6,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slides1112_TPFAS6(feature));
                  }
                };
              }

              function pop_Slides1112_TPFAS18(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Result: </b>" +
                  feature.properties["TPFAS"] +
                  "</td>\
</tr>\
</table>";
                layer.bindPopup(
                  function somethingCool(feature) {
                    // console.log();
                    cleanTheLayer("theChart");
                    plotScore(feature.feature.properties["Well_ID"], "PFAS");
                    return popupContent;
                  },
                  { maxHeight: 400 }
                );
              }

              function style_Slides1112_TPFAS18(feature) {
                if (feature.properties["TPFAS"] <= 0.5) {
                  return {
                    pane: "pane_Slides1112_TPFAS18",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS18_1.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS18" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["TPFAS"] > 0.5 &&
                  feature.properties["TPFAS"] <= 1
                ) {
                  return {
                    pane: "pane_Slides1112_TPFAS18",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS18_2.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS18" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["TPFAS"] > 1 &&
                  feature.properties["TPFAS"] <= 5
                ) {
                  return {
                    pane: "pane_Slides1112_TPFAS18",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS18_3.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS18" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["TPFAS"] > 5 &&
                  feature.properties["TPFAS"] <= 10
                ) {
                  return {
                    pane: "pane_Slides1112_TPFAS18",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS18_4.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS18" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["TPFAS"] > 10 &&
                  feature.properties["TPFAS"] <= 50
                ) {
                  return {
                    pane: "pane_Slides1112_TPFAS18",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS18_5.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS18" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["TPFAS"] > 50 &&
                  feature.properties["TPFAS"] <= 100
                ) {
                  return {
                    pane: "pane_Slides1112_TPFAS18",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS18_6.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS18" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["TPFAS"] > 100 &&
                  feature.properties["TPFAS"] <= 500
                ) {
                  return {
                    pane: "pane_Slides1112_TPFAS18",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS18_7.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS18" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["TPFAS"] > 500) {
                  return {
                    pane: "pane_Slides1112_TPFAS18",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides11_PFAS18_8.png",
                      iconSize: [16, 16],
                      className: "layer_Slides1112_TPFAS18" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slides1112_TPFAS18");
              map.getPane("pane_Slides1112_TPFAS18").style.zIndex = 421;
              map.getPane("pane_Slides1112_TPFAS18").style["mix-blend-mode"] =
                "normal";

              function layer_Slides1112_TPFAS18_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slides1112_TPFAS18",
                  onEachFeature: pop_Slides1112_TPFAS18,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slides1112_TPFAS18(feature));
                  }
                };
              }

              // ******************************* end Slide 11 ***************************
              //////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////
              // ******************************* Slide 12 ***************************

              // ******************************* end Slide 12 ***************************
              //////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////
              // ******************************* Slide 13 ***************************



              // if (feature.properties["Result_ngL"] <= 0) {
              //   return {
              //     pane: "pane_Slide13_PFNA",
              //     rotationAngle: 0.0,
              //     rotationOrigin: "center center",
              //     icon: L.icon({
              //       iconUrl:
              //         pathPrefix + "static/img/img_slides13_PFAS_1.png",
              //       iconSize: [9, 9],
              //       className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
              //     })
              //   };
              // }
              //
              // if (
              //   feature.properties["Result_ngL"] > 0 &&
              //   feature.properties["Result_ngL"] <= 10
              // ) {
              //   return {
              //     pane: "pane_Slide13_PFNA",
              //     rotationAngle: 0.0,
              //     rotationOrigin: "center center",
              //     icon: L.icon({
              //       iconUrl:
              //         pathPrefix + "static/img/img_slides13_PFAS_2.png",
              //       iconSize: [12, 12],
              //       className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
              //     })
              //   };
              // }
              //
              // if (
              //   feature.properties["Result_ngL"] > 10 &&
              //   feature.properties["Result_ngL"] <= 50
              // ) {
              //   return {
              //     pane: "pane_Slide13_PFNA",
              //     rotationAngle: 0.0,
              //     rotationOrigin: "center center",
              //     icon: L.icon({
              //       iconUrl:
              //         pathPrefix + "static/img/img_slides13_PFAS_3.png",
              //       iconSize: [13, 13],
              //       className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
              //     })
              //   };
              // }
              //
              // if (
              //   feature.properties["Result_ngL"] > 50 &&
              //   feature.properties["Result_ngL"] <= 100
              // ) {
              //   return {
              //     pane: "pane_Slide13_PFNA",
              //     rotationAngle: 0.0,
              //     rotationOrigin: "center center",
              //     icon: L.icon({
              //       iconUrl:
              //         pathPrefix + "static/img/img_slides13_PFAS_4.png",
              //       iconSize: [14, 14],
              //       className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
              //     })
              //   };
              // }
              //
              // if (
              //   feature.properties["Result_ngL"] > 100 &&
              //   feature.properties["Result_ngL"] <= 500
              // ) {
              //   return {
              //     pane: "pane_Slide13_PFNA",
              //     rotationAngle: 0.0,
              //     rotationOrigin: "center center",
              //     icon: L.icon({
              //       iconUrl:
              //         pathPrefix + "static/img/img_slides13_PFAS_5.png",
              //       iconSize: [15, 15],
              //       className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
              //     })
              //   };
              // }
              //
              // if (
              //   feature.properties["Result_ngL"] > 500 &&
              //   feature.properties["Result_ngL"] <= 1000
              // ) {
              //   return {
              //     pane: "pane_Slide13_PFNA",
              //     rotationAngle: 0.0,
              //     rotationOrigin: "center center",
              //     icon: L.icon({
              //       iconUrl:
              //         pathPrefix + "static/img/img_slides13_PFAS_6.png",
              //       iconSize: [16, 16],
              //       className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
              //     })
              //   };
              // }
              //
              // if (feature.properties["Result_ngL"] > 1000) {
              //   return {
              //     pane: "pane_Slide13_PFNA",
              //     rotationAngle: 0.0,
              //     rotationOrigin: "center center",
              //     icon: L.icon({
              //       iconUrl:
              //         pathPrefix + "static/img/img_slides13_PFAS_7.png",
              //       iconSize: [18, 18],
              //       className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
              //     })
              //   };
              // }
              //


              function pop_Slide13_PFPeA(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFPeA(feature) {
                if (feature.properties["Result_ngL"] <= 0) {
                  return {
                    pane: "pane_Slide13_PFPeA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      // svg: '<svg width="25" height="14"><circle cx="5" cy="5" r="4" style="fill:rgb(56,168,0);stroke:rgb(170,170,170);stroke-width:1" /></svg>',
                      // iconUrl: 'data:image/svg+xml;base64,' + btoa("<svg xmlns=\'http://www.w3.org/2000/svg' version='1.1' width='10' height='10'><path stroke='red' stroke-width='2' fill='none' d='M0,5a5,5 0 1,0 10,0a5,5 0 1,0 -10,0Z'/></svg>"),
                        // pathPrefix + "static/img/img_slides13_PFAS_1.png",
                      iconUrl: pathPrefix + "static/img/img_slides13_PFPeA_01.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFPeA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0 &&
                  feature.properties["Result_ngL"] <= 0.07*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFPeA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFPeA_02.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFPeA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.07*1000 &&
                  feature.properties["Result_ngL"] <= 6.4000*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFPeA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFPeA_03.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFPeA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 6.4000*1000 &&
                  feature.properties["Result_ngL"] <= 17.0000*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFPeA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFPeA_04.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFPeA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }


                if (feature.properties["Result_ngL"] > 17.0000*1000) {
                  return {
                    pane: "pane_Slide13_PFPeA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFPeA_05.png",
                      iconSize: [16, 16],
                      className: "layer_Slide13_PFPeA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFPeA");
              map.getPane("pane_Slide13_PFPeA").style.zIndex = 421;
              map.getPane("pane_Slide13_PFPeA").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFPeA_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFPeA",
                  onEachFeature: pop_Slide13_PFPeA,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFPeA(feature));
                  }
                };
              }




              function pop_Slide13_PFHxA(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFHxA(feature) {


                if (
                  feature.properties["Result_ngL"] <=0
                ) {
                  return {
                    pane: "pane_Slide13_PFHxA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxA_01.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFHxA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0 &&
                  feature.properties["Result_ngL"] <= 0.07*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHxA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxA_02.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFHxA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.07*1000 &&
                  feature.properties["Result_ngL"] <= 27*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHxA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxA_03.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFHxA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 27*1000 &&
                  feature.properties["Result_ngL"] <= 57*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHxA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxA_04.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFHxA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 57*1000) {
                  return {
                    pane: "pane_Slide13_PFHxA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxA_05.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_PFHxA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFHxA");
              map.getPane("pane_Slide13_PFHxA").style.zIndex = 421;
              map.getPane("pane_Slide13_PFHxA").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFHxA_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFHxA",
                  onEachFeature: pop_Slide13_PFHxA,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFHxA(feature));
                  }
                };
              }

              function pop_Slide13_PFHpA(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFHpA(feature) {
                if (feature.properties["Result_ngL"] <= 0) {
                  return {
                    pane: "pane_Slide13_PFHpA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHpA_01.png",
                      iconSize: [9, 9],
                      className: "layer_Slide13_PFHpA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0 &&
                  feature.properties["Result_ngL"] <= 0.07*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHpA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHpA_02.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFHpA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.07*1000 &&
                  feature.properties["Result_ngL"] <= 0.4*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHpA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHpA_03.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFHpA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.4*1000 &&
                  feature.properties["Result_ngL"] <= 1*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHpA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHpA_04.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFHpA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 1*1000 &&
                  feature.properties["Result_ngL"] <= 3*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHpA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHpA_05.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFHpA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 3*1000) {
                  return {
                    pane: "pane_Slide13_PFHpA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHpA_06.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_PFHpA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFHpA");
              map.getPane("pane_Slide13_PFHpA").style.zIndex = 421;
              map.getPane("pane_Slide13_PFHpA").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFHpA_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFHpA",
                  onEachFeature: pop_Slide13_PFHpA,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFHpA(feature));
                  }
                };
              }

              function pop_Slide13_PFOA(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFOA(feature) {

                if (
                  feature.properties["Result_ngL"] <= 0.069*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOA_01.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFOA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.069*1000 &&
                  feature.properties["Result_ngL"] <= 0.2*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOA_02.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFOA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.2*1000 &&
                  feature.properties["Result_ngL"] <= 0.4*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOA_03.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFOA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.4*1000 &&
                  feature.properties["Result_ngL"] <= 1*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOA_04.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFOA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 1*1000 &&
                  feature.properties["Result_ngL"] <= 3*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOA_05.png",
                      iconSize: [16, 16],
                      className: "layer_Slide13_PFOA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 3*1000) {
                  return {
                    pane: "pane_Slide13_PFOA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOA_06.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_PFOA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFOA");
              map.getPane("pane_Slide13_PFOA").style.zIndex = 421;
              map.getPane("pane_Slide13_PFOA").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFOA_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFOA",
                  onEachFeature: pop_Slide13_PFOA,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFOA(feature));
                  }
                };
              }

              function pop_Slide13_PFNA(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFNA(feature) {
                if (feature.properties["Result_ngL"] <= 0) {
                  return {
                    pane: "pane_Slide13_PFNA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFNA_01.png",
                      iconSize: [9, 9],
                      className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0 &&
                  feature.properties["Result_ngL"] <= 0.004*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFNA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFNA_02.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.004*1000 &&
                  feature.properties["Result_ngL"] <= 0.006*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFNA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFNA_03.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.006*1000 &&
                  feature.properties["Result_ngL"] <= 0.008*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFNA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFNA_04.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.008*1000 &&
                  feature.properties["Result_ngL"] <= 0.01*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFNA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFNA_05.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 0.01*1000) {
                  return {
                    pane: "pane_Slide13_PFNA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFNA_06.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_PFNA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFNA");
              map.getPane("pane_Slide13_PFNA").style.zIndex = 421;
              map.getPane("pane_Slide13_PFNA").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFNA_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFNA",
                  onEachFeature: pop_Slide13_PFNA,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFNA(feature));
                  }
                };
              }

              function pop_Slide13_PFDA(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFDA(feature) {
                if (feature.properties["Result_ngL"] <= 0) {
                  return {
                    pane: "pane_Slide13_PFDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFDA_01.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0 &&
                  feature.properties["Result_ngL"] <= 0.004*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFDA_02.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.004*1000 &&
                  feature.properties["Result_ngL"] <= 0.006*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFDA_03.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.006*1000 &&
                  feature.properties["Result_ngL"] <= 0.008*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFDA_04.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.008*1000 &&
                  feature.properties["Result_ngL"] <= 0.01*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFDA_05.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 0.01*1000) {
                  return {
                    pane: "pane_Slide13_PFDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFDA_06.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_PFDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFDA");
              map.getPane("pane_Slide13_PFDA").style.zIndex = 421;
              map.getPane("pane_Slide13_PFDA").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFDA_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFDA",
                  onEachFeature: pop_Slide13_PFDA,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFDA(feature));
                  }
                };
              }

              function pop_Slide13_PFUnDA(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFUnDA(feature) {
                if (feature.properties["Result_ngL"] <= 0) {
                  return {
                    pane: "pane_Slide13_PFUnDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFUnA_01.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFUnDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0 &&
                  feature.properties["Result_ngL"] <= 0.004*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFUnDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFUnA_02.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFUnDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.004*1000 &&
                  feature.properties["Result_ngL"] <= 0.006*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFUnDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFUnA_03.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFUnDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.006*1000 &&
                  feature.properties["Result_ngL"] <= 0.008*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFUnDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFUnA_04.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFUnDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.008*1000 &&
                  feature.properties["Result_ngL"] <= 0.01*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFUnDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFUnA_05.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFUnDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 0.01*1000) {
                  return {
                    pane: "pane_Slide13_PFUnDA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFUnA_06.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_PFUnDA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFUnDA");
              map.getPane("pane_Slide13_PFUnDA").style.zIndex = 421;
              map.getPane("pane_Slide13_PFUnDA").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFUnDA_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFUnDA",
                  onEachFeature: pop_Slide13_PFUnDA,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFUnDA(feature));
                  }
                };
              }

              function pop_Slide13_PFBS(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFBS(feature) {

                if (
                  feature.properties["Result_ngL"] <= 0.069*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFBS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBS_01.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFBS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.069*1000 &&
                  feature.properties["Result_ngL"] <= 0.2*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFBS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBS_02.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFBS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.2*1000 &&
                  feature.properties["Result_ngL"] <= 0.4*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFBS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBS_03.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFBS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.4*1000 &&
                  feature.properties["Result_ngL"] <= 1*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFBS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBS_04.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFBS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 1*1000 &&
                  feature.properties["Result_ngL"] <= 3*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFBS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBS_05.png",
                      iconSize: [16, 16],
                      className: "layer_Slide13_PFBS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 3*1000) {
                  return {
                    pane: "pane_Slide13_PFBS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBS_06.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_PFBS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFBS");
              map.getPane("pane_Slide13_PFBS").style.zIndex = 421;
              map.getPane("pane_Slide13_PFBS").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFBS_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFBS",
                  onEachFeature: pop_Slide13_PFBS,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFBS(feature));
                  }
                };
              }

              function pop_Slide13_PFHxS(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFHxS(feature) {

                if (
                  feature.properties["Result_ngL"] <= 0.069*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHxS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxS_01.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFHxS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.069*1000 &&
                  feature.properties["Result_ngL"] <= 0.2*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHxS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxS_02.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFHxS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.2*1000 &&
                  feature.properties["Result_ngL"] <= 0.4*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHxS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxS_03.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFHxS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.4*1000 &&
                  feature.properties["Result_ngL"] <= 1*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHxS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxS_04.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFHxS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 1*1000 &&
                  feature.properties["Result_ngL"] <= 3*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFHxS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxS_05.png",
                      iconSize: [16, 16],
                      className: "layer_Slide13_PFHxS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 3*1000) {
                  return {
                    pane: "pane_Slide13_PFHxS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFHxS_06.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_PFHxS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFHxS");
              map.getPane("pane_Slide13_PFHxS").style.zIndex = 421;
              map.getPane("pane_Slide13_PFHxS").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFHxS_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFHxS",
                  onEachFeature: pop_Slide13_PFHxS,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFHxS(feature));
                  }
                };
              }

              function pop_Slide13_PFOS(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFOS(feature) {

                if (
                  feature.properties["Result_ngL"] <= 0.069*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOS_01.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFOS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.069*1000 &&
                  feature.properties["Result_ngL"] <= 0.2*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOS_02.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFOS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.2*1000 &&
                  feature.properties["Result_ngL"] <= 0.4*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOS_03.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFOS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.4*1000 &&
                  feature.properties["Result_ngL"] <= 1*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOS_04.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFOS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 1*1000 &&
                  feature.properties["Result_ngL"] <= 3*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOS_05.png",
                      iconSize: [16, 16],
                      className: "layer_Slide13_PFOS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 3*1000) {
                  return {
                    pane: "pane_Slide13_PFOS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOS_06.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_PFOS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFOS");
              map.getPane("pane_Slide13_PFOS").style.zIndex = 421;
              map.getPane("pane_Slide13_PFOS").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFOS_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFOS",
                  onEachFeature: pop_Slide13_PFOS,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFOS(feature));
                  }
                };
              }

              function pop_Slide13_PFOSA(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFOSA(feature) {
                if (feature.properties["Result_ngL"] <= 0) {
                  return {
                    pane: "pane_Slide13_PFOSA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOSA_01.png",
                      iconSize: [9, 9],
                      className: "layer_Slide13_PFOSA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0 &&
                  feature.properties["Result_ngL"] <= 0.07*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOSA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOSA_02.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_PFOSA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.07*1000 &&
                  feature.properties["Result_ngL"] <= 27*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOSA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOSA_03.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_PFOSA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 27*1000 &&
                  feature.properties["Result_ngL"] <= 57*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFOSA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOSA_04.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFOSA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 57*1000) {
                  return {
                    pane: "pane_Slide13_PFOSA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFOSA_05.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_PFOSA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFOSA");
              map.getPane("pane_Slide13_PFOSA").style.zIndex = 421;
              map.getPane("pane_Slide13_PFOSA").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFOSA_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFOSA",
                  onEachFeature: pop_Slide13_PFOSA,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFOSA(feature));
                  }
                };
              }

              function pop_Slide13_62FTS(feature, layer) {
                var popupContent =
                  '<table>\
                    <tr>\
                    <td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_62FTS(feature) {

                if (
                  feature.properties["Result_ngL"] <= 0.069*1000
                ) {
                  return {
                    pane: "pane_Slide13_62FTS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_FTS62_01.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_62FTS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.069*1000 &&
                  feature.properties["Result_ngL"] <= 0.2*1000
                ) {
                  return {
                    pane: "pane_Slide13_62FTS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_FTS62_02.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_62FTS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.2*1000 &&
                  feature.properties["Result_ngL"] <= 0.4*1000
                ) {
                  return {
                    pane: "pane_Slide13_62FTS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_FTS62_03.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_62FTS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.4*1000 &&
                  feature.properties["Result_ngL"] <= 1*1000
                ) {
                  return {
                    pane: "pane_Slide13_62FTS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_FTS62_04.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_62FTS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 1*1000) {
                  return {
                    pane: "pane_Slide13_62FTS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_FTS62_05.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_62FTS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_62FTS");
              map.getPane("pane_Slide13_62FTS").style.zIndex = 421;
              map.getPane("pane_Slide13_62FTS").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_62FTS_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_62FTS",
                  onEachFeature: pop_Slide13_62FTS,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_62FTS(feature));
                  }
                };
              }

              function pop_Slide13_82FTS(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_82FTS(feature) {

                if (
                  feature.properties["Result_ngL"] <= 0.069*1000
                ) {
                  return {
                    pane: "pane_Slide13_82FTS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_FTS82_01.png",
                      iconSize: [12, 12],
                      className: "layer_Slide13_82FTS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.069*1000 &&
                  feature.properties["Result_ngL"] <= 0.2*1000
                ) {
                  return {
                    pane: "pane_Slide13_82FTS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_FTS82_02.png",
                      iconSize: [13, 13],
                      className: "layer_Slide13_82FTS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.2*1000 &&
                  feature.properties["Result_ngL"] <= 0.4*1000
                ) {
                  return {
                    pane: "pane_Slide13_82FTS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_FTS82_03.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_82FTS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.4*1000 &&
                  feature.properties["Result_ngL"] <= 1*1000
                ) {
                  return {
                    pane: "pane_Slide13_82FTS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_FTS82_04.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_82FTS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 1*1000) {
                  return {
                    pane: "pane_Slide13_82FTS",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_FTS82_05.png",
                      iconSize: [18, 18],
                      className: "layer_Slide13_82FTS" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_82FTS");
              map.getPane("pane_Slide13_82FTS").style.zIndex = 421;
              map.getPane("pane_Slide13_82FTS").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_82FTS_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_82FTS",
                  onEachFeature: pop_Slide13_82FTS,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_82FTS(feature));
                  }
                };
              }

              function pop_Slide13_PFBA(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Sampling Date: </b>" +
                  feature.properties["SDate"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result_ngL"] +
                  " ng/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
                  </tr>\
                  </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide13_PFBA(feature) {
                if (feature.properties["Result_ngL"] <= 0.69*1000) {
                  return {
                    pane: "pane_Slide13_PFBA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBA_01.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFBA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.69*1000 &&
                  feature.properties["Result_ngL"] <= 0.2*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFBA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBA_02.png",
                      iconSize: [14, 14],
                      className: "layer_Slide13_PFBA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.2*1000 &&
                  feature.properties["Result_ngL"] <= 0.4*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFBA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBA_03.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFBA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 0.4*1000 &&
                  feature.properties["Result_ngL"] <= 1*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFBA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBA_04.png",
                      iconSize: [15, 15],
                      className: "layer_Slide13_PFBA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result_ngL"] > 1*1000 &&
                  feature.properties["Result_ngL"] <= 3*1000
                ) {
                  return {
                    pane: "pane_Slide13_PFBA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBA_05.png",
                      iconSize: [16, 16],
                      className: "layer_Slide13_PFBA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result_ngL"] > 3*1000) {
                  return {
                    pane: "pane_Slide13_PFBA",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl:
                        pathPrefix + "static/img/img_slides13_PFBA_06.png",
                      iconSize: [17, 17],
                      className: "layer_Slide13_PFBA" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide13_PFBA");
              map.getPane("pane_Slide13_PFBA").style.zIndex = 421;
              map.getPane("pane_Slide13_PFBA").style["mix-blend-mode"] =
                "normal";

              function layer_Slide13_PFBA_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide13_PFBA",
                  onEachFeature: pop_Slide13_PFBA,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide13_PFBA(feature));
                  }
                };
              }

              // ******************************* end Slide 13 ***************************
              //////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////
              // ******************************* Slide 14 ***************************

              function pop_Slide14_EPAPFCSum(feature, layer) {
                var popupContent =
                  '<table>\
<tr>\
<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "</td>\
</tr>\
</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide14_EPAPFCSum(feature) {
                if (feature.properties["Result"] <= 0) {
                  return {
                    pane: "pane_Slide14_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      // iconUrl: pathPrefix + "static/img/img_slides14_FO_1.png",
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_5.png",
                      iconSize: [30, 30],
                      className: "layer_Slide14_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0 &&
                  feature.properties["Result"] <= 0.03
                ) {
                  return {
                    pane: "pane_Slide14_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      // iconUrl: pathPrefix + "static/img/img_slides14_FO_2.png",
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_5.png",
                      iconSize: [30, 30],
                      className: "layer_Slide14_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.03 &&
                  feature.properties["Result"] <= 0.069
                ) {
                  return {
                    pane: "pane_Slide14_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      // iconUrl: pathPrefix + "static/img/img_slides14_FO_3.png",
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_5.png",
                      iconSize: [30, 30],
                      className: "layer_Slide14_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.069 &&
                  feature.properties["Result"] <= 0.1
                ) {
                  return {
                    pane: "pane_Slide14_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      // iconUrl: pathPrefix + "static/img/img_slides14_FO_4.png",
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_5.png",
                      iconSize: [30, 30],
                      className: "layer_Slide14_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.1 &&
                  feature.properties["Result"] <= 0.3
                ) {
                  return {
                    pane: "pane_Slide14_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      // iconUrl: pathPrefix + "static/img/img_slides14_FO_5.png",
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_5.png",
                      iconSize: [30, 30],
                      className: "layer_Slide14_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.3 &&
                  feature.properties["Result"] <= 0.776
                ) {
                  return {
                    pane: "pane_Slide14_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      // iconUrl: pathPrefix + "static/img/img_slides14_FO_6.png",
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_5.png",
                      iconSize: [30, 30],
                      className: "layer_Slide14_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result"] > 0.776) {
                  return {
                    pane: "pane_Slide14_EPAPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      // iconUrl: pathPrefix + "static/img/img_slides14_FO_7.png",
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_5.png",
                      iconSize: [30, 30],
                      className: "layer_Slide14_EPAPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide14_EPAPFCSum");
              map.getPane("pane_Slide14_EPAPFCSum").style.zIndex = 421;
              map.getPane("pane_Slide14_EPAPFCSum").style["mix-blend-mode"] =
                "normal";

              function layer_Slide14_EPAPFCSum_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide14_EPAPFCSum",
                  // onEachFeature: pop_Slide14_EPAPFCSum,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(latlng, style_Slide14_EPAPFCSum(feature));
                  }
                };
              }

              // ******************************* end Slide 14 ***************************
              //////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////
              // ******************************* Slide 15 ***************************

              function pop_Slide15_PublicWaterSystemPFCSum(feature, layer) {
                var popupContent =
                  '<table>\
					<tr>\
					<td colspan="2"><b>LOCID: </b>' +
                  feature.properties["Well_ID"] +
                  "<br><b> Result: </b>" +
                  feature.properties["Result"] +
                  " ug/L" +
                  "<br><b> Flag: </b>" +
                  feature.properties["Lab_Flag"] + "</td>\
				</tr>\
				</table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide15_PublicWaterSystemPFCSum(feature) {
                if (feature.properties["Result"] <= 0.069) {
                  return {
                    pane: "pane_Slide15_PublicWaterSystemPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_1.png",
                      iconSize: [16, 16],
                      className: "layer_Slide15_PublicWaterSystemPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.069 &&
                  feature.properties["Result"] <= 0.1
                ) {
                  return {
                    pane: "pane_Slide15_PublicWaterSystemPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_2.png",
                      iconSize: [16, 16],
                      className: "layer_Slide15_PublicWaterSystemPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.1 &&
                  feature.properties["Result"] <= 0.3
                ) {
                  return {
                    pane: "pane_Slide15_PublicWaterSystemPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_3.png",
                      iconSize: [16, 16],
                      className: "layer_Slide15_PublicWaterSystemPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (
                  feature.properties["Result"] > 0.3 &&
                  feature.properties["Result"] <= 0.7
                ) {
                  return {
                    pane: "pane_Slide15_PublicWaterSystemPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_4.png",
                      iconSize: [16, 16],
                      className: "layer_Slide15_PublicWaterSystemPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                if (feature.properties["Result"] > 0.7) {
                  return {
                    pane: "pane_Slide15_PublicWaterSystemPFCSum",
                    rotationAngle: 0.0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_slides15_PWS_5.png",
                      iconSize: [16, 16],
                      className: "layer_Slide15_PublicWaterSystemPFCSum" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }
              }

              map.createPane("pane_Slide15_PublicWaterSystemPFCSum");
              map.getPane(
                "pane_Slide15_PublicWaterSystemPFCSum"
              ).style.zIndex = 421;
              map.getPane("pane_Slide15_PublicWaterSystemPFCSum").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Slide15_PublicWaterSystemPFCSum_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide15_PublicWaterSystemPFCSum",
                  onEachFeature: pop_Slide15_PublicWaterSystemPFCSum,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(
                      latlng,
                      style_Slide15_PublicWaterSystemPFCSum(feature)
                    );
                  }
                };
              }

              function pop_Slide15_Watersheds(feature, layer) {
                var popupContent =
                  '<table>\
                                    <tr>\
                                    <td colspan="2"><b>' +
                  feature.properties["Name"] +
                  "</b></td>\
                                    </tr>\
                                    </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide15_Watersheds(feature) {
                switch (feature.properties["Name"]) {
                  case "Stratmoor Hills":
                    return {
                      pane: "pane_Slide15_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#4FE381"
                    };
                    break;

                  case "Security":
                    return {
                      pane: "pane_Slide15_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#913637"
                    };
                    break;

                  case "Widefield":
                    return {
                      pane: "pane_Slide15_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#E60000"
                    };
                    break;

                  case "Fountain":
                    return {
                      pane: "pane_Slide15_Watersheds",
                      opacity: 0.4,
                      color: "#848180",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.4,
                      fillColor: "#366C87"
                    };
                    break;

                  default:
                    return {
                      pane: "pane_Slide15_Watersheds",
                      opacity: 0.0,
                      color: "#ffffff",
                      dashArray: "",
                      lineCap: "butt",
                      lineJoin: "miter",
                      weight: 2.0,
                      fill: true,
                      fillOpacity: 0.0,
                      fillColor: "#ffffff"
                    };
                    break;
                }
              }

              map.createPane("pane_Slide15_Watersheds");
              map.getPane("pane_Slide15_Watersheds").style.zIndex = 401;
              map.getPane("pane_Slide15_Watersheds").style["mix-blend-mode"] =
                "normal";

              function layer_Slide15_Watersheds_Info() {
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide15_Watersheds",
                  onEachFeature: pop_Slide15_Watersheds,
                  style: style_Slide15_Watersheds,
                  className: "layer_Slide15_Watersheds"
                };
              }

              function pop_Slide15_WaterTreatmentSystems(feature, layer) {
                var popupContent =
                  '<table>\
                                    <tr>\
                                    <td colspan="2">' +
                  feature.properties["Name"] +
                  "</td>\
                                    </tr>\
                                    </table>";
                layer.bindPopup(popupContent, { maxHeight: 400 });
              }

              function style_Slide15_WaterTreatmentSystems(feature) {
                return {
                  pane: "pane_Slide15_WaterTreatmentSystems",
                  rotationAngle: 0.0,
                  rotationOrigin: "center center",
                  icon: L.icon({
                    iconUrl: pathPrefix + "static/img/img_slides9_WWTPlant.png",
                    iconSize: [26, 26],
                    className: "layer_Slide15_WaterTreatmentSystems" //别忘了加进cleanalllayer要删除的数组
                  })
                };
              }

              map.createPane("pane_Slide15_WaterTreatmentSystems");
              map.getPane(
                "pane_Slide15_WaterTreatmentSystems"
              ).style.zIndex = 421;
              map.getPane("pane_Slide15_WaterTreatmentSystems").style[
                "mix-blend-mode"
              ] = "normal";

              function layer_Slide15_WaterTreatmentSystems_Info() {
                // 修改这里
                return {
                  attribution: '<a href=""></a>',
                  pane: "pane_Slide15_WaterTreatmentSystems",
                  // onEachFeature: pop_Slide9_WWTPlant,
                  pointToLayer: function(feature, latlng) {
                    var context = {
                      feature: feature,
                      variables: {}
                    };
                    return L.marker(
                      latlng,
                      style_Slide15_WaterTreatmentSystems(feature)
                    );
                  }
                };
              }

              // ******************************* end Slide 15 ***************************
              //////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////
              // ******************************* Slide 16 ***************************

              // ******************************* end Slide 16 ***************************
              //////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////

              // Blank ---------------------------------------------

              // Geo-referenced Image

              var imageSlide02 = "/static/img/Slide2_1947.jpg",
                imageSlide02_Bounds = [
                  [38.81715, -104.72899],
                  [38.76889, -104.68824]
                ],
                layer_imageSlide02 = L.imageOverlay(
                  imageSlide02,
                  imageSlide02_Bounds
                );

              var imageSlide16 = "/static/img/Slide2_1947.jpg",
                imageSlide16_Bounds = [
                  [38.81715, -104.72899],
                  [38.76889, -104.68824]
                ],
                layer_imageSlide16 = L.imageOverlay(
                  imageSlide16,
                  imageSlide16_Bounds
                );
              // console.log(layer_imageSlide02);

              // var layer_imageSlide02 = L.imageOverlay(imageSlide02, imageSlide02_Bounds, {opacity: 1.0});

              //                                 //////////////////////////////////////////////////////////
              //                                 图 Fade In
              //                                 //////////////////////////////////////////////////////////
              //
              //                                 function addStyleString(str) {
              //                                     var node = document.createElement('style');
              //                                     node.innerHTML = str;
              //                                     document.body.appendChild(node);
              //                                 }
              //                                 addStyleString('.leaflet-image-layer {display: none;}');
              //
              //                                 layer_imageSlide02 = L.imageOverlay(imageSlide02, imageSlide02_Bounds).addTo(map);
              //                                 $(layer_imageSlide02._image).fadeIn(3000);
              //
              //
              //                             <style> //注意没有 scope
              //
              //                             .leaflet-image-layer {
              //                                     display: none;
              //                                 }
              //
              //                             </style>
              //
              //                                 //////////////////////////////////////////////////////////
              //                                 图 Fade Out
              //                                 //////////////////////////////////////////////////////////
              //                                 function addStyleString(str) {
              //                                     var node = document.createElement('style');
              //                                     node.innerHTML = str;
              //                                     document.body.appendChild(node);
              //                                 }
              //                                 addStyleString('.leaflet-image-layer {display: inline;}');
              //
              //                                 layer_imageSlide02 = L.imageOverlay(imageSlide02, imageSlide02_Bounds).addTo(map);
              //                                 $(layer_imageSlide02._image).fadeOut(3000);
              //
              //
              //                             <style> //注意没有 scope
              //
              //                             .leaflet-image-layer {
              //                                     /*display: none;*/
              //                                 }
              //
              //                             </style>
              //
              //                                  //////////////////////////////////////////////////////////

              // function pop_layer_fang(feature, layer) {
              //     var popupContent = '<table>\
              //     <tr>\
              //         <td colspan="2">' + (feature.properties['nihao']) + '</td>\
              //     </tr>\
              // </table>';
              //     layer.bindPopup(popupContent, {
              //         maxHeight: 400
              //     });
              // }
              //
              // var layer_fang = new L.GeoJSON.AJAX(pathPrefix + "static/data/fang.geojson", {
              //     onEachFeature: pop_layer_fang,
              //     className: "layer_fang"
              // });
              // // layer_fang.addTo(map);
              //
              //
              // function pop_layer_shu(feature, layer) {
              //     var popupContent = '<table>\
              //     <tr>\
              //         <td colspan="2">' + (feature.properties['nihao']) + '</td>\
              //     </tr>\
              // </table>';
              //     layer.bindPopup(popupContent, {
              //         maxHeight: 400
              //     });
              // }
              //
              // var layer_shu = new L.GeoJSON.AJAX(pathPrefix + "static/data/shu.geojson", {
              //     onEachFeature: pop_layer_shu,
              //     className: "layer_shu"
              // });
              // // layer_shu.addTo(map);
              //
              //
              // $('#shuCheckBox').on("click", function () {
              //     if (this.checked) {
              //         // console.log("他打开啦！！");
              //         layer_shu.addTo(map);
              //         // $(".layer_shu").css("opacity", 1);
              //         // $(".layer_shu").css("z-index", '');
              //     } else {
              //         // console.log("他关上啦！！");
              //         map.removeLayer(layer_shu);
              //         // $(".layer_shu").css("opacity", 0);
              //         // $(".layer_shu").css("z-index", -1);
              //     }
              // })

              var cw = 600;
              var ch = 180;
              var cmargin = {
                top: 18,
                bottom: 24,
                left: 66,
                right: 10
              };
              var width = cw - cmargin.left - cmargin.right;
              var height = ch - cmargin.top - cmargin.bottom;


              function plotChem(locid, chem) {
                // console.log("activated!")
                cleanTheLayer("theChart");
                var svg = d3
                  .select("#info-pane")
                  .append("svg")
                  .attr("id", "chart")
                  .attr("class", "theChart")
                  .attr("width", cw)
                  .attr("height", ch);
                var chart = svg
                  .append("g")
                  .classed("display", true)
                  .attr(
                    "transform",
                    "translate(" + cmargin.left + "," + cmargin.top + ")"
                  );

                svg.select("g#chart").remove();
                svg.selectAll("g#chartAxis").remove();


                function filterJSON(rawData, value1, value2) {
                  var data = rawData["pumpingData"];
                  // console.log("data", data);
                  var result = [];
                  for (var indicator in data) {
                    // console.log("wellid", data[indicator]);
                    if (
                      data[indicator].Well_ID == value1 &&
                      data[indicator].Analyte == value2
                    ) {
                      result.push(data[indicator]);
                    }
                  }
                  // console.log(result);
                  return result;
                }


                var filtered = filterJSON(pumpingData, locid, chem);
                //console.log(data);
                /*console.log(tcedata);
                                    console.log(filtered);*/

                var dateParser = d3.time.format("%Y-%m-%d").parse;

                var xScale = d3.time
                  .scale()
                  .domain(
                    d3.extent(filtered, function(d) {
                      return dateParser(d.date);
                    })
                  )
                  .range([0, width]);

                var yScale = d3.scale
                  .linear()
                  .domain([
                    0,
                    d3.max(filtered, function(d) {
                      return d.close;
                    })
                  ])
                  .range([height, 0]);

                var xAxis = d3.svg
                  .axis()
                  .scale(xScale)
                  .orient("bottom")
                  .ticks(d3.time.years, 2)
                  .tickFormat(d3.time.format("%m/%y"));

                var yAxis = d3.svg
                  .axis()
                  .scale(yScale)
                  .orient("left")
                  .ticks(5);

                var line = d3.svg
                  .line()
                  .x(function(d) {
                    return xScale(dateParser(d.date));
                  })
                  .y(function(d) {
                    return yScale(d.close);
                  })
                  .interpolate("monotone");

                // var area = d3.svg.area()
                //     .x(function(d){
                //         return xScale(dateParser(d.date));
                //     })
                //     .y0(height)
                //     .y1(function(d){
                //         return yScale(d.close);
                //     })
                //     .interpolate("monotone");

                chart
                  .append("g")
                  .attr("id", "chartAxis")
                  .classed("x axis", true)
                  .attr("transform", "translate(0," + height + ")")
                  .call(xAxis);

                chart
                  .append("g")
                  .attr("id", "chartAxis")
                  .classed("y axis", true)
                  .attr("transform", "translate(0,0)")
                  .call(yAxis);

                //enter()

                // chart.selectAll(".area")
                //     .data([filtered])
                //     .enter()
                //     .append("path")
                //     .classed("area", true);

                /*
                                        chart.selectAll(".trendline")
                                            .data([filtered])
                                            .enter()
                                            .append("path")
                                            .classed("trendline", true);*/

                chart
                  .selectAll(".point")
                  .data(filtered)
                  .enter()
                  .append("circle")
                  .classed("point", true)
                  .attr("r", 4)
                  .attr("fill", function(d) {
                    if (d.close <= 5000000) {
                      return "#38A800";
                    } else if (d.close > 5000000 && d.close <= 10000000) {
                      return "#B0E000";
                    } else if (d.close > 10000000 && d.close <= 20000000) {
                      return "#FFAA00";
                    } else if (d.close > 20000000) {
                      return "#FF0000";
                    }
                  })
                  .on("mouseover", function(d) {
                    // d3.select("h2").html("Well ID: "+ d.properties.Well_ID+"<br/>"+"Result:    "+d.properties.Result+" μg/L"+"<br/>"+"Date:    "+d.properties.SDate);
                    d3.select(this)
                      .transition()
                      .delay(100)
                      .duration(400)
                      .attr("opacity", 0.6)
                      .attr("r", 6);
                    // current_position2 = d3.mouse(this);
                    /*d3.select("svg").append("circle")
                                                                    .attr("cx", current_position[0]+5)
                                                                    .attr("cy", current_position[1]+5)
                                                                    .attr("r", 20);*/

                    /////////////////////////////////////////////////////

                    //////////////////////////////////////////////////////

                    // var tooltipDiv2 = document.getElementById('tooltip2');
                    // tooltipDiv2.innerHTML = "Well ID: "+ d.Well_ID+"<br/>"+"Result:    "+d.close+" μg/L"+"<br/>"+"Date:    "+d.date;
                    // tooltipDiv2.style.top = current_position2[1]+640+'px';
                    // tooltipDiv2.style.left = current_position2[0]+2+'px';
                    // /*               tooltipDiv.style.top = 630+'px';
                    //                tooltipDiv.style.left = 10+'px';*/
                    // tooltipDiv2.style.display = "block";
                  })
                  .on("mouseout", function(d) {
                    d3.select(this)
                      .transition()
                      .delay(100)
                      .duration(400)
                      .attr("r", 4)
                      .attr("stroke", "grey")
                      .attr("fill", function(d) {
                        if (d.close <= 5000000) {
                          return "#38A800";
                        } else if (d.close > 5000000 && d.close <= 10000000) {
                          return "#B0E000";
                        } else if (d.close > 10000000 && d.close <= 20000000) {
                          return "#FFAA00";
                        } else if (d.close > 20000000) {
                          return "#FF0000";
                        }
                      });
                    //d3.select("h2").text("");
                    //d3.select(this).transition().delay(100).duration(400);

                    // var tooltipDiv2 = document.getElementById('tooltip2');
                    // tooltipDiv2.style.display = "none";

                    /*d3.select("body").append("div").attr("class", "mytooltip").style("opacity", "1").style("display", "block").html("<div id='thumbnail'><p>你好啊</p></div>")
                                                      .style("left", (d3.event.pageX - 113) + "px")
                                                      .style("top", (d3.event.pageY - 190) + "px");*/
                  });

                //update

                // chart.selectAll(".area")
                //     .attr("d", function(d){
                //         return area(d);
                //     });

                /*    chart.selectAll(".trendline")
                                            .attr("d", function(d){
                                                return line(d);
                                            });*/

                chart
                  .selectAll(".point")
                  .attr("cx", function(d) {
                    return xScale(dateParser(d.date));
                  })
                  .attr("cy", function(d) {
                    return yScale(d.close);
                  });

                //exit()

                // chart.selectAll(".area")
                //     .data([filtered])
                //     .exit()
                //     .remove();

                /*    chart.selectAll(".trendline")
                                            .data([filtered])
                                            .exit()
                                            .remove();*/

                chart
                  .selectAll(".point")
                  .data(filtered)
                  .exit()
                  .remove();
              }


              function plotChem_GW(locid, chem) {

                // console.log("activated!")
                console.log(locid)
                console.log(chem)
                cleanTheLayer("theChart");
                var svg = d3
                  .select("#info-pane")
                  .append("svg")
                  .attr("id", "chart")
                  .attr("class", "theChart")
                  .attr("width", cw)
                  .attr("height", ch);
                var chart = svg
                  .append("g")
                  .classed("display", true)
                  .attr(
                    "transform",
                    "translate(" + cmargin.left + "," + cmargin.top + ")"
                  );

                svg.select("g#chart").remove();
                svg.selectAll("g#chartAxis").remove();





                function filterJSON(rawData, value1, value2) {
                  var data = rawData["timeseriesGWData"];
                  // console.log("data", data);
                  var result = [];
                  for (var indicator in data) {
                    // console.log("wellid", data[indicator]);
                    if (
                      data[indicator].Well_ID == value1 &&
                      data[indicator].Analyte == value2
                    ) {
                      result.push(data[indicator]);
                    }
                  }
                  // console.log(result);
                  return result;
                }


                var filtered = filterJSON(timeseriesGWData, locid, chem);

                console.log("filtered:", filtered)
                var dateParser = d3.time.format("%Y-%m-%d").parse;

                var xScale = d3.time
                  .scale()
                  .domain(
                    d3.extent(filtered, function(d) {
                      return dateParser(d.date);
                    })
                  )
                  .range([0, width]);

                var yScale = d3.scale
                  .linear()
                  .domain([
                    0,
                    d3.max(filtered, function(d) {
                      return d.close;
                    })
                  ])
                  .range([height, 0]);

                var xAxis = d3.svg
                  .axis()
                  .scale(xScale)
                  .orient("bottom")
                  // .ticks(d3.time.years)
                  .ticks(3)
                  .tickFormat(d3.time.format("%m/%y"));

                var yAxis = d3.svg
                  .axis()
                  .scale(yScale)
                  .orient("left")
                  .ticks(5);

                var line = d3.svg
                  .line()
                  .x(function(d) {
                    return xScale(dateParser(d.date));
                  })
                  .y(function(d) {
                    return yScale(d.close);
                  })
                  .interpolate("monotone");

                chart
                  .append("g")
                  .attr("id", "chartAxis")
                  .classed("x axis", true)
                  .attr("transform", "translate(0," + height + ")")
                  .call(xAxis);

                chart
                  .append("g")
                  .attr("id", "chartAxis")
                  .classed("y axis", true)
                  .attr("transform", "translate(0,0)")
                  .call(yAxis);

                chart
                  .selectAll(".point")
                  .data(filtered)
                  .enter()
                  .append("circle")
                  .classed("point", true)
                  .attr("r", 4)
                  .attr("fill", function(d) {

                    console.log(d)

                    if (d.Analyte === "EPA_PFCSum"){
                      if (d.close <= 0) {
                        return "#38A800";
                      } else if (d.close > 0 && d.close <= 0.039) {
                        return "#B0E000";
                      } else if (d.close > 0.039 && d.close <= 0.069) {
                        return "#ffff00";
                      } else if (d.close > 0.069 && d.close <= 0.100) {
                        return "#FFAA00";
                      } else if (d.close > 0.100 && d.close <= 0.300) {
                        return "#ff2c32";
                      } else if (d.close > 0.300 && d.close <= 1.000) {
                        return "#950000";
                      } else if (d.close > 1.000) {
                        return "#2b0000";
                      }
                    }

                  })
                  .on("mouseover", function(d) {

                    d3.select(this)
                      .transition()
                      .delay(100)
                      .duration(400)
                      .attr("opacity", 0.6)
                      .attr("r", 6);

                  })
                  .on("mouseout", function(d) {
                    d3.select(this)
                      .transition()
                      .delay(100)
                      .duration(400)
                      .attr("r", 4)
                      .attr("stroke", "grey")
                      .attr("fill", function(d) {

                        if (d.Analyte === "EPA_PFCSum"){
                          if (d.close <= 0) {
                            return "#38A800";
                          } else if (d.close > 0 && d.close <= 0.039) {
                            return "#B0E000";
                          } else if (d.close > 0.039 && d.close <= 0.069) {
                            return "#ffff00";
                          } else if (d.close > 0.069 && d.close <= 0.100) {
                            return "#FFAA00";
                          } else if (d.close > 0.100 && d.close <= 0.300) {
                            return "#ff2c32";
                          } else if (d.close > 0.300 && d.close <= 1.000) {
                            return "#950000";
                          } else if (d.close > 1.000) {
                            return "#2b0000";
                          }
                        }

                      });

                  });


                chart
                  .selectAll(".point")
                  .attr("cx", function(d) {
                    return xScale(dateParser(d.date));
                  })
                  .attr("cy", function(d) {
                    return yScale(d.close);
                  });


                chart
                  .selectAll(".point")
                  .data(filtered)
                  .exit()
                  .remove();
              }













              var sw = 400;
              var sh = 400;
              var smargin = {
                top: 20,
                bottom: 36,
                left: 36,
                right: 10
              };
              var swidth = sw - smargin.left - smargin.right;
              var sheight = sh - smargin.top - smargin.bottom;

              function plotScore(locid, chem) {
                // console.log("activated!")
                cleanTheLayer("theChart");
                var svg = d3
                  .select("#info-pane")
                  .append("svg")
                  .attr("id", "chart")
                  .attr("class", "theChart")
                  .attr("width", sw)
                  .attr("height", sh);
                var chart = svg
                  .append("g")
                  .classed("display", true)
                  .attr(
                    "transform",
                    "translate(" + smargin.left + "," + smargin.top + ")"
                  );

                svg.select("g#chart").remove();
                svg.selectAll("g#chartAxis").remove();

                function filterJSON(rawData, value2) {
                  var data = rawData["scoreData"];
                  // console.log("data", data);
                  var result = [];
                  for (var indicator in data) {
                    // console.log("wellid", data[indicator]);
                    if (data[indicator].analyte == value2) {
                      result.push(data[indicator]);
                    }
                  }

                  return result;
                }

                var filtered = filterJSON(scoreData, chem);

                var xScale = d3.scale
                  .linear()
                  .domain(
                    d3.extent(filtered, function(d) {
                      return d.pca1;
                    })
                  )
                  .range([0, swidth]);

                var yScale = d3.scale
                  .linear()
                  .domain(
                    d3.extent(filtered, function(d) {
                      return d.pca2;
                    })
                  )
                  .range([sheight, 0]);

                var xAxis = d3.svg
                  .axis()
                  .scale(xScale)
                  .orient("bottom")
                  .ticks(5);

                var yAxis = d3.svg
                  .axis()
                  .scale(yScale)
                  .orient("left")
                  .ticks(5);

                var line = d3.svg
                  .line()
                  .x(function(d) {
                    return xScale(d.pca1);
                  })
                  .y(function(d) {
                    return yScale(d.pca2);
                  })
                  .interpolate("monotone");

                chart
                  .append("g")
                  .attr("id", "chartAxis")
                  .classed("x axis", true)
                  .attr("transform", "translate(0," + sheight + ")")
                  .call(xAxis);

                chart
                  .append("g")
                  .attr("id", "chartAxis")
                  .classed("y axis", true)
                  .attr("transform", "translate(0,0)")
                  .call(yAxis);

                // x label
                chart
                  .append("text")
                  .attr(
                    "transform",
                    "translate(" +
                      swidth / 2 +
                      " ," +
                      (sheight + smargin.top + 10) +
                      ")"
                  )
                  .style("text-anchor", "middle")
                  .text("Component 1");

                // y label
                chart
                  .append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 0 - smargin.left)
                  .attr("x", 0 - sheight / 2)
                  .attr("dy", "1em")
                  .style("text-anchor", "middle")
                  .text("Component 2");

                chart
                  .selectAll(".point")
                  .data(filtered)
                  .enter()
                  .append("circle")
                  .classed("point", true)
                  .attr("stroke", "grey")
                  .attr("r", function(d) {
                    if (d.Well_ID === locid) {
                      return 8;
                    } else {
                      return 4;
                    }
                  })
                  .attr("fill", function(d) {
                    if (d.analyte === "UCMR") {
                      if (d.Well_ID === locid) {
                        return "#0088FF";
                      } else {
                        if (d.result <= 1) {
                          return "#A900E6";
                        } else if (d.result > 1 && d.result <= 10) {
                          return "#38A800";
                        } else if (d.result > 10 && d.result <= 100) {
                          return "#FFFF00";
                        } else if (d.result > 100) {
                          return "#FF0000";
                        }
                      }
                    } else {
                      if (d.Well_ID === locid) {
                        return "#0088FF";
                      } else {
                        if (d.result <= 0.5) {
                          return "#FAE9D4";
                        } else if (d.result > 0.5 && d.result <= 1) {
                          return "#F2CFB6";
                        } else if (d.result > 1 && d.result <= 5) {
                          return "#E8B397";
                        } else if (d.result > 5 && d.result <= 10) {
                          return "#DE9B7C";
                        } else if (d.result > 10 && d.result <= 50) {
                          return "#D18262";
                        } else if (d.result > 50 && d.result <= 100) {
                          return "#C76C4C";
                        } else if (d.result > 100 && d.result <= 500) {
                          return "#B85737";
                        } else if (d.result > 500) {
                          return "#AB4124";
                        }
                      }
                    }
                  });

                chart
                  .selectAll(".point")
                  .attr("cx", function(d) {
                    return xScale(d.pca1);
                  })
                  .attr("cy", function(d) {
                    return yScale(d.pca2);
                  });

                chart
                  .selectAll(".point")
                  .data(filtered)
                  .exit()
                  .remove();
              }

              fg.clearLayers();

              if (key === "slide01") {
                // layer_world.addTo(map);
                cleanAllLayer();

                var Layer_Overall_FountainCreek = new L.GeoJSON.AJAX(
                  pathPrefix + "static/data/Overall_FountainCreek.geojson",
                  layer_Overall_FountainCreek_Info()
                );
                Layer_Overall_FountainCreek.addTo(map);

                function style_textlabel_Slide1() {
                  return {
                    opacity: 0,
                    rotationOrigin: "center center",
                    icon: L.icon({
                      iconUrl: pathPrefix + "static/img/img_circle_1.png",
                      iconSize: [1, 1],
                      className: "layer_textlabel label_slide1" //别忘了加进cleanalllayer要删除的数组
                    })
                  };
                }

                var marker1 = new L.marker(
                  [38.719, -104.725],
                  style_textlabel_Slide1()
                ); //opacity may be set to zero
                var marker2 = new L.marker(
                  [38.785, -104.654],
                  style_textlabel_Slide1()
                ); //opacity may be set to zero
                var marker3 = new L.marker(
                  [38.8406, -104.6743],
                  style_textlabel_Slide1()
                ); //opacity may be set to zero

                marker1.bindTooltip("Fort Carson", {
                  permanent: true,
                  className: "map-text-label",
                  offset: [0, 0]
                });
                marker2.bindTooltip("CO Springs Airport", {
                  permanent: true,
                  className: "map-text-label",
                  offset: [0, 0]
                });
                marker3.bindTooltip("Peterson AFB", {
                  permanent: true,
                  className: "map-text-label",
                  offset: [0, 0]
                });

                marker1.addTo(map);
                marker2.addTo(map);
                marker3.addTo(map);

                // var tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
                // var tileOptions = {
                //     attribution: 'Storytelling WebGIS'
                // };
                //
                // var magnifiedDataLayer = cloneLayer(Layer_Overall_COSpringsAirport);
                // console.log(magnifiedDataLayer)
                //
                // var magnifyingGlass = L.magnifyingGlass({
                //     zoomOffset: 2,
                //     layers: [
                //         // L.tileLayer(tileUrl, tileOptions),
                //         magnifiedDataLayer
                //     ]
                // });
                //
                // L.control.magnifyingglass(magnifyingGlass, {
                //     forceSeparateButton: true
                // }).addTo(map);

                // layer_shu.addTo(map);
              } else if (markers[key]) {
                cleanAllLayer();
                // Layer_Overall_COSpringsAirport.addTo(map);
                // Layer_Overall_PetersonCarsonBound.addTo(map);

                // console.log("remove world layer");
                // map.removeLayer(layer_world);

                if (key === "slide02") {
                  function style_textlabel_Slide2() {
                    return {
                      opacity: 0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_circle_1.png",
                        iconSize: [1, 1],
                        className: "layer_textlabel label_slide2" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                  }

                  var marker1 = new L.marker(
                    [38.7657, -104.7686],
                    style_textlabel_Slide2()
                  ); //opacity may be set to zero
                  var marker2 = new L.marker(
                    [38.8233, -104.8],
                    style_textlabel_Slide2()
                  ); //opacity may be set to zero

                  marker1.bindTooltip("Fountain Creek", {
                    permanent: true,
                    className: "map-text-label",
                    offset: [0, 0]
                  });
                  marker2.bindTooltip("CO Springs, CO", {
                    permanent: true,
                    className: "map-text-label",
                    offset: [0, 0]
                  });

                  marker1.addTo(map);
                  marker2.addTo(map);

                  var Layer_Overall_FountainCreek = new L.GeoJSON.AJAX(
                    pathPrefix + "static/data/Overall_FountainCreek.geojson",
                    layer_Overall_FountainCreek_Info()
                  );
                  Layer_Overall_FountainCreek.addTo(map);

                  var layer_slide2_AntlersHotel = new L.GeoJSON.AJAX(
                    pathPrefix + "static/data/Overall_AntlersHotel.geojson",
                    layer_slide2_AntlersHotel_Info()
                  );
                  layer_slide2_AntlersHotel.addTo(map);

                  var layer_slide2_FCreek = new L.GeoJSON.AJAX(
                    pathPrefix + "static/data/Slide2_FCreek.geojson",
                    layer_slide2_FCreek_Info()
                  );
                  layer_slide2_FCreek.addTo(map);

                  var layer_slide2_BJR = new L.GeoJSON.AJAX(
                    pathPrefix + "static/data/Slide2_BJR.geojson",
                    layer_slide2_BJR_Info()
                  );
                  layer_slide2_BJR.addTo(map);

                  var layer_Slide2_1947Aerial = new L.GeoJSON.AJAX(
                    pathPrefix + "static/data/Slide2_1947Aerial.geojson",
                    layer_Slide2_1947Aerial_Info()
                  );
                  layer_Slide2_1947Aerial.addTo(map);

                  // ************** 注射 css **************
                  // function addStyleString(str) {
                  //     var node = document.createElement('style');
                  //     node.innerHTML = str;
                  //     document.body.appendChild(node);
                  // }
                  //
                  // addStyleString('.leaflet-image-layer {display: inline;}');
                  // // ************** 注射 css - end ********
                  //
                  // layer_imageSlide02.addTo(map);
                  // // $(layer_imageSlide02._image).className += ' ezber';
                  // $(layer_imageSlide02._image).fadeOut(12000);

                  // $('#layer_imageSlide02CheckBox').on("click", function () {
                  //     if (this.checked) {
                  //         // console.log("他打开啦！！");
                  //         cleanAllLayer();
                  //
                  //
                  //         var Layer_Overall_FountainCreek = new L.GeoJSON.AJAX(pathPrefix + "static/data/Overall_FountainCreek.geojson", layer_Overall_FountainCreek_Info());
                  //         Layer_Overall_FountainCreek.addTo(map);
                  //
                  //
                  //
                  //         var layer_slide2_AntlersHotel = new L.GeoJSON.AJAX(pathPrefix + "static/data/Overall_AntlersHotel.geojson", layer_slide2_AntlersHotel_Info());
                  //
                  //         layer_slide2_AntlersHotel.addTo(map);
                  //
                  //         var layer_slide2_FCreek = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide2_FCreek.geojson", layer_slide2_FCreek_Info());
                  //         layer_slide2_FCreek.addTo(map);
                  //
                  //         var layer_slide2_BJR= new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide2_BJR.geojson", layer_slide2_BJR_Info());
                  //         layer_slide2_BJR.addTo(map);
                  //
                  //
                  //
                  //
                  //
                  //
                  //         L.imageOverlay(imageSlide02, imageSlide02_Bounds).addTo(map);
                  //         // console.log("checked")
                  //         // $(".layer_shu").css("opacity", 1);
                  //         // $(".layer_shu").css("z-index", '');
                  //     } else {
                  //         // console.log("他关上啦！！");
                  //         cleanAllLayer();
                  //
                  //
                  //         var Layer_Overall_FountainCreek = new L.GeoJSON.AJAX(pathPrefix + "static/data/Overall_FountainCreek.geojson", layer_Overall_FountainCreek_Info());
                  //         Layer_Overall_FountainCreek.addTo(map);
                  //
                  //         var layer_slide2_AntlersHotel = new L.GeoJSON.AJAX(pathPrefix + "static/data/Overall_AntlersHotel.geojson", layer_slide2_AntlersHotel_Info());
                  //
                  //         layer_slide2_AntlersHotel.addTo(map);
                  //
                  //         var layer_slide2_FCreek = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide2_FCreek.geojson", layer_slide2_FCreek_Info());
                  //         layer_slide2_FCreek.addTo(map);
                  //
                  //         var layer_slide2_BJR= new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide2_BJR.geojson", layer_slide2_BJR_Info());
                  //         layer_slide2_BJR.addTo(map);
                  //
                  //
                  //         // console.log("unchecked")
                  //         // $(".layer_shu").css("opacity", 0);
                  //         // $(".layer_shu").css("z-index", -1);
                  //     }
                  // })
                } else if (key === "slide03") {
                  $("#layer_Slide3_PRPCheckBox").prop("checked", false);
                  // $('#layer_Slide3_PRPCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide3_PRP = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide3_PRP.geojson", layer_Slide3_PRP_Info());
                  // layer_Slide3_PRP.addTo(map);
                  //
                  // cleanTheLayer("legend_Slide3_PRP");
                  // Legend_Slide3_PRP.addTo(map);

                  $("#layer_Slide3_PRPCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide3_PRP = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide3_PRP.geojson",
                        layer_Slide3_PRP_Info()
                      );

                      layer_Slide3_PRP.addTo(map);

                      cleanTheLayer("legend_Slide3_PRP");
                      Legend_Slide3_PRP.addTo(map);
                      // console.log("checked")
                      // $(".layer_shu").css("opacity", 1);
                      // $(".layer_shu").css("z-index", '');
                    } else {
                      // console.log("他关上啦！！");
                      cleanTheLayer("layer_Slide3_PRP");
                      cleanTheLayer("legend_Slide3_PRP");

                      // console.log("unchecked")
                      // $(".layer_shu").css("opacity", 0);
                      // $(".layer_shu").css("z-index", -1);
                    }
                  });
                } else if (key === "slide04") {
                  $("#layer_Slide4_WatershedsCheckBox").prop("checked", false);
                  $("#layer_Slide4_Pumping16MayCheckBox").prop(
                    "checked",
                    false
                  );
                  $("#layer_Slide4_Pumping16OctCheckBox").prop(
                    "checked",
                    false
                  );

                  // $('#layer_Slide4_WatershedsCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var Layer_Slide4_Watersheds = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide4_Watersheds.geojson", layer_Slide4_Watersheds_Info());
                  // Layer_Slide4_Watersheds.addTo(map);
                  //
                  // cleanTheLayer("legend_Slide4_Watersheds");
                  // Legend_Slide4_Watersheds.addTo(map);

                  $("#layer_Slide4_Pumping16MayCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var layer_Slide4_Pumping16May = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide4_Pumping16May.geojson",
                          layer_Slide4_Pumping16May_Info()
                        );

                        layer_Slide4_Pumping16May.addTo(map);

                        cleanTheLayer("legend_Slide4_Pumping16May");
                        Legend_Slide4_Pumping16May.addTo(map);
                        // Legend_Slide3_PRP.addTo(map);
                        // console.log("checked")
                        // $(".layer_shu").css("opacity", 1);
                        // $(".layer_shu").css("z-index", '');
                      } else {
                        // console.log("他关上啦！！");
                        cleanTheLayer("layer_Slide4_Pumping16May");
                        cleanTheLayer("legend_Slide4_Pumping16May");
                        cleanTheLayer("theChart");

                        // console.log("unchecked")
                        // $(".layer_shu").css("opacity", 0);
                        // $(".layer_shu").css("z-index", -1);
                      }
                    }
                  );

                  // $('#layer_Slide4_Pumping16OctCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide4_Pumping16Oct = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide4_Pumping16Oct.geojson", layer_Slide4_Pumping16Oct_Info());
                  // layer_Slide4_Pumping16Oct.addTo(map);

                  $("#layer_Slide4_Pumping16OctCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var layer_Slide4_Pumping16Oct = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide4_Pumping16Oct.geojson",
                          layer_Slide4_Pumping16Oct_Info()
                        );

                        layer_Slide4_Pumping16Oct.addTo(map);

                        cleanTheLayer("legend_Slide4_Pumping16Oct");
                        Legend_Slide4_Pumping16Oct.addTo(map);
                        // Legend_Slide3_PRP.addTo(map);
                        // console.log("checked")
                        // $(".layer_shu").css("opacity", 1);
                        // $(".layer_shu").css("z-index", '');
                      } else {
                        // console.log("他关上啦！！");
                        cleanTheLayer("layer_Slide4_Pumping16Oct");
                        cleanTheLayer("legend_Slide4_Pumping16Oct");
                        cleanTheLayer("theChart");

                        // console.log("unchecked")
                        // $(".layer_shu").css("opacity", 0);
                        // $(".layer_shu").css("z-index", -1);
                      }
                    }
                  );

                  $("#layer_Slide4_WatershedsCheckBox").on("click", function() {
                    if (this.checked) {
                      var Layer_Slide4_Watersheds = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide4_Watersheds.geojson",
                        layer_Slide4_Watersheds_Info()
                      );
                      Layer_Slide4_Watersheds.addTo(map);

                      cleanTheLayer("legend_Slide4_Watersheds");
                      Legend_Slide4_Watersheds.addTo(map);
                      // Legend_Slide3_PRP.addTo(map);
                      // console.log("checked")
                      // $(".layer_shu").css("opacity", 1);
                      // $(".layer_shu").css("z-index", '');
                    } else {
                      // console.log("他关上啦！！");
                      cleanTheLayer("layer_Slide4_Watersheds");
                      cleanTheLayer("legend_Slide4_Watersheds");

                      // console.log("unchecked")
                      // $(".layer_shu").css("opacity", 0);
                      // $(".layer_shu").css("z-index", -1);
                    }
                  });

                  // Layer_Slide4_Pumping16May.addTo(map);
                  // Layer_Slide4_Pumping16Oct.addTo(map);
                } else if (key === "slide05") {
                  $("#layer_Slide5_RCRACheckBox").prop("checked", false);
                  $("#layer_Slide5_GWPFCSumCheckBox").prop("checked", false);
                  // var Layer_Overall_BigJohnsonReservoir = new L.GeoJSON.AJAX(pathPrefix + "static/data/Overall_BigJohnsonReservoir.geojson", layer_Overall_BigJohnsonReservoir_Info());
                  // Layer_Overall_BigJohnsonReservoir.addTo(map);

                  // $('#layer_Slide5_RCRACheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide5_RCRA = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide5_RCRA.geojson", layer_Slide5_RCRA_Info());
                  // layer_Slide5_RCRA.addTo(map);

                  // cleanTheLayer("legend_Slide5_RCRA");
                  // Legend_Slide5_RCRA.addTo(map);

                  $("#layer_Slide5_RCRACheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide5_RCRA = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide5_RCRA.geojson",
                        layer_Slide5_RCRA_Info()
                      );

                      layer_Slide5_RCRA.addTo(map);

                      // cleanTheLayer("legend_Slide5_RCRA");
                      // Legend_Slide5_RCRA.addTo(map);
                      // Legend_Slide3_PRP.addTo(map);
                      // console.log("checked")
                      // $(".layer_shu").css("opacity", 1);
                      // $(".layer_shu").css("z-index", '');
                    } else {
                      // console.log("他关上啦！！");
                      cleanTheLayer("layer_Slide5_RCRA");
                      // cleanTheLayer("legend_Slide5_RCRA");

                      // console.log("unchecked")
                      // $(".layer_shu").css("opacity", 0);
                      // $(".layer_shu").css("z-index", -1);
                    }
                  });

                  // $('#layer_Slide5_GWPFCSumCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide5_GWPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide5_GWPFCSum.geojson", layer_Slide5_GWPFCSum_Info());
                  // layer_Slide5_GWPFCSum.addTo(map);

                  $("#layer_Slide5_GWPFCSumCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide5_GWPFCSum = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide5_GWPFCSum.geojson",
                        layer_Slide5_GWPFCSum_Info()
                      );

                      layer_Slide5_GWPFCSum.addTo(map);

                      cleanTheLayer("legend_Slide5_GWPFCSum");
                      Legend_Slide5_GWPFCSum.addTo(map);
                      // Legend_Slide3_PRP.addTo(map);
                      // console.log("checked")
                      // $(".layer_shu").css("opacity", 1);
                      // $(".layer_shu").css("z-index", '');
                    } else {
                      // console.log("他关上啦！！");
                      cleanTheLayer("theChart");
                      cleanTheLayer("layer_Slide5_GWPFCSum");
                      cleanTheLayer("legend_Slide5_GWPFCSum");

                      // console.log("unchecked")
                      // $(".layer_shu").css("opacity", 0);
                      // $(".layer_shu").css("z-index", -1);
                    }
                  });

                  // Layer_Slide5_GWPFCSum.addTo(map);
                  // Layer_Slide5_RCRA.addTo(map);
                } else if (key === "slide06") {
                  $("#layer_Slide6_SEPFCSumCheckBox").prop("checked", false);
                  $("#layer_Slide6_SOPFCSumCheckBox").prop("checked", false);
                  $("#layer_Slide6_SWPFCSumCheckBox").prop("checked", false);
                  $("#layer_Slide6_GWPFCSumCheckBox").prop("checked", false);

                  // $('#layer_Slide6_GWPFCSumCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide6_GWPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide5_GWPFCSum.geojson", layer_Slide5_GWPFCSum_Info());
                  // layer_Slide6_GWPFCSum.addTo(map);
                  //
                  // cleanTheLayer("legend_Slide5_GWPFCSum");
                  // Legend_Slide5_GWPFCSum.addTo(map);

                  $("#layer_Slide6_GWPFCSumCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide6_GWPFCSum = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide5_GWPFCSum.geojson",
                        layer_Slide5_GWPFCSum_Info()
                      );

                      layer_Slide6_GWPFCSum.addTo(map);

                      cleanTheLayer("legend_Slide5_GWPFCSum");
                      Legend_Slide5_GWPFCSum.addTo(map);
                      // Legend_Slide3_PRP.addTo(map);
                      // console.log("checked")
                      // $(".layer_shu").css("opacity", 1);
                      // $(".layer_shu").css("z-index", '');
                    } else {
                      // console.log("他关上啦！！");
                      cleanTheLayer("theChart");
                      cleanTheLayer("layer_Slide5_GWPFCSum");
                      cleanTheLayer("legend_Slide5_GWPFCSum");

                      // console.log("unchecked")
                      // $(".layer_shu").css("opacity", 0);
                      // $(".layer_shu").css("z-index", -1);
                    }
                  });

                  // $('#layer_Slide6_SEPFCSumCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide6_SEPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide6_SEPFCSum.geojson", layer_Slide6_SEPFCSum_Info());
                  // layer_Slide6_SEPFCSum.addTo(map);

                  $("#layer_Slide6_SEPFCSumCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide6_SEPFCSum = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide6_SEPFCSum.geojson",
                        layer_Slide6_SEPFCSum_Info()
                      );

                      layer_Slide6_SEPFCSum.addTo(map);

                      cleanTheLayer("legend_Slide6_SEPFCSum");
                      Legend_Slide6_SEPFCSum.addTo(map);
                      // Legend_Slide3_PRP.addTo(map);
                      // console.log("checked")
                      // $(".layer_shu").css("opacity", 1);
                      // $(".layer_shu").css("z-index", '');
                    } else {
                      // console.log("他关上啦！！");
                      cleanTheLayer("layer_Slide6_SEPFCSum");
                      cleanTheLayer("legend_Slide6_SEPFCSum");

                      // console.log("unchecked")
                      // $(".layer_shu").css("opacity", 0);
                      // $(".layer_shu").css("z-index", -1);
                    }
                  });

                  // $('#layer_Slide6_SOPFCSumCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide6_SOPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide6_SOPFCSum.geojson", layer_Slide6_SOPFCSum_Info());
                  // layer_Slide6_SOPFCSum.addTo(map);

                  $("#layer_Slide6_SOPFCSumCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide6_SOPFCSum = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide6_SOPFCSum.geojson",
                        layer_Slide6_SOPFCSum_Info()
                      );

                      layer_Slide6_SOPFCSum.addTo(map);

                      cleanTheLayer("legend_Slide6_SOPFCSum");
                      Legend_Slide6_SOPFCSum.addTo(map);
                      // Legend_Slide3_PRP.addTo(map);
                      // console.log("checked")
                      // $(".layer_shu").css("opacity", 1);
                      // $(".layer_shu").css("z-index", '');
                    } else {
                      // console.log("他关上啦！！");
                      cleanTheLayer("layer_Slide6_SOPFCSum");
                      cleanTheLayer("legend_Slide6_SOPFCSum");

                      // console.log("unchecked")
                      // $(".layer_shu").css("opacity", 0);
                      // $(".layer_shu").css("z-index", -1);
                    }
                  });

                  // $('#layer_Slide6_SWPFCSumCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide6_SWPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide6_SWPFCSum.geojson", ayer_Slide6_SWPFCSum_Info());
                  // layer_Slide6_SWPFCSum.addTo(map);

                  $("#layer_Slide6_SWPFCSumCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide6_SWPFCSum = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide6_SWPFCSum.geojson",
                        layer_Slide6_SWPFCSum_Info()
                      );

                      layer_Slide6_SWPFCSum.addTo(map);

                      cleanTheLayer("legend_Slide6_SWPFCSum");
                      Legend_Slide6_SWPFCSum.addTo(map);
                      // Legend_Slide3_PRP.addTo(map);
                      // console.log("checked")
                      // $(".layer_shu").css("opacity", 1);
                      // $(".layer_shu").css("z-index", '');
                    } else {
                      // console.log("他关上啦！！");
                      cleanTheLayer("layer_Slide6_SWPFCSum");
                      cleanTheLayer("legend_Slide6_SWPFCSum");

                      // console.log("unchecked")
                      // $(".layer_shu").css("opacity", 0);
                      // $(".layer_shu").css("z-index", -1);
                    }
                  });

                  // Layer_Slide5_GWPFCSum.addTo(map);
                  // Layer_Slide6_SEPFCSum.addTo(map);
                  // Layer_Slide6_SOPFCSum.addTo(map);
                  // Layer_Slide6_SWPFCSum.addTo(map);
                } else if (key === "slide07") {
                  $("#layer_Slide7_SaturatedAlluviumCheckBox").prop(
                    "checked",
                    false
                  );
                  $("#layer_Slide7_BedrockContour2017JulyCheckBox").prop(
                    "checked",
                    false
                  );
                  $("#layer_Slide7_GWContour2017MayCheckBox").prop(
                    "checked",
                    false
                  );
                  $("#layer_Slide7_GWContour201718NGSCheckBox").prop(
                    "checked",
                    false
                  );
                  $("#layer_Slide7_AACheckBox").prop("checked", false);
                  $("#layer_Slide7_BBCheckBox").prop("checked", false);
                  $("#layer_Slide7_GWFlowPathsCheckBox").prop("checked", false);

                  // Legend_Slide7.addTo(map);
                  //
                  // var layer_Slide7_GWFlowPaths = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide7_GWFlowPaths.geojson", layer_Slide7_GWFlowPaths_Info());
                  // layer_Slide7_GWFlowPaths.addTo(map);
                  //
                  //
                  // function style_textlabel_Slide7_flow() {
                  //
                  //     return {
                  //         opacity: 0,
                  //         rotationOrigin: 'center center',
                  //         icon: L.icon({
                  //             iconUrl: pathPrefix + 'static/img/img_circle_1.png',
                  //             iconSize: [1, 1],
                  //             className: "layer_textlabel label_slide7", //别忘了加进cleanalllayer要删除的数组
                  //         }),
                  //     }
                  // }
                  //
                  // var marker_flowpath1 = new L.marker([38.845, -104.764], style_textlabel_Slide7_flow()); //opacity may be set to zero
                  // var marker_flowpath2 = new L.marker([38.823, -104.725], style_textlabel_Slide7_flow()); //opacity may be set to zero
                  // var marker_flowpath3 = new L.marker([38.802, -104.66], style_textlabel_Slide7_flow()); //opacity may be set to zero
                  // var marker_flowpath4 = new L.marker([38.762, -104.752], style_textlabel_Slide7_flow()); //opacity may be set to zero
                  //
                  //
                  // marker_flowpath1.bindTooltip("Sand Creek", {
                  //     permanent: true,
                  //     className: "map-text-label label_slide7",
                  //     offset: [0, 0]
                  // });
                  // marker_flowpath2.bindTooltip("Broadway", {
                  //     permanent: true,
                  //     className: "map-text-label label_slide7",
                  //     offset: [0, 0]
                  // });
                  // marker_flowpath3.bindTooltip("Windmill Gulch", {
                  //     permanent: true,
                  //     className: "map-text-label label_slide7",
                  //     offset: [0, 0]
                  // });
                  // marker_flowpath4.bindTooltip("Schlage", {
                  //     permanent: true,
                  //     className: "map-text-label label_slide7",
                  //     offset: [0, 0]
                  // });
                  //
                  //
                  // marker_flowpath1.addTo(map);
                  // marker_flowpath2.addTo(map);
                  // marker_flowpath3.addTo(map);
                  // marker_flowpath4.addTo(map);
                  //
                  //
                  // var layer_Slide7_Label_Triangles = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide7_Label_Triangles.geojson", layer_Slide7_Label_Triangles_Info());
                  // layer_Slide7_Label_Triangles.addTo(map);
                  //
                  //
                  // $('#layer_Slide7_SaturatedAlluviumCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide7_SaturatedAlluvium = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide7_SaturatedAlluvium.geojson", layer_Slide7_SaturatedAlluvium_Info());
                  // layer_Slide7_SaturatedAlluvium.addTo(map);
                  //
                  //
                  // $('#layer_Slide7_AACheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide7_AA_line = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide7_AA_line.geojson", layer_Slide7_AA_line_Info());
                  // layer_Slide7_AA_line.addTo(map);
                  // var layer_Slide7_AA_point = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide7_AA_point.geojson", layer_Slide7_AA_point_Info());
                  // layer_Slide7_AA_point.addTo(map);
                  //
                  //
                  // $('#layer_Slide7_BBCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide7_BB_line = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide7_BB_line.geojson", layer_Slide7_BB_line_Info());
                  // layer_Slide7_BB_line.addTo(map);
                  // var layer_Slide7_BB_point = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide7_BB_point.geojson", layer_Slide7_BB_point_Info());
                  // layer_Slide7_BB_point.addTo(map);

                  $("#layer_Slide7_SaturatedAlluviumCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var Layer_Slide7_SaturatedAlluvium = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide7_SaturatedAlluvium.geojson",
                          layer_Slide7_SaturatedAlluvium_Info()
                        );
                        Layer_Slide7_SaturatedAlluvium.addTo(map);

                        //cleanTheLayer("legend_【xxxxxx】");
                        //Legend_【xxxxxx】.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide7_SaturatedAlluvium");
                        //cleanTheLayer("legend_【xxxxxx】");
                      }
                    }
                  );

                  //////////////////////////////////////////////////////
                  $("#layer_Slide7_GWFlowPathsCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        // cleanTheLayer("label_slide7");
                        cleanTheLayer("layer_Slide7_GWFlowPaths");
                        cleanTheLayer("layer_Slide7_Label_Triangles");

                        function style_textlabel_Slide7_flow() {
                          return {
                            opacity: 0,
                            rotationOrigin: "center center",
                            icon: L.icon({
                              iconUrl:
                                pathPrefix + "static/img/img_circle_1.png",
                              iconSize: [1, 1],
                              className: "layer_textlabel" //别忘了加进cleanalllayer要删除的数组
                            })
                          };
                        }

                        var marker_flowpath1 = new L.marker(
                          [38.845, -104.764],
                          style_textlabel_Slide7_flow()
                        ); //opacity may be set to zero
                        var marker_flowpath2 = new L.marker(
                          [38.823, -104.725],
                          style_textlabel_Slide7_flow()
                        ); //opacity may be set to zero
                        var marker_flowpath3 = new L.marker(
                          [38.802, -104.66],
                          style_textlabel_Slide7_flow()
                        ); //opacity may be set to zero
                        var marker_flowpath4 = new L.marker(
                          [38.762, -104.752],
                          style_textlabel_Slide7_flow()
                        ); //opacity may be set to zero

                        marker_flowpath1.bindTooltip("Sand Creek", {
                          permanent: true,
                          className: "map-text-label label_slide7",
                          offset: [0, 0]
                        });
                        marker_flowpath2.bindTooltip("Broadway", {
                          permanent: true,
                          className: "map-text-label label_slide7",
                          offset: [0, 0]
                        });
                        marker_flowpath3.bindTooltip("Windmill Gulch", {
                          permanent: true,
                          className: "map-text-label label_slide7",
                          offset: [0, 0]
                        });
                        marker_flowpath4.bindTooltip("Schlage", {
                          permanent: true,
                          className: "map-text-label label_slide7",
                          offset: [0, 0]
                        });

                        marker_flowpath1.addTo(map);
                        marker_flowpath2.addTo(map);
                        marker_flowpath3.addTo(map);
                        marker_flowpath4.addTo(map);

                        var layer_Slide7_GWFlowPaths = new L.GeoJSON.AJAX(
                          pathPrefix + "static/data/Slide7_GWFlowPaths.geojson",
                          layer_Slide7_GWFlowPaths_Info()
                        );
                        layer_Slide7_GWFlowPaths.addTo(map);

                        var layer_Slide7_Label_Triangles = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide7_Label_Triangles.geojson",
                          layer_Slide7_Label_Triangles_Info()
                        );
                        layer_Slide7_Label_Triangles.addTo(map);

                        //cleanTheLayer("legend_【xxxxxx】");
                        //Legend_【xxxxxx】.addTo(map);
                      } else {
                        cleanTheLayer("label_slide7");
                        cleanTheLayer("layer_Slide7_GWFlowPaths");
                        cleanTheLayer("layer_Slide7_Label_Triangles");
                        //cleanTheLayer("legend_【xxxxxx】");
                      }
                    }
                  );

                  $("#layer_Slide7_BedrockContour2017JulyCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {

                        Legend_Slide7_ct_BdRck.addTo(map);
                        // Layer_Slide7_BedrockContour2017July.addTo(map);
                        cleanTheLayer("legend_Slide7_ct_BdRck");
                        Legend_Slide7_ct_BdRck.addTo(map);

                        // cleanTheLayer("legend_Slide7");
                        cleanTheLayer("layer_Slide7_GWContour2017May");
                        cleanTheLayer("legend_Slide7_ct_may17");
                        cleanTheLayer("layer_Slide7_GWContour201718NGS");
                        cleanTheLayer("legend_Slide7_ct_1718ngs");
                        cleanTheLayer("contour-label");
                        $("#layer_Slide7_GWContour2017MayCheckBox").prop(
                          "checked",
                          false
                        );
                        $("#layer_Slide7_GWContour201718NGSCheckBox").prop(
                          "checked",
                          false
                        );

                        var Layer_Slide7_BedrockContour2017July = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide7_BedrockContour2017July.geojson",
                          layer_Slide7_BedrockContour2017July_Info()
                        );
                        Layer_Slide7_BedrockContour2017July.addTo(map);

                        // function style_textlabel_Bedrock_Contours() {
                        //
                        //     return {
                        //         opacity: 0,
                        //         rotationOrigin: 'center center',
                        //         icon: L.icon({
                        //             iconUrl: pathPrefix + 'static/img/img_circle_1.png',
                        //             iconSize: [1, 1],
                        //             className: "layer_textlabel label_slide7_Bedrock_Contours", //别忘了加进cleanalllayer要删除的数组
                        //         }),
                        //     }
                        //
                        // }
                        //
                        // var marker1 = new L.marker([38.828, -104.674], style_textlabel_Bedrock_Contours()); //opacity may be set to zero
                        // var marker2 = new L.marker([38.81, -104.677], style_textlabel_Bedrock_Contours()); //opacity may be set to zero
                        // var marker3 = new L.marker([38.787, -104.688], style_textlabel_Bedrock_Contours()); //opacity may be set to zero
                        // var marker4 = new L.marker([38.765, -104.695], style_textlabel_Bedrock_Contours()); //opacity may be set to zero
                        // var marker5 = new L.marker([38.725, -104.682], style_textlabel_Bedrock_Contours()); //opacity may be set to zero
                        //
                        //
                        // marker1.bindTooltip("6200", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker2.bindTooltip("6140", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker3.bindTooltip("6000", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker4.bindTooltip("5840", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker5.bindTooltip("5720", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        //
                        // marker1.addTo(map);
                        // marker2.addTo(map);
                        // marker3.addTo(map);
                        // marker4.addTo(map);
                        // marker5.addTo(map);

                        // Legend_Slide7_ct_1718ngs.addTo(map);
                        // Legend_Slide7_ct_may17.addTo(map);

                        // Legend_Slide7.addTo(map);

                        //cleanTheLayer("legend_【xxxxxx】");
                        //Legend_【xxxxxx】.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide7_BedrockContour2017July");
                        cleanTheLayer("legend_Slide7_ct_BdRck");
                        // cleanTheLayer("contour-label");
                        //cleanTheLayer("legend_【xxxxxx】");
                      }
                    }
                  );

                  $("#layer_Slide7_GWContour2017MayCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {


                        Legend_Slide7_ct_may17.addTo(map);
                        cleanTheLayer("legend_Slide7_ct_may17");
                        Legend_Slide7_ct_may17.addTo(map);
                        // cleanTheLayer("legend_Slide7");
                        cleanTheLayer("layer_Slide7_BedrockContour2017July");
                        cleanTheLayer("legend_Slide7_ct_BdRck");
                        cleanTheLayer("layer_Slide7_GWContour201718NGS");
                        cleanTheLayer("legend_Slide7_ct_1718ngs");
                        cleanTheLayer("contour-label");
                        $("#layer_Slide7_BedrockContour2017JulyCheckBox").prop(
                          "checked",
                          false
                        );
                        $("#layer_Slide7_GWContour201718NGSCheckBox").prop(
                          "checked",
                          false
                        );

                        var Layer_Slide7_GWContour2017May = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide7_GWContour2017May.geojson",
                          layer_Slide7_GWContour2017May_Info()
                        );
                        Layer_Slide7_GWContour2017May.addTo(map);

                        //
                        // function style_textlabel_aecom_Contours() {
                        //
                        //     return {
                        //         opacity: 0,
                        //         rotationOrigin: 'center center',
                        //         icon: L.icon({
                        //             iconUrl: pathPrefix + 'static/img/img_circle_1.png',
                        //             iconSize: [1, 1],
                        //             className: "layer_textlabel label_slide7_aecom_Contours", //别忘了加进cleanalllayer要删除的数组
                        //         }),
                        //     }
                        //
                        // }
                        //
                        // var marker1 = new L.marker([38.806, -104.813], style_textlabel_aecom_Contours()); //opacity may be set to zero
                        // var marker2 = new L.marker([38.791, -104.801], style_textlabel_aecom_Contours()); //opacity may be set to zero
                        // var marker3 = new L.marker([38.74, -104.747], style_textlabel_aecom_Contours()); //opacity may be set to zero
                        // var marker4 = new L.marker([38.843, -104.7], style_textlabel_aecom_Contours()); //opacity may be set to zero
                        // var marker5 = new L.marker([38.809, -104.745], style_textlabel_aecom_Contours()); //opacity may be set to zero
                        // var marker6 = new L.marker([38.808, -104.678], style_textlabel_aecom_Contours()); //opacity may be set to zero
                        //
                        //
                        // marker1.bindTooltip("5880", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker2.bindTooltip("5840", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker3.bindTooltip("5670", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker4.bindTooltip("6210", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker5.bindTooltip("5940", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker6.bindTooltip("6130", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        //
                        // marker1.addTo(map);
                        // marker2.addTo(map);
                        // marker3.addTo(map);
                        // marker4.addTo(map);
                        // marker5.addTo(map);
                        // marker6.addTo(map);

                        // Legend_Slide7_ct_1718ngs.addTo(map);
                        // Legend_Slide7_ct_may17.addTo(map);
                        // Legend_Slide7_ct_BdRck.addTo(map);
                        // Legend_Slide7.addTo(map);

                        //cleanTheLayer("legend_【xxxxxx】");
                        //Legend_【xxxxxx】.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide7_GWContour2017May");
                        cleanTheLayer("legend_Slide7_ct_may17");
                        // cleanTheLayer("contour-label");
                        //cleanTheLayer("legend_【xxxxxx】");
                      }
                    }
                  );

                  $("#layer_Slide7_GWContour201718NGSCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {

                        Legend_Slide7_ct_1718ngs.addTo(map);
                        cleanTheLayer("legend_Slide7_ct_1718ngs");
                        Legend_Slide7_ct_1718ngs.addTo(map);
                        // cleanTheLayer("legend_Slide7");
                        cleanTheLayer("layer_Slide7_GWContour2017May");
                        cleanTheLayer("legend_Slide7_ct_may17");
                        cleanTheLayer("layer_Slide7_BedrockContour2017July");
                        cleanTheLayer("legend_Slide7_ct_BdRck");
                        cleanTheLayer("contour-label");
                        $("#layer_Slide7_GWContour2017MayCheckBox").prop(
                          "checked",
                          false
                        );
                        $("#layer_Slide7_BedrockContour2017JulyCheckBox").prop(
                          "checked",
                          false
                        );

                        var Layer_Slide7_GWContour201718NGS = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide7_GWContour201718NGS.geojson",
                          layer_Slide7_GWContour201718NGS_Info()
                        );
                        Layer_Slide7_GWContour201718NGS.addTo(map);

                        // function style_textlabel_201718_Contours() {
                        //
                        //     return {
                        //         opacity: 0,
                        //         rotationOrigin: 'center center',
                        //         icon: L.icon({
                        //             iconUrl: pathPrefix + 'static/img/img_circle_1.png',
                        //             iconSize: [1, 1],
                        //             className: "layer_textlabel label_slide7_201718_Contours", //别忘了加进cleanalllayer要删除的数组
                        //         }),
                        //     }
                        //
                        // }
                        //
                        // var marker1 = new L.marker([38.787, -104.681], style_textlabel_201718_Contours()); //opacity may be set to zero
                        // var marker2 = new L.marker([38.809, -104.681], style_textlabel_201718_Contours()); //opacity may be set to zero
                        // var marker3 = new L.marker([38.838, -104.681], style_textlabel_201718_Contours()); //opacity may be set to zero
                        // var marker4 = new L.marker([38.826, -104.72], style_textlabel_201718_Contours()); //opacity may be set to zero
                        // var marker5 = new L.marker([-104.72, 38.795], style_textlabel_201718_Contours()); //opacity may be set to zero
                        //
                        //
                        // marker1.bindTooltip("6050", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker2.bindTooltip("6110", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker3.bindTooltip("6100", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker4.bindTooltip("6175", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        // marker5.bindTooltip("5990", {
                        //     permanent: true,
                        //     className: "map-text-label contour-label",
                        //     offset: [0, 0]
                        // });
                        //
                        // marker1.addTo(map);
                        // marker2.addTo(map);
                        // marker3.addTo(map);
                        // marker4.addTo(map);
                        // marker5.addTo(map);

                        // Legend_Slide7_ct_1718ngs.addTo(map);
                        // Legend_Slide7_ct_may17.addTo(map);
                        // Legend_Slide7_ct_BdRck.addTo(map);
                        // Legend_Slide7.addTo(map);

                        //cleanTheLayer("legend_【xxxxxx】");
                        //Legend_【xxxxxx】.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide7_GWContour201718NGS");
                        cleanTheLayer("legend_Slide7_ct_1718ngs");
                        // cleanTheLayer("contour-label");
                        //cleanTheLayer("legend_【xxxxxx】");
                      }
                    }
                  );

                  $("#layer_Slide7_AACheckBox").on("click", function() {
                    if (this.checked) {
                      var Layer_Slide7_AA_line = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide7_AA_line.geojson",
                        layer_Slide7_AA_line_Info()
                      );
                      Layer_Slide7_AA_line.addTo(map);

                      var Layer_Slide7_AA_point = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide7_AA_point.geojson",
                        layer_Slide7_AA_point_Info()
                      );
                      Layer_Slide7_AA_point.addTo(map);

                      cleanTheLayer("legend_Slide7");
                      Legend_Slide7.addTo(map);

                      //cleanTheLayer("legend_【xxxxxx】");
                      //Legend_【xxxxxx】.addTo(map);
                    } else {
                      // $('#layer_Slide7_BBCheckBox').on("click", function () {
                      //     if (that.checked) {
                      //     } else {
                      //         cleanTheLayer("legend_Slide7");
                      //     }
                      // })

                      if (
                        $("#layer_Slide7_BBCheckBox").is(":checked") == false
                      ) {
                        cleanTheLayer("legend_Slide7");
                      }
                      cleanTheLayer("layer_Slide7_AA_line");
                      cleanTheLayer("layer_Slide7_AA_point");
                      // cleanTheLayer("legend_Slide7");
                      //cleanTheLayer("legend_【xxxxxx】");
                    }
                  });

                  $("#layer_Slide7_BBCheckBox").on("click", function() {
                    if (this.checked) {
                      var Layer_Slide7_BB_line = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide7_BB_line.geojson",
                        layer_Slide7_BB_line_Info()
                      );
                      Layer_Slide7_BB_line.addTo(map);

                      var Layer_Slide7_BB_point = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide7_BB_point.geojson",
                        layer_Slide7_BB_point_Info()
                      );
                      Layer_Slide7_BB_point.addTo(map);

                      cleanTheLayer("legend_Slide7");
                      Legend_Slide7.addTo(map);

                      //cleanTheLayer("legend_【xxxxxx】");
                      //Legend_【xxxxxx】.addTo(map);
                    } else {
                      if (
                        $("#layer_Slide7_AACheckBox").is(":checked") == false
                      ) {
                        cleanTheLayer("legend_Slide7");
                      }
                      cleanTheLayer("layer_Slide7_BB_line");
                      cleanTheLayer("layer_Slide7_BB_point");
                      // cleanTheLayer("legend_Slide7");
                      //cleanTheLayer("legend_【xxxxxx】");
                    }
                  });
                } else if (key === "slide08") {
                  $("#layer_Slide8_EPAPFCSumCheckBox").prop("checked", false);
                  $("#layer_Slide8_OffsiteTrendsCheckBox").prop(
                    "checked",
                    false
                  );
                  $("#layer_Slide8_OnsiteTrendsCheckBox").prop(
                    "checked",
                    false
                  );

                  // $('#layer_Slide8_EPAPFCSumCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide8_EPAPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide8_EPAPFCSum.geojson", layer_Slide8_EPAPFCSum_Info());
                  // layer_Slide8_EPAPFCSum.addTo(map);
                  //
                  // cleanTheLayer("legend_Slide8_EPAPFCSum");
                  // Legend_Slide8_EPAPFCSum.addTo(map);

                  $("#layer_Slide8_EPAPFCSumCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide8_EPAPFCSum = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide8_EPAPFCSum.geojson",
                        layer_Slide8_EPAPFCSum_Info()
                      );
                      layer_Slide8_EPAPFCSum.addTo(map);

                      cleanTheLayer("legend_Slide8_EPAPFCSum");
                      Legend_Slide8_EPAPFCSum.addTo(map);
                    } else {
                      cleanTheLayer("theChart");
                      cleanTheLayer("layer_Slide8_EPAPFCSum");
                      cleanTheLayer("legend_Slide8_EPAPFCSum");
                    }
                  });

                  $("#layer_Slide8_OffsiteTrendsCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        // $("#layer_Slide8_OnsiteTrendsCheckBox").prop("checked", false);
                        // cleanTheLayer("layer_Slide8_OnsiteTrends");
                        // cleanTheLayer("legend_Slide8_OnsiteTrends");

                        var layer_Slide8_OffsiteTrends = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide8_OffsiteTrends.geojson",
                          layer_Slide8_OffsiteTrends_Info()
                        );

                        layer_Slide8_OffsiteTrends.addTo(map);

                        cleanTheLayer("legend_Slide8_OffsiteTrends");
                        Legend_Slide8_OffsiteTrends.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide8_OffsiteTrends");
                        cleanTheLayer("legend_Slide8_OffsiteTrends");
                      }
                    }
                  );

                  $("#layer_Slide8_OnsiteTrendsCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        // $("#layer_Slide8_OffsiteTrendsCheckBox").prop("checked", false);
                        // cleanTheLayer("layer_Slide8_OffsiteTrends");
                        // cleanTheLayer("legend_Slide8_OffsiteTrends");

                        var layer_Slide8_OnsiteTrends = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide8_OnsiteTrends.geojson",
                          layer_Slide8_OnsiteTrends_Info()
                        );
                        layer_Slide8_OnsiteTrends.addTo(map);

                        cleanTheLayer("legend_Slide8_OnsiteTrends");
                        Legend_Slide8_OnsiteTrends.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide8_OnsiteTrends");
                        cleanTheLayer("legend_Slide8_OnsiteTrends");
                      }
                    }
                  );
                } else if (key === "slide09") {
                  $("#layer_Slide9_FountainCreekGnLCheckBox").prop(
                    "checked",
                    false
                  );
                  $("#layer_Slide9_GWBoromCheckBox").prop("checked", false);
                  $("#layer_Slide9_GWGadoliniumCheckBox").prop("checked", false);
                  $("#layer_Slide9_GWdoxy1816CheckBox").prop("checked", false);
                  $("#layer_Slide9_GWMetforminCheckBox").prop("checked", false);
                  $("#layer_Slide9_WWTPlantCheckBox").prop("checked", false);

                  var Layer_Overall_FountainCreek = new L.GeoJSON.AJAX(
                    pathPrefix + "static/data/Overall_FountainCreek.geojson",
                    layer_Overall_FountainCreek_Info()
                  );

                  Layer_Overall_FountainCreek.addTo(map);

                  // $('#layer_Slide9_FountainCreekGnLCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide9_FountainCreekGnL = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide9_FountainCreekGnL.geojson", layer_Slide9_FountainCreekGnL_Info());
                  // layer_Slide9_FountainCreekGnL.addTo(map);
                  //
                  // var layer_Slide9_Label_Triangles = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide9_Label_Triangles.geojson", layer_Slide9_Label_Triangles_Info());
                  // layer_Slide9_Label_Triangles.addTo(map);
                  //
                  //
                  function style_textlabel_GnL() {
                    return {
                      opacity: 0,
                      rotationOrigin: "center center",
                      icon: L.icon({
                        iconUrl: pathPrefix + "static/img/img_circle_1.png",
                        iconSize: [1, 1],
                        className:
                          "layer_textlabel label_slide7_Bedrock_Contours" //别忘了加进cleanalllayer要删除的数组
                      })
                    };
                  }

                  var marker1 = new L.marker(
                    [38.791, -104.786],
                    style_textlabel_GnL()
                  ); //opacity may be set to zero
                  var marker2 = new L.marker(
                    [38.745, -104.747],
                    style_textlabel_GnL()
                  ); //opacity may be set to zero

                  marker1.bindTooltip("Losing Reach", {
                    permanent: true,
                    className: "map-text-label",
                    offset: [0, 0]
                  });
                  marker2.bindTooltip("Gaining Reach", {
                    permanent: true,
                    className: "map-text-label",
                    offset: [0, 0]
                  });
                  //
                  // marker1.addTo(map);
                  // marker2.addTo(map);

                  $("#layer_Slide9_FountainCreekGnLCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var layer_Slide9_FountainCreekGnL = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide9_FountainCreekGnL.geojson",
                          layer_Slide9_FountainCreekGnL_Info()
                        );

                        var layer_Slide9_Label_Triangles = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide9_Label_Triangles.geojson",
                          layer_Slide9_Label_Triangles_Info()
                        );

                        layer_Slide9_FountainCreekGnL.addTo(map);
                        layer_Slide9_Label_Triangles.addTo(map);

                        var marker1 = new L.marker(
                          [38.791, -104.786],
                          style_textlabel_GnL()
                        ); //opacity may be set to zero
                        var marker2 = new L.marker(
                          [38.745, -104.747],
                          style_textlabel_GnL()
                        ); //opacity may be set to zero

                        marker1.bindTooltip("Losing Reach", {
                          permanent: true,
                          className: "map-text-label",
                          offset: [0, 0]
                        });
                        marker2.bindTooltip("Gaining Reach", {
                          permanent: true,
                          className: "map-text-label",
                          offset: [0, 0]
                        });

                        marker1.addTo(map);
                        marker2.addTo(map);

                        //cleanTheLayer("legend_【xxxxxx】");
                        //Legend_【xxxxxx】.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide9_FountainCreekGnL");
                        cleanTheLayer("layer_Slide9_Label_Triangles");
                        cleanTheLayer("leaflet-tooltip");
                        //cleanTheLayer("legend_【xxxxxx】");
                      }
                    }
                  );

                  $("#layer_Slide9_GWBoromCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide9_GWBorom = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide9_GWBorom.geojson",
                        layer_Slide9_GWBorom_Info()
                      );

                      layer_Slide9_GWBorom.addTo(map);

                      cleanTheLayer("legend_Slide9_GWBorom");
                      Legend_Slide9_GWBorom.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide9_GWBorom");
                      cleanTheLayer("legend_Slide9_GWBorom");
                    }
                  });

                  $("#layer_Slide9_GWGadoliniumCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide9_GWGadolinium = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide9_GWGadolinium.geojson",
                        layer_Slide9_GWGadolinium_Info()
                      );

                      layer_Slide9_GWGadolinium.addTo(map);

                      cleanTheLayer("legend_Slide9_GWGadolinium");
                      Legend_Slide9_GWGadolinium.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide9_GWGadolinium");
                      cleanTheLayer("legend_Slide9_GWGadolinium");
                    }
                  });

                  $("#layer_Slide9_GWdoxy1816CheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide9_GWdoxy1816 = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide9_GWdoxy1816.geojson",
                        layer_Slide9_GWdoxy1816_Info()
                      );

                      layer_Slide9_GWdoxy1816.addTo(map);

                      cleanTheLayer("legend_Slide9_GWdoxy1816");
                      Legend_Slide9_GWdoxy1816.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide9_GWdoxy1816");
                      cleanTheLayer("legend_Slide9_GWdoxy1816");
                    }
                  });

                  $("#layer_Slide9_GWMetforminCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var layer_Slide9_GWMetformin = new L.GeoJSON.AJAX(
                          pathPrefix + "static/data/Slide9_GWMetformin.geojson",
                          layer_Slide9_GWMetformin_Info()
                        );

                        layer_Slide9_GWMetformin.addTo(map);

                        cleanTheLayer("legend_Slide9_GWMetformin");
                        Legend_Slide9_GWMetformin.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide9_GWMetformin");
                        cleanTheLayer("legend_Slide9_GWMetformin");
                      }
                    }
                  );

                  $("#layer_Slide9_WWTPlantCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide9_WWTPlant = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide9_WWTPlant.geojson",
                        layer_Slide9_WWTPlant_Info()
                      );
                      layer_Slide9_WWTPlant.addTo(map);

                      var Layer_Slide9_FacilityDisposalPipeline = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide9_FacilityDisposalPipeline.geojson",
                        layer_Slide9_FacilityDisposalPipeline_Info()
                      );
                      Layer_Slide9_FacilityDisposalPipeline.addTo(map);


                      function style_textlabel_WWTPlants() {
                        return {
                          opacity: 0,
                          rotationOrigin: "center center",
                          icon: L.icon({
                            iconUrl: pathPrefix + "static/img/img_circle_1.png",
                            iconSize: [1, 1],
                            className:
                              "layer_textlabel label_slide7_aecom_Contours" //别忘了加进cleanalllayer要删除的数组
                          })
                        };
                      }

                      var wWTPmarker1 = new L.marker(
                        [38.8132952554, -104.808302385],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker2 = new L.marker(
                        [38.7216624138, -104.722905346],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker3 = new L.marker(
                        [38.7373397292, -104.738398363],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker4 = new L.marker(
                        [38.6615211374, -104.698952921],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker5 = new L.marker(
                        [38.8376671252, -104.708645773],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker6 = new L.marker(
                        [38.630101301, -104.702327719],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker7 = new L.marker(
                        [38.8949113438, -104.824546999],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker8 = new L.marker(
                        [39.0441615501, -104.852743961],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker9 = new L.marker(
                        [39.0513293639, -104.794973568],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker10 = new L.marker(
                        [39.0719250289, -104.873411118],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker11 = new L.marker(
                        [38.9843334837, -104.829760208],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker12 = new L.marker(
                        [38.9241860288, -104.605552661],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker13 = new L.marker(
                        [38.7365718218, -104.398925597],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker14 = new L.marker(
                        [38.7144477143, -104.820937904],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker15 = new L.marker(
                        [38.7244706286, -104.746330715],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker16 = new L.marker(
                        [38.6196257676, -104.664299156],
                        style_textlabel_WWTPlants()
                      );

                      wWTPmarker1.bindTooltip("Las Vegas St WWTF", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker2.bindTooltip("Widefield WSD", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker3.bindTooltip("Security SD", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker4.bindTooltip(
                        "Fountain Sanitation District WWTF",
                        {
                          permanent: true,
                          className: "map-text-label wwtp-label",
                          offset: [0, 0]
                        }
                      );
                      wWTPmarker5.bindTooltip(
                        "Cherokee Metropolitan District",
                        {
                          permanent: true,
                          className: "map-text-label wwtp-label",
                          offset: [0, 0]
                        }
                      );
                      wWTPmarker6.bindTooltip("Clear Spring Regional WTF", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker7.bindTooltip("CSU JD Phillips Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker8.bindTooltip("Upper Monument WWTF Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker9.bindTooltip("Academy Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker10.bindTooltip("Tri-Lakes Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker11.bindTooltip("USAFA Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker12.bindTooltip("Paintbrush Hills Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker13.bindTooltip(
                        "Cherokee Metropolitan Dist. GW Recharge Facility",
                        {
                          permanent: true,
                          className: "map-text-label wwtp-label",
                          offset: [0, 0]
                        }
                      );
                      wWTPmarker14.bindTooltip(
                        "Cheyenne Mtn. Estates Discharge",
                        {
                          permanent: true,
                          className: "map-text-label wwtp-label",
                          offset: [0, 0]
                        }
                      );
                      wWTPmarker15.bindTooltip("Fort Carson Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker16.bindTooltip("LFMSDD Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });

                      wWTPmarker1.addTo(map);
                      wWTPmarker2.addTo(map);
                      wWTPmarker3.addTo(map);
                      wWTPmarker4.addTo(map);
                      wWTPmarker5.addTo(map);
                      wWTPmarker6.addTo(map);
                      wWTPmarker7.addTo(map);
                      wWTPmarker8.addTo(map);
                      wWTPmarker9.addTo(map);
                      wWTPmarker10.addTo(map);
                      wWTPmarker11.addTo(map);
                      wWTPmarker12.addTo(map);
                      wWTPmarker13.addTo(map);
                      wWTPmarker14.addTo(map);
                      wWTPmarker15.addTo(map);
                      wWTPmarker16.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide9_WWTPlant");
                      cleanTheLayer("layer_Slide9_FacilityDisposalPipeline");
                      cleanTheLayer("wwtp-label");
                    }
                  });
                } else if (key === "slide10") {
                  $("#layer_Slide10_PieChartCheckBox").prop("checked", false);

                  // $('#layer_Slide10_PieChartCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  //
                  // piechartadded()
                  //
                  // cleanTheLayer("legend_Slide10_Pie");
                  // Legend_Slide10_Pie.addTo(map);

                  $("#layer_Slide10_PieChartCheckBox").on("click", function() {
                    if (this.checked) {
                      piechartadded();

                      cleanTheLayer("legend_Slide10_Pie");
                      Legend_Slide10_Pie.addTo(map);
                    } else {
                      cleanTheLayer("leaflet-piechart-icon");
                      cleanTheLayer("legend_Slide10_Pie");
                    }
                  });
                } else if (key === "slide11") {
                  $("#layer_Slides1112_TPFAS6CheckBox").prop("checked", false);
                  $("#layer_Slides1112_TPFAS18CheckBox").prop("checked", false);

                  // $('#layer_Slides1112_TPFAS6CheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slides1112_TPFAS6 = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slides1112_TPFAS6.geojson", layer_Slides1112_TPFAS6_Info());
                  // layer_Slides1112_TPFAS6.addTo(map);
                  //
                  // cleanTheLayer("legend_Slides11_TPFAS6");
                  // Legend_Slides11_TPFAS6.addTo(map);

                  $("#layer_Slides1112_TPFAS6CheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slides1112_TPFAS6 = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slides1112_TPFAS6.geojson",
                        layer_Slides1112_TPFAS6_Info()
                      );

                      layer_Slides1112_TPFAS6.addTo(map);

                      cleanTheLayer("legend_Slides11_TPFAS6");
                      Legend_Slides11_TPFAS6.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slides1112_TPFAS6");
                      cleanTheLayer("legend_Slides11_TPFAS6");
                    }
                  });

                  $("#layer_Slides1112_TPFAS18CheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var layer_Slides1112_TPFAS18 = new L.GeoJSON.AJAX(
                          pathPrefix + "static/data/Slides1112_TPFAS18.geojson",
                          layer_Slides1112_TPFAS18_Info()
                        );

                        layer_Slides1112_TPFAS18.addTo(map);

                        cleanTheLayer("legend_Slides11_TPFAS18");
                        Legend_Slides11_TPFAS18.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slides1112_TPFAS18");
                        cleanTheLayer("legend_Slides11_TPFAS18");
                      }
                    }
                  );
                }

                //                                     else if (key === 'slide12') {
                //
                //                                         $('#exampleModalLong').modal('show');
                //
                //                                         $('#slide12_button').on('click', function() {
                //                                             $('#exampleModalLong').modal('show');
                //                                         });
                //
                // //
                //
                //                                     }
                else if (key === "slide13") {
                  $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                  $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                  $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                  $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                  $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                  $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                  $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                  $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                  $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                  $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                  $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                  $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                  $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                  $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                  // $('#layer_Slide13_PFBACheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide13_PFBA = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide13_PFBA.geojson", layer_Slide13_PFBA_Info());
                  // layer_Slide13_PFBA.addTo(map);
                  //
                  // cleanTheLayer("legend_Slide13_PFAS");
                  // Legend_Slide13_PFBA.addTo(map);
                  // Legend_Slide13_PFBA_theme.addTo(map);

                  $("#layer_Slide13_PFBACheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFBA = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFBA.geojson",
                        layer_Slide13_PFBA_Info()
                      );

                      layer_Slide13_PFBA.addTo(map);

                      var slide13_PFBA_circleR_fortcarson = L.circle(
                        [38.677, -104.761],
                        {
                          opacity: 1,
                          color: "red",
                          fillColor: "#f03",
                          fillOpacity: 0,
                          radius: 2000.0,
                          className: "layer_Slide13_PFBA_circleR_fortcarson"
                        }
                      );
                      slide13_PFBA_circleR_fortcarson.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFBA.addTo(map);
                      Legend_Slide13_PFBA_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFBA");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFBA_circleR_fortcarson");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFPeACheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFPeA = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFPeA.geojson",
                        layer_Slide13_PFPeA_Info()
                      );

                      layer_Slide13_PFPeA.addTo(map);

                      var slide13_PFPeA_circleR = L.circle([38.784, -104.787], {
                        opacity: 1,
                        color: "red",
                        fillColor: "#f03",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFPeA_circleR"
                      });
                      slide13_PFPeA_circleR.addTo(map);

                      var slide13_PFPeA_circleR_fortcarson = L.circle(
                        [38.677, -104.761],
                        {
                          opacity: 1,
                          color: "red",
                          fillColor: "#f03",
                          fillOpacity: 0,
                          radius: 2000.0,
                          className: "layer_Slide13_PFPeA_circleR_fortcarson"
                        }
                      );
                      slide13_PFPeA_circleR_fortcarson.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFPeA.addTo(map);
                      Legend_Slide13_PFPeA_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFPeA");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFPeA_circleR");
                      cleanTheLayer("layer_Slide13_PFPeA_circleR_fortcarson");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFHxACheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFHxA = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFHxA.geojson",
                        layer_Slide13_PFHxA_Info()
                      );

                      layer_Slide13_PFHxA.addTo(map);

                      var slide13_PFHxA_circleR = L.circle([38.784, -104.787], {
                        opacity: 1,
                        color: "red",
                        fillColor: "#f03",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFHxA_circleR"
                      });
                      slide13_PFHxA_circleR.addTo(map);

                      var slide13_PFHxA_circleR_fortcarson = L.circle(
                        [38.677, -104.761],
                        {
                          opacity: 1,
                          color: "red",
                          fillColor: "#f03",
                          fillOpacity: 0,
                          radius: 2000.0,
                          className: "layer_Slide13_PFHxA_circleR_fortcarson"
                        }
                      );
                      slide13_PFHxA_circleR_fortcarson.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFHxA.addTo(map);
                      Legend_Slide13_PFHxA_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFHxA");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFHxA_circleR");
                      cleanTheLayer("layer_Slide13_PFHxA_circleR_fortcarson");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFHpACheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFHpA = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFHpA.geojson",
                        layer_Slide13_PFHpA_Info()
                      );

                      layer_Slide13_PFHpA.addTo(map);

                      var slide13_PFHpA_circleR = L.circle([38.677, -104.761], {
                        opacity: 1,
                        color: "red",
                        fillColor: "#f03",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFHpA_circleR"
                      });
                      slide13_PFHpA_circleR.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFHpA.addTo(map);
                      Legend_Slide13_PFHpA_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFHpA");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFHpA_circleR");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFOACheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFOA = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFOA.geojson",
                        layer_Slide13_PFOA_Info()
                      );

                      layer_Slide13_PFOA.addTo(map);

                      var slide13_PFOA_circleR = L.circle([38.677, -104.761], {
                        opacity: 1,
                        color: "red",
                        fillColor: "#f03",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFOA_circleR"
                      });
                      slide13_PFOA_circleR.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFOA.addTo(map);
                      Legend_Slide13_PFOA_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFOA");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFOA_circleR");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFDACheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFDA = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFDA.geojson",
                        layer_Slide13_PFDA_Info()
                      );

                      layer_Slide13_PFDA.addTo(map);

                      var slide13_PFDA_circleR = L.circle([38.677, -104.761], {
                        opacity: 1,
                        color: "red",
                        fillColor: "#f03",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFDA_circleR"
                      });
                      slide13_PFDA_circleR.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFDA.addTo(map);
                      Legend_Slide13_PFDA_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFDA");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFDA_circleR");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFNACheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFNA = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFNA.geojson",
                        layer_Slide13_PFNA_Info()
                      );

                      layer_Slide13_PFNA.addTo(map);

                      var slide13_PFNA_circleR = L.circle([38.677, -104.761], {
                        opacity: 1,
                        color: "red",
                        fillColor: "#f03",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFNA_circleR"
                      });
                      slide13_PFNA_circleR.addTo(map);

                      var slide13_PFNA_circleG = L.circle([38.728, -104.725], {
                        opacity: 1,
                        color: "#19d602",
                        fillColor: "#19aa02",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFNA_circleG"
                      });
                      slide13_PFNA_circleG.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFNA.addTo(map);
                      Legend_Slide13_PFNA_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFNA");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFNA_circleR");
                      cleanTheLayer("layer_Slide13_PFNA_circleG");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFUnDACheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFUnDA = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFUnDA.geojson",
                        layer_Slide13_PFUnDA_Info()
                      );

                      layer_Slide13_PFUnDA.addTo(map);

                      var slide13_PFUnDA_circleR = L.circle(
                        [38.677, -104.761],
                        {
                          opacity: 1,
                          color: "red",
                          fillColor: "#f03",
                          fillOpacity: 0,
                          radius: 2000.0,
                          className: "layer_Slide13_PFUnDA_circleR"
                        }
                      );
                      slide13_PFUnDA_circleR.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFUnDA.addTo(map);
                      Legend_Slide13_PFUnDA_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFUnDA");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFUnDA_circleR");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFBSCheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFBS = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFBS.geojson",
                        layer_Slide13_PFBS_Info()
                      );

                      layer_Slide13_PFBS.addTo(map);

                      var slide13_PFBS_circleR = L.circle([38.677, -104.761], {
                        opacity: 1,
                        color: "red",
                        fillColor: "#f03",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFBS_circleR"
                      });
                      slide13_PFBS_circleR.addTo(map);

                      var slide13_PFBS_circleG = L.circle([38.799, -104.794], {
                        opacity: 1,
                        color: "#19d602",
                        fillColor: "#19aa02",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFBS_circleG"
                      });
                      slide13_PFBS_circleG.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFBS.addTo(map);
                      Legend_Slide13_PFBS_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFBS");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFBS_circleR");
                      cleanTheLayer("layer_Slide13_PFBS_circleG");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFHxSCheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFHxS = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFHxS.geojson",
                        layer_Slide13_PFHxS_Info()
                      );

                      layer_Slide13_PFHxS.addTo(map);

                      var slide13_PFHxS_circleR = L.circle([38.677, -104.761], {
                        opacity: 1,
                        color: "red",
                        fillColor: "#f03",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFHxS_circleR"
                      });
                      slide13_PFHxS_circleR.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFHxS.addTo(map);
                      Legend_Slide13_PFHxS_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFHxS");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFHxS_circleR");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFOSCheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFOS = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFOS.geojson",
                        layer_Slide13_PFOS_Info()
                      );

                      layer_Slide13_PFOS.addTo(map);

                      var slide13_PFOS_circleR = L.circle([38.677, -104.761], {
                        opacity: 1,
                        color: "red",
                        fillColor: "#f03",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_PFOS_circleR"
                      });
                      slide13_PFOS_circleR.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFOS.addTo(map);
                      Legend_Slide13_PFOS_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFOS");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_PFOS_circleR");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_PFOSACheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_PFOSA = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_PFOSA.geojson",
                        layer_Slide13_PFOSA_Info()
                      );

                      layer_Slide13_PFOSA.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_PFOSA.addTo(map);
                      Legend_Slide13_PFOSA_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_PFOSA");
                      cleanTheLayer("legend_Slide13_PFAS");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_62FTSCheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_82FTSCheckBox").prop("checked", false);

                      var layer_Slide13_62FTS = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_62FTS.geojson",
                        layer_Slide13_62FTS_Info()
                      );

                      layer_Slide13_62FTS.addTo(map);

                      var slide13_62FTS_circleR1 = L.circle(
                        [38.749, -104.743],
                        {
                          opacity: 1,
                          color: "red",
                          fillColor: "#f03",
                          fillOpacity: 0,
                          radius: 2000.0,
                          className: "layer_Slide13_62FTS_circleR1"
                        }
                      );
                      slide13_62FTS_circleR1.addTo(map);

                      var slide13_62FTS_circleR2 = L.circle(
                        [38.693, -104.698],
                        {
                          opacity: 1,
                          color: "red",
                          fillColor: "#f03",
                          fillOpacity: 0,
                          radius: 2000.0,
                          className: "layer_Slide13_62FTS_circleR2"
                        }
                      );
                      slide13_62FTS_circleR2.addTo(map);

                      var slide13_62FTS_circleR_fortcarson = L.circle(
                        [38.677, -104.761],
                        {
                          opacity: 1,
                          color: "red",
                          fillColor: "#f03",
                          fillOpacity: 0,
                          radius: 2000.0,
                          className: "layer_Slide13_62FTS_circleR_fortcarson"
                        }
                      );
                      slide13_62FTS_circleR_fortcarson.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_62FTS.addTo(map);
                      Legend_Slide13_62FTS_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_62FTS");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_62FTS_circleR1");
                      cleanTheLayer("layer_Slide13_62FTS_circleR2");
                      cleanTheLayer("layer_Slide13_62FTS_circleR_fortcarson");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });

                  $("#layer_Slide13_82FTSCheckBox").on("click", function() {
                    if (this.checked) {
                      cleanAllLayer();
                      $("#layer_Slide13_PFBACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFPeACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHpACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFNACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFUnDACheckBox").prop("checked", false);
                      $("#layer_Slide13_PFBSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFHxSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSCheckBox").prop("checked", false);
                      $("#layer_Slide13_PFOSACheckBox").prop("checked", false);
                      $("#layer_Slide13_62FTSCheckBox").prop("checked", false);

                      var layer_Slide13_82FTS = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide13_82FTS.geojson",
                        layer_Slide13_82FTS_Info()
                      );

                      layer_Slide13_82FTS.addTo(map);

                      var slide13_82FTS_circleR = L.circle([38.677, -104.761], {
                        opacity: 1,
                        color: "red",
                        fillColor: "#f03",
                        fillOpacity: 0,
                        radius: 2000.0,
                        className: "layer_Slide13_82FTS_circleR"
                      });
                      slide13_82FTS_circleR.addTo(map);

                      // cleanTheLayer("legend_Slide13_PFAS");
                      Legend_Slide13_82FTS.addTo(map);
                      Legend_Slide13_82FTS_theme.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide13_82FTS");
                      cleanTheLayer("legend_Slide13_PFAS");
                      cleanTheLayer("layer_Slide13_82FTS_circleR");
                      // Legend_Slide13_PFAS.addTo(map);
                    }
                  });
                } else if (key === "slide14") {
                  $("#layer_Slide14_EPAPFCSumCheckBox").prop("checked", false);
                  $("#layer_Slide14_PRPCheckBox").prop("checked", false);

                  // $('#layer_Slide14_EPAPFCSumCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide14_EPAPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide14_EPAPFCSum.geojson", layer_Slide14_EPAPFCSum_Info());
                  // layer_Slide14_EPAPFCSum.addTo(map);
                  //
                  // cleanTheLayer("legend_Slide14_EPAPFCSum");
                  // Legend_Slide14_EPAPFCSum.addTo(map);
                  //
                  // function style_textlabel_Slide14() {
                  //
                  //     return {
                  //         opacity: 0,
                  //         rotationOrigin: 'center center',
                  //         icon: L.icon({
                  //             iconUrl: pathPrefix + 'static/img/img_circle_1.png',
                  //             iconSize: [1, 1],
                  //             className: "layer_textlabel", //别忘了加进cleanalllayer要删除的数组
                  //         }),
                  //     }
                  // }
                  //
                  // var marker1 = new L.marker([38.784, -104.787], style_textlabel_Slide14()); //opacity may be set to zero
                  // var marker2 = new L.marker([38.73, -104.726], style_textlabel_Slide14()); //opacity may be set to zero
                  // var marker3 = new L.marker([38.692, -104.697], style_textlabel_Slide14()); //opacity may be set to zero
                  // var marker4 = new L.marker([38.675, -104.76], style_textlabel_Slide14()); //opacity may be set to zero
                  //
                  //
                  // marker1.bindTooltip("3415Janitell", {
                  //     permanent: true,
                  //     className: "map-text-label slide14_Outliers_Label",
                  //     offset: [10, 0]
                  // });
                  // marker2.bindTooltip("PFCGWWell_70", {
                  //     permanent: true,
                  //     className: "map-text-label slide14_Outliers_Label",
                  //     offset: [10, 0]
                  // });
                  // marker3.bindTooltip("808PondTerrace", {
                  //     permanent: true,
                  //     className: "map-text-label slide14_Outliers_Label",
                  //     offset: [10, 0]
                  // });
                  // marker4.bindTooltip("BECSMW13", {
                  //     permanent: true,
                  //     className: "map-text-label slide14_Outliers_Label",
                  //     offset: [10, 0]
                  // });
                  //
                  //
                  // marker1.addTo(map);
                  // marker2.addTo(map);
                  // marker3.addTo(map);
                  // marker4.addTo(map);

                  $("#layer_Slide14_EPAPFCSumCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide14_EPAPFCSum = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide14_EPAPFCSum.geojson",
                        layer_Slide14_EPAPFCSum_Info()
                      );

                      layer_Slide14_EPAPFCSum.addTo(map);

                      cleanTheLayer("legend_Slide14_EPAPFCSum");
                      // Legend_Slide14_EPAPFCSum.addTo(map);

                      function style_textlabel_Slide14() {
                        return {
                          opacity: 0,
                          rotationOrigin: "center center",
                          icon: L.icon({
                            iconUrl: pathPrefix + "static/img/img_circle_1.png",
                            iconSize: [1, 1],
                            className: "layer_textlabel" //别忘了加进cleanalllayer要删除的数组
                          })
                        };
                      }

                      var marker1 = new L.marker(
                        [38.784, -104.787],
                        style_textlabel_Slide14()
                      ); //opacity may be set to zero
                      var marker2 = new L.marker(
                        [38.73, -104.726],
                        style_textlabel_Slide14()
                      ); //opacity may be set to zero
                      var marker3 = new L.marker(
                        [38.692, -104.697],
                        style_textlabel_Slide14()
                      ); //opacity may be set to zero
                      var marker4 = new L.marker(
                        [38.675, -104.76],
                        style_textlabel_Slide14()
                      ); //opacity may be set to zero

                      marker1.bindTooltip("3415Janitell", {
                        permanent: true,
                        className: "map-text-label slide14_Outliers_Label",
                        offset: [10, 0]
                      });
                      marker2.bindTooltip("PFCGWWell_70", {
                        permanent: true,
                        className: "map-text-label slide14_Outliers_Label",
                        offset: [10, 0]
                      });
                      marker3.bindTooltip("808PondTerrace", {
                        permanent: true,
                        className: "map-text-label slide14_Outliers_Label",
                        offset: [10, 0]
                      });
                      marker4.bindTooltip("BECSMW13", {
                        permanent: true,
                        className: "map-text-label slide14_Outliers_Label",
                        offset: [10, 0]
                      });

                      // marker1.addTo(map);
                      // marker2.addTo(map);
                      // marker3.addTo(map);
                      // marker4.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide14_EPAPFCSum");
                      cleanTheLayer("legend_Slide14_EPAPFCSum");
                      cleanTheLayer("slide14_Outliers_Label");
                    }
                  });

                  $("#layer_Slide14_PRPCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide3_PRP = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide3_PRP.geojson",
                        layer_Slide3_PRP_Info()
                      );

                      layer_Slide3_PRP.addTo(map);

                      cleanTheLayer("legend_Slide3_PRP");
                      Legend_Slide3_PRP.addTo(map);
                      // console.log("checked")
                      // $(".layer_shu").css("opacity", 1);
                      // $(".layer_shu").css("z-index", '');
                    } else {
                      // console.log("他关上啦！！");
                      cleanTheLayer("layer_Slide3_PRP");
                      cleanTheLayer("legend_Slide3_PRP");

                      // console.log("unchecked")
                      // $(".layer_shu").css("opacity", 0);
                      // $(".layer_shu").css("z-index", -1);
                    }
                  });
                } else if (key === "slide15") {
                  $("#layer_Slide15_PublicWaterSystemPFCSumCheckBox").prop(
                    "checked",
                    false
                  );
                  $("#layer_Slide15_WatershedsCheckBox").prop("checked", false);
                  $("#layer_Slide15_WaterTreatmentSystemsCheckBox").prop(
                    "checked",
                    false
                  );

                  // $('#layer_Slide15_PublicWaterSystemPFCSumCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide15_PublicWaterSystemPFCSum = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide15_PublicWaterSystemPFCSum.geojson", layer_Slide15_PublicWaterSystemPFCSum_Info());
                  // layer_Slide15_PublicWaterSystemPFCSum.addTo(map);
                  //
                  // cleanTheLayer("legend_Slide15_PublicWaterSystemPFCSum");
                  // Legend_Slide15_PublicWaterSystemPFCSum.addTo(map);

                  $("#layer_Slide15_PublicWaterSystemPFCSumCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var layer_Slide15_PublicWaterSystemPFCSum = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide15_PublicWaterSystemPFCSum.geojson",
                          layer_Slide15_PublicWaterSystemPFCSum_Info()
                        );

                        layer_Slide15_PublicWaterSystemPFCSum.addTo(map);

                        cleanTheLayer("legend_Slide15_PublicWaterSystemPFCSum");
                        Legend_Slide15_PublicWaterSystemPFCSum.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide15_PublicWaterSystemPFCSum");
                        cleanTheLayer("legend_Slide15_PublicWaterSystemPFCSum");
                      }
                    }
                  );

                  $("#layer_Slide15_WatershedsCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var Layer_Slide15_Watersheds = new L.GeoJSON.AJAX(
                          pathPrefix + "static/data/Slide4_Watersheds.geojson",
                          layer_Slide15_Watersheds_Info()
                        );
                        Layer_Slide15_Watersheds.addTo(map);

                        cleanTheLayer("legend_Slide15_Watersheds");
                        Legend_Slide15_Watersheds.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide15_Watersheds");
                        cleanTheLayer("legend_Slide15_Watersheds");
                      }
                    }
                  );

                  $("#layer_Slide15_WaterTreatmentSystemsCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var layer_Slide15_WaterTreatmentSystems = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide15_WaterTreatmentSystems.geojson",
                          layer_Slide15_WaterTreatmentSystems_Info()
                        );

                        layer_Slide15_WaterTreatmentSystems.addTo(map);

                        function style_textlabel_wTS() {
                          return {
                            opacity: 0,
                            rotationOrigin: "center center",
                            icon: L.icon({
                              iconUrl:
                                pathPrefix + "static/img/img_circle_1.png",
                              iconSize: [1, 1],
                              className: "layer_textlabel" //别忘了加进cleanalllayer要删除的数组
                            })
                          };
                        }

                        var wTSmarker1 = new L.marker(
                          [38.811991656918295, -104.694088971528686],
                          style_textlabel_wTS()
                        );
                        var wTSmarker2 = new L.marker(
                          [38.771792999817983, -104.742939999967348],
                          style_textlabel_wTS()
                        );
                        var wTSmarker3 = new L.marker(
                          [38.74777299998096, -104.741953999880934],
                          style_textlabel_wTS()
                        );
                        var wTSmarker4 = new L.marker(
                          [38.730548000152339, -104.723510000127135],
                          style_textlabel_wTS()
                        );
                        var wTSmarker5 = new L.marker(
                          [38.686558000175864, -104.703645000059623],
                          style_textlabel_wTS()
                        );

                        wTSmarker1.bindTooltip("Pond 3 GAC/IX System Treatability Study", {
                          permanent: true,
                          className: "map-text-label wTS-label",
                          offset: [30, -10]
                        });
                        wTSmarker2.bindTooltip("Security System", {
                          permanent: true,
                          className: "map-text-label wTS-label",
                          offset: [5, -10]
                        });
                        wTSmarker3.bindTooltip("Security MHP", {
                          permanent: true,
                          className: "map-text-label wTS-label",
                          offset: [5, -10]
                        });
                        wTSmarker4.bindTooltip("Widefield System", {
                          permanent: true,
                          className: "map-text-label wTS-label",
                          offset: [30, -10]
                        });
                        wTSmarker5.bindTooltip("Fountain System", {
                          permanent: true,
                          className: "map-text-label wTS-label",
                          offset: [30, -10]
                        });

                        wTSmarker1.addTo(map);
                        wTSmarker2.addTo(map);
                        wTSmarker3.addTo(map);
                        wTSmarker4.addTo(map);
                        wTSmarker5.addTo(map);

                        // cleanTheLayer("legend_Slide3_PRP");
                        // Legend_Slide3_PRP.addTo(map);
                        // console.log("checked")
                        // $(".layer_shu").css("opacity", 1);
                        // $(".layer_shu").css("z-index", '');
                      } else {
                        // console.log("他关上啦！！");
                        cleanTheLayer("layer_Slide15_WaterTreatmentSystems");
                        cleanTheLayer("wTS-label");
                        // cleanTheLayer("legend_Slide3_PRP");

                        // console.log("unchecked")
                        // $(".layer_shu").css("opacity", 0);
                        // $(".layer_shu").css("z-index", -1);
                      }
                    }
                  );
                } else if (key === "slide16") {
                  $("#layer_Slide16_PRPCheckBox").prop("checked", false);
                  $("#layer_Slide16_WWTPlantCheckBox").prop("checked", false);
                  $("#layer_Slide16_GWPFCSumCheckBox").prop("checked", false);
                  $("#layer_Slide16_Pumping16OctCheckBox").prop(
                    "checked",
                    false
                  );
                  $("#layer_Slide16_EPAPFCSumCheckBox").prop("checked", false);
                  $("#layer_Slide16_SaturatedAlluviumCheckBox").prop(
                    "checked",
                    false
                  );

                  // $('#layer_Slide16_PRPCheckBox').prop('checked', true); // 进入这一页时让checkbox保持已选状态
                  // var layer_Slide3_PRP = new L.GeoJSON.AJAX(pathPrefix + "static/data/Slide3_PRP.geojson", layer_Slide3_PRP_Info());
                  //
                  // layer_Slide3_PRP.addTo(map);
                  //
                  // cleanTheLayer("legend_Slide3_PRP");
                  // Legend_Slide3_PRP.addTo(map);

                  $("#layer_Slide16_PRPCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide3_PRP = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide3_PRP.geojson",
                        layer_Slide3_PRP_Info()
                      );

                      layer_Slide3_PRP.addTo(map);

                      cleanTheLayer("legend_Slide3_PRP");
                      Legend_Slide3_PRP.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide3_PRP");
                      cleanTheLayer("legend_Slide3_PRP");
                    }
                  });

                  $("#layer_Slide16_WWTPlantCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide9_WWTPlant = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide9_WWTPlant.geojson",
                        layer_Slide9_WWTPlant_Info()
                      );
                      layer_Slide9_WWTPlant.addTo(map);

                      var Layer_Slide9_FacilityDisposalPipeline = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide9_FacilityDisposalPipeline.geojson",
                        layer_Slide9_FacilityDisposalPipeline_Info()
                      );

                      Layer_Slide9_FacilityDisposalPipeline.addTo(map);

                      function style_textlabel_WWTPlants() {
                        return {
                          opacity: 0,
                          rotationOrigin: "center center",
                          icon: L.icon({
                            iconUrl: pathPrefix + "static/img/img_circle_1.png",
                            iconSize: [1, 1],
                            className:
                              "layer_textlabel label_slide7_aecom_Contours" //别忘了加进cleanalllayer要删除的数组
                          })
                        };
                      }

                      var wWTPmarker1 = new L.marker(
                        [38.8132952554, -104.808302385],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker2 = new L.marker(
                        [38.7216624138, -104.722905346],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker3 = new L.marker(
                        [38.7373397292, -104.738398363],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker4 = new L.marker(
                        [38.6615211374, -104.698952921],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker5 = new L.marker(
                        [38.8376671252, -104.708645773],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker6 = new L.marker(
                        [38.630101301, -104.702327719],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker7 = new L.marker(
                        [38.8949113438, -104.824546999],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker8 = new L.marker(
                        [39.0441615501, -104.852743961],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker9 = new L.marker(
                        [39.0513293639, -104.794973568],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker10 = new L.marker(
                        [39.0719250289, -104.873411118],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker11 = new L.marker(
                        [38.9843334837, -104.829760208],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker12 = new L.marker(
                        [38.9241860288, -104.605552661],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker13 = new L.marker(
                        [38.7365718218, -104.398925597],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker14 = new L.marker(
                        [38.7144477143, -104.820937904],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker15 = new L.marker(
                        [38.7244706286, -104.746330715],
                        style_textlabel_WWTPlants()
                      );
                      var wWTPmarker16 = new L.marker(
                        [38.6196257676, -104.664299156],
                        style_textlabel_WWTPlants()
                      );

                      wWTPmarker1.bindTooltip("Las Vegas St WWTF", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker2.bindTooltip("Widefield WSD", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker3.bindTooltip("Security SD", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker4.bindTooltip(
                        "Fountain Sanitation District WWTF",
                        {
                          permanent: true,
                          className: "map-text-label wwtp-label",
                          offset: [0, 0]
                        }
                      );
                      wWTPmarker5.bindTooltip(
                        "Cherokee Metropolitan District",
                        {
                          permanent: true,
                          className: "map-text-label wwtp-label",
                          offset: [0, 0]
                        }
                      );
                      wWTPmarker6.bindTooltip("Clear Spring Regional WTF", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker7.bindTooltip("CSU JD Phillips Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker8.bindTooltip("Upper Monument WWTF Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker9.bindTooltip("Academy Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker10.bindTooltip("Tri-Lakes Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker11.bindTooltip("USAFA Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker12.bindTooltip("Paintbrush Hills Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker13.bindTooltip(
                        "Cherokee Metropolitan Dist. GW Recharge Facility",
                        {
                          permanent: true,
                          className: "map-text-label wwtp-label",
                          offset: [0, 0]
                        }
                      );
                      wWTPmarker14.bindTooltip(
                        "Cheyenne Mtn. Estates Discharge",
                        {
                          permanent: true,
                          className: "map-text-label wwtp-label",
                          offset: [0, 0]
                        }
                      );
                      wWTPmarker15.bindTooltip("Fort Carson Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });
                      wWTPmarker16.bindTooltip("LFMSDD Discharge", {
                        permanent: true,
                        className: "map-text-label wwtp-label",
                        offset: [0, 0]
                      });

                      wWTPmarker1.addTo(map);
                      wWTPmarker2.addTo(map);
                      wWTPmarker3.addTo(map);
                      wWTPmarker4.addTo(map);
                      wWTPmarker5.addTo(map);
                      wWTPmarker6.addTo(map);
                      wWTPmarker7.addTo(map);
                      wWTPmarker8.addTo(map);
                      wWTPmarker9.addTo(map);
                      wWTPmarker10.addTo(map);
                      wWTPmarker11.addTo(map);
                      wWTPmarker12.addTo(map);
                      wWTPmarker13.addTo(map);
                      wWTPmarker14.addTo(map);
                      wWTPmarker15.addTo(map);
                      wWTPmarker16.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide9_WWTPlant");
                      cleanTheLayer("layer_Slide9_FacilityDisposalPipeline");
                      cleanTheLayer("wwtp-label");
                    }
                  });

                  $("#layer_Slide16_GWPFCSumCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide5_GWPFCSum = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide5_GWPFCSum.geojson",
                        layer_Slide5_GWPFCSum_Info()
                      );

                      layer_Slide5_GWPFCSum.addTo(map);

                      cleanTheLayer("legend_Slide5_GWPFCSum");
                      Legend_Slide5_GWPFCSum.addTo(map);
                    } else {
                      cleanTheLayer("theChart");
                      cleanTheLayer("layer_Slide5_GWPFCSum");
                      cleanTheLayer("legend_Slide5_GWPFCSum");
                    }
                  });

                  $("#layer_Slide16_Pumping16OctCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var layer_Slide4_Pumping16Oct = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide4_Pumping16Oct.geojson",
                          layer_Slide4_Pumping16Oct_Info()
                        );

                        layer_Slide4_Pumping16Oct.addTo(map);

                        cleanTheLayer("legend_Slide4_Pumping16Oct");
                        Legend_Slide4_Pumping16Oct.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide4_Pumping16Oct");
                        cleanTheLayer("legend_Slide4_Pumping16Oct");
                        cleanTheLayer("theChart");
                      }
                    }
                  );

                  $("#layer_Slide16_EPAPFCSumCheckBox").on("click", function() {
                    if (this.checked) {
                      var layer_Slide14_EPAPFCSum = new L.GeoJSON.AJAX(
                        pathPrefix + "static/data/Slide14_EPAPFCSum.geojson",
                        layer_Slide14_EPAPFCSum_Info()
                      );

                      layer_Slide14_EPAPFCSum.addTo(map);

                      cleanTheLayer("legend_Slide14_EPAPFCSum");
                      // Legend_Slide14_EPAPFCSum.addTo(map);

                      function style_textlabel_Slide14() {
                        return {
                          opacity: 0,
                          rotationOrigin: "center center",
                          icon: L.icon({
                            iconUrl: pathPrefix + "static/img/img_circle_1.png",
                            iconSize: [1, 1],
                            className: "layer_textlabel" //别忘了加进cleanalllayer要删除的数组
                          })
                        };
                      }

                      var marker1 = new L.marker(
                        [38.784, -104.787],
                        style_textlabel_Slide14()
                      ); //opacity may be set to zero
                      var marker2 = new L.marker(
                        [38.73, -104.726],
                        style_textlabel_Slide14()
                      ); //opacity may be set to zero
                      var marker3 = new L.marker(
                        [38.692, -104.697],
                        style_textlabel_Slide14()
                      ); //opacity may be set to zero
                      var marker4 = new L.marker(
                        [38.675, -104.76],
                        style_textlabel_Slide14()
                      ); //opacity may be set to zero

                      marker1.bindTooltip("3415Janitell", {
                        permanent: true,
                        className: "map-text-label slide14_Outliers_Label",
                        offset: [10, 0]
                      });
                      marker2.bindTooltip("PFCGWWell_70", {
                        permanent: true,
                        className: "map-text-label slide14_Outliers_Label",
                        offset: [10, 0]
                      });
                      marker3.bindTooltip("808PondTerrace", {
                        permanent: true,
                        className: "map-text-label slide14_Outliers_Label",
                        offset: [10, 0]
                      });
                      marker4.bindTooltip("BECSMW13", {
                        permanent: true,
                        className: "map-text-label slide14_Outliers_Label",
                        offset: [10, 0]
                      });

                      // marker1.addTo(map);
                      // marker2.addTo(map);
                      // marker3.addTo(map);
                      // marker4.addTo(map);
                    } else {
                      cleanTheLayer("layer_Slide14_EPAPFCSum");
                      cleanTheLayer("legend_Slide14_EPAPFCSum");
                      cleanTheLayer("slide14_Outliers_Label");
                    }
                  });

                  $("#layer_Slide16_SaturatedAlluviumCheckBox").on(
                    "click",
                    function() {
                      if (this.checked) {
                        var Layer_Slide7_SaturatedAlluvium = new L.GeoJSON.AJAX(
                          pathPrefix +
                            "static/data/Slide7_SaturatedAlluvium.geojson",
                          layer_Slide7_SaturatedAlluvium_Info()
                        );
                        Layer_Slide7_SaturatedAlluvium.addTo(map);
                      } else {
                        cleanTheLayer("layer_Slide7_SaturatedAlluvium");
                      }
                    }
                  );

                  // function addStyleString(str) {
                  //     var node = document.createElement('style');
                  //     node.innerHTML = str;
                  //     document.body.appendChild(node);
                  // }
                  //
                  // addStyleString('.leaflet-image-layer {display: none;}');
                  // // ************** 注射 css - end ********
                  //
                  // layer_imageSlide16.addTo(map);
                  // // $(layer_imageSlide02._image).className += ' ezber';
                  // $(layer_imageSlide16._image).fadeIn(6000);
                  //
                  //
                  // $('#layer_imageSlide16CheckBox').on("click", function () {
                  //     if (this.checked) {
                  //         // console.log("他打开啦！！");
                  //         cleanAllLayer();
                  //
                  //
                  //         addStyleString('.leaflet-image-layer {display: inline;}');
                  //
                  //
                  //
                  //         L.imageOverlay(imageSlide16, imageSlide16_Bounds).addTo(map);
                  //
                  //     } else {
                  //         console.log("他关上啦！！");
                  //         cleanAllLayer();
                  //
                  //     }
                  // })
                }

                // else if (key === 'slideXXXXXX'){
                //
                //
                // }

                var marker = markers[key];
                // fg.addLayer(L.marker([marker.lat, marker.lon]));

                map.setView([marker.lat, marker.lon], marker.zoom, 1);
              }
            }

            paragraphs.on("viewing", function() {
              showMapView($(this).data("place"));
            });
          };

          makeStoryMap(this, settings.markers);
          // console.log(this);

          return this;
        };
      })(jQuery);

      (function() {
        "use strict";

        var markers = {
          slide01: {
            lat: 38.723,
            lon: -104.718,
            zoom: 11
          },
          slide02: {
            lat: 38.8033,
            lon: -104.754,
            zoom: 12
          },
          slide03: {
            lat: 38.826,
            lon: -104.869,
            zoom: 11
          },
          slide04: {
            lat: 38.808,
            lon: -104.744,
            zoom: 12
          },
          slide05: {
            lat: 38.824,
            lon: -104.702,
            zoom: 11
          },
          slide06: {
            lat: 38.788,
            lon: -104.714,
            zoom: 12
          },
          slide07: {
            lat: 38.788,
            lon: -104.714,
            zoom: 12
          },
          slide08: {
            lat: 38.788,
            lon: -104.714,
            zoom: 12
          },
          slide09: {
            lat: 38.788,
            lon: -104.714,
            zoom: 12
          },
          slide10: {
            lat: 38.788,
            lon: -104.714,
            zoom: 12
          },
          slide11: {
            lat: 38.788,
            lon: -104.714,
            zoom: 12
          },
          slide12: {
            lat: 38.788,
            lon: -104.714,
            zoom: 12
          },
          slide13: {
            lat: 38.721,
            lon: -104.703,
            zoom: 12
          },
          slide14: {
            lat: 38.788,
            lon: -104.714,
            zoom: 12
          },
          slide15: {
            lat: 38.748,
            lon: -104.73,
            zoom: 12
          },
          slide16: {
            lat: 38.777,
            lon: -104.735,
            zoom: 11
          }
        };

        var ezber = $(".main").storymap({
          markers: markers
        });
        // console.log(ezber)
      })();

      $(".leaflet-bottom").ready(function() {
        /*$(".leaflet-control-attribution").find("a").remove();*/
        $(".leaflet-control-attribution")
          .find("a")
          .attr("href", "http://www.newfieldsgovernmentservices.com/")
          .attr("target", "_blank");
        // $(".leaflet-control-attribution").find("a").attr("title", "统爷主页");
        $(".leaflet-control-attribution")
          .find("a")
          .text("NGS");
        /*$(".leaflet-control-attribution").text().substr(2,10);*/

        // $('#shuCheckBox').on("click", function() {
        //     if (this.checked) {
        //         console.log("他打开啦！！");
        //         $(".layer_shu").css("opacity", 1);
        //         $(".layer_shu").css("z-index", '');
        //     } else {
        //         console.log("他关上啦！！");
        //         $(".layer_shu").css("opacity", 0);
        //         $(".layer_shu").css("z-index", -1);
        //     }
        // })

        // var shuCheckBox_id = document.querySelector('input[id="shuCheckBox"]');
      });
    }
  }
};
</script>

<style>
/*.leaflet-image-layer {*/
/*!*display: none;*!*/
/*}*/

/*.leaflet-magnifying-glass {*/
/*border-radius: 50%;*/
/*border: 1px solid gray;*/
/*box-shadow: 0 0 5px gray;*/
/*position: absolute;*/
/*overflow: hidden;*/
/*-moz-box-sizing: border-box;*/
/*box-sizing: border-box;*/
/*}*/

/*.leaflet-magnifying-glass > .leaflet-container {*/
/*height:  100%;*/
/*width: 100%;*/
/*}*/

/*!* Webkit-only workaround for the border-radius clipping bug,*/
/*applied to the map container *!*/
/*.leaflet-magnifying-glass-webkit {*/
/*border-radius: 50%;*/
/*-webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);*/
/*}*/

/*!* http://commons.wikimedia.org/wiki/File:Magnifying_glass_icon.svg *!*/
/*.leaflet-control-magnifying-glass { background-image: url(http://bbecquet.github.io/Leaflet.MagnifyingGlass/examples/magnifying-glass-icon.png); }*/
</style>
