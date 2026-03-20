function nhap(a,b,c) {
    console.log("Nhap 3 so nguyen;")
    console.log("a="+a)
    console.log("b="+b)
    console.log("c="+c)
    return [a,b,c]
}
function max3() {
    let solon=a
    if (solon<b) {
        solon = b
    }
    if (solon<c) {
        solon = c
    }
    return solon
}
function inkq(kq) {
    console.log("So lon nhat la:",kq)}
let [a,b,c] = nhap(5,10,15)
let solon = max3()
inkq(solon)