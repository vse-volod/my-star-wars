import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../api/swapi";
import { ICharacter } from "../types/character";
import CharacterDetailsForm from "../components/CharacterDetailsForm";
import Breadcrumbs from "../components/Breadcrumbs";
import Layout from "../components/Layout";
import { Box, Typography, CircularProgress } from "@mui/material";

const CharacterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<ICharacter | null>(null);

  useEffect(() => {
    async function fetchCharacter() {
      if (id) {
        const data = await getCharacterById(parseInt(id));
        setCharacter(data);
      }
    }
    fetchCharacter();
  }, [id]);

  const handleSave = useCallback((updatedCharacter: ICharacter) => {
    setCharacter({ ...updatedCharacter, edited: new Date().toISOString() });
  }, []);

  if (!character) {
    return <CircularProgress />;
  }

  return (
    <Layout>
      <Box width="100%" textAlign="center">
        <Breadcrumbs currentPage="Character Details" />
        <Typography variant="h1">Character Details</Typography>
        <CharacterDetailsForm character={character} onSave={handleSave} />
      </Box>
    </Layout>
  );
};

export default CharacterPage;
