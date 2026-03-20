let a=4
let b=2
let c=4
console.log(a)
console.log(b)
console.log(c)
if ((a+b)>c && (a+c)>b && (b+c)>a) {
    if (a*a==b*b+c*c || b*b==a*a+c*c|| c*c==a*a+b*b) {
        console.log("Tam giac vuong")
    }
    else if (a==b && a==c &&b==c) {
        console.log("Tam giac deu")
    }
    else if (a==b || b==c || a==c) {
        console.log("Tam giac can")
    }
    else {
        console.log("Tam giac loai khac")
    }
}
else {
    console.log("Khong hop le")
}