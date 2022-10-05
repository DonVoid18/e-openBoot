function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };
  const map = new google.maps.Map({
    zoom: 4,
    center: posicion,
  });
  const marker = new google.maps.Map({
    position: posicion,
    map,
    title: "Posición inicial",
  });
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const options = { timeout: 60000 };
    const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
  } else {
    alert("tu navegador no admite geoLocalización");
  }
}

function centraMapa(position) {
  const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  console.log(nuevaPos)
  marker.setPosition(nuevaPos)
  map.setCenter(nuevaPos)
}
function onError(error) {
  console.error(error);
}
