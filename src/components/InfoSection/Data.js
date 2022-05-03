/* pass in different values, update info section data and design; reusable*/

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Imports vs Domestics',
    headline: 'Drag Racing League: Make Racing Fun',
    buttonLabel: 'Learn More',
    imgStart: false,
    img: require('../../images/svg-1.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjTwo = {
    id: 'signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    headline: 'Create a contestant account',
    description: 'Update your bio, upload pictures and racecar details.',
    buttonLabel: 'Start Now',
    imgStart: true,
    img: require('../../images/svg-5.svg').default,
    alt: 'Social',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjThree = {
    id: 'series',
    lightBg: true,
    topLine1: 'ALL IN MOTORSPORTS',
    description1: '"All In" Series is designed to challenge the racers, builders and tuners with a no limit rules. Everything goes.',
    img1: require('../../images/all_in_ultimate.png'),
    topLine2: 'RACEWARS USA',
    description2: 'National Racing Tournament with RaceWars USA series',
    img2: require('../../images/rw_wdrc.png'),
    alt: 'SeriesIcon',
    darkText: true
};