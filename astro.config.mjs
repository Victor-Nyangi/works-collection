import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Victor Gichui\'s Works',
        social: {
            github: 'https://github.com/Victor-Nyangi',
        },
        sidebar: [
            {
                label: 'Work',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Work Projects', slug: 'work/view' },
                ],
            },
            {
                label: 'Consultancy',
                autogenerate: { directory: 'consultancy',  slug: 'consultancy/view' },
            },
            {
                label: 'Hobbies',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Hobby Projects', slug: 'hobbies/view' },
                ],				},
            {
                label: 'Knowledge',
                autogenerate: { directory: 'knowledge' , slug: 'knowledge/view'},
            },
        ],
		}), react(),mdx(),],
});