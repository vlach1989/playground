var path = require('path');

module.exports = function override(config, env) {
	// TODO comment when using package from npm
	config.resolve = {
		alias: {
			'@gisatcz/cross-package-react-context': "C:/Users/pvlach/DATA/cross-package-react-context",
			// "@gisatcz/ptr-core": "C:/Users/pvlach/DATA/ptr-core",
			// "@gisatcz/ptr-charts": "C:/Users/pvlach/DATA/ptr-charts",
			"@gisatcz/ptr-maps": "C:/Users/pvlach/DATA/ptr-maps",
			// "@gisatcz/ptr-utils": "C:/Users/pvlach/DATA/ptr-utils",
			// "@gisatcz/ptr-core": "C:/Users/pvlach/DATA/ptr-core",
			"@gisatcz/ptr-state": "C:/Users/pvlach/DATA/ptr-state",
			// "@gisatcz/ptr-components": "C:/Users/pvlach/DATA/ptr-components",
			// "@gisatcz/ptr-deprecated": "C:/Users/pvlach/DATA/ptr-deprecated",
		}
	};

	return config;
};