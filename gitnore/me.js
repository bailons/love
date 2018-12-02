$(function(){
		$(window).on('resize load',function(){
			var win_height = $(window).height();
			var whole_height = $(".mid").height();
			$(".mid").css('top',win_height/2 - whole_height/2 - 40 + 'px')
			
		})
	})
	
	function identify(){
	var code = document.getElementById("code").value;
	var day = getDays('2017-10-08')+1;
	    if(code==""){
		  alert("你输入爱的密码!");
		  return;
		}
		if(code=="LL17Forever" || code=="liujiaying" || code=="leibailong"){
			document.getElementById("login").style.display="none";
			document.getElementById("content").style.display="";
			//创建div
			var dayDiv = document.createElement('div');
			dayDiv.innerHTML = "<div class='midb'><font size='8' color='4589ae'>今天是我们爱的</font></div><div class='midb'>"+
			"<font size='8' color='4589ae'>第<span>"+day+"</span>天</font></div>";
			var tDiv = document.getElementById("title");
			tDiv.appendChild(dayDiv);
		}else{
			alert("你输入爱的密码不正确!,请重新输入!");
			document.getElementById("code").value="";
		}
	}
	
	function getDays(strDateStart){
	   var  strDateEnd = getNowFormatDate();
	   var strSeparator = "-"; //日期分隔符
	   var oDate1;
	   var oDate2;
	   var iDays;
	   oDate1= strDateStart.split(strSeparator);
	   oDate2= strDateEnd.split(strSeparator);
	   var strDateS = new Date(oDate1[0] + "-" + oDate1[1] + "-" + oDate1[2]);
	   var strDateE = new Date(oDate2[0] + "-" + oDate2[1] + "-" + oDate2[2]);
	   iDays = parseInt(Math.abs(strDateS - strDateE ) / 1000 / 60 / 60 /24)//把相差的毫秒数转换为天数 
	   return iDays;
	}
	
	//获取当前时间，格式YYYY-MM-DD
    function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }