// Get all DOM elements to manipulate
let timeIn = document.querySelector("#time-in")
let timeOut = document.querySelector("#time-out")
const timeTable = document.querySelector('#time-table')
const appendTimeIn = document.querySelector('#appendTimeIn')
const appendTimeOut = document.querySelector('#appendTimeOut')
const appendTotal = document.querySelector('#appendTotalTime')
const appendAmount = document.querySelector('#appendAmount')
const appendVAT = document.querySelector('#appendVAT')
const appendVatSales = document.querySelector('#appendVatSales')


let difference
let VAT, VatSales 

const compute = hours => {
    let amount

    // If num of hours is less than 3
    // Total is 50
    if(hours <= 3) {
        amount = 50
    } else if (hours > 3) { // If num hours is more than 3
        // Total is 50 + 10 pesos per additional hour
        hours -= 3
        amount = hours * 10
        amount += 50
    }

    VAT = amount * .12
    VatSales = amount - VAT

    appendAmount.innerHTML = amount
    appendVAT.innerHTML = VAT
    appendVatSales.innerHTML = VatSales
}

// Convert milliseconds to time respectively
const convert = milliseconds => {
    let seconds = Math.floor(milliseconds / 1000)
    let minutes = Math.floor(seconds / 60)
    
    // If number of hours is 3, get the floor
    // Proceeding hours will apply fraction of hour ceil
    let hours = minutes < 180 ? Math.floor(minutes / 60) : Math.ceil(minutes / 60)
  
    seconds %= 60
    minutes %= 60
    hours %= 24

    appendTotal.innerHTML = (`${hours}:${minutes}:${seconds}`)
    compute(hours)
}

// Get time now function and return aall data collected
const getTime = () => {
    let timeNow = new Date()
    
    let year = timeNow.getFullYear()
    let month = timeNow.getMonth()
    let day = timeNow.getDay()
    let hour = timeNow.getHours()
    let minute = timeNow.getMinutes()
    let second = timeNow.getSeconds()

    
    return {
        timeNow,
        year, month,day,
        hour,minute, second
    }
} 

// Get time in date
timeIn.addEventListener('click', _ => {
    const { timeNow,
        year, month,day,
        hour,minute, second
    } = getTime()

    timeIn = timeNow
    appendTimeIn.innerHTML = (`${year}/${month}/${day}  ${hour}-${minute}-${second}`)

})

// Get time out date
timeOut.addEventListener('click', _ => {
    const { timeNow,
        year, month,day,
        hour,minute, second
    } = getTime()
    timeOut = timeNow

    appendTimeOut.innerHTML = (`${year}/${month}/${day}  ${hour}-${minute}-${second}`)
    
    // Get time difference
    difference = Math.abs(timeIn - timeOut)

    convert(difference)
})

