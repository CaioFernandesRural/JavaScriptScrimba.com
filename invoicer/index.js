const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const totalEl = document.getElementById("total-value")
const tasksDiv = document.getElementById("tasks")
const totalDiv = document.getElementById("total")
const sendBtn = document.getElementById("send-btn")

const availableServices = [
    {name: "Wash Car",price: 10},
    {name:"Mow Lawn",price: 20},
    {name:"Pull Weeds",price: 30},
]
let requestedServices = []
let totalCost

washBtn.addEventListener("click", function () {
    requestedServices[0] = availableServices[0]
    console.log(requestedServices)
    display(requestedServices)
})
mowBtn.addEventListener("click", function () {
    requestedServices[1] = availableServices[1]
    console.log(requestedServices)
    display(requestedServices)
})
pullBtn.addEventListener("click", function () {
    requestedServices[2] = availableServices[2]
    console.log(requestedServices)
    display(requestedServices)
})
sendBtn.addEventListener("click", function() {
    window.location.reload()
})

function display(array) {
    let newTaskHTML = newTotalHTML =""
    totalCost = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != undefined) {
            newTaskHTML += `<p class="service">${array[i].name}</p>`;
            newTotalHTML += `<p class="service"><b class="dol">$</b>${array[i].price}</p>`
            totalCost += array[i].price
        } 
    }
    tasksDiv.innerHTML = newTaskHTML
    totalDiv.innerHTML = newTotalHTML
    totalEl.textContent = `$${totalCost}`
    
}