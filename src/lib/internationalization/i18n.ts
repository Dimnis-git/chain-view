import i18n from 'sveltekit-i18n';

const config = {
	loaders: [
		{
			locale: 'pt',
			key: 'common',
			loader: async () => (await import('./pt-BR/common.json')).default
		},
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en-US/common.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
