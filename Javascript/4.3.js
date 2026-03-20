function nhap(a,b,c) {
    console.log("Nhap 3 so nguyen:")
    console.log("a="+a)
    console.log("b="+b)
    console.log("c="+c)
    return [a,b,c]
}
function giaipt(a,b,c) {
    let denta=b**2-4*a*c
    if (denta<0) {
        return [denta,x1,x2]
    }
    else if (denta>0) {
        let x1=(-b + Math.sqrt(denta))/(2*a)
        let x2=(-b - Math.sqrt(denta))/(2*a)
        return [denta,x1,x2]
    }
    else {
        let x1 = -b/(2*a)
        let x2 = -b/(2*a)
        return [denta,x1,x2]
    }
}
function inkq(x1,x2) {
    if (denta<0) {
        console.log("Phuong trinh vo nghiem")
    }
    else if (denta>0) {
        console.log("Phuong trinh co hai nghiem")
        console.log("x1="+x1)
        console.log("x2="+x2)
    }
    else {
        console.log("Phuong trinh co nghiem kep")
        console.log("x1=x2="+x1)
    }
}
let [a,b,c] = nhap(1,-4,4)
let [denta,x1,x2] = giaipt(a,b,c)
inkq(x1,x2)