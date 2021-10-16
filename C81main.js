canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")
color = "red"
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 3
ctx.arc(60, 70, 50, 0, 2*Math.PI)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 3
ctx.arc(60, 70, 30, 0, 2*Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown", my_mouse)
function my_mouse(e){
    mouse_x = e.clientX - canvas.offsetLeft
    mouse_y = e.clientY - canvas.offsetTop
    color = document.getElementById("colorname").value
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 3
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI)
    ctx.stroke()
}
function cleararea(){
    ctx.clearRect(0, 0, 800, 600)
}