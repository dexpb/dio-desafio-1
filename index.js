const heroi = {
  nome: "Pablo",
  exp: 5001,
};

let nivel =
  heroi.exp <= 1000
    ? "Ferro"
    : heroi.exp <= 2000
    ? "Bronze"
    : heroi.exp <= 5000
    ? "Prata"
    : heroi.exp <= 7000
    ? "Ouro"
    : heroi.exp <= 8000
    ? "Platina"
    : heroi.exp <= 9000
    ? "Ascendente"
    : heroi.exp <= 10000
    ? "Imortal"
    : "Radiante";

console.log(`o nível do herói chamado ${heroi.nome} está no nível ${nivel}`);
