let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

let lengthmf = 20*3.281; let lengthfm = 20/3.281
let volumelg = 20/3.785; let volumegl = 20*3.281
let masskp = 20*2.205; let masspk = 20/2.205

lengthEl.textContent = 20 + " meters = " + lengthmf.toFixed(3) + " feet | "
lengthEl.textContent += 20 + " feet = " + lengthfm.toFixed(3) + " meters"

volumeEl.textContent = 20 + " liters = " + volumelg.toFixed(3) + " galons | "
volumeEl.textContent += 20 + " galons = " + volumegl.toFixed(3) + " liters"

massEl.textContent = 20 + " kilos = " + masskp.toFixed(3) + " pounds | "
massEl.textContent += 20 + " pounds = " + masspk.toFixed(3) + " kilos"
