// check good name bad name
const latters = ["a", "y", "i", "e", "o", "u", "w"];

function checkName(name) {
  if (typeof name !== "string") {
    return " invalid";
  }

  const small = name.toLowerCase();
  const lastLatter = small.charAt(small.length - 1);
  //   console.log(lastLatter);
  for (const later of latters) {
    if (lastLatter == later) {
      return " Bad name";
    }
  }
  return "good name";
}
const givenName = checkName("Raman");
console.log(givenName);
