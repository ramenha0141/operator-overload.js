#!/usr/bin/env node
import fs from 'fs';
import path, { dirname } from 'path';
import antlr4 from 'antlr4';
import JavaScriptLexer from './JavaScriptLexer.js';
import JavaScriptParser from './JavaScriptParser.js';
import JavaScriptParserVisitor from './JavaScriptParserVisitor.js';
function compile(filename, outputfilename) {
    const input = fs.readFileSync(filename, 'utf-8');
    const chars = new antlr4.InputStream(input);
    const lexer = new JavaScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JavaScriptParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();
    const visitor = new JavaScriptParserVisitor();
    fs.writeFileSync(outputfilename || (filename + '.js'), visitor.visit(tree));
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
        case '-d': {
            i++
            option.dirname = args[i];
        }
        default: {
            option.filename = arg;
        }
    }
}
if (option.filename) {
    if (option.dirname) {
        const fileEntry = entry(option.dirname);
        for (let i = 0; i < fileEntry.length; i++) {
            const outputfilename = path.join(option.outputfilename, fileEntry[i].slice(option.dirname.length));
            checkDir(outputfilename);
            compile(fileEntry[i], outputfilename);
        }
    } else {
        compile(option.filename, option.outputfilename);
    }
}
function entry(dirname) {
    const entryAll = fs.readdirSync(dirname, { withFileTypes: true });
    const entryFile = [];
    for (let i = 0; i < entryAll.length; i++) {
        if (entryAll[i].isFile()) {
            entryFile.push(path.join(dirname, entryAll[i].name));
        } else {
            entryFile.push(...entry(path.join(dirname, entryAll[i].name)));
        }
    }
    return entryFile;
}
function checkDir(path) {
    const dirname = path.dirname(path);
    if (fs.existsSync(dirname)) {
        return true;
    }
    fs.mkdirSync(dirname, { recursive: true });
}