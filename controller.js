bgiApp.service('dataService', function () {
	var studentdata = function (param1, param2) {
		return  [{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"}];
		}
    var employeData = function(){
		return "santhosh";
	}
	return {
		studentServiceData:studentdata,
		employeeServiceData: employeData
	};
});

bgiApp.controller('elementController', function($scope) {
    $scope.HEADER_TEXT = "Student List";
});

bgiApp.controller('tableController', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.tableHeader = ['First Name','Last Name','Email Id','Mobile'];
    $scope.tableData   = dataService.studentServiceData('1','2');
}]);

bgiApp.controller('sample', ['$scope', 'dataService', function ($scope, dataService) {
	$scope.employee = dataService.employeeServiceData();
}]);
