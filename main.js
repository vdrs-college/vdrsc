let courseName;

for (let i = 0; i < document.querySelectorAll('.item').length; i++) {
	document.querySelectorAll('.item')[i].addEventListener('click', () => {
		courseName = document.querySelectorAll('.item')[i].getAttribute('data-value')
		for (let j = 0; j < document.querySelectorAll('.item').length; j++) {
			document.querySelectorAll('.item')[j].classList.remove('active')
		}
		document.querySelectorAll('.item')[i].classList.add('active')
	})
}

document.querySelector('.back').addEventListener('click', () => {
	document.querySelector('.back').style.display = 'none'
	document.querySelector('.start-page').style.display = 'flex'
	document.querySelector('.course-page').style.display = 'none'
	document.querySelector('.mes').style.display = 'none'
	index = undefined
	document.querySelector('.week1').innerHTML = ''
	document.querySelector('.week2').innerHTML = ''
	document.querySelector('.week3').innerHTML = ''
	document.querySelector('.week4').innerHTML = ''
	document.querySelector('.week5').innerHTML = ''
})

let names = {
	'pr1': '0613-1',
	'pr2': '0613-2',
	'pr3': '0613-3',
	'pr4': '0613-4',
	'tu1': '1015-1',
	'tu2': '1015-2',
	'tu3': '1015-3',
	'ha1': '0411-1',
	'ha2': '0411-2',
	'ha3': '0411-3',
	'gi1': '0721-1',
	'gi2': '0721-2',
	'gi3': '0721-3',
	'pa1': '0214-1',
	'pa2': '0214-2',
	'pa3': '0214-3',
	'xo1': '1013-1',
	'xo2': '1013-2',
	'xo3': '1013-3',
	'xo1t': '1013-1 տեխ',
	'xo2t': '1013-2 տեխ',
	'xo3t': '1013-3 տեխ',
}

// let teachers = {
// 	'Ա․Ա' : 'Ա․ Առաքելյան',
// 	'Ս․Է' : 'Է․ Սարգսյան',
// 	'Ն․Լ' : 'Լ․ Ներսիսյան',
// 	'Հ․Գ' : 'Գ․ Հունանյան',
// 	'Թ․Մ' : 'Մ․ Թովմասյան',
// 	'Գ․Ա' : 'Ա․ Գասպարյան',
// 	'Հ․Սր' : 'Ս․ Հարությունյան',
// 	'Ս․Լ' : 'Լ․ Սիմոնյան',
// 	'Մ․Մ' : 'Մ․ Մնացականյան',
// 	'Մ․Գ' : 'Գ․ Մարգարյան',
// 	'Հ․Ա' : 'Ա․ Հակոբյան',
// 	'Հ․Սու' : 'Ս․ Հակոբյան',
// 	'Մ․Վ' : 'Վ․ Միքայելյան',
// 	'Մ․Ա' : 'Ա․ Միքայելյան',
// 	'Խ․Ա' : 'Ա․ Խալաթյան',
// 	'Մ․Մ' : 'Մ․ Մարգարյան',
// }

let data
fetch('./data/data.json')
	.then(data => data.json())
	.then(data => {
		res = data['Лист1']
		start()
		// console.log(res);
	})
	.catch(err => console.log(err))

