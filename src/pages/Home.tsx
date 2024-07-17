import React, { useEffect, useState } from "react";
import { getCharacters, searchCharacters } from "../api/swapi";
import { CharacterData } from "../types/character";
import CharacterList from "../components/CharacterList";
import Breadcrumbs from "../components/Breadcrumbs";
import { Pagination, CircularProgress, Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";

const ITEMS_PER_PAGE = 9;

const Home: React.FC = () => {
  const [charactersData, setCharactersData] = useState<CharacterData>({
    count: 0,
    characters: [],
  });
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      const data = searchQuery
        ? await searchCharacters(searchQuery)
        : await getCharacters(page);
      setCharactersData(data);
    }
    fetchCharacters();
  }, [page, searchQuery]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <Layout>
      <Box width="100%" textAlign="center">
        <Breadcrumbs currentPage="Home" />
        <Typography variant="h1">Star Wars Characters</Typography>
        <SearchBar onSearch={handleSearch} />
        {charactersData.count === 0 ? (
          <CircularProgress />
        ) : (
          <>
            <Box width="100%">
              <CharacterList characters={charactersData.characters} />
            </Box>
            <Pagination
              count={Math.ceil(charactersData.count / ITEMS_PER_PAGE)}
              page={page}
              onChange={handlePageChange}
              style={{ marginTop: "20px" }}
            />
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
