var blazinq = angular.module('blazinq', ['ngRoute', 'ngSanitize'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {templateUrl: 'partials/home.html', controller: HomeCtrl})
        .when('/features', {templateUrl: 'partials/features.html', controller: FeaturesCtrl})
        .when('/about', {templateUrl: 'partials/about.html', controller: AboutCtrl})
        .when('/portfolio', {templateUrl: 'partials/portfolio.html', controller: PortfolioCtrl})
        .when('/join', {templateUrl: 'partials/join.html', controller: JoinCtrl})
        .otherwise({redirectTo: '/'});
  }])
  .run(function($rootScope) {
      $rootScope.$on('$viewContentLoaded', function () {
          $(document).foundation();

          if(Modernizr && ('svg' in Modernizr)) {
            if(false === Modernizr.svg) {
              $('.logo,.blazinq').addClass('fallback');
            }
          }
      });
  });

function AppController( $scope, $http ) {
  // Init methods
}

function HomeCtrl($scope, $http, $location) {

}

function FeaturesCtrl($scope, $http, $location) {
  
}

function AboutCtrl($scope, $http, $location) {
  
}

function PortfolioCtrl($scope, $http, $location) {
  
}

function JoinCtrl($scope, $http, $location) {
  
}
