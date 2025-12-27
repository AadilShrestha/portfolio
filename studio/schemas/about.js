export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'resumeUrl',
      title: 'Resume URL',
      type: 'url'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'experience',
      title: 'Work Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'company',
              title: 'Company',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'position',
              title: 'Position',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'startDate',
              title: 'Start Date',
              type: 'date',
              validation: Rule => Rule.required()
            },
            {
              name: 'endDate',
              title: 'End Date',
              type: 'date',
              description: 'Leave empty if currently working here'
            },
            {
              name: 'current',
              title: 'Currently Working Here',
              type: 'boolean',
              initialValue: false
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4
            }
          ]
        }
      ]
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'school',
              title: 'School/University',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'degree',
              title: 'Degree',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'field',
              title: 'Field of Study',
              type: 'string'
            },
            {
              name: 'startYear',
              title: 'Start Year',
              type: 'number',
              validation: Rule => Rule.required()
            },
            {
              name: 'endYear',
              title: 'End Year',
              type: 'number'
            },
            {
              name: 'current',
              title: 'Currently Studying',
              type: 'boolean',
              initialValue: false
            }
          ]
        }
      ]
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'github',
          title: 'GitHub',
          type: 'url'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url'
        },
        {
          name: 'dribbble',
          title: 'Dribbble',
          type: 'url'
        },
        {
          name: 'behance',
          title: 'Behance',
          type: 'url'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'profileImage'
    }
  }
}
