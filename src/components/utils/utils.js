export default function generateRandomId(length = 15) {
  let id = "";
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890_,+=";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  return id;
}
