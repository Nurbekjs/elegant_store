function timer() {
	const endDate = new Date('Nov 18, 2024, 23:59:59')

	const daysEl = document.querySelector('#days')
	const hoursEl = document.querySelector('#hours')
	const minutesEl = document.querySelector('#minutes')
	const secondsEl = document.querySelector('#seconds')

	let timerInterval
	function updateTimer() {
		const now = new Date()
		const timeDifference = endDate - now
		if (timeDifference <= 0) {
			daysEl.innerText = 0
			hoursEl.innerText = 0
			minutesEl.innerText = 0
			secondsEl.innerText = 0
			clearInterval(timerInterval)
		}
		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		const minutes = Math.floor(
			(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
		)
		const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

		daysEl.innerText = days
		hoursEl.innerText = hours
		minutesEl.innerText = minutes
		secondsEl.innerText = seconds
	}
	updateTimer()
	timerInterval = setInterval(updateTimer, 1000)
}
export default timer
