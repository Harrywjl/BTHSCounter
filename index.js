//Title: Brooklyn Tech Counter
let count = 0
let colorClicks = 0
const saves = []

document.getElementById("increment-btn").addEventListener("click", function() {
    count++
    document.getElementById("count").innerHTML = count
})
document.getElementById("save-btn").addEventListener("click", function() {
    saves.push(count)
    document.getElementById("save").innerHTML = "Previous Entries: " + saves.toString()
})
//console.log(count)
//console.log(saves)

document.getElementById("color").addEventListener("click", function() {
    colorClicks++
    if (colorClicks == 1) {
        let image = document.createElement("div")
        image.id = "cat"
        document.body.insertBefore(image, document.getElementById("script"))
    }
    const colors = ["#D05454", "#DDB55D", "#D7DD5D", "#8FEC95", "#5DDDDD", "#D67CEB", "#EB7CC8"]
    document.getElementsByTagName("div")[0].style.backgroundColor = colors[Math.floor(Math.random() * 7)]
})