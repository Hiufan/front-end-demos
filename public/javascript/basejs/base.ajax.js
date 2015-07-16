var xmlHttp;

function AjaxFunction (){  
    createXMLHttpRequest();  
    if(xmlHttp != null){  
        xmlHttp.onreadystatechange = callBack;  
        xmlHttp.open("GET","https://kyfw.12306.cn/otn/passcodeNew/getPassCodeNew?module=login&rand=sjrand&_" + Math.random());
        // xmlHttp.responseType = 'arraybuffer';
        xmlHttp.send();
    }     
}     
  
//实例化XMLHttpRequest对象  
function createXMLHttpRequest(){

    if(window.XMLHttpRequest){  
        xmlHttp = new XMLHttpRequest();   
    }else if(window.ActiveXObject){  
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }  
}  
  
//指定响应函数  
function callBack(){  
    if(xmlHttp.readyState==4){  
        if(xmlHttp.status==200){  
            //do something with xmlHttp.responseText;
            console.log(xmlHttp.response);
        }
    }
}