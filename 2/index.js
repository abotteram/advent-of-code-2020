const numbers = require( "./input.json" );

loop:
for (let i = 0; i < numbers.length; i++) {
    const n1 = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
        const n2 = numbers[j];
        if ( n1 + n2 >= 2020 ) {
            continue;
        }
        for (let k = j + 1; k < numbers.length; k++) {
            const n3 = numbers[k];
            
            if ( n1 + n2 + n3 === 2020 ) {
                console.log( n1, n2, n3, n1 * n2 * n3 );
                break loop;
            }
        }
    }
}
