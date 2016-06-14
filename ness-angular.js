var counter = angular.module('nessCounter', []);

counter.directive('counter', function(){
  return {
	restrict: 'E',
	scope: false,
	templateUrl: 'counters.html'
  }
});

counter.controller('nessCounter', function($scope, $attrs, $interval) {
	
	$scope.endtime = $attrs.deadline;
	$scope.bg = $attrs.background;
	$scope.cr = $attrs.color;

	count = $interval(function() {
		$scope.t = Date.parse($scope.endtime) - Date.parse(new Date());
		$scope.sc= ('0' + Math.floor( ($scope.t/1000) % 60 )).slice(-2) ;
		$scope.mn= ('0' + Math.floor( ($scope.t/1000/60) % 60 )).slice(-2) ;
		$scope.hr= Math.floor( ($scope.t/(1000*60*60)) % 24 );
		$scope.dy= Math.floor( $scope.t/(1000*60*60*24) );
	}, 1000);

    $scope.seconds = function() {
        return $scope.sc;
    };
    $scope.minutes = function() {
        return $scope.mn;
    };
    $scope.hours = function() {
        return $scope.hr;
    };  
    $scope.days = function() {
        return $scope.dy;
    };
    $scope.deadline = function() {
        return $scope.endtime;
    };    

    $scope.background = function() {
		if($scope.bg == undefined) {
		 $scope.bg = "transparent";
		}
		else { $scope.bg =  $scope.bg.replace("#", "");	
			   $scope.bg = "#" +  $scope.bg;}
        return $scope.bg;
    }; 
    
    $scope.color = function() {
		if($scope.cr == undefined) {
		 $scope.cr = "#000000";
		}
		else { $scope.cr =  $scope.cr.replace("#", "");	
			   $scope.cr = "#" +  $scope.cr;}		
        return $scope.cr;
    };  
    $scope.finished = function() {
		if($scope.t<=0) {
			return " (Finished!)";
		}
    };   
    
});
