const cursor = document.querySelector(".cursor");
const holes = [...document.querySelectorAll(".hole")];

const scoreEl = document.querySelector("#score span");
let score = 0;

const sound = new Audio(
	"https://raw.githubusercontent.com/0shuvo0/whack-a-mole/main/assets/smash.mp3"
);

function run() {
	let i = Math.floor(Math.random() * holes.length);
	let hole = holes[i];
	let timer = null;

	let img = document.createElement("img");
	img.classList.add("mole");
	img.src =
		"https://raw.githubusercontent.com/0shuvo0/whack-a-mole/main/assets/mole.png";

	img.addEventListener("click", () => {
		sound.play();
		img.src =
			"https://raw.githubusercontent.com/0shuvo0/whack-a-mole/main/assets/mole-whacked.png";
		score += 10;
		scoreEl.textContent = score;
		clearTimeout(timer);
		setTimeout(() => {
			img.remove();
			run();
		}, 500);
	});

	hole.appendChild(img);
	timer = setTimeout(() => {
		img.remove();
		run();
	}, 1500);
}
run();

window.addEventListener("mousemove", (e) => {
	cursor.style.left = e.pageX + "px";
	cursor.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {
	cursor.classList.add("active");
});
window.addEventListener("mouseup", () => {
	cursor.classList.remove("active");
});