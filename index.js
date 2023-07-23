function addValues(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return (a + b);
    } else {
        throw new Error('Invalid types or values');
    }
}


function stringifyValue(a) {
    if (typeof a === 'object' || Array.isArray(a)) {
        return JSON.stringify(a)
    } else {
        return String(a)
    }
}


function invertBoolean(a) {
    if (typeof a === 'boolean') {
        return !a;
    } else {
        throw new Error('Invalid type');

    }
}


function convertToNumber(a) {
    if (typeof a === 'string') {
        return parseFloat(a);
    } else if (typeof a === 'number') {
        return a;
    } else {
        throw new Error('Convert to Number not possible');
    }
}


function coerceToType(value, type) {
    if (typeof value === type) {
        return value;
    }

    switch (type) {
        case 'string':
            return String(value);

        case 'number':
            if (typeof value === 'number') {
                return parsedFloat;
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
}

