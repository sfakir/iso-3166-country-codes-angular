'use strict';
/*jslint white: true */
/*jslint indent: false */


angular.module('iso-3166-country-codes', [])
    .factory('ISO3166', ['$locale',function ($locale) {

        var currentLocale = null;


        /**
         * Updates the locale;
         * @param locale
         */
        function setLocale(locale) {
            locale = getCountryId(locale);
            if (locale !== currentLocale) {
                currentLocale = locale;
                refresh();
            }
        }

        function getCountryList(locale) {

            switch (locale) {
                //Additional country lists can be found here: https://raw.githubusercontent.com/umpirsky/country-list/
                case 'de':
                    return {
                        'AF': 'Afghanistan',
                        'EG': '\u00c4gypten',
                        'AX': '\u00c5land-Inseln',
                        'AL': 'Albanien',
                        'DZ': 'Algerien',
                        'UM': 'Amerikanisch-Ozeanien',
                        'AS': 'Amerikanisch-Samoa',
                        'VI': 'Amerikanische Jungferninseln',
                        'AD': 'Andorra',
                        'AO': 'Angola',
                        'AI': 'Anguilla',
                        'AQ': 'Antarktis',
                        'AG': 'Antigua und Barbuda',
                        'GQ': '\u00c4quatorialguinea',
                        'AR': 'Argentinien',
                        'AM': 'Armenien',
                        'AW': 'Aruba',
                        'AC': 'Ascension',
                        'AZ': 'Aserbaidschan',
                        'ET': '\u00c4thiopien',
                        'AU': 'Australien',
                        'BS': 'Bahamas',
                        'BH': 'Bahrain',
                        'BD': 'Bangladesch',
                        'BB': 'Barbados',
                        'BY': 'Belarus',
                        'BE': 'Belgien',
                        'BZ': 'Belize',
                        'BJ': 'Benin',
                        'BM': 'Bermuda',
                        'BT': 'Bhutan',
                        'BO': 'Bolivien',
                        'BA': 'Bosnien und Herzegowina',
                        'BW': 'Botsuana',
                        'BR': 'Brasilien',
                        'VG': 'Britische Jungferninseln',
                        'IO': 'Britisches Territorium im Indischen Ozean',
                        'BN': 'Brunei Darussalam',
                        'BG': 'Bulgarien',
                        'BF': 'Burkina Faso',
                        'BI': 'Burundi',
                        'EA': 'Ceuta und Melilla',
                        'CL': 'Chile',
                        'CN': 'China',
                        'CK': 'Cookinseln',
                        'CR': 'Costa Rica',
                        'CI': 'C\u00f4te d\u2019Ivoire',
                        'CW': 'Cura\u00e7ao',
                        'DK': 'D\u00e4nemark',
                        'KP': 'Demokratische Volksrepublik Korea',
                        'DE': 'Deutschland',
                        'DG': 'Diego Garcia',
                        'DM': 'Dominica',
                        'DO': 'Dominikanische Republik',
                        'DJ': 'Dschibuti',
                        'EC': 'Ecuador',
                        'SV': 'El Salvador',
                        'ER': 'Eritrea',
                        'EE': 'Estland',
                        'FK': 'Falklandinseln',
                        'FO': 'F\u00e4r\u00f6er',
                        'FJ': 'Fidschi',
                        'FI': 'Finnland',
                        'FR': 'Frankreich',
                        'GF': 'Franz\u00f6sisch-Guayana',
                        'PF': 'Franz\u00f6sisch-Polynesien',
                        'TF': 'Franz\u00f6sische S\u00fcd- und Antarktisgebiete',
                        'GA': 'Gabun',
                        'GM': 'Gambia',
                        'GE': 'Georgien',
                        'GH': 'Ghana',
                        'GI': 'Gibraltar',
                        'GD': 'Grenada',
                        'GR': 'Griechenland',
                        'GL': 'Gr\u00f6nland',
                        'GP': 'Guadeloupe',
                        'GU': 'Guam',
                        'GT': 'Guatemala',
                        'GG': 'Guernsey',
                        'GN': 'Guinea',
                        'GW': 'Guinea-Bissau',
                        'GY': 'Guyana',
                        'HT': 'Haiti',
                        'HN': 'Honduras',
                        'IN': 'Indien',
                        'ID': 'Indonesien',
                        'IQ': 'Irak',
                        'IR': 'Iran',
                        'IE': 'Irland',
                        'IS': 'Island',
                        'IM': 'Isle of Man',
                        'IL': 'Israel',
                        'IT': 'Italien',
                        'JM': 'Jamaika',
                        'JP': 'Japan',
                        'YE': 'Jemen',
                        'JE': 'Jersey',
                        'JO': 'Jordanien',
                        'KY': 'Kaimaninseln',
                        'KH': 'Kambodscha',
                        'CM': 'Kamerun',
                        'CA': 'Kanada',
                        'IC': 'Kanarische Inseln',
                        'CV': 'Kap Verde',
                        'BQ': 'Karibische Niederlande',
                        'KZ': 'Kasachstan',
                        'QA': 'Katar',
                        'KE': 'Kenia',
                        'KG': 'Kirgisistan',
                        'KI': 'Kiribati',
                        'CC': 'Kokosinseln',
                        'CO': 'Kolumbien',
                        'KM': 'Komoren',
                        'CG': 'Kongo-Brazzaville',
                        'CD': 'Kongo-Kinshasa',
                        'XK': 'Kosovo',
                        'HR': 'Kroatien',
                        'CU': 'Kuba',
                        'KW': 'Kuwait',
                        'LA': 'Laos',
                        'LS': 'Lesotho',
                        'LV': 'Lettland',
                        'LB': 'Libanon',
                        'LR': 'Liberia',
                        'LY': 'Libyen',
                        'LI': 'Liechtenstein',
                        'LT': 'Litauen',
                        'LU': 'Luxemburg',
                        'MG': 'Madagaskar',
                        'MW': 'Malawi',
                        'MY': 'Malaysia',
                        'MV': 'Malediven',
                        'ML': 'Mali',
                        'MT': 'Malta',
                        'MA': 'Marokko',
                        'MH': 'Marshallinseln',
                        'MQ': 'Martinique',
                        'MR': 'Mauretanien',
                        'MU': 'Mauritius',
                        'YT': 'Mayotte',
                        'MK': 'Mazedonien',
                        'MX': 'Mexiko',
                        'FM': 'Mikronesien',
                        'MC': 'Monaco',
                        'MN': 'Mongolei',
                        'ME': 'Montenegro',
                        'MS': 'Montserrat',
                        'MZ': 'Mosambik',
                        'MM': 'Myanmar',
                        'NA': 'Namibia',
                        'NR': 'Nauru',
                        'NP': 'Nepal',
                        'NC': 'Neukaledonien',
                        'NZ': 'Neuseeland',
                        'NI': 'Nicaragua',
                        'NL': 'Niederlande',
                        'NE': 'Niger',
                        'NG': 'Nigeria',
                        'NU': 'Niue',
                        'MP': 'N\u00f6rdliche Marianen',
                        'NF': 'Norfolkinsel',
                        'NO': 'Norwegen',
                        'OM': 'Oman',
                        'AT': '\u00d6sterreich',
                        'PK': 'Pakistan',
                        'PS': 'Pal\u00e4stinensische Autonomiegebiete',
                        'PW': 'Palau',
                        'PA': 'Panama',
                        'PG': 'Papua-Neuguinea',
                        'PY': 'Paraguay',
                        'PE': 'Peru',
                        'PH': 'Philippinen',
                        'PN': 'Pitcairninseln',
                        'PL': 'Polen',
                        'PT': 'Portugal',
                        'PR': 'Puerto Rico',
                        'KR': 'Republik Korea',
                        'MD': 'Republik Moldau',
                        'RE': 'R\u00e9union',
                        'RW': 'Ruanda',
                        'RO': 'Rum\u00e4nien',
                        'RU': 'Russische F\u00f6deration',
                        'SB': 'Salomonen',
                        'ZM': 'Sambia',
                        'WS': 'Samoa',
                        'SM': 'San Marino',
                        'ST': 'S\u00e3o Tom\u00e9 und Pr\u00edncipe',
                        'SA': 'Saudi-Arabien',
                        'SE': 'Schweden',
                        'CH': 'Schweiz',
                        'SN': 'Senegal',
                        'RS': 'Serbien',
                        'SC': 'Seychellen',
                        'SL': 'Sierra Leone',
                        'ZW': 'Simbabwe',
                        'SG': 'Singapur',
                        'SX': 'Sint Maarten',
                        'SK': 'Slowakei',
                        'SI': 'Slowenien',
                        'SO': 'Somalia',
                        'MO': 'Sonderverwaltungsregion Macau',
                        'HK': 'Sonderverwaltungszone Hongkong',
                        'ES': 'Spanien',
                        'LK': 'Sri Lanka',
                        'BL': 'St. Barth\u00e9lemy',
                        'SH': 'St. Helena',
                        'KN': 'St. Kitts und Nevis',
                        'LC': 'St. Lucia',
                        'MF': 'St. Martin',
                        'PM': 'St. Pierre und Miquelon',
                        'VC': 'St. Vincent und die Grenadinen',
                        'ZA': 'S\u00fcdafrika',
                        'SD': 'Sudan',
                        'GS': 'S\u00fcdgeorgien und die S\u00fcdlichen Sandwichinseln',
                        'SS': 'S\u00fcdsudan',
                        'SR': 'Suriname',
                        'SJ': 'Svalbard und Jan Mayen',
                        'SZ': 'Swasiland',
                        'SY': 'Syrien',
                        'TJ': 'Tadschikistan',
                        'TW': 'Taiwan',
                        'TZ': 'Tansania',
                        'TH': 'Thailand',
                        'TL': 'Timor-Leste',
                        'TG': 'Togo',
                        'TK': 'Tokelau',
                        'TO': 'Tonga',
                        'TT': 'Trinidad und Tobago',
                        'TA': 'Tristan da Cunha',
                        'TD': 'Tschad',
                        'CZ': 'Tschechische Republik',
                        'TN': 'Tunesien',
                        'TR': 'T\u00fcrkei',
                        'TM': 'Turkmenistan',
                        'TC': 'Turks- und Caicosinseln',
                        'TV': 'Tuvalu',
                        'UG': 'Uganda',
                        'UA': 'Ukraine',
                        'HU': 'Ungarn',
                        'UY': 'Uruguay',
                        'UZ': 'Usbekistan',
                        'VU': 'Vanuatu',
                        'VA': 'Vatikanstadt',
                        'VE': 'Venezuela',
                        'AE': 'Vereinigte Arabische Emirate',
                        'US': 'Vereinigte Staaten',
                        'GB': 'Vereinigtes K\u00f6nigreich',
                        'VN': 'Vietnam',
                        'WF': 'Wallis und Futuna',
                        'CX': 'Weihnachtsinsel',
                        'EH': 'Westsahara',
                        'CF': 'Zentralafrikanische Republik',
                        'CY': 'Zypern'
                    };
                default:
                case 'en':
                    return {
                        'AF': 'Afghanistan',
                        'AX': '\u00c5land Islands',
                        'AL': 'Albania',
                        'DZ': 'Algeria',
                        'AS': 'American Samoa',
                        'AD': 'Andorra',
                        'AO': 'Angola',
                        'AI': 'Anguilla',
                        'AQ': 'Antarctica',
                        'AG': 'Antigua & Barbuda',
                        'AR': 'Argentina',
                        'AM': 'Armenia',
                        'AW': 'Aruba',
                        'AC': 'Ascension Island',
                        'AU': 'Australia',
                        'AT': 'Austria',
                        'AZ': 'Azerbaijan',
                        'BS': 'Bahamas',
                        'BH': 'Bahrain',
                        'BD': 'Bangladesh',
                        'BB': 'Barbados',
                        'BY': 'Belarus',
                        'BE': 'Belgium',
                        'BZ': 'Belize',
                        'BJ': 'Benin',
                        'BM': 'Bermuda',
                        'BT': 'Bhutan',
                        'BO': 'Bolivia',
                        'BA': 'Bosnia & Herzegovina',
                        'BW': 'Botswana',
                        'BR': 'Brazil',
                        'IO': 'British Indian Ocean Territory',
                        'VG': 'British Virgin Islands',
                        'BN': 'Brunei',
                        'BG': 'Bulgaria',
                        'BF': 'Burkina Faso',
                        'BI': 'Burundi',
                        'KH': 'Cambodia',
                        'CM': 'Cameroon',
                        'CA': 'Canada',
                        'IC': 'Canary Islands',
                        'CV': 'Cape Verde',
                        'BQ': 'Caribbean Netherlands',
                        'KY': 'Cayman Islands',
                        'CF': 'Central African Republic',
                        'EA': 'Ceuta & Melilla',
                        'TD': 'Chad',
                        'CL': 'Chile',
                        'CN': 'China',
                        'CX': 'Christmas Island',
                        'CC': 'Cocos (Keeling) Islands',
                        'CO': 'Colombia',
                        'KM': 'Comoros',
                        'CG': 'Congo - Brazzaville',
                        'CD': 'Congo - Kinshasa',
                        'CK': 'Cook Islands',
                        'CR': 'Costa Rica',
                        'CI': 'C\u00f4te d\u2019Ivoire',
                        'HR': 'Croatia',
                        'CU': 'Cuba',
                        'CW': 'Cura\u00e7ao',
                        'CY': 'Cyprus',
                        'CZ': 'Czech Republic',
                        'DK': 'Denmark',
                        'DG': 'Diego Garcia',
                        'DJ': 'Djibouti',
                        'DM': 'Dominica',
                        'DO': 'Dominican Republic',
                        'EC': 'Ecuador',
                        'EG': 'Egypt',
                        'SV': 'El Salvador',
                        'GQ': 'Equatorial Guinea',
                        'ER': 'Eritrea',
                        'EE': 'Estonia',
                        'ET': 'Ethiopia',
                        'FK': 'Falkland Islands',
                        'FO': 'Faroe Islands',
                        'FJ': 'Fiji',
                        'FI': 'Finland',
                        'FR': 'France',
                        'GF': 'French Guiana',
                        'PF': 'French Polynesia',
                        'TF': 'French Southern Territories',
                        'GA': 'Gabon',
                        'GM': 'Gambia',
                        'GE': 'Georgia',
                        'DE': 'Germany',
                        'GH': 'Ghana',
                        'GI': 'Gibraltar',
                        'GR': 'Greece',
                        'GL': 'Greenland',
                        'GD': 'Grenada',
                        'GP': 'Guadeloupe',
                        'GU': 'Guam',
                        'GT': 'Guatemala',
                        'GG': 'Guernsey',
                        'GN': 'Guinea',
                        'GW': 'Guinea-Bissau',
                        'GY': 'Guyana',
                        'HT': 'Haiti',
                        'HN': 'Honduras',
                        'HK': 'Hong Kong SAR China',
                        'HU': 'Hungary',
                        'IS': 'Iceland',
                        'IN': 'India',
                        'ID': 'Indonesia',
                        'IR': 'Iran',
                        'IQ': 'Iraq',
                        'IE': 'Ireland',
                        'IM': 'Isle of Man',
                        'IL': 'Israel',
                        'IT': 'Italy',
                        'JM': 'Jamaica',
                        'JP': 'Japan',
                        'JE': 'Jersey',
                        'JO': 'Jordan',
                        'KZ': 'Kazakhstan',
                        'KE': 'Kenya',
                        'KI': 'Kiribati',
                        'XK': 'Kosovo',
                        'KW': 'Kuwait',
                        'KG': 'Kyrgyzstan',
                        'LA': 'Laos',
                        'LV': 'Latvia',
                        'LB': 'Lebanon',
                        'LS': 'Lesotho',
                        'LR': 'Liberia',
                        'LY': 'Libya',
                        'LI': 'Liechtenstein',
                        'LT': 'Lithuania',
                        'LU': 'Luxembourg',
                        'MO': 'Macau SAR China',
                        'MK': 'Macedonia',
                        'MG': 'Madagascar',
                        'MW': 'Malawi',
                        'MY': 'Malaysia',
                        'MV': 'Maldives',
                        'ML': 'Mali',
                        'MT': 'Malta',
                        'MH': 'Marshall Islands',
                        'MQ': 'Martinique',
                        'MR': 'Mauritania',
                        'MU': 'Mauritius',
                        'YT': 'Mayotte',
                        'MX': 'Mexico',
                        'FM': 'Micronesia',
                        'MD': 'Moldova',
                        'MC': 'Monaco',
                        'MN': 'Mongolia',
                        'ME': 'Montenegro',
                        'MS': 'Montserrat',
                        'MA': 'Morocco',
                        'MZ': 'Mozambique',
                        'MM': 'Myanmar (Burma)',
                        'NA': 'Namibia',
                        'NR': 'Nauru',
                        'NP': 'Nepal',
                        'NL': 'Netherlands',
                        'NC': 'New Caledonia',
                        'NZ': 'New Zealand',
                        'NI': 'Nicaragua',
                        'NE': 'Niger',
                        'NG': 'Nigeria',
                        'NU': 'Niue',
                        'NF': 'Norfolk Island',
                        'KP': 'North Korea',
                        'MP': 'Northern Mariana Islands',
                        'NO': 'Norway',
                        'OM': 'Oman',
                        'PK': 'Pakistan',
                        'PW': 'Palau',
                        'PS': 'Palestinian Territories',
                        'PA': 'Panama',
                        'PG': 'Papua New Guinea',
                        'PY': 'Paraguay',
                        'PE': 'Peru',
                        'PH': 'Philippines',
                        'PN': 'Pitcairn Islands',
                        'PL': 'Poland',
                        'PT': 'Portugal',
                        'PR': 'Puerto Rico',
                        'QA': 'Qatar',
                        'RE': 'R\u00e9union',
                        'RO': 'Romania',
                        'RU': 'Russia',
                        'RW': 'Rwanda',
                        'WS': 'Samoa',
                        'SM': 'San Marino',
                        'ST': 'S\u00e3o Tom\u00e9 & Pr\u00edncipe',
                        'SA': 'Saudi Arabia',
                        'SN': 'Senegal',
                        'RS': 'Serbia',
                        'SC': 'Seychelles',
                        'SL': 'Sierra Leone',
                        'SG': 'Singapore',
                        'SX': 'Sint Maarten',
                        'SK': 'Slovakia',
                        'SI': 'Slovenia',
                        'SB': 'Solomon Islands',
                        'SO': 'Somalia',
                        'ZA': 'South Africa',
                        'GS': 'South Georgia & South Sandwich Islands',
                        'KR': 'South Korea',
                        'SS': 'South Sudan',
                        'ES': 'Spain',
                        'LK': 'Sri Lanka',
                        'BL': 'St. Barth\u00e9lemy',
                        'SH': 'St. Helena',
                        'KN': 'St. Kitts & Nevis',
                        'LC': 'St. Lucia',
                        'MF': 'St. Martin',
                        'PM': 'St. Pierre & Miquelon',
                        'VC': 'St. Vincent & Grenadines',
                        'SD': 'Sudan',
                        'SR': 'Suriname',
                        'SJ': 'Svalbard & Jan Mayen',
                        'SZ': 'Swaziland',
                        'SE': 'Sweden',
                        'CH': 'Switzerland',
                        'SY': 'Syria',
                        'TW': 'Taiwan',
                        'TJ': 'Tajikistan',
                        'TZ': 'Tanzania',
                        'TH': 'Thailand',
                        'TL': 'Timor-Leste',
                        'TG': 'Togo',
                        'TK': 'Tokelau',
                        'TO': 'Tonga',
                        'TT': 'Trinidad & Tobago',
                        'TA': 'Tristan da Cunha',
                        'TN': 'Tunisia',
                        'TR': 'Turkey',
                        'TM': 'Turkmenistan',
                        'TC': 'Turks & Caicos Islands',
                        'TV': 'Tuvalu',
                        'UM': 'U.S. Outlying Islands',
                        'VI': 'U.S. Virgin Islands',
                        'UG': 'Uganda',
                        'UA': 'Ukraine',
                        'AE': 'United Arab Emirates',
                        'GB': 'United Kingdom',
                        'US': 'United States',
                        'UY': 'Uruguay',
                        'UZ': 'Uzbekistan',
                        'VU': 'Vanuatu',
                        'VA': 'Vatican City',
                        'VE': 'Venezuela',
                        'VN': 'Vietnam',
                        'WF': 'Wallis & Futuna',
                        'EH': 'Western Sahara',
                        'YE': 'Yemen',
                        'ZM': 'Zambia',
                        'ZW': 'Zimbabwe'
                    };
            }


        }

        /**
         * de-de to de
         * de to de
         * dexxxx to de
         * @param locale
         * @returns {ISO code}
         */

        function getCountryId(locale) {
            if (locale.indexOf('-') !== -1) {
                return locale.split('-')[0].toUpperCase();
            }
            return locale.substring(0, 2).toUpperCase();
        }

        function refresh() {
            holder.codeToCountry = getCountryList(currentLocale);


            holder.countryToCode = {};
            holder.countryCodes = [];


            for (var key in holder.codeToCountry) {
                holder.countryToCode[holder.codeToCountry[key]] = key;
                holder.countryCodes.push(key);
            }

            holder.isCountryCode = function (input) {
                if (angular.isString(input)) {
                    input = input.toUpperCase();
                }
                return angular.isDefined(this.codeToCountry[input]);
            };

            holder.getCountryCode = function (countryName, manipulator) {
                var countryCode = this.countryToCode[countryName.toUpperCase()];
                manipulator = manipulator ? manipulator : 'toUpperCase';

                return countryCode && countryCode[manipulator]();
            };

            holder.getCountryName = function (countryCode, manipulator) {
                manipulator = manipulator ? manipulator : 'toString';

                return this.codeToCountry[countryCode] && this.codeToCountry[countryCode][manipulator]();
            };

            holder.getCountryNames = function (countryCodes, manipulator) {
                manipulator = manipulator ? manipulator : 'toString';

                var countries = {};
                angular.forEach(countryCodes, function (key) {
                    if (holder.isCountryCode(key)) {
                        countries[key] = holder.getCountryName(key, manipulator);
                    }
                });
                return countries;
            };

        }

        var holder = {};

        holder.setLocale = setLocale;
        holder.getCountryList = getCountryList;

        holder.setLocale($locale.id);// start with default locale;

        return holder;
    }])
    .filter('isoCountry', ['ISO3166', function (ISO3166) {
        return function (input) {
            var result = ISO3166.getCountryName(input);
            return angular.isUndefined(result) ? input : result;
        };
    }])
    .filter('isoCountryCode', ['ISO3166', function (ISO3166) {
        return function (input) {
            var result = ISO3166.getCountryCode(input);
            return angular.isUndefined(result) ? input : result;
        };
    }])
    .directive('countryCode', ['ISO3166', function (ISO3166) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {
                    if (ISO3166.isCountryCode(viewValue)) {
                        ctrl.$setValidity('countrycode', true);
                        return viewValue;
                    } else {
                        ctrl.$setValidity('countrycode', false);
                        return undefined;
                    }
                });
            }
        };
    }]);
