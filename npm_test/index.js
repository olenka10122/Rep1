import * as ScriptModule from "./script.js";
import lodash from "lodsash";


const {cloneDeep} = lodash;

console.log('Hello world');
ScriptModule.sayHi();

console.log(ScriptModule.user);

const arr = [];
const copyArr = cloneDeep(arr);
copyArr.push("1");
console.log(arr);



