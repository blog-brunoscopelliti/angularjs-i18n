<!doctype html>
<html lang="en" ng-app="myApp">
	<head>
		<meta charset="ISO-8859-1"/>
		<title>AngularJS Internazionalization - My personal approach - Demo</title>
		<link rel="stylesheet" href="css/style.css"/>
	</head>
	<body ng-controller="mainCtrl">
		
		<!-- fake blog structure -->
		<div id="posts">
			<div class="post" ng-repeat="p in articles">
				<p class="meta">
					<span class="author">{{ 'WRITTENBY' | i18n }} <a href="{{p.website}}" target="_blank">{{p.author}}</a>,</span>
					<span class="date">{{ 'ONDATE' | i18n }} {{p.date | date:'dd MMMM yyyy' }}</span>
				</p>				
				<h2>{{p.title}}</h2>
				<p class="body">{{p.excerpt}}</p>
				<p class="footer">
					<ng-pluralize count="p.likes"
						when="{
							0: '{{ localizationKeys.NOLIKES | i18n }}',
							one: '{{ localizationKeys.ONELIKE | i18n }}',
							other: '{{ localizationKeys.MANYLIKES | i18n:this.p.likes }}'
						}">
					</ng-pluralize>
					<span class="action" ng-click="like($index);">{{ 'LIKEIT' | i18n }}</span>
				</p>
			</div>
		</div>
		<div class="top">
			<a href="#top">{{ 'TOTOP' | i18n | uppercase }}</a>
		</div>
		
		<!-- include angularjs -->
		<script src="lib/angular.1.0.6.js"></script>

		<?php
			// I'm using PHP to determine the most probably preferred language of the user.
			// In this case I used the $_SERVER['HTTP_ACCEPT_LANGUAGE'] variable, but more performant ways could be easily implemented.
			$supportedLanguage = array('en', 'it');
			$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
			
			// $lang = 'it';
		?>
		
		<!-- include the correct locale on the basis of the detected language -->
		<?php if (in_array($lang, $supportedLanguage) ): ?>

			<script src="locale/angular-locale_<?php echo $lang; ?>.js"></script>
			<script src="locale/i18n_<?php echo $lang; ?>.js"></script>
		
		<?php else: ?>
		
			<script src="locale/angular-locale_en.js"></script>
			<script src="locale/i18n_en.js"></script>
		
		<?php endif; ?>

		<!-- finally, all the others javascript files -->
		<script src="js/filters.js"></script>
		<script src="js/controllers.js"></script>

	</body>
</html>