$httpClient.get("https://forge.speedtest.cn/api/location/info", function (error, response, data) {
    let dataObject = JSON.parse(data);
    let { country, province, isp, city, ip, lon, lat } = dataObject;
    isp = `运营商：${isp}`;
    ip = `IP：${ip}`;
    let region = `地区：${country} ${province} ${city}`;
    let location = `纬度：${lon}经度：${lat}`;

    body={
        title: "网络信息",
        content: `${isp}\n${ip}\n${region}`,
        backgroundColor: "#006c54",
        icon: "antenna.radiowaves.left.and.right.circle.fill",
    }
    $done(body)
})
