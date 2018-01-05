App.controller('Controller', function($scope, AngularService) {

	$scope.map = {};
	$scope.tempMap = {};
	$scope.map.source = "FROM";
	$scope.map.destination = "TO";

	$scope.swapLocation = function(map) {
		$scope.tempMap = angular.copy(map)
		$scope.map.destination = $scope.tempMap.source;
		$scope.map.source = $scope.tempMap.destination;
		AngularService.getReminders();
	}
});