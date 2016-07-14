var Dots = [];


function rand(m,n){
	return Math.round(Math.random()*(n-m) + m);
}

function getDots(){
	Dots = [];
	for(var i=0; i<size; i++){
		var x = rand(0,width);
		var y = rand(0,height);
		var colors = "rgba("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+","+rand(0,0.8)+")";
		Dots.push({
			x : x,
			y : y,
			color : colors,
			cap : 0
		});
	}
}
getDots();

function drawCircle(arr){
	        ctx.save();
	        for(var i=0; i<size; i++){
	        ctx.beginPath();
	    	var o = Dots[i];
	    	var r = arr[i]/256*80;
	    	ctx.arc(o.x , o.y , r , 0 , Math.PI*2 , false);
	    	o.x++;
	    	if(o.x > width){
	    		o.x = 0;
	    	}
	    	var circle = ctx.createRadialGradient(o.x, o.y ,0 , o.x, o.y, r);
	    	circle.addColorStop(0,"#fff");
	    	circle.addColorStop(0.5,o.color);
	    	circle.addColorStop(1,"rgba(255,255,255,0.1)");

	    	ctx.fillStyle = circle;
	    	ctx.fill();
	    	ctx.closePath();
	    	}
	    	ctx.restore();

}
