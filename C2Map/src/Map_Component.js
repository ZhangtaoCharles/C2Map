
/*
Config属性说明
MaxZoom : 地图最大缩放级别（级别越大，比例尺越大）数字类型 缺省值：18 非必填
MinZoom : 地图最小缩放级别（级别越小，比例尺越小）数字类型 缺省值：5  非必填
MapID   ：当前承载对应地图容器的DIV的ID 唯一 字符串类型  必填
Zoom    ：当前地图缩放级别 数字类型 缺省值为12 非必填
isZoom  ：当前地图是否显示地图自带的默认缩放控制器，Boolean类型 缺省值为true 非必填
isScale ：当前地图是否显示地图自带的默认比例尺（左下角） Boolean类型 缺省值为true 非必填
isChange：当前地图是否支持地图切换 （右上角） Boolean类型 缺省值为true 非必填
MapType ：当前地图加载的地图来源 字符串类型 缺省值为TDT(天地图) 非必填
CenterPoint：当前地图中心点 一般结合缩放级别定位到指定地方。 LatLng 为空时将根据IP通过百度地图API查询当前中心点位置 非必填
*/

/*
公开事件：
Map对象
resize    ：调整地图大小时触发
viewreset ：当地图需要重新绘制其内容时（这通常发生在地图缩放或加载上）时触发
load      ：初始化地图时（第一次设置中心和缩放时）触发。
zoomstart ：地图缩放即将改变时（例如缩放地图之前）触发。
movestart ：当地图视图开始变化时（例如，用户开始拖动地图）触发。
zoom 	  ：在缩放级别发生任何变化时反复发射，如鼠标滚轮控制放大缩小时 反复触发。
move 	  ：在地图的任何移动过程中反复发射，如用户拖拽地图时 反复触发。
zoomend   ：地图缩放控制之后，当地图放缩结束时触发。
moveend   ：地图中心停止改变时（例如，用户停止拖动地图）触发。

冒泡窗体相关事件
popupopen    ：	在地图中打开弹出窗口时触发
popupclose 	 ：	当地图中的弹出窗口关闭时触发
autopanstart ： 当地图在打开弹出窗口时开始自动平移时触发。

Map对象方法

addControl(<Control> control)	 将给定的控件添加到地图
示例添加比例尺控件 左下角
map.addControl(L.control.scale());

removeControl(<Control> control) 从地图中删除给定的控件
示例移除比例尺控件 左下角
map.removeControl(L.control.scale());

openPopup(<Popup> popup)		打开指定的弹出窗口，同时关闭先前打开的窗口（确保一次只打开一个用于可用性）。

openPopup(<String|HTMLElement> content, <LatLng> latlng, <Popup options> options?)		用指定的内容和选项创建一个弹出窗口，并在地图上的给定点中打开它。

closePopup(<Popup> popup?)		关闭以前用openPopup（或给定的）打开的弹出窗口。

setView(<LatLng> center, <Number> zoom)	使用给定的动画选项设置地图视图（地理中心和缩放）。

setZoom(<Number> zoom)		设置地图的缩放。

panTo(<LatLng> latlng)		将地图拖到指定的中心。

flyTo(<LatLng> latlng, <Number> zoom)	设置地图视图（地理中心和缩放）执行平滑的平移缩放动画。

setMinZoom(<Number> zoom)	设置可用缩放级别的下限（修改初始化地图最小缩放级别）。

setMaxZoom(<Number> zoom)	设置可用缩放级别的上限（修改初始化地图最大缩放级别）。

stop()	如果有的话，停止当前运行panTo或flyTo动画。

自定义添加的GeoJson数据
//添加面数据   addPolygonLineData(<Object> geojson,<Object> FeatureEventsys) 
参数示例：
var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
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
                            [113.97432014465332, 29.22732195489861],
                            [113.97715255737305, 29.22620006835170],                        
                            [113.97123023986816, 29.22534214278395],
                            [113.97183105468751, 29.22613407445653],
                            [113.97432014465332, 29.22732195489861]
                        ]
                    ]
                ]
            }
        }
    ]
};

var FeatureEventsys = {
    //传入点击处理函数
        "click": function (e) {
            app.Map.addPopup(e.latlng.lat, e.latlng.lng, "<p>Hello world! Creat By ChinaCreator<br />当前元素为" + e.sourceTarget.feature.properties.popupContent + "</p>");
        },   
        //设置mouseover事件自定义监听 通过Map对象回调传入事件
        "mouseover": "featuresmouseover", //鼠标移入自定义监听
        "defaultStyle": { //默认面样式  
            color: '#000000',
            fillColor: "#B0DE5C"
        },
        "overStyle": { //鼠标移入面样式  
            color: '#000000',
            fillColor: "#3388ff"
        }
    };

//添加点数据   addPointData(<Object> geojson,<Object> FeatureEventsys) 
//点符号 设置点图片
 var iconsys = {
        iconUrl: '../Image/baseball-marker.png',//图片地址
        iconSize: [32, 37],                     //图标大小
        iconAnchor: [16, 37]                    //图标中心
    };
    var FeatureEventsys = {
        "click": "FeatureClick2",   //点击事件自定义监听 通过Map回调
         "mouseover": "featuresmouseover2",
        "icon": iconsys   //非空时显示Map默认点图标
    };

    var geojson = {
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


添加点标记
示例：L.marker([e.latlng.lat, e.latlng.lng]).addTo(Map).on('click', function (e) {
            //点击事件
            alert("这个marker被点击了！")
        });


*/
// (function ($) {
//     $.fn.Map = function (options, param) {
//         return InitMap(options);
//     }
// })(jQuery);
C2Map = function (Config) {
    //如果DIVID为空 或根据ID找不到对应DIV
    if (Config.MapID == null || Config.MapID == "" || !$('#' + Config.MapID).length > 0) {
        return;
    }
    var developModel = (Config.developModel == null) ? false : Config.developModel;

    //地图最大级别
    var maxZoom = (Config.MaxZoom == null) ? 18 : Config.MaxZoom;
    //地图最小级别
    var minZoom = (Config.MinZoom == null) ? 5 : Config.MinZoom;

    var MapID = (Config.MapID == null) ? "" : Config.MapID;
    //当前地图缩放级别
    var zoom = (Config.Zoom == null) ? 12 : Config.Zoom;
    //是否显示左上角放大缩小控制器
    var isZoom;
    if (Config.isZoom == null) {
        isZoom = true;
        Config.isZoom = true;
    }
    else {
        isZoom = false;
        Config.isZoom = false;
    }
    //是否显示比例尺
    var isScale = (Config.isScale == null) ? true : Config.isScale;
    //是否支持地图切换
    var isChange = (Config.isChange == null) ? true : Config.isChange;
    var VectorMap, ImageMap, baseLayers;//矢量地图、影像地图、基础图层组
    var VectorMap_TDT, VectorMap_Baidu, VectorMap_Geogle, VectorMap_GD;
    //初始化加载地图类型 缺省值为天地图
    var MapType = (Config.MapType == null) ? "TDT" : Config.MapType;
    var map, crs;
    //天地图
    var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
        maxZoom: maxZoom,
        minZoom: minZoom
    }),
        normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
            maxZoom: maxZoom,
            minZoom: minZoom
        });
    VectorMap_TDT = L.layerGroup([normalm, normala]);
    //谷歌
    VectorMap_Geogle = L.tileLayer.chinaProvider('Google.Normal.Map', {
        maxZoom: maxZoom,
        minZoom: minZoom
    })
    //高德
    VectorMap_GD = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
        maxZoom: maxZoom,
        minZoom: minZoom
    });
    baseLayers = {
        "天地图": VectorMap_TDT,
        "谷歌": VectorMap_Geogle,
        "高德": VectorMap_GD
    };
    switch (MapType) {
        //天地图
        case "TDT":
            map = L.map(MapID, {
                layers: [VectorMap_TDT],
                zoomControl: isZoom,
                attributionControl: false
            });
            map.MapType = "TDT";
            map.MapCRS = "WGS-84";
            break;
        //高德地图
        case "GD":
            map = L.map(MapID, {
                layers: [VectorMap_GD],
                zoomControl: isZoom,
                attributionControl: false
            });
            map.MapType = "GD";
            map.MapCRS = "GCJ-02";
            break;
        //谷歌
        case "Geogle":
            map = L.map(MapID, {
                layers: [VectorMap_Geogle],
                zoomControl: isZoom,
                attributionControl: false
            });
            map.MapType = "Geogle";
            map.MapCRS = "GCJ-02";
            break;
    }

    //初始中心点配置为空的话默认中心点为通过百度地图API去获取当前城市
    var center;
    if (Config.CenterPoint == null) {
        $.ajax({
            type: "GET",
            url: "http://api.map.baidu.com/location/ip?ak=KS0vZOE3RdV4G5PNAHhVwUYC&coor=bd09ll",
            dataType: "jsonp",
            success: function (data) {
                center = [data.content.point.y, data.content.point.x];
                map.setView(center, zoom);
            },
            error: function () {
                center = [39.90707801584166, 116.39136493206026];
                map.setView(center, zoom);
            }

        });
    } else {
        center = Config.CenterPoint;
        map.setView(center, zoom);
    }
    //切换地图
    if (isChange) {
        map.layercontrol = L.control.layers(baseLayers, null);
        map.addControl(map.layercontrol);
        Config.isChange = true;
    } //比例尺
    if (isScale) {
        map.scalecontrol = L.control.scale();
        map.addControl(map.scalecontrol);
        Config.isScale = true;
    }
    map.on('baselayerchange', function (e) {
        if (e.name == "天地图") {
            map.MapType = "TDT";
            if (map.MapCRS != "WGS-84") {
                if (map.drawnItems != undefined) {
                    //绘图数据进行坐标转换
                    draw_data_changeCRS(map, "GCJ02-WGS84");
                }
                //需要将现有地图数据进行坐标转换并重新绘制
                GeoJSON_data_changeCRS(map, "GCJ02-WGS84");
            }
            map.MapCRS = "WGS-84";
        }
        else if (e.name == "高德") {
            map.MapType = "GD";
            if (map.MapCRS != "GCJ-02") {
                if (map.drawnItems != undefined) {
                    //绘图数据进行坐标转换
                    draw_data_changeCRS(map, "WGS84-GCJ02");
                }
                //需要将现有地图数据进行坐标转换并重新绘制
                GeoJSON_data_changeCRS(map, "WGS84-GCJ02");
            }
            //转换完数据之后 将数据重绘到地图上 并将当前坐标系改成对应底图坐标系 
            map.MapCRS = "GCJ-02";
        } else if (e.name == "谷歌") {
            map.MapType = "Geogle";
            if (map.MapCRS != "GCJ-02") {
                if (map.drawnItems != undefined) {
                    //绘图数据进行坐标转换
                    draw_data_changeCRS(map, "WGS84-GCJ02");
                }
                //需要将现有地图数据进行坐标转换并重新绘制
                GeoJSON_data_changeCRS(map, "WGS84-GCJ02");
            }
            //转换完数据之后 将数据重绘到地图上 并将当前坐标系改成对应底图坐标系 
            map.MapCRS = "GCJ-02";
        }
    });
    //开发者模式
    if (developModel) {
        var mapsys = $('<div class="mapsys"></div>').appendTo($("#" + Config.MapID));
        mapsys.mouseover(function () {
            map.scrollWheelZoom.disable();
            map.doubleClickZoom.disable();
            map.dragging.disable();
        });
        mapsys.mouseout(function () {
            map.scrollWheelZoom.enable();
            map.doubleClickZoom.enable();
            map.dragging.enable();
        });
        var scalecheck = $('<input type="checkbox" checked="checked" />').appendTo(mapsys);
        scalecheck.click(function () {
            if (!scalecheck.is(':checked')) {
                map.removeControl(map.scalecontrol);
            } else map.addControl(map.scalecontrol);
            map.Config.isScale = scalecheck.is(':checked');
        });
        var scalelabel = $('<label> 显示比例尺</label>').appendTo(mapsys);
        var zoomcheck = $('<input type="checkbox" checked="checked"/>').appendTo(mapsys);
        zoomcheck.click(function () {
            if (!zoomcheck.is(':checked')) {
                map.zoomControl.remove();
            } else map.addControl(map.zoomControl);
            map.Config.isZoom = zoomcheck.is(':checked');
        });
        var zoomlabel = $('<label>显示缩放控制器</label>').appendTo(mapsys);
        var changecheck = $('<input type="checkbox" checked="checked" />').appendTo(mapsys);
        changecheck.click(function () {
            if (!changecheck.is(':checked')) {
                map.removeControl(map.layercontrol);
            } else map.addControl(map.layercontrol);
            map.Config.isChange = changecheck.is(':checked');
        });
        var changelabel = $('<label>支持切换地图</label>').appendTo(mapsys);
        var getConfigButton = $('<input type="button" value="获取地图配置" />').appendTo(mapsys);
        //配置文件容器
        var configcontainer = $('<div class="mapconfigcontainer"></div>').appendTo($("#" + Config.MapID));
        var closebutton = $('<a>关闭</a>').appendTo(configcontainer);
        closebutton.click(function () {
            configcontainer.hide();
        });
        var title = $('<h1 >地图配置</h1>').appendTo(configcontainer);
        var configdiv = $('<div class="mapconfig"></div>').appendTo(configcontainer);
        configcontainer.mouseover(function () {
            map.scrollWheelZoom.disable();
            map.doubleClickZoom.disable();
            map.dragging.disable();
        });
        configcontainer.mouseout(function () {
            map.scrollWheelZoom.enable();
            map.doubleClickZoom.enable();
            map.dragging.enable();
        });
        var textarea = $('<textarea></textarea>').appendTo(configdiv);
        var mapconfigbuttondiv = $('<div class="mapconfigbutton"></div>').appendTo(configcontainer);
        var applyconfig = $('<input type="button" value="应用配置" />').appendTo(mapconfigbuttondiv);
        applyconfig.click(function () {
            debugger;
            var newconfig = JSON.parse(textarea.val());
            map.reloadconfig(newconfig);
        });
        var selectall = $('<input type="button" value="全选" />').appendTo(mapconfigbuttondiv);
        selectall.click(function () {
            textarea.select();
        });
        var copy = $('<input type="button" value="复制" />').appendTo(mapconfigbuttondiv);
        copy.click(function () {
            var selectstr = window.getSelection().toString();
            if (selectstr != null && selectstr != "") {
                document.execCommand("Copy"); // 执行浏览器复制命令
                alert("复制成功!");
            }
            else {
                alert("请选择要复制的内容!");
            }
        });
        getConfigButton.click(function () {
            var mapconfig = map.Config;
            mapconfig.MapType = map.MapType;
            mapconfig.CenterPoint = [map.getCenter().lat, map.getCenter().lng];
            mapconfig.Zoom = map.getZoom();
            mapconfig.MinZoom = map.getMinZoom();
            mapconfig.MaxZoom = map.getMaxZoom();
            mapconfig.developModel = false;
            mapconfig.GeoJSON_data = new Array();
            //获得用户绘制数据
            for (var i = 0; i < map.drawnItems.getLayers().length; i++) {
                mapconfig.GeoJSON_data.push(map.drawnItems.getLayers()[i].toGeoJSON());
            }
            //获取用户配置加载数据
            for (var i = 0; i < map._GeojsonLayerItem.length; i++) {
                mapconfig.GeoJSON_data.push(map._GeojsonLayerItem[i].toGeoJSON());
            }
            //显示配置文件内容
            configcontainer.show();

            //输出配置
            console.log(JSON.stringify(mapconfig));
            var result = JSON.stringify(mapconfig, null, 2);//将json对象转换成标准格式化json字符串  
            textarea[0].value = result;
        });
        map.drawnItems = L.featureGroup().addTo(map);
        map.drawControl = new L.Control.Draw({
            edit: {
                featureGroup: map.drawnItems,
                poly: {
                    allowIntersection: false
                }
            },
            draw: {
                polygon: {
                    allowIntersection: false,
                    showArea: true
                }
            }
        });
        map.addControl(map.drawControl);
        map.drawControl.setPosition("bottomright");

        map.on(L.Draw.Event.CREATED, function (event) {
            map.drawnItems.addLayer(event.layer);
        });
    }

    //加载数据
    map.addConfigData(Config.GeoJSON_data);

    map.Config = Config;
    //提供方法
    function addPolygonLineData(Features, Eventsys) {
        map.addPolygonLineData(Features, Eventsys);
    }
    function addPointData(Features, Eventsys) {
        map.addPointData(Features, Eventsys);
    }
    function addGeoJSONdata(Features, Eventsys) {
        map.addGeoJSONdata(Features, Eventsys);
    }
    function addPopup(x, y, content) {
        map.addPopup(x, y, content);
    }
    function removePopup() {
        map.removePopup();
    }
    function setPopupLatLng(x, y) {
        map.setPopupLatLng(x, y);
    }
    function getMapBounds() {
        map.getMapBounds();
    }
    function setMapBounds(Minx, Miny, Maxx, Maxy) {
        map.setMapBounds(Minx, Miny, Maxx, Maxy);
    }



    return {
        leaflet: map,
        addPolygonLineData: addPolygonLineData,
        addPointData: addPointData,
        addGeoJSONdata: addGeoJSONdata,
        addPopup: addPopup,
        removePopup: removePopup,
        setPopupLatLng: setPopupLatLng,
        getMapBounds: getMapBounds,
        setMapBounds: setMapBounds
    }
}
L.Map.include({
    // Adding a new property to the class  
    _ClickFeature: null, //点击要素

    // _DrawnItems:L.featureGroup(),

    _Popup: null,  //弹出框

    _GeojsonLayerItem: new Array(),  //用户添加数据图层集合

    _GeojsonFeaturesItem: new Array(), //用户添加数据集合

    addPolygonLineData: function (Features, Eventsys) {
        var $this = this;
        var mouselayer = null;
        var defaultStyle, overStyle;
        if (Eventsys == null || Eventsys == undefined) {
            Eventsys = {};
        }
        var geojsonlayer = L.geoJSON(Features, {
            style: function (feature) {
                if (Eventsys.defaultStyle == undefined || Eventsys.defaultStyle == null) defaultStyle = { //默认面样式  
                    color: '#000000',
                    fillColor: "#B0DE5C"
                };
                else defaultStyle = Eventsys.defaultStyle;
                return defaultStyle;
            }
        })
            .on('mouseover', function (e) {
                //当前要素
                if (mouselayer != null) mouselayer.clearLayers();
                mouselayer = L.geoJSON(e.sourceTarget.feature, {
                    style: function (feature) {
                        if (Eventsys.overStyle == undefined || Eventsys.overStyle == null) overStyle = { //选择面样式  
                            color: '#000000',
                            fillColor: "#3388ff"
                        };
                        else overStyle = Eventsys.overStyle;
                        return overStyle;
                    }
                });
                mouselayer.on('mouseover', function (e) {
                    if (Eventsys.mouseover != null) {
                        if (typeof (Eventsys.mouseover) != "string") {
                            Eventsys.mouseover(e);
                        }
                        else if (Eventsys.mouseover.indexOf("function") == -1) $this.fire(Eventsys.mouseover, e);
                        else if (Eventsys.mouseover.indexOf("function") != -1) {
                            var funstr = Eventsys.mouseover.substring(Eventsys.mouseover.indexOf("{") + 1, Eventsys.mouseover.indexOf("}"));
                            eval(funstr);
                        }
                    }
                });
                mouselayer.on('mousemove', function (e) {
                    if ($this._Popup != null) $this.setPopupLatLng(e.latlng.lat, e.latlng.lng);
                });
                mouselayer.on('mouseout', function () {
                    if ($this._Popup != null) $this.removePopup();
                    mouselayer.clearLayers();
                }).on('click', function (e) {
                    //当前点击的要素
                    $this._ClickFeature = e.sourceTarget.feature;
                    if (Eventsys.click != null) {
                        if (typeof (Eventsys.click) != "string") {
                            Eventsys.click(e);
                        }
                        else if (Eventsys.click.indexOf("function") == -1) $this.fire(Eventsys.click, e);
                        else if (Eventsys.click.indexOf("function") != -1) {
                            var funstr = Eventsys.click.substring(Eventsys.click.indexOf("{") + 1, Eventsys.click.indexOf("}"));
                            eval(funstr);
                        }
                    }
                });
                mouselayer.addTo($this);
            }).addTo($this);
        $this._GeojsonLayerItem.push(geojsonlayer);
        $this._GeojsonFeaturesItem.push(Features);
    },

    addPointData: function (Features, Eventsys) {
        var $this = this;
        var options = null;
        if (Eventsys.icon != null) {
            options = {
                pointToLayer: function (feature, latlng) {
                    return L.marker(latlng, { icon: L.icon(Eventsys.icon) });
                }
            };
        }
        var geojsonlayer = L.geoJSON(Features, options);
        geojsonlayer.on('click', function (e) {
            $this._ClickFeature = e.sourceTarget.feature;
            if (Eventsys.click != null) {
                if (typeof (Eventsys.click) != "string") {
                    Eventsys.click(e);
                }
                else if (Eventsys.click.indexOf("function") == -1) $this.fire(Eventsys.click, e);
                else if (Eventsys.click.indexOf("function") != -1) {
                    var funstr = Eventsys.click.substring(Eventsys.click.indexOf("{") + 1, Eventsys.click.indexOf("}"));
                    eval(funstr);
                }
            }
        }).on('mouseover', function (e) {
            if (Eventsys.mouseover != null) {
                if (typeof (Eventsys.mouseover) != "string") {
                    Eventsys.mouseover(e);
                }
                else if (Eventsys.mouseover.indexOf("function") == -1) $this.fire(Eventsys.mouseover, e);
                else if (Eventsys.mouseover.indexOf("function") != -1) {
                    var funstr = Eventsys.mouseover.substring(Eventsys.mouseover.indexOf("{") + 1, Eventsys.mouseover.indexOf("}"));
                    eval(funstr);
                }
            }
        });

        geojsonlayer.addTo($this);
        $this._GeojsonLayerItem.push(geojsonlayer);
        $this._GeojsonFeaturesItem.push(Features);
    },
    addGeoJSONdata: function (Features) {
        var $this = this;
        var geojsonlayer = L.geoJSON(Features, null).addTo(this);
        $this._GeojsonLayerItem.push(geojsonlayer);
        $this._GeojsonFeaturesItem.push(Features);
        return geojsonlayer;
    },


    addPopup: function (x, y, content) {
        var popup = L.popup()
            .setLatLng(L.latLng(x, y))
            .setContent(content)
            .openOn(this);
        this._Popup = popup;
    },
    removePopup: function () {
        this._Popup.remove();
    },
    setPopupLatLng: function (x, y) {
        this._Popup.setLatLng(L.latLng(x, y));
    },
    getMapBounds: function () {
        var bounds = this.getBounds();
        return {
            Minx: bounds._southWest.lat,
            Miny: bounds._southWest.lng,
            Maxx: bounds._northEast.lat,
            Maxy: bounds._northEast.lng
        };
    },
    setMapBounds: function (Minx, Miny, Maxx, Maxy) {
        var corner1 = L.latLng(Minx, Miny),
            corner2 = L.latLng(Maxx, Maxy),
            bounds = L.latLngBounds(corner1, corner2);
        this.fitBounds(bounds);
    },
    reloadconfig: function (Config) {
        if (Config == undefined || Config == null) return;
        //切换地图
        if (Config.isChange) {
            this.addControl(this.layercontrol);
            this.Config.isChange = true;
        } else {
            this.removeControl(this.layercontrol);
            this.Config.isChange = false;
        }
        //比例尺
        if (Config.isScale) {
            this.addControl(this.scalecontrol);
            this.Config.isScale = true;
        } else {
            this.removeControl(this.scalecontrol)
            this.Config.isScale = false;
        }     //缩放
        if (Config.isZoom) {
            this.addControl(this.zoomControl);
            this.Config.isZoom = true;
        } else {
            this.zoomControl.remove();
            this.Config.isZoom = false;
        }
        if (Config.Zoom != null) {
            this.setZoom(Config.Zoom);
        }
        if (Config.CenterPoint != null) {
            this.setView(Config.CenterPoint,Config.Zoom);
        }
        if (Config.MinZoom != null) {
            this.setMinZoom(Config.MinZoom);
        }
        if (Config.MaxZoom != null) {
            this.setMaxZoom(Config.MaxZoom);
        }
        if (Config.GeoJSON_data != null) {
            this.clearData();
            //加载数据
            this.addConfigData(Config.GeoJSON_data);
        }       
    },
    clearData: function () {
        for (var i = 0; i < this._GeojsonLayerItem.length; i++) {
            this._GeojsonLayerItem[i].clearLayers();
        }
        if (this.drawnItems != undefined) this.drawnItems.clearLayers();
    },

    addConfigData: function (ConfigData) {
        if (ConfigData == null || ConfigData == undefined) return;
        var $this = this;
        for (var i = 0; i < ConfigData.length; i++) {
            if (ConfigData[i].type == "FeatureCollection") {
                for (var j = 0; j < ConfigData[i].features.length; j++) {
                    adddata(ConfigData[i].features[j]);                   
                }
            }
            else if (ConfigData[i].type == "Feature") {
                adddata(ConfigData[i]);
            }
        }
        function adddata(feature) {
            if (feature.geometry.type == "Polygon") {
                var PolygonEventsys = {
                    "click": feature.click,   //点击事件自定义监听
                    "mouseover": feature.mouseover, //鼠标移入自定义监听
                    "defaultStyle": feature.defaultStyle, //默认样式
                    "overStyle": feature.overStyle        //移入样式
                };
                $this.addPolygonLineData(feature, PolygonEventsys);
            }
            else if (feature.geometry.type == "Point") {
                var PointEventsys = {
                    "click": feature.click,   //点击事件自定义监听
                    "mouseover": feature.mouseover, //鼠标移入自定义监听
                    "icon": feature.icon
                };
                $this.addPointData(feature, PointEventsys);
            }
            else if (feature.geometry.type == "LineString") {
                var PolygonEventsys = {
                    "click": feature.click,   //点击事件自定义监听
                    "mouseover": feature.mouseover, //鼠标移入自定义监听
                    "defaultStyle": feature.defaultStyle, //默认样式
                    "overStyle": feature.overStyle        //移入样式
                };
                $this.addPolygonLineData(feature, PolygonEventsys);
            }
        }
    }
});

