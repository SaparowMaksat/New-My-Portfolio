

let toggle = document.querySelector('.toggle')
let top__bar = document.querySelector('.top__bar')
let navigation = document.querySelector('.navigation')
let main = document.querySelector('.main')
let themeSwitch = document.querySelector('.theme-switch')
let body = document.querySelector('body')


toggle.onclick = function () {
	toggle.classList.toggle('active')
	top__bar.classList.toggle('active')
	navigation.classList.toggle('active')
	main.classList.toggle('active')
}

// theme switch toggle

themeSwitch.onclick = function () {
	body.classList.toggle('dark')
}

// now, we fix menu active class issue for mobile devices

function toggleMenu() {
	let navigation = document.querySelector('.navigation')
	let main = document.querySelector('.main')
	navigation.classList.remove('active')
	main.classList.remove('active')
}