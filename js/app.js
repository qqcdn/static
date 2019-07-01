
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
