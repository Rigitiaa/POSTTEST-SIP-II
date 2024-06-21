var wms_layers = [];

var format_KecamatanGenteng_0 = new ol.format.GeoJSON();
var features_KecamatanGenteng_0 = format_KecamatanGenteng_0.readFeatures(json_KecamatanGenteng_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_0.addFeatures(features_KecamatanGenteng_0);
var lyr_KecamatanGenteng_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_0, 
                style: style_KecamatanGenteng_0,
                popuplayertitle: "Kecamatan Genteng",
                interactive: true,
                title: '<img src="styles/legend/KecamatanGenteng_0.png" /> Kecamatan Genteng'
            });
var format_SERVICEAREAPolygonBarriers_1 = new ol.format.GeoJSON();
var features_SERVICEAREAPolygonBarriers_1 = format_SERVICEAREAPolygonBarriers_1.readFeatures(json_SERVICEAREAPolygonBarriers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERVICEAREAPolygonBarriers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICEAREAPolygonBarriers_1.addFeatures(features_SERVICEAREAPolygonBarriers_1);
var lyr_SERVICEAREAPolygonBarriers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICEAREAPolygonBarriers_1, 
                style: style_SERVICEAREAPolygonBarriers_1,
                popuplayertitle: "SERVICE AREA — Polygon Barriers",
                interactive: true,
                title: '<img src="styles/legend/SERVICEAREAPolygonBarriers_1.png" /> SERVICE AREA — Polygon Barriers'
            });
var format_SERVICEAREAPolygons_2 = new ol.format.GeoJSON();
var features_SERVICEAREAPolygons_2 = format_SERVICEAREAPolygons_2.readFeatures(json_SERVICEAREAPolygons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERVICEAREAPolygons_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICEAREAPolygons_2.addFeatures(features_SERVICEAREAPolygons_2);
var lyr_SERVICEAREAPolygons_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICEAREAPolygons_2, 
                style: style_SERVICEAREAPolygons_2,
                popuplayertitle: "SERVICE AREA — Polygons",
                interactive: true,
                title: '<img src="styles/legend/SERVICEAREAPolygons_2.png" /> SERVICE AREA — Polygons'
            });
var format_d_JaringanJalan_Fixed_3 = new ol.format.GeoJSON();
var features_d_JaringanJalan_Fixed_3 = format_d_JaringanJalan_Fixed_3.readFeatures(json_d_JaringanJalan_Fixed_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_JaringanJalan_Fixed_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_JaringanJalan_Fixed_3.addFeatures(features_d_JaringanJalan_Fixed_3);
var lyr_d_JaringanJalan_Fixed_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_JaringanJalan_Fixed_3, 
                style: style_d_JaringanJalan_Fixed_3,
                popuplayertitle: "d_JaringanJalan_Fixed",
                interactive: true,
                title: '<img src="styles/legend/d_JaringanJalan_Fixed_3.png" /> d_JaringanJalan_Fixed'
            });
var format_SERVICEAREALineBarriers_4 = new ol.format.GeoJSON();
var features_SERVICEAREALineBarriers_4 = format_SERVICEAREALineBarriers_4.readFeatures(json_SERVICEAREALineBarriers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERVICEAREALineBarriers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICEAREALineBarriers_4.addFeatures(features_SERVICEAREALineBarriers_4);
var lyr_SERVICEAREALineBarriers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICEAREALineBarriers_4, 
                style: style_SERVICEAREALineBarriers_4,
                popuplayertitle: "SERVICE AREA — Line Barriers",
                interactive: true,
                title: '<img src="styles/legend/SERVICEAREALineBarriers_4.png" /> SERVICE AREA — Line Barriers'
            });
var format_SERVICEAREALines_5 = new ol.format.GeoJSON();
var features_SERVICEAREALines_5 = format_SERVICEAREALines_5.readFeatures(json_SERVICEAREALines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERVICEAREALines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICEAREALines_5.addFeatures(features_SERVICEAREALines_5);
var lyr_SERVICEAREALines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICEAREALines_5, 
                style: style_SERVICEAREALines_5,
                popuplayertitle: "SERVICE AREA — Lines",
                interactive: true,
                title: '<img src="styles/legend/SERVICEAREALines_5.png" /> SERVICE AREA — Lines'
            });
