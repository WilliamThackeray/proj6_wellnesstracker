const saveBtn = document.querySelector('#saveProfile')

saveBtn.addEventListener('click', () => {
  let fname = document.querySelector('input[name=fname]').value
  let lname = document.querySelector('input[name=lname]').value
  let sel = document.querySelector('#physical')
  let emoVal = sel.options[sel.selectedIndex].value
  let emoTxt = sel.options[sel.selectedIndex].text


  localStorage.setItem('w-fname', fname)
  localStorage.setItem('w-lname', lname)
  localStorage.setItem('w-src', emoVal)
  localStorage.setItem('w-txt', emoTxt)
})


const delBtn = document.querySelector('#delProfile')

delBtn.addEventListener('click', () => {
  localStorage.clear()
  location.reload()
})

const checkLS = localStorage.getItem('w-fname')

if (checkLS) { // if not null
  document.querySelector('#name').textContent = `${localStorage.getItem('w-fname')} ${localStorage.getItem('w-lname')}`
  document.querySelector('#emotion').textContent = localStorage.getItem('w-txt')
  document.querySelector('#emoji').src = localStorage.getItem('w-src')
  document.querySelector('#newProfile').classList.add('hide')
  document.querySelector('#myProfile').classList.add('show')
} else {
  document.querySelector('#newProfile').classList.add('show')
  document.querySelector('#myProfile').classList.add('hide')
}
