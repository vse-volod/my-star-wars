import { ICharacter, CharacterData } from "../types/character";

const HOST = "https://swapi.dev/api";


export async function getCharacters(page: number): Promise<CharacterData> {
  const response = await fetch(`${HOST}/people/?page=${page}`);
  const data = await response.json();
  return {
    characters: data.results,
    count: data.count,
  }
}

export async function getCharacterById(id: number): Promise<ICharacter> {
  const response = await fetch(`${HOST}/people/${id}/`);
  const character = await response.json();
  return character;
}

export async function searchCharacters(query: string): Promise<CharacterData> {
  const response = await fetch(`${HOST}/people/?search=${query}`);
  const data = await response.json();
  return {
    characters: data.results,
    count: data.count,
  }
}
