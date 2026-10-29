// @ts-check
// Ajuda do MarkPlus (Starlight). Repositório público só da ajuda (rs-jr/markplus-help),
// publicado no GitHub Pages (.github/workflows/docs.yml).
// O endereço precisa bater com HELP_URL em electron/shared/help.ts.
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://rs-jr.github.io',
	base: '/markplus-help',
	integrations: [
		starlight({
			title: 'MarkPlus Help',
			description: 'How to use MarkPlus: simple guides, tips and examples.',
			logo: { src: './src/assets/markplus.png', alt: 'MarkPlus' },
			favicon: '/favicon.png',
			customCss: ['./src/styles/theme.css'],
			lastUpdated: false,
			pagination: true,
			sidebar: [
				{
					label: 'Start',
					items: [
						{ label: 'Welcome', slug: 'index' },
						{ label: 'Start here', slug: 'getting-started' },
					],
				},
				{
					label: 'Basics',
					items: [
						{ label: 'Workspaces', slug: 'workspaces' },
						{ label: 'Documents and tabs', slug: 'documents' },
					],
				},
				{
					label: 'Writing',
					items: [
						{ label: 'Writing and formatting', slug: 'writing' },
						{ label: 'Pages, images and more', slug: 'blocks' },
						{ label: 'Tables', slug: 'tables' },
						{ label: 'Columns', slug: 'columns' },
						{ label: 'Text boxes', slug: 'text-boxes' },
						{ label: 'Links', slug: 'links' },
						{ label: 'Databases', slug: 'databases' },
					],
				},
				{
					label: 'Guides',
					items: [{ label: 'Documentation with cross-references', slug: 'cross-references' }],
				},
				{
					label: 'Tools',
					items: [
						{ label: 'Search', slug: 'search' },
						{ label: 'Export and share', slug: 'export' },
						{ label: 'Writing with AI', slug: 'ai' },
						{ label: 'Appearance and layout', slug: 'appearance' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Keyboard shortcuts', slug: 'shortcuts' },
						{ label: 'Questions and answers', slug: 'faq' },
					],
				},
			],
		}),
	],
});
