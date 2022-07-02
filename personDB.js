
let gender,age,weight,height, activity,calorie

const form = document.forms.main

function addActive (e,value) {
  const items = document.querySelectorAll(`.calculator-${value}__item`)
  items.forEach (el => {
    el.classList.remove('active')
  })

  if (e.target.parentElement.closest(`.calculator-${value}__items`)) {
    e.target.parentElement.classList.add('active')
  }
}
function nextStep (e,variable,name,last,next){
  e.preventDefault()
  if (name === 'gender') {
    gender = form[name].value
  } else if (name === 'activity') {
    activity = form[name].value
  }
  if(variable) {
    document.querySelector(`#step-${last}`).style.display = 'none'
    document.querySelector(`#step-${next}`).style.display = 'block'
    
  }
}


form.age.addEventListener('change',() => {
  if (!form.age.validity.rangeOverflow && !form.age.validity.rangeUnderflow) {
    age = form.age.value
  }
  else {
    alert('Некорректные данные')
  }
})

form.height.addEventListener('change',() => {
  if (!form.height.validity.rangeOverflow && !form.age.validity.rangeUnderflow) {
    height = form.height.value
  }
  else {
    alert('Некорректные данные')
  }
})

form.weight.addEventListener('change',() => {
  if (!form.weight.validity.rangeOverflow && !form.age.validity.rangeUnderflow) {
    weight = form.weight.value
  }
  else {
    alert('Некорректные данные')
  }
})

document.querySelector('.calculator-gender__items').addEventListener('click', (e) => addActive(e,'gender'))

document.querySelector('#step-1-btn').addEventListener('click', (e) => nextStep(e,gender,'gender',1,2))

document.querySelector('.calculator-activity__items').addEventListener('click', (e) => addActive(e,'activity'))

document.querySelector('#step-2-btn').addEventListener('click', (e) => nextStep(e,activity,'activity',2,3))

document.querySelector('#step-result').addEventListener('click',(e)=>{
  e.preventDefault()
  if(age && height && weight) {
    document.querySelector(`#step-3`).style.display = 'none'
    document.querySelector(`#calculator-result`).style.display = 'block'
    const BMI = Math.pow((weight / height), 2)* 100
    document.querySelector('#imt-value').textContent = BMI.toFixed(2)
    if (gender === 'men') {
      calorie = Math.floor(10 * weight) + (6.25 * height) - (5 * age) + 5 * activity
    } else {
      calorie = Math.floor((10 * weight) + (6.25 * height) - (5 * age) - 161 *activity)
    }
    document.querySelector('.value').textContent = calorie
  }
}) 
document.querySelector('.again-btn').addEventListener('click', (e) => {
  window.location.reload()
  document.querySelector(`#calculator-result`).style.display = 'none'
  document.querySelector(`#step-1`).style.display = 'block'

})
