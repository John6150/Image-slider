let img = document.createElement('img');
let ar = ["url('01.jpg')", "url('02.jpg')", "url('03.jpg')", "url('04.jpg')"]
let count = 0

document.body.style.backgroundImage = ar[0]
document.body.style.backgroundSize = "cover"
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.backgroundPosition = "center"
document.body.style.animationName = "anim"
document.body.style.animationDuration = "200ms"



function prev() {
    for (let i = 0; i < ar.length; i++) {
        document.body.style.animationDuration = "200ms"

        document.body.style.backgroundImage = ar[count -= 1]
        if (count < 0) {
            count = 0;
            console.log(count);
        }
        break
    }
}

function next() {
    for (let i = 0; i < ar.length; i++) {
        document.body.style.backgroundImage = ar[count += 1]

        if (count > ar.length - 1) {
            count = 0;
            document.body.style.backgroundImage = ar[count]

        }
        console.log(count);
        break
    }
}