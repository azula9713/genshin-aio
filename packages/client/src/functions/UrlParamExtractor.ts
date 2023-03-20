export function urlParamExtractor(urlParam: string) {
  const urlParts = urlParam.split("/");
  return urlParts[urlParts.length - 1];
}
