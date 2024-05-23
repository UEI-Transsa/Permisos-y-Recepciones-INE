ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([341263.690466, 6293393.538349, 355048.476508, 6303676.496841]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CertificadosRecepcinFinal_2023_2 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2023_2 = format_CertificadosRecepcinFinal_2023_2.readFeatures(json_CertificadosRecepcinFinal_2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2023_2.addFeatures(features_CertificadosRecepcinFinal_2023_2);
var lyr_CertificadosRecepcinFinal_2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2023_2, 
                style: style_CertificadosRecepcinFinal_2023_2,
                popuplayertitle: "Certificados Recepción Final_2023",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2023_2.png" /> Certificados Recepción Final_2023'
            });
var format_CertificadosRecepcinFinal_2022_3 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2022_3 = format_CertificadosRecepcinFinal_2022_3.readFeatures(json_CertificadosRecepcinFinal_2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2022_3.addFeatures(features_CertificadosRecepcinFinal_2022_3);
var lyr_CertificadosRecepcinFinal_2022_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2022_3, 
                style: style_CertificadosRecepcinFinal_2022_3,
                popuplayertitle: "Certificados Recepción Final_2022",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2022_3.png" /> Certificados Recepción Final_2022'
            });
var format_CertificadosRecepcinFinal_2021_4 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2021_4 = format_CertificadosRecepcinFinal_2021_4.readFeatures(json_CertificadosRecepcinFinal_2021_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2021_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2021_4.addFeatures(features_CertificadosRecepcinFinal_2021_4);
var lyr_CertificadosRecepcinFinal_2021_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2021_4, 
                style: style_CertificadosRecepcinFinal_2021_4,
                popuplayertitle: "Certificados Recepción Final_2021",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2021_4.png" /> Certificados Recepción Final_2021'
            });
var format_CertificadosRecepcinFinal_2020_5 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2020_5 = format_CertificadosRecepcinFinal_2020_5.readFeatures(json_CertificadosRecepcinFinal_2020_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2020_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2020_5.addFeatures(features_CertificadosRecepcinFinal_2020_5);
var lyr_CertificadosRecepcinFinal_2020_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2020_5, 
                style: style_CertificadosRecepcinFinal_2020_5,
                popuplayertitle: "Certificados Recepción Final_2020",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2020_5.png" /> Certificados Recepción Final_2020'
            });
var format_CertificadosRecepcinFinal_2019_6 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2019_6 = format_CertificadosRecepcinFinal_2019_6.readFeatures(json_CertificadosRecepcinFinal_2019_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2019_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2019_6.addFeatures(features_CertificadosRecepcinFinal_2019_6);
var lyr_CertificadosRecepcinFinal_2019_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2019_6, 
                style: style_CertificadosRecepcinFinal_2019_6,
                popuplayertitle: "Certificados Recepción Final_2019",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2019_6.png" /> Certificados Recepción Final_2019'
            });
var format_CertificadosRecepcinFinal_2018_7 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2018_7 = format_CertificadosRecepcinFinal_2018_7.readFeatures(json_CertificadosRecepcinFinal_2018_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2018_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2018_7.addFeatures(features_CertificadosRecepcinFinal_2018_7);
var lyr_CertificadosRecepcinFinal_2018_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2018_7, 
                style: style_CertificadosRecepcinFinal_2018_7,
                popuplayertitle: "Certificados Recepción Final_2018",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2018_7.png" /> Certificados Recepción Final_2018'
            });
var format_CertificadosRecepcinFinal_2017_8 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2017_8 = format_CertificadosRecepcinFinal_2017_8.readFeatures(json_CertificadosRecepcinFinal_2017_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2017_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2017_8.addFeatures(features_CertificadosRecepcinFinal_2017_8);
var lyr_CertificadosRecepcinFinal_2017_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2017_8, 
                style: style_CertificadosRecepcinFinal_2017_8,
                popuplayertitle: "Certificados Recepción Final_2017",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2017_8.png" /> Certificados Recepción Final_2017'
            });
var format_CertificadosRecepcinFinal_2016_9 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2016_9 = format_CertificadosRecepcinFinal_2016_9.readFeatures(json_CertificadosRecepcinFinal_2016_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2016_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2016_9.addFeatures(features_CertificadosRecepcinFinal_2016_9);
var lyr_CertificadosRecepcinFinal_2016_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2016_9, 
                style: style_CertificadosRecepcinFinal_2016_9,
                popuplayertitle: "Certificados Recepción Final_2016",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2016_9.png" /> Certificados Recepción Final_2016'
            });
var format_CertificadosRecepcinFinal_2015_10 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2015_10 = format_CertificadosRecepcinFinal_2015_10.readFeatures(json_CertificadosRecepcinFinal_2015_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2015_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2015_10.addFeatures(features_CertificadosRecepcinFinal_2015_10);
var lyr_CertificadosRecepcinFinal_2015_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2015_10, 
                style: style_CertificadosRecepcinFinal_2015_10,
                popuplayertitle: "Certificados Recepción Final_2015",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2015_10.png" /> Certificados Recepción Final_2015'
            });
var format_CertificadosRecepcinFinal_2014_11 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2014_11 = format_CertificadosRecepcinFinal_2014_11.readFeatures(json_CertificadosRecepcinFinal_2014_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2014_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2014_11.addFeatures(features_CertificadosRecepcinFinal_2014_11);
var lyr_CertificadosRecepcinFinal_2014_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2014_11, 
                style: style_CertificadosRecepcinFinal_2014_11,
                popuplayertitle: "Certificados Recepción Final_2014",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2014_11.png" /> Certificados Recepción Final_2014'
            });
var format_CertificadosRecepcinFinal_2013_12 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2013_12 = format_CertificadosRecepcinFinal_2013_12.readFeatures(json_CertificadosRecepcinFinal_2013_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2013_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2013_12.addFeatures(features_CertificadosRecepcinFinal_2013_12);
var lyr_CertificadosRecepcinFinal_2013_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2013_12, 
                style: style_CertificadosRecepcinFinal_2013_12,
                popuplayertitle: "Certificados Recepción Final_2013",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2013_12.png" /> Certificados Recepción Final_2013'
            });
var format_CertificadosRecepcinFinal_2012_13 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2012_13 = format_CertificadosRecepcinFinal_2012_13.readFeatures(json_CertificadosRecepcinFinal_2012_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2012_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2012_13.addFeatures(features_CertificadosRecepcinFinal_2012_13);
var lyr_CertificadosRecepcinFinal_2012_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2012_13, 
                style: style_CertificadosRecepcinFinal_2012_13,
                popuplayertitle: "Certificados Recepción Final_2012",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2012_13.png" /> Certificados Recepción Final_2012'
            });
var format_CertificadosRecepcinFinal_2011_14 = new ol.format.GeoJSON();
var features_CertificadosRecepcinFinal_2011_14 = format_CertificadosRecepcinFinal_2011_14.readFeatures(json_CertificadosRecepcinFinal_2011_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CertificadosRecepcinFinal_2011_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CertificadosRecepcinFinal_2011_14.addFeatures(features_CertificadosRecepcinFinal_2011_14);
var lyr_CertificadosRecepcinFinal_2011_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CertificadosRecepcinFinal_2011_14, 
                style: style_CertificadosRecepcinFinal_2011_14,
                popuplayertitle: "Certificados Recepción Final_2011",
                interactive: true,
                title: '<img src="styles/legend/CertificadosRecepcinFinal_2011_14.png" /> Certificados Recepción Final_2011'
            });
var format_PermisosdeEdificacin_2023_15 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2023_15 = format_PermisosdeEdificacin_2023_15.readFeatures(json_PermisosdeEdificacin_2023_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2023_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2023_15.addFeatures(features_PermisosdeEdificacin_2023_15);
var lyr_PermisosdeEdificacin_2023_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2023_15, 
                style: style_PermisosdeEdificacin_2023_15,
                popuplayertitle: "Permisos de Edificación_2023",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2023_15.png" /> Permisos de Edificación_2023'
            });
var format_PermisosdeEdificacin_2022_16 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2022_16 = format_PermisosdeEdificacin_2022_16.readFeatures(json_PermisosdeEdificacin_2022_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2022_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2022_16.addFeatures(features_PermisosdeEdificacin_2022_16);
var lyr_PermisosdeEdificacin_2022_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2022_16, 
                style: style_PermisosdeEdificacin_2022_16,
                popuplayertitle: "Permisos de Edificación_2022",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2022_16.png" /> Permisos de Edificación_2022'
            });
var format_PermisosdeEdificacin_2021_17 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2021_17 = format_PermisosdeEdificacin_2021_17.readFeatures(json_PermisosdeEdificacin_2021_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2021_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2021_17.addFeatures(features_PermisosdeEdificacin_2021_17);
var lyr_PermisosdeEdificacin_2021_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2021_17, 
                style: style_PermisosdeEdificacin_2021_17,
                popuplayertitle: "Permisos de Edificación_2021",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2021_17.png" /> Permisos de Edificación_2021'
            });
var format_PermisosdeEdificacin_2020_18 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2020_18 = format_PermisosdeEdificacin_2020_18.readFeatures(json_PermisosdeEdificacin_2020_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2020_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2020_18.addFeatures(features_PermisosdeEdificacin_2020_18);
var lyr_PermisosdeEdificacin_2020_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2020_18, 
                style: style_PermisosdeEdificacin_2020_18,
                popuplayertitle: "Permisos de Edificación_2020",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2020_18.png" /> Permisos de Edificación_2020'
            });
var format_PermisosdeEdificacin_2019_19 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2019_19 = format_PermisosdeEdificacin_2019_19.readFeatures(json_PermisosdeEdificacin_2019_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2019_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2019_19.addFeatures(features_PermisosdeEdificacin_2019_19);
var lyr_PermisosdeEdificacin_2019_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2019_19, 
                style: style_PermisosdeEdificacin_2019_19,
                popuplayertitle: "Permisos de Edificación_2019",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2019_19.png" /> Permisos de Edificación_2019'
            });
var format_PermisosdeEdificacin_2018_20 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2018_20 = format_PermisosdeEdificacin_2018_20.readFeatures(json_PermisosdeEdificacin_2018_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2018_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2018_20.addFeatures(features_PermisosdeEdificacin_2018_20);
var lyr_PermisosdeEdificacin_2018_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2018_20, 
                style: style_PermisosdeEdificacin_2018_20,
                popuplayertitle: "Permisos de Edificación_2018",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2018_20.png" /> Permisos de Edificación_2018'
            });
var format_PermisosdeEdificacin_2017_21 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2017_21 = format_PermisosdeEdificacin_2017_21.readFeatures(json_PermisosdeEdificacin_2017_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2017_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2017_21.addFeatures(features_PermisosdeEdificacin_2017_21);
var lyr_PermisosdeEdificacin_2017_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2017_21, 
                style: style_PermisosdeEdificacin_2017_21,
                popuplayertitle: "Permisos de Edificación_2017",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2017_21.png" /> Permisos de Edificación_2017'
            });
var format_PermisosdeEdificacin_2016_22 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2016_22 = format_PermisosdeEdificacin_2016_22.readFeatures(json_PermisosdeEdificacin_2016_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2016_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2016_22.addFeatures(features_PermisosdeEdificacin_2016_22);
var lyr_PermisosdeEdificacin_2016_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2016_22, 
                style: style_PermisosdeEdificacin_2016_22,
                popuplayertitle: "Permisos de Edificación_2016",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2016_22.png" /> Permisos de Edificación_2016'
            });
var format_PermisosdeEdificacin_2015_23 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2015_23 = format_PermisosdeEdificacin_2015_23.readFeatures(json_PermisosdeEdificacin_2015_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2015_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2015_23.addFeatures(features_PermisosdeEdificacin_2015_23);
var lyr_PermisosdeEdificacin_2015_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2015_23, 
                style: style_PermisosdeEdificacin_2015_23,
                popuplayertitle: "Permisos de Edificación_2015",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2015_23.png" /> Permisos de Edificación_2015'
            });
var format_PermisosdeEdificacin_2014_24 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2014_24 = format_PermisosdeEdificacin_2014_24.readFeatures(json_PermisosdeEdificacin_2014_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2014_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2014_24.addFeatures(features_PermisosdeEdificacin_2014_24);
var lyr_PermisosdeEdificacin_2014_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2014_24, 
                style: style_PermisosdeEdificacin_2014_24,
                popuplayertitle: "Permisos de Edificación_2014",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2014_24.png" /> Permisos de Edificación_2014'
            });
var format_PermisosdeEdificacin_2013_25 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2013_25 = format_PermisosdeEdificacin_2013_25.readFeatures(json_PermisosdeEdificacin_2013_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2013_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2013_25.addFeatures(features_PermisosdeEdificacin_2013_25);
var lyr_PermisosdeEdificacin_2013_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2013_25, 
                style: style_PermisosdeEdificacin_2013_25,
                popuplayertitle: "Permisos de Edificación_2013",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2013_25.png" /> Permisos de Edificación_2013'
            });
var format_PermisosdeEdificacin_2012_26 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2012_26 = format_PermisosdeEdificacin_2012_26.readFeatures(json_PermisosdeEdificacin_2012_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2012_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2012_26.addFeatures(features_PermisosdeEdificacin_2012_26);
var lyr_PermisosdeEdificacin_2012_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2012_26, 
                style: style_PermisosdeEdificacin_2012_26,
                popuplayertitle: "Permisos de Edificación_2012",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2012_26.png" /> Permisos de Edificación_2012'
            });
