var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_FalseColourComposite_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'False Colour Composite<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FalseColourComposite_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7824205.828635, 2366749.287947, 7849043.490890, 2390783.418565]
        })
    });
var lyr_Elevation_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Elevation<br />\
    <img src="styles/legend/Elevation_4_0.png" /> <= 11<br />\
    <img src="styles/legend/Elevation_4_1.png" /> 11 - 23<br />\
    <img src="styles/legend/Elevation_4_2.png" /> 23 - 34<br />\
    <img src="styles/legend/Elevation_4_3.png" /> 34 - 46<br />\
    <img src="styles/legend/Elevation_4_4.png" /> > 46<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Elevation_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7824306.864921, 2366822.798564, 7848920.841318, 2390719.354598]
        })
    });
var lyr_LanduseClasses_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Landuse Classes<br />\
    <img src="styles/legend/LanduseClasses_5_0.png" /> BuiltUp<br />\
    <img src="styles/legend/LanduseClasses_5_1.png" /> Fallowland<br />\
    <img src="styles/legend/LanduseClasses_5_2.png" /> Agriculture<br />\
    <img src="styles/legend/LanduseClasses_5_3.png" /> Water<br />\
    <img src="styles/legend/LanduseClasses_5_4.png" /> Vegetation<br />\
    <img src="styles/legend/LanduseClasses_5_5.png" /> Barrenland<br />\
    <img src="styles/legend/LanduseClasses_5_6.png" /> Mangrove Patches<br />\
    <img src="styles/legend/LanduseClasses_5_7.png" /> Beach<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LanduseClasses_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [7824205.828635, 2366749.287947, 7849043.490890, 2390783.418565]
        })
    });
var format_InfrastructureLanduse_6 = new ol.format.GeoJSON();
var features_InfrastructureLanduse_6 = format_InfrastructureLanduse_6.readFeatures(json_InfrastructureLanduse_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastructureLanduse_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastructureLanduse_6.addFeatures(features_InfrastructureLanduse_6);
var lyr_InfrastructureLanduse_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastructureLanduse_6, 
                style: style_InfrastructureLanduse_6,
                popuplayertitle: 'Infrastructure Landuse',
                interactive: false,
    title: 'Infrastructure Landuse<br />\
    <img src="styles/legend/InfrastructureLanduse_6_0.png" /> Barrenland<br />\
    <img src="styles/legend/InfrastructureLanduse_6_1.png" /> Beach<br />\
    <img src="styles/legend/InfrastructureLanduse_6_2.png" /> Built Up<br />\
    <img src="styles/legend/InfrastructureLanduse_6_3.png" /> Cemetery<br />\
    <img src="styles/legend/InfrastructureLanduse_6_4.png" /> Helipad<br />\
    <img src="styles/legend/InfrastructureLanduse_6_5.png" /> Lake<br />\
    <img src="styles/legend/InfrastructureLanduse_6_6.png" /> River<br />\
    <img src="styles/legend/InfrastructureLanduse_6_7.png" /> Sea<br />\
    <img src="styles/legend/InfrastructureLanduse_6_8.png" /> Shree Ran Temple<br />\
    <img src="styles/legend/InfrastructureLanduse_6_9.png" /> Somnath Temple<br />\
    <img src="styles/legend/InfrastructureLanduse_6_10.png" /> Somnath Trust Parking<br />\
    <img src="styles/legend/InfrastructureLanduse_6_11.png" /> Triveni Check Dam<br />\
    <img src="styles/legend/InfrastructureLanduse_6_12.png" /> Triveni Sangam<br />\
    <img src="styles/legend/InfrastructureLanduse_6_13.png" /> Triveni Sangam Ghat<br />\
    <img src="styles/legend/InfrastructureLanduse_6_14.png" /> Vegetation<br />' });
var format_VillagesBoundary_7 = new ol.format.GeoJSON();
var features_VillagesBoundary_7 = format_VillagesBoundary_7.readFeatures(json_VillagesBoundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VillagesBoundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillagesBoundary_7.addFeatures(features_VillagesBoundary_7);
var lyr_VillagesBoundary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VillagesBoundary_7, 
                style: style_VillagesBoundary_7,
                popuplayertitle: 'Villages Boundary',
                interactive: true,
                title: '<img src="styles/legend/VillagesBoundary_7.png" /> Villages Boundary'
            });
