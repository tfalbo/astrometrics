const assert = require('assert');
const { 
    getZodiacSign, 
    getZodiacMatch,
    getZodiacHoroscope,
  } = require('../../zodiac/zodiac.js');

describe ('test zodiac sign functions', function(){
    it('shoud return zodiac sign', function() {
        // arrange
        let month = 08;
        let day = 19;
        let expectedSignName = 'leo';
        
        // act
        let zodiacSign = getZodiacSign(month, day);
        
        // assert
        assert.equal(zodiacSign.name, expectedSignName);      
    });

    it('should return warning if date is invalid', function(){
    // arrange
    let month = 99;
    let day = 99;
    let expectedResult = "invalid date";
    
    // act
    let result = getZodiacSign(month,day);

    assert.equal(result, expectedResult)
    });

    it('should return warning if param is missing', function(){
        // arrange
        let month = 99;

        let expectedResult = "invalid date";
        
        // act
        let result = getZodiacSign(month);
    
        assert.equal(result, expectedResult)
        })
});

describe ('test zodiac match functions', function(){
    it('shoud return true if signs match', function() {
        // arrange
        let first = 'leo';
        let second = 'sagittarius';
        
        // act
        let result = getZodiacMatch(first, second);
        
        // assert
        assert.equal(result, true);      
    });

    it('should return false if signs do not match', function() {
        // arrange
        let first = 'leo';
        let second = 'taurus';

        // act 
        let result = getZodiacMatch(first, second);

        // assert
        assert.equal(result, false);
    });

    it('should return warning if signs is invalid', function() {
        // arrange
        let first = 'blue';
        let second = 'green';
        let expectedResult = 'invalid request';

        // act 
        let result = getZodiacMatch(first, second);

        // assert
        assert.equal(result, expectedResult);
    });

    it('should return warning if sign is missing', function() {
        // arrange
        let first = 'leo';

        let expectedResult = 'invalid request';

        // act 
        let result = getZodiacMatch(first);

        // assert
        assert.equal(result, expectedResult);
    });
});

describe ('test zodiac horoscope', function(){
    it('should horoscope for sign', async function(){
        // arrange
        let sign = 'leo';

        // act 
        let result = await getZodiacHoroscope(sign);

        //assert
        assert.notEqual(result, undefined);
    });

    it('should warn if param is missing', async function(){
        // arrange
        let sign = '';

        // act 
        let result = await getZodiacHoroscope(sign);

        //assert
        assert.notEqual(result, undefined);
    });
});
