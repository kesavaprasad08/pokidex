import {
    Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Pokemon } from "@prisma/client";
import { UseTRPCQueryResult } from "@trpc/react-query/shared";
import React, { useState } from "react";

type PokedexOutputProps = {
  pokemonData: UseTRPCQueryResult<Pokemon[], any>;
};

const PokedexOutput = ({ pokemonData }: PokedexOutputProps) => {
    if (!pokemonData?.data) return null;

  return(<Card sx={{
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
<h1>{pokemonData.data.name}</h1>
    <p>ID: {pokemonData.data.id}</p>
    
    
    Type(s) : {pokemonData.data.types.join(", ")}
    <img src={pokemonData.data.sprite} alt={pokemonData.data.name} />
    
</Card>);
}

export default PokedexOutput;
