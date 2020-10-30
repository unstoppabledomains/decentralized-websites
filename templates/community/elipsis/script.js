//Substitute vh unit for css

function setVh() {
	let cH = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--currentheight', `${cH}px`)
}

setVh()

window.addEventListener('resize', setVh)


//Randomize background circles

const elipsis = document.querySelector('.background')
let q = 0
while (q < elipsis.children.length) mutateBorder(elipsis.children[q++])

function mutateBorder(element) {
	const v = [...new Array(4)].map(() => randomBetween(25, 50))
	const [_1, _2, _3, _4] = v
	const [_R1, _R2, _R3, _R4] = v.map(n => 100 - n)
	const borderRadius = `${_1}% ${_R1}% ${_R2}% ${_2}% / ${_3}% ${_4}% ${_R4}% ${_R3}%`
	element.style.borderRadius = borderRadius
}

function randomBetween(s, l) { return s + Math.trunc(l * Math.random()) }


//Trigger visual changes on scroll from/to initial screen

const main = document.querySelector('.main')
const body = document.querySelector('body')

let scrollCheck = null
main.addEventListener('scroll', (e) => {
	if (main.children[0].getBoundingClientRect().y < window.innerHeight / -4) {
		if (scrollCheck !== false) body.classList.add("onscroll")
		scrollCheck = false
	} else {
		if (scrollCheck !== true) body.classList.remove("onscroll")
		scrollCheck = true
	}
}, { passive: true })


//Scroll main on wheel or touch from anywhere

window.addEventListener('wheel', (e) => {
	if (e.target.closest('.main')) return
	main.scrollBy(0, e.deltaY)
})

let initialTouch = null

window.addEventListener('touchstart', function (e) {
	initialTouch = e.changedTouches[0]
});

window.addEventListener('touchend', function (e) {
	if(e.target.closest('.onscroll')) return
	if(e.target.closest('.main')) return
	const diff = initialTouch.screenY - e.changedTouches[0].screenY
	main.scrollBy(0, diff)
})