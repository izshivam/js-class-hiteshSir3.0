const myObject = {
    JS: "Javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by Apple"
}
// for (const key in myObject) {
//     console.log(key);
// }


// for (const key in myObject) {
//     console.log(myObject[key]);
// }


// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


const programming = ["js", "rb", "py", "java"]
// for (const key in programming) {
//     console.log(key);
// }

// for (const key in programming) {
//    console.log(programming[key]);
// }


const map = new Map()
map.set('IN', "INDIA")
map.set('US', "USA")
map.set('Fr', "FRANCE")
for (const key in map) {
   console.log(key);
}