var analyser = ac.createAnalyser();
var arr;
var size = 64;
    analyser.fftSize = size*2;
    analyser.connect(gainNode);

function visualizer(){

	// 定义数组,储存音频频域数据,长度为frequencyBinCount = fftSize/2;
	 arr = new Uint8Array(analyser.frequencyBinCount);

    // 将分析的数据复制的数组arr中
	analyser.getByteFrequencyData(arr);

	requestAnimationFrame = window.requestAnimationFrame||
	                        window.webkitRequestAnimationFrame||
	                        window.mozRequestAnimationFrame||
	                        window.msRequestAnimationFrame;

    // 定义动画函数用于实时拿到音频数据
    function v(){
    	analyser.getByteFrequencyData(arr);
    	draw(); // 定义绘制函数
    	//console.log(arr);
    	requestAnimationFrame(v);
    }
    requestAnimationFrame(v);
}

 visualizer();