Date.prototype.format = function(fmt) {
	var date = {
	        "M+": this.getMonth() + 1,
	        "d+": this.getDate(),
	        "h+": this.getHours(),
	        "m+": this.getMinutes(),
	        "s+": this.getSeconds(),
	        "q+": Math.floor((this.getMonth() + 3) / 3),
	        "S": this.getMilliseconds()
	    };
    if (/(y+)/i.test(fmt)) {
    	fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(fmt)) {
        	fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return fmt;
};

const areas = [
               ["UTC", +0],["纽约", -5],["东京", +9],["巴黎", +2],["悉尼", +10]
           ]

time();

async function time() {
	var now = new Date(); 
	var content = "";
	var week = "北京 "+calcTime(+8)+" UTC+8 星期" + "日一二三四五六".charAt(now.getDay());
	content += week;
	for (var i in areas) {
		var u = valPlus(areas[i][1]);
        content += "\n"+areas[i][0]+" "+calcTime(u)+" UTC" + u;
    }
	
    $notification.post('今日时间', "", content);
    $done();
}

function calcTime(offset) { 
    var d = new Date(); 
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000); 
    var nd = new Date(utc + (3600000 * offset)); 
    return nd.format("yyyy-MM-dd hh:mm:ss"); 
}

function valPlus(offset) { 
    if(offset == 0)
    	return "";
    else if (offset > 0)
    	return "+" + offset;
    else return offset;
}
