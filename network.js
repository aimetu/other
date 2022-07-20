$httpClient.get("https://ip.useragentinfo.com/json?", function (error, response, data) {
    let dataObject = JSON.parse(data);
    let { country, short_name, province, city, area, isp, net, ip } = dataObject;
    isp = `运营商：${isp}`;
    ip = `IP：${ip}`;
    short_name = `简称：${short_name}`;
    let region = `地区：${country}${province} ${city} ${area}`;
    body={
        title: "网络信息",
        content: `${isp}\n${ip}\n${short_name}\n${region}`,
        backgroundColor: "#006c54",
        icon: "antenna.radiowaves.left.and.right.circle.fill",
    }
    $done(body)
})
