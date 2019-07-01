
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

