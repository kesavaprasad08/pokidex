"use client";

import { Select, MenuItem, SelectChangeEvent, Card } from "@mui/material";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection = ({
  selectType,
  selectedType,
}: PokemonTypeSelectionProps) => {
  const handleTypeChange = (e: SelectChangeEvent<string>) => {
    selectType(e.target.value);
  };

  return (
    <Card
      sx={{
        maxWidth: { xs: "90%", sm: "75%", md: "50%", lg: "400px" },
        mx: "auto",
        padding: "1rem",
        marginY: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center",
      }}
    >
      <h1>Pokedex By Type</h1>
      <Select
        value={selectedType || "all"}
        onChange={handleTypeChange}
        fullWidth
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="Electric">Electric</MenuItem>
        <MenuItem value="Normal">Normal</MenuItem>
        <MenuItem value="Water">Water</MenuItem>
        <MenuItem value="Grass">Grass</MenuItem>
        <MenuItem value="Poison">Poison</MenuItem>
        <MenuItem value="Fire">Fire</MenuItem>
        <MenuItem value="Bug">Bug</MenuItem>
        <MenuItem value="Flying">Flying</MenuItem>
      </Select>
    </Card>
  );
};

export default PokemonTypeSelection;
