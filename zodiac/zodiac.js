const axios = require('axios');

const zodiacSigns = {
    capricorn: {
        name: 'capricorn',
        element: 'earth',
    },
    aquarius: {
        name: 'aquarius',
        element: 'air',
    },
    pisces: {
        name: 'pisces',
        element: 'water',
    },
    aries: {
        name: 'aries',
        element: 'fire',
    },
    taurus: {
        name: 'taurus',
        element: 'earth',
    },
    gemini: {
        name: 'gemini',
        element: 'air',
    },
    cancer: {
        name: 'cancer',
        element: 'water',
    },
    leo: {
        name: 'leo',
        element: 'fire',
    },
    virgo: {
        name: 'virgo',
        element: 'earth',
    },
    libra: {
        name: 'libra',
        element: 'air',
    },
    scorpio: {
        name: 'scorpio',
        element: 'water',
    },
    sagittarius: {
        name: 'sagittarius',
        element: 'fire',
    },
};

/**
 * Return zodiac sign by month and day
 *
 * @param day
 * @param month
 * @return {string} name of zodiac sign
 */
const getZodiacSign = (month, day) => {
    if ((month === 1 && day <= 20) || (month === 12 && day >= 22)) {
        return zodiacSigns.capricorn;
    } if ((month === 1 && day >= 21) || (month === 2 && day <= 18)) {
        return zodiacSigns.aquarius;
    } if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return zodiacSigns.pisces;
    } if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
        return zodiacSigns.aries;
    } if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
        return zodiacSigns.taurus;
    } if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return zodiacSigns.gemini;
    } if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        return zodiacSigns.cancer;
    } if ((month === 7 && day >= 23) || (month === 8 && day <= 23)) {
        return zodiacSigns.leo;
    } if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
        return zodiacSigns.virgo;
    } if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
        return zodiacSigns.libra;
    } if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
        return zodiacSigns.scorpio;
    } if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
        return zodiacSigns.sagittarius;
    }
    return 'invalid date';
};

/**
 * Returns if two signs match
 * @param {string} first
 * @param {string} second
 * @return {boolean} true = match
 */
const getZodiacMatch = (first, second) => {
    if (zodiacSigns[first] && zodiacSigns[second]) {
        if (zodiacSigns[first].element === zodiacSigns[second].element) {
            return true;
        }
        return false;
    }
    return 'invalid request';
};

/**
 * Returns daily horoscope by sign
 * @param {string} sign
 * @return {string} forecast
 */
const getZodiacHoroscope = async (sign) => {
    if (sign) {
        try {
            const response = await axios.get(`https://horoscope-fake-api.herokuapp.com/${sign}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return 'error communicating with api';
        }
    } else {
        return 'invalid request';
    }
};

module.exports = {
    getZodiacSign,
    getZodiacMatch,
    getZodiacHoroscope,
};
