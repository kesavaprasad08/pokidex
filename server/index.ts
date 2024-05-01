import { db } from "@/utils/db";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  getPokemon: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    const pokemon = await db.pokemon.findFirst({
      where: {
        name: input,
      },
    });
    return pokemon;
  }),
  getPokemonArray: publicProcedure
    .input(z.array(z.string()))
    .query(async (opts) => {
      const { input } = opts;
      const pokemonArray = await db.pokemon.findMany({
        where: {
          name: {
            in: input,
          },
        },
      });
      return pokemonArray;
    }),
  getPokemonByType: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    // console.log(input,'input')
    if (input === "all") {
      return await db.pokemon.findMany();
    } else {
      const pokemonByType = await db.pokemon.findMany({
        where: {
          types: {
            has: input,
          },
        },
      });
      return pokemonByType;
    }
  }),
});

export type AppRouter = typeof appRouter;