function Grid() {
	this.x = scale * 3;
	this.y = canvas.height - scale * 3;

	console.log("here");
	this.draw = function () {
		//the grid
		for (let i = 0; i <= canvas.width; i += scale) {
			ctx.beginPath();
			ctx.moveTo(i, 0);
			ctx.lineTo(i, canvas.height);
			ctx.strokeStyle = "#787878";
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(0, i);
			ctx.lineTo(canvas.width, i);
			ctx.strokeStyle = "#787878";
			ctx.stroke();
		}

		// y-axis
		ctx.beginPath();
		ctx.moveTo(this.x, 0);
		ctx.lineTo(this.x, canvas.height);
		ctx.strokeStyle = "#05e6f2";
		ctx.stroke();

		// x-axis
		ctx.beginPath();
		ctx.moveTo(0, this.y);
		ctx.lineTo(canvas.width, this.y);
		ctx.strokeStyle = "#05e6f2";
		ctx.stroke();

		// marking in the axes
		for (let i = scale; i < canvas.width; i += scale) {
			ctx.beginPath();
			ctx.moveTo(i, this.y);
			ctx.lineTo(i, this.y+5);
			ctx.strokeStyle = "#05e6f2";
			ctx.stroke();
		}
		for (let i = scale; i < canvas.height; i += scale) {
			ctx.beginPath();
			ctx.moveTo(this.x-5, i);
			ctx.lineTo(this.x, i);
			ctx.strokeStyle = "#05e6f2";
			ctx.stroke();
		}

		//numbers in x-axis
		let num = -2;
		for (let i = scale; i < canvas.width; i += scale) {
			ctx.textBaseline = "top";
			ctx.textAlign = "center";
			ctx.font = "15px Arial";
			ctx.fillStyle = "#FFFFFF";
			ctx.fillText(num, i-10, this.y + 4);
			num++;
		}

        //numbers in y-axis
        num = -2;
        for (let i = scale; i < canvas.height; i += scale) {
            ctx.textBaseline = "top";
            ctx.textAlign = "center";
            ctx.font = "15px Arial";
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(num, this.x - 10, canvas.height - i +5);
            num++;
        }
	};
}
