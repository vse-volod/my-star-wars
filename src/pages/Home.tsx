import React, { useCallback, useState } from "react";
import { getCharacters, searchCharacters } from "../api/swapi";
import { CharacterData } from "../types/character";
import CharacterList from "../components/CharacterList";
import Breadcrumbs from "../components/Breadcrumbs";
import { Pagination, CircularProgress, Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";
import ErrorSnackbar from "../components/ErrorSnackbar";
import useFetchData from "../hooks/useFetchData";

const ITEMS_PER_PAGE = 10;

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  
  const fetchCharacters = useCallback(() => {
    return searchQuery ? searchCharacters(searchQuery) : getCharacters(page);
  }, [page, searchQuery]);

  const { data: charactersData, loading, error, setError } = useFetchData<CharacterData>(fetchCharacters);

  const handlePageChange = (
    _: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleCloseSnackbar = () => {
    setError(null);
  };

  return (
    <Layout>
      <Box width="100%" textAlign="center">
        <Breadcrumbs currentPage="Home" />
        <Typography variant="h1">Star Wars Characters</Typography>
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <CircularProgress />
        ) : charactersData && charactersData.characters.length === 0 ? (
          <Typography variant="h6" color="textSecondary">
            No characters found.
          </Typography>
        ) : (
          <>
            <Box width="100%">
              <CharacterList characters={charactersData?.characters || []} />
            </Box>
            <Pagination
              count={Math.ceil((charactersData?.count || 0) / ITEMS_PER_PAGE)}
              page={page}
              onChange={handlePageChange}
              style={{ marginTop: "20px" }}
            />
          </>
        )}
        <ErrorSnackbar error={error} onClose={handleCloseSnackbar} />
      </Box>
    </Layout>
  );
};

export default Home;
