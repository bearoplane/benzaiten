export default function (name) {
  try {
    return require(`./${name}.png`);
  } catch (e) {

  }
}
