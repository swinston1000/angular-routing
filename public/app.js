var app = angular.module('scotcha', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'partial-home.html'
    })
    .state('away', {
      url: '/away',
      template: '<h2>We are Away</h2>'
    })
    .state('home.about', {
      url: '/about',
      template: '<h2>We are awesome</h2>'
    });
});
