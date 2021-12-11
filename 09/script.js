function groupBy(collection, it) {
    // ¡No olvides compartir tu solución en redes!
    const finalObject = {};
    collection.forEach(item => {
        let output;
        if (typeof (it) === 'function') {
            output = it(item);
        } else if (typeof (it) === 'string') {
            output = item[it];
        }

        if (!finalObject[output]) {
            finalObject[output] = [];
        }
        finalObject[output].push(item);
    });

    return finalObject;
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
console.log(groupBy(['one', 'two', 'three'], 'length')) // { 3: ['one', 'two'], 5: ['three'] }
console.log(groupBy([{ age: 23 }, { age: 24 }], 'age')) // { 23: [{age: 23}], 24: [{age: 24}] }

console.log(groupBy(
    [1397639141184, 1363223700000],
    timestamp => new Date(timestamp).getFullYear()
));
// { 2013: [1363223700000], 2014: [1397639141184] }

console.log(groupBy([
    { title: 'JavaScript: The Good Parts', rating: 8 },
    { title: 'Aprendiendo Git', rating: 10 },
    { title: 'Clean Code', rating: 9 },
], 'rating'))
// {
//     8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//         9: [{ title: 'Clean Code', rating: 9 }],
//             10: [{ title: 'Aprendiendo Git', rating: 10 }]
// }