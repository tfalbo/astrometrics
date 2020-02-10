const assert = require('assert');
const {
    getZodiacSign,
    getZodiacMatch,
    getZodiacHoroscope,
} = require('../../zodiac/zodiac.js');

describe('test zodiac sign functions', () => {
    it('shoud return zodiac sign', () => {
        // arrange
        const month = 8;
        const day = 19;
        const expectedSignName = 'leo';

        // act
        const zodiacSign = getZodiacSign(month, day);

        // assert
        assert.equal(zodiacSign.name, expectedSignName);
    });

    it('should return warning if date is invalid', () => {
        // arrange
        const month = 99;
        const day = 99;
        const expectedResult = 'invalid date';

        // act
        const result = getZodiacSign(month, day);

        assert.equal(result, expectedResult);
    });

    it('should return warning if param is missing', () => {
        // arrange
        const month = 99;
        const expectedResult = 'invalid date';

        // act
        const result = getZodiacSign(month);

        assert.equal(result, expectedResult);
    });
});

describe('test zodiac match functions', () => {
    it('shoud return true if signs match', () => {
        // arrange
        const first = 'leo';
        const second = 'sagittarius';

        // act
        const result = getZodiacMatch(first, second);

        // assert
        assert.equal(result, true);
    });

    it('should return false if signs do not match', () => {
        // arrange
        const first = 'leo';
        const second = 'taurus';

        // act
        const result = getZodiacMatch(first, second);

        // assert
        assert.equal(result, false);
    });

    it('should return warning if signs is invalid', () => {
        // arrange
        const first = 'blue';
        const second = 'green';
        const expectedResult = 'invalid request';

        // act
        const result = getZodiacMatch(first, second);

        // assert
        assert.equal(result, expectedResult);
    });

    it('should return warning if sign is missing', () => {
        // arrange
        const first = 'leo';
        const expectedResult = 'invalid request';

        // act
        const result = getZodiacMatch(first);

        // assert
        assert.equal(result, expectedResult);
    });
});

describe('test zodiac horoscope', () => {
    it('should horoscope for sign', async () => {
        // arrange
        const sign = 'leo';

        // act
        const result = await getZodiacHoroscope(sign);

        // assert
        assert.notEqual(result, undefined);
    });

    it('should warn if param is missing', async () => {
        // arrange
        const sign = '';

        // act
        const result = await getZodiacHoroscope(sign);

        // assert
        assert.notEqual(result, undefined);
    });
});
