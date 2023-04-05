import { inputRange } from './inputRange.js';

inputRange();

class PassGen {
	constructor(count, is) {
		this.password = '';
		this.passCount = count;
		this.symbols = {
			bigLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
			smallLetters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
			numbers: '0123456789'.split(''),
		};
		if (is) {
			this.symbols.specSymbols = '!@#$%^&*_~-'.split('');
		} else {
			console.log('no');
		}

		for (let i = 0; i < this.passCount; i++) {
			let whatKey = Math.floor(Math.random() * Object.keys(this.symbols).length);
			let whatObj = this.symbols[Object.keys(this.symbols)[whatKey]];
			let whatSymbol = whatObj[Math.floor(Math.random() * Object.keys(whatObj).length)];
			if (this.password.length < 1) {
				this.password += whatSymbol;
			} else if (this.password.length >= 1) {
				if (
					this.password.at(-1) === whatSymbol ||
					this.password.includes(whatSymbol) ||
					(whatObj.includes(whatSymbol) &&
						whatObj.includes(this.password.at(-1)) &&
						whatObj.includes(this.password.at(-2)))
				) {
					i--;
					continue;
				} else {
					this.password += whatSymbol;
				}
			}
		}
	}
}

function writePass() {
	let passwordField = document.querySelector('.password__input-text');
	let inputRangeValue = document.querySelector('input[type="range"]').value;
	passwordField.textContent = new PassGen(
		inputRangeValue,
		document.querySelector('input[type="checkbox"]').checked
	).password;
}

document.querySelector('input[type="range"]').addEventListener('input', writePass);
document.querySelector('input[type="checkbox"]').addEventListener('input', writePass);
document.querySelector('.password__input-new').addEventListener('click', writePass);
writePass();
