// How to get a number from a Input field 
// 1. get element 
// 2. create a variable 
// 3.value
// 4.parse float 


document.getElementById('btn-add-money').addEventListener('click', function(event){
event.preventDefault()
const addMoney= getInputFieldById('input-add-money')
const pinNumber = getInputFieldById('input-pin-number')
    console.log(addMoney,pinNumber)

})