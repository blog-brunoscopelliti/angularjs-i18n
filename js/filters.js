'use strict';

var filters = angular.module('myApp.filters', []);

filters.filter('i18n', ['$rootScope', 'currentLocale', function ($rootScope, locale) {
	return function (key, p) {
		if (typeof locale[key] != 'undefined' && locale[key] != '') {
			return (typeof p === "undefined") ? locale[key] : locale[key].replace('@{}@', p);
		}
	}
}]);