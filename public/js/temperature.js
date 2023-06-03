const appKey = "ecdc30b4fc0e6b5645eaf5866443421b"
async function getWeather(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appKey}`);
    const result = await response.json()

    return result.main
}