export interface Country {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: {
    latlng: [number, number];
  };
  car: {
    side: string;
    signs: string[];
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: {
    png: string;
    svg: string;
  };
  continents: string[];
  currencies: {
    [code: string]: {
      name?: string;
      symbol?: string;
    };
  };
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra?: {
      f: string;
      m: string;
    };
  };
  fifa: string;
  flag: string;
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    [code: string]: string;
  };
  latlng: [number, number];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [code: string]: {
        official: string;
        common: string;
      };
    };
  };
  population: number;
  postalCode: {
    format: string | null;
    regex: string | null;
  };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    [code: string]: {
      official: string;
      common: string;
    };
  };
  unMember: boolean;
}
export interface FetchResults {
    data?: Country[];
    error?: boolean;
    loading: boolean;
}