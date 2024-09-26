import type { CollectionConfig } from 'payload/types'

const Categorie: CollectionConfig = {
  slug: 'categorie',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,

    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      
    },
  ],
}

export default Categorie
