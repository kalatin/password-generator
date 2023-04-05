export function inputRange() {
	let inputContainer = document.querySelector('.password__range');
	let inputRangeValue = inputContainer.querySelector('output');
	let inputRange = inputContainer.querySelector('input');
	setText();
	inputRange.addEventListener('input', setText);

	function setText() {
		let value = inputRange.value;
		let min = inputRange.min;
		let max = inputRange.max;

		inputRangeValue.textContent = value;
		inputRangeValue.style.left = `${((value - min) / (max - min)) * 100}%`;
		inputRangeValue.style.transform = `translate(-${((value - min) / (max - min)) * 100}%,0)`;

		if (value < (+max + +min) / 2) {
			console.log(Math.floor((+max + +min) / 2));
			inputRangeValue.style.paddingLeft = '3px';
		} else if (value >= Math.ceil((+max + +min) / 2)) {
			inputRangeValue.style.paddingLeft = '0px';
			inputRangeValue.style.paddingRight = '0.5px';
		}
	}
}
