
const arr = []

for (let i = 0; i < Infinity; i++) {
    let str = prompt("nmadurni ',' orqali kiriting").split(',')
    funcNomi = str[0].toLowerCase()

    if (str.length > 1) {

        isim = str[1].trim()
    }


    if (funcNomi == 'add') {
        arr.push(isim)
    } else if (funcNomi == 'del') {
        let index = arr.indexOf(isim)
        if (index !== -1) {
            arr.splice(index, 1)
        }
    } else if (funcNomi == 'stop') {
        break
    }
    console.log(arr);
}