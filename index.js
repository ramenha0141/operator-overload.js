const _overload = {
    plus: Symbol('operator.plus'),
    minus: Symbol('operator.minus'),
    multiply: Symbol('operator.multiply'),
    divide: Symbol('operator.divide'),
    modulus: Symbol('operator.modulus'),
    unaryplus: Symbol('operator.unaryplus'),
    unaryminus: Symbol('operator.unaryminus'),
    bitnot: Symbol('operator.bitnot'),
    bitand: Symbol('operator.bitand'),
    bitor: Symbol('operator.bitor'),
    bitxor: Symbol('operator.bitxor'),
    not: Symbol('operator.not'),
    and: Symbol('operator.and'),
    or: Symbol('operator.or'),
    xor: Symbol('operator.xor'),
    equal: Symbol('operator.equal'),
    notequal: Symbol('operator.notqual'),
    identityequal: Symbol('operator.identityequal'),
    identitynotequal: Symbol('operator.identitynotequal'),
    index: Symbol('operator.index')
}
Object.defineProperties(Object.prototype, {
    [_overload.plus]: {
        value: function (a) {
            return this + a;
        }
    },
    [_overload.minus]: {
        value: function (a) {
            return this - a;
        }
    },
    [_overload.multiply]: {
        value: function (a) {
            return this * a;
        }
    },
    [_overload.divide]: {
        value: function (a) {
            return this / a;
        }
    },
    [_overload.modulus]: {
        value: function (a) {
            return this % a;
        }
    },
    [_overload.unaryplus]: {
        value: function () {
            return +this;
        }
    },
    [_overload.unaryminus]: {
        value: function () {
            return -this;
        }
    },
    [_overload.bitnot]: {
        value: function () {
            return ~this;
        }
    },
    [_overload.bitand]: {
        value: function (a) {
            return this & a;
        }
    },
    [_overload.bitor]: {
        value: function (a) {
            return this | a;
        }
    },
    [_overload.bitxor]: {
        value: function (a) {
            return this ^ a;
        }
    },
    [_overload.not]: {
        value: function () {
            return !this;
        }
    },
    [_overload.and]: {
        value: function (a) {
            return this && a;
        }
    },
    [_overload.or]: {
        value: function (a) {
            return this || a;
        }
    },
    [_overload.equal]: {
        value: function (a) {
            return this == a;
        }
    },
    [_overload.notequal]: {
        value: function (a) {
            return this != a;
        }
    },
    [_overload.identityequal]: {
        value: function (a) {
            return this === a;
        }
    },
    [_overload.identitynotequal]: {
        value: function (a) {
            return this !== a;
        }
    },
    [_overload.index]: {
        value: function (a) {
            return this[a];
        }
    }
});
export default _overload;
globalThis._overload = _overload;