angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  console.log("In App ctrl");
})

.controller('ContactUsCtrl', function($scope){

console.log("In contact us");

	Parse.initialize("xTg09VZUZbljJQOcRTlbYeWlkNjpKd1ujT5uULpU", "OhJnlZEMHQZYLCvrV2taKqrwKFVgGpMcamaNwaaJ");
	$scope.user = {};
	$scope.contactus = function(frm){

    if (!frm.$valid) {
         alert("Please Fill All Information!");
         return false;
     }

    var networkState = navigator.connection.type;

    if(networkState == "none"){
      alert("No Internet connection...");
      return;
    }
    

		console.log($scope.user.name);
		console.log($scope.user.mobileno);
		console.log($scope.user.address);
		console.log($scope.user.message);
		console.log($scope.user.email);
		
		var name = $scope.user.name;
		var mobileno = $scope.user.mobileno;
		var address = $scope.user.address;
		var message = $scope.user.message;
		var email = $scope.user.email;
		Parse.Cloud.run('sendmail', {
			name: name, 
			mobileno: mobileno,
			address: address,
			message: message,
			email: email
		}, {
			 success: function(result) {
			   // result is 'Hello world!'
			   console.log("success");
			 },
			 error: function(error) {
        alert("Your Email is not sent to us.. Please try again...!!");
			 	console.log("Error");
			 }
		});
		$scope.user = {};
    frm.$submitted = false;
		alert("Inquiery email is sent, we will contact you soon.");
	}
})

.controller('bookingCtrl', function($scope, $ionicModal, $timeout) {
  $("#myCalendar-1").ionCalendar({
      lang: "en",
      years: "2014-2020",
      onClick: function(date){
        var today = new Date(date);
        var dd = today.getDate();
        var mm = today.getMonth()+1; 

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
        var today = dd+'/'+mm+'/'+yyyy;
        //alert(date);
        alert("You select  " + today);
      }
  });
})


.controller('GalleryCtrl', function($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {

  $scope.allImages = [{
    src: 'img/baggi/baggi1.JPG'
  }, {
    src: 'img/baggi/baggi2.JPG'
  }, {
    src: 'img/baggi/baggi3.JPG'
  }, {
    src: 'img/baggi/baggi4.JPG'
  }, {
    src: 'img/baggi/baggi5.JPG'
  }, {
    src: 'img/baggi/baggi6.JPG'
  }];

  $scope.zoomMin = 1;

  $scope.showImages = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/gallery-zoomview.html');
  };

  $scope.showModal = function(templateUrl) {
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
    });
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };

  $scope.updateSlideStatus = function(slide) {
    var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    if (zoomFactor == $scope.zoomMin) {
      $ionicSlideBoxDelegate.enableSlide(true);
    } else {
      $ionicSlideBoxDelegate.enableSlide(false);
    }
  };

//Video Player
  //$scope.clipSrc = 'https://www.dropbox.com/s/qdtywhxdkkb76xq/test.mp4?dl=0';
 
  $scope.playVideo = function() {
   $scope.showModal('templates/video-popover.html');
  }
})

.controller('FooterCtrl', function($scope, $stateParams) {
	$scope.doSomething = function() {
	    console.log("Button Clicked");
	};
});
