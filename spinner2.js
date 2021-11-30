let max = ['|', '/', '-', '\\','|'];
/////
let x = 2;
for (let i=0;i<max.length;i++){

setTimeout(() => {
    process.stdout.write(`\r${max[i]}  `);
  }, 100*i*2);
}