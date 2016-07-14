// 定义全局函数用于选择DOM函数
function $(s){
    return document.querySelectorAll(s);
}

// 为每个li绑定click事件
var lis = $("#list li");
// console.log(lis);
for(var i=0,len=lis.length; i<len; i++){
    lis[i].onclick = function(e){
    	// 先取消其他的点击状态
    	for(var j=0; j<lis.length; j++){
    		lis[j].className = "";
    	}
    	draw.type = "column";
    	// 为点击目标设定选中状态
    	this.className = "selected1";

    	// 调用load方法
    	load("/media/"+this.title)
    }
}

// 为header中的li添加click事件
var types = $("#type li");
for(var i=0;i<types.length;i++){
	types[i].onclick = function(){
		for (var j = 0; j < types.length; j++) {
			types[j].className = "";
		}
		this.className = "selected2";
		draw.type = this.getAttribute("data-type");
		console.log(draw.type);
	}
}


// 向服务端发送ajax请求,获取audio数据

var xhr = new XMLHttpRequest();

// 创建AudioContext对象
var ac = new (window.AudioContext || window.webkitAudioContext)();

// 创建用于调节音量的gainNode节点，并将其连接到 ac.destination 上
var gainNode = ac[ac.createGain ? "createGain" : "createGainNode"]();
    gainNode.connect(ac.destination);

// 定义source变量，判断当前歌曲播放状态
var source = null;

// 定义计数器
var count = 0;

// 定义一个load方法，在li被点击的时候需要调用
function load(url){

	var n = ++count;
	// 判断source值，决定是否停止
	/* 等价语句
	   if(source){
		source[source.stop ? "stop" : "noteOff"]();
	}*/
	source&&source[source.stop ? "stop" : "noteOff"]();
	// 使用open方法打开url请求
	xhr.open("GET",url);
	// 设置返回的结果类型,arraybuffer数据类型表示一段二进制数据的缓冲区
	// 理解为服务器返回的音频数据以二进制数据形式返回，便于传递与解压缩
	xhr.responseType = "arraybuffer"
    // 绑定成功的事件,onload 表示请求成功后调用的事件处理形式
    xhr.onload = function(){
    	if(n != count)return;
    	// console.log(xhr.response);
    	// 解码返回对象
    	ac.decodeAudioData(xhr.response,
    		                function(buffer){ // 解码成功执行函数，buffer为解码后的数据
    		                	if(n != count)return;
    		                	var bufferSource = ac.createBufferSource(); // 通过createBufferSource()创建bufferSource节点;
    		                	bufferSource.buffer = buffer; // 为bufferSource的buffer属性传入解码后的数据
    		                	bufferSource.connect(analyser); // 将bufferSource链接到analyser节点上

    		                	// bufferSource.connect(ac.destination); // 链接AudioDestinationNode，
    		                	// 由于gainNode已经连接到ac.destination上，故可删除
    		                	// 由于bufferSource已经链接到analyser节点上,故bufferSource链接到gainNode节点上可删除

    		                	bufferSource[bufferSource.start ? "start" : "noteOn"](0); // 调用bufferSource的start方法播放音乐

    		                	source = bufferSource; // 歌曲播放后将bufferSource保存在source中
    	                    },
    	                    function(err){ // 解码失败执行函数
    	                    	console.log(err);
    	                    });
    };
    // 发送请求
    xhr.send();
}


// 创建音量调节函数
function changeVolume(percent){
	gainNode.gain.value = percent*percent;
}

// 为滑块绑定onchange事件
$("#volume")[0].onchange = function(){
	changeVolume(this.value/this.max)
}
// 调用函数让默认值生效
$("#volume")[0].onchange();