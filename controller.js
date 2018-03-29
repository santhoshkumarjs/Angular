bgiApp.controller('elementController', function($scope) {
    $scope.HEADER_TEXT = "Student List";
});

bgiApp.controller('tableController', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.tableHeader = ['First Name','Last Name','Email Id','Mobile'];
    $scope.tableData   = dataService.studentdata('1','2');
}]);

bgiApp.controller('sample', ['$scope', 'dataService', function ($scope, dataService) {
	$scope.employee = dataService.employeeServiceData();
}]);

bgiApp.controller('example', ['$scope', 'Inboxservices', function($scope, Inboxservices){
	$scope.examples = Inboxservices.getData();
}]);
