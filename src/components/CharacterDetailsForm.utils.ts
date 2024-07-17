import { ICharacter, CharacterValues } from "../types/character";

export const formatDateTime = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleString("en-GB");
};

export const joinArrayFields = (character: ICharacter) => ({
  ...character,
  films: character.films.join(", "),
  starships: character.starships.join(", "),
  vehicles: character.vehicles.join(", "),
  species: character.species.join(", "),
});

export const splitArrayFields = (values: CharacterValues) => ({
  ...values,
  films: values.films.split(",").map((film: string) => film.trim()),
  starships: values.starships
    .split(",")
    .map((starship: string) => starship.trim()),
  vehicles: values.vehicles.split(",").map((vehicle: string) => vehicle.trim()),
  species: values.species.split(",").map((species: string) => species.trim()),
});
    