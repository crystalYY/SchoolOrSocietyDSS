

/*存放最终选择的影响因素的数组,已排序*/
var sortFactorsArray=[];
addEvent($('sortFactors'),'click',function(event){
	var sortFactorsInput=$('sortFactors').getElementsByTagName('input');
	var tar=event.target||event.srcElement;

	//解决label标签 触发两次点击事件的bug
	if(tar.nodeName.toLowerCase()=='label'){
		return;
	}
	this.style.borderWidth='0px';
	for(var i=0;i<sortFactorsInput.length;i++){
		sortFactorsInput[i].removeAttribute('disabled');
	}
	if(tar.nodeName.toLowerCase()=='input'){
		//同时满足已选择项为三个并且此次点击的为之前未选择项条件时再把为选的多选项设置为禁用
		if(sortFactorsArray.length>=3&&tar.checked==true){
			alert('您已经选择了3项！')
			tar.checked=false;//设置此次选择无效
			for(var i=0;i<sortFactorsInput.length;i++){
				if(sortFactorsInput[i].checked==false){
					sortFactorsInput[i].setAttribute('disabled','');
				}
			}
		}else{
			if(tar.checked==true){
				sortFactorsArray.push(tar.value);//已选择项push进数组
			}else if(tar.checked==false){
				sortFactorsArray.removeByValue(tar.value);//选择后又删除的项也从数组中移除
				getSibling(tar).innerHTML='';
			}else{
			}		
		}				
	}else{
	}
	//计数
	$('totalFactor1').innerHTML=sortFactorsArray.length;
	//实时添加序号
	for(var i=0;i<sortFactorsInput.length;i++){
		var loca=sortFactorsArray.indexOf(sortFactorsInput[i].value);
		
		if(loca!=-1){
			var orderSpan=getSibling(sortFactorsInput[i]);
			orderSpan.innerHTML=(loca+1);
		}
	}
		
});

//character计数器
var count=0;
addEvent($('character'),'click',function(event){
	var tar=event.target||event.srcElement;
	if(tar.nodeName.toLowerCase()=='label'){
		return;
	}
	$('characters').style.borderWidth='0px';
	var characterInput=this.getElementsByTagName('input');
	for(var i=0;i<characterInput.length;i++){
		characterInput[i].removeAttribute('disabled');
	}
	if(count>=4&&tar.checked==true){
		alert('您已经选择了4项！');
		tar.checked=false;
		for(var i=0;i<characterInput.length;i++){
			if(characterInput[i].checked==false){
				characterInput[i].setAttribute('disabled','');
			}
		}
	}else{
		if(tar.checked==true){
			count++;
		}else if(tar.checked==false){
			count--;
		}else{
		}
	}
	
	$('totalFactor2').innerHTML=count;
});

//验证表单提交
addEvent($('btn1'),'click',function(event){
	if(sortFactorsArray.length==0){
		$('locate1').click();
		$('sortFactors').style.borderWidth='1px';
		$('sortFactors').style.borderStyle='solid';
		$('sortFactors').style.borderColor='#DC3522';
		event.preventDefault();
		return false;
	}
	if(count==0){
		$('locate2').click();
		$('characters').style.borderWidth='1px';
		$('characters').style.borderStyle='solid';
		$('characters').style.borderColor='#DC3522';
		event.preventDefault();
		return false;
	}
});

//进度条

addEvent(document.body,'click',function(event){
	var compeleCount=0;
	var checkBoxMark1=true;
	var checkBoxMark2=true;
	var tar=event.target||event.srcElement;
	if(tar.nodeName.toLowerCase()=='label'){
		return;
	}
	var radioElements=getElementsByClassName('radio');
	//判断复选框是否选中
	if(sortFactorsArray.length!=0&&checkBoxMark1){
		checkBoxMark1=false;
		compeleCount++;
	}
	if(sortFactorsArray.length==0&&!checkBoxMark1){
		checkBoxMark1=true;
		compeleCount--;
	}
	if(count!=0&&checkBoxMark2){
		checkBoxMark2=false;
		compeleCount++;
	}
	if(count==0&&!checkBoxMark2){
		checkBoxMark2=true;
		compeleCount--;
	}
	for(var i=0;i<radioElements.length;i++){
		var radioInputs=radioElements[i].getElementsByTagName('input');
		for(var j=0;j<radioInputs.length;j++){
			if(radioInputs[j].checked==true){
				compeleCount++;
			}
		}
	}
	var percent=compeleCount/19*100;
	var percentFixed=percent.toFixed(2);
	$('completeNumber').innerHTML=percentFixed+'%';
	$('inner').style.height=percentFixed/100*200+'px';
});

function $(id){
	return document.getElementById(id);
}	

//从数组删除指定值元素
Array.prototype.removeByValue = function(val) {
  for(var i=0; i<this.length; i++) {
    if(this[i] == val) {
      this.splice(i, 1);
      break;
    }
  }
}

//事件监听
function addEvent(obj,event,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+event,fn);
	}else{
		obj.addEventListener(event,fn,false);
	}
}

//获取兄弟节点
function getSibling(node){
	var n=node.nextSibling;
	while(n&&n.nodeType!=1){//
		n=n.nextSibling;
	}
	return n;
}
//通过class获取元素
function getElementsByClassName(className){
	var wholeObj=document.getElementsByTagName('*');
	var resultObj=[];
	var temp=[];
	for(var i=0;i<wholeObj.length;i++){
		temp=wholeObj[i].className.split(' ');
		for(var j=0;j<temp.length;j++){
			if(temp[j]==className){
				resultObj.push(wholeObj[i]);
			}
		}
	}
	return resultObj;
}
