var size = 0;
var placement = 'point';
function categories_InfrastructureLanduse_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Barrenland':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(150,13,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Beach':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(244,170,123,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'Built up\', \'BuiltuP\', \'BuiltUp\', \'Built Up\']':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(251,15,31,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cemetery':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(66,255,243,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Helipad':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,201,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lake':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(6,44,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(0,6,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sea':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,218,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Shree Ran Temple':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,213,3,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Somnath Temple':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,226,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Somnath Trust Parking':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(212,212,212,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Triveni Check Dam':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(119,0,95,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Triveni Sangam':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,64,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Triveni Sangam Ghat':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(10,0,245,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vegetation':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,255,25,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_InfrastructureLanduse_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Name");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_InfrastructureLanduse_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
