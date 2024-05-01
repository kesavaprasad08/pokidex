import { Card } from "@mui/material";
import { Pokemon } from "@prisma/client";
import React from "react";

type PokedexOutputProps = {
  pokemon: { id: number; name: string; sprite: string; types: string[]; } | null | undefined;
};

const PokedexOutput = ({ pokemon }: PokedexOutputProps) => {
  if (!pokemon) return null;

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
      <h1>{pokemon.name}</h1>
      <p>ID: {pokemon.id}</p>
      Type(s) : {pokemon.types.join(", ")}
      <img src={pokemon.sprite} alt={pokemon.name} />
    </Card>
  );
};

export default PokedexOutput;
