$(document).ready(function() {

	document.body.addEventListener('touchmove',function(event){ event.preventDefault(); },false);

	/*INITAL INITIALIZATION*/
	var layer1 = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/22677/256/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
			key: 'BC9A493B41014CAABB98F0471D759707'
		});

	var layer2 = L.tileLayer('http://{s}.tile.cloudmade.com/{key}/22677/256/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
			key: 'BC9A493B41014CAABB98F0471D759707'
		});

	var startLocation = new L.LatLng(55, 8);

	var map1 = L.map('map', {
	    layers: [layer1],
	    center: startLocation,
	    zoom: 7,
		minZoom: 7,
	 	maxZoom: 14,            
	});

	var map2 = L.map('mapClone', {
	    layers: [layer2],
	    center: startLocation,
	    zoom: 7,
		minZoom: 7,
		maxZoom: 14,
	    zoomControl: false                     
	});

	//ADD BLUR
	$('#map .leaflet-map-pane').addClass('blur');

	map1.sync(map2);
	map2.sync(map1);


	// map1.on('moveend', function(e) {
	// 	map2.setView(map1.getCenter(), map1.getZoom());
	// });

	// map2.on('moveend', function(e) {
	// 	map1.setView(map2.getCenter(), map2.getZoom());
	// });






	$('#left-navigation-header').on('click',function(){
		$( "#main-application-wrapper-bottom-left" ).toggleClass( "mawbl_small mawbl_big", 500, "swing" );
		$('#main-application-wrapper-bottom-right').toggleClass("mawbr_small mawbr_big", 500, "swing" );
		$('#analysisWrapper').toggleClass("analysisWrapper_s analysisWrapper_b"); //scale anaylseübersicht

		//$('#mapWrapper').toggleClass('mapSmall mapBig', 500, "swing");
	});

	$('#left-navigation-list').append('<div id=navIndicator class=sc-view></div>');
	$('.left-nav-item').on('click', function(){
		$('.left-nav-item').removeClass('col_90');
		$el = $(this);
		topPos = $el.position().top;
		$el.addClass('col_90');
		$('#navIndicator').stop().animate({
			top: topPos
		}, 200, 'swing', function(){});
	});

	$('#top-nav-3').on('click', function(){
		$('#analysisWrapper').toggle("slide", { direction: "right" }, 1000, function(){
			$('#map .leaflet-map-pane').toggleClass('blur');
		});
	});





	

	//TOGGLE RATIO PANEL
	$('.ratioPanelToggle').on('click', function(){
		this.value = (this.value == 'open') ? 'close' : 'open';
		var parent = $(this).attr('parent');
		if(this.value=='open'){$('#'+parent).find('.ratioWrapperBottom').height('0px');} else {$('#'+parent).find('.ratioWrapperBottom').height('155px');}
		height = parseInt($(this).attr('height')) + 155;
        var new_height = ($('#'+parent).height() == height) ? $(this).attr('height') : height;
        $('#'+parent).animate({
            height: parseInt(new_height)
        },100);
        
	});

	$("#footerMenu1").on('click', function(){
		this.value = (this.value == 'open') ? 'close' : 'open';
		if(this.value=='open'){
			$('#mapDashboardPanel-left').css('');
		}else { $('#mapDashboardPanel-left').css('') }
	});

	

});