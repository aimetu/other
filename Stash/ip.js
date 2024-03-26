$httpClient.get("https://forge.speedtest.cn/api/location/info", function (error, response, data) {
    let dataObject = JSON.parse(data);
    let { country, country_code, province, city, distinct, isp, operator, lon, lat, ip, full_ip, net_str } = dataObject;
    country = `国家：${country}`;
    country_code = `简称：${country_code}`;
    province = `省：${province}`;
    city = `市：${city}`;
    distinct = `区：${distinct}`;
    isp = `网络运营商：${isp}`;
    operator = `网络服务商：${operator}`;
    lon = `经度：${lon}`;
    lat = `纬度：${lat}`;
    ip = `出站IP：${ip}`;
    full_ip = `进站IP：${full_ip}`;
    net_str = `网络信息商：${net_str}`;
    let region = `${isp}\n${operator}\n${net_str}\n${ip}\n${full_ip}`;
    body={
        title: "网络信息",
        content: `${country}\n${country_code}\n${province}\n${city}\n${distinct}\n${lon}\n${lat}\n${region}`,
        backgroundColor: "#ad8b3d",
        icon: "antenna.radiowaves.left.and.right.circle.fill",
    }
    $done(body)
})
