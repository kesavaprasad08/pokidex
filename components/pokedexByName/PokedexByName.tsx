"use client";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { trpc } from "@/utils/trpc";
import { useState } from "react";
import PokedexInput from "../pokedexByName/PokedexInput";
import PokedexOutput from "./PokedexOutput";

const PokedexByName = () => {
  const [input, getInput] = useState<string | undefined>(undefined);

  const pokemonData  = trpc.getPokemon.useQuery(input ? input : "all");
  
  return (
    <section style={{ backgroundColor: "#FFE889", padding: "15px" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <PokedexInput input={input} getInput={getInput} />
      <PokedexOutput pokemon={pokemonData.data} />
    </section>
  );
};

export default PokedexByName;
