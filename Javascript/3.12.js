let n="0147"
kq=""
for (let x in n) {
    if (n[x]==0) {
        kq=kq + "A"
    }
    else if (n[x]==1) {
        kq=kq + "B"
    }
    else if (n[x]==2) {
        kq=kq + "C"
    }
    else if (n[x]==3) {
        kq=kq + "D"
    }
    else if (n[x]==4) {
        kq=kq + "E"
    }
    else if (n[x]==5) {
        kq=kq + "F"
    }
    else if (n[x]==6) {
        kq=kq + "G"
    }
    else if (n[x]==7) {
        kq=kq + "H"
    }
    else if (n[x]==8) {
        kq=kq + "K"
    }
    else  {
        kq=kq + "L"
    }
}
console.log(kq)
let k="1478"
let so=["A","B","C","D","E","F","G","H","K","L"]
let out=""
for (let x of k) {
    out += so[x]
}

console.log(out)
