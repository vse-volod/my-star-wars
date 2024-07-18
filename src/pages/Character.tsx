import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../api/swapi";
import { ICharacter } from "../types/character";
import CharacterDetailsForm from "../components/CharacterDetailsForm";
import Breadcrumbs from "../components/Breadcrumbs";
import Layout from "../components/Layout";
import { Box, Typography, CircularProgress } from "@mui/material";
import ErrorSnackbar from "../components/ErrorSnackbar";
import useFetchData from "../hooks/useFetchData";

const CharacterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<ICharacter | null>(null);

  const fetchCharacter = useCallback(async () => {
    if (id) {
      const data = await getCharacterById(Number(id));
      setCharacter(data);
    }
  }, [id]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  const handleSave = useCallback((updatedCharacter: ICharacter) => {
    setCharacter({ ...updatedCharacter, edited: new Date().toISOString() });
  }, []);

  const { loading, error, setError } = useFetchData(fetchCharacter);

  const handleCloseSnackbar = () => {
    setError(null);
  };

  return (
    <Layout>
      <Box width="100%" textAlign="center">
        <Breadcrumbs currentPage="Character Details" />
        <Typography variant="h1">Character Details</Typography>
        {loading ? (
          <CircularProgress />
        ) : character ? (
          <CharacterDetailsForm character={character} onSave={handleSave} />
        ) : (
          !loading && (
            <Typography variant="h6" color="textSecondary">
              Character not found.
            </Typography>
          )
        )}
        <ErrorSnackbar error={error} onClose={handleCloseSnackbar} />
      </Box>
    </Layout>
  );
};

export default CharacterPage;
