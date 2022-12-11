document.addEventListener('click', function(event) {

	if (event.target.matches('input[type="checkbox"]') === false) return

	const section = event.target.closest('section')

	if (section === null) return

	const progressBar = section.querySelector('progress')

	if (progressBar === null) return

	const tasks = section.querySelectorAll('input[type=checkbox]').length

	const done = section.querySelectorAll('input[type=checkbox]:checked').length

	const completed =  Math.round((done / tasks) * 100)

	progressBar.value = completed

	progressBar.querySelector('[data-id="progress-value"]').innerText = completed

	console.log(tasks, done, completed)
})
