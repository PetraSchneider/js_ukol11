const roll = () => {
	return Math.ceil(Math.random() * 6)
}

let counter = 1
let rolledNumber = roll()
while (rolledNumber !== 6) {
	console.log(`Hodilo se cislo ${rolledNumber}`)
	rolledNumber = roll()
	counter += 1
}

console.log(`Šestka se hodila na ${counter}. pokus`)