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
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Consultancy', slug: 'consultancy/view' },
                ],            
            },
        ],
		}), react(),mdx(),],
});