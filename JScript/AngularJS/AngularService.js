App.service('AngularService',function($window) { 
	
	var scope = angular.element($("#body")).scope();
	
	return ({
		SaveSchedule : SaveSchedule,
		getReminders : getReminders
	});
	
		function SaveSchedule(data) {
			$.ajax({
						type : "POST",
						url : "/eReminder/newSchedule.htm",
						data : "data=" + JSON.stringify(data),
						datatype : "json",
						success : function(response) {
							scope.$apply(function() {
										scope.result = response.status
							});
						}
					});
		}
		
		function getReminders() {
			$.ajax({
					type : "POST",
					url : "/eReminder/getSchedules.htm",
					datatype : "json",
					success : function(response) {
						scope.$apply(function() {
							scope.result = response.reminders
						});
					}
			});
		}
});