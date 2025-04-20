let input1 = document.getElementById('input1')
let check1 = document.getElementById('check1')

let input2 = document.getElementById('input2')
let check2 = document.getElementById('check2')

let input3 = document.getElementById('input3')
let check3 = document.getElementById('check3')

let input4 = document.getElementById('input4')
let check4 = document.getElementById('check4')

let input5 = document.getElementById('input5')
let check5 = document.getElementById('check5')

let input6 = document.getElementById('input6')
let check6 = document.getElementById('check6')

let input7 = document.getElementById('input7')
let check7 = document.getElementById('check7')

let rightSound = document.getElementById('rightSound')



input1.addEventListener('keyup', (e) => {
    if (input1.value === 'are') {
        rightSound.play()
        input1.style.color = 'deepskyblue'
        check1.style.visibility = 'visible'
        input1.disabled = true
        document.getElementById('input2').focus()
    }
})

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'are') {
        rightSound.play()
        input2.style.color = 'deepskyblue'
        check2.style.visibility = 'visible'
        input2.disabled = true
        document.getElementById('input3').focus()
    }
})

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'am') {
        rightSound.play()
        input3.style.color = 'deepskyblue'
        check3.style.visibility = 'visible'
        input3.disabled = true
        document.getElementById('input4').focus()
    }
})

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'is') {
        rightSound.play()
        input4.style.color = 'deepskyblue'
        check4.style.visibility = 'visible'
        input4.disabled = true
        document.getElementById('input5').focus()
    }
})

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'are') {
        rightSound.play()
        input5.style.color = 'deepskyblue'
        check5.style.visibility = 'visible'
        input5.disabled = true
        document.getElementById('input6').focus()
    }
})

input6.addEventListener('keyup', (e) => {
    if (input6.value === 'am') {
        rightSound.play()
        input6.style.color = 'deepskyblue'
        check6.style.visibility = 'visible'
        input6.disabled = true
        document.getElementById('input7').focus()
    }
})

input7.addEventListener('keyup', (e) => {
    if (input7.value === 'am') {
        rightSound.play()
        input7.style.color = 'deepskyblue'
        check7.style.visibility = 'visible'
        input7.disabled = true
    }
})
