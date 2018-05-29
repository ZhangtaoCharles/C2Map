/**
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
L.drawVersion = '0.4.2';
/**
 * @class L.Draw
 * @aka Draw
 *
 *
 * To add the draw toolbar set the option drawControl: true in the map options.
 *
 * @example
 * ```js
 *      var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 * ```
 *
 * ### Adding the edit toolbar
 * To use the edit toolbar you must initialise the Leaflet.draw control and manually add it to the map.
 *
 * ```js
 *      var map = L.map('map').setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 *
 *      // FeatureGroup is to store editable layers
 *      var drawnItems = new L.FeatureGroup();
 *      map.addLayer(drawnItems);
 *
 *      var drawControl = new L.Control.Draw({
 *          edit: {
 *              featureGroup: drawnItems
 *          }
 *      });
 *      map.addControl(drawControl);
 * ```
 *
 * The key here is the featureGroup option. This tells the plugin which FeatureGroup contains the layers that
 * should be editable. The featureGroup can contain 0 or more features with geometry types Point, LineString, and Polygon.
 * Leaflet.draw does not work with multigeometry features such as MultiPoint, MultiLineString, MultiPolygon,
 * or GeometryCollection. If you need to add multigeometry features to the draw plugin, convert them to a
 * FeatureCollection of non-multigeometries (Points, LineStrings, or Polygons).
 */
L.Draw = {};

/**
 * @class L.drawLocal
 * @aka L.drawLocal
 *
 * The core toolbar class of the API — it is used to create the toolbar ui
 *
 * @example
 * ```js
 *      var modifiedDraw = L.drawLocal.extend({
 *          draw: {
 *              toolbar: {
 *                  buttons: {
 *                      polygon: 'Draw an awesome polygon'
 *                  }
 *              }
 *          }
 *      });
 * ```
 *
 * The default state for the control is the draw toolbar just below the zoom control.
 *  This will allow map users to draw vectors and markers.
 *  **Please note the edit toolbar is not enabled by default.**
 */
L.drawLocal = {
	// format: {
	// 	numeric: {
	// 		delimiters: {
	// 			thousands: ',',
	// 			decimal: '.'
	// 		}
	// 	}
	// },
	draw: {
		toolbar: {
			// #TODO: this should be reorganized where actions are nested in actions
			// ex: actions.undo  or actions.cancel
			actions: {
				title: '取消画图',
				text: '取消'
			},
			finish: {
				title: '结束画图',
				text: '结束'
			},
			undo: {
				title: '删除最后一个节点',
				text: '删除最后一个点'
			},
			buttons: {
				polyline: '线',
				polygon: '面',
				rectangle: '矩形',
				circle: '圆',
				marker: '点',
			    circlemarker: 'Draw a circlemarker'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: '点击并拖拽画一个圆.'
				},
				radius: '半径'
			},
			circlemarker: {
				tooltip: {
					start: 'Click map to place circle marker.'
				}
			},
			marker: {
				tooltip: {
					start: '点击地图上任意一点进行标记.'
				}
			},
			polygon: {
				tooltip: {
					start: '点击开始画面.',
					cont: '点击继续画面.',
					end: '点击第一个点结束画面.'
				}
			},
			polyline: {
				error: '<strong>错误:</strong> 图形边缘不能交叉!',
				tooltip: {
					start: '点击开始画线.',
					cont: '点击继续画线.',
					end: '点击最后一个点结束画线或双击结束画线.'
				}
			},
			rectangle: {
				tooltip: {
					start: '点击并拖拽画一个矩形.'
				}
			},
			simpleshape: {
				tooltip: {
					end: '释放鼠标结束绘制.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: '保存编辑',
					text: '保存'
				},
				cancel: {
					title: '取消编辑, 撤销操作',
					text: '取消'
				},
				clearAll: {
					title: '清除所有数据',
					text: '删除全部'
				}
			},
			buttons: {
				edit: '编辑',
				editDisabled: '没有编辑数据',
				remove: '删除',
				removeDisabled: '没有数据删除'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: '拖动标记编辑.',
					subtext: '点击取消或者保存修改.'
				}
			},
			remove: {
				tooltip: {
					text: '点击删除的元素.'
				}
			}
		}
	}
};
