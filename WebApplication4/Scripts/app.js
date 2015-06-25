$(function() {
    var obj = {
        name: 'Mark',
        age: 47,
        speak: function(msg) {
            console.log(msg);
        }
    };

    var obj2 = {};
    obj2.name = 'Mark';
    obj2.age = 47;
    obj2.speak = function(msg) {
        console.log(msg);
    };

    var obj3 = {};
    obj3['name'] = 'Mark';
    obj3['age'] = 47;
    obj3['speak'] = function(msg) {
        console.log(msg);
    };

    function Person(initialData) {
        this.name = (initialData && initialData.name) || 'No Name Given';
        this.age = (initialData && initialData.age) || 0;
    }
    Person.prototype.speak = function (msg) {
        console.log(msg);
    };

    var obj4 = new Person({garbage: 'nothing useful'});
    console.log(obj4.name); // No Name Given
    console.log(obj4.age); // 0
    obj4.speak('Hello there');

    var myString = 'The quick brown fox jumped over the lazy dog.';
    String.prototype.reverse = function () {
        var newString = '';
        for (var i = this.length; i > 0; i--) {
            newString += this[i - 1];
        }
        return newString;
    };
    console.log(myString.reverse());

    var someNewString = 'Hello, World!';
    console.log(someNewString.reverse());
    
    var notAString = 123;
    Number.prototype.reverse = function() {
        return 'Don\'t reverse me, man!!';
    };
    console.log(notAString.reverse());

    var stringWithWhiteSpace = '      some text here      ';
    console.log('\'' + stringWithWhiteSpace + '\'');
    console.log('\'' + stringWithWhiteSpace.trim() + '\'');

    String.prototype.ltrim = function() {
        //return this.toString().replace(/^ */, '');
        return this.trimLeft();
    };

    String.prototype.rtrim = function() {
        //return this.toString().replace(/ *$/, '');
        return this.trimRight();
    };

    var leading = '    a little off the top';
    var trailing = 'i fell bottom heavy      ';
    console.log('\'' + leading.ltrim() + '\'');
    console.log('\'' + trailing.rtrim() + '\'');
    console.log('\'' + stringWithWhiteSpace.ltrim() + '\'');
    console.log('\'' + stringWithWhiteSpace.rtrim() + '\'');
    console.log('    some string with leading spaces'.ltrim());


    Date.prototype.sortableDate = function () {
        var yr = this.getFullYear(),
            mo = this.getMonth(), // 0 - 11
            da = this.getDate();
        mo = "00" + (mo + 1);
        mo = mo.substr(mo.length - 2, 2);
        da = "00" + da;
        da = da.substr(da.length - 2, 2);
        return yr + mo + da;
    };
    var dt = new Date();
    console.log(dt.sortableDate());
    
});