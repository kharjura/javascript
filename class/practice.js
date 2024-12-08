function findPairsWithSum100(items) {
    const pairs = [];
    
    for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
            const price1 = Object.values(items[i])[0]; // Get the value of the first property
            const price2 = Object.values(items[j])[0]; // Get the value of the first property

            if (price1 + price2 === 100) {
                pairs.push([items[i], items[j]]);
            }
        }
    }
    return pairs;
}

// Example usage:
const items = [
    {item1: 10},
    {item2: 20},
    {item3: 30},
    {item4: 40},
    {item5: 50},
    {item6: 60},
    {item7: 70},
    {item8: 80},
    {item9: 90},
];

console.log(findPairsWithSum100(items)); // Output: [ [ { item4: 40 }, { item5: 50 } ] ]
