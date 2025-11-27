// JavaScript Document
<!--
function MM_swapImgRestore() { //v3.0
var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
var p,i,x;	if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-->

<!--
function MM_findObj(n, d) { //v4.0
var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
if(!x && document.getElementById) x=document.getElementById(n); return x;
}
function MM_showHideLayers() { //v3.0
var i,p,v,obj,args=MM_showHideLayers.arguments;
for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
obj.visibility=v; }
}
//-->

<!--
function swapMenu(now, total, old){
var Obj = "";
var Obj2 = "";		 //메뉴 이미지 오브젝트
for(var i=1; i<=total; i++){
Obj = document.getElementById(old + i);
Obj2 = document.getElementById("snv" + i);
if(Obj != null){
 if(i == now){
	Obj.style.display = "block";
	Obj2.src = "/img/nv/snv1_nv"+ i +"_o.gif";		 //오버시 들어갈 이미지 경로
 }else{
	Obj2.src = "/img/nv/snv1_nv"+ i +"_n.gif";		 //원리 이미지 경로
	Obj.style.display = "none";
 }
}
}
}
//-->

<!--
function swapMenu(now, total, old){
var Obj = "";
var Obj2 = "";		 //메뉴 이미지 오브젝트
for(var i=1; i<=total; i++){
Obj = document.getElementById(old + i);
Obj2 = document.getElementById("snv" + i);
if(Obj != null){
 if(i == now){
	Obj.style.display = "block";
	Obj2.src = "/img/nv/snv3_nv"+ i +"_o.gif";		 //오버시 들어갈 이미지 경로
 }else{
	Obj2.src = "/img/nv/snv3_nv"+ i +"_n.gif";		 //원리 이미지 경로
	Obj.style.display = "none";
 }
}
}
}
//-->

<!--
function setPng24(obj) {
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,''); 
	obj.style.filter =
	"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src='about:blank;';
	return '';
}
//-->

<!--
//날씨
function wether_tap1() {
 document.getElementById('wether_tap1').style.display='block'
 document.getElementById('wether_tap2').style.display='none'
 document.getElementById('wether_tap3').style.display='none'
}
function wether_tap2() {
 document.getElementById('wether_tap1').style.display='none'
 document.getElementById('wether_tap2').style.display='block'
 document.getElementById('wether_tap3').style.display='none'
}
function wether_tap3() {
 document.getElementById('wether_tap1').style.display='none'
 document.getElementById('wether_tap2').style.display='none'
 document.getElementById('wether_tap3').style.display='block'
}




/*
상단 메뉴 활성화 스크립트
파라메터 : 현재활성화 메뉴(n:숫자형), 총 메뉴 개수(total:숫자형), 활성화시 이미지에 붙일 구분 값(onFlag:_o), 비활성화시 이미지에 붙일 구분 값(outFlag:_n), 이미지 아이디 값(Oid:nv), 이미지확장자(mime:gif)
ex:) => TopMenuOn(1, 5, '_o', '_n', 'nv', 'gif'); --> 총 메뉴 5개중 첫번째 메뉴 활성화
*/
function TopMenuOn(n, total, onFlag, outFlag,Oid, mime){
	var obj, src, tmp, str;     //사용 변수 선언
	for(var i=1; i<= total; i++){
		obj = document.getElementById(Oid +""+ i);     //변경할 이미지 객체 선언
		if(obj == null){ return; }     //이미지 객체가 없으면 종료
		src = obj.src;     //이미지 경로 얻기
		tmp = src.split("."+ mime);     //이미지 경로를 확장자로 구분하여 자르기(결과값:배열)
		str = tmp[0];     //배열의 첫번째 자리 값 담기(이미지 경로)
		if(n == i){     //활성화 시킬 이미지 라면
			src = str.replace(outFlag, onFlag);     //이미지 구분값 변경(_n -> _o로 변경)
		}else{     //활성화시킬 이미지 아니라면
			src = str.replace(onFlag, outFlag);     //이미지 구분 값만 변경(_o -> _n로 변경)
		}
		src += "."+ mime;     //이미지 확장자 붙여서 완전한 경로 생성
		obj.src = src;
	}
}

function SubMenuOn(n, total, onFlag, outFlag, Oid, mime){

var obj, src, tmp, str;

for(var i=1; i<=total; i++){

obj = document.getElementById(Oid +""+ i);

if(obj == null){ return; }

src = obj.src;

if(n == i){

tmp = src.replace(outFlag +".", onFlag +".");

}else{

tmp = src.replace(onFlag +".", outFlag +".");

}

obj.src = tmp;

}

}


//-->