var freeBus = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [112.97341892242432, 28.75383843460583],
                    [112.9708225440979, 28.751891803969535]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [112.9708225440979, 28.751891803969535],
                    [112.99820470809937, 28.22979664004068]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": true
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [112.99820470809937, 28.22979664004068],
                    [112.98689651489258, 28.221052354709055]
                ]
            },
            "properties": {
                "popupContent": "This is a free bus line that will take you across downtown.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};

var lightRailStop = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "popupContent": "18th & California Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [112.98999178409576, 28.22683938093904]
            }
        }, {
            "type": "Feature",
            "properties": {
                "popupContent": "20th & Welton Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [112.98689115047453, 28.227924136466565]
            }
        }
    ]
};

var bicycleRental = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    112.9998241,
                    28.2271494
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 51
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    112.9983545,
                    28.7502833
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 52
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    112.9963919,
                    28.2244271
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 54
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    112.9960754,
                    28.2298956
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 55
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    112.9933717,
                    28.2277264
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 57
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    112.9913392,
                    28.2232392
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 58
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    112.9788452,
                    28.6933755
                ]
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is a B-Cycle Station. Come pick up a bike and pay by the hour. What a deal!"
            },
            "id": 74
        }
    ]
};


var configs = {
    "MapID": "map",
    "developModel": true,
    "MapType": "TDT",
    "MapCRS": "WGS-84",
    "CenterPoint": [
        28.21347823,
        112.97935279
    ],
    "Zoom": 12,
    "GeoJSON_data": [
        {
            "click": function (e) {
                c2Map.addPopup(e.latlng.lat, e.latlng.lng, "<p>Hello world! Creat By ChinaCreator<br />当前元素为" + e.sourceTarget.feature.properties.popupContent + "</p>");
            },
            "defaultStyle": { //默认面样式  
                color: '#000000',
                fillColor: "#B0DE5C"
            },
            "overStyle": { //鼠标移入面样式  
                color: '#FF0000',
                fillColor: "#3388ff"
            },
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        112.894135,
                        28.131944
                    ],
                    [
                        112.953186,
                        28.148595
                    ],
                    [
                        113.016014,
                        28.157373
                    ]
                ]
            }
        }
    ]
};

var configg = {
    "MapID": "map",
    "developModel": true,
    "MapType": "TDT",
    "MapCRS": "WGS-84",
    "CenterPoint": [
        28.16433518951332,
        112.95936584472658
    ],
    "Zoom": 12,
    "GeoJSON_data": [
        {
            "click": function (e) {
                c2Map.addPopup(e.latlng.lat, e.latlng.lng, "<p>Hello world! Creat By ChinaCreator<br />当前元素为" + e.sourceTarget.feature.properties.popupContent + "</p>");
            },
            "defaultStyle": { //默认面样式  
                color: '#000000',
                fillColor: "#B0DE5C"
            },
            "overStyle": { //鼠标移入面样式  
                color: '#FF0000',
                fillColor: "#3388ff"
            },
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        112.928467,
                        28.171599
                    ],
                    [
                        112.971382,
                        28.205793
                    ],
                    [
                        112.985115,
                        28.197019
                    ],
                    [
                        112.988892,
                        28.176441
                    ]
                ]
            }
        },
        {
            "mouseover": "feamouseover",
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            112.841263,
                            28.154649
                        ],
                        [
                            112.841263,
                            28.164033
                        ],
                        [
                            112.853966,
                            28.164033
                        ],
                        [
                            112.853966,
                            28.154649
                        ],
                        [
                            112.841263,
                            28.154649
                        ]
                    ]
                ]
            }
        },
        {
            "icon": {
                iconUrl: '../Image/baseball-marker.png',//图片地址
                iconSize: [32, 37],                     //图标大小
                iconAnchor: [16, 37]                    //图标中心
            },
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    112.888985,
                    28.155557
                ]
            }
        }
    ]
};

