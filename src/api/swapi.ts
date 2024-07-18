import { ICharacter, CharacterData } from "../types/character";

const HOST = "https://swapi.dev/api";

export async function getCharacters(page: number): Promise<CharacterData> {
  try {
    const response = await fetch(`${HOST}/people/?page=${page}`);
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }
    const data = await response.json();
    return {
      characters: data.results,
      count: data.count,
    };
  } catch (error) {
    console.error("Error fetching characters:", error);
    return {
      characters: [],
      count: 0,
    };
  }
}

export async function getCharacterById(id: number): Promise<ICharacter | null> {
  try {
    const response = await fetch(`${HOST}/people/${id}/`);
    if (!response.ok) {
      throw new Error("Failed to fetch character");
    }
    const character = await response.json();
    return character;
  } catch (error) {
    console.error("Error fetching character:", error);
    return null; 
  }
}

export async function searchCharacters(query: string): Promise<CharacterData> {
  try {
    const response = await fetch(`${HOST}/people/?search=${query}`);
    if (!response.ok) {
      throw new Error("Failed to search characters");
    }
    const data = await response.json();
    return {
      characters: data.results,
      count: data.count,
    };
  } catch (error) {
    console.error("Error searching characters:", error);
    return {
      characters: [],
      count: 0,
    };
  }
}
