
const imageArr = document.querySelectorAll('.shop-item-image')

function defineImageArea1() {
    html = `Images/Album1.png`
    return html
}


function defineImageArea2() {
    return html = `Images/Album2.png`
}

function defineImageArea3() {
    return html = `Images/Album3.png`
}

function defineImageArea4() {
    return html = `Images/Album4.png`
}


function Addsrc(imageArr) {
    for (const image of imageArr) {
        if (image === imageArr[0]) {
            image.setAttribute('src', defineImageArea1())
        } else if (image === imageArr[1]){
            image.setAttribute('src', defineImageArea2())
        } else if (image === imageArr[2]) {
            image.setAttribute('src', defineImageArea3())
        } else {
            image.setAttribute('src', defineImageArea4())
        }

    }
}

Addsrc(imageArr)

