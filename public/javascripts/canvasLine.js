var lines = [];

function drawLine(arr){
	lines = [];
	for(var i=0; i<size; i++){
		var x = Math.sin(arr[i]);
		var y = Math.cos(arr[i]);
		var colors = "rgba("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+","+rand(0,0.8)+")";
		lines.push({
		x : x,
		y : y,
		color : colors
	    });
		var w = lines[i];
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(width/2,height/2);
		ctx.lineTo(w.x,w.y);
		ctx.closePath();

		ctx.strokeStyle = w.color;
		ctx.stroke();
		ctx.restore();
	}
}