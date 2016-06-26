// Define a new module for our app
function home(){
	window.location.href ="index.html";
}
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.questions.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}
			if(item.answers.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			url: 'question1.html',
			questions: 'How can I help my foster son with aggression?',
			answers:"He threatened my birth daughter and I...",
			comments:"1 comment",
			image: 'images/169-2.png'
		},
		{
			url: 'http://www.tutorialspoint.com/angularjs/',
			questions: 'Advice on remaining calm in an argument with my foster child?',
			answers:"My child is 13 years old and came to...",
			comments:"8 comments",
			image: 'images/14.png'
		},
		{
			url: 'http://www.tutorialspoint.com/html5/',
			questions: 'I told my foster child that I wished I had never taken her in. What do I do?',
			answers:"We just had this huge argument. She'd been...",
			comments:"2 comments",
			image: 'images/142.png'		},
		{
			url: 'http://www.tutorialspoint.com/css/',
			questions: 'My child has tried to run away three times.',
			answers:"The last time this happened he ended up...",
			comments:"23 comments",
			image: 'images/251.png'
		},
		{
			url: 'http://www.tutorialspoint.com/java/',
			questions: 'How do I talk to my foster child about their birth parents?',
			answers:"They are going to meet him in three weeks and I'd like...",
			comments:"4 comments",
			image: 'images/2k.png'
		},
		{
			url: 'http://www.tutorialspoint.com/joomla/',
			questions: 'How do I talk to my foster child about depression?',
			answers:"He won't let me talk to him about it...",
			comments:"18 comments",
			image: 'images/3.png'
		},
		{
			url: 'http://www.tutorialspoint.com/html/',
			questions: ' How can I talk to my foster daughter about alcohol?',
			answers:"Her mother had a history of alcohol abuse and...",
			comments:"1 comments",
			image: 'images/65.png'
		}
	];

	// $scope.items = [
	// 	{
	// 		url: 'http://www.tutorialspoint.com/android/',
	// 		questions: 'My child is having suicidal tendencies ',
	// 		answers:'We have a similar experience with our with my Foster Child this happens because they feel neglected and unwanted',
	// 		image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
	// 	},
	// 	{
	// 		url: 'http://www.tutorialspoint.com/angularjs/',
	// 		questions: 'My  Foster Son keeps hitting my real Daughter ',
	// 		answers:'I think he needs to have to talk to a councellor ',
	// 		image: 'http://www.tutorialspoint.com/angularjs/images/angularjs-mini-logo.jpg'
	// 	},
	// 	{
	// 		url: 'http://www.tutorialspoint.com/html5/',
	// 		questions: 'My Foster Kid keeps running away from home What do I do?',
	// 		answers:'The kids need real attachment with the foster parents and must feel wanted at home ',
	// 		image: 'http://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg'
	// 	},
	// 	{
	// 		url: 'http://www.tutorialspoint.com/css/',
	// 		questions: 'How can I help my depressed foster child',
	// 		answers:'I think he needs to have to talk to a councellor ',
	// 		image: 'http://www.tutorialspoint.com/css/images/css-mini-logo.jpg'
	// 	},
	// 	{
	// 		url: 'http://www.tutorialspoint.com/java/',
	// 		questions: 'My Foster son is in Internet all Day ',
	// 		answers:'I think he needs to have to talk to a councellor ',
	// 		image: 'http://www.tutorialspoint.com/java/images/java-mini-logo.jpg'
	// 	},
	// 	{
	// 		url: 'http://www.tutorialspoint.com/joomla/',
	// 		questions: 'My Foster child hates us ',
	// 		answers:'I think he needs to have to talk to a councellor ',
	// 		image: 'http://www.tutorialspoint.com/joomla/images/joomla-mini-logo.jpg'
	// 	},
	// 	{
	// 		url: 'http://www.tutorialspoint.com/html/',
	// 		questions: ' How can I fix my Foster Sons Agression',
	// 		answers:'I think he needs to have to talk to a councellor ',
	// 		image: 'http://www.tutorialspoint.com/html/images/html-mini-logo.jpg'
	// 	}
	// ];


}
