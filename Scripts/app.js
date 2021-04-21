
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
            addEventListner(imageArr)
        } else if (image === imageArr[1]){
            image.setAttribute('src', defineImageArea2())
            addEventListner(imageArr)
        } else if (image === imageArr[2]) {
            image.setAttribute('src', defineImageArea3())
            addEventListner(imageArr)
        } else {
            image.setAttribute('src', defineImageArea4())
            addEventListner(imageArr)
        }

    }
}

Addsrc(imageArr)

const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];

function addEventListner(imageArr) {
    for (const image of imageArr) {
        image.addEventListener('click', (e) => {
            console.log(e.target.innerText)
        })
    }
}