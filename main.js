const divs = document.querySelectorAll('.con'),
	msg = document.querySelector('#result')
let startTime
let endTime

divs[0].addEventListener('click', () => {
	let time = (Math.random() * 3 + 2).toFixed(0)
	divs[0].classList.remove('active')
	divs[1].classList.add('active')

	setTimeout(() => {
		divs[1].classList.remove('active')
		divs[2].classList.add('active')
		startTime = performance.now()
	}, time * 1000)
})

divs[2].addEventListener('click', () => {
	endTime = performance.now()
	divs[2].classList.remove('active')
	divs[0].classList.add('active')
	msg.textContent = `${endTime - startTime} ms`
})
