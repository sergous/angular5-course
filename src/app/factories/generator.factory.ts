import { InjectionToken } from "@angular/core";

export const BUILD_ID = new InjectionToken<any[]>('BUILD_ID');

export function GeneratorFactory(stringLength: number) {
  function getRandomString() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  function getLongString(stringLength) {
    let string: string;
    do {
      string += getRandomString();
    } while ( string.length < stringLength );

    return string.substr(0, stringLength);
  }

  return function() {
    return getLongString(stringLength);
  }
}
