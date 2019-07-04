(() => {
    let whiteList = ["cdn.jsdelivr.net"]; //白名单
    let replace = "www.bthub.cc"; //替换为

    function strMatch(str) {
        let newStr = str;
        if (str == "" || !str) return newStr;
        urlReg = /([a-z0-9]+\.){0,1}[a-z0-9]+?\.(net|org|com|cc|ws|la)/gim; //正则表达式
        while ((res = urlReg.exec(str))) {
            if (whiteList.indexOf(res[0]) < 0) {
                newStr = newStr.replace(res[0], replace);
            }
        }
        return newStr;
    }

    $("html")
        .find("*")
        .each((index, ele) => {
            for (let i = 0; i < ele.childNodes.length; i++) {
                if (ele.childNodes[i].nodeType === 3) {
                    ele.childNodes[i].nodeValue = strMatch(
                        ele.childNodes[i].nodeValue
                    );
                }
            }
        });
})();
