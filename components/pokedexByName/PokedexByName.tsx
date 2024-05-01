"use client";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { trpc } from "@/utils/trpc";
import { Button, Card, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PokedexInput from "../pokedexByName/PokedexInput";
import PokedexOutput from "./PokedexOutput";

const PokedexByName = () => {
  //   const pokemonData = trpc.getPokemonByType.useQuery();
  const [input, getInput] = useState<string | undefined>(undefined);

  const pokemonData = trpc.getPokemon.useQuery(
    input ? input : "all"
  );

  return (
    <section style={{ backgroundColor: "#FFE889", padding: "15px" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <PokedexInput input={input} getInput={getInput} />
      <PokedexOutput pokemonData={pokemonData} />
    </section>
  );
};

export default PokedexByName;
