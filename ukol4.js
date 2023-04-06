numbers.forEach((number) => {
	console.log(number)
})

numbers.forEach((number) => {
	console.log(number * number)
})

numbers.forEach((number) => {
	if (number < 0) {
		console.log(number)
	}
})

numbers.forEach((number) => {
	if (number < 0) {
		console.log(-1 * number)
	} else {
		console.log(number)
	}
})

numbers.forEach((number) => {
	if (number % 2 === 0) {
		console.log(number)
	}
})

numbers.forEach((number) => {
	if (Math.abs(number) % 3 === 0) {
		console.log(number)
	}
})

numbers.forEach((number) => {
	console.log(numbers.indexOf(5) - numbers.indexOf(number))
})

numbers.forEach((number) => {
	const distance = numbers.indexOf(5) - numbers.indexOf(number)
	console.log(distance * distance)
})

let negativeCount = 0
numbers.forEach((number) => {
	if (number < 0) {
		negativeCount++
	}
})
console.log('Počet záporných:', negativeCount)

let evenSum = 0
numbers.forEach((number) => {
	if (number % 2 === 0) {
		evenSum += number
	}
})
console.log('Součet sudých:', evenSum)

let positiveSum = 0
numbers.forEach((number) => {
	if (number > 0) {
		positiveSum += number
	}
})
console.log('Průměr všech:', positiveSum)