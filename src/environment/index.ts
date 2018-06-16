const ENV = process.env.NODE_ENV || 'development';
const configs = {
	development: {
		production: '$BOOLEAN',
		authorization: '$AUTHORIZATION',
		apiUrl: '$API_URL',
	},
	production: {
		production: '$BOOLEAN',
		authorization: '$AUTHORIZATION',
		apiUrl: '$API_URL',
	},
};

export const environment = configs[ENV];
