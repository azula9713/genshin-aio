function capitalizeFirstLetter(str: string): string {
  console.log(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalizeFirstLetter;
