// document.getElementById('counter').innerText = 5

let count = 0
let counter =  document.getElementById('counter')
let saveEl = document.getElementById('save-el')

 function increment(){
  count += 1
  counter.textContent = count
 }
 
 function save(){
  let saves = count + '- '
  saveEl.textContent += saves
  counter.textContent = 0
  count = 0
  console.log(count)
 }

