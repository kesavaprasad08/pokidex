"use client";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { trpc } from "@/utils/trpc";
import { useState } from "react";
import PokedexInput from "../pokedexByMultipleNames/PokedexInput";
import PokedexOutput from "../pokedexByType/PokedexTable";

const PokedexByMultipleNames = () => {
  const [input, getInput] = useState<string[] | undefined>(undefined);
  const pokemonData = trpc.getPokemonArray.useQuery(input ? input : []);
  return (
    <section style={{ backgroundColor: "rgb(255, 200, 0)", padding: "15px" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false}
      >
        <CircularProgress />
      </Backdrop>
      <PokedexInput input={input} getInput={getInput} />
      <PokedexOutput pokemonData={pokemonData} />
    </section>
  );
};

export default PokedexByMultipleNames;