function draw_data_changeCRS(map, type) {
    var point;
    var _c2changecrs = new C2ChangeCRS();
    for (var i = 0; i < map.drawnItems.getLayers().length; i++) {
        if (map.drawnItems.getLayers()[i]._latlng != undefined) {
            var latlng = map.drawnItems.getLayers()[i].getLatLng();
            if (type == "WGS84-GCJ02") {
                point = _c2changecrs.wgs84togcj02(latlng.lng, latlng.lat);
            }
            else if (type == "GCJ02-WGS84") {
                point = _c2changecrs.gcj02towgs84(latlng.lng, latlng.lat);
            }
            latlng.lng = point[0];
            latlng.lat = point[1];
            map.drawnItems.getLayers()[i].setLatLng(latlng);
        }
        else if (map.drawnItems.getLayers()[i]._latlngs != undefined) {
            var latlngs = map.drawnItems.getLayers()[i].getLatLngs();
            for (var j = 0; j < latlngs.length; j++) {
                //转换面
                if (latlngs[j].length > 0) {
                    for (var k = 0; k < latlngs[j].length; k++) {
                        if (type == "WGS84-GCJ02") {
                            point = _c2changecrs.wgs84togcj02(latlngs[j][k].lng, latlngs[j][k].lat);
                        }
                        else if (type == "GCJ02-WGS84") {
                            point = _c2changecrs.gcj02towgs84(latlngs[j][k].lng, latlngs[j][k].lat);
                        }
                        latlngs[j][k].lng = point[0];
                        latlngs[j][k].lat = point[1];
                    }
                }
                //转换线
                else {
                    if (type == "WGS84-GCJ02") {
                        point = _c2changecrs.wgs84togcj02(latlngs[j].lng, latlngs[j].lat);
                    }
                    else if (type == "GCJ02-WGS84") {
                        point = _c2changecrs.gcj02towgs84(latlngs[j].lng, latlngs[j].lat);
                    }
                    latlngs[j].lng = point[0];
                    latlngs[j].lat = point[1];
                }
            }
            map.drawnItems.getLayers()[i].setLatLngs(latlngs);
        }
    }
}

