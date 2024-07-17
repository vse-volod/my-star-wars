import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ICharacter } from "../types/character";
import { Grid, Card, CardContent, Typography } from "@mui/material";

interface CharacterCardProps {
  character: ICharacter;
}

const CharacterCardComponent: React.FC<CharacterCardProps> = ({ character }) => {
  const id = character.url.split("/").filter(Boolean).pop();
  return (
    <Grid item xs={12} sm={6} md={4} style={{ minWidth: 300, maxWidth: 400 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            <Link to={`/character/${id}`}>{character.name}</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Gender: {character.gender}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Birth Year: {character.birth_year}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Height: {character.height}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Mass: {character.mass}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const areEqual = (prevProps: CharacterCardProps, nextProps: CharacterCardProps) => {
  return prevProps.character.url === nextProps.character.url;
};

const CharacterCard = memo(CharacterCardComponent, areEqual);

export default CharacterCard;