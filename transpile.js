#!/usr/bin/env node
import fs from 'fs';
import antlr4 from 'antlr4';
import JavaScriptLexer from './JavaScriptLexer.js';
import JavaScriptParser from './JavaScriptParser.js';
import JavaScriptParserVisitor from './JavaScriptParserVisitor.js';
function compile(option) {
    const input = fs.readFileSync(option.filename, 'utf-8');
    const chars = new antlr4.InputStream(input);
    const lexer = new JavaScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JavaScriptParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();
    const visitor = new JavaScriptParserVisitor();
    fs.writeFileSync(option.outputfilename || (option.filename + '.js'), visitor.visit(tree));
}
const args = process.argv.slice(2);
const option = {};
for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
        case '-o': {
            i++;
            option.outputfilename = args[i];
            break;
        }
        default: {
            option.filename = arg;
        }
    }
}
if (option.filename) compile(option);