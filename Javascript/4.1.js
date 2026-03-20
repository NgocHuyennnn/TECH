function nhap(n) {
    console.log("n="+n)
    return n
}
function giaithua(n) {
    let kq=1
    for (let x=1;x<=n;x++) {
        kq=kq*x
    }
    return kq
}
function inkq(n,X) {
    console.log(n+"!="+X)
}
n=nhap(6)
let kq=giaithua(n)
inkq(n,kq)
