const name = document.getElementById('name')
const subject = document.getElementById('subject')
const age = document.getElementById('age')
const message = document.getElementById('message')
const container = document.querySelector('.container')
const submit = document.getElementById('submit')

container.addEventListener('click', removeCard)


submit.addEventListener('click', function(){
    let nameValue, subjectValue, ageValue, messageValue

    if(name.value === '' || subject.value === '' || age.value === '' || message.value === ''){
        alert('Please Fill ALL The Inputs First')
    }else{
        nameValue = name.value
        subjectValue = subject.value
        ageValue = age.value
        messageValue = message.value

        let record = document.createElement('div')
        record.classList.add('record')
        record.innerHTML = `<p><span>Name</span> : <span>${nameValue}</span></p><p><span>Age</span> : <span>${ageValue}</span></p> <p><span>Subject</span> : <span>${subjectValue}</span></p> <p><span>Message</span> : <span>${messageValue}</span></p><button class = "close">X</button>`
        container.appendChild(record)

        nameValue = ''
        subjectValue = ''
        ageValue = ''
        messageValue = ''
    }


})


function removeCard(e){
    if(e.target.innerHTML == 'X'){
        e.target.parentElement.remove()
    }
}



