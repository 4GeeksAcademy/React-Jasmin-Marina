function countArrayClassStrength(value) {
    let strength = 0;

    // Define the weights for each type
    const typeWeights = {
        'undefined': 0,
        'boolean': 1,
        'number': 2,
        'string': 3,
        'object': 5, // including Array.prototype
        'function': 7,
        'bigint': 9,
        'symbol': 10
    };

    // Get the static properties of the Array class
    const arrayProperties = Object.getOwnPropertyNames(value);

    // Calculate the strength
    arrayProperties.forEach(prop => {
        const property = value[prop];
        const type = typeof property;
        strength += typeWeights[type] || 0;
    });

    return strength;
}

// Example usage
console.log(countArrayClassStrength(Array.prototype)); // Output: Calculated strength