function GeoJSON_data_changeCRS(map, type) {
    var point;
    var _c2changecrs = new C2ChangeCRS();
    for (var k = 0; k < map._GeojsonLayerItem.length; k++) {
        var fea = map._GeojsonLayerItem[k].toGeoJSON();
        //将之前加载的数据清空
        map._GeojsonLayerItem[k].clearLayers();
        if (fea.type == "Feature") {
            if (fea.geometry.type == "Point") {
                if (fea.geometry.coordinates.length > 0) {
                    if (type == "GCJ02-WGS84") {
                        point = _c2changecrs.gcj02towgs84(fea.geometry.coordinates[0], fea.geometry.coordinates[1]);
                    } else if (type == "WGS84-GCJ02") {
                        point = c2changecrs.wgs84togcj02(fea.geometry.coordinates[0], fea.geometry.coordinates[1]);
                    }
                    fea.geometry.coordinates[0] = point[0];
                    fea.geometry.coordinates[1] = point[1];
                    //重新加载转换后的数据
                    map._GeojsonLayerItem[k].addData(fea);
                }
            }
            else if (fea.geometry.type == "LineString") {
                if (fea.geometry.coordinates.length > 1) {
                    for (var j = 0; j < fea.geometry.coordinates.length; j++) {
                        if (type == "GCJ02-WGS84") {
                            point = _c2changecrs.gcj02towgs84(fea.geometry.coordinates[j][0], fea.geometry.coordinates[j][1]);
                        } else if (type == "WGS84-GCJ02") {
                            point = _c2changecrs.wgs84togcj02(fea.geometry.coordinates[j][0], fea.geometry.coordinates[j][1]);
                        } fea.geometry.coordinates[j][0] = point[0];
                        fea.geometry.coordinates[j][1] = point[1];
                    }
                    //重新加载转换后的数据
                    map._GeojsonLayerItem[k].addData(fea);
                }
            }
            else if (fea.geometry.type == "Polygon") {
                if (fea.geometry.coordinates.length > 0) {
                    for (var j = 0; j < fea.geometry.coordinates[0].length - 1; j++) {
                        if (type == "GCJ02-WGS84") {
                            point = _c2changecrs.gcj02towgs84(fea.geometry.coordinates[0][j][0], fea.geometry.coordinates[0][j][1]);
                        } else if (type == "WGS84-GCJ02") {
                            point = _c2changecrs.wgs84togcj02(fea.geometry.coordinates[0][j][0], fea.geometry.coordinates[0][j][1]);
                        }
                        fea.geometry.coordinates[0][j][0] = point[0];
                        fea.geometry.coordinates[0][j][1] = point[1];
                    }
                    //重新加载转换后的数据
                    map._GeojsonLayerItem[k].addData(fea);
                }
            }
        }
        if (fea.type == "FeatureCollection") {
            for (var i = 0; i < fea.features.length; i++) {
                if (fea.features[i].geometry.type == "Point") {
                    if (fea.features[i].geometry.coordinates.length > 0) {
                        if (type == "GCJ02-WGS84") {
                            point = _c2changecrs.gcj02towgs84(fea.features[i].geometry.coordinates[0], fea.features[i].geometry.coordinates[1]);
                        } else if (type == "WGS84-GCJ02") {
                            point = _c2changecrs.wgs84togcj02(fea.features[i].geometry.coordinates[0], fea.features[i].geometry.coordinates[1]);
                        }
                        fea.features[i].geometry.coordinates[0] = point[0];
                        fea.features[i].geometry.coordinates[1] = point[1];
                        //重新加载转换后的数据
                        map._GeojsonLayerItem[k].addData(fea.features[i]);
                    }
                }
                else if (fea.features[i].geometry.type == "LineString") {
                    if (fea.features[i].geometry.coordinates.length > 1) {
                        for (var j = 0; j < fea.features[i].geometry.coordinates.length; j++) {
                            if (type == "GCJ02-WGS84") {
                                point = _c2changecrs.gcj02towgs84(fea.features[i].geometry.coordinates[j][0], fea.features[i].geometry.coordinates[j][1]);
                            } else if (type == "WGS84-GCJ02") {
                                point = _c2changecrs.wgs84togcj02(fea.features[i].geometry.coordinates[j][0], fea.features[i].geometry.coordinates[j][1]);
                            }
                            fea.features[i].geometry.coordinates[j][0] = point[0];
                            fea.features[i].geometry.coordinates[j][1] = point[1];
                        }
                        //重新加载转换后的数据
                        map._GeojsonLayerItem[k].addData(fea.features[i]);
                    }
                }
                else if (fea.features[i].geometry.type == "Polygon") {
                    if (fea.features[i].geometry.coordinates.length > 0) {
                        for (var j = 0; j < fea.features[i].geometry.coordinates[0].length - 1; j++) {
                            if (type == "GCJ02-WGS84") {
                                point = _c2changecrs.gcj02towgs84(fea.features[i].geometry.coordinates[0][j][0], fea.features[i].geometry.coordinates[0][j][1]);
                            } else if (type == "WGS84-GCJ02") {
                                point = _c2changecrs.wgs84togcj02(fea.features[i].geometry.coordinates[0][j][0], fea.features[i].geometry.coordinates[0][j][1]);
                            }
                            fea.features[i].geometry.coordinates[0][j][0] = point[0];
                            fea.features[i].geometry.coordinates[0][j][1] = point[1];
                        }
                        //重新加载转换后的数据
                        map._GeojsonLayerItem[k].addData(fea.features[i]);
                    }
                }
            }
        }
    }
}

var C2ChangeCRS = function () {
    var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
    var PI = 3.1415926535897932384626;
    var a = 6378245.0;
    var ee = 0.00669342162296594323;
    /**
     * WGS84转GCj02
     * @param lng
     * @param lat
     * @returns {*[]}
     */
    this.wgs84togcj02 = function (lng, lat) {
        if (out_of_china(lng, lat)) {
            return [lng, lat]
        }
        else {
            var dlat = transformlat(lng - 105.0, lat - 35.0);
            var dlng = transformlng(lng - 105.0, lat - 35.0);
            var radlat = lat / 180.0 * PI;
            var magic = Math.sin(radlat);
            magic = 1 - ee * magic * magic;
            var sqrtmagic = Math.sqrt(magic);
            dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
            dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
            var mglat = lat + dlat;
            var mglng = lng + dlng;
            return [mglng, mglat]
        }
    }

    /**
     * GCJ02 转换为 WGS84
     * @param lng
     * @param lat
     * @returns {*[]}
     */
    this.gcj02towgs84 = function (lng, lat) {
        if (out_of_china(lng, lat)) {
            return [lng, lat]
        }
        else {
            var dlat = transformlat(lng - 105.0, lat - 35.0);
            var dlng = transformlng(lng - 105.0, lat - 35.0);
            var radlat = lat / 180.0 * PI;
            var magic = Math.sin(radlat);
            magic = 1 - ee * magic * magic;
            var sqrtmagic = Math.sqrt(magic);
            dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
            dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
            mglat = lat + dlat;
            mglng = lng + dlng;
            return [lng * 2 - mglng, lat * 2 - mglat]
        }
    }

    function transformlat(lng, lat) {
        var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
        return ret
    }

    function transformlng(lng, lat) {
        var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
        return ret
    }

    /**
     * 判断是否在国内，不在国内则不做偏移
     * @param lng
     * @param lat
     * @returns {boolean}
     */
    function out_of_china(lng, lat) {
        return (lng < 72.004 || lng > 137.8347) || ((lat < 0.8293 || lat > 55.8271) || false);
    }
}
