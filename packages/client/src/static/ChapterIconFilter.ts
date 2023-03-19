export default async function chapterIconFilter(characterName: string) {
  let image = null;

  try {
    const imageModule = await import(
      `../assets/images/chapters/UI_ChapterIcon_${characterName}.png`
    );

    image = imageModule.default;
  } catch (error) {
    console.error(`Error loading chapter icon for ${characterName}:`, error);

    try {
      const imageModule2 = await import(
        `../assets/images/constellations/Eff_UI_Talent_${characterName}.png`
      );

      image = imageModule2.default;
    } catch (error) {
      console.error(`Error loading talent icon for ${characterName}:`, error);

      image = null;
    }
  }

  return image;
}
