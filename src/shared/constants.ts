export const numbersOnly = /[^0-9]/g;
export const numbersWithDots = /[^0-9\.]/g;

export const WEBSITE_VALIDATOR = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/;
export const EMAIL_VALIDATOR = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

// letters
export const arabicRegex = /^([\x00-\x40\x5b-\x60\x7b-\x7f]|[\u0600-\u06FF]|\u200c)*$/;
export const LATIN_VALIDATOR = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s0-9,'().]*)$/g;
export const NOT_LATIN_VALIDATOR = /^^[\u0621-\u064A0-9\s]+$/g;

// numbers
export const wholeNumbers = /^[0-9]\d*?$/g;
export const naturalNumbers = /^[1-9]\d*$/g;
export const digitsOnley = /[^0-9]/g;
export const digitsWithDots = /[^0-9\.]/g;
export const maxLong = 9223372036854775807;
export const maxInteger = 2147483647;
export const maxLongLengthWithCommas = 25;

// mobile & phone
export const MOBILE_VALIDATOR = /^05[\d]{8}$/;
// export const PHONE_VALIDATOR = /(0[0-9]{7})/g;
export const PHONE_VALIDATOR = /^(01[1-9][0-9]{7})$/g;

export const PAGE_SIZE = 5;
export const STARTING_PAGE = 1;

export const MAX_FILE_SIZE = 5000000;

export enum FileExtensions {
    png = '.png',
    jpg = '.jpg',
    jpeg = '.jpeg',
    pdf = '.pdf',
    txt = '.txt',
}

export enum FileTypes {
    pdf = 'application/pdf',
    jpg = 'image/jpg',
    jpeg = 'image/jpeg',
    png = 'image/png',
    all = "*"
};