function start() {
document.querySelector('.course-btn').addEventListener('click', () => {
	let index;
	if (courseName) {
		let courseFormData = Object.keys(res[0])
		for (let i = 0; i < courseFormData.length; i++) {
			if (courseFormData[i] === names[courseName]) {
				index = courseFormData[i]
				show()
				document.querySelector('.start-page').style.display = 'none'
				document.querySelector('.back').style.display = 'inline-block'
				document.querySelector('.course-page').style.display = 'flex'
				return
			}
		}
	}
	function show() {
		let lessonW1 = 1
		let lessonW2 = 1
		let lessonW3 = 1
		let lessonW4 = 1
		let lessonW5 = 1
		for (let i = 0; i < 10; i++) {
			let newLesson = document.createElement('li')
			newLesson.innerHTML = res[i][index] ? res[i][index] : ''
			newLesson.classList.add('w1')
			newLesson.classList.add('l' + lessonW1)
			document.querySelector('.week1').appendChild(newLesson)
			lessonW1++
		}
		for (let i = 10; i < 20; i++) {
			let newLesson = document.createElement('li')
			newLesson.classList.add('w2')
			newLesson.classList.add('l' + lessonW2)
			newLesson.innerHTML = res[i][index] ? res[i][index] : ''
			document.querySelector('.week2').appendChild(newLesson)
			lessonW2++
		}
		for (let i = 20; i < 30; i++) {
			let newLesson = document.createElement('li')
			newLesson.classList.add('w3')
			newLesson.classList.add('l' + lessonW3)
			newLesson.innerHTML = res[i][index] ? res[i][index] : ''
			document.querySelector('.week3').appendChild(newLesson)
			lessonW3++
		}
		for (let i = 30; i < 40; i++) {
			let newLesson = document.createElement('li')
			newLesson.classList.add('w4')
			newLesson.classList.add('l' + lessonW4)
			newLesson.innerHTML = res[i][index] ? res[i][index] : ''
			document.querySelector('.week4').appendChild(newLesson)
			lessonW4++
		}
		for (let i = 40; i < 50; i++) {
			let newLesson = document.createElement('li')
			newLesson.classList.add('w5')
			newLesson.classList.add('l' + lessonW5)
			newLesson.innerHTML = res[i][index] ? res[i][index] : ''
			document.querySelector('.week5').appendChild(newLesson)
			lessonW5++
		}
		selectLesson()
		setInterval(() => {
			selectLesson()
		}, 1000)
	}
})

}

let timing = [
	[9, 40, '1'], [9, 45, 'd1'], [10, 25, '2'], [10, 30, 'd2'], [11, 10, '3'], [11, 15, 'd3'], [11, 55, '4'], [12, 10, 'd4'],
	[12, 50, '5'], [12, 55, 'd5'], [13, 35, '6'], [13, 40, 'd6'], [14, 20, '7'], [14, 25, 'd7'], [15, 5, '8'], [15, 10, 'd8']
]

let date = new Date()

function selectLesson() {
	let startTime = [9, 0]
	let dateInfo = {
		day: date.getDay(),
		time: [date.getHours(), date.getMinutes()],
		// day: 5,
		// time: [11, 4]
	}
	let day;
	if (dateInfo.time[0] < startTime[0] || (dateInfo.time[0] == startTime[0] && dateInfo.time[1] < startTime[1])) {
		document.querySelector('.mes').innerHTML = 'Դասեր չկան'
		document.querySelector('.mes').style.display = 'block'
	}
	else if (dateInfo.time[0] > timing[timing.length - 1][0] || (dateInfo.time[0] == timing[timing.length - 1][0] && dateInfo.time[1] > timing[timing.length - 1][1])) {
		document.querySelector('.mes').innerHTML = 'Դասեր չկան'
		document.querySelector('.mes').style.display = 'block'
	}
	else {
		for (let i = 0; i < timing.length; i++) {
			if (dateInfo.time[0] < timing[i][0] || (dateInfo.time[0] == timing[i][0] && dateInfo.time[1] <= timing[i][1])) {
				if (timing[i][2].length === 1) day = '.w' + dateInfo.day + '.l' + timing[i][2]
				else if (timing[i][2][0] === 'd') day = '.mes'
				break;
			}
		}
	}
	if (day && day !== '.mes') {
		document.querySelector(day)?.classList.add('time')
		document.querySelector('.mes').style.display = 'block'

		// let teacher = document.querySelector(day)?.innerHTML?.split(' '); 
		// teacher = teacher[teacher.length - 1]
		// console.log(sameWords(teacher, 'Մ․Մ'));
		// let teacherFullName = teachers['Մ․Մ'];
		// console.log(teacherFullName);
		// teacherFullName = ', ' + teacherFullName;
		document.querySelector('.mes').innerHTML = 'Դաս է' // + teacherFullName
	} else if (day && day == '.mes') {
		document.querySelector('.mes').innerHTML = 'Դասամիջոց'
		document.querySelector('.mes').style.display = 'block'
	}
}

function sameWords(w1,w2) {
	for(let i = 0; i < w1.length; i++) {
		console.log(w1[i],w2[i])
		if(w1[i] != w2[i]) return false
	}
	return true
}