// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("1.2 dollar should be 127.9 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(1.2)

    // if 1 dollars are 106.58 yen, then 1.2 dollars should be (106.58*1.2)
    const expected = 106.58 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(1.2)).toBe(127.90); //hacer comentario aqui sobre lo esperado en base a los valores introducidos
})
test("383.7 yen should be 2.4 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(383.7)

    // if 127,9 yen are 0.8 pounds, then 383.7 yen should be (383.7/127.9*0.8)
    const expected = 383.7/(127.9*0.8); 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(383.7)).toBe(2.4); //hacer comentario aqui sobre lo esperado en base a los valores introducidos
})