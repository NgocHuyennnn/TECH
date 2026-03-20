let a=1
let b=2
let c=3
let p=(a+b+c)/2
let dientich=0
if ((a+b)>c && (a+c)>b && (b+c)>a) {
    dientich=Math.sqrt(p*(p-a)*(p-b)*(p-c))
    console.log('Dien tich='+dientich.toFixed(3))
}

else {
    console.log("Khong hop le")
}
