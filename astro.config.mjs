import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Works',
			social: {
				github: 'https://github.com/Victor-Nyangi',
			},
			sidebar: [
				{
					label: 'Work',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Work Projects', slug: 'work/example' },
					],
				},
				{
					label: 'Consultancy',
					autogenerate: { directory: 'consultancy' },
				},
				{
					label: 'Hobbies',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Hobby Projects', slug: 'hobbies/example' },
					],				},
				{
					label: 'Knowledge',
					autogenerate: { directory: 'knowledge' },
				},
			],
		}),
	],
});
