export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: Currency };
  idd: Idd;
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  cioc?: string;
  capital?: string[];
  gini?: { [key: string]: number };
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  por?: string;
  zho?: string;
  ces?: string;
  slk?: string;
  spa?: string;
  eng?: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  por?: Translation;
  zho?: Translation;
  ces?: Translation;
  slk?: Translation;
  spa?: Translation;
  eng?: Translation;
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CountryRegionCode {
  code: string;
  description: string;
}
