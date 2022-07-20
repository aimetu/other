let url = "http://ip-api.com/json"

$httpClient.get(url, function (error, response, data) {
  let jsonData = JSON.parse(data)
  let country = jsonData.country
  let emoji = getFlagEmoji(jsonData.countryCode)
  let city = jsonData.city
  let isp = jsonData.isp
  let ip = jsonData.query
  let lon = jsonData.lon
  let lat = jsonData.lat
  let time = jsonData.timezone


  body = {
    title: "节点信息",
    content: `时区：${time}\n国家：${emoji}${country} - ${city}\n运营商：${isp}\nIP：${ip}\n经度：${lon}\n纬度：${lat}`,
    icon: "globe.asia.australia.fill",
    backgroundColor: '#00a6ac',
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
