'use strict';

angular.module('myApp.localeTranslation', []).
	value('currentLocale', {
		WRITTENBY: 'Scritto da',
		ONDATE: 'il',
		LIKEIT: 'Aggiungi un \'like\'',
		NOLIKES: '',
		ONELIKE: 'Questo articolo piace ad una persona.',
		MANYLIKES: 'Questo articolo piace a @{}@ persone.',
		TOTOP: 'Torna su',
		_getLocalizationKeys: function() {
			// Returns an object that has as properties the same properties of this object.
			// The values of these properties is equal to the name of each properties.
			var keys = {};
			for (var k in this) {
				keys[k] = k;
			}
			return keys;
		}
	});