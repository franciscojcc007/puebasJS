
const set = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola", "HOLA"]);
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(false);
set2.add("hola");
set2.add("HOLA");
console.log(set2);

for(item of set){
  console.log(item);
}
set2.forEach(item => console.log((item)));

let arr = Array.from(set);
console.log(arr);

console.log(set.has("hola"));

/********* uso de Set ⬆️***********/
