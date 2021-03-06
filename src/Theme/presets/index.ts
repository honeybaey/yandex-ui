/**
 * Вспомогательный модуль, для использования в тестах или примерах.
 *
 * @internal
 */

import { theme as themeDefault } from './default';
import { theme as themeInverse } from './inverse';
import { theme as themeBrand } from './brand';
import { theme as themeLegacyDefault } from './legacy-default';
import { theme as themeLegacyInverse } from './legacy-inverse';
import { theme as themeLegacyBrand } from './legacy-brand';
import { theme as themeTurbo } from './turbo';
import { theme as themeTurboInverse } from './turbo-inverse';

export const presets = {
    default: themeDefault,
    inverse: themeInverse,
    brand: themeBrand,
    legacyDefault: themeLegacyDefault,
    legacyInverse: themeLegacyInverse,
    legacyBrand: themeLegacyBrand,
    turbo: themeTurbo,
    turboInverse: themeTurboInverse,
};

const keys = Object.keys as <T>(o: T) => (Extract<keyof T, string>)[];

export const presetsKeys = keys(presets);
