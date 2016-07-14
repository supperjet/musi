var box = $("#box")[0];
var height,width;
var lineGradient;


var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d")
    box.appendChild(canvas);



// 创建resize()函数动态获取canvas的width,height
function resize(){
	height = box.clientHeight;
	width = box.clientWidth;
	canvas.width = width;
	canvas.height = height;

	lineGradient = ctx.createLinearGradient(0,0,0,height);
	lineGradient.addColorStop(0,"rgba(255,0,51,1)");
	lineGradient.addColorStop(0.7,"rgba(204,0,255,1)");
	lineGradient.addColorStop(1,"rgba(102,102,204,1)");

	getDots();
}

resize();
window.onresize = resize;

draw.type = "column";
function draw(){
     ctx.clearRect(0,0,width,height);
     if(draw.type == "column"){
             drawRect(arr);
	    }else if(draw.type == "dot"){
	    	drawCircle(arr);
	    }else if(draw.type == "line"){
	    	drawLine();
	    }
}



function drawRect(arr){
	var w = width / size;
	var capH = 8;
    ctx.save(); // 矩形宽度
	for(var i=0; i<size; i++){
		var h = arr[i]/256*height;
		ctx.fillRect(w*i*1.3 , height-h , 13 , h);
		ctx.fillRect(w*i*1.3 , height-(Dots[i].cap+capH) , 13 , capH);
		Dots[i].cap--;
		if(Dots[i].cap < 0){
			Dots[i].cap = 0;
		}
		if(h > 0 && Dots[i].cap < h +40){
			Dots[i].cap = h + 40 > height - capH ? height-capH : h+40
		}
		ctx.fillStyle = lineGradient;
        ctx.fill();
    }

    ctx.restore();
}

