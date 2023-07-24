const library = (() => {
    return {
        addValues: function addValues(a, b) {
            if (typeof a === 'number' && typeof b === 'number') {
                return a + b;
            } else if (typeof a === 'string' && typeof b === 'string') {
                return (a + b);
            } else {
                throw new Error('Invalid types or values');
            }
        },


        stringifyValue: function stringifyValue(a) {
            if (typeof a === 'object' || Array.isArray(a)) {
                return JSON.stringify(a)
            } else {
                return String(a)
            }
        },


        invertBoolean: function invertBoolean(a) {
            if (typeof a === 'boolean') {
                return !a;
            } else {
                throw new Error('Invalid type');

            }
        },


        convertToNumber: function convertToNumber(a) {
            if (typeof a === 'string') {
                return parseFloat(a);
            } else if (typeof a === 'number') {
                return a;
            } else if (typeof a === 'boolean') {
                if (a) {
                    return 1
                } else {
                    return 0;
                }
            } else if (a === null) {
                return 0
            } else if (a === undefined) {
                return NaN;
            } else {
                throw new Error('Convert to Number not possible');
            }
        },


        coerceToType: function coerceToType(value, type) {
            if (typeof value === type) {
                return value;
            }

            switch (type) {
                case 'string':
                    if (typeof value === 'object' || Array.isArray(value)) {
                        return JSON.stringify(value)
                    } else {
                        return String(value)
                    }

                case 'number':
                    if (typeof value === 'string') {
                        return parseFloat(value);
                    } else if (typeof value === 'boolean') {
                        if (value) {
                            return 1;
                        } else {
                            return 0;
                        }
                    } else {
                        throw new Error('Coercion to number not possible for this value.');
                    }

                case 'boolean':
                    if (typeof value === 'string') {
                        if (value.length === 0) {
                            return false;
                        } else {
                            return true;
                        }
                    }

                    if (value === 0 || value === undefined || value === null) {
                        return false
                    } else if (value) {
                        return true;
                    }
                    throw new Error('Coercion to boolean not possible for this value.');

                default:
                    throw new Error('Invalid type, please check you type.');
            }
        },


        arrayToString: function arrayToString(value) {
            if (Array.isArray(value)) {
                return value.join('');
            } else {
                throw new Error('Value is not an array');
            }
        },

        stringToArray: function stringToArray(value) {
            if (typeof value === 'string') {
                return value.split('');
            } else {
                throw new Error('Value is not string');
            }
        }
    }

})();

module.exports = library;