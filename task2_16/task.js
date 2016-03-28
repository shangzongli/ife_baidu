/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var cityName=document.getElementById('aqi-city-input').value.trim();
	var val=document.getElementById('aqi-value-input').value.trim();
	/*
				验证不会！
	*/
     //var re=/[^\u4e00-\u9fa5]/;  
            //if(re.test(temp)) return false;  
           // return true;  
    var reg=/^[\u0391-\uFFE5A-Za-z]+$/
     if(!reg.test(cityName)){
      alert('输入的城市名必须为中英文字符');
      return ;
      }
      if(val%1 === 0){}
      else{
        alert('空气质量指数必须为整数');     
        return;
    }
    
	aqiData[cityName]=val;
	console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	 var a='<tr><td>城市</td><td>空气质量</td><td>操作</td></tr><tr>';
	 var a1=a;
	 for (var city in aqiData){
     
	 	a+='<tr><td>'+city+'</td><td>'+aqiData[city]+'</td><td><button onclick=delBtnHandle(this)>删除</button></td></tr>';
         
	 }
	 if(a==a1){
	 	a=" ";
	 }
    document.getElementById('aqi-table').innerHTML=a;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */

function delBtnHandle(city) {
  // do sth.
  //var i=city.parentNode.parentNode.rowIndex
  //document.getElementById('aqi-table').deleteRow(i)
  //alert(city.parentNode.parentNode.firstChild.innerHTML);
  
  delete aqiData[city.parentNode.parentNode.firstChild.innerHTML];
  //alert('删除成功');
  renderAqiList();
}
function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
 	document.getElementById('add-btn').onclick=function(){
 		addBtnHandle();
 	}
}

init();