var campus = {
    "type": "FeatureCollection",
    "features": [
        {
            "click": function (e) {
                app.Map.addPopup(e.latlng.lat, e.latlng.lng, "<p>Hello world! Creat By ChinaCreator<br />当前元素为" + e.sourceTarget.feature.properties.popupContent + "</p>");
            },
            "defaultStyle": { //默认面样式  
                color: '#000000',
                fillColor: "#B0DE5C"
            },
            "overStyle": { //鼠标移入面样式  
                color: '#000000',
                fillColor: "#3388ff"
            },
            "type": "Feature",
            "properties": {
                "popupContent": "This is the Auraria West Campus1",
                "style": {
                    weight: 2,
                    color: "#999",
                    opacity: 1,
                    fillColor: "#B0DE5C",
                    fillOpacity: 0.8
                }
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [112.97432014465332, 28.22732195489861],
                            [112.97715255737305, 28.22620006835170],
                            [112.97921249389647, 28.22468219277038],
                            [112.98067161560059, 28.22362625960105],
                            [112.98195907592773, 28.22290029616054],
                            [112.97989913940431, 28.22078835902781],
                            [112.97758171081543, 28.22059036160317],
                            [112.97346183776855, 28.22059036160317],
                            [112.97097274780272, 28.22059036160317],
                            [112.97062942504881, 28.22072235994946],
                            [112.97020027160645, 28.22191033368865],
                            [112.97071525573731, 28.22276830198601],
                            [112.97097274780272, 28.22369225589818],
                            [112.97097274780272, 28.22461619742136],
                            [112.97123023986816, 28.22534214278395],
                            [112.97183105468751, 28.22613407445653],
                            [112.97432014465332, 28.22732195489861]
                        ], [
                            [112.97361204147337, 28.22354376414072],
                            [112.97301122665405, 28.22278480127163],
                            [112.97221729278564, 28.22316428375108],
                            [112.97283956527711, 28.22390674342741],
                            [112.97361204147337, 28.22354376414072]
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "popupContent": "This is the Auraria West Campus2",
                "style": {
                    weight: 2,
                    color: "#999",
                    opacity: 1,
                    fillColor: "#B0DE5C",
                    fillOpacity: 0.8
                }
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [112.97942707061768, 28.21989736613708],
                            [112.97942707061768, 28.21910536278566],
                            [112.97685214996338, 28.21923736397631],
                            [112.97384807586671, 28.21910536278566],
                            [112.97174522399902, 28.21903936209552],
                            [112.97041484832764, 28.21910536278566],
                            [112.97041484832764, 28.21979836621592],
                            [112.97535011291504, 28.21986436617916],
                            [112.97942707061768, 28.21989736613708]
                        ]
                    ]
                ]
            }
        }, {
            "type": "Feature",
            "properties": {
                "popupContent": "This is the Auraria West Campus3",
                "style": {
                    weight: 2,
                    color: "#999",
                    opacity: 1,
                    fillColor: "#B0DE5C",
                    fillOpacity: 0.8
                }
            },
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [
                    [
                        [
                            [112.97361204147337, 28.22354376414072],
                            [112.97301122665405, 28.22278480127163],
                            [112.97221729278564, 28.22316428375108],
                            [112.97283956527711, 28.22390674342741],
                            [112.97361204147337, 28.22354376414072]
                        ]
                    ]
                ]
            }
        },
    ]
};

// var campus2 = {
//     "type": "FeatureCollection",
//     "features": [
//         {
//             "type": "Feature",
//             "properties": {
//                 "popupContent": "This is the Auraria West Campus1",
//                 "style": {
//                     weight: 2,
//                     color: "#999",
//                     opacity: 1,
//                     fillColor: "#B0DE5C",
//                     fillOpacity: 0.8
//                 }
//             },
//             "geometry": {
//                 "type": "MultiPolygon",
//                 "coordinates": [
//                     [
//                         [
//                             [113.97432014465332, 29.22732195489861],
//                             [113.97715255737305, 29.22620006835170],
//                             [113.97921249389647, 29.22468219277038],
//                             [113.98067161560059, 29.22362625960105],
//                             [113.98195907592773, 29.22290029616054],
//                             [113.97989913940431, 29.22078835902781],
//                             [113.97758171081543, 29.22059036160317],
//                             [113.97346183776855, 29.22059036160317],
//                             [113.97097274780272, 29.22059036160317],
//                             [113.97062942504881, 29.22072235994946],
//                             [113.97020027160645, 29.22191033368865],
//                             [113.97071525573731, 29.22276830198601],
//                             [113.97097274780272, 29.22369225589818],
//                             [113.97097274780272, 29.22461619742136],
//                             [113.97123023986816, 29.22534214278395],
//                             [113.97183105468751, 29.22613407445653],
//                             [113.97432014465332, 29.22732195489861]
//                         ], [
//                             [113.97361204147337, 29.22354376414072],
//                             [113.97301132665405, 29.22278480127163],
//                             [113.97221729278564, 29.22316429375108],
//                             [113.97293956527711, 29.22390674342741],
//                             [113.97361204147337, 29.22354376414072]
//                         ]
//                     ]
//                 ]
//             }
//         }
//     ]
// };

var coorsField = {
    "type": "Feature",
    "properties": {
        "popupContent": "Coors Field",
        "color": "red"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [112.99404191970824, 28.226213909328125]
    }
};

var Point = {
    "type": "Feature",
    "properties": {
    },
    "geometry": {
        "type": "Point",
        "coordinates": [112.99404191970824, 28.226213909328125]
    }
};


var PointItem = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [112.9998241, 28.2271494]
            },
            "type": "Feature",
            "properties": {
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [112.9983545, 28.7502833]
            },
            "type": "Feature",
            "properties": {
            }
        }
    ]
};


// { "MapID": "map2", "MapType": "TDT", "CRS": "WGS-84", "Zoom": 15, "MaxZoom": 18, "MinZoom": 5, "CenterPoint": [28.21347823, 112.97935279], "isChange": true, "isScale": true, "isZoom": true, "developModel": false, "MapCRS": "WGS-84", "GeoJSON_point": [], "GeoJSON_line": [], "GeoJSON_polygon": [{ "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[112.978592, 28.217252], [112.978592, 28.221374], [112.982454, 28.221374], [112.982454, 28.217252], [112.978592, 28.217252]]] } }] }


// [112.962799, 28.210558]
// 1
// :
// (2) [112.962799, 28.212752]