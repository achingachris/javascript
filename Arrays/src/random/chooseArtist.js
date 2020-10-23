// array
const starArtists = [
  "Cardi B",
  "Taylor Swift",
  "Halsey",
  "Billie Eilish",
  "Nicki Minaj",
  "Wiz Khalifa",
  "2 Chainz",
  "Migos",
  "2 Pac",
  "Snoopy Dog",
  "Lil Wayne",
  "Birdman",
  "Kodak Black",
  "Tyler, the Creater",
  "Zaytoven",
  "Young Dolph",
  "Young Thug",
  "Quavo",
  "Offset",
  "Takeoff",
  "Lil Uzi Vert",
  "Lil Yachty",
];

const artistToListen =
  starArtists[Math.floor(Math.random() * starArtists.length)];

console.log(`Listen to ${artistToListen}'s songs`);
