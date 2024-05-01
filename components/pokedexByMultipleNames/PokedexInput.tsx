"use client";

import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

type PokemonInputProps = {
  input: string[] | undefined;
  getInput: (type: string[] | undefined) => void;
};

const PokedexInput = ({ getInput, input }: PokemonInputProps) => {
  const [submitValue, setSubmitValue] = useState<string | undefined>("");

  const getHandler = () => {
    if (submitValue) {
      getInput(submitValue.split("\n"));
      setSubmitValue("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitValue(event.target.value);
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
      <h1>Enter Multiple Names</h1>
      <p>(followed by line break)</p>
      <TextField
        id="outlined-basic"
        label="Enter upto 5 Pokemon Names "
        multiline
        rows={5}
        value={submitValue || ""}
        variant="outlined"
        onChange={handleInputChange}
      />
      <Button onClick={getHandler}>Get</Button>
    </Card>
  );
};

export default PokedexInput;
