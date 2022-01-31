# operator-overload.js
operator-overload.js adds overloading to javascript.
It can be written in a simple notation and can be converted by the built-in transpiler to work in vanilla javascript.

Note: This text was translated using the DeepL translation. The translation may not be perfect.
## Installation
### shell :
```bash
$ npm install --save operator-overloadjs
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
In this example, the '+' operator of the customArray class is overloaded to allow easier string concatenation than using the concat method.
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
array_b.push(1, 1, 3);
array_a.push('a', 'b', 'c');
console.log(array_a + array_b);
```
Transpile the source code.
```bash
$ npm run build
```
Alternatively, you can specify the file name directly to transpile it.
```bash
$ npm run transpile -- ./src/customArray.js -o ./dist/customArray.js
```
The transpiled file will be output.
### dist/customArray.js :
```diff
import _overload from "operator-overloadjs";
class CustomArray extends Array {
    [_overload.plus](a) {
        return this.concat(a);
    }
}
const array_a = new CustomArray();
const array_b = new CustomArray();
array_b.push(1, 1, 3);
array_a.push('a', 'b', 'c');
- console.log(array_a + array_b);
+ console.log((array_a)[_overload.plus](array_b));
```
Let's run it.
```bash
$ node ./dist/customArray.js
CustomArray(6) [ 'a', 'b', 'c', 1, 1, 3 ]
```
It worked.

Note: In this example, we have overloaded the customArray class we created, not the Array class. Therefore, if you want to overload the Array class, write the following
```javascript
Object.defineProperty(Array.prototype, _overload.plus, {
    value: function(a) {
        return this.concat(a);
    }
});
```
The following is a list of operators that can be overloaded as in the previous example.
|Operator|Property identifier|Number of arguments (not including 'this')|
|:-:|:-:|:-:|
|`a + b`|`_overload.plus`|1|
|`a - b`|`_overload.minus`|1|
|`a * b`|`_overload.multiply`|1|
|`a / b`|`_overload.divide`|1|
|`a % b`|`_overload.modulus`|1|
|`+ a`|`_overload.unaryplus`|0|
|`- a`|`_overload.unaryminus`|0|
|`~ a`|`_overload.bitnot`|0|
|`a & b`|`_overload.bitand`|1|
|`a \| b`|`_overload.bitor`|1|
|`a ^ b`|`_overload.bitxor`|1|
|`! a`|`_overload.not`|0|
|`a && b`|`_overload.and`|1|
|`a \|\| b`|`_overload.or`|1|
|`a == b`|`_overload.equal`|1|
|`a != b`|`_overload.notequal`|1|
|`a === b`|`_overload.identityequal`|1|
|`a !== b`|`_overload.identitynotequal`|1|
|`a[b]`|`_overload.index`|1|

Note: 'this' refers to 'a' and the first argument refers to 'b'.

## Please help us find the bugs
operator-overload.js may contain a number of bugs.
If you find a bug, please contact us in [Issues](https://github.com/ramenha0141/operator-overload.js/issues).