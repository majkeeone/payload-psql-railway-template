import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/*"],
  },
  access: {
    read: () => true,
  },
  fields: [],
}

export default Media