var format_Waterbody_8 = new ol.format.GeoJSON();
var features_Waterbody_8 = format_Waterbody_8.readFeatures(json_Waterbody_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbody_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbody_8.addFeatures(features_Waterbody_8);
var lyr_Waterbody_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbody_8, 
                style: style_Waterbody_8,
                popuplayertitle: 'Waterbody',
                interactive: false,
                title: '<img src="styles/legend/Waterbody_8.png" /> Waterbody'
            });
var format_RiversandStreams_9 = new ol.format.GeoJSON();
var features_RiversandStreams_9 = format_RiversandStreams_9.readFeatures(json_RiversandStreams_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiversandStreams_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiversandStreams_9.addFeatures(features_RiversandStreams_9);
var lyr_RiversandStreams_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiversandStreams_9, 
                style: style_RiversandStreams_9,
                popuplayertitle: 'Rivers and Streams',
                interactive: true,
                title: '<img src="styles/legend/RiversandStreams_9.png" /> Rivers and Streams'
            });
var format_Canals_10 = new ol.format.GeoJSON();
var features_Canals_10 = format_Canals_10.readFeatures(json_Canals_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Canals_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canals_10.addFeatures(features_Canals_10);
var lyr_Canals_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Canals_10, 
                style: style_Canals_10,
                popuplayertitle: 'Canals',
                interactive: true,
                title: '<img src="styles/legend/Canals_10.png" /> Canals'
            });
var format_Roads500M_11 = new ol.format.GeoJSON();
var features_Roads500M_11 = format_Roads500M_11.readFeatures(json_Roads500M_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads500M_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads500M_11.addFeatures(features_Roads500M_11);
var lyr_Roads500M_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads500M_11, 
                style: style_Roads500M_11,
                popuplayertitle: 'Roads (500 M)',
                interactive: true,
    title: 'Roads (500 M)<br />\
    <img src="styles/legend/Roads500M_11_0.png" /> Pedestrian<br />\
    <img src="styles/legend/Roads500M_11_1.png" /> Primary<br />\
    <img src="styles/legend/Roads500M_11_2.png" /> Residential<br />\
    <img src="styles/legend/Roads500M_11_3.png" /> Tertiary<br />\
    <img src="styles/legend/Roads500M_11_4.png" /> Track<br />\
    <img src="styles/legend/Roads500M_11_5.png" /> Trails<br />\
    <img src="styles/legend/Roads500M_11_6.png" /> Service<br />' });
var format_Railway_12 = new ol.format.GeoJSON();
var features_Railway_12 = format_Railway_12.readFeatures(json_Railway_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railway_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_12.addFeatures(features_Railway_12);
var lyr_Railway_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_12, 
                style: style_Railway_12,
                popuplayertitle: 'Railway',
                interactive: false,
                title: '<img src="styles/legend/Railway_12.png" /> Railway'
            });
var format_Roads_13 = new ol.format.GeoJSON();
var features_Roads_13 = format_Roads_13.readFeatures(json_Roads_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_13.addFeatures(features_Roads_13);
var lyr_Roads_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_13, 
                style: style_Roads_13,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_13.png" /> Roads'
            });
var format_10KmBuffer_14 = new ol.format.GeoJSON();
var features_10KmBuffer_14 = format_10KmBuffer_14.readFeatures(json_10KmBuffer_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_10KmBuffer_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10KmBuffer_14.addFeatures(features_10KmBuffer_14);
var lyr_10KmBuffer_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10KmBuffer_14, 
                style: style_10KmBuffer_14,
                popuplayertitle: '10 Km Buffer',
                interactive: false,
                title: '<img src="styles/legend/10KmBuffer_14.png" /> 10 Km Buffer'
            });
var format_4KmBuffer_15 = new ol.format.GeoJSON();
var features_4KmBuffer_15 = format_4KmBuffer_15.readFeatures(json_4KmBuffer_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4KmBuffer_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4KmBuffer_15.addFeatures(features_4KmBuffer_15);
var lyr_4KmBuffer_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4KmBuffer_15, 
                style: style_4KmBuffer_15,
                popuplayertitle: '4 Km Buffer',
                interactive: false,
                title: '<img src="styles/legend/4KmBuffer_15.png" /> 4 Km Buffer'
            });
var format_500MBuffer_16 = new ol.format.GeoJSON();
var features_500MBuffer_16 = format_500MBuffer_16.readFeatures(json_500MBuffer_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_500MBuffer_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_500MBuffer_16.addFeatures(features_500MBuffer_16);
var lyr_500MBuffer_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_500MBuffer_16, 
                style: style_500MBuffer_16,
                popuplayertitle: '500 M Buffer',
                interactive: false,
                title: '<img src="styles/legend/500MBuffer_16.png" /> 500 M Buffer'
            });
var format_ImpAreas_17 = new ol.format.GeoJSON();
var features_ImpAreas_17 = format_ImpAreas_17.readFeatures(json_ImpAreas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImpAreas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImpAreas_17.addFeatures(features_ImpAreas_17);
var lyr_ImpAreas_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImpAreas_17, 
                style: style_ImpAreas_17,
                popuplayertitle: 'ImpAreas',
                interactive: true,
    title: 'ImpAreas<br />\
    <img src="styles/legend/ImpAreas_17_0.png" /> Accretion<br />\
    <img src="styles/legend/ImpAreas_17_1.png" /> Erosion<br />' });
var format_SomnathAmenities_18 = new ol.format.GeoJSON();
var features_SomnathAmenities_18 = format_SomnathAmenities_18.readFeatures(json_SomnathAmenities_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomnathAmenities_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomnathAmenities_18.addFeatures(features_SomnathAmenities_18);
var lyr_SomnathAmenities_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SomnathAmenities_18, 
                style: style_SomnathAmenities_18,
                popuplayertitle: 'Somnath Amenities',
                interactive: true,
                title: '<img src="styles/legend/SomnathAmenities_18.png" /> Somnath Amenities'
            });
var format_ImpPoints_19 = new ol.format.GeoJSON();
var features_ImpPoints_19 = format_ImpPoints_19.readFeatures(json_ImpPoints_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ImpPoints_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImpPoints_19.addFeatures(features_ImpPoints_19);
var lyr_ImpPoints_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImpPoints_19, 
                style: style_ImpPoints_19,
                popuplayertitle: 'ImpPoints',
                interactive: true,
                title: '<img src="styles/legend/ImpPoints_19.png" /> ImpPoints'
            });
var format_MajorPlaces_20 = new ol.format.GeoJSON();
var features_MajorPlaces_20 = format_MajorPlaces_20.readFeatures(json_MajorPlaces_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorPlaces_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorPlaces_20.addFeatures(features_MajorPlaces_20);
var lyr_MajorPlaces_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorPlaces_20, 
                style: style_MajorPlaces_20,
                popuplayertitle: 'Major Places',
                interactive: true,
                title: '<img src="styles/legend/MajorPlaces_20.png" /> Major Places'
            });
