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
```
"scripts": {
    "build": "overload -d ./src -o ./dist"
}
```
## Syntax
In this example, we overload the "+" operator in the custom array class.
```
class CustomArray extends Array {
    
}
```