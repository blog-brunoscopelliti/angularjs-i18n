'use strict';

angular.module('myApp.localeTranslation', []).
	value('currentLocale', {
		WRITTENBY: 'Written by',
		ONDATE: 'on the',
		LIKEIT: 'Add one like.',
		NOLIKES: '',
		ONELIKE: 'One person likes this article.',
		MANYLIKES: '@{}@ persons like this article.',
		TOTOP: 'Top',
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