var group_Admin = new ol.layer.Group({
                                layers: [lyr_VillagesBoundary_7,lyr_Waterbody_8,lyr_RiversandStreams_9,lyr_Canals_10,lyr_Roads500M_11,lyr_Railway_12,lyr_Roads_13,],
                                fold: 'open',
                                title: 'Admin'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_FalseColourComposite_3.setVisible(true);lyr_Elevation_4.setVisible(false);lyr_LanduseClasses_5.setVisible(false);lyr_InfrastructureLanduse_6.setVisible(true);lyr_VillagesBoundary_7.setVisible(false);lyr_Waterbody_8.setVisible(false);lyr_RiversandStreams_9.setVisible(false);lyr_Canals_10.setVisible(false);lyr_Roads500M_11.setVisible(false);lyr_Railway_12.setVisible(false);lyr_Roads_13.setVisible(false);lyr_10KmBuffer_14.setVisible(true);lyr_4KmBuffer_15.setVisible(true);lyr_500MBuffer_16.setVisible(true);lyr_ImpAreas_17.setVisible(false);lyr_SomnathAmenities_18.setVisible(true);lyr_ImpPoints_19.setVisible(true);lyr_MajorPlaces_20.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,lyr_FalseColourComposite_3,lyr_Elevation_4,lyr_LanduseClasses_5,lyr_InfrastructureLanduse_6,group_Admin,lyr_10KmBuffer_14,lyr_4KmBuffer_15,lyr_500MBuffer_16,lyr_ImpAreas_17,lyr_SomnathAmenities_18,lyr_ImpPoints_19,lyr_MajorPlaces_20];
lyr_InfrastructureLanduse_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'path': 'path', 'Name_2': 'Name_2', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer_2': 'Layer_2', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_VillagesBoundary_7.set('fieldAliases', {'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Dist_Id': 'Dist_Id', 'Taluka_Id': 'Taluka_Id', 'Village_Id': 'Village_Id', 'S_Name': 'S_Name', 'Remark': 'Remark', 'GUJ_NAM': 'GUJ_NAM', 'GUJ_NAM2': 'GUJ_NAM2', 'GUJ_NAM_1': 'GUJ_NAM_1', 'Popu_2001': 'Popu_2001', 'Status': 'Status', 'BEAT': 'BEAT', 'ROUND': 'ROUND', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', 'VILL_TYPE': 'VILL_TYPE', 'FOREST_AR': 'FOREST_AR', });
lyr_Waterbody_8.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RiversandStreams_9.set('fieldAliases', {'Layer': 'Layer', 'Categories': 'Categories', 'Feature_Co': 'Feature_Co', 'Validation': 'Validation', 'Year_Updat': 'Year_Updat', 'Projtn_Dtm': 'Projtn_Dtm', 'Cont_Offcr': 'Cont_Offcr', 'Cont_No': 'Cont_No', 'Scale_mapi': 'Scale_mapi', 'Data_Sour': 'Data_Sour', 'Proj_code': 'Proj_code', 'Remarks': 'Remarks', });
lyr_Canals_10.set('fieldAliases', {'Layer': 'Layer', 'Categories': 'Categories', 'Feature_Co': 'Feature_Co', 'Validation': 'Validation', 'Year_Updat': 'Year_Updat', 'Projtn_Dtm': 'Projtn_Dtm', 'Cont_Offcr': 'Cont_Offcr', 'Cont_No': 'Cont_No', 'Scale_mapi': 'Scale_mapi', 'Data_Sour': 'Data_Sour', 'Proj_code': 'Proj_code', 'Remarks': 'Remarks', });
lyr_Roads500M_11.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Railway_12.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'RAIL_SWA_T': 'RAIL_SWA_T', 'RAIL_SWA_1': 'RAIL_SWA_1', 'FNODE1': 'FNODE1', 'TNODE1': 'TNODE1', 'LPOLY1': 'LPOLY1', 'RPOLY1': 'RPOLY1', 'RAIL_AOI_': 'RAIL_AOI_', 'RAIL_AOI_I': 'RAIL_AOI_I', 'RL_CODE': 'RL_CODE', 'RAIL_TYPE': 'RAIL_TYPE', 'RAIL_DET': 'RAIL_DET', 'ID': 'ID', 'Google_Upd': 'Google_Upd', });
lyr_Roads_13.set('fieldAliases', {'icon': 'icon', 'CAT': 'CAT', 'NAME': 'NAME', 'FROM_KM': 'FROM_KM', 'TO_KM': 'TO_KM', 'BSSLANE': 'BSSLANE', 'SSLANE': 'SSLANE', 'INTER': 'INTER', 'SDLANE': 'SDLANE', 'SMLTL': 'SMLTL', 'CAR_WIDTH': 'CAR_WIDTH', 'FOR_WIDTH': 'FOR_WIDTH', 'LAND_WIDTH': 'LAND_WIDTH', 'LENGTH_ROA': 'LENGTH_ROA', 'SURFACE': 'SURFACE', 'SP': 'SP', 'REMARK': 'REMARK', 'CAT_SP': 'CAT_SP', 'CAT_SURFAC': 'CAT_SURFAC', 'NEW_SURFAC': 'NEW_SURFAC', 'YEARS': 'YEARS', 'SH_NH_ID': 'SH_NH_ID', 'DISTRICT': 'DISTRICT', });
lyr_10KmBuffer_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'area': 'area', });
lyr_4KmBuffer_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descript_1': 'descript_1', 'altitude_1': 'altitude_1', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_500MBuffer_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_ImpAreas_17.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_SomnathAmenities_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_ImpPoints_19.set('fieldAliases', {'id': 'id', 'Remark': 'Remark', });
lyr_MajorPlaces_20.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_InfrastructureLanduse_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'fid': 'TextEdit', 'DN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Name_2': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Layer_2': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_VillagesBoundary_7.set('fieldImages', {'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Dist_Id': 'TextEdit', 'Taluka_Id': 'TextEdit', 'Village_Id': 'TextEdit', 'S_Name': 'TextEdit', 'Remark': 'TextEdit', 'GUJ_NAM': 'TextEdit', 'GUJ_NAM2': 'TextEdit', 'GUJ_NAM_1': 'TextEdit', 'Popu_2001': 'TextEdit', 'Status': 'TextEdit', 'BEAT': 'TextEdit', 'ROUND': 'TextEdit', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', 'VILL_TYPE': 'TextEdit', 'FOREST_AR': 'TextEdit', });
lyr_Waterbody_8.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_RiversandStreams_9.set('fieldImages', {'Layer': 'TextEdit', 'Categories': 'TextEdit', 'Feature_Co': 'TextEdit', 'Validation': 'TextEdit', 'Year_Updat': 'TextEdit', 'Projtn_Dtm': 'TextEdit', 'Cont_Offcr': 'TextEdit', 'Cont_No': 'TextEdit', 'Scale_mapi': 'TextEdit', 'Data_Sour': 'TextEdit', 'Proj_code': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_Canals_10.set('fieldImages', {'Layer': 'TextEdit', 'Categories': 'TextEdit', 'Feature_Co': 'TextEdit', 'Validation': 'TextEdit', 'Year_Updat': 'TextEdit', 'Projtn_Dtm': 'TextEdit', 'Cont_Offcr': 'TextEdit', 'Cont_No': 'TextEdit', 'Scale_mapi': 'TextEdit', 'Data_Sour': 'TextEdit', 'Proj_code': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_Roads500M_11.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Railway_12.set('fieldImages', {'FNODE_': 'Range', 'TNODE_': 'Range', 'LPOLY_': 'Range', 'RPOLY_': 'Range', 'LENGTH': 'TextEdit', 'RAIL_SWA_T': 'Range', 'RAIL_SWA_1': 'Range', 'FNODE1': 'TextEdit', 'TNODE1': 'TextEdit', 'LPOLY1': 'TextEdit', 'RPOLY1': 'TextEdit', 'RAIL_AOI_': 'TextEdit', 'RAIL_AOI_I': 'TextEdit', 'RL_CODE': 'TextEdit', 'RAIL_TYPE': 'TextEdit', 'RAIL_DET': 'TextEdit', 'ID': 'Range', 'Google_Upd': 'TextEdit', });
lyr_Roads_13.set('fieldImages', {'icon': 'TextEdit', 'CAT': 'TextEdit', 'NAME': 'TextEdit', 'FROM_KM': 'TextEdit', 'TO_KM': 'TextEdit', 'BSSLANE': 'TextEdit', 'SSLANE': 'TextEdit', 'INTER': 'TextEdit', 'SDLANE': 'TextEdit', 'SMLTL': 'TextEdit', 'CAR_WIDTH': 'TextEdit', 'FOR_WIDTH': 'TextEdit', 'LAND_WIDTH': 'TextEdit', 'LENGTH_ROA': 'TextEdit', 'SURFACE': 'TextEdit', 'SP': 'TextEdit', 'REMARK': 'TextEdit', 'CAT_SP': 'TextEdit', 'CAT_SURFAC': 'TextEdit', 'NEW_SURFAC': 'TextEdit', 'YEARS': 'TextEdit', 'SH_NH_ID': 'TextEdit', 'DISTRICT': 'TextEdit', });
lyr_10KmBuffer_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'area': 'TextEdit', });
lyr_4KmBuffer_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descript_1': 'TextEdit', 'altitude_1': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_500MBuffer_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_ImpAreas_17.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_SomnathAmenities_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_ImpPoints_19.set('fieldImages', {'id': 'TextEdit', 'Remark': 'TextEdit', });
lyr_MajorPlaces_20.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_InfrastructureLanduse_6.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'fid': 'hidden field', 'DN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', 'Name_2': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer_2': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHand': 'hidden field', 'Text': 'hidden field', });
lyr_VillagesBoundary_7.set('fieldLabels', {'District': 'inline label - always visible', 'Taluka': 'inline label - always visible', 'Village': 'inline label - always visible', 'Dist_Id': 'hidden field', 'Taluka_Id': 'hidden field', 'Village_Id': 'hidden field', 'S_Name': 'hidden field', 'Remark': 'hidden field', 'GUJ_NAM': 'hidden field', 'GUJ_NAM2': 'hidden field', 'GUJ_NAM_1': 'hidden field', 'Popu_2001': 'hidden field', 'Status': 'hidden field', 'BEAT': 'hidden field', 'ROUND': 'hidden field', 'RANGE': 'hidden field', 'DIVISION': 'hidden field', 'CIRCLE': 'hidden field', 'VILL_TYPE': 'hidden field', 'FOREST_AR': 'hidden field', });
lyr_Waterbody_8.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_RiversandStreams_9.set('fieldLabels', {'Layer': 'hidden field', 'Categories': 'inline label - always visible', 'Feature_Co': 'hidden field', 'Validation': 'hidden field', 'Year_Updat': 'hidden field', 'Projtn_Dtm': 'hidden field', 'Cont_Offcr': 'hidden field', 'Cont_No': 'hidden field', 'Scale_mapi': 'hidden field', 'Data_Sour': 'hidden field', 'Proj_code': 'hidden field', 'Remarks': 'hidden field', });
lyr_Canals_10.set('fieldLabels', {'Layer': 'hidden field', 'Categories': 'inline label - always visible', 'Feature_Co': 'hidden field', 'Validation': 'hidden field', 'Year_Updat': 'hidden field', 'Projtn_Dtm': 'hidden field', 'Cont_Offcr': 'hidden field', 'Cont_No': 'hidden field', 'Scale_mapi': 'hidden field', 'Data_Sour': 'hidden field', 'Proj_code': 'hidden field', 'Remarks': 'hidden field', });
lyr_Roads500M_11.set('fieldLabels', {'osm_id': 'header label - always visible', 'code': 'hidden field', 'fclass': 'inline label - always visible', 'name': 'hidden field', 'ref': 'hidden field', 'oneway': 'hidden field', 'maxspeed': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', });
lyr_Railway_12.set('fieldLabels', {'FNODE_': 'hidden field', 'TNODE_': 'hidden field', 'LPOLY_': 'hidden field', 'RPOLY_': 'hidden field', 'LENGTH': 'hidden field', 'RAIL_SWA_T': 'hidden field', 'RAIL_SWA_1': 'hidden field', 'FNODE1': 'hidden field', 'TNODE1': 'hidden field', 'LPOLY1': 'hidden field', 'RPOLY1': 'hidden field', 'RAIL_AOI_': 'hidden field', 'RAIL_AOI_I': 'hidden field', 'RL_CODE': 'hidden field', 'RAIL_TYPE': 'hidden field', 'RAIL_DET': 'hidden field', 'ID': 'hidden field', 'Google_Upd': 'hidden field', });
lyr_Roads_13.set('fieldLabels', {'icon': 'hidden field', 'CAT': 'inline label - always visible', 'NAME': 'hidden field', 'FROM_KM': 'hidden field', 'TO_KM': 'hidden field', 'BSSLANE': 'hidden field', 'SSLANE': 'hidden field', 'INTER': 'hidden field', 'SDLANE': 'hidden field', 'SMLTL': 'hidden field', 'CAR_WIDTH': 'hidden field', 'FOR_WIDTH': 'hidden field', 'LAND_WIDTH': 'hidden field', 'LENGTH_ROA': 'hidden field', 'SURFACE': 'hidden field', 'SP': 'hidden field', 'REMARK': 'hidden field', 'CAT_SP': 'hidden field', 'CAT_SURFAC': 'hidden field', 'NEW_SURFAC': 'hidden field', 'YEARS': 'hidden field', 'SH_NH_ID': 'hidden field', 'DISTRICT': 'hidden field', });
lyr_10KmBuffer_14.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHand': 'hidden field', 'Text': 'hidden field', 'area': 'hidden field', });
lyr_4KmBuffer_15.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'descript_1': 'hidden field', 'altitude_1': 'hidden field', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHand': 'hidden field', 'Text': 'hidden field', });
lyr_500MBuffer_16.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHand': 'hidden field', 'Text': 'hidden field', });
lyr_ImpAreas_17.set('fieldLabels', {'id': 'hidden field', 'Area': 'inline label - always visible', });
lyr_SomnathAmenities_18.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHand': 'hidden field', 'Text': 'hidden field', });
lyr_ImpPoints_19.set('fieldLabels', {'id': 'hidden field', 'Remark': 'inline label - always visible', });
lyr_MajorPlaces_20.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', });
lyr_MajorPlaces_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});