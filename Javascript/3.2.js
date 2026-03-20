let M1=10
let M2=20
let M3=30
let S=160
phaitra=0
if (S<=100) {
    phaitra=S*M1
}
else if (S<=150) {
    phaitra=100*M1+(S-100)*M2
}
else {
    phaitra=100*M1+50*M2+(S-100-50)*M3
}
console.log("M1=" + M1)
console.log("M2=" + M2)
console.log("M3=" + M3)
console.log("S=" + S)
console.log('Phai tra='+phaitra)