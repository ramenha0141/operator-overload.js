# Operator-Overload.js
operator-overload.js adds overloading to javascript.
It can be written in a simple notation and can be converted by the built-in transpiler to work in vanilla javascript.

Note: This text was translated using the DeepL translation. The translation may not be perfect.
## Installation
### shell :
```
$npm install --save-dev operator-overloadjs
```
### package.json :
```json
"scripts": {
    "build": "overload -d ./src -o ./dist", // To transpile the entire directory
    "transpile": "overload" // To transpile a single file
},
"type": "module"
```
## How to Use
In this example, we overload the "+" operator in the custom array class.
### src/customArray.js :
```javascript
import _overload from "operator-overloadjs";
class CustomArray extends Array {
    [_overload.plus](a) {
        return this.concat(a);
    }
}
const array_a = new CustomArray();
const array_b = new CustomArray();
array_b.push(1, 2, 3);
array_a.push('a', 'b', 'c');
console.log(array_a + array_b);
```
Transpile the source code.
```
$npm run build
```
Alternatively, you can specify the file name directly to transpile it.
```
$npm run transpile -- ./src/customArray.js -o ./dist/customArray.js
```
The transpiled file will be output.
