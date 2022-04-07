jQuery(document).ready(function($) {
  $(document).on("click",".recargar_mapa",function(){
    setTimeout(function() {
      cargar_mapas();
    }, 300);
    
  })
});
function cargar_mapas(){
	//mapa prohogar 32.655015106785555, -115.43724560600889
	myLatLng = { lat: 32.655015 , lng: -115.437245 };
	$(".cuenta_lat").val(myLatLng.lat);
	$(".cuenta_lon").val(myLatLng.lng);
	
	var map = new google.maps.Map(document.getElementById('map_brasil'), {
      zoom: 17,
      center: myLatLng
    });
    var marker = new google.maps.Marker({
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: myLatLng,
      map: map,
      icon: 'img/map_icon.png',
      title: 'Ferbis Brasil'
    });	

    //mapa San Marcos 32.633541, -115.493229
	myLatLng = { lat: 32.655015 , lng: -115.437245 };
	$(".cuenta_lat").val(myLatLng.lat);
	$(".cuenta_lon").val(myLatLng.lng);
	
	var map = new google.maps.Map(document.getElementById('map_san_marcos'), {
      zoom: 17,
      center: myLatLng
    });
    var marker = new google.maps.Marker({
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: myLatLng,
      map: map,
      icon: 'img/map_icon.png',
      title: 'Ferbis Brasil'
    });	

    //mapa Gastro 32.656351, -115.411593
	myLatLng = { lat: 32.655015 , lng: -115.437245 };
	$(".cuenta_lat").val(myLatLng.lat);
	$(".cuenta_lon").val(myLatLng.lng);
	
	var map = new google.maps.Map(document.getElementById('map_gastro'), {
      zoom: 17,
      center: myLatLng
    });
    var marker = new google.maps.Marker({
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: myLatLng,
      map: map,
      icon: 'img/map_icon.png',
      title: 'Ferbis Brasil'
    });	
}