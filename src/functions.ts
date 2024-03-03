import { all_countries } from "./countries";

export const countryNames = async () => {
  return all_countries.map((country) => country.name) as string[];
};

export const countryShortNames = async () => {
  return all_countries.map((country) => country.shortName) as string[];
};

export const countries = async () => {
  return all_countries;
};

export const getCountry = async ({ name }: { name: string }) => {
  return all_countries.find((country) => country.name === name);
};
