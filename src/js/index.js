class PassGen {
	constructor() {
		this.password = '';
		this.passCount = 12;
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
			// console.log(
			// 	whatObj.includes(whatSymbol),
			// 	whatObj.includes(this.password.at(-1)),
			// 	whatObj.includes(this.password.at(-2)),
			// 	'---',
			// 	whatSymbol,
			// 	this.password
			// );
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

			// console.log(whatKey, whatObj, whatSymbol);
		}
	}
}

let ex1 = new PassGen();
// console.log(ex1);
// console.log(ex1.password.length);
console.log(ex1.password);
// console.log(new Set(ex1.password).size);
