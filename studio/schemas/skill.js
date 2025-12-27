export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Upload skill icon (SVG or PNG recommended)'
    },
    {
      name: 'iconUrl',
      title: 'Icon URL (Alternative)',
      type: 'url',
      description: 'Or provide an icon URL (e.g., from devicon.dev)'
    },
    {
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'number',
      validation: Rule => Rule.required().min(0).max(100),
      description: 'Proficiency percentage (0-100)'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend', value: 'frontend' },
          { title: 'Backend', value: 'backend' },
          { title: 'Mobile', value: 'mobile' },
          { title: 'Database', value: 'database' },
          { title: 'DevOps', value: 'devops' },
          { title: 'Design', value: 'design' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      validation: Rule => Rule.min(0).max(50)
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
      title: 'Proficiency, High to Low',
      name: 'proficiencyDesc',
      by: [{ field: 'proficiency', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'icon'
    }
  }
}
