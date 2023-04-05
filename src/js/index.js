import { inputRange } from './inputRange.js';

inputRange();

class PassGen {
	constructor() {
		this.password = '';
		this.passCount = 10;
		this.symbols = {
			bigLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
			smallLetters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
			numbers: '0123456789'.split(''),
			specSymbols: '!@#$%^&*_~-'.split(''),
		};

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

let ex1 = new PassGen();
document.write(ex1.password);

function rangeProcent() {
	let max = 25;
	let min = 12;
	let our = 13;
	console.log();
}
