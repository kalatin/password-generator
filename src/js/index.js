class PassGen {
	constructor() {
		this.password = '';
		this.passCount = 50;
		this.symbols = {
			bigLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
			smallLetters: 'abcdefghijklmnopqrstuvwxyz'.split(''),
			numbers: '0123456789'.split(''),
			specSymbols: '!@#$%^&*()'.split(''),
		};

		for (let i = 0; i < this.passCount; i++) {
			let whatKey = Math.floor(Math.random() * Object.keys(this.symbols).length);
			let whatObj = this.symbols[Object.keys(this.symbols)[whatKey]];
			let whatSymbol = whatObj[Math.floor(Math.random() * Object.keys(whatObj).length)];

			if (this.password.length < 1) {
				this.password += whatSymbol;
			} else if (this.password.length >= 1) {
				let addedLetter = this.password + whatSymbol;

				if (this.password.at(-1) === whatSymbol || this.password.includes(addedLetter.at(-1))) {
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
console.log(ex1.password);
console.log(ex1.password.length);
console.log(new Set(ex1.password).size);
