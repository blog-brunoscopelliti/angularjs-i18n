'use strict';

angular.module('myApp', ['myApp.filters', 'myApp.localeTranslation']);

function mainCtrl(scope, locale) {

	// The hard-coded posts of the blog
	scope.articles = [
		{
			author: 'Bruno Scopelliti',
			website: 'http://blog.brunoscopelliti.com',
			date: '2013-04-21',
			title: 'Lorem ipsum',
			excerpt: 'dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			likes: 0
		},
		{
			author: 'Bruno Scopelliti',
			website: 'http://blog.brunoscopelliti.com',
			date: '2013-01-07',
			title: 'De Finibus Bonorum et Malorum',
			excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
			likes: 1
		}
	];

	// Add one like for an article
	scope.like = function(i) {
		scope.articles[i].likes++;
	}


	// This is needed in the case we want to use a localized label 
	// in combination with the directive ngPluralize of AngularJS.
	scope.localizationKeys = locale._getLocalizationKeys();

}
mainCtrl.$inject = ['$scope', 'currentLocale'];