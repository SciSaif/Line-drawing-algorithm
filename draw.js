const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
let scale = 30;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

const x1Input = document.querySelector("#X1");
const y1Input = document.querySelector("#Y1");
const x2Input = document.querySelector("#X2");
const y2Input = document.querySelector("#Y2");
const startBtn = document.querySelector("#start-btn");
const playBtn = document.querySelector("#play-btn");
const info = document.querySelector("#info");
const small = document.querySelector("#small");
const large = document.querySelector("#large");
const stepTable = document.querySelector("#step-table");
const stepTableTable = document.querySelector("#step-table-table");

var grid;


(function setup() {
	grid = new Grid();
	grid.draw();

    small.addEventListener('click', () => {
        grid.clear();
        scale = 30
        grid.draw();
    });

    large.addEventListener('click', () => {
        grid.clear();
        scale = 20;
        grid.draw();
    });

    playBtn.addEventListener('click', () => {
        grid.clear();
        let x1 = x1Input.value;
		let y1 = y1Input.value;
		let x2 = x2Input.value;
		let y2 = y2Input.value;
		let deltax = x2 - x1;
		let deltay = y2 - y1;
		let steps = Math.max(Math.abs(deltax), Math.abs(deltay));
		let m = (deltay / deltax).toFixed(3);
		let xInc = (deltax / steps).toFixed(3);
		let yInc = (deltay / steps).toFixed(3);
        let count = 0;
        window.setInterval(()=> {
            if(count > steps) {
                return;
            }
            count++;
            grid.drawRect(Math.round(x1), Math.round(y1));

            x1 = +x1 + +xInc;
            y1 = +y1 + +yInc;
        }, 100);
    });

	startBtn.addEventListener("click", () => {
        grid.clear();
        // info.innerHTML = "";
        // stepTable.innerHTML = `
        //     <table class="table" id="step-table-table">
        //     </table>`;


        let x1 = x1Input.value;
		let y1 = y1Input.value;
		let x2 = x2Input.value;
		let y2 = y2Input.value;
		let deltax = x2 - x1;
		let deltay = y2 - y1;
		let steps = Math.max(Math.abs(deltax), Math.abs(deltay));
		let m = (deltay / deltax).toFixed(3);
		let xInc = (deltax / steps).toFixed(3);
		let yInc = (deltay / steps).toFixed(3);
        let count = 1;
		const code = `<div class="row">
                        <div class="col">
                            <h5 id="delta-x">Δ x = ${deltax}</h5>
                            <h5 id="delta-y">Δ y = ${deltay}</h5>
                            <h5 id="m"><sup>Δy</sup> &#8260; <sub>Δx</sub> =${m} </h5>
                        </div>
                        <div class="col">
                            <h5 id="steps"> steps = ${steps}</h5>
                            <h5 id="x-inc"> x-inc = ${xInc == 1 ? Math.round(xInc) : xInc}</h5>
                            <h5 id="y-inc"> y-inc = ${yInc == 1 ? Math.round(yInc) : yInc}</h5>
                        </div>
                      </div>`;
		const code2 = `<button class="btn mx-auto" id="next-btn">Next</button>`;
		info.insertAdjacentHTML("beforeend", code);
		stepTable.insertAdjacentHTML("afterbegin", code2);
		const code3 = `                        
        <thead class="thead">
        <tr>
              <th scope="col">#</th>
              <th scope="col">x</th>
              <th scope="col">y</th>
              <th scope="col">rounded ${xInc == 1 ? "y" : "x"}</th>
            </tr>
            </thead>
          <tbody id="table-body">
          <tr>
            <th scope="row">${count}</th>
            <td>${xInc == 1 ? Math.round(x1) : x1}</td>
              <td>${yInc == 1 ? Math.round(y1) : y1}</td>
              <td>${xInc == 1 ? Math.round(y1) : Math.round(x1)}</td>
              </tr>
            </tbody>
            `;
		stepTableTable.insertAdjacentHTML("afterbegin", code3);

		grid.drawRect(x1, y1);

		const nextBtn = document.querySelector("#next-btn");
		nextBtn.addEventListener("click", () => {
            steps--;
            count++;
            if (steps < 0) {
                nextBtn.innerHTML = "DONE :)";
                return;
            } 
            x1 = +x1 + +xInc;
            y1 = +y1 + +yInc;
            grid.drawRect(Math.round(x1), Math.round(y1));
			const tableBody = document.querySelector("#table-body");
			const code4 = `
            <tr>
              <th scope="row">${count}</th>
              <td>${xInc == 1 ? Math.round(x1) : (x1).toFixed(4)}</td>
              <td>${yInc == 1 ? Math.round(y1) : (y1).toFixed(4)}</td>
              <td>${xInc == 1 ? Math.round(y1) : Math.round(x1)}</td>
            </tr>`;
			tableBody.insertAdjacentHTML("beforeend", code4);
		});
	});

	// canvas.addEventListener('mousemove',  (e)=> {
	//     var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
	//     var X = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas
	//     var Y = Math.round(e.clientY - cRect.top);   // from the X/Y positions to make
	//     // console.log(canvasX + " " + canvasY);
	//     grid.hover(X, Y);
	// });
	canvas.addEventListener("click", () => {
		console.log("clicked");
		grid.drawRect();
	});
})();