var format_PermisosdeEdificacin_2011_27 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2011_27 = format_PermisosdeEdificacin_2011_27.readFeatures(json_PermisosdeEdificacin_2011_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2011_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2011_27.addFeatures(features_PermisosdeEdificacin_2011_27);
var lyr_PermisosdeEdificacin_2011_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2011_27, 
                style: style_PermisosdeEdificacin_2011_27,
                popuplayertitle: "Permisos de Edificación_2011",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2011_27.png" /> Permisos de Edificación_2011'
            });
var format_PermisosdeEdificacin_2010_28 = new ol.format.GeoJSON();
var features_PermisosdeEdificacin_2010_28 = format_PermisosdeEdificacin_2010_28.readFeatures(json_PermisosdeEdificacin_2010_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PermisosdeEdificacin_2010_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PermisosdeEdificacin_2010_28.addFeatures(features_PermisosdeEdificacin_2010_28);
var lyr_PermisosdeEdificacin_2010_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PermisosdeEdificacin_2010_28, 
                style: style_PermisosdeEdificacin_2010_28,
                popuplayertitle: "Permisos de Edificación_2010",
                interactive: true,
                title: '<img src="styles/legend/PermisosdeEdificacin_2010_28.png" /> Permisos de Edificación_2010'
            });
var group_PermisosdeEdificacin = new ol.layer.Group({
                                layers: [lyr_PermisosdeEdificacin_2023_15,lyr_PermisosdeEdificacin_2022_16,lyr_PermisosdeEdificacin_2021_17,lyr_PermisosdeEdificacin_2020_18,lyr_PermisosdeEdificacin_2019_19,lyr_PermisosdeEdificacin_2018_20,lyr_PermisosdeEdificacin_2017_21,lyr_PermisosdeEdificacin_2016_22,lyr_PermisosdeEdificacin_2015_23,lyr_PermisosdeEdificacin_2014_24,lyr_PermisosdeEdificacin_2013_25,lyr_PermisosdeEdificacin_2012_26,lyr_PermisosdeEdificacin_2011_27,lyr_PermisosdeEdificacin_2010_28,],
                                fold: "open",
                                title: "Permisos de Edificación"});
var group_CertificadosdeRecepcinFinal = new ol.layer.Group({
                                layers: [lyr_CertificadosRecepcinFinal_2023_2,lyr_CertificadosRecepcinFinal_2022_3,lyr_CertificadosRecepcinFinal_2021_4,lyr_CertificadosRecepcinFinal_2020_5,lyr_CertificadosRecepcinFinal_2019_6,lyr_CertificadosRecepcinFinal_2018_7,lyr_CertificadosRecepcinFinal_2017_8,lyr_CertificadosRecepcinFinal_2016_9,lyr_CertificadosRecepcinFinal_2015_10,lyr_CertificadosRecepcinFinal_2014_11,lyr_CertificadosRecepcinFinal_2013_12,lyr_CertificadosRecepcinFinal_2012_13,lyr_CertificadosRecepcinFinal_2011_14,],
                                fold: "open",
                                title: "Certificados de Recepción Final"});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_CertificadosRecepcinFinal_2023_2.setVisible(true);lyr_CertificadosRecepcinFinal_2022_3.setVisible(true);lyr_CertificadosRecepcinFinal_2021_4.setVisible(true);lyr_CertificadosRecepcinFinal_2020_5.setVisible(true);lyr_CertificadosRecepcinFinal_2019_6.setVisible(true);lyr_CertificadosRecepcinFinal_2018_7.setVisible(true);lyr_CertificadosRecepcinFinal_2017_8.setVisible(true);lyr_CertificadosRecepcinFinal_2016_9.setVisible(true);lyr_CertificadosRecepcinFinal_2015_10.setVisible(true);lyr_CertificadosRecepcinFinal_2014_11.setVisible(true);lyr_CertificadosRecepcinFinal_2013_12.setVisible(true);lyr_CertificadosRecepcinFinal_2012_13.setVisible(true);lyr_CertificadosRecepcinFinal_2011_14.setVisible(true);lyr_PermisosdeEdificacin_2023_15.setVisible(true);lyr_PermisosdeEdificacin_2022_16.setVisible(true);lyr_PermisosdeEdificacin_2021_17.setVisible(true);lyr_PermisosdeEdificacin_2020_18.setVisible(true);lyr_PermisosdeEdificacin_2019_19.setVisible(true);lyr_PermisosdeEdificacin_2018_20.setVisible(true);lyr_PermisosdeEdificacin_2017_21.setVisible(true);lyr_PermisosdeEdificacin_2016_22.setVisible(true);lyr_PermisosdeEdificacin_2015_23.setVisible(true);lyr_PermisosdeEdificacin_2014_24.setVisible(true);lyr_PermisosdeEdificacin_2013_25.setVisible(true);lyr_PermisosdeEdificacin_2012_26.setVisible(true);lyr_PermisosdeEdificacin_2011_27.setVisible(true);lyr_PermisosdeEdificacin_2010_28.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_OSMStandard_1,group_CertificadosdeRecepcinFinal,group_PermisosdeEdificacin];
lyr_CertificadosRecepcinFinal_2023_2.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2022_3.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2021_4.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2020_5.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2019_6.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2018_7.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2017_8.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2016_9.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2015_10.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2014_11.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2013_12.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2012_13.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_CertificadosRecepcinFinal_2011_14.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'COMUNA': 'COMUNA', 'N_VIVIENDA': 'N_VIVIENDA', 'AÑO': 'AÑO', 'cod_ah': 'cod_ah', 'com_ah': 'com_ah', 'Area': 'Area', 'com_sii': 'com_sii', });
lyr_PermisosdeEdificacin_2023_15.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2022_16.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2021_17.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2020_18.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2019_19.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2018_20.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2017_21.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2016_22.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2015_23.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2014_24.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2013_25.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2012_26.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2011_27.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PermisosdeEdificacin_2010_28.set('fieldAliases', {'fid': 'fid', 'COD REG': 'COD REG', 'REGION': 'REGION', 'COD SII': 'COD SII', 'COMUNA': 'COMUNA', 'AÑO': 'AÑO', 'UNIDADES': 'UNIDADES', 'PISOS': 'PISOS', 'DESTINO': 'DESTINO', 'USO DEST': 'USO DEST', 'SUPERFICIE': 'SUPERFICIE', });
lyr_CertificadosRecepcinFinal_2023_2.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2022_3.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2021_4.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2020_5.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2019_6.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2018_7.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2017_8.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2016_9.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2015_10.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2014_11.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2013_12.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2012_13.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_CertificadosRecepcinFinal_2011_14.set('fieldImages', {'fid': '', 'REGION': '', 'NOM_REGION': '', 'COMUNA': '', 'N_VIVIENDA': '', 'AÑO': '', 'cod_ah': '', 'com_ah': '', 'Area': '', 'com_sii': '', });
lyr_PermisosdeEdificacin_2023_15.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2022_16.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2021_17.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2020_18.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2019_19.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2018_20.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2017_21.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2016_22.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2015_23.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2014_24.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2013_25.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2012_26.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2011_27.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_PermisosdeEdificacin_2010_28.set('fieldImages', {'fid': '', 'COD REG': '', 'REGION': '', 'COD SII': '', 'COMUNA': '', 'AÑO': '', 'UNIDADES': '', 'PISOS': '', 'DESTINO': '', 'USO DEST': '', 'SUPERFICIE': '', });
lyr_CertificadosRecepcinFinal_2023_2.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'hidden field', 'COMUNA': 'inline label - always visible', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2022_3.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2021_4.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2020_5.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2019_6.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2018_7.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - always visible', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2017_8.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2016_9.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2015_10.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2014_11.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'inline label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2013_12.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - always visible', 'cod_ah': 'inline label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2012_13.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_CertificadosRecepcinFinal_2011_14.set('fieldLabels', {'fid': 'no label', 'REGION': 'header label - visible with data', 'NOM_REGION': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'N_VIVIENDA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'cod_ah': 'header label - visible with data', 'com_ah': 'header label - visible with data', 'Area': 'header label - visible with data', 'com_sii': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2023_15.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2022_16.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2021_17.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2020_18.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2019_19.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2018_20.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2017_21.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2016_22.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2015_23.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2014_24.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2013_25.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2012_26.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2011_27.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - always visible', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2010_28.set('fieldLabels', {'fid': 'no label', 'COD REG': 'no label', 'REGION': 'header label - visible with data', 'COD SII': 'header label - visible with data', 'COMUNA': 'header label - visible with data', 'AÑO': 'header label - visible with data', 'UNIDADES': 'header label - visible with data', 'PISOS': 'header label - visible with data', 'DESTINO': 'header label - visible with data', 'USO DEST': 'header label - visible with data', 'SUPERFICIE': 'header label - visible with data', });
lyr_PermisosdeEdificacin_2010_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});