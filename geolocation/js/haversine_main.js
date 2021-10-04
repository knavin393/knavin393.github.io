function calculateDistance(lat,lon){
    let dpulze=haversine(lat,lon,2.922561,101.650965)
    let pyramid=haversine(lat,lon,3.073065,101.607787)
    let klcc=haversine(lat,lon,3.158761,101.714524)

    return[dpulze,pyramid,klcc]
}

let elLocate= document.getElementById('locate')
elLocate.addEventListener("click",function(){
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(function(position){
            let elLat=document.getElementById("lat")
            let elLong=document.getElementById("long")
            let elDpulze=document.getElementById("depulze")
            let elKlcc=document.getElementById("klcc")
            let elSunway=document.getElementById("sunway")

            let userLat=position.coords.latitude
            let userLong=position.coords.longitude

            let distance=calculateDistance(userLat,userLong)

            elLat.innerHTML="your latitude:" + userLat
            elLat.innerHTML="your longitude:" + userLong
            elDpulze.innerHTML="Distance to Dpluze, Cyberjaya is" + distance[0] + "km"
            elKlcc.innerHTML="Distance to Klcc is" + distance[2] + "km"
            elSunway.innerHTML="Distance to Sunway Pyramid is" + distance[1] + "km"
        })

    }else{
        alert("geo location is not supported!")
    }
})