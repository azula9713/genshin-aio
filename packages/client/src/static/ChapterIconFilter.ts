export default async function chapterIconFilter(characterName: string) {
  try {
    const imageModule = await import(
      `../assets/images/chapters/UI_ChapterIcon_${characterName}.png`
    );
    const image = imageModule.default;
    return image;
  } catch (error) {
    console.error(`Error loading chapter icon for ${characterName}:`, error);
    return null;
  }
}
