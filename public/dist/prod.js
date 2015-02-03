(function(w,d,ns) {

    var colorWord = {},
    	$colorText = d.querySelector('.color-wrap h2'),
    	$colorChoices = d.querySelector('.color-choice ul'),
    	correctColor,
        progressBarWidth = 0;


    var colors = ['blue', 'red', 'green', 'orange'];

   	colorWord.init = function() {
   		// colorWord.speechSetup();
   		colorWord.setup();
        colorWord.timer();
   	};


   	colorWord.setup = function() {
   		$colorChoices.innerHTML = '';
   		var rand1 = colors[Math.floor(Math.random() * colors.length)];
   		var rand2 = colors[Math.floor(Math.random() * colors.length)];
   		// console.log($colorText, rand1)
   		$colorText.innerHTML = rand1;
   		$colorText.style.color = rand2;

   		//Make the global correctColor variable rand2
   		correctColor = rand2;
   		console.log('correctColor: ' + correctColor);
   		colorWord.choices(rand2);
   	};

   	colorWord.events = function() {
   		$colorChoicesTags = d.querySelectorAll('li');   		
   		for (var i = $colorChoicesTags.length - 1; i >= 0; i--) {
   			$colorChoicesTags[i].addEventListener('click', function(){
   				var className = this.className;
   				if ( colorWord.hasClass(this, 'correct' )) {
   					colorWord.correctAnswer();
   				} else {
   					colorWord.incorrectAnswer();
   				}	   				
   			});
   		};
   	};

    colorWord.timer = function() {
        var  $progressBar = d.querySelector('.timer-wrap .over');
        $progressBar.style.width = progressBarWidth + '%';
        progressBarWidth += 1;

        if ($progressBar.style.width != "100%"){
            requestAnimationFrame(colorWord.timer, 99999);
        }
    };


   	colorWord.correctAnswer = function() {
   		var score = d.querySelector('span.score').innerHTML,
   			highScore = d.querySelector('span.high-score').innerHTML;
   		score = parseInt(score);
   		highScore = parseInt(highScore);
   		score ++ ;
   		d.querySelector('span.score').innerHTML = score;

   		if (score > highScore) {
   			d.querySelector('span.high-score').innerHTML = score;
   		}
   		colorWord.setup();
   	};

   	colorWord.incorrectAnswer = function() {
   		d.querySelector('.score-wrap .score').innerHTML = 0;
   		colorWord.setup();
   	};

   	colorWord.hasClass = function(el, className) {
    	return new RegExp(' ' + className + ' ').test(' ' + el.className + ' ');
   	};

   	colorWord.choices = function(correctColor) {
   		var c = correctColor;
   		function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex ;
		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {
		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }
		  return array;
		}

		var shuffleColors = shuffle(colors);
		var choiceEls = [];
   		for (var i = shuffleColors.length - 1; i >= 0; i--) {
   			var el = d.createElement('li');
   			el.className = shuffleColors[i];
   			el.innerHTML = '<a><span>' + shuffleColors[i] + '</span></a>';

   			if (shuffleColors[i] == c) {
   				el.className = el.className + ' correct';
   			}
   			choiceEls.push(el);
   			// console.log(el)
   		};

   		var ul = d.getElementsByClassName('color-choice-ul');
 		var fragment = d.createDocumentFragment();
		for ( var e = 0; e < choiceEls.length; e++ ) {
		    fragment.appendChild( choiceEls[e] );
		}
		for ( var i = 0; i < ul.length; i++ ) {
		    ul[i].appendChild( fragment.cloneNode(true) );
		}

		colorWord.events();
   	};

   	colorWord.speechSetup = function() {
   		var recognition = new webkitSpeechRecognition();
	  	recognition.continuous = true;
	  	recognition.interimResults = true;
	  	final_transcript = '';
	  	recognition.lang = 'en-GB';
	  	recognition.start();

	  	recognition.onstart = function() {
	  		console.log("Recogniztion API started");
	  	};

	  	recognition.onresult = function(event) {
            for (var i = event.resultIndex; i < event.results.length; ++i) {
		        if (event.results[i].isFinal) {
		        	//Need to trim the whitespace from the word before sending it to sayColor()	;
		        	var word = event.results[i][0].transcript.replace(/(^\s+|\s+$)/g,'');
		            colorWord.sayColor(word, correctColor)
		        }
		    }
  	  	};

	  	recognition.onerror = function(event) {

	  	};

	  	recognition.onend = function() {

	  	};

   	};

   	colorWord.sayColor = function(word, correctColor) {
   		console.log('word spoken: ' + word);
   		console.log('correct color: ' + correctColor);
		// assert(word.localeCompare(correctColor) == 0, 'word is not equal to correct color');

   		if (word.localeCompare(correctColor) == 0) {
   			console.log('right')
  			colorWord.correctAnswer();
  		} else {
  			console.log('wrong')
  			colorWord.incorrectAnswer();
  		}
   	};


   	//Test function
	function assert(condition, message) {
	    if (!condition) {
	        message = message || "Assertion failed";
	        if (typeof Error !== "undefined") {
	            throw new Error(message);
	        }
	        throw message; // Fallback
	    } else {
	    	console.log('Test passed');
	    }
	}


    // requestAnimationFrame polyfill by Erik Möller
    // fixes from Paul Irish and Tino Zijdel

    (function() {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame =
              window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();



    colorWord.init();

    w[ns] = w[ns] || {};
    w[ns].colorWord = colorWord;
	
})(window,document, 'COLORWORD');
