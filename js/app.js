angular.module('site', [])

// .config(function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       controller:'ListCtrl',
//       templateUrl:'index.php'
//     })
// })

.controller('MainCtrl', function($scope) {

	$scope.thingsIDopt =
	[
		{ name : "Design gráfico", link: ''}, 
		{ name : "Desenvolvimento Web", link: ''}, 
		{ name : "Desenvolvimento de Jogos", link: '', sub: [  { name: "Check with Mates", link : 'http://www.checkwithmates.com' }, 
											          	  { name: "CTL460K", link : 'http://cau.li/ggj' } 
											          	  ] }, 
		{ name : "Apps Mobile", link: ''}, 
		{ name : "Illustração", link: ''}, 
		{ name : "Animação 2D", link: ''}, 
		{ name : "Hacking Cívico", link: './bicicletasroubadas'}
	]

	$scope.thingsIDo =
	[
		{ name : "Graphic design", link: ''}, 
		{ name : "Web development", link: ''}, 
		{ name : "Game development", link: '', sub: [  { name: "Check with Mates", link : 'http://www.checkwithmates.com' }, 
											           { name: "CTL460K", link : 'http://cau.li/ggj' } 
											         ] }, 
		{ name : "Mobile Apps", link: ''}, 
		{ name : "Illustration", link: ''}, 
		{ name : "2D Animation", link: ''}, 
		{ name : "Contraptions", link: ''},
		{ name : "Civic Hacking", link: './bicicletasroubadas'}
	]


})