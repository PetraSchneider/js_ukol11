let hodiny = 0
while (hodiny < 24) {
	let minuty = 0
	while (minuty < 60) {
		console.log(`${hodiny}:${minuty.toString().padStart(2, '0')}`)
		minuty++
	}
	hodiny++
}