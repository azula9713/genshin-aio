function sanitizeHTML(html: string) {
  const pureString = html.replace(/<\/?[^>]+(>|$)/g, "");
  const values = pureString.split("\\n");

  return values;
}

export function cleanAttackData(attackData: string[]) {
  const purgedArray = attackData.filter((str) => str !== ""); // remove empty strings

  let result = [];
  for (let i = 0; i < purgedArray.length; i += 2) {
    result.push({ atkType: purgedArray[i], desc: purgedArray[i + 1] });
  }
  return result;
}

export default sanitizeHTML;
