let x=5.5
let y=10
let toan='+'
let kq
if (toan='+'){
    kq=x+y
}
else if (toan='-'){
    kq=x-y
}
else if (toan='*'){
    kq=x*y
}
else if (toan='/'){
    if (y==0) {
        console.log("Khong hop le")
    }
    else {
        kq=x+y}
}
else {
    console.log("Khong hop le")
}
console.log("x="+x)
console.log("y="+y)
console.log("Phep toan:"+toan)
if (kq!=0) {
    console.log(x+toan+y+"="+kq)
}
