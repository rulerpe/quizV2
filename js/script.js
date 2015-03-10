(function(){
	
	var btn = document.getElementsByClassName("button");
	btn[0].addEventListener("click", function(){alert("hello");},false);
	
	function User(theName, theEmail){
		this.name = theName;
		this.email = theEmail;
		this.quizScores = [];
		this.currentScore = 0;
	}

	User.prototype = {
		constructor: User,
		saveScore: function(theScoreToAdd) {
			this.quizScores.push(theScoreToAdd)
		},
		showNameAndScores: function(){
			var scores = this.quizeScores.length > 0 ? this.quizScores.join(","):"No Scores Yet";
			return this.name + "Scores: " + scores;
		},
		changeEmail: function(newEmail){
			this.email = newEmail;
			return "New Email Saved: " + this.email;
		}
	}

}());