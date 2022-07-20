let url = "http://ip-api.com/json"

$httpClient.get(url, function (error, response, data) {
  let jsonData = JSON.parse(data)
  let country = jsonData.country
  let emoji = getFlagEmoji(jsonData.countryCode)
  let city = jsonData.city
  let isp = jsonData.isp
  let ip = jsonData.query
  body = {
    title: "节点信息",
    content: `运营商：${isp}\nIP：${ip}\n地区：${emoji}${country} - ${city}`,
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
