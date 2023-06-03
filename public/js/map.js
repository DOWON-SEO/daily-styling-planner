const content = document.querySelector('.content');
const container = document.querySelector("#map")
const mapLoader = document.querySelector("#map-loader")
const tempSpan = document.querySelector("span.temp")
const recommendOutFitBtn = document.querySelector(".recommend-outfit-btn")

const feelsLikeSpan = document.querySelector("span.feels_like")

const serviceKey = "CLPXfU9wiiahzBISo0wVtJ%2FJlKhNT0vvFC7PdDX1J%2Bb2SjT%2F2KxRXqLkB98Nj6H%2BjL4yEs3AR7fVPv2PPIMQnw%3D%3D"

navigator.geolocation.getCurrentPosition((position) => {
    mapLoader.style.display = "none"
    const x = position.coords.latitude
    const y = position.coords.longitude

    getWeather(x, y)
    .then((res) => {
        tempSpan.innerHTML = (res.temp - 273).toFixed(2);
        feelsLikeSpan.innerHTML = (res.feels_like-  273).toFixed(2)
    })
    const location  = new kakao.maps.LatLng(x, y);

    const marker = new kakao.maps.Marker({
        position: location
    });
    
    const options = { //지도를 생성할 때 필요한 기본 옵션
        center : location,
	    level: 3 //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options);

    marker.setMap(map);
    content.style.display = "flex"
    map.relayout()
    map.setCenter(location)
})

let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0'
url += `ServiceKey=${serviceKey}&`
url += `nx=11&`
url += `ny=24&`

fetch(url, {
    mode : "no-cors",
})
.then(res => {
    if(!res.ok){
        console.log(res)
    }
    return res.json()
})
.then(body => {
    console.log(body)
})
.catch(err => {
    console.log(err)
})