import {
  Card,
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

type PokedexTableProps = {
  pokemonData: UseTRPCQueryResult<{ id: number; name: string; sprite: string; types: string[]; }[] | undefined,any>;
};

const PokedexTable = ({ pokemonData }: PokedexTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const pageChangeHandler = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (!pokemonData?.data || pokemonData?.data.length === 0) return null;

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const slicedData = pokemonData.data.slice(startIndex, endIndex);
  console.log(slicedData)

  return (
    <TableContainer component={Card} sx={{ maxWidth: "1024px", mx: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <p>ID</p>
            </TableCell>
            <TableCell align="center">
              <p>Name </p>
            </TableCell>
            <TableCell align="center">
              <p>Types</p>
            </TableCell>
            <TableCell align="center">
              <p>Sprite</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {slicedData.map((pokemon) => (
            <TableRow key={pokemon.id}>
              <TableCell align="center">
                <p>{pokemon.id}</p>
              </TableCell>
              <TableCell align="center">
                <p> {pokemon.name}</p>
              </TableCell>
              <TableCell align="center">
                <p>{pokemon.types.join(", ")}</p>
              </TableCell>
              <TableCell align="center">
                <img src={pokemon.sprite} alt={pokemon.name} width={"75px"} />
              </TableCell>
            </TableRow>
          ))}
          {slicedData.length === 0 && (
            <TableRow>
              <TableCell align="center" colSpan={4}>
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20, 25]}
        component="div"
        count={pokemonData?.data?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={pageChangeHandler}
        onRowsPerPageChange={rowsPerPageChangeHandler}
      />
    </TableContainer>
  );
};

export default PokedexTable;
