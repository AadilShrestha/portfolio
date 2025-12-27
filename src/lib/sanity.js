import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const fetchProjects = async (featured = false) => {
  const query = featured
    ? `*[_type == "project" && featured == true] | order(order asc)`
    : `*[_type == "project"] | order(order asc)`;
  
  return await client.fetch(query);
};

export const fetchSkills = async (category = null) => {
  const query = category
    ? `*[_type == "skill" && category == "${category}"] | order(order asc)`
    : `*[_type == "skill"] | order(order asc)`;
  
  return await client.fetch(query);
};

export const fetchAbout = async () => {
  const query = `*[_type == "about"][0]`;
  return await client.fetch(query);
};
