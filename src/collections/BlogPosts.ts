import { CollectionConfig } from 'payload/types'

const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: {
    useAsTitle: "title_cz",
    defaultColumns: ["title_cz", "title_en"], // Only show text fields in list view
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title_cz",
      label: "Czech Title",
      type: "text",
      required: true,
    },
    {
      name: "title_en",
      label: "English Title",
      type: "text",
      required: true,
    },
    {
      name: "text_cz",
      label: "Czech Text",
      type: "richText",
      required: true,
    },
    {
      name: "text_en",
      label: "English Text",
      type: "richText",
      required: true,
    },
    {
      name: "images",
      label: "Images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
}

export default BlogPosts
