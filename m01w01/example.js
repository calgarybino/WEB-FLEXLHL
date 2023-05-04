console.log(process.argv);
const commmandLineArg = process.argv.slice(2);
//console.log(commmandLineArg);
let sum = 0;
for (const item of commmandLineArg) {
  //console.log(item);
  const convetedToNum = Number(item);
  if (Number.isInteger(convetedToNum) && convetedToNum > 0) {
    sum += convetedToNum;
  }
}
console.log("sum =", sum);
