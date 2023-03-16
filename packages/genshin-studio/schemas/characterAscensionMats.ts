export default {
  name: 'characterLevelUpmats',
  title: 'Character level Up Materials',
  type: 'document',
  fields: [
    {
      name: 'enkaId',
      title: 'Enka ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Character Name',
      type: 'string',
    },
    {
      name: 'skillDepotId',
      title: 'Enka Skill Depot ID',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
