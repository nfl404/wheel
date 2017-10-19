		var map = new BMap.Map("map", {minZoom:4,maxZoom:18});
		function mapInit($lng, $lat, $title, $address){

		    var localSearch = new BMap.LocalSearch(map);
		    localSearch.enableAutoViewport(); //允许自动调节窗体大小

				//获取定位地图坐标
				var keyword = $address;
				
			    //map.clearOverlays();//清空原来的标注
			    localSearch.setSearchCompleteCallback(function (searchResult) {
			        //存储坐标
			        mark($lng, $lat, $title, $address);
			    });
			    localSearch.search(keyword);
		}
		
		function mark(lng, lat, $title, $address){
			
			// 百度地图API功能
		    var poi = new BMap.Point(lng,lat);
		    map.centerAndZoom(poi, 18);
		    map.enableScrollWheelZoom(true);
			var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
			var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件

			//添加缩放控件
			map.addControl(top_left_control);        
			map.addControl(top_left_navigation); 

		    var content = "<div style='margin-top:7px;'>"+$address+"</div>";

		    //创建检索信息窗口对象
		    var searchInfoWindow = null;
			searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
					title  : $title,      //标题
					panel  : "panel",         //检索结果面板
					enableAutoPan : true,     //自动平移
				});
		    var marker = new BMap.Marker(poi); //创建marker对象
			searchInfoWindow.open(marker);
		    map.addOverlay(marker); //在地图中添加marker  

			map.setMapStyle({
				style:'normal'
				}); //地图主题 normal light dark  redalert googlelite grassgreen midnight pink darkgreen bluish grayscale hardedge
			
		}