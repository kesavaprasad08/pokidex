import PokedexByType from "@/components/pokedexByType/PokedexByType";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PokedexByName from "@/components/pokedexByName/PokedexByName";
import PokedexByMultipleNames from "@/components/pokedexByMultipleNames/PokedexByMultipleNames";

const Homepage = () => {
  return (
    <main>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            style={{
              backgroundColor: "rgb(255, 200, 0)",
              textAlign: "center",
              padding: "15px",
            }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "DodgerBlue" }}
            >
              Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <PokedexByName />
      <PokedexByMultipleNames />
      <PokedexByType />
    </main>
  );
};

export default Homepage;
