/// <reference path="jasmine.js"/>
/// <reference path="../Scripts/calc.js"/>

describe('Calculator - Addition', function () {

    var calculator;

    beforeAll(function() {
        calculator = new Calculator();
    });

    it('should add two 2 and 2 and get 4', function() {
        // Arrange
        var x = 2,
            y = 2,
            expected = 4;

        // Act
        var actual = calculator.add(x, y);

        // Assert
        expect(actual).toEqual(expected);

    });

    it('should add 3 and 4 and get 7', function () {
        // Arrange
        var x = 3,
            y = 4,
            expected = 7;

        // Act
        var actual = calculator.add(x, y);

        // Assert
        expect(actual).toEqual(expected);
    });
});