$httpClient.get("https://ip.useragentinfo.com/json?", function (error, response, data) {
    let dataObject = JSON.parse(data);
    let { country, short_name, province, city, area, isp, net, ip, code } = dataObject;
    isp = `运营商：${isp}`;
    net = `服务商：${net}`;
    ip = `IP：${ip}`;
    let region = `地区：${country} ${short_name}${province} ${city} ${area} ${code}`;
    body={
        title: "网络信息",
        content: `${isp}\n${ip}\n${region}`,
        backgroundColor: "#006c54",
        icon: "antenna.radiowaves.left.and.right.circle.fill",
    }
    $done(body)
})
