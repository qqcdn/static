
$(document).ready(function() {
  $("#report a").click(function() {
    $("#report").fadeTo("fast", 0.2);
    $.get($(this).attr("data-href"), function(data) {
      $("#report").empty().append(data).fadeTo("fast", 1.0);
    });
    return false;
  });
});


function createxmlHttpRequest() {
    var xmlHttp;
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttp=new XMLHttpRequest();
    }
    return xmlHttp;
}

function addFav() {
    xmlHttp = createxmlHttpRequest();
    xmlHttp.open("GET",'/favorite.html');
    xmlHttp.send(null);
    var url = window.location;
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    }else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    }else if (document.all) {
        try{
            window.external.addFavorite(url, title);
        }catch(e){
            alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
        }
    }else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    }else {
        alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
    }
}

var kkDapCtrl = null;
function kkGetDapCtrl() {
	if(null == kkDapCtrl) {
	  try{
	  	if (window.ActiveXObject) {
	  	//if (navigator.userAgent.indexOf('MSIE') != -1) {
				kkDapCtrl = new ActiveXObject("DapCtrl.DapCtrl");
	  	}	else {
				var browserPlugins = navigator.plugins;
				for (var bpi=0; bpi<browserPlugins.length; bpi++) {
					try {
						if (browserPlugins[bpi].name.indexOf('Thunder DapCtrl') != -1) {
							var e = document.createElement("object");
							e.id = "dapctrl_history";
							e.type = "application/x-thunder-dapctrl";
							e.width = 0;
							e.height = 0;
							document.body.appendChild(e);
							break;
						}
					} catch (e) {}
				}
				kkDapCtrl = document.getElementById('dapctrl_history');
	  	}
	  } catch(e) {}
	}
	return kkDapCtrl;
}

function start(url) {
  var dapCtrl=kkGetDapCtrl();
  try {
		var ver = dapCtrl.GetThunderVer("KANKAN", "INSTALL");
		var type = dapCtrl.Get("IXMPPACKAGETYPE");
		if(ver && type && ver >= 672 && type >= 2401)
		{
			dapCtrl.Put("sXmp4Arg", '"'+url+'"'+' /sstartfrom _web_xunbo /sopenfrom web_xunbo');
		}	else {
			//alert('请先更新迅雷看看！');
				if(window.confirm("请先更新迅雷看看播放器\n\n点击“确定”下载并安装更新\n\n否则请点击“取消”")){
	window.open("http://xmp.down.sandai.net/kankan/XMPSetup_5.1.18.3900-dl.exe");
	}
		}
	} catch(e) {
  	//alert('请先安装迅雷看看！');
	if(window.confirm("请先安装迅雷看看播放器\n\n点击“确定”下载并安装软件\n\n否则请点击“取消”")){
	window.open("http://xmp.down.sandai.net/kankan/XMPSetup_5.1.18.3900-dl.exe");
	}
	}
}
