function parseText(inputText: string) {
  let modifiedText = inputText;

  // Replace color codes with HTML style tags
  modifiedText = modifiedText.replace(
    /<color=([^>]+)>/g,
    '<b style="color:$1">'
  );
  modifiedText = modifiedText.replace(/<\/color>/g, "</b>");

  // Replace {LAYOUT_MOBILE#Tap}{LAYOUT_PC#Press}{LAYOUT_PS#Press} with "Mobile:Tap, PS/PC: Press"
  modifiedText = modifiedText.replace(
    /\{LAYOUT_MOBILE#Tap\}\{LAYOUT_PC#Press\}\{LAYOUT_PS#Press\}/g,
    "Mobile:Tap, PS/PC: Press"
  );

  // Replace newlines with <br/>
  modifiedText = modifiedText.replace(/(\r\n|\n|\\n|\r)/gm, "<br/>");

  // Remove unnecessary # symbols
  modifiedText = modifiedText.replace(
    /#(?!([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))/g,
    ""
  );

  // Remove <br/> tags from the beginning of the text
  modifiedText = modifiedText.replace(/^<br\/>/g, "");

  return modifiedText;
}

export default parseText;
