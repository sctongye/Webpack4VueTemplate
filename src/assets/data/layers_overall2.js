

export default pop_Overall_FountainCreek(feature, layer) {
        var popupContent = '<table>\
                        <tr>\
                            <td colspan="2"><b>Category: </b>' + feature.properties['Category'] + '</td>\
                        </tr>\
                    </table>';
        layer.bindPopup(popupContent, {maxHeight: 400});
    }






