// Generated from JavaScriptParser.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by JavaScriptParser.

export default class JavaScriptParserVisitor extends antlr4.tree.ParseTreeVisitor {

    _indent = 0;
    _in() {
        this._indent++;
    }
    _out() {
        this._indent--;
    }
    _n() {
        let n = '\n';
        for (let i = 0; i < this._indent * 4; i++) {
            n += ' ';
        }
        return n;
    }

    visitTerminal(ctx) {
        return ctx.getText();
    }


    // Visit a parse tree produced by JavaScriptParser#program.
    visitProgram(ctx) {
        return this.visitChildren(ctx).slice(0, -1).join('\n');
    }


    // Visit a parse tree produced by JavaScriptParser#sourceElement.
    visitSourceElement(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by JavaScriptParser#statement.
    visitStatement(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by JavaScriptParser#block.
    visitBlock(ctx) {
        if (ctx.statementList()) {
            this._in();
            const t = '{' + this._n() + this.visit(ctx.statementList());
            this._out();
            return  t + this._n() + '}';
        } else {
            return '{}' + this._n();
        }
    }


    // Visit a parse tree produced by JavaScriptParser#statementList.
    visitStatementList(ctx) {
        return this.visitChildren(ctx).join(this._n());
    }


    // Visit a parse tree produced by JavaScriptParser#importStatement.
    visitImportStatement(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#importFromBlock.
    visitImportFromBlock(ctx) {
        return this.visitChildren(ctx).slice(0, -1).join(' ') + ';';
    }


    // Visit a parse tree produced by JavaScriptParser#moduleItems.
    visitModuleItems(ctx) {
        const child = this.visitChildren(ctx).slice(1, -1);
        let t = '';
        for (let i = 0; i < child.length; i ++) {
            if (i % 2 === 0) {
                t += child[i];
            } else {
                t += ', ';
            }
        }
        return '{ ' + t + ' }';
    }


    // Visit a parse tree produced by JavaScriptParser#importDefault.
    visitImportDefault(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#importNamespace.
    visitImportNamespace(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#importFrom.
    visitImportFrom(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#aliasName.
    visitAliasName(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#ExportDeclaration.
    visitExportDeclaration(ctx) {
        return this.visitChildren(ctx).slice(0, -1).join(' ') + ';';
    }


    // Visit a parse tree produced by JavaScriptParser#ExportDefaultDeclaration.
    visitExportDefaultDeclaration(ctx) {
        return this.visitChildren(ctx).slice(0, -1).join(' ') + ';';
    }


    // Visit a parse tree produced by JavaScriptParser#exportFromBlock.
    visitExportFromBlock(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#declaration.
    visitDeclaration(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#variableStatement.
    visitVariableStatement(ctx) {
        return this.visit(ctx.variableDeclarationList()) + ';';
    }


    // Visit a parse tree produced by JavaScriptParser#variableDeclarationList.
    visitVariableDeclarationList(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#variableDeclaration.
    visitVariableDeclaration(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#emptyStatement_.
    visitEmptyStatement_(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#expressionStatement.
    visitExpressionStatement(ctx) {
        return this.visit(ctx.expressionSequence()) + ';';
    }


    // Visit a parse tree produced by JavaScriptParser#ifStatement.
    visitIfStatement(ctx) {
        let t = 'if (' + this.visit(ctx.expressionSequence()) + ') ' + this.visit(ctx.statement(0));
        if (ctx.Else()) {
            t += ' else ' + this.visit(ctx.statement(1));
        }
        return t;
    }


    // Visit a parse tree produced by JavaScriptParser#DoStatement.
    visitDoStatement(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#WhileStatement.
    visitWhileStatement(ctx) {
        return 'while (' + this.visit(ctx.expressionSequence()) + ') ' + this.visit(ctx.statement());
    }


    // Visit a parse tree produced by JavaScriptParser#ForStatement.
    visitForStatement(ctx) {
        let t = 'for (';
        const child = this.visitChildren(ctx).slice(2, -2);
        for (let i = 0; i < child.length; i++) {
            if (child[i] === ';') {
                t += '; ';
            } else {
                t += child[i];
            }
        }
        return t + ') ' + this.visit(ctx.statement());
    }


    // Visit a parse tree produced by JavaScriptParser#ForInStatement.
    visitForInStatement(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#ForOfStatement.
    visitForOfStatement(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#varModifier.
    visitVarModifier(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#continueStatement.
    visitContinueStatement(ctx) {
        return 'continue' + (ctx.identifier() ? ' ' + ctx.identifier().getText(): '') + ';';
    }


    // Visit a parse tree produced by JavaScriptParser#breakStatement.
    visitBreakStatement(ctx) {
        return 'break' + (ctx.identifier() ? ' ' + ctx.identifier().getText(): '') + ';';
    }


    // Visit a parse tree produced by JavaScriptParser#returnStatement.
    visitReturnStatement(ctx) {
        return 'return' + (ctx.expressionSequence() ? ' ' + this.visit(ctx.expressionSequence()): '') + ';';
    }


    // Visit a parse tree produced by JavaScriptParser#yieldStatement.
    visitYieldStatement(ctx) {
        return 'yield' + (ctx.expressionSequence() ? ' ' + this.visit(ctx.expressionSequence()): '') + ';';
    }


    // Visit a parse tree produced by JavaScriptParser#withStatement.
    visitWithStatement(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#switchStatement.
    visitSwitchStatement(ctx) {
        return 'switch (' + this.visit(ctx.expressionSequence()) + ') ' + this.visit(ctx.caseBlock());
    }


    // Visit a parse tree produced by JavaScriptParser#caseBlock.
    visitCaseBlock(ctx) {
        this._in();
        const t = '{' + this._n() + this.visitChildren(ctx).slice(1, -1).join(this._n());
        this._out();
        return t + this._n() + '}';
    }


    // Visit a parse tree produced by JavaScriptParser#caseClauses.
    visitCaseClauses(ctx) {
        return this.visitChildren(ctx).join(this._n());
    }


    // Visit a parse tree produced by JavaScriptParser#caseClause.
    visitCaseClause(ctx) {
        return 'case ' + this.visit(ctx.expressionSequence()) + ': ' + (ctx.statementList() ? this.visit(ctx.statementList()): '');
    }


    // Visit a parse tree produced by JavaScriptParser#defaultClause.
    visitDefaultClause(ctx) {
        return 'default: ' + (ctx.statementList() ? this.visit(ctx.statementList()): '');
    }


    // Visit a parse tree produced by JavaScriptParser#labelledStatement.
    visitLabelledStatement(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#throwStatement.
    visitThrowStatement(ctx) {
        return 'throw ' +  this.visit(ctx.expressionSequence()) + ';';
    }


    // Visit a parse tree produced by JavaScriptParser#tryStatement.
    visitTryStatement(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#catchProduction.
    visitCatchProduction(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#finallyProduction.
    visitFinallyProduction(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#debuggerStatement.
    visitDebuggerStatement(ctx) {
        return 'debugger;';
    }


    // Visit a parse tree produced by JavaScriptParser#functionDeclaration.
    visitFunctionDeclaration(ctx) {
        return (ctx.Async() ? 'async function': 'function') +( ctx.Multiply() ? '* ': ' ') + ctx.identifier().getText() + '(' + (ctx.formalParameterList() ? this.visit(ctx.formalParameterList()): '') + ') ' + this.visit(ctx.functionBody());
    }


    // Visit a parse tree produced by JavaScriptParser#classDeclaration.
    visitClassDeclaration(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#classTail.
    visitClassTail(ctx) {
        let t = '';
        if (ctx.Extends()) t += 'extends ' + this.visit(ctx.singleExpression());
        this._in();
        t += ' {' + this._n() + this.visit(ctx.classElement()).join(this._n());
        this._out();
        this._n();
        return t + '}';
    }


    // Visit a parse tree produced by JavaScriptParser#classElement.
    visitClassElement(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#methodDefinition.
    visitMethodDefinition(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#formalParameterList.
    visitFormalParameterList(ctx) {
        const child = this.visitChildren(ctx);
        let t = '';
        for (let i = 0; i < child.length; i++) {
            if (child[i] === ',') {
                t += ', ';
            } else {
                t += child[i];
            }
        }
        return t;
    }


    // Visit a parse tree produced by JavaScriptParser#formalParameterArg.
    visitFormalParameterArg(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#lastFormalParameterArg.
    visitLastFormalParameterArg(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#functionBody.
    visitFunctionBody(ctx) {
        if (ctx.sourceElements()) {
            this._in();
            const t = '{' + this._n() + this.visit(ctx.sourceElements());
            this._out();
            return  t + this._n() + '}';
        } else {
            return '{}' + this._n();
        }
    }


    // Visit a parse tree produced by JavaScriptParser#sourceElements.
    visitSourceElements(ctx) {
        return this.visitChildren(ctx).join(this._n());
    }


    // Visit a parse tree produced by JavaScriptParser#arrayLiteral.
    visitArrayLiteral(ctx) {
        return '[' + (this.visit(ctx.elementList()) || '') + ']';
    }


    // Visit a parse tree produced by JavaScriptParser#elementList.
    visitElementList(ctx) {
        return this.visitChildren(ctx)?.join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#arrayElement.
    visitArrayElement(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#PropertyExpressionAssignment.
    visitPropertyExpressionAssignment(ctx) {
        return this.visit(ctx.propertyName()) + ': ' + this.visit(ctx.singleExpression());
    }


    // Visit a parse tree produced by JavaScriptParser#ComputedPropertyExpressionAssignment.
    visitComputedPropertyExpressionAssignment(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#FunctionProperty.
    visitFunctionProperty(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#PropertyGetter.
    visitPropertyGetter(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#PropertySetter.
    visitPropertySetter(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#PropertyShorthand.
    visitPropertyShorthand(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#propertyName.
    visitPropertyName(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#arguments.
    visitArguments(ctx) {
        const child = this.visitChildren(ctx).slice(1, -1);
        let t = '';
        for (let i = 0; i < child.length; i ++) {
            if (i % 2 === 0) {
                t += child[i];
            } else {
                t += ', ';
            }
        }
        return '(' + t + ')';
    }


    // Visit a parse tree produced by JavaScriptParser#argument.
    visitArgument(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#expressionSequence.
    visitExpressionSequence(ctx) {
        const child = this.visitChildren(ctx);
        let t = '';
        for (let i = 0; i < child.length; i ++) {
            if (i % 2 === 0) {
                t += child[i];
            } else {
                t += ', ';
            }
        }
        return t;
    }


    // Visit a parse tree produced by JavaScriptParser#TemplateStringExpression.
    visitTemplateStringExpression(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#TernaryExpression.
    visitTernaryExpression(ctx) {
        return this.visit(ctx.singleExpression(0)) + '? ' + this.visit(ctx.singleExpression(1)) + ': ' + this.visit(ctx.singleExpression(2));
    }


    // Visit a parse tree produced by JavaScriptParser#LogicalAndExpression.
    visitLogicalAndExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression(0)) + ')[' + '_overload.and' + '](' + this.visit(ctx.singleExpression(1)) + ')';
    }


    // Visit a parse tree produced by JavaScriptParser#PowerExpression.
    visitPowerExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#PreIncrementExpression.
    visitPreIncrementExpression(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#ObjectLiteralExpression.
    visitObjectLiteralExpression(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by JavaScriptParser#MetaExpression.
    visitMetaExpression(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#InExpression.
    visitInExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#LogicalOrExpression.
    visitLogicalOrExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression(0)) + ')[' + '_overload.or' + '](' + this.visit(ctx.singleExpression(1)) + ')';
    }


    // Visit a parse tree produced by JavaScriptParser#NotExpression.
    visitNotExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression()) + ')[_overload.not]()';
    }


    // Visit a parse tree produced by JavaScriptParser#PreDecreaseExpression.
    visitPreDecreaseExpression(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#ArgumentsExpression.
    visitArgumentsExpression(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#AwaitExpression.
    visitAwaitExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#ThisExpression.
    visitThisExpression(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by JavaScriptParser#FunctionExpression.
    visitFunctionExpression(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by JavaScriptParser#UnaryMinusExpression.
    visitUnaryMinusExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression()) + ')[_overload.unaryminus]()';
    }


    // Visit a parse tree produced by JavaScriptParser#AssignmentExpression.
    visitAssignmentExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#PostDecreaseExpression.
    visitPostDecreaseExpression(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#TypeofExpression.
    visitTypeofExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#InstanceofExpression.
    visitInstanceofExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#UnaryPlusExpression.
    visitUnaryPlusExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression()) + ')[_overload.unaryplus]()';
    }


    // Visit a parse tree produced by JavaScriptParser#DeleteExpression.
    visitDeleteExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#ImportExpression.
    visitImportExpression(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#EqualityExpression.
    visitEqualityExpression(ctx) {
        if (ctx.Equals_()) {
            return '(' + this.visit(ctx.singleExpression(0)) + ')[' + '_overload.equal' + '](' + this.visit(ctx.singleExpression(1)) + ')';
        } else if (ctx.NotEquals()) {
            return '(' + this.visit(ctx.singleExpression(0)) + ')[' + '_overload.notequal' + '](' + this.visit(ctx.singleExpression(1)) + ')';
        } else if (ctx.IdentityEquals()) {
            return '(' + this.visit(ctx.singleExpression(0)) + ')[' + '_overload.identityequal' + '](' + this.visit(ctx.singleExpression(1)) + ')';
        } else {
            return '(' + this.visit(ctx.singleExpression(0)) + ')[' + '_overload.identitynotequal' + '](' + this.visit(ctx.singleExpression(1)) + ')';
        }
    }


    // Visit a parse tree produced by JavaScriptParser#BitXOrExpression.
    visitBitXOrExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression(0)) + ')[' + '_overload.bitxor' + '](' + this.visit(ctx.singleExpression(1)) + ')';
    }


    // Visit a parse tree produced by JavaScriptParser#SuperExpression.
    visitSuperExpression(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by JavaScriptParser#MultiplicativeExpression.
    visitMultiplicativeExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression(0)) + ')[' + (ctx.Multiply() ? '_overload.multiply': (ctx.Divide() ? '_overload.divide': '_overload.modulus')) + '](' + this.visit(ctx.singleExpression(1)) + ')';
    }


    // Visit a parse tree produced by JavaScriptParser#BitShiftExpression.
    visitBitShiftExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#ParenthesizedExpression.
    visitParenthesizedExpression(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#AdditiveExpression.
    visitAdditiveExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression(0)) + ')[' + (ctx.Plus()? '_overload.plus': '_overload.minus') + '](' + this.visit(ctx.singleExpression(1)) + ')';
    }


    // Visit a parse tree produced by JavaScriptParser#RelationalExpression.
    visitRelationalExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#PostIncrementExpression.
    visitPostIncrementExpression(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#YieldExpression.
    visitYieldExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#BitNotExpression.
    visitBitNotExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression()) + ')[_overload.bitnot]()';
    }


    // Visit a parse tree produced by JavaScriptParser#NewExpression.
    visitNewExpression(ctx) {
        if (ctx.arguments()) {
            return 'new ' + this.visit(ctx.singleExpression()) + this.visit(ctx.arguments());
        } else {
            return 'new ' + this.visit(ctx.singleExpression());
        }
    }


    // Visit a parse tree produced by JavaScriptParser#LiteralExpression.
    visitLiteralExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#ArrayLiteralExpression.
    visitArrayLiteralExpression(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by JavaScriptParser#MemberDotExpression.
    visitMemberDotExpression(ctx) {
        return this.visitChildren(ctx).join('');
    }


    // Visit a parse tree produced by JavaScriptParser#ClassExpression.
    visitClassExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#MemberIndexExpression.
    visitMemberIndexExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression()) + ')[_overload.index](' + this.visit(ctx.expressionSequence()) + ')';
    }


    // Visit a parse tree produced by JavaScriptParser#IdentifierExpression.
    visitIdentifierExpression(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by JavaScriptParser#BitAndExpression.
    visitBitAndExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression(0)) + ')[' + '_overload.bitand' + '](' + this.visit(ctx.singleExpression(1)) + ')';
    }


    // Visit a parse tree produced by JavaScriptParser#BitOrExpression.
    visitBitOrExpression(ctx) {
        return '(' + this.visit(ctx.singleExpression(0)) + ')[' + '_overload.bitor' + '](' + this.visit(ctx.singleExpression(1)) + ')';
    }


    // Visit a parse tree produced by JavaScriptParser#AssignmentOperatorExpression.
    visitAssignmentOperatorExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#VoidExpression.
    visitVoidExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#CoalesceExpression.
    visitCoalesceExpression(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#assignable.
    visitAssignable(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by JavaScriptParser#objectLiteral.
    visitObjectLiteral(ctx) {
        const child = this.visitChildren(ctx).slice(1, -1);
        if (child.length === 0) return '{}';
        let t = '';
        for (let i = 0; i < child.length; i ++) {
            if (i % 2 === 0) {
                t += child[i];
            } else {
                t += ', ';
            }
        }
        return '{ ' + t + ' }';
    }


    // Visit a parse tree produced by JavaScriptParser#FunctionDecl.
    visitFunctionDecl(ctx) {
        return this.visitChildren(ctx)[0];
    }


    // Visit a parse tree produced by JavaScriptParser#AnonymousFunctionDecl.
    visitAnonymousFunctionDecl(ctx) {
        return (ctx.Async() ? 'async function': 'function') +( ctx.Multiply() ? '* ': ' ') + '(' + (ctx.formalParameterList() ? this.visit(ctx.formalParameterList()): '') + ') ' + this.visit(ctx.functionBody());
    }


    // Visit a parse tree produced by JavaScriptParser#ArrowFunction.
    visitArrowFunction(ctx) {
        return (ctx.Async() ? 'async ': '') + this.visit(ctx.visitArrowFunctionParameters()) + ' => ' + this.visit(ctx.arrowFunctionBody());
    }


    // Visit a parse tree produced by JavaScriptParser#arrowFunctionParameters.
    visitArrowFunctionParameters(ctx) {
        if (ctx.identifier()) {
            return ctx.identifier().getText();
        } else {
            return '(' + (ctx.formalParameterList() ? this.visit(ctx.formalParameterList()): '') + ')';
        }
    }


    // Visit a parse tree produced by JavaScriptParser#arrowFunctionBody.
    visitArrowFunctionBody(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#assignmentOperator.
    visitAssignmentOperator(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#literal.
    visitLiteral(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#templateStringLiteral.
    visitTemplateStringLiteral(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#templateStringAtom.
    visitTemplateStringAtom(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#numericLiteral.
    visitNumericLiteral(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#bigintLiteral.
    visitBigintLiteral(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#getter.
    visitGetter(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#setter.
    visitSetter(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#identifierName.
    visitIdentifierName(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#identifier.
    visitIdentifier(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#reservedWord.
    visitReservedWord(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#keyword.
    visitKeyword(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#let_.
    visitLet_(ctx) {
        return this.visitChildren(ctx).join(' ');
    }


    // Visit a parse tree produced by JavaScriptParser#eos.
    visitEos(ctx) {
        return ctx.getText();
    }



}