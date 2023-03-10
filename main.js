const divs = document.querySelectorAll('.con'),
	msg = document.querySelector('#result'),
	span = document.querySelector('span'),
	pb = document.querySelector('.best')

let timeout
let startTime
let endTime
let results = []
let best

divs[0].addEventListener('click', () => {
	let time = (Math.random() * 3 + 2).toFixed(0)
	divs[0].classList.remove('active')
	divs[1].classList.add('active')

	timeout = setTimeout(() => {
		divs[1].classList.remove('active')
		divs[2].classList.add('active')
		startTime = performance.now()
	}, time * 1000)
})

divs[1].addEventListener('click', () => {
	divs[1].classList.remove('active')
	divs[0].classList.add('active')
	msg.textContent = `too soon`
	span.textContent = 'click to continue'
	clearTimeout(timeout)
})

divs[2].addEventListener('click', () => {
	endTime = performance.now()
	let last = (endTime - startTime).toFixed(0)
	divs[2].classList.remove('active')
	divs[0].classList.add('active')
	msg.textContent = `${last} ms`
	span.textContent = 'click to continue'
	
	results.push(last)
	best = Math.min(...results)
	pb.textContent = `personal best: ${localStorage.getItem("time")} ms`
	if (localStorage.getItem("time") > best || !localStorage.getItem("time")) {
		localStorage.setItem("time", best)
	}
})
