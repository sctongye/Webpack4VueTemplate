var overallLayers = {

    // pop_Overall_FountainCreek(feature, layer) {
    //     var popupContent = '<table>\
    //                     <tr>\
    //                         <td colspan="2"><b>Category: </b>' + feature.properties['Category'] + '</td>\
    //                     </tr>\
    //                 </table>';
    //     layer.bindPopup(popupContent, {maxHeight: 400});
    // },

    style_Overall_FountainCreek() {
        return {
            pane: 'pane_Overall_FountainCreek',
            opacity: 1,
            color: 'rgba(82, 165, 237,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 2.0,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(203,151,131,0.0)',
        }
    },


    layer_Overall_FountainCreek_Info() {
        return {
            attribution: '<a href=""></a>',
            pane: 'pane_Overall_FountainCreek',
            /*onEachFeature: pop_Overall_PetersonCarsonBound,*/
            style: style_Overall_FountainCreek,
            className: "layer_Overall_FountainCreek",
        }
    },




}

export default overallLayers
