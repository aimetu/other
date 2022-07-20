$httpClient.get("https://forge.speedtest.cn/api/location/info", function (error, response, data) {
    let dataObject = JSON.parse(data);
    let { country, province, isp, city, ip, lon, lat, distinct, operator, full_ip, net_str } = dataObject;
    isp = `运营商：${isp}`;
    ip = `IP：${ip}`;
    let region = `地区：${country} ${province} ${city}`;
    location = `纬度：${lon}经度：${lat}`;
    distinct = `1：${distinct}`;
    operator = `2：${operator}`;
    full_ip = `3：${full_ip}`;
    net_str = `4：${operator}`;
    body={
        title: "网络信息",
        content: `${isp}\n${ip}\n${region}`,
        backgroundColor: "#006c54",
        icon: "antenna.radiowaves.left.and.right.circle.fill",
    }
    $done(body)
})
