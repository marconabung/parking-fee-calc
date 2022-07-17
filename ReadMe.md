# Parking Fee Calculator

## Description

This parking fee calculator project is a Web-Based Program using HTML5, CSS3, and Javascript. After reading this documentation, you will be able to create and customize your own parking fee calculator.

## Todo
* The program shall accept Date & Time details containing the parker's entry timestamp. 
* The program shall then compute and display for the time consumed from the parker's entry up to the current time.
* The parking fee computation is:
    - First 3 hours: 50pesos, succeeding hours : 10pesos. (A fraction of an hour is considered an hour, i.e. 2minutes is equivalent to plus 1 hour)
* The program shall display the total amount to be paid by the parker
* The program shall compute for the VAT-Sales and VAT amount of the total parking fee (VAT=Total Amount × 12%      VatSales=Total Amount -VAT)


### Development Process

#### First, create an index.html file and write the html boilerplate as seen below.

```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
```

Since we're only making a simple project, we will only be writing on the rows of each column. We used tables so we can customize it later and we can use `append` and `appendChild` to the elements instead.