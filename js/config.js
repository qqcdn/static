$(document).ready(function() {
  $("#report a").click(function() {
    $("#report").fadeTo("fast", 0.2);
    $.get($(this).attr("data-href"), function(data) {
      $("#report").empty().append(data).fadeTo("fast", 1.0);
    });
    return false;
  });
});

function killErrors(){return true;}window.onerror=killErrors;

var date = new Date();
var y = date.getFullYear();
var m = date.getMonth()+1;
var d = date.getDate();
if(m<10) m = "0"+m;
if(d<10) d = "0"+d;
date = m+"-"+d;

var arydomain = new Array(".com.cn",".com",".cn",".net",".cc",".org",".info",".biz",".tv",".tw"); 
var domain = document.domain;
var tmpdomain = "";
for(var i=0;i<arydomain.length; i++){
	tmpdomain = arydomain[i];
	if(domain.indexOf(tmpdomain) != -1){
		domain = domain.replace(tmpdomain,"");
		domain = domain.substring(domain.lastIndexOf(".")+1,domain.length);
		domain = domain + tmpdomain;
		break;
	}
}

var lc_url = "";
var lc_img = "";
var rc_url = "";
var rc_img = "";
var lf_url = "";
var lf_img = "";
var rf_url = "";
var rf_img = "";
var aamenu="";
var aafootbaner="";
var footlink="";
var mail = '';
var link = '';

//漂浮
/*-----
lc_url = "http://suo.im/510gz9"; //左对联网址
lc_img = "//ww1.sinaimg.cn/large/005YhI8igy1fwheaw4kk4g303c08cwfh"; //左对联图片
rc_url = "//ii88f.com/"; //右对联网址
rc_img = "//cbu01.alicdn.com/img/ibank/2018/737/519/9328915737_1995781528.jpg"; //右对联图
lf_url = "//s2018pj.com"; //左下角网址
lf_img = "//cbu01.alicdn.com/img/ibank/2018/397/470/9379074793_1995781528.jpg"; //左下角图片
rf_url = "//hnqysljz.com/xj5020.php"; //右下角网址
rf_img = "//cbu01.alicdn.com/img/ibank/2018/856/595/8581595658_1995781528.jpg"; //右下角图片
-----*/

//导航上面广告

aamenu=aamenu+"<img src=\"//p.pstatp.com/origin/ffd700002d82266eb8ae\" width=\"100%\" border=\"0\">";

//底部广告960×60
aafootbaner=aafootbaner+"<div align=\"center\"><a href=\"//www.po56.com\" target=\"_blank\"><img src=\"http://www.85fy.com/98060.gif\" width=\"100%\" border=\"0\"></a><\/div>";
aafootbaner=aafootbaner+"<div align=\"center\"><a href=\"//vip7226.com\" target=\"_blank\"><img src=\"//sc02.alicdn.com/kf/UTB8E7a5jXPJXKJkSahV5jXyzFXaG.gif\" width=\"100%\" border=\"0\"></a><\/div>";
aafootbaner=aafootbaner+"<div align=\"center\"><a href=\"//www.ggvnsr.com/5900.html\" target=\"_blank\"><img src=\"http://wx3.sinaimg.cn/large/0067ImIWgy1fhocubyle5g30qo01ojyv.gif\"  width=\"100%\" border=\"0\"></a><\/div>";
aafootbaner=aafootbaner+"<div align=\"center\"><a href=\"http://400ai.xzg449.com\" target=\"_blank\"><img src=\"http://cbu01.alicdn.com/img/ibank/2018/141/600/8826006141_872274545.jpg\" width=\"100%\" border=\"0\"></a><\/div>";
aafootbaner=aafootbaner+"<div align=\"center\"><a href=\"http://www.tqcknmc.com\" target=\"_blank\"><img src=\"//img.alicdn.com/imgextra/i3/1731999033/TB2lAJufnlYBeNjSszcXXbwhFXa_!!1-martrix_bbs.gif\"  width=\"100%\" border=\"0\"></a><\/div>";
aafootbaner=aafootbaner+"<div align=\"center\"><a href=\"//vip4033.com\" target=\"_blank\"><img src=\"//sc02.alicdn.com/kf/UTB8OQMFjDzIXKJkSafV5jaWgXXam.gif\" width=\"100%\" border=\"0\"></a><\/div>";
aafootbaner=aafootbaner+"<div align=\"center\"><a href=\"http://www.kyhbgrq.com\" target=\"_blank\"><img src=\"//img.alicdn.com/imgextra/i4/1731999033/TB2mDEtXY1YBuNjSszeXXablFXa_!!1-martrix_bbs.gif\"  width=\"100%\" border=\"0\"></a><\/div>";

//顶部邮件及链接
mail = 'dizhi333@gmail.com';
link = '<th scope="col" width="100%" height="20" align="center"><font color="red" style="font-size:16px">发送任意内容： ' + mail + ' 获取新域名</font></th>';
footlink = "<p>免责声明：本站所收录资源均由站长自动提交或网友分享,其内容与本站无关！禁止18岁以下访问福利站页面。<\/p><p>站点申明：我们立足于美利坚合众国，对全球华人服务，受北美法律保护。版权所有，未经授权禁止复制或建立镜像。<\/p>";

function StayPosition(speed) {
        this.objs  = [];
        this.speed = speed || 0.1;
        this.timer = this.round = this.obj = this.end = null;
        if (StayPosition.initialize !== true) {
            function correct(func, obj) {
                return function () {
                    func.call(obj);
                }
            }

            StayPosition.prototype.start      = function () {
                this.timer = setInterval(correct(this.run, this), 33);
            }
            StayPosition.prototype.stop       = function () {
                clearInterval(this.timer);
            }
            StayPosition.prototype.capitalize = function (prop) {
                return prop.replace(/^[a-z]/, function (a) {
                    return a.toUpperCase();
                })
            }
            StayPosition.prototype.add        = function (dom, prop) {
                var offset = prop ? "offset" + this.capitalize(prop) : "offsetTop";
                var scroll = prop ? "scroll" + this.capitalize(prop) : "scrollTop";
                prop       = prop ? prop : this.offset.slice(6).toLowerCase();
                this.objs.push({
                    "dom" : dom,
                    "prop": {"size": dom[offset], "name": prop, "offset": offset, "scroll": scroll}
                });
            }
            StayPosition.prototype.run        = function () {
                for (var i = 0, l = this.objs.length; i < l; i++) {
                    this.obj = this.objs[i];
                    this.end = (document.documentElement[this.obj.prop.scroll] || document.body[this.obj.prop.scroll]) + this.obj.prop.size;
                    if (this.end != this.obj.dom[this.obj.prop.offset]) {
                        this.round                             = this.end - this.obj.dom[this.obj.prop.offset] > 0 ? Math.ceil : Math.floor;
                        this.obj.dom.style[this.obj.prop.name] = this.obj.dom[this.obj.prop.offset] + this.round((this.end - this.obj.dom[this.obj.prop.offset]) * this.speed) + "px";
                    }
                }
            }
        }
        StayPosition.initialize = true;
}
function closeLC() {
	document.getElementById("left_couple").style.display = "none";
}
function closeRC() {
	document.getElementById("right_couple").style.display = "none";
}
function closeLF() {
	document.getElementById("left_float").style.display = "none";
}
function closeRF() {
	document.getElementById("right_float").style.display = "none";
}


            /*----- 漂浮广告代码 -----*/
            var float_s = new StayPosition(0.2);
            if (lc_url != "") {
                var lc_s = '';
                lc_s += '<div id="left_couple" style="position:absolute;top:120px;left:5px;"><a href="' + lc_url + '" target="_blank"><img src="' + lc_img + '" border="0" width="130" height="300"></a><div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:closeLC();" style="color:white;text-decoration:none;">×</a></div></div>';
                document.writeln(lc_s);
                float_s.add(document.getElementById("left_couple"), "top");
            }
            if (rc_url != "") {
                var rc_s = '';
                rc_s += '<div id="right_couple" style="position:absolute;top:120px;right:5px;"><a href="' + rc_url + '" target="_blank"><img src="' + rc_img + '" border="0" width="130" height="300"></a><div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:closeRC();" style="color:white;text-decoration:none;">×</a></div></div>';
                document.writeln(rc_s);
                float_s.add(document.getElementById("right_couple"), "top");
            }
            if (lf_url != "") {
                var lf_s = '';
                lf_s += '<div id="left_float" style="position:absolute;bottom:90px;left:5px;"><a href="' + lf_url + '" target="_blank"><img src="' + lf_img + '" border="0" width="240" height="240"></a><div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:closeLF();" style="color:white;text-decoration:none;">×</a></div></div>';
                document.writeln(lf_s);
                float_s.add(document.getElementById("left_float"), "top");
            }
            if (rf_url != "") {
                var rf_s = '';
                rf_s += '<div id="right_float" style="position:absolute;bottom:100px;right:5px;"><a href="' + rf_url + '" target="_blank"><img src="' + rf_img + '" border="0" width="240" height="240"></a><div style="position:absolute;top:0px;right:0px;margin:1px;width:15px;height:15px;line-height:16px;background:#000;font-size:11px;text-align:center;"><a href="javascript:closeRF();" style="color:white;text-decoration:none;">×</a></div></div>';
                document.writeln(rf_s);
                float_s.add(document.getElementById("right_float"), "top");
            }

$(function(){
	if ($("#aamenu").length>0){
		$("#aamenu").html(aamenu);
	}

	if ($("#aafootbaner").length>0){
		$("#aafootbaner").html(aafootbaner);
	}

	if ($("#footlink").length>0){
		$("#footlink").html(footlink);
	}

	float_s.start();

	var header = '<div align="center"><table width="100%" height="80" border="0" style="background:#FFF"><tbody><tr>  ' + link + '</tr>  </tbody></table></div>';
	var wrap       = document.getElementById('logo').parentNode;
	wrap.innerHTML = header;
	wrap.className = '';
});




//首页
function benyueremenbtzhongzi(){
document.writeln("本月热门BT种子");
}

function benzhouremenbtzhongzi(){
document.writeln("本周热门BT种子");
}

function jinriremenbtzhongzi(){
document.writeln("今日热门BT种子");
}

function zuixinshoulucili(){
document.writeln("最新收录磁力");
}

function yingpianpaihangbang(){
document.writeln("2019影片排行榜");
}

function zuixinmingxing(){
document.writeln("最新明星");
}

function zuixinfanhao(){
document.writeln("最新番号");
}

function btzhongzileixing(){
document.writeln("BT种子类型");
}

function shipin(){
document.writeln("视频");
}

function yinpin(){
document.writeln("音频");
}

function wendang(){
document.writeln("文档");
}

function ruanjian(){
document.writeln("软件/压缩包");
}

function tupian(){
document.writeln("图片");
}

function gaoqing(){
document.writeln("高清");
}

function youqinglianjie(){
document.writeln("友情链接");
}

function gengduo(){
document.writeln("更多 »");
}


//搜索页面
function fenlei(){
document.writeln("分类：");
}

function daxiao(){
document.writeln("大小：");
}

function redu(){
document.writeln("热度：");
}

function shoulu(){
document.writeln("收录：");
}

function zuijin(){
document.writeln("最近：");
}

function remensousuo(){
document.writeln("热门搜索");
}

function tebietishi(){
document.writeln("特别提示");
}

function tebietishi1(){
document.writeln("本站不存储任何资源内容，只收集BT种子元数据和磁力链接，是一个完全合法的搜索引擎系统。 网站不提供种子下载服务，也不对BT种子真实性及合法性负责，请用户注意甄别！");
}

function paixu(){
document.writeln("排序：");
}

function quanbu(){
document.writeln("全部");
}

function yingshi(){
document.writeln("影视");
}

function yinyue(){
document.writeln("音乐");
}

function tuxiang(){
document.writeln("图像");
}

function anzhuangbao(){
document.writeln("安装包");
}

function yasuobao(){
document.writeln("压缩包");
}

function qita(){
document.writeln("其他");
}

function xiangsi(){
document.writeln("相似");
}

function redu1(){
document.writeln("热度");
}

function daxiao1(){
document.writeln("大小");
}

function ruku(){
document.writeln("入库");
}

function zuihou(){
document.writeln("最近下载");
}




//内容页

function btzhongzimingcheng(){
document.writeln("BT种子名称");
}

function btzhongzijibenxinxi(){
document.writeln("BT种子基本信息");
}

function xiazaidizhi(){
document.writeln("下载地址");
}

function wendangliebiao(){
document.writeln("文档列表");
}

function cainixihuan(){
document.writeln("猜你喜欢");
}

function zuixincililianjie(){
document.writeln("最新磁力链接");
}

function zhongzibiaoqian(){
document.writeln("种子标签");
}

function zhongzipingjia(){
document.writeln("种子评价");
}

function zuijinsousuo(){
document.writeln("最近搜索");
}

function renqimingxing(){
document.writeln("人气明星");
}

function zuixinfanhao(){
document.writeln("最新番号");
}

function zhongzihaxi(){
document.writeln("种子哈希：");
}

function wendangdaxiao(){
document.writeln("文档大小：");
}

function zhongzifenlei(){
document.writeln("种子分类：");
}

function wendangshuliang(){
document.writeln("文档数量：");
}

function xiazaicishu(){
document.writeln("下载次数：");
}

function xiazaisudu(){
document.writeln("下载速度：");
}

function shoulushijian(){
document.writeln("收录时间：");
}

function zuijinxiazai(){
document.writeln("最近下载：");
}

function dmca(){
document.writeln("DMCA/屏蔽：");
}

function cililianjie(){
document.writeln("磁力链接");
}

function xunleixiazai(){
document.writeln("迅雷下载");
}

function zhongzixiazai(){
document.writeln("种子下载");
}


//投诉提示
function tousu(){

document.writeln("<p><a href=\"/\" target=\"_blank\">磁力仓库</a> 投诉邮箱：tousu@"+ document.domain.replace(/^(m.|www.)/g,'') +"</p>");

}


