export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Application', value: 'web-app' },
          { title: 'Mobile Application', value: 'mobile-app' },
          { title: 'Landing Page', value: 'landing-page' },
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Dashboard', value: 'dashboard' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: Rule => Rule.required().min(2020).max(new Date().getFullYear())
    },
    {
      name: 'role',
      title: 'Your Role',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url'
    },
    {
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url'
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Year, New to Old',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'coverImage'
    }
  }
}
