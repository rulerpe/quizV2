(function(){
	var content = document.getElementById("content");

	addBtnListiener();
	
	var allQuestions =  [ 	
	new Question("When is new year",["March 1st","January 1st","Octorber 5th","June 30th"],1),
	new Question("Where is China",["Asia","North America","Africa","Eurpe"],0),
	new Question("Color of sky",["Red","Yellow","Pink","Blue"],3),
	];


	function buttonDown(e){
		var regTag = e.target;
		console.log(typeof regTag);
		if (hasClass(regTag,"reg")){
			reg();
		}else if (hasClass(regTag,"log")){
			log();
		}else if (hasClass(regTag,"formReg")){
			formReg();
		}else if (hasClass(regTag,"formLog")){
			formLog();
		}else if (hasClass(regTag,"next")){
			next();
		}else if (hasClass(regTag,"back")){
			back();
		}
	}

	function hasClass(element, cls) {
    	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}

	function addBtnListiener(){
		var btn = document.getElementsByClassName("button");
		for (var i=0, x=btn.length; i<x ; i++){
			btn[i].addEventListener("click", buttonDown,false);
		}
	}
	



//////////////////////////////////////////////functions for log in and reg ////////////////////////////////////////////////////

	function reg(){
		content.innerHTML = '<div class="row enter"><form name="reg" id="forms"><div class="form"><label class="title">User Name: </label><input type="text" name="username" /></div><div class="form"><label class="title">Email: </label><input type="text" name="email" /><div><div class="formReg button">Regerster</div></form></div>';
		addBtnListiener();
	}
	function log(){
		content.innerHTML = '<div class="row enter"><form name="log" id="forms"><div class="form"><label class="title">User Name: </label><input type="text" name="username" /></div><div class="form"><label class="title">Email: </label><input type="text" name="email" /><div><div class="formLog button">Log In</div></form></div>';
		addBtnListiener();
	}
	function formReg(){
		var form = document.getElementById("forms");
		var user = new User(form.elements[0].value,form.elements[1].value)
		save(user.name, user.email, user.quizScores);
		content.innerHTML = allQuestions[0].displayQuestion();
		addBtnListiener();	
	}
	function formLog(){
		var form = document.getElementById("forms");
		var name = form.elements[0].value;
		
		console.log(load(name));

		content.innerHTML = allQuestions[0].displayQuestion();
		addBtnListiener();
		option();
		
	}

	function save(saveName,saveEmail,saveScores){
		var saveUser = {	name: saveName,
							email: saveEmail,
							scores: saveScores};
		var save = JSON.stringify(saveUser);
		localStorage.setItem(saveName,save);
	}

	function load(loadName){
		if(localStorage.getItem(loadName)){
			var loadUser = JSON.parse(localStorage.getItem(loadName));
			var user = new User(loadUser.name, loadUser.email);
			user.quizScores = loadUser.scores;
			return("Welcome back "+ user.name);
		}else{
			return("No username found");
		}
	}


//////////////////////////////////////////////functions for log in and reg end////////////////////////////////////////////////////

//////////////////////////////////////////////functions for qustion and answer ////////////////////////////////////////////////////
	function optionDown(y){
		User.currentPick = y;
		var options = document.getElementsByClassName("choice");
		for(var i =0, x=options.length; i<x;i++){
			if (i==y){
				options[i].className = "down choice";
			}else{
				options[i].className = "choice";
			}
			
		}
	}

	function option(){
		var options = document.getElementsByClassName("choice");
		options[0].addEventListener("click", function(){optionDown(0)},false);
		options[1].addEventListener("click", function(){optionDown(1)},false);
		options[2].addEventListener("click", function(){optionDown(2)},false);
		options[3].addEventListener("click", function(){optionDown(3)},false);
	}

	function next(){
		
	}

	function back(){
		
	}

//////////////////////////////////////////////functions for qustion and answer end////////////////////////////////////////////////////
	
	function User(theName, theEmail){
		this.name = theName;
		this.email = theEmail;
		this.quizScores = [];
		this.currentScore = 0;
		this.currentPick = "";
	}

	User.prototype.constructor = User;
	
	User.prototype.saveScore = function(theScoreToAdd) {
		this.quizScores.push(theScoreToAdd)
	};
	User.prototype.showNameAndScores = function(){
		var scores = this.quizScores.length > 0 ? this.quizScores.join(","):"No Scores Yet";
		return this.name + " scores: " + scores;
	};
	User.prototype.changeEmail = function(newEmail){
		this.email = newEmail;
		return "New Email Saved: " + this.email;
	};


	function Question(theQuestion, theChoice, theAnswer){
		this.question = theQuestion;
		this.choice = theChoice;
		this.answer = theAnswer;
		this.userAnswer = "";
	}


	Question.prototype.displayQuestion = function(){
		var questionToDisplay = '<div class ="game"><div class="question">'+this.question +'</div><ul>';
		this.choice.forEach(function(value,key,array){
			questionToDisplay += "<li class='choice'>"+value+"</li>";
		});
		questionToDisplay += '</ul><div class="button back">Back</div><div class="button next">next</div></div>';
		return questionToDisplay;
	}
	Question.prototype.getCorrectAnswer = function(){
		return this.answer;
	};
	Question.prototype.getUserAnswer = function(){
		return this.userAnswer;
	};

}());