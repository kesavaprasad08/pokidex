const { PrismaClient } = require("@prisma/client");

var prisma = new PrismaClient();

async function main() {
  const pokemonData = [
    {
      name: "Bulbasaur",
      types: ["Grass", "Poison"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    },
    {
      name: "Charmander",
      types: ["Fire"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    },
    {
      name: "Squirtle",
      types: ["Water"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    },
    {
      name: "Pikachu",
      types: ["Electric"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    },
    {
      name: "Jigglypuff",
      types: ["Normal", "Fairy"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png",
    },
    {
      name: "Gengar",
      types: ["Ghost", "Poison"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png",
    },
    {
      name: "Machop",
      types: ["Fighting"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png",
    },
    {
      name: "Geodude",
      types: ["Rock", "Ground"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png",
    },
    {
      name: "Eevee",
      types: ["Normal"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
    },
    {
      name: "Snorlax",
      types: ["Normal"],
      sprite:
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png",
    },
    {
      name: "Ivysaur",
      types: ["grass", "poison"],
      sprite: "https://pokemon.com/pictures/ivysaur.png",
    },
    {
      name: "Venusaur",
      types: ["grass", "poison"],
      sprite: "https://pokemon.com/pictures/venusaur.png",
    },
    {
      name: "Wartortle",
      types: ["water"],
      sprite: "https://pokemon.com/pictures/wartortle.png",
    },
    {
      name: "Blastoise",
      types: ["water"],
      sprite: "https://pokemon.com/pictures/blastoise.png",
    },
    {
      name: "Caterpie",
      types: ["bug"],
      sprite: "https://pokemon.com/pictures/caterpie.png",
    },
    {
      name: "Metapod",
      types: ["bug"],
      sprite: "https://pokemon.com/pictures/metapod.png",
    },
  ];
  for (const data of pokemonData) {
    await prisma.pokemon.create({
      data: {
        name: data.name,
        sprite: data.sprite,
        types: data.types,
      },
    });
  }

  console.log("Data seeded successfully");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
