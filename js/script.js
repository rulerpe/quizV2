(function(){
	var content = document.getElementById("content");
	var btn = document.getElementsByClassName("button");
	
	for (var i=0, x=btn.length; i<x ; i++){
		btn[i].addEventListener("click", buttonDown,false);
	}
	
	function buttonDown(e){
		var regTag = e.target;
		console.log(typeof regTag);
		if (hasClass(regTag,"reg")){
			reg();
		}else if (hasClass(regTag,"log")){
			log();
		}else if (hasClass(regTag,"formReg")){
			formReg();
		}
	}

	function hasClass(element, cls) {
    	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}


	function reg(){
		content.innerHTML = '<div class="row enter"><form name="reg"><div class="form"><label class="title">User Name: </label><input type="text" name="username" /></div><div class="form"><label class="title">Email: </label><input type="text" name="email" /><div><div class="formReg button">Regerster</div></form></div>';
	}
	function log(){
		content.innerHTML = '<div class="row enter"><form name="log"><div class="form"><label class="title">User Name: </label><input type="text" name="username" /></div><div class="form"><label class="title">Email: </label><input type="text" name="email" /><div><div class="formLog button">Log In</div></form></div>';
	}
	function formReg(){
		var form = getElementsByTagName("form");
		
	}
	
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