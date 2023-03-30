function parseText(inputText: string) {
  // Replace color codes with HTML style tags
  let modifiedText = inputText.replace(
    /<color=([^>]+)>/g,
    '<b style="color:$1">'
  );
  modifiedText = modifiedText.replace(/<\/color>/g, "</b>");

  modifiedText = modifiedText.replace(
    /\{LAYOUT_MOBILE#Tap\}\{LAYOUT_PC#Press\}\{LAYOUT_PS#Press\}/g,
    "Mobile:Tap, PS/PC: Press"
  );

  modifiedText = modifiedText.replace(/(\r\n|\n|\\n|\r)/gm, "<br/>");

  //Removes unnecessary # symbols from the modified text
  const regex = /#(?!([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))/g;

  modifiedText = modifiedText.replace(regex, "");

  return modifiedText;
}

export default parseText;