var format_SERVICEAREAFacilities_6 = new ol.format.GeoJSON();
var features_SERVICEAREAFacilities_6 = format_SERVICEAREAFacilities_6.readFeatures(json_SERVICEAREAFacilities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERVICEAREAFacilities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICEAREAFacilities_6.addFeatures(features_SERVICEAREAFacilities_6);
var lyr_SERVICEAREAFacilities_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICEAREAFacilities_6, 
                style: style_SERVICEAREAFacilities_6,
                popuplayertitle: "SERVICE AREA — Facilities",
                interactive: true,
                title: '<img src="styles/legend/SERVICEAREAFacilities_6.png" /> SERVICE AREA — Facilities'
            });
var format_SERVICEAREAPointBarriers_7 = new ol.format.GeoJSON();
var features_SERVICEAREAPointBarriers_7 = format_SERVICEAREAPointBarriers_7.readFeatures(json_SERVICEAREAPointBarriers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERVICEAREAPointBarriers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERVICEAREAPointBarriers_7.addFeatures(features_SERVICEAREAPointBarriers_7);
var lyr_SERVICEAREAPointBarriers_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SERVICEAREAPointBarriers_7, 
                style: style_SERVICEAREAPointBarriers_7,
                popuplayertitle: "SERVICE AREA — Point Barriers",
                interactive: true,
                title: '<img src="styles/legend/SERVICEAREAPointBarriers_7.png" /> SERVICE AREA — Point Barriers'
            });
var format_d_Halte_Surabaya_8 = new ol.format.GeoJSON();
var features_d_Halte_Surabaya_8 = format_d_Halte_Surabaya_8.readFeatures(json_d_Halte_Surabaya_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_Halte_Surabaya_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_Halte_Surabaya_8.addFeatures(features_d_Halte_Surabaya_8);
var lyr_d_Halte_Surabaya_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_Halte_Surabaya_8, 
                style: style_d_Halte_Surabaya_8,
                popuplayertitle: "d_Halte_Surabaya",
                interactive: true,
                title: '<img src="styles/legend/d_Halte_Surabaya_8.png" /> d_Halte_Surabaya'
            });

lyr_KecamatanGenteng_0.setVisible(true);lyr_SERVICEAREAPolygonBarriers_1.setVisible(true);lyr_SERVICEAREAPolygons_2.setVisible(true);lyr_d_JaringanJalan_Fixed_3.setVisible(true);lyr_SERVICEAREALineBarriers_4.setVisible(true);lyr_SERVICEAREALines_5.setVisible(true);lyr_SERVICEAREAFacilities_6.setVisible(true);lyr_SERVICEAREAPointBarriers_7.setVisible(true);lyr_d_Halte_Surabaya_8.setVisible(true);
var layersList = [lyr_KecamatanGenteng_0,lyr_SERVICEAREAPolygonBarriers_1,lyr_SERVICEAREAPolygons_2,lyr_d_JaringanJalan_Fixed_3,lyr_SERVICEAREALineBarriers_4,lyr_SERVICEAREALines_5,lyr_SERVICEAREAFacilities_6,lyr_SERVICEAREAPointBarriers_7,lyr_d_Halte_Surabaya_8];
lyr_KecamatanGenteng_0.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', });
lyr_SERVICEAREAPolygonBarriers_1.set('fieldAliases', {'Name': 'Name', 'BarrierTyp': 'BarrierTyp', 'Attr_Lengt': 'Attr_Lengt', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SERVICEAREAPolygons_2.set('fieldAliases', {'FacilityID': 'FacilityID', 'Name': 'Name', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_d_JaringanJalan_Fixed_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_SERVICEAREALineBarriers_4.set('fieldAliases', {'Name': 'Name', 'BarrierTyp': 'BarrierTyp', 'Attr_Lengt': 'Attr_Lengt', 'Shape_Leng': 'Shape_Leng', });
lyr_SERVICEAREALines_5.set('fieldAliases', {'FacilityID': 'FacilityID', 'FromCumul_': 'FromCumul_', 'ToCumul_Le': 'ToCumul_Le', 'Shape_Leng': 'Shape_Leng', });
lyr_SERVICEAREAFacilities_6.set('fieldAliases', {'Name': 'Name', 'SourceID': 'SourceID', 'SourceOID': 'SourceOID', 'PosAlong': 'PosAlong', 'SideOfEdge': 'SideOfEdge', 'CurbApproa': 'CurbApproa', 'Status': 'Status', 'Attr_Lengt': 'Attr_Lengt', 'Breaks_Len': 'Breaks_Len', });
lyr_SERVICEAREAPointBarriers_7.set('fieldAliases', {'Name': 'Name', 'SourceID': 'SourceID', 'SourceOID': 'SourceOID', 'PosAlong': 'PosAlong', 'SideOfEdge': 'SideOfEdge', 'CurbApproa': 'CurbApproa', 'Status': 'Status', 'FullEdge': 'FullEdge', 'BarrierTyp': 'BarrierTyp', 'Attr_Lengt': 'Attr_Lengt', });
lyr_d_Halte_Surabaya_8.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_KecamatanGenteng_0.set('fieldImages', {'full_id': '', 'Kecamatan': '', 'Kelurahan': '', });
lyr_SERVICEAREAPolygonBarriers_1.set('fieldImages', {'Name': '', 'BarrierTyp': '', 'Attr_Lengt': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SERVICEAREAPolygons_2.set('fieldImages', {'FacilityID': '', 'Name': '', 'FromBreak': '', 'ToBreak': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_d_JaringanJalan_Fixed_3.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_SERVICEAREALineBarriers_4.set('fieldImages', {'Name': '', 'BarrierTyp': '', 'Attr_Lengt': '', 'Shape_Leng': '', });
lyr_SERVICEAREALines_5.set('fieldImages', {'FacilityID': '', 'FromCumul_': '', 'ToCumul_Le': '', 'Shape_Leng': '', });
lyr_SERVICEAREAFacilities_6.set('fieldImages', {'Name': '', 'SourceID': '', 'SourceOID': '', 'PosAlong': '', 'SideOfEdge': '', 'CurbApproa': '', 'Status': '', 'Attr_Lengt': '', 'Breaks_Len': '', });
lyr_SERVICEAREAPointBarriers_7.set('fieldImages', {'Name': '', 'SourceID': '', 'SourceOID': '', 'PosAlong': '', 'SideOfEdge': '', 'CurbApproa': '', 'Status': '', 'FullEdge': '', 'BarrierTyp': '', 'Attr_Lengt': '', });
lyr_d_Halte_Surabaya_8.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', });
lyr_KecamatanGenteng_0.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', });
lyr_SERVICEAREAPolygonBarriers_1.set('fieldLabels', {'Name': 'no label', 'BarrierTyp': 'no label', 'Attr_Lengt': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SERVICEAREAPolygons_2.set('fieldLabels', {'FacilityID': 'no label', 'Name': 'no label', 'FromBreak': 'no label', 'ToBreak': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_d_JaringanJalan_Fixed_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_SERVICEAREALineBarriers_4.set('fieldLabels', {'Name': 'no label', 'BarrierTyp': 'no label', 'Attr_Lengt': 'no label', 'Shape_Leng': 'no label', });
lyr_SERVICEAREALines_5.set('fieldLabels', {'FacilityID': 'no label', 'FromCumul_': 'no label', 'ToCumul_Le': 'no label', 'Shape_Leng': 'no label', });
lyr_SERVICEAREAFacilities_6.set('fieldLabels', {'Name': 'no label', 'SourceID': 'no label', 'SourceOID': 'no label', 'PosAlong': 'no label', 'SideOfEdge': 'no label', 'CurbApproa': 'no label', 'Status': 'no label', 'Attr_Lengt': 'no label', 'Breaks_Len': 'no label', });
lyr_SERVICEAREAPointBarriers_7.set('fieldLabels', {'Name': 'no label', 'SourceID': 'no label', 'SourceOID': 'no label', 'PosAlong': 'no label', 'SideOfEdge': 'no label', 'CurbApproa': 'no label', 'Status': 'no label', 'FullEdge': 'no label', 'BarrierTyp': 'no label', 'Attr_Lengt': 'no label', });
lyr_d_Halte_Surabaya_8.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', });
lyr_d_Halte_Surabaya_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});