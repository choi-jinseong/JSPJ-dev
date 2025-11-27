

var __colors =[
		 "#AD1457"		//RED
		,"#FF8F00"		//ORANGE
		,"#1565C0"		//BLUE
		,"#546E7A"		//DARK BLUE
		,"#2aa2a2"		//GRAY

		,"#778899"
		,"#5F9EA0"
		,"#fff"
		,"#fff"
		,"#fff"

		,"#B2DFDB"
		,"#90A4AE"
		,"#8D6E63"
		,"#673AB7"
		,"#D81B60"

		,"#FFCC80"
		,"#99bc19"
		,"#EC407A"
		,"#E1BEE7"
		,"#29B6F6"
	 ];

$(function(){
	$(".jBox").jBox('Tooltip',{
		trigger: 'click',
		position:{
			x:'center',
			y:'top'
		},
		getTitle: 'jboxTitle',
		getContent:'jboxContent',
		adjustPosition: true,
		adjustTracker: true,
		theme: 'TooltipBorder',
		animation: 'move',
		closeButton: 'box',
		closeOnClick: 'body',
		closeOnEsc: 'true'
	});
});

if (typeof(Number.prototype.isBetween) === "undefined") {
	Number.prototype.isBetween = function(min, max, notBoundaries) {
		var between = false;
		if (notBoundaries) {
			if ((this < max) && (this > min)) between = true;

		} else {
			if ((this <= max) && (this >= min)) between = true;
		}
		return between;
	}
}

	/**
	 * 메뉴 링크 ACTION
	 * @param _URL
	 * @param _CODE
	 */
	function _setNextUrl(_URL, _CODE, _SYS_CODE){

		var url = _URL+"?_code="+_CODE+"&sysCode="+_SYS_CODE;

		location.href = url;
		
		/*if(document._pgm) {
			var frm = document._pgm;

			frm._code.value=_CODE;
			frm.action = _URL;

			frm.submit();
		}
		else
		{
			var url = _URL+"?_code="+_CODE;
			location.href=url;
		}*/
	}

	/**
	 * 텝메뉴  링크 ACTION
	 * @param _URL, _CODE,_TITLE,_PARENT,_PTITLE
	 * TODOCHECK
	 */
	function _setNextUrlTab(_URL, _MENU_CODE, _TITLE, _PARENT_CODE, _SYS_CODE){

		_eventSetMenu(_PARENT_CODE, _MENU_CODE, _SYS_CODE);
		
		// 맨처음 메인에서 한번 호출
		var checkT = 0 ;

		if( $('#tt').tabs().text() == "" || $('.tabs-title').size() < 0) {
			var url = _URL+"?_code="+_MENU_CODE+"&sysCode="+_SYS_CODE;
			location.href = url;
		}else{
			// 한번 호출이후 다시 들어오면 중복체크
			for(var i = 0; i < $(".tabs > li").size();i++){
			//	if($('.tabs-title').eq(i).text() == _TITLE || $('.tabs-title').eq(i).text() == _PTITLE){
				if($('.tabs-title').eq(i).text() == _TITLE ){
					checkT++;
				}
			}
		}

		// 중복된 탭이있을경우  해당탭으로 이동
		if(checkT > 0 ) $('#tt').tabs('select', _TITLE.trim());
		else {
			// 중복탭이 없으며 새롭게 생성되는탭의 경우 5개가 넘어가면 맨앞에서 부터 삭제하면서 5개 의 탭 유지
			if( $('.tabs > li').size() >= 5){
				$('#tt').tabs('close',0);
			}

			//if(_PTITLE)_TITLE= _PTITLE;

			// 아이프레임으로 탭생성
			//var content = '<iframe id="'+_MENU_CODE+'" name="'+_MENU_CODE+'" scrolling="no"  onload="autoResize(this,$(this),'+_MENU_CODE+')"  frameborder="0" style="width:100%;"></iframe>';
			var content = '<iframe id="'+_MENU_CODE+'" name="'+_MENU_CODE+'" scrolling="no"   frameborder="0" style="width:100%;"></iframe>';
			$('#tt').tabs('add',{
				title:_TITLE,
				content:content,
				closable:true
			});

			$("#"+_MENU_CODE).attr("src",_URL+"?_code="+_MENU_CODE+"&sysCode="+_SYS_CODE);

			// 기본사이즈
			// window.height
			var iSize = $(this).height();
			$("#"+_MENU_CODE).css("height",iSize);

		}
	}



	/**
	 * 탭 리사이징
	 * @param div container Height
	 */
	function tabResize(divHeight){

		var pp = $('#tt').tabs('getSelected');

		pp.panel('resize',{
			width: '100%',
			height: 'auto'

		});

		var selectedIframe = pp.panel('options').content;

		var iframeSize = $('#'+$(selectedIframe).attr('id')).css('height').replace('px', '');

		if(iframeSize < divHeight){
			$('#'+$(selectedIframe).attr('id')).css('height',divHeight);
		}

		$(window).resize();
	}


	/* tabs 비동기 class 세팅 */
	function _setTabsCss(){

		//var strSelectedMenuId = $("#divSelectedMenuId").text();

		// LNB Tree Init
		setTree(".menu_tree");

		// LNB Toggle Click Function
		$(".menu_tree button.toggle").bind("click", function () {
			fncLnbChilds($(this));
			uiRefresh();
		});

		// LNB 링크가 #인 아이들은 토글 실행
		$(".menu_tree a[href*='#']").click(function () {
			$(this).parent().find(".toggle:first").trigger("click");
			return false;
		});
		// LNB Init
		//if (strSelectedMenuId.length > 0) {
		//	fncOpenSelfTree(strSelectedMenuId);
		//}

	}


	/**
	 * tab메뉴 사용시 iframe 리사이징
	 * @param this
	 */
	function autoResize(i,_i,_CODE)
	{

		  var iheight = $("#"+_CODE).contents().find('#section').height();
		  var iSize = $(_i).height();

		  if(decoratorMenuTabs && decoratorMenuTabs != "N"){

			  if(iheight > iSize){
				$("#"+_CODE).css("height",iheight-40);
			  }else{
				$("#"+_CODE).css("height",iSize-20);
			  }

		  }else{

			  if(iheight > iSize){
				$("#"+_CODE).css("height",iheight);
			  }else{
				$("#"+_CODE).css("height",iSize);
			  }

		  }

	 /*   var iframeHeight=
		(i).contentWindow.document.body.scrollHeight;
		(i).height=iframeHeight+180;*/
	}


	/*GRID ROW SPAN*/
	function Merger(gridName, CellName) {

		var mya = $("#" + gridName + "").getDataIDs();


		var length = mya.length;
		for (var i = 0; i < length; i++) {

			var before = $("#" + gridName + "").jqGrid('getRowData', mya[i]);

			var rowSpanTaxCount = 1;
			for (j = i + 1; j <= length; j++) {

				var end = $("#" + gridName + "").jqGrid('getRowData', mya[j]);
				if (before[CellName] == end[CellName]) {
					rowSpanTaxCount++;

					$("#" + gridName + "").setCell(mya[j], CellName, '', {
						display: 'none'
					});
				} else {
					rowSpanTaxCount = 1;
					break;
				}
			   $("#" + CellName + "" + mya[i] + "").attr("rowspan", rowSpanTaxCount);
			}
		}
	}


	/*data table 초기화*/
	function setTbodyInit(listTable){
		$("#"+listTable+" tr").remove();
	}

	/*data table 결과없음 처리*/
	function setTbodyNoResult(listTable,cols,msg){

		if(!msg)  msg  = "No Data Found!";
		if(!cols) cols = 10;

		$("#"+listTable).append('<tr><td colspan="'+cols+'" align=center height=30>'+msg+'</span></td></tr>');
	}



	/**
	 * 파일 확장자 체크
	 * @param obj
	 * @returns {Boolean}
	 */
	function fileValid(obj,type){
		var validDoc = "doc|docx|xls|xlsx|ppt|pptx|txt|jpg|gif|png|avi|swf|hwp";
		var validImg = "jpg|gif|png";
		var valid = "";
		var index = -1;
		var filePath = "";

		filePath = $(obj).val();

		if(!filePath) return;

		index = filePath.lastIndexOf('.');

		if(type =='img') valid = validImg;
		else valid = validDoc;

		if(index != -1)
			tmp = filePath.substring(index+1, filePath.len);
		else tmp = "";


		var validImgs = validImg.split("|");
		var state = false;
		for(var i=0; validImgs.length > i; i++) {
			if(validImgs[i] ==  tmp.toLowerCase() ) {
				state = true;
				break;
			}
		}

		if(!state)
		{

			if(type =='img')
				if(__locale && __locale != "ko") alert('Only image files can be registered.(JPG, GIF, PNG)');
				else alert('이미지 파일만 등록가능합니다.(JPG, GIF, PNG)');
			else {

				if(__locale && __locale != "ko") alert('The file extension is a registered impossible.');
				else alert('등록불가능한 파일 확장자입니다.');
			}

			obj.select();
			obj.value="";
		}
	}

	/**
	 * String replaceAll
	 */
	String.prototype.replaceAll = function(str1, str2){
		var temp_str = "";
		if (this.trim() != "" && str1 != str2){
			temp_str = this.trim();

			while (temp_str.indexOf(str1) > -1){
				temp_str = temp_str.replace(str1, str2);
			}
		}
		return temp_str;
	}


	/**
	 * 해당 화면의 레이어 팝업 드레그이벤트
	 * @param layerID
	 */
	function setLayerDraggable(layerID){
		$("#"+layerID).draggable({
			handle: $("h1")
			,cancle: $("a.close")
			,containment: "document"
			,scroll: false
		});
	}



	/**
	 * 해당 화면의 레이어 팝업의 위치 설정
	 * 회면 중앙정렬
	 */
	function setLayerPopupLocationSettings(layerID, layerHeight, layerWidth){
		var $layer = $('#'+layerID);
		var $opacity = $('#opacity');
		$layer.css('top',$(window).scrollTop() + ($(window).height() - layerHeight) / 2);
		$layer.css('left',$(window).scrollLeft() + ($(window).width() - layerWidth) / 2);
		$opacity.css('height', $(document).height());

		$(document).off('keydown').on('keydown', function(e) {
			if (e.keyCode === 27) { // ESC
				e.preventDefault();
				var $btnClose = $layer.find('a.close');
				if ($btnClose.length > 0) {
					$btnClose.click();
				} else {
					$layer.hide();
					$opacity.hide();
				}
			}
		});

		$layer.show();
		$opacity.show();
	}

	/**
	 * 공통 물류센터 조회
	 */
	function getCustomCodeListToSelBoxZlgort(subName, defaultValue, seletedValue, parentCd) {
		var param = {parentCd : parentCd};
		var url = __context + '/app/common/selectCommonZlgortCode';
		
		$.ajaxSetup({
		  		contentType: "application/json; charset=utf-8"
	  		});

		 $.post(	 url
		  			,JSON.stringify(param)
		  			,function(data){
						$("select[name='"+subName+"'] option").remove();
						_setSelectBoxValue(data,subName,defaultValue,seletedValue);
		  			}, 'json');
	}


	/**
	 * 공통 선택박스 호출 함수
	 * mainValue :
	 * parentCd:
	 * subName:
	 * type:
	 * defaultValue: all, choice, ''
	 * seletedValue: -1 or value
	 */
	function selectControllerVal(mainValue,parentCd,subName,type,defaultValue, seletedValue){

		var str = {'keyValue':mainValue, 'parentCd':parentCd, 'type':type};

		var url =  __context + '/app/common/selectCommonLargeCdCodeSub';

		 $.ajaxSetup({
		  		contentType: "application/json; charset=utf-8"
	  		});

		 $.post(	 url
		  			,JSON.stringify(str)
		  			,function(data,status){

		  				if(status == 'success'){
							$("select[name='"+subName+"'] option").remove();
							_setSelectBoxValue(data,subName,defaultValue, seletedValue);

						}
		  			}, 'json');
	}


	/**
	 * 계약 카테고리 선택박스 호출 함수
	 * mainValue :
	 * subName:
	 * defaultValue: all, choice, ''
	 * seletedValue: -1 or value
	 */
	function selectCategoryCode(mainValue,subName,defaultValue, seletedValue){

		var str = {'keyValue':mainValue};

		var url =  __context + '/app/cont/selectCategoryCode';

		 $.ajaxSetup({
		  		contentType: "application/json; charset=utf-8"
	  		});

		 $.post(	 url
		  			,JSON.stringify(str)
		  			,function(data,status){

		  				if(status == 'success'){
							$("select[name='"+subName+"'] option").remove();
							_setSelectBoxValue(data,subName,defaultValue, seletedValue);

						}
		  			}, 'json');
	}



	/**
	 * 계약 카테고리 선택박스 호출 함수(해당 계약건 조회용)
	 * mainValue :
	 * subName:
	 * defaultValue: all, choice, ''
	 * seletedValue: -1 or value
	 */
	function selectOneContractCategoryCode(mainValue,subName,defaultValue, seletedValue){

		var str = {'keyValue':mainValue};

		var url =  __context + '/app/cont/selectOneContractCategoryCode';

		 $.ajaxSetup({
		  		contentType: "application/json; charset=utf-8"
	  		});

		 $.post(	 url
		  			,JSON.stringify(str)
		  			,function(data,status){

		  				if(status == 'success'){
							$("select[name='"+subName+"'] option").remove();
							_setSelectBoxValue(data,subName,defaultValue, seletedValue);

						}
		  			}, 'json');
	}



	/**
	 * 계약 카테고리 선택박스 호출 함수(리턴 Function)
	 * mainValue :
	 * subName:
	 * defaultValue: all, choice, ''
	 * seletedValue: -1 or value
	 */
	function selectCategoryCodeFnc(mainObj,subName,defaultValue, seletedValue,fnc){

		var str = {'keyValue':mainObj.value.replace('choice','').replace('all','')};

		var url =  __context + '/app/cont/selectCategoryCode';

		 $.ajaxSetup({
		  		contentType: "application/json; charset=utf-8"
	  		});

		 $.post(	 url
		  			,JSON.stringify(str)
		  			,function(data,status){

		  				if(status == 'success'){
							$("select[name='"+subName+"'] option").remove();
							_setSelectBoxValue(data,subName,defaultValue, seletedValue);

							eval(fnc);

						}
		  			}, 'json');
	}



	/**
	 * 계약 중분류 선택박스 호출 함수
	 * mainObj :
	 * parentCd:
	 * subName:
	 * type:
	 * defaultValue: all, choice, ''
	 * seletedValue: -1 or value
	 */
	function selectControllerReturnLargeCdFnc(mainObj,parentCd,subName,type,defaultValue, seletedValue, fnc){

		var str = {'keyValue':mainObj.value.replace('choice','').replace('all',''), 'parentCd':parentCd, 'type':type};

		var url =  __context + '/web/common/selectCommonLargeCdCodeSub';

		 $.ajaxSetup({
		  		contentType: "application/json; charset=utf-8"
	  		});

		 $.post(	 url
		  			,JSON.stringify(str)
		  			,function(data,status){
		  				if(status == 'success'){
							$("select[name='"+subName+"'] option").remove();
							_setSelectBoxValue(data,subName,defaultValue, seletedValue);

							eval(fnc);
						}
		  			}, 'json');
	}

	/**
	 * 공통 선택박스 호출 콜백 함수
	 */
	function _setSelectBoxValue(data,subName,defaultValue,seletedValue){
		var sz = data.length
		,eleHtml = []
		, h = 0;

		if(data != null && data != ''){
			for(var k=0;k<sz;k++){
				eleHtml[++h] = "<option value='"+data[k].value+"'>"+data[k].text+"</option>"+"\n";
			}
		}else{
			if(defaultValue != ''){
				eleHtml[0] = "<option value=''>"+defaultValue+"</option>"+"\n";
			$("select[name='"+subName+"']").append(eleHtml.join(''));
			}


		}


		/*
		if(defaultValue == 'all'){
			eleHtml[0] = "<option value='all'>전체</option>"+"\n";
		}else if(defaultValue == 'choice'){
			eleHtml[0] = "<option value='choice'>선택</option>"+"\n";
		}else if(defaultValue != ''){
			// 2012.08.31 yjCho
			eleHtml[0] = "<option value=''>"+defaultValue+"</option>"+"\n";
		}else{
			// 값이 없는 경우 무시
		}
		*/

		if(sz <= 0) return;

		if(defaultValue != ''){
			eleHtml[0] = "<option value=''>"+defaultValue+"</option>"+"\n";
		}


		$("select[name='"+subName+"']").append(eleHtml.join(''));
		if(seletedValue != null && seletedValue != ''){
			if(seletedValue == '-1'){
				$("select[name='"+subName+"'] option:last").attr('selected','selected');
			}else{
				$("select[name='"+subName+"']").val(seletedValue);
			}

		}
	}


	/* 새로운 로우 넘버 세팅  */
	function newNumbering(listNm){
		$('#'+listNm+' tr td:first-child').each(function(i){
			$(this).text(i+1);
		});
	}


	/** 계약서 파일 디렉토리 명칭  return*/
	function getContractPath(path,gubunValue,dcDate){

		var strValue = "";

		if(dcDate == null || dcDate == ""){
			dcDate =getRemoveFormat(getCulDate());
		}

		strValue = getContractContextPath(path,gubunValue,dcDate);

		return strValue;
	}

	/** 계약서 파일 디렉토리 명칭  return*/
	function getContractContextPath(path,gubunValue,dcDate){

		var strValue='';

		strValue = path
			 + gubunValue+"/"
			 +dcDate.substring(0,4)+"/"
			 +dcDate.substring(4,6)+"/";
		return strValue;
	}


	// 구분자 제거
	function getRemoveFormat(val) {

		var arrDate = new Array(3);

		if(val.indexOf("-") != 1) 	arrDate = val.split("-");
		else 	arrDate = val.split("/");

		return arrDate[0] + arrDate[1];

	}

	/* return 값 : 현재 yyyyMMdd
	 * rtnType을 넣으면 값에 따라 return ex) getCulDate('-') 호출할 경우 yyyy-MM-dd 반환 */
	function getCulDate(rtnType){
		var year,month,day;
		var todate = new Date();
		var date = '';
		year=todate.getFullYear();

		if( todate.getMonth() < 9 ){
			month = '0'+(todate.getMonth()+1);
		}else{
			month = todate.getMonth()+1;
		}

		if( todate.getDate() < 9 ){
			day = '0'+todate.getDate();
		}else{
			day = todate.getDate();
		}

		date = year+rtnType+month+rtnType+day;

		if(!rtnType)
			date = year+''+month+''+day;
		return	date
	}

	/*그리드 cell 상세링크 속성 처리  formatter:sellSelected */
	function sellSelected(cellvalue, options, rowObject){
		var eventCellVal = '<a href="javascript:void(0);"><span ><i class="fa fa-search" ></i>'+cellvalue+'<span></a>';
		return eventCellVal;
	}

	/*날짜를 'yyyyMMdd'형식으로 변환
	 * ex)'29/10/2018 -> '20181029'  */
	function getConvertDate(date){

		date = date.replace(/\//gi, "");

		if(__locale !='ko'){
			var year = date.substr(4,4)
			var month = date.substr(2,2)
			var day = date.substr(0,2)
			date = year+ ""+month+""+day
		}
		return date;
	}

	/*입력받은 날짜를 "/" 를 붙여줌
	 * getConvertDateReverse(yyyyMMdd)
	 *  ex) ko - 99991230  -> 9999/12/30
	 *	  en, vn - 99991230  -> 30/12/9999*/
	function getConvertDateReverse(date){
		var year = date.substring(0,4);
		var month = date.substring(4,6);
		var day = date.substring(6,8)
		if(__locale == 'en' || __locale == 'vn')
			date = day + '-' + month + '-'+year
		else
			date = year + '-' + month + '-'+day
		return date;
	}
	
	//data formatter
	function dateViewFrm(val){
		return (val && val.replace(/(\d{4})(\d{2})(\d{2})/g,'$1-$2-$3')||'');
	}
	


	//-----------------------------------------------------------------------
	//숫자만 입력가능하도록
	//-----------------------------------------------------------------------
	//예)
	//html : <input type='text' name='test' onkeypress="onlyNumber();">
	//-----------------------------------------------------------------------
	function onlyNumber() {
		if((event.keyCode<48) || (event.keyCode>57))
		{
			if(event.preventDefault){
				//  IE
				event.preventDefault();
			} else {
				//  표준 브라우저(IE9, 파이어폭스, 오페라, 사파리, 크롬)
				event.returnValue = false;
			}
		}
	}

	/**
	 * 숫자로만 이루어져 있는지 체크 한다.
	 * ex) <input type="text" id="bmanNo" name="bmanNo" onkeyup="return isNumber(this);" />
	 * @param	num, type
	 * @return   boolean
	 */
	function isNumber(num, type){
		var inText = num.value;
		var ret;
		for (var i = 0; i < inText.length; i++) {
			ret = inText.charCodeAt(i);
			if(type == null) {
				if (!((ret > 47) && (ret < 58)) && ret != 46) {
					num.value = "";
					num.focus();
					return false;
				}
			} else if(type == 'bmanNo'){
				if (!((ret > 46) && (ret < 58)) && ret != 45) {
					num.value = "";
					num.focus();
					return false;
				}
			} else if(type == 'price'){
				if (!((ret > 46) && (ret < 58)) && ret != 44) {
					num.value = "";
					num.focus();
					return false;
				}
			}
			else {
				if (!((ret > 47) && (ret < 58))) {
					num.value = "";
					num.focus();
					return false;
				}
			}
		}
		return true;
	}


	/*Number To Words
	 * converNumToWord(number, 'EN')
	 *
	 * */
	function converNumToWord(number ,type){
		number = removeNumberComma(number)
		var rtnWords="";
		var numberArray = {};
		var integer = "";		//받아온값 정수
		var decimal = "";		//소수
		var rtnDecimal = "";	//가공소수
		var gap ="";
		if (type.toLowerCase() == 'en'){//영문변환
			if(number == '0' ){
				return 'Zero'
			}else if(number > 0){
				if(number.indexOf(".") > -1){
					numberArray = number.split(".");
					integer = numberArray[0];
					decimal = numberArray[1];
					rtnDecimal = "";
					if(parseInt(decimal) !=0 ){
						for(var i = 0; i < decimal.length; i++){
							if("0" == decimal.charAt(i)){
								rtnDecimal += " zero";
							}else{
								rtnDecimal += " "+units[decimal.charAt(i)];;
							}
						}
						gap = integer == 0 ? "":" ";
 						rtnDecimal =  gap + "point"+  rtnDecimal;
					}
					rtnWords =convertEn(integer) + rtnDecimal;
				}else{
					rtnWords =convertEn(number);
				}
				return rtnWords;
			}else{
				return '';
			}
		}else{//베트남어 변환
			if(number == '0' ){
				return 'Không'
			}else if(number > 0){
				if(number.indexOf(".") > -1){
					numberArray = number.split(".");
					integer = numberArray[0];
					decimal = numberArray[1];
					rtnDecimal = "";
					if(parseInt(decimal) !=0 ){
						for(var i = 0; i < decimal.length; i++){
							if("0" == decimal.charAt(i)){
								rtnDecimal += " không";
							}else{
								rtnDecimal += " "+convertVn(decimal.substring(i,decimal.length));
 	 							break;
							}
						}
						gap = integer == 0 ? "":" ";
 						rtnDecimal =  gap + "chấm"+  rtnDecimal;
					}
					rtnWords =convertVn(integer) + rtnDecimal;
				}else{
					rtnWords =convertVn(number);
				}
				return rtnWords;
			}else{
				return '';
			}
		}

	}
	/*1~19*/
	var units = [ "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen"
				, "seventeen", "eighteen", "nineteen" ];
	/*10자리수*/
	var tens = ["",	"", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

	/*숫자 - > 영문으로 convert
	 * 10 -> ten*/
	function convertEn(number) {


		if (number < 20) {
			return units[number];
		}

		if (number < 100) {
			return tens[parseInt(number / 10)] + ((number % 10 != 0) ? " " : "") + units[number % 10];
		}

		if (number < 1000) {
			return units[parseInt(number / 100)] + " hundred" + ((number % 100 != 0) ? " " : "") + convertEn(number % 100);
		}

		if (number < 1000000) {
			return convertEn(parseInt(number / 1000)) + " thousand" + ((number % 1000 != 0) ? " " : "") + convertEn(number % 1000);
		}

		if (number < 1000000000) {
			return convertEn(parseInt(number / 1000000)) + " million " + ((number % 1000000 != 0) ? " " : "") + convertEn(number % 1000000);
		}

		if(number < 1000000000000){
			return convertEn(parseInt(number / 1000000000)) + " billion " + ((number % 1000000000 != 0) ? " " : "") + convertEn(number % 1000000000);
		}

		return convertEn(parseInt(number / 1000000000000)) + " trillion " + ((number % 1000000000000 != 0) ? " " : "") + convertEn(number % 1000000000000);
	}
	/*숫자 - > 베트남어로 convert
	 * 10 -> ?*/
	/*1자리수*/
 	var unitsVn = [ "",
 			"một",				//1
 			"hai",				//2
 			"ba",				//3
 			"bốn",				//4
 			"năm",				//5
 			"sáu",				//6
 			"bảy",				//7
 			"tám",				//8
 			"chín"				//9
 			];

 	/*10자리수*/
 	var tensVn = ["",
 			"mười", 			// 10
 			"hai mươi",			// 20
 			"ba mươi",			// 30
 			"bốn mươi",			// 40
 			"năm mươi",			// 50
 			"sáu mươi",			// 50
 			"bảy mươi",			// 70
 			"tám mươi",			// 80
 			"chín mươi",		// 90

 	]

 	/*숫자 베트남어으로 convert*/
 	function convertVn(number) {
 		var unitsDigit = "";//1의자리수


 		if (number < 10) {

 			return unitsVn[number % 10];
 		}
 		if (number < 100) {
 			if(number % 10 == 1 && number > 20){/*21부터 1은 mốt로발음*/
 				unitsDigit = "mốt";
 			}else if(number % 10 != 0 && number % 5 == 0 && 15 <= number){/*15~95 까지 1의자리수가 5일 경우 lăm로발음*/
 				unitsDigit = "lăm";
 			}else{
 				unitsDigit = unitsVn[number % 10];
 			}

 			return tensVn[parseInt(number / 10)] + ((number % 10 != 0) ? " " : "") + unitsDigit;
 		}

 		if (number < 1000) {

 			if(0 < number % 100 && number % 100 < 10){/*10의자리가  0이면 10자리에 lẻ 추가*/
 				unitsDigit  = " lẻ " + unitsVn[number % 10];
 			}else{
 				unitsDigit = ((number % 100 != 0) ? " " : "") + convertVn(number % 100);
 			}
 			return unitsVn[parseInt(number / 100)] + " trăm" + unitsDigit;
 		}

 		if (number < 1000000) {
 			return convertVn(parseInt(number / 1000)) + " nghìn" + ((number % 1000 != 0) ? " " : "") + convertVn(number % 1000);
 		}

 		if (number < 1000000000) {
 			return convertVn(parseInt(number / 1000000)) + " triệu" + ((number % 1000000 != 0) ? " " : "") + convertVn(number % 1000000);
 		}

 		if(number < 1000000000000){
 			return convertVn(parseInt(number / 1000000000)) + " tỷ" + ((number % 1000000000 != 0) ? " " : "") + convertVn(number % 1000000000);//억
 		}

 	   return convertVn(parseInt(number / 1000000000000)) + " nghìn tỷ" + ((number % 1000000000000 != 0) ? " " : "") + convertVn(number % 1000000000000);//조

 	}

 	/*금액에 콤마 setNumberComma(this)*/
	function setNumberComma(obj) {
		var rgx1 = /\D/g;  // /[^0-9]/g 와 같은 표현
		var rgx2 = /(\d+)(\d{3})/;

		/*콤마 찍어주는 함수*/
		function setComma(inNum) {
			var outNum;
			outNum = inNum;
			while (rgx2.test(outNum)) {
				outNum = outNum.replace(rgx2, '$1' + ',' + '$2');
			}
			return outNum;
		}

		/*숫자 가져와서 콤마*/
		var num01;
		var num02;
		num01 = obj.value;
		num02 = num01.replace(rgx1,"");
		num01 = setComma(num02);
		obj.value =  num01;

	}
	/*콤마 remove*/
	function removeNumberComma(str) {
		return str.replace(/[^\d\.\-\ ]/g, '');
	}
	/*콤마 찍어주는 함수*/
	function numberComma(str) {

		str = String(Math.floor(str));
		str = str.replace(/[^\d]+/g, '');
		return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
	}



	/*권한목록 가져오기
	 * gbn : ['S':점포, 'M': 자재]*/
	function gfn_getStoreMatnrList(gbn){
		var list;
		
		$.ajax({
			contentType : 'application/json; charset=utf-8',
			type : 'post',
			dataType : 'json',
			async : false,
			url : "/app/common/common_selStoreMatnrInfo",
			data : "",
			success : function(data) {
				//점포
				if(gbn=='S'){
					list = data.reduce((unique, val) => {
						if (!unique.some(data => data.KUNNR === val.KUNNR)) {
							//점포코드, 점포명
							unique.push({'KUNNR':val.KUNNR, 'NAME':val.NAME1});
						}
						return unique;
					}, []);
				}else{
					//자재
					list = data.reduce((unique, val) => {
						if (!unique.some(data => data.MATNR === val.MATNR)) {
							//자재코드, 자재명
							unique.push({'MATNR':val.MATNR, 'NAME':val.MAKTX});
						}
						return unique;
					}, []);
				}
 			}
		});
		
		return list;
	} 

	/*select BOX
	 * ex) gfn_makeSelectBox(select, data,,name, top)
	 * top[A:전체, S:선택]
	 * gfn_makeSelectBox($('#test'), list, 'kunnr','name', 'A')
	 * HTML:<select id="test" name="test" class="form-control form-square"  style="width: 80%;"></select>
	 * */
	function gfn_makeSelectBox(obj, data, value,name, top){
		obj.children().remove();
		if(top){
			top = top=='A'? '전체':'선택';
			obj.prepend("<option value=''>"+top+"</option>");
		}
		for(var i = 0;  i < data.length; i++) {
  			var rowData= data[i];
  			obj.append("<option value='"+rowData[value]+"'>"+rowData[name]+"</option>");
  		}

  		
	}
	
	/*권한 목록 조회 
	 * */
	function gfn_getAutrList(){
		var autrList; 
		$.ajax({
			contentType : 'application/json; charset=utf-8',
			type : 'post',
			dataType : 'json',
			async : false,
			url : "/app/common/common_seltAutrList",
			data : "",
			success : function(data) {
				autrList = data;
			}
		});
		return autrList;
  		
	}

/**
 * 공통함수 추가정의 - zodiack
 * 다른 함수명과 겹치지 않도록 window 전역변수에 배열로 함수정의
 */	
if (!window["commUtils"]) {
	console.log("=== LotteGRS commUtils Init!! ===");
	
    window["commUtils"] = {	
    	/**
    	 * 독립된 js파일에서 웹서버의 API를 호출하기 위해선 현재서버의 CONTEXT_PATH를 알아야하므로 
    	 * 최초 홈페이지 진입시점에 CONTEXT_PATH를 sessionStorage에 저장할 필요가 있음
    	 */
    	getContextPath: function(){
    		return sessionStorage.getItem("LotteGRS_vndr_contextpath");
    	},
    	
    	/**
    	 * ajax call
    	 * @param mtdType : HTTP 메소드 프로토콜 (ex:get/post)
    	 * @param callURL : 호출URL
    	 * @param paramData : 호출시 데이터 (형태:JSON 배열)
    	 * @param callback : 콜백함수 (형태:Function)
    	 */
    	ajaxCall: function(mtdType, callURL, paramData, callback) {
    		var returnValue = null;
    		var jsonData = null;
    		var callMethod = mtdType.toUpperCase();    		
    		if(callMethod == "POST"){
    			jsonData = JSON.stringify(paramData);
    		}else{
    			jsonData = paramData;
    		}
		
    		$.ajax({
    			type : callMethod,
                url : callURL,
                dataType : "JSON",
                data : jsonData,
                cache : false,
                contentType : "application/json; charset=utf-8",
                beforeSend : function (xhr) {
				},
                success : function(data, textStatus, jqXHR) {
                    returnValue = data;
                },
                error : function(jqXHR, textStatus, errorThrown) {
                    returnValue = null;
                    console.error(">>> AJAX Call Error\nurl : "+ callURL +" ("+ jqXHR.status +")\nerr : "+ errorThrown);
                },
                complete : function(jqXHR, textStatus) {
                    if (callback) {
                        try {
                        	if(returnValue == "" || JSON.stringify(returnValue) === "{}"){
                        		returnValue = null;
                        	}
                            callback(returnValue, jqXHR);
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }
            });
    	},
    	
    	/**
    	 * form 아이디 값으로 객체얻기
    	 * @param frm : form 아이디
    	 */
    	getFormObject : function(frm) {
			if (!frm)
				return null;
			var selector = null;
			if (typeof frm === "string") {
				if (frm.indexOf("#") < 0){
					selector = "#" + frm;
				}else{
					selector = frm;
				}
			} else{
				selector = frm;
			}
		
			var jFrm = $(selector);
			if (!jFrm || !jFrm.length)
				return null;
			return jFrm;
		},
		
		/**
		 * 폼에 입력된 값을 json 데이터로 리턴
		 * @param frm : form 아이디
		 */
		formToMap : function(frm) {
			var jFrm = commUtils.getFormObject(frm);
			if (!jFrm || !jFrm.length)
				return null;
			var map = {};
			var disa = jFrm.find("[disabled]");
			disa.prop("disabled", false);
			var arr = jFrm.serializeArray();
			$.each(arr, function() {
				if (typeof map[this.name] === "undefined") {
					map[this.name] = this.value || '';
				} else {
					if (!map[this.name].push) {
						map[this.name] = [ map[this.name] ];
					}
					map[this.name].push(this.value || '');
				}
			});
			disa.prop("disabled", true);
			return map;
		},
		
		/**
		 * json 데이터를 입력폼에 주입
		 * @param map : json 데이터
		 * @param frm : form 아이디
		 */
		mapToForm : function(map, frm) {
			if (!map)
				return;
			var jFrm = commUtils.getFormObject(frm);
			if (!jFrm || !jFrm.length)
				return null;
			var frmObj = jFrm[0];
			frmObj.reset();
			for ( var name in map) {
				var inp = jFrm.find("[name=" + name + "]");

				if(inp.length>1){
					if($(inp[0]).attr("elType")=="radiobox"){
						var rArray = inp;
						for(var i=0;i<rArray.length;i++){
							var rdo = $(rArray[i]);
							var name = rdo.attr("name");
							var value = rdo.val();
							if(name && value && map[name]){
								rdo.prop("checked",map[name]==value).change();
							}
						}
					}
					else if($(inp[0]).attr("elType")=="checkbox"){
						var initVal = map[name];

						if(initVal != null){
	        				var checkedCount = 0;
	        				var initValArr = initVal.split(",");
	        				var chkboxObj = $('input[name='+ name +']');
							for(var i = 0; i < chkboxObj.length; i++){
								if(initValArr.includes(chkboxObj[i].value)){
									chkboxObj[i].checked = true;
									checkedCount++;
								}
							}
							$(chkboxObj).change();
	        			}
					}
					else{
						var rArray = map[name];
						if(rArray == null)
							continue;
						if(typeof(rArray) == typeof([])){
							for(var i=0;i<rArray.length&&i<inp.length;i++){
								$(inp[i]).val(rArray[i]);                           
							}
						}
						else{
							$(inp[0]).val(map[name]);
						}
					}
				}
				else if(inp.length == 1){
					var selVal = map[name];
					if($(inp[0]).attr("elType")=="selectize"){
						var elSelectize = inp[0].selectize;
						
						var dataMap = inp[0].dataMap;
						var maxSize = $(inp[0]).attr("maxSize");
						var prevVal = elSelectize.getValue();	//기존 저장된 데이터
						var totVal = "";
						if(selVal.length > 0){
							if(prevVal.length > 0){	//기존값과 설정값이 둘다존재하는 경우
								totVal = prevVal +","+ selVal;
							}else{	//설정값만 존재하는 경우
								totVal = selVal;
							}
						}
						
						if(totVal.length > 0){
							var totOpts = [];
							var totItems = [];
							var totArr = totVal.split(",");
							if(totArr.length > 0){
								totArr = [...new Set(totArr)];	//set은 겹치는것을 허용하지 않는다.
							}
							
							if(maxSize > 0 && totArr.length > maxSize){
								alert(maxSize +"개를 초과할 수 없습니다.");
								return;	
							}
							
							for(var i=0; i<totArr.length ; i++){
								if(dataMap[totArr[i]] == null) continue;	//없는 데이터를 추가하고자 한다면 제외시킨다.
								totOpts.push(dataMap[totArr[i]]);
								totItems.push(totArr[i]);
							}
							elSelectize.addOption(totOpts);
							elSelectize.setValue(totItems);
						}
					}else if($(inp[0]).attr("elType")=="selectbox" && inp.prop("multiple")){
						if(selVal){
							var arr = null;
							if(Array.isArray(selVal)){
								arr = selVal;
							}else{
								arr = selVal.split(",");
							}
							inp.val(arr).change();
							
						}else {
							inp.val(val).change();
						}
					}else{
						inp.val(selVal).change();
					}
				}
			}
			return;
		},
		
		/**
		 * 폼내부의 입력폼(hidden포함)을 초기화
		 * @param frm : form 아이디
		 */
		resetForm : function(frm){
			var jFrm = commUtils.getFormObject(frm);
			if (!jFrm || !jFrm.length) return null;
			jFrm.each(function() {
				this.reset();
			});
			
			jFrm.find('input[type=hidden]').val('');	//hidden data 삭제
			//$("#"+ frm +" input[type=hidden]").val('');	//hidden data 삭제
			
			//const allEl = document.forms[frm].elements;
			const allEl = jFrm.children();
			for(i=0; i<allEl.length; i++) {
				if(allEl[i].getAttribute('elType') == "selectize"){
					var selObj = allEl[i].selectize;
					selObj.clear();
					selObj.clearOptions();
				}
			}
		},
        
		/**
		 * 해당layer의 팝업창을 오픈
		 * @param layerId : layer 아이디
		 */
        openPopLayer: function(layerId, callbackFunc) {
        	var layerObj = commUtils.getFormObject(layerId);
			if (!layerObj || !layerObj.length) return null;
        	
        	/* 레이어 활성화 */
			layerObj.show();
    		$('#opacity').show();

    		/* 레이어 드레그 Event */
    		layerObj.draggable({
    			handle: $("h1")
    			,cancle: $("a.close")
    			,containment: "window"
    			,scroll: false
    		});

    		/* 레이어 닫기버튼 Click Event */
    		layerObj.find('a.close').unbind().click(null, function(e){
    			if (callbackFunc) {
                    try {
                    	callbackFunc();
                    } catch (e) {
                        console.error(e);
                    }
                }
    			commUtils.closePopLayer(layerId);
    		});
    	},
    	
    	/**
		 * 해당layer의 팝업창을 종료
		 * @param layerId : layer 아이디
		 */
    	closePopLayer: function(layerId){
    		var layerObj = commUtils.getFormObject(layerId);
			if (!layerObj || !layerObj.length) return null;
			
			layerObj.hide();
			var existOtherPop = false;	//현재 팝업이외 다른팝업 존재여부 체크
			$('.pop_layer_new').each(function(i, obj) {
				if($(this).css('display') == "block"){
					existOtherPop = true;
					return;
				}
			});
			if(!existOtherPop){	//현재 팝업이외 다른팝업이 존재하지 않는다면
				$('#opacity').hide();   
			}
    		
    		layerObj.find("form input, form select, form textarea").filter(function(){
    			return $(this).data('tooltipsterNs');
    		}).tooltipster('hide');		
    		
    		/*
    		$('*').filter(function(){
    			return $(this).data('tooltipsterNs');
    		}).tooltipster('hide');
    		*/
    	},
    	
    	blockUI : function() {
			if(top == window){
				$.blockUI({
					message: '<img src="/resources/images/common/bu_loading_ns.gif" width="100" height="70" />'

					, overlayCSS: { background: 'transparent'}
					, css:{background: 'transparent', border:'none'}
					, baseZ : 9999	//9999999999
				});
        	}else{
        		top.commUtils.blockUI();
        	}
        },
        
        unblockUI : function() {
			if(top == window)
            	$.unblockUI();
            else
            	top.commUtils.unblockUI();
        },
    	
    	/**
		 * 두날짜간의 시간차를 구함
		 * @param fromDt : 시작날짜(ex:20230601)
		 * @param toDt : 종료날짜(ex:20230601)
		 * @param diffTp : 시간차단위(D:일/H:시/M:분/그외:초)
		 */
    	getTimeDiff: function(fromDt, toDt, diffTp){
    		var reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim;
    		
    		var fromDate = new Date(getConvertDateReverse(fromDt.replace(reg, "")));
    		var toDate = new Date(getConvertDateReverse(toDt.replace(reg, "")));
    		var diffMSec = toDate.getTime() - fromDate.getTime();
    		var diffDate = -1;
    		
    		switch(diffTp){
    	    case "D":	//일
    	    	diffDate = diffMSec / (24 * 60 * 60 * 1000);
    	      	break;
    	    case "H":	//시
    	    	diffDate = diffMSec / (60 * 60 * 1000);
    	      	break;
    	    case "M":	//분
    	    	diffDate = diffMSec / (60 * 1000);
    	      	break;
    	    default:	//초
    	    	diffDate = diffMSec / 1000;
    	    }
		
    		return diffDate;
    	},
    	
    	setDateHyphen: function(targetObj){
    		inpt = $(targetObj).val();
	
    		if(!inpt) return "";
    		var changeVal = '';
			
			// 공백제거
    		inpt = inpt.replace(/\s/gi, "");
			
			try{
			    if(inpt.length == 8) {
			    	changeVal = inpt.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
				}else{
					changeVal = inpt;
				}
			} catch(e) {
			     changeVal = inpt;
			}
			
			$(targetObj).val(changeVal);
    	},
	};
}


//점포 초기화
function fn_storeClear(obj){
	$(obj).closest('form').find("input[name='KUNNR']").val('');
	$(obj).closest('form').find("input[name='kunnrNm']").val('');
	
	$(obj).closest('form').find("input[name='srchStore']").val('');
	
	$('form[name="excelForm"]').find('input').each(function(){
		let name = $(this).attr('name');
		if( name != '_csrf' ){
			$(this).val('');
		}
	});
}

// 자재 초기화
function fn_matnrClear(obj){
	$(obj).closest('form').find("input[name='MATNR']").val('');
	$(obj).closest('form').find("input[name='matnrNm']").val('');
	
	$(obj).closest('form').find("input[name='findMatnr']").val('');
	$(obj).closest('form').find("input[name='srchMatnr']").val('');
	
	$(obj).closest('form').find("input[name='I_MATNR']").val('');
	$(obj).closest('form').find("input[name='maktx']").val('');
	
	$('form[name="excelForm"]').find('input').each(function(){
		let name = $(this).attr('name');
		if( name != '_csrf' ){
			$(this).val('');
		}
	});
}

// 업체 초기화
function fn_companyClear(obj){

	$(obj).closest('form').find("input[name='I_LIFNR']").val('');
	$(obj).closest('form').find("input[name='I_LTSNR']").val('');
	$(obj).closest('form').find("input[name='lifnrNm']").val('');
	
	$(obj).closest('form').find("input[name='entrMlcCd']").val('');
	$(obj).closest('form').find("input[name='compCd']").val('');
	$(obj).closest('form').find("input[name='compCdNm']").val('');

	$(obj).closest('form').find("input[name='srchCompCd']").val('');
	$(obj).closest('form').find("input[name='srchEntrMlcCd']").val('');
	
	$('form[name="excelForm"]').find('input').each(function(){
		let name = $(this).attr('name');
		if( name != '_csrf' ){
			$(this).val('');
		}
	});
	
}
