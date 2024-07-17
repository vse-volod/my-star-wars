import React from "react";
import { ICharacter } from "../types/character";
import { Grid } from "@mui/material";
import CharacterCard from "./CharacterCard";

interface CharacterListProps {
  characters: ICharacter[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <Grid container spacing={2}>
      {characters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </Grid>
  );
};

export default CharacterList;
