function Grid() {
	this.x = scale * 3;
	this.y = canvas.height - scale * 3;

	this.clear = function () {
		for (let i = 0; i < canvas.width; i += scale) {
			for (let j = 0; j < canvas.height; j += scale) {
				this.removeRect(i, j);
			}
		}
		this.draw();
	};

	this.drawRect = function (X, Y) {
		X = this.x + scale * (X - 1);
		Y = this.y - scale * Y;
		ctx.fillStyle = "#f72585";
		ctx.fillRect(X + 1, Y + 1, scale - 2, scale - 2);
	};

	this.removeRect = function (X, Y) {
		ctx.fillStyle = "#3e3e3e";
		ctx.fillRect(X + 1, Y + 1, scale - 2, scale - 2);
	};

	// this.hover = function(x, y) {
	//     x = Math.floor((x/scale)) * scale;
	//     y = Math.floor((y/scale)) * scale;
	//     ctx.fillStyle = "#333333";
	//     ctx.fillRect(x+1, y+1, scale-2, scale-2);
	//     //remove color from surrounding
	//     this.removeRect(x-scale, y-scale);
	//     this.removeRect(x+scale, y+scale);
	//     this.removeRect(x+scale, y);
	//     this.removeRect(x-scale, y);
	//     this.removeRect(x, y-scale);
	//     this.removeRect(x, y+scale);
	// }

	this.draw = function () {
		//reset
		ctx.fillStyle = "#3e3e3e";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		this.x = scale * 3;
		this.y = canvas.height - scale * 3;

		//the grid
		//vertical
		for (let i = 0; i <= canvas.width; i += scale) {
			ctx.beginPath();
			ctx.moveTo(i, 0);
			ctx.lineTo(i, canvas.height);
			ctx.strokeStyle = "#787878";
			ctx.stroke();
		}
		//horizontal
		for (let i = 0; i <= canvas.height; i += scale) {
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
		if (scale >= 10) {
			for (let i = scale; i < canvas.width; i += scale) {
				ctx.beginPath();
				ctx.moveTo(i, this.y);
				ctx.lineTo(i, this.y + 5);
				ctx.strokeStyle = "#05e6f2";
				ctx.stroke();
			}
			for (let i = scale; i < canvas.height; i += scale) {
				ctx.beginPath();
				ctx.moveTo(this.x - 5, i);
				ctx.lineTo(this.x, i);
				ctx.strokeStyle = "#05e6f2";
				ctx.stroke();
			}
		}

		//numbers in x-axis
		if (scale >= 20) {
			let num = -2;
			for (let i = scale; i < canvas.width; i += scale) {
				ctx.textBaseline = "top";
				ctx.textAlign = "center";
				ctx.font = "15px Arial";
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(num, i - 10, this.y + 4);
				num++;
			}

			//numbers in y-axis
			num = -2;
			for (let i = scale; i < canvas.height; i += scale) {
				ctx.textBaseline = "top";
				ctx.textAlign = "center";
				ctx.font = "15px Arial";
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(num, this.x - 10, canvas.height - i + 5);
				num++;
			}
		}
	};
}
