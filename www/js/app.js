// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
  })

  .state('tabs.home', {
    url: "/home",
    views: {
      'home-tab': {
        templateUrl: "templates/main.html"
      }
    }
  })

  .state('tabs.info', {
      url: "/info",
      views: {
        'info-tab': {
          templateUrl: "templates/info.html"
        }
      }
    })

    .state('tabs.booking', {
      url: "/booking",
      views: {
        'booking-tab': {
          templateUrl: "templates/booking.html",
          controller: "bookingCtrl"
        }
      }
    })

    .state('tabs.contactus', {
      url: "/contactus",
      views: {
        'contactus-tab': {
          templateUrl: "templates/contactus.html",
          controller: 'ContactUsCtrl'
        }
      }
    })

    .state('tabs.gallery', {
      url: "/gallery",
      views: {
          'gallery-tab': {
            templateUrl: "templates/gallery.html",
            controller: 'GalleryCtrl'
          }
        }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');
});

