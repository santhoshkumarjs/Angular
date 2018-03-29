/*
bgiApp.service('dataService', ['$http', function ($http) {
	var studentdata = function (param1, param2) {
		return  [{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"}];
		}
    var employeData = function(){
		return "sample data";
	}
	return {
		studentServiceData : studentdata,
		employeeServiceData: employeData
	};
}]);
*/

bgiApp.service('dataService', ['$http', function ($http) {
	this.studentdata = function (param1, param2) {
		return  [{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"},{"firstname":"santhosh","lastname":"kumar","emailid":"san@gmail.com","mobile":"9994537084"}];
		},
	 this.employeeServiceData = function(){
		 return "sample";
	 }
}]);

bgiApp.service('Inboxservices',function(){
	this.getData = function(){
		return "my data testdding";
	}
});
