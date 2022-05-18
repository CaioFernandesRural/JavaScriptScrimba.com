const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const totalEl = document.getElementById("total-value")
const tasksDiv = document.getElementById("tasks")
const totalDiv = document.getElementById("total")

const availableServices = ["Wash Car", "Mow Lawn", "Pull Weeds"]

let requestedServices = []
let totalCost = 0

washBtn.addEventListener("click", function () {
    requestedServices[0] = availableServices[0]
    console.log(requestedServices)
    totalCost += 10
    display(requestedServices)
})
mowBtn.addEventListener("click", function () {
    requestedServices[1] = availableServices[1]
    console.log(requestedServices)
})
pullBtn.addEventListener("click", function () {
    requestedServices[2] = availableServices[2]
    console.log(requestedServices)
})

function display(array) {
    for (let i = 0; i < array.length; i++) {
        tasksDiv.innerHTML += `<p class="service">${array[i]}</p>`;
        totalDiv.innerHTML += `<p class="service"><b class="dol">$</b>10</p>`
    }
    totalEl.textContent = `$${totalCost}`
    
}