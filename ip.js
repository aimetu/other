let url = "http://ip-api.com/json/?lang=zh-CN"

$httpClient.get(url, function (error, response, data) {
  let jsonData = JSON.parse(data)
  let country = jsonData.country
  let emoji = getFlagEmoji(jsonData.countryCode)
  let time = jsonData.timezone
  let city = jsonData.city
  let isp = jsonData.isp
  let ip = jsonData.query
  let lon = jsonData.lon
  let lat = jsonData.lat

  body = {
    title: "网络信息",
    content: `国家：${emoji} - ${country} - ${city}\n时区：${time}\n运营商：${isp}\nIP：${ip}\n经纬度：${lon} - ${lat}`,
    icon: "globe.asia.australia.fill",
    backgroundColor: '#375830',
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
