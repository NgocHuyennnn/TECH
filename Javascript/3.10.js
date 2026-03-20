let n=5
for (let i=1; i<=n;i++) {
    console.log(i)
}
let m=17
let x=0
while (x<n) {
    for (let j=1;j<=n;j++) {
    process.stdout.write(j + " ")}
    x=x+1
    console.log()
    }
for (let k=1; k<=m;k++)  {
    process.stdout.write(k + " ")
    if (k%5==0) {
        console.log()
    }
}
