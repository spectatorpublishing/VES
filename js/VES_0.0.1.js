var sliderCreditsStart = [0, 9];
var sliderTimesStart = [7, 22];
var sliderLevelsStart = [1000, 9000];
var fv;
var gmapLookupCache = {};
var sidebarFxn;
var program_courses;
//Only download nicknames once and store it globally
var nicknames;
var prof_rate=["Harsh","Somewhat Harsh","Fair","Somewhat Lenient", "Lenient"];
var disToAgree = ["Strongly Disagree", "Somewhat Disagree", "Neutral", "Somewhat Agree", "Strongly Agree"]
var changeSidebarFxn = function() {
	var selected_fxn = $('#sidebar_select').val();
	if (selected_fxn === 'Requirements') {
		sidebarFxn = 'Major Requirements Checklists';
		$('#school_select').show();
		$('#program_chosen').show();
		$('#program-information').show();
		$('#coreswap').hide();
		$('#loginprompt').hide();
		showProgBar();
	} else if (selected_fxn === 'Swap') {
		sidebarFxn = 'Swap';
		$('#program_chosen').hide();
		$('#school_select').hide();
		$('#program-information').hide();
		$('#coreswap').show();
		$('#loginprompt').show();
	}
}

var showProgBar = function() {
	$('#program_chosen').show(); // show prog bar
}

getSemesterFromIndex = function(index) {
	switch (index) {
		case "1":
		semester = "Spring";
		break;
		case "2":
		semester = "Summer";
		break;
		case "3":
		semester = "Fall";
		break;
		case "4":
		semester = "Winter";
		break;
		default:
	}
	return semester;
}

getSemesterFromTermYear = function(termyear) {
	return getSemesterFromIndex(termyear.substring(4, 5));
}

/* http://stackoverflow.com/questions/8348139/detect-ios-version-less-than-5-with-javascript */
function iOSversion() {
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
}
}

/* slightly modified version, original by http://stackoverflow.com/users/80860/kennebec */
function deeptest(target, s){
	s= s.split('.')
	var obj= target[s.shift()];
	while(obj && s.length) obj= obj[s.shift()];
	return obj;
}

/* http://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript */
function pad(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

/* http://www.w3schools.com/js/js_cookies.asp */
function setCookie(name, value, days) {
	var date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	document.cookie = name + "=" + value + "; " + "expires=" + date.toUTCString();
}
function getCookie(name) {
	var name = name + "=";
	var array = document.cookie.split(';');
	for (var i = 0; i < array.length; i++) {
		var cookie = array[i];
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) != -1) {
			return cookie = cookie.substring(name.length, cookie = cookie.length);
		}
	}
	return false;
}

/* http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript?page=1&tab=votes */
function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/* http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key */
Object.byString = function(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  var a = s.split('.');
  while (a.length) {
  	var n = a.shift();
  	if (n in o) {
  		o = o[n];
  	}
  	else {
  		return;
  	}
  }
  return o;
}

/* https://medium.com/@kentcdodds/counting-angularjs-watchers-11c5134dc2ef */
function getWatchers(root) {
	root = angular.element(root || document.documentElement);
	var watcherCount = 0;
	function getElemWatchers(element) {
		var isolateWatchers = getWatchersFromScope(element.data().$isolateScope);
		var scopeWatchers = getWatchersFromScope(element.data());
		var watchers = scopeWatchers.concat(isolateWatchers);
		angular.forEach(element.children(), function (childElement) {
			watchers = watchers.concat(getElemWatchers(angular.element(childElement)));
		});
		return watchers;
	}
	function getWatchersFromScope(scope) {
		if (scope) {
			return scope.$$watchers || [];
		}
		else {
			return [];
		}
	}
	return getElemWatchers(root);
}

/* range slider tooltips */
var toolTip = $.Link({
	target: '-tooltip-',
	method: function(value) {
		$(this).html(value).attr("data-value", value);
	},
	format: {
		decimals: 0
	}
});

var toolTipTime = $.Link({
	target: '-tooltip-',
	method: function(value) {
		if (value < 12) {
			value = value + "am";
		}
		else {
			if (value > 12) {
				value -= 12;
			}
			value = value + "pm";
		}
		$(this).html(value).attr("data-value", value);
	},
	format: {
		decimals: 0
	}
});

var toolTipTime30 = $.Link({
	target: '-tooltip-',
	method: function(value) {
		if (value < 12) {
			value = value + "am";
		}
		else {
			if (value > 12.5) {
				value -= 12.0;
			}
			value = parseFloat(value).toFixed(1) + "pm";
		}
		value = value.replace(".5", ":30").replace(".0", ":00");

		$(this).html(value).attr("data-value", value);
	},
	format: {
		decimals: 1
	}
});

/* http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/ */
(function($,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
  	var timeout;

  	return function debounced () {
  		var obj = this, args = arguments;
  		function delayed () {
  			if (!execAsap) {
  				func.apply(obj, args);
  			}
  			timeout = null;
  		};

  		if (timeout) {
  			clearTimeout(timeout);
  		}
  		else if (execAsap) {
  			func.apply(obj, args);
  		}

  		timeout = setTimeout(delayed, threshold || 200);
  	};
  }

  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize.sr', debounce(fn)) : this.trigger(sr); };
})(jQuery,'smartresize');

(function($,ss){
	var debounce = function (func, threshold, execAsap) {
		var timeout;

		return function debounced () {
			var obj = this, args = arguments;
			function delayed () {
				if (!execAsap) {
					func.apply(obj, args);
				}
				timeout = null;
			};

			if (timeout) {
				clearTimeout(timeout);
			}
			else if (execAsap) {
				func.apply(obj, args);
			}

			timeout = setTimeout(delayed, threshold || 10);
		};
	}

	jQuery.fn[ss] = function(fn){  return fn ? this.bind('scroll.ss', debounce(fn)) : this.trigger(ss); };
})(jQuery,'smartscroll');

function gmap() {
	function gmapRender(element, location) {
		geomatch = gmapLookupCache[location];

		if (Modernizr.touch) {
			var gmapContent = '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7C'+ location +'&scale=2&size=178x178&maptype=roadmap&visible=40.808191, -73.961847" width="178" height="178" />';
		}
		else {
			var gmapContent = '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7C'+ location +'&scale=1&size=243x243&maptype=roadmap&visible=40.808191, -73.961847" width="243" height="243" />';
		}

		if (geomatch == "found") {
			var options = {
				content: gmapContent,
				html: true,
				placement: 'top',
				trigger: 'hover focus',
				animation: true,
				title: location.replace(', New York, NY 10027', '')
			};

			$(element).addClass('gmap-processed gmap-available').popover(options).append('<span class="glyphicon glyphicon-map-marker"></span>').wrapInner('<a href="https://www.google.com/maps/place/'+ location +'" target="_blank"></a>');
		}
		else {
			$(element).addClass('gmap-processed');
		}
	}

	$("span.gmap-trigger:not(.gmap-processed)").each(function() {
		var element = $(this);

		/* Remove anything within parenthesis or brackets */
		/* Remove ampersand and anything before it */
		/* Remove numbers from addresses */
		/* Remove single characters (usually residuals from removing address numbers) */
		/* Remove names Google does not register */
		var location = $(this).text();
		location = location.replace(/ *\([^)]*\) */g, "").replace(/ *\[[^\]]*\] */g, "").replace(/ *.[^&]*\& */g, "").replace(/(^| ).( |$)/, '');
		/* For non-street address, strip room numbers */
		if (!location.match(' Ave')) {
			location = location.replace(/LL[0-9]/g, '').replace(/[0-9]/g, '');
		}
		/* Some text substitutions */
		location = location.replace('Seeley W.', '').replace('International Affairs Building', '420 W 118th St').replace('Broadway Residence Hall', '2900 Broadway');

		location = location.trim() + ', New York, NY 10027';

		if (!gmapLookupCache[location]) {
			gmapLookupCache[location] = "pending";

			$.ajax({
				dataType: "json",
				url: 'https://maps.googleapis.com/maps/api/geocode/json',
				data: 'address=' + location + '&components=postal_code:10027',
				success: function(data) {
					/* ensure result is not "Columbia University, 116th St, New York, NY 10027, USA" */
					if (data.results[0]) {
						gmapLookupCache[location] = (data.results[0].geometry.location_type == "ROOFTOP" || data.results[0].geometry.location_type == "RANGE_INTERPOLATED") ? "found" : "not found";
						gmapRender(element, location);
					}
				}
			});
		}
		else {
			if (gmapLookupCache[location] != "pending") {
				gmapRender(element, location);
			}
			else {
				setTimeout(function() {
					gmapRender(element, location);
				}, 500);
			}
		}
	});
}

var app = angular.module("app", ['ngAnimate', 'ngTouch', 'ngAria', 'angular-loading-bar', 'breakpointApp']);

app.filter('to_trusted', ['$sce', function($sce){
	return function(text) {
		return $sce.trustAsHtml(text);
	};
}]);

app.directive('chosen', ['$timeout', function($timeout) {
	var linker = function(scope, element, attr) {
    // update the select when data is loaded
    scope.$watch(attr.chosen, function(oldVal, newVal) {
    	if (oldVal !== undefined) {
    		$timeout(function() {
    			element.trigger('chosen:updated');
    		}, 0);
    	}
    });

    var options = {};
    if (val = attr.noResultsText) {
    	options.no_results_text = val;
    	options.search_contains = true;
    }

  /*
    // update the select when the model changes
    scope.$watch(attr.ngModel, function() {
      element.trigger('chosen:updated');
    });
    */

    element.chosen(options);
};

return {
	restrict: 'A',
	link: linker
};
}]);

/* http://stackoverflow.com/questions/14796087/filter-results-6-through-10-of-100-with-ng-repeat-in-angularjs */
app.filter('slice', function() {
	return function(arr, start, end) {
		return (arr || []).slice(start, end);
	};
});

app.filter('offset', function() {
	return function(arr, start) {
		return (arr || []).slice(start);
	};
});

app.filter('unique', function() {
	return function(collection, keyname) {
		var output = [],
		keys = [];

		angular.forEach(collection, function(item) {
			var key = item[keyname];
			if(keys.indexOf(key) === -1) {
				keys.push(key);
				output.push(item);
			}
		});

		return output;
	};
});

app.filter('hasSchedule', function() {
	return function(collection) {
		var output = [];

		angular.forEach(collection, function(item) {
			if (item.added_to_schedule == 1) {
				output.push(item);
			}
		});

		return output;
	};
});

app.filter('termIsCurrent', function() {
	return function(collection) {
		var output = [];

		angular.forEach(collection, function(item) {
			if (item.current == true) {
				output.push(item);
			}
		});

		return output;
	};
});

app.filter('groupCourseByWeekday', function() {
	return function(collection, weekday) {
		var output = [];

		angular.forEach(collection, function(item) {
			if (item.Favorite == true) {
				for (time in item.times) {
					if (item.times[time].weekdays[weekday] == true) {
						if ($.inArray(item, output) == -1) {
							output.push(item);
						}
					}
				}
			}
		});

		return output;
	};
});

app.filter('groupCourseUncat', function() {
	return function(collection) {
		var output = [];

		angular.forEach(collection, function(item) {
			if (item.Favorite == true) {
				if (!item.times.length) {
					output.push(item);
				}
			}
		});

		return output;
	};
});

app.filter('groupTimesByWeekday', function() {
	return function(collection, weekday) {
		var output = [];

		angular.forEach(collection, function(item) {
			if (item.weekdays[weekday] == true) {
				output.push(item);
			}
		});

		return output;
	};
});

/* http://justinklemm.com/angularjs-filter-ordering-objects-ngrepeat/ */
app.filter('orderObjectBy', function() {
	return function(items, field, reverse) {
		var filtered = [];
		angular.forEach(items, function(item) {
			filtered.push(item);
		});
		filtered.sort(function (a, b) {
			return (a[field] > b[field]) ? 1 : ((a[field] < b[field]) ? -1 : 0);
		});
		if (reverse) {
			filtered.reverse();
		}
		return filtered;
	};
});

app.filter('courseNotExcluded', function() {
	return function(collection) {
		var output = [];

		angular.forEach(collection, function(item) {
			if (item.courseExcluded == false) {
				output.push(item);
			}
		});

		return output;
	};
});

app.filter('contextualCourses', ['$timeout', function($timeout) {
	return function(data, form, formCheckboxes, coursesWithEval) {
		var result = {};

		var timeFrom = parseInt(form.times[0]);
		var timeTo = parseInt(form.times[1]);
		var timeFromMil = parseInt(form.times[0] + "00");
		var timeToMil = parseInt(form.times[1] + "00");

		var creditsFrom = parseInt(form.credits[0]);
		var creditsTo = parseInt(form.credits[1]);

		var levelsFrom = parseInt(form.levels[0]);
		var levelsTo = parseInt(form.levels[1]);

		/* http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string */
		function occurrences(string, subString, allowOverlapping){
			string+=""; subString+="";
			if(subString.length<=0) return string.length+1;

			var n=0, pos=0;
			var step=(allowOverlapping)?(1):(subString.length);

			while(true) {
				pos=string.indexOf(subString,pos);
				if(pos>=0){ n++; pos+=step; } else break;
			}
			return(n);
		}

		function occurrencesRegex(string, pattern) {
			var re = new RegExp(pattern,"g");
			return (string.match(re) || []).length;
		}

		if (form.search) {
			var keywordPlain = form.search.toLowerCase();
			var keywordPattern = keywordPlain.replace(/\W+/g, '(.[^"]*?)');
			var keywordPatternRegex = new RegExp(keywordPattern);
		}

		/* Days */
		var days = [];
		if ($('input[name="days[]"]:not(:checked)').length) {
			$('input[name="days[]"]:checked').each(function() {
				days.push($(this).val());
			});
		}

		angular.forEach(data, function(termData, term) {
			result[term] = termData;
			result[term].filteredCourses = result[term].courses;

			for (course in result[term].filteredCourses) {
				result[term].filteredCourses[course].courseExcluded = false;
				result[term].filteredCourses[course].filteredSections = result[term].filteredCourses[course].sections;
				result[term].filteredCourses[course].sectionsFiltered = false;
				result[term].filteredCourses[course].filteredSectionsCount = result[term].filteredCourses[course].sectionsCount;
				result[term].filteredCourses[course].sectionsHiddenCount = 0;
			}

			if (form.relevantSections || !formCheckboxes.withoutevals) {
				var filteredCourses = {};

				if (form.relevantSections) {
					for (course in termData.courses) {
						var thisCourse = termData.courses[course];

						if (thisCourse.sectionsFilteredOverride) {
							thisCourse.filteredSections = thisCourse.sections;

							thisCourse.filteredSectionsCount = Object.keys(thisCourse.sections).length;

							thisCourse.sectionsFiltered = false;

							filteredCourses[thisCourse.course] = thisCourse;
						}
						else {
							var filteredSections = {};

							if (form.search) { /* Keywords relevance scoring */
								var title = (thisCourse.title) ? thisCourse.title : '';
								var priorityKeywords = (title + " " + thisCourse.subject + " "+ thisCourse.department + " " + thisCourse.course).toLowerCase();
								var secondaryKeywords = "";

								var courseSearchString = thisCourse;

								courseSearchString.filteredSections = {};

								var courseSearch = JSON.stringify(courseSearchString).toLowerCase();
								var matches = occurrencesRegex(courseSearch, keywordPattern);
								thisCourse.score = matches;


								for (section in thisCourse.sections) {
									var subtitle = thisCourse.sections[section].subtitle.toLowerCase();
									secondaryKeywords += subtitle + " ";
									if (keywordPlain == subtitle) {
										thisCourse.score += 5;
									}
								}


								if (priorityMatches = occurrencesRegex(priorityKeywords, keywordPattern)) {
									thisCourse.score += priorityMatches * 4;
								}
								if (secondaryMatches = occurrencesRegex(secondaryKeywords, keywordPattern)) {
									thisCourse.score += secondaryMatches;
								}

								if (keywordPlain == title.toLowerCase()) {
									thisCourse.score += 20;
								}

								thisCourse.score = thisCourse.score + 1 - thisCourse.sectionsCount;
							}

							for (section in thisCourse.sections) {
								var thisSection = thisCourse.sections[section];

								/* Begin filtering.. */

								/* Keyword filter */
								if (form.search) {
									sectionSearch = JSON.stringify(thisSection).toLowerCase() + " " + title;
									if (keywordPatternRegex.test(sectionSearch) == false) { /* not found */
										if (thisCourse.sectionsCount != 1 || thisCourse.score == 0) { /* show if only one section and has score */
											continue;
										}
									}
								}

								/* Times filter */
								if (timeFrom != sliderTimesStart[0] || timeTo != sliderTimesStart[1]) {
									if (thisSection.times[0]) {
										if (thisSection.times[0].mTimeFrom < timeFromMil || thisSection.times[0].mTimeTo > timeToMil) {
											continue;
										}
									}
									else {
										continue;
									}
								}

								/* Days filter */
								var found = 0;
								if (days.length) {
									if (thisSection.times[0]) {
										for (weekday in thisSection.times[0].weekdays) {
											if ($.inArray(weekday.toLowerCase(), days) != -1) {
												found = 1;
												break;
											}
										}
										if (!found) {
											continue;
										}
									}
									else {
										continue;
									}
								}

								/* Credits filter */
								if (creditsFrom != sliderCreditsStart[0] || creditsTo != sliderCreditsStart[1]) {
									if (thisSection.unit) {
										if (creditsFrom > thisSection.unit.default || creditsTo < thisSection.unit.default) {
											continue;
										}
									}
									else {
										continue;
									}
								}


								/* Passed all filters */
								filteredSections[section] = thisSection;
							}
							thisCourse.sectionsFilteredOverride = false;
							thisCourse.filteredSections = filteredSections;

							filteredCourses[thisCourse.course] = thisCourse;

							thisCourse.filteredSectionsCount = Object.keys(filteredSections).length;
							thisCourse.filteredSectionsCountStatic = thisCourse.filteredSectionsCount;

							thisCourse.sectionsHiddenCount = thisCourse.sectionsCount - thisCourse.filteredSectionsCount;

							thisCourse.sectionsFiltered = (thisCourse.filteredSectionsCount != thisCourse.sectionsCount) ? true : false;
							thisCourse.sectionsFilteredStatic = thisCourse.sectionsFiltered;

							/* Levels filter */
							if (levelsFrom != sliderLevelsStart[0] || levelsTo != sliderLevelsStart[1]) {
								var courseLevel = parseInt(thisCourse.number.substring(1));
								if (courseLevel < levelsFrom || courseLevel > levelsTo) {
									filteredCourses[thisCourse.course].courseExcluded = true;
								}
							}


						}
					}
				}

				/* If limiting to only courses with evaluations */
				if (!formCheckboxes.withoutevals) {
					if (!form.relevantSections) {
						filteredCourses = result[term].courses;
					}

					for (course in filteredCourses) {
						var thisCourse = filteredCourses[course];

						if (!coursesWithEval[thisCourse.course]) {
							filteredCourses[thisCourse.course].courseExcluded = true;
						}
					}
				}

				result[term].filteredCourses = filteredCourses;
			}

			var i = 0;
			var filteredSectionsCountTotal = 0;

			for (course in result[term].filteredCourses) {
				var thisCourse = result[term].filteredCourses[course];

				if (thisCourse.courseExcluded == false) {
					filteredSectionsCountTotal += thisCourse.sectionsCount - thisCourse.filteredSectionsCount;
					i++;
				}
			}

			result[term].coursesCount = i;

			if (filteredSectionsCountTotal != result[term].filteredSectionsCountTotal) {
				result[term].filteredSectionsCountTotal = filteredSectionsCountTotal;

				/* CSS Animation */
				$("body").addClass("modified-filters");
				$timeout(function() { $("body").removeClass("modified-filters") }, 300);
			}

		});

return result;
};
}]);


/* http://stackoverflow.com/questions/19992090/angularjs-group-by-directive */
app.filter('groupBy', ['$parse', function ($parse) {
	return function (list, group_by) {

		var filtered = [];
		var prev_item = null;
		var group_changed = false;
    // this is a new field which is added to each item where we append "_CHANGED"
    // to indicate a field change in the list
    //was var new_field = group_by + '_CHANGED'; - JB 12/17/2013
    var new_field = 'group_by_CHANGED';

    // loop through each item in the list
    angular.forEach(list, function (item) {

    	group_changed = false;

      // if not the first item
      if (prev_item !== null) {

        // check if any of the group by field changed

        //force group_by into Array
        group_by = angular.isArray(group_by) ? group_by : [group_by];

        //check each group by parameter
        for (var i = 0, len = group_by.length; i < len; i++) {
        	if ($parse(group_by[i])(prev_item) !== $parse(group_by[i])(item)) {
        		group_changed = true;
        	}
        }


      }// otherwise we have the first item in the list which is new
      else {
      	group_changed = true;
      }

      // if the group changed, then add a new field to the item
      // to indicate this
      if (group_changed) {
      	item[new_field] = true;
      } else {
      	item[new_field] = false;
      }

      filtered.push(item);
      prev_item = item;

  });

    return filtered;
};
}]);

app.directive('objCount', function() {
	link = function(scope, element, attrs) {
		var obj = $(element).attr("obj-count");
		scope.count = Object.keys(scope[obj]).length;
	}

	return {
		restrict: 'A',
		template: '{{count}}',
		link: link
	};
});

app.directive('epdClick', function() {
	return function(scope, element, attrs) {
		$(element).click(function(event) {
			event.preventDefault();
		});
	}
});

app.directive('loginClick', function() {
	return function(scope, element, attrs) {
		var origHtml = $(element).html();

		$(element).attr({
			"data-toggle": "tooltip",
			"data-placement": "bottom"
		});

		var newClass = $(element).attr("data-over-class");
		var origClass = $(element).attr("data-out-class");

		$(element).attr('data-tooltip-mobile', 'true').tooltip();

		$(element).hover(function() {
			$(element).html("Login");
			if (newClass) {
				$(element).removeClass(origClass);
				$(element).addClass(newClass);
			}
		}, function() {
			$(element).html(origHtml);
			if (origClass) {
				$(element).removeClass(newClass);
				$(element).addClass(origClass);
			}
		});
	}
});

app.directive('keepWithinApp', function() {
	return function(scope, element) {
		$(element).on("click", function(e) {
			e.preventDefault();
			window.location = this.getAttribute("href");
		});
	}
});

app.directive('favoritesPreviewTerm', function() {
	return {
		link: function (scope, element, attrs) {
			var termyear = scope.term;
			var semester = getSemesterFromTermYear(termyear);

			scope.termyear = termyear;
			scope.termLabel = semester + " " + termyear.substring(0, 4);
			scope.termLabelCompact = semester + " '" + termyear.substring(2, 4);
//      scope.favorites.favoritesCount[termyear] = Object.keys(scope[term]).length - 1;
/*
      if (scope.global.variables.current_term_year == termyear) {
        $(element).addClass("active");
      }
      */
  }
}
});

/* https://github.com/angular-ui/ui-utils/issues/106 */
app.directive('hoverIntent', ['$timeout', function($timeout){
	return {
		restrict: 'A',
		link: function(scope, element, attributes){
			if (!scope.global.hoverIntentPromise[attributes.hoverIntentDelay]) {
				scope.global.hoverIntentPromise = {};
			}
			element.bind('mouseenter', function(event){
				var delay = scope.$eval(attributes.hoverIntentDelay);
				if(delay === undefined){
					delay = 500;
				}

				scope.global.hoverIntentPromise[attributes.hoverIntentDelay] = $timeout(function(){
					scope.$eval(attributes.hoverIntent, { $event: event });
				}, delay);
			});
			element.bind('mouseleave', function(){
				$timeout.cancel(scope.global.hoverIntentPromise[attributes.hoverIntentDelay]);
			});
		}
	};
}]);
app.directive('hoverIntentOut', ['$timeout', function($timeout){
	return {
		restrict: 'A',
		link: function(scope, element, attributes){
			if (!scope.global.hoverIntentPromise[attributes.hoverIntentDelay]) {
				scope.global.hoverIntentPromise = {};
			}
			element.bind('mouseleave', function(event){
				var delay = scope.$eval(attributes.hoverIntentDelay);
				if(delay === undefined){
					delay = 500;
				}

				scope.global.hoverIntentPromise[attributes.hoverIntentDelay] = $timeout(function(){
					scope.$eval(attributes.hoverIntentOut, { $event: event });
				}, delay);
			});
			element.bind('mouseenter', function(){
				$timeout.cancel(scope.global.hoverIntentPromise[attributes.hoverIntentDelay]);
			});
		}
	};
}]);

app.directive('onLastRepeat', ['$timeout', function($timeout){ /* http://www.nodewiz.biz/angular-js-final-callback-after-ng-repeat/ */
	return function(scope, element, attrs) {
		if (scope.$last) {
			$timeout(function() {
				scope.$emit('onRepeatLast', element, attrs);
			}, 0);
		}
	}
}]);

app.directive('favoriteSections', function() {
	return {
		scope: {
			courses: '=',
			favorites: '=',
			active: '=',
			setFavorite: '&ngClick'
		},
		restrict: "A",
		templateUrl: 'favorite-sections.html',
		link: function (scope, element, attrs) {
			scope.checkFavorite = function() {
				if (this.section.Favorite) {
					return true;
				}
				return false;
			}

			scope.setFavorite = function(section, course) {
				if (!section.Favorite) {
					scope.$parent.setFavorite(section, course, true);
				}
				else {
					scope.$parent.setFavorite(section, course, false);
				}
			}

			scope.hasSections = function(favorite) {
				if (typeof favorite === 'object' && scope.courses.data) {
					if (scope.courses.data[favorite.term_year]) {
						if (scope.courses.data[favorite.term_year].courses[favorite.docPattern]) {
							return (scope.courses.data[favorite.term_year].courses[favorite.docPattern].sectionsCount > 1) ? true : false;
						}
					}
				}
				return false;
			};
		}
	}
});

app.directive('scheduleListWeekday', function() {
	return {
		templateUrl: 'favorite-schedule-list-weekday.html',
	};
});

app.directive('colorizeBg', function() {
	return {
		scope: {
			courseNumber: '=',
			section: '='
		},
		restrict: 'A',
		link: function(scope, element, attrs) {
			var number = scope.courseNumber.substring(1);
			var n1 = number.substring(0, 2);
			var n2 = number.substring(2, 4);
			var hue = 168 + (parseInt(scope.courseNumber.substring(1, 4)) / 3.5);
			var saturation = 32 + (parseInt(scope.section) * 3);
			var lightness = 40 + parseInt(scope.section) * 0.5;
			var hslaValue = "hsla("+ hue +", "+ saturation +"%, "+ lightness +"%, 0.8)";
			var hslValue = "hsl("+ hue +", "+ saturation +"%, "+ lightness +"%)";
//      var hslCompValue = "hsl("+ (180-parseInt(hue)) +", "+ saturation +"%, "+ lightness +"%)";

element.css({
	"background": hslaValue,
	"border-color": hslValue
//        "color": hslValue
});
element.find(".inner").css({
	"background-color": hslValue
});
}
};
});

app.directive('inboundOutbound', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			if (!attrs.ngHref.match("http") && !attrs.ngHref.match("mailto")) {
				$(element).click(function(event) {
					event.preventDefault();
				});
			}
			else {
				$(element).attr("target", "_blank");
			}
		}
	};
});

app.directive('ngAnchor', function() {
	return function(scope, element) {
		$(element).on("click", function(e) {
			e.preventDefault();

			var selector = this.getAttribute("ng-anchor");
			var parent = this.getAttribute("ng-anchor-parent");

			var yPos = jQuery(selector).offset().top;

			jQuery(parent).animate({
				scrollTop: yPos
			}, 100);
		});
	}
});

/* http://stackoverflow.com/questions/17417607/angular-ng-bind-html-and-directive-within-it */
app.directive('ngCompile', ['$compile', function ($compile) {
	return function(scope, element, attrs) {
		scope.$watch(
			function(scope) {
				return scope.$eval(attrs.ngCompile);
			},
			function(value) {
				element.html(value);
				$compile(element.contents())(scope);
			}
			);
	};
}])

app.factory('Variables', function($http) {
	Variables = $http.get('feeds/variables.js');

	return {
		getVars: function() {
			return Variables.then(function(result) {
				return result.data;
			});
		}
	}
});

app.factory('UserInfo', function($http) {
	UserInfo = $http({
		"method": "GET",
		"url": 'cms/virgil/user',
		"timeout": 10000
	});

	return {
		getVars: function() {
			return UserInfo.then(function(result) {
				return result.data;
			}, function(error) {  /* on error */
//        console.error(error);
return false;
});
		}
	}
});

app.factory('Filters', function($http) {
	// Filters = $http.get('feeds/filters.js');

	program_courses = [];
	var my_url = 'http://localhost:3000/api/getDeptData';
	// var fn = "local.json";

	// var my_url = 'https://ves.columbiaspectator.com/api/getDeptData';
	var schools = ['GS','SEAS','CC'];

	var promises = [];
	for (var i=0; i<schools.length; i++) {
		majorDataGet = $http({
			"method": "POST",
			"url": my_url,
			"data": angular.toJson({"School": schools[i]}),
			"headers": {},
			"responseType": 'json',
			'ignoreLoadingBar': true
		});
		promises.push(majorDataGet);
	}

	Filters = $http.get('feeds/filters.js');
	return {
		getVars:
		function() {
			return Promise.all(promises).then( function(datas) {

				for (i=0; i<datas.length; i++) {
					var this_school = JSON.parse(datas[i]['config']['data'])['School'];
					var new_data = [];
					var this_data = datas[i]['data'].sort();
					for (var j=0; j<this_data.length; j++) {
						var this_item = this_data[j];
						var label_words = this_item.split("-");
						for (var k=0; k<label_words.length; k++) {
							label_words[k] = label_words[k].charAt(0).toUpperCase() + label_words[k].slice(1);
						}
						var label = label_words.join(" ");
						var to_insert = {"label": this_school + ": " + label, "value": this_item};
						if (program_courses.indexOf(to_insert)<0) {
							program_courses.push(to_insert);
						}
					}
				}
				return Filters.then(function(result) {
					// console.log(result);
					//console.log(program_courses)
					result.data.filters['program_courses'] = program_courses;
					return result.data;
				});
			})
		}
	}
});

app.factory('CWFeeds', function($http) {
	CWFeeds = $http.get('feeds/cw.js');

	return {
		getVars: function() {
			return CWFeeds.then(function(result) {
				return nicknames.then((ourresult) => {
					nicknamesArray = Object.keys(ourresult.data[0]);
					nicknamesArray.shift();
					//https://stackoverflow.com/questions/29719329/convert-array-into-upper-case
					toUpper = function(x){
					  return x.toUpperCase();
					};
					nicknamesArray = nicknamesArray.map(toUpper);
					result.data.class_title = nicknamesArray.concat(result.data.class_title);
					return result.data;
				});
			});
		}
	}
});

app.factory('UserFavorites', function($http, UserInfo) {
	var UserFavoritesAll, UserFavoritesCreate, UserFavoritesDel, UserFavoritesUpdate, UserEventsCreate, UserEventsUpdate, UserEventsDel;
	var settings = {
		'apiPath'        : '/cms/api/js/favorites',
		'eventsApiPath'  : '/cms/api/js/events',
		'apiTokenPath'   : '/cms/services/session/token'
	};

	return {
		all: function(nocache) {
			return UserInfo.getVars().then(function(result) {

				if (result) {
					if (settings.accessToken = result.data.access_token) {
						if (nocache || !UserFavoritesAll) {
							UserFavoritesAll = $http({
								"method": "POST",
								"url": settings.apiPath + '/all',
								"headers": { 'X-CSRF-Token' : settings.accessToken},
								"responseType": 'json',
								"timeout": 15000,
								"cache": false
							});
						}

						return UserFavoritesAll.then(function(result2) {
							return result2.data;
						}, function(error) {  /* on error */
//              console.error(error);
return -1;
});
					}
					else {
						return {};
					}
				}
				else {
					return {};
				}
			});
		},
		create: function(classes) {
			return UserInfo.getVars().then(function(result) {
				settings.accessToken = result.data.access_token;

				UserFavoritesCreate = $http({
					"method": "POST",
					"url": settings.apiPath,
					"data": angular.toJson(classes),
					"headers": { 'X-CSRF-Token' : settings.accessToken},
					"responseType": 'json',
					"ignoreLoadingBar": true
				});

				return UserFavoritesCreate.then(function(result2) {
					return result2.data;
				});
			});
		},
		del: function(class_id) {
			return UserInfo.getVars().then(function(result) {
				settings.accessToken = result.data.access_token;

				UserFavoritesDel = $http({
					"method": "DELETE",
					"url": settings.apiPath + '/' + class_id,
					"headers": { 'X-CSRF-Token' : settings.accessToken},
					"responseType": 'json',
					"ignoreLoadingBar": true
				});

				return UserFavoritesDel.then(function(result2) {
					return result2.data;
				});
			});
		},
		update: function(classes) {
			return UserInfo.getVars().then(function(result) {
				settings.accessToken = result.data.access_token;

				UserFavoritesUpdate = $http({
					"method": "PUT",
					"url": settings.apiPath + '/' + classes.class_id,
					"data": angular.toJson({'added_to_schedule': classes.added_to_schedule}),
					"headers": { 'X-CSRF-Token' : settings.accessToken},
					"responseType": 'json',
					"ignoreLoadingBar": true
				});

				return UserFavoritesUpdate.then(function(result2) {
					return result2.data;
				});
			});
		},
		hint: function(classes) {
			return UserInfo.getVars().then(function(result) {
				settings.accessToken = result.data.access_token;

				UserFavoritesHint = $http({
					"method": "POST",
					"url": settings.apiPath + '/hint',
					"data": angular.toJson(classes),
					"headers": { 'X-CSRF-Token' : settings.accessToken},
					"responseType": 'json',
					"timeout": 5000
				});

				return UserFavoritesHint.then(function(result2) {
					return result2.data;
				});

			});
		},
		dar: function() {
			return UserInfo.getVars().then(function(result) {
				settings.accessToken = result.data.access_token;

				UserFavoritesHint = $http({
					"method": "POST",
					"url": settings.apiPath + '/dar',
					"headers": { 'X-CSRF-Token' : settings.accessToken},
					"responseType": 'json'
				});

				return UserFavoritesHint.then(function(result2) {
					return result2.data;
				});

			});
		},
		eventsCreate: function(events) {
			return UserInfo.getVars().then(function(result) {
				settings.accessToken = result.data.access_token;

				UserEventsCreate = $http({
					"method": "POST",
					"url": settings.eventsApiPath,
					"data": angular.toJson(events),
					"headers": { 'X-CSRF-Token' : settings.accessToken},
					"responseType": 'json'
				});

				return UserEventsCreate.then(function(result2) {
					return result2.data;
				});
			});
		},
		eventsUpdate: function(classes) {
			return UserInfo.getVars().then(function(result) {
				settings.accessToken = result.data.access_token;

				UserEventsUpdate = $http({
					"method": "PUT",
					"url": settings.eventsApiPath + '/' + classes.class_id,
					"data": angular.toJson({'added_to_schedule': classes.added_to_schedule}),
					"headers": { 'X-CSRF-Token' : settings.accessToken},
					"responseType": 'json',
					"ignoreLoadingBar": true
				});

				return UserEventsUpdate.then(function(result2) {
					return result2.data;
				});
			});
		},
		eventsDel: function(event_id) {
			return UserInfo.getVars().then(function(result) {
				settings.accessToken = result.data.access_token;

				UserEventsDel = $http({
					"method": "DELETE",
					"url": settings.eventsApiPath + '/' + event_id,
					"headers": { 'X-CSRF-Token' : settings.accessToken},
					"responseType": 'json'
				});

				return UserEventsDel.then(function(result2) {
					return result2.data;
				});
			});
		}

	}

});


app.factory('CWApi', function($http, UserInfo) {
	var CWApiPub, CWApiPriv, CWApiEvaluation,
	timeout = 10000;

	return {
		pub: function(uci) {
			CWApiPub = $http({
				"method": "POST",
				"url": '/cms/cw/public/'+ uci,
				"responseType": 'json',
				"cache": false,
				"timeout": timeout
			});

			return CWApiPub.then(function(result2) {
				return result2.data;
			}, function(result2) {  /* on error */
				ga('send', 'exception', {
					'exDescription': 'CWApiPub ('+ uci +') fetch failed',
					'exFatal': false
				});
				return result2;
			});
		},
		priv: function(uci, uni) {
			return UserInfo.getVars().then(function(result) {
				var url = (uni) ? '/cms/cw/private/'+ uci +'/' + uni : '/cms/cw/private/'+ uci;
				CWApiPriv = $http({
					"method": "POST",
					"url": url,
					"responseType": 'json',
					"cache": false,
					"timeout": timeout
				});

				return CWApiPriv.then(function(result2) {
					return result2.data;
				}, function(result2) {  /* on error */
					ga('send', 'exception', {
						'exDescription': 'CWApiPriv ('+ uci + '/' + uni +') fetch failed',
						'exFatal': false
					});
					return result2;
				});

			});
		},
		evaluation: function(uni) {
			return UserInfo.getVars().then(function(result) {
				CWApiEvaluation = $http({
					"method": "POST",
					"url": '/cms/cw/eval/' + uni,
					"responseType": 'json',
					"cache": false,
					"timeout": timeout
				});

				return CWApiEvaluation.then(function(result2) {
					return result2.data;
				}, function(result2) {  /* on error */
					ga('send', 'exception', {
						'exDescription': 'CWApiEvaluation ('+ uni +') fetch failed',
						'exFatal': false
					});
					return result2;
				});

			});
		}
	}
});


app.config(function($animateProvider) {
	$animateProvider.classNameFilter(/angular-animate/);
});

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
//  cfpLoadingBarProvider.includeSpinner = false;
cfpLoadingBarProvider.latencyThreshold = 50;
}])

/*
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        controller:'home'
      })
      .when('/courses/:keyword', {
        controller:'courses',
      })
      .otherwise({
        redirectTo:'/'
      });
  }]
);

app.controller("home", function($scope, $routeParams) {
});

app.controller("courses", function($scope, $routeParams) {
});
*/

app.controller("global", function($scope,$compile, $location, $http, $timeout, Variables, Filters, UserInfo, UserFavorites, CWFeeds) {
	// Custom modal

	$scope.custom_modal = {
		title: "Core Swap Submit",
		body:	` <div class="modal-item">
                  <h2>You want:</h2>
                  <div id="modalwant" ng-repeat="i in listing.setToArray(listing.want)">
                   <p>{{i.split(", ")[0]}}</br>Section {{i.split(", ")[1]}}</p>
                  </div>
                  <h2>You have:</h2>
                  <div id="modalhave" ng-repeat="i in listing.setToArray(listing.have)">
                   <p>{{i.split(", ")[0]}}</br>Section {{i.split(", ")[1]}}</p>
                  </div>
                </div>`


	}
	console.log(Filters)

//find me. Check submitForm for new submitFn
	// $scope.submitReview = function(e){
	// 	// 

	// 	var radios = document.getElementsByName('score');
	// 	var slider = document.getElementById('hourRange')
	// 	var tags = document.getElementsByName('courseTag')
	// 	var chosenTags = [];


	// 	for (var i = 0, length = radios.length; i < length; i++){
	// 		if (radios[i].checked){
	// 			var score = radios[i].value;
	// 			break;
	// 		}
	// 	}
	// 	for (var j = 0, length = tags.length; j < length; j++){
	// 		if(tags[j].checked){
	// 			// console.log(tags[j].value)
	// 			chosenTags.push( tags[j].value );
	// 		}
	// 	}
	// 	console.log(chosenTags);
	// 	console.log(score)
	// 	console.log(slider.value)



		
	// 	// console.log($("#submitReviewForm").$('input'));

	// 	// score
	// 	// console.log( $("#submitReviewForm").find("[name='score']"));
	// 	//console.log( $("#submitReviewForm").find("[name='score']").find("[checked=true]"));

	// 	// // $.ajax({
	// 	// 	method: 'GET',
	// 	// 	url: 'https://google.com',
	// 	// 	success: function(data, status) {
	// 	// 		console.log(data, "DATA, STATUS ", status)
	// 	// 		alert(data);
	// 	// 	}

	// 	// })
	// }

	$scope.modalChange= function (title, body, footer){
		$scope.custom_modal.title=title;
		$scope.custom_modal.body=body;
		$scope.custom_modal.footer=footer;
		$("#myModal .modal-title").html($compile(title)($scope)[0])
		$("#myModal .modal-body").html($compile(body)($scope)[0])
		$("#myModal .modal-footer").html($compile(footer)($scope)[0])
		if (!footer) $("#myModal .modal-footer").hide()
		else $("#myModal .modal-footer").show()
	}

	$scope.starClick = function(i) {
		$scope.starsHover(i);
		blockUnhover = true;
	}

	$scope.blockUnhover = false;

	$scope.starsHover = function(i) {
		blockUnhover = false;
		stars = document.getElementsByClassName("stars");
		for (j=0; j<stars.length; j++) {
			star = stars[j];
			if (star.getAttribute("score") <= i) {
				$(star).html("★");
				star.style.color = "#e8a552";
			} else {
				$(star).html("☆");
				star.style.color = "#003087";
			}
		}
	}

	$scope.starUnhover = function(i) {
		if (!blockUnhover) {
			stars = document.getElementsByClassName("stars");
			for (j=0; j<stars.length; j++) {
				star = stars[j];
				$(star).html("☆");
				star.style.color = "#003087";
			}
		}	
	}

	$scope.gcal = {
		callback: () => {
			$().vergilgcal_modal_callback()

		}
	}
	$scope.moreInfoClicked = function(course, professor){
		// yayyy
		console.log("user requested more information on ", course, professor)
	}
	$scope.submitForm = function(professor, course){
		console.log("submit the stuff", course, professor)
		var gradYear;
		var school;
		var semester;
		$("#yearQ input").each(function(i){
			if($(this).prop("checked")){
				gradYear = $(this).prop("value")
			}
		})
		$("#schoolQ input").each(function(i){
			if($(this).prop("checked")){
				school = $(this).prop("value")
			}
		})
		var major = $("#majorEntry textarea").val()
		var secondMajor = $("#secondMajor textarea").val()
		var profName = $("#professorName textarea").val()
		$("#semesterQ input").each(function(i){
			if($(this).prop("checked")){
				semester = $(this).prop("value")
			}
		})
		var hoursPerWeek = parseInt($("#hoursPerWeek input").val())
		var grading = parseInt($("#prof_rating").prop("value"))
		var interest = parseInt($("#interest_class").prop("value"))	
		var whyInterest = $("#whyInteresting textarea").val();
		var goodTeacher = parseInt($("#good_teacher").prop("value"))
		var selfTeaching = parseInt($("#self_teaching").prop("value"))
		var easyA = parseInt($("#easy_a").prop("value"))
		var organization = parseInt($("#organizational_skills").prop("value"))
		var recommend = parseInt($("#recommend_prof").prop("value"))
		var whyRecommend = $("#recommendProfText textarea").val()

		var chosenTags = []
		$("#tagChoices input").each(function(i){
			if($(this).prop("checked")){
				chosenTags.push($(this).prop("value").toLowerCase());
			}
		})
		// Make up personal stuff for demo purpose Change for correctness.
		var jsonLoad = 	{"personal":
			{
				"year": gradYear,
				"school": school,
				"major": major,
				"concentration": secondMajor,
				"semester": semester
			},
			"hoursPerWeek": hoursPerWeek,
			"grading": grading,
			"interesting": interest,
			"whyInteresting": whyInterest,
			"effective": goodTeacher,
			"selfTeach": selfTeaching,
			"organized": organization,
			"recommendation": recommend,
			"explain_recommendation": whyRecommend,
			"factors": chosenTags,
			"professor": professor,
			"courseNumber": course,
			"A-possible": easyA,
			"requirement": false
		}
		console.log(jsonLoad)
		$http({
			method: 'POST',
			url: "http://localhost:3000/api/putReviews", //localhost needs to be changed eventually everywhere in file. Also http -> https after testing everywhere in file
			headers: {'Content-Type':'application/json'},
			data: jsonLoad,
		}).success(function(data, status) {
			console.log(data, "and status is", status)
			if(data["Success"]){
				$('#myModal').modal('hide');
			} else {
				alert("There was an issue sorry please try again")
			}
		});
		
	}
	// Allow console logging
	$scope.listing = {
		choosing: null,
		close: ()=>{
			console.log("check")
			$("#myModal").modal()
		},
		toggleMode: (intent) => {
			console.log($scope.listing.choosing)
			console.log(intent)
			if ($scope.listing.choosing === intent) $scope.listing.choosing = null
			else $scope.listing.choosing = intent
			console.log($scope.listing.choosing)
		},
		getMode: () => {
			return $scope.listing.choosing
		},
		want: new Set(),
		have: new Set(),
		haveremove: (item) => {
			$scope.listing.have.delete(item);
		},
		wantremove: (item) => {
			$scope.listing.want.delete(item);
		},
		clearListing: () => {
			$scope.listing.want.clear();
			$scope.listing.have.clear();
		},
		isEmpty: () => {
			return $scope.listing.want.size == 0 || $scope.listing.have.size == 0;
		},
		emptyAlert: () => {
			alert("You need to select at least one class you want and one class you have!");
		},
		setToArray: (set) => {
			return [...set]
		},
		log: () => {
			console.log($scope.listing.want);
			console.log($scope.listing.have);
		},
		has: (item) => {
			let want = $scope.listing.want
			let have = $scope.listing.have
			let choosing = $scope.listing.choosing
			if (choosing === "I Want This") {
				return want.has(item)
			}
			else if (choosing === "I Have This") {
				return have.has(item)
			}
		},
		toggle: (item) => {
			let want = $scope.listing.want
			let have = $scope.listing.have
			let choosing = $scope.listing.choosing
			if (choosing === "I Want This") {
				if (want.has(item)) {
					want.delete(item)
				}
				else want.add(item)
			}
			else if (choosing === "I Have This") {
				if (have.has(item)) {
					have.delete(item)
				}
				else have.add(item)
			}
		},
		testFilter: (item) => {
			whitelist = ["CC1001", "CC1002", "CC1100", "CC1010", "GS1010", "S1010", "CC1101", "CC1102", "UN1121", "S1121", "UN1123", "S1123"]
			return whitelist.includes(item)
		},
		modal: () => {
		$scope.modalChange("Core Swap Submit",
		` <div class="modal-item">
                  <h2>You want:</h2>
                  <div id="modalwant" ng-repeat="i in listing.setToArray(listing.want)">
                   <p>{{i.split(", ")[0]}}</br>Section {{i.split(", ")[1]}}</p>
                  </div>
                  <h2>You have:</h2>
                  <div id="modalhave" ng-repeat="i in listing.setToArray(listing.have)">
                   <p>{{i.split(", ")[0]}}</br>Section {{i.split(", ")[1]}}</p>
                  </div>
                </div>`,`<div><button type="button" class="btn btn-default" ng-click="listing.clearsubmit();" data-dismiss="modal">Close</button>
              <button id="submit" type="button" class="btn btn-default" ng-click="clicked=true; listing.upload(userinfo.data.uni); listing.confirmsubmit(); listing.clearListing(); listing.close();" data-dismiss="modal">Submit</button>
			  </div>`);
			$("#myModal").modal('show');
		},
		upload: (uni) => {
			var returnJson = {};
			returnJson.want = [...$scope.listing.want];
			returnJson.have = [...$scope.listing.have];
			if(returnJson.want.length == 0 && returnJson.have.length == 0) {
				console.log("error yo!");
			}

			//console.log(new Set([...$scope.listing.want].filter(x => $scope.listing.have.has(x))).size > 0);

			returnJson.uni = uni;
			if(new Set([...$scope.listing.want].filter(x => $scope.listing.have.has(x))).size > 0) {
				alert("you're trying to add a class you already have :/");
				$('#success').hide();
				$('#submit').show();
			} else {
				// $http.post('https://ves.columbiaspectator.com/api/coreSwap', returnJson);
				$http.post('http://localhost:3000/api/coreSwap', returnJson);
				$('#success').show();
				$('#submit').hide();
			}
			console.log(returnJson);
			$scope.listing.choosing = null;
			
		},
		clearsubmit: () => {
			$('#success').hide();
			$('#submit').show();
		}
	}

	//Instantiate nicknames
	// nicknames = $http.post('https://ves.columbiaspectator.com/api/getNicknames');
	nicknames = $http.post('http://localhost:3000/api/getNicknames');
	$scope.global = {
		variables: {},
		basicFiltersShown: 1,
		moreFiltersShown: 0,
		showprogwidget: 0,
		rendered: {
			planner: 0,
			courses: 0
		},
		filters: {},
		hoverIntentPromise: {},
		progwidgetSelected: false,
		teacherPopupShown: false,
		myPlannerShown: true,
		currentTerms: [],
		userFavoritesAllExpired: true,
		message: null,
		menuDropdownVisible: false,
		messagingShown: false,
		pageDepth: 0,
		lastScrollY: 0,
		betaDesign: 1,
		secret: false
	},
	$scope.pageTitle = "Vergil, your personal course planning guide | Columbia University",
	$scope.pageTitleFixed = $scope.pageTitle,
	$scope.modal = {},
	$scope.modalCourse = {},
	$scope.modalSection = {},
	$scope.myScheduleShown = true,
	$scope.showFavoritesPreview = 0,
	$scope.favorites = {};
	$scope.messages = {
		emptyPlanner: 'Please add classes to your favorites to see them in your planner.',
		emptySchedule: 'Move classes to your Schedule so they be imported into your SSOL Wish List for registration.',
		emptyScheduleList: '<p><strong>To see your week at a glance, add classes to your schedule.</strong></p><p>Classes in your Schedule may be imported into your SSOL Wish List for registration.</p>'
	}

	if (getCookie("alphaDesign") == 1) {
		$scope.global.betaDesign = 0;
		ga('set', 'expVar', 'alpha');
	}

	$scope.favorites.ready = 0;
	$scope.favorites.weekdays = {
		"Uncat": {unit: 0, value: "Uncat", translated: "Uncat", label: "Uncategorized", scheduleCount: {}},
		"M": {unit: 1, value: "M", translated: "M", label: "Monday", scheduleCount: {}},
		"T": {unit: 2, value: "T", translated: "Tu", label: "Tuesday", scheduleCount: {}},
		"W": {unit: 3, value: "W", translated: "W", label: "Wednesday", scheduleCount: {}},
		"R": {unit: 4, value: "R", translated: "Th", label: "Thursday", scheduleCount: {}},
		"F": {unit: 5, value: "F", translated: "F", label: "Friday", scheduleCount: {}},
		"S": {unit: 6, value: "S", translated: "Sa", label: "Saturday", scheduleCount: {}},
		"U": {unit: 7, value: "U", translated: "Su", label: "Sunday", scheduleCount: {}}
	};
	$scope.favorites.scheduledCredits = 0.0;
	$scope.favorites.scheduledSectionsCount = 0;
	$scope.favorites.personalEventsCount = 0;
	$scope.favorites.currentFavoritesCount = 0;
	$scope.favorites.favoritesCount = {};
	$scope.debug = 0;
	$scope.extras = 0;
	$scope.planner = {
		layout: 0,
		scrollX: 0,
		scrollY: 0,
		scheduleScrollX: 0,
		mobileSched: false,
		mobileCal: false,
		scheduleListShown: false
	};
	$scope.menuDropdownShown = {};
	$scope.active = {
		Tab: 0, /* termyear */
		TabIndex: 0, /* 0-2 */
		TabLast: 0,
		ModalTab: 0,
		MobileSearchTab: 0,
		expandCollapseAll: {}
	};

	var DAR;

	$scope.objectToArray = function(obj) {
		var array = Object.keys(obj).map(function(k) {
			return obj[k];
		});
	}

	$scope.loginPath = function(destination) {
		if (!destination && document.location.hash) {
			var destination = "?wind_destination_path=" + document.location.protocol + "//" + document.location.hostname + "/" + encodeURIComponent(document.location.hash);
			return '/cms/user/wind' + destination;
		}
		else if (destination) {
			destination = "?wind_destination_path=" + document.location.protocol + "//" + document.location.hostname + "/" + encodeURIComponent(destination);
			return '/cms/user/wind' + destination;
		}
		return '/cms/user/wind';
	}

	$scope.progWidgetToggle = function() {

		$scope.global.showprogwidget = ($scope.global.showprogwidget == 1) ? 0 : 1;

		if ($scope.global.showprogwidget) {

			$("#progwidget button").tooltip('destroy').removeAttr("data-toggle");
			var  check= $("#sela_form");
			check.parent().html("");
			

			// Add basic html dropdown
			var form = document.createElement("form");
			form.setAttribute("id", "sela_form");
			var sel = document.createElement("select");
			sel.setAttribute("name", "sidebar_fxns");
			sel.setAttribute("id", "sidebar_select");
			sel.setAttribute('onChange', 'changeSidebarFxn();');

			var heading = $('.heading').get(0);
			//heading.setAttribute("style", "height:100px;");

			vals = ['Core Swap', 'Major Requirements Checklists'];
			for (var i=0; i<vals.length; i++) {
				var opt = document.createElement("option");
				opt.setAttribute("value", vals[i].split(" ")[1]);
				// if (vals[i] === 'Core Swap') opt.disabled = true;
				opt.innerHTML = vals[i];
				sel.appendChild(opt);
			}
			form.appendChild(sel);
			var heading = $('.heading').get(0);

			// Add school dropdown
			var school_form = document.createElement("form");
			school_form.setAttribute("id", "schoolform_a");
			var school_sel = document.createElement("select");
			school_sel.setAttribute("name", "major_school");
			school_sel.setAttribute("id", "school_select");
			school_sel.setAttribute("onChange", "showProgBar();");

			school_vals = ['CC','SEAS','GS'];
			for (var i=0; i<school_vals.length; i++) {
				var opt = document.createElement("option");
				opt.setAttribute("value", school_vals[i])
				opt.innerHTML = school_vals[i];
				school_sel.appendChild(opt);
			}
			school_form.appendChild(school_sel);
			heading.insertBefore(school_form, heading.firstChild);
			heading.insertBefore(form, heading.firstChild);

			$('#school_select').hide();
			$('#program_chosen').hide();
			$('#program-information').hide();
			$('#coreswap').show();
			$('#loginprompt').show();
		} else {
			$('#sidebar_select').remove();
			$('#sela_form').remove();
			$('#schoolform_a').remove();
			$('#school_select').remove();
		}

		$timeout(function() {
			$(window).resize();
		}, 200);
	}

	$scope.basicFiltersToggle = function(state) {
		if (state !== undefined) {
			$scope.global.basicFiltersShown = state;
		}
		else {
			$scope.global.basicFiltersShown = !$scope.global.basicFiltersShown;
		}
		$("#toggle-search a:visible").blur();

/*
    if ($scope.global.basicFiltersShown) {
      $("#search-classes, #mobile-search-tabs, #mobile-teacherwidget").collapse("show");
    }
    else {
      $("#search-classes, #mobile-search-tabs, #mobile-teacherwidget").collapse("hide");
    }
    */
    $("body, html").animate({
    	scrollTop: 0
    }, 100);
}

$scope.toggleBetaDesign = function() {
	if ($scope.global.betaDesign === 0) {
		$scope.global.betaDesign = 1;
	}
	else {
		$scope.global.betaDesign = 0;
	}

	var alphaDesign = +!$scope.global.betaDesign;

	setCookie("alphaDesign", alphaDesign, 1);

	$timeout(function() {
		if (alphaDesign) {
			document.location = document.location.protocol + "//" + document.location.hostname + '/index.alpha.php';
		}
		else {
			document.location = document.location.protocol + "//" + document.location.hostname;
		}
	}, 0);
}

$scope.myPlannerToggle = function(state) {
	if (state != null) {
		$scope.global.myPlannerShown = state;
	}
	else {
		$scope.global.myPlannerShown = !$scope.global.myPlannerShown;
	}

	$scope.planner.scheduleListShown = false;
	if ($scope.breakpoint.class == "mobile") {
		$scope.planner.scheduleListShown = true;
	}
	else if (!$scope.global.myPlannerShown && $scope.breakpoint.class != "mobile") {
		$scope.planner.scheduleListShown = true;
	}

	$("#planner-container").scrollTop(0);
}

$scope.myScheduleToggle = function(state) {
	if (state != null) {
		$scope.myScheduleShown = state;
	}
	else {
		$scope.myScheduleShown = !$scope.myScheduleShown;
	}
}

$scope.closeGlobalMessage = function() {
	$timeout.cancel($scope.global.messageAutoClose);
	$scope.global.messageShown = 0;
}

$scope.mobileToggleSearch = function() {
	if ($scope.currentPage != 'courses') {
		window.location.hash = "courses";
		$scope.basicFiltersToggle(1);
	}
	else {
		$scope.basicFiltersToggle();
	}
}

$scope.moreFiltersToggle = function() {
	$scope.global.moreFiltersShown = ($scope.global.moreFiltersShown == 1) ? 0 : 1;
	$("#more-filters-toggle").blur();
}

$scope.favoritesPreviewToggle = function(state) {
	if ($scope.showFavoritesPreview == state) {
		return false;
	}
	$scope.showFavoritesPreview = state;
}

$scope.toggleMenuDropdown = function(target, state) {
	var newState = (state) ? state : !$scope.menuDropdownShown[target];

	$scope.clearMenuDropdowns();

	$scope.menuDropdownShown[target] = newState;
	$scope.global.menuDropdownVisible = newState;
	$("body").toggleClass("content-defocus", newState);
}

$scope.clearMenuDropdowns = function() {
	$scope.menuDropdownShown = {};
	$scope.global.menuDropdownVisible = false;
	$scope.global.teacherPopupShown = false;
	$("body").removeClass("content-defocus");
}

$scope.setActiveMobileSearchTab = function(index) {
	$scope.active.MobileSearchTab = index;
}

$scope.myDAR = function() {
	if (!DAR) {
		DAR = UserFavorites.dar();
	}

	DAR.then(function(result) {
		var user = ($scope.userinfo.data.first_name) ? $scope.userinfo.data.first_name : $scope.userinfo.data.uni;

		if (result.data.length) {
			$scope.modal = {};
			$scope.modal.title = "My DAR";
			$scope.modal.classes = "dar";
			$scope.modal.body = '<div id="my-dar-output"><pre>'+ result.data + '</pre></div>';
			$("#globalModal").removeData('bs.modal').modal();

			ga('send', 'event', 'My DAR', 'DAR shown');
/*
        $scope.$watch('$viewContentLoaded', function() {
            console.log("loaded");
          $("#my-dar-output pre").on("scroll", function(e) {
            console.log("scrolling", $(this).width(), $(this).scrollLeft()-$(this).width());
            var difference = $(this).width() - $(this).scrollLeft() - $(this).width();
            console.log(difference);
            if (difference < -70) {
              $("#globalModal").addClass("show-fading-edge");
            } else {
              $("#globalModal").removeClass("show-fading-edge");
            }

          }).scroll();
        });
        */
    }
    else {
    	$scope.modal = {};
    	$scope.modal.title = "My DAR";
    	$scope.modal.classes = '';
    	$scope.modal.body = '<div id="my-dar-output">Sorry, '+ user +', a Degree Audit Report is not available for you.</div>';
    	$("#globalModal").removeData('bs.modal').modal();

    	ga('send', 'event', 'My DAR', 'No DAR to show');
    }

    /* For modal to calc. height */
    $timeout(function() {
    	$(window).resize();
    }, 0);
});

}

$scope.searchEval = function(uni) {
	if (uni) {
		var newLocation = "#/evaluations/"+ uni;
		if (document.location.hash != newLocation) {
			if ($scope.debug == 1) {
				newLocation += "?debug=1";
			}

			document.location.hash = newLocation;
		}
	}
	else if ($scope.global.instructor) {
		var newLocation = "#/evaluations/"+ $scope.global.instructor;
		if (document.location.hash != newLocation) {
			if ($scope.debug == 1) {
				newLocation += "?debug=1";
			}

			document.location.hash = newLocation;
		}
	}
}

$scope.carouselNext = function() {
	$("#carousel").carousel('next');
}
$scope.carouselPrev = function() {
	$("#carousel").carousel('prev');
}

$scope.nodeContent = function(url) {
	if (url.match(/^mailto\:/) || url.match(/^http/)) {
		return true;
	}

	$scope.modal = {};
	$("#globalModal").removeData('bs.modal').modal();

	$http.get("cms/" + url + "/json").then(function(result) {
		if (deeptest(result, "data.nodes.0.node")) {
			var node = result.data.nodes[0].node;

			$scope.modal = {};
			$scope.modal.title = node.title;
			$scope.modal.body = node.Body;

			/* For modal to calc. height */
			$timeout(function() {
				$(window).resize();
			}, 0);
		}
	});
}

$scope.hideMessaging = function() {
	$("#messaging").slideUp(200, function() {
		$scope.global.messagingShown = false;
	});
}

$scope.$on('$locationChangeStart', function() {
	path = $location.path();
	$scope.global.pageDepth++;
	if ($scope.debug == 1) {
		console.log("$locationChangeStart", path, $scope.global.pageDepth);
	}

	switch (true) {
		case /\/courses/.test(path):
		if (path == "/courses") {
			$scope.basicFiltersToggle(1);
			$scope.global.mobileCourseFiltersShown = true;
			ga('set', 'title', 'Mobile Course Search Filters');
		}
		else {
			var keywords = path.replace("/courses/", "");
			$scope.global.mobileCourseFiltersShown = false;
			$scope.pageTitle = keywords + ' - ' + $scope.pageTitleFixed;
			ga('set', 'title', 'Course Search for "'+ keywords +'"');
		}
		if ($scope.currentPage != 'courses') {
			$scope.currentPage = 'courses';
		}
		break;
		case /\/my\-planner/.test(path):
		if ($scope.currentPage != 'planner') {
			$scope.currentPage = 'planner';
			$scope.favoritesPreviewToggle(0);
			$scope.basicFiltersToggle(0);
			$scope.global.mobileCourseFiltersShown = false;
			$scope.pageTitle = 'My Planner - ' + $scope.pageTitleFixed;
			ga('set', 'title', 'My Planner');
		}
		break;
		case /\/evaluations/.test(path):
		var parameter = $location.$$path.replace("/evaluations/", "").replace("/evaluations", "");
		if (parameter.length) {
			$scope.global.instructor = parameter;

			$scope.currentPage = 'evaluations';
			$scope.basicFiltersToggle(0);
			$scope.global.mobileCourseFiltersShown = false;
			$scope.global.showprogwidget = 0;
			$scope.pageTitle = 'Evaluations - ' + $scope.pageTitleFixed;

			$timeout(function() {
				$("#teacher").trigger("chosen:updated");
				ga('set', 'title', 'Evaluations for "' + parameter + '"');
			}, 0);
		}
		else {
			document.location.hash = '/';
		}
		break;
		case /\/my\-dar/.test(path):
		$scope.myDAR();
		default:
		if ($scope.currentPage != 'home') {
			$scope.currentPage = 'home';
			$scope.basicFiltersToggle(1);
			$scope.global.mobileCourseFiltersShown = true;
			$scope.global.showprogwidget = 0;
			$scope.global.moreFiltersShown = 0;

			$timeout(function() {
				$('#carousel').carousel({
					interval: 5000,
					keyboard: false
				});
			}, 0);

			$scope.pageTitle = $scope.pageTitleFixed;
			ga('set', 'title', 'Vergil Home');
		}
		break;
	}

	if (document.location.hash.match("debug=1") || document.location.search.match("debug=1")) {
		$scope.debug = 1;
	}
	else {
		$scope.debug = 0;
	}

	if (document.location.hash.match("extras=1") || document.location.search.match("extras=1")) {
		$scope.extras = 1;
	}
	else {
		$scope.extras = 0;
	}


	if (document.location.hash.match("layout=2") || document.location.search.match("layout=2")) {
		$scope.planner.layout = 2;
	}
	else {
		$scope.planner.layout = 0;
	}

	/* hide modal on page change */
	$(".modal.in").modal("hide").removeData('bs.modal');
	$scope.modal = {};

	if ($scope.global.pageDepth == 2) {
		$scope.hideMessaging();
	}

	$scope.global.rendered.courses = 0;

	/* track page on Analytics */
	ga('send', 'pageview', {
		'page': path
	});

});

$scope.$on('breakpointChange', function(event, breakpoint, oldClass) {
	if ($scope.debug == 1) {
		console.log('Entering', breakpoint.class, 'Leaving ',  oldClass, 'windowSize ', breakpoint.windowSize);
	}

	if (breakpoint.class == "mobile") {
		$("[data-toggle='tooltip']:not([data-tooltip-mobile])").tooltip('destroy');
		$scope.planner.scheduleListShown = true;

		/* Minimal mobile header */
/*
      $(document).smartscroll(function(e) {
        var currentScrollY = $(this).scrollTop(),
        currentHeight = $(this).height() - $(window).height();

        if (currentScrollY > currentHeight - 100) {
          $("body.minimal-header").removeClass("minimal-header");
        }
        else if (currentScrollY > $scope.global.lastScrollY) {
          if (currentScrollY > 100) {
            console.log("minimal-header", $(this).scrollTop());
            $("body").addClass("minimal-header");
          }
        }
        else if (currentScrollY < $scope.global.lastScrollY - 10) {
          $("body.minimal-header").removeClass("minimal-header");
        }
        $scope.global.lastScrollY = $(this).scrollTop();
      }).scroll();
      */
  }
  else {
  	if (!Modernizr.touch) {
  		$(document).tooltip({
  			selector: '[data-toggle="tooltip"]'
  		});
  	}
  	$scope.setActiveMobileSearchTab(0);

  	if (!$scope.global.myPlannerShown && $scope.breakpoint.class != "mobile") {
  		$scope.planner.scheduleListShown = true;
  	}
  }
  $("#planner-container").scroll();

  if ($scope.breakpoint.class != "mobile") {
  	$timeout(function() {
  		gmap();

  		if ($scope.debug == 1) {
  			$timeout(function() {
  				console.log("gmapLookupCache", gmapLookupCache);
  			}, 1000);
  		}
  	}, 0);
  }

});

Variables.getVars().then(function(result) {
	$scope.global.variables = result;

	if (result.global.enabled == 'y') {
		$scope.global.messagingShown = true;

		$timeout(function() {
			if (!Modernizr.touch) {
				var endPosition = $("#messaging").offset().top + $("#messaging").height();

				$(document).smartscroll(function(e) {
					if ($(this).scrollTop() > endPosition) {
						$scope.hideMessaging();
						$(document).off("scroll.ss")
					}
				}).scroll();
			}
		}, 0);
	}
});

Filters.getVars().then(function(result) {
	// console.log(result);
	$scope.global.filters = result.filters;
});

UserInfo.getVars().then(function(result) {
	if (result) {
		$scope.userinfo = result;

		if ($scope.userinfo.status == -1) {
			if ($scope.currentPage == "planner" || $scope.currentPage == "evaluations") {
				document.location.hash = '/';
			}
		}
		else {
			/* logged in */

		}
	}
	else { /* autologout occurred */
/*
      $scope.global.message = '<strong>Please reload</strong> Vergil.';
      $scope.global.messageShown = 1;
      document.location.hash = '/';

      ga('send', 'exception', {
        'exDescription': 'UserInfo fetch failed',
        'exFatal': false
      });
      */
      $scope.userinfo = {
      	status: -1,
      	data: [],
      	message: "User is unauthorized."
      }

      if ($scope.currentPage == "planner" || $scope.currentPage == "evaluations") {
      	document.location.hash = '/';
      }

      var casUrl = (window.location.host == "vergil.registrar.columbia.edu") ? 'https://cas.columbia.edu/cas/logout?service=' : 'https://casdev.cc.columbia.edu/cas/logout?service=';
      window.location = casUrl + window.location.href;
  }

  $scope.global.userinfoReady = 1;

  if ($scope.breakpoint.class != "mobile" && !Modernizr.touch) {
  	$timeout(function() {
  		$("a[data-toggle='tooltip']").tooltip();
  	}, 1);
  }
});

CWFeeds.getVars().then(function(result) {
	$scope.global.currentTerms = result.terms;

	Filters.getVars().then(function(result2) {
		$scope.global.filters = result2.filters;

		var classSuggestions,
		classDefaults = [];

		classSuggestions = result.class_title;

		if ($scope.global.filters.popular_search_terms) {
			for (term in $scope.global.filters.popular_search_terms) {
				classDefaults[term] = $scope.global.filters.popular_search_terms[term].value;
			}
		}

		var engine = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.whitespace,
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: classSuggestions
		});

		function engineWithDefaults(q, sync) {
			if (q === '') {
				$('.tt-dropdown-menu').addClass("default-suggestions");
//          sync(['Contemporary Civilization', 'Masterpieces of Western Art', 'Masterpieces of Western Music', 'Global Urbanism', 'Physical Education Activities', 'Intermediate Macroeconomics']);
sync(classDefaults);
}
else {
	$('.tt-dropdown-menu').removeClass("default-suggestions");
	engine.search(q, sync);
}
}

$timeout(function() {
	$('#search').typeahead({
		minLength: 0,
		highlight: true,
		classNames: {
			cursor: 'tt-cursor',
			menu: 'tt-dropdown-menu',
			dataset: 'tt-dataset tt-suggestions'
		}
	}, {
		name: 'keywords',
		source: engineWithDefaults,
		limit: 10,
		templates: {
			header: '<div class="tt-header">Popular Search Terms</div>'
		}
	});

  /*
        if (!Modernizr.touch) {
          $('#search').focus();
        }
        */
    }, 0);
});

});

$timeout(function() {
	$("body").addClass("anim-ready");

/*
    $scope.$on('cfpLoadingBar:started', function() {
      $("body").addClass("xhr-loading");
    });
    $scope.$on('cfpLoadingBar:completed', function() {
      $("body").removeClass("xhr-loading");
    });
    */
}, 2000);

angular.element(document).ready(function () {
	if (localStorage.getItem("fightme") == null) {
			alert("Thank you for downloading Vergil+! \n \nThe extension is now active, and you can see live class enrollments, organize requirements with the major checklist, enjoy a smarter search bar, and export your class schedule to iCal or Google Calendar. \n \nMore features are coming soon, and please send us your feedback to vergilplus@columbiaspectator.com.");
			localStorage.setItem("fightme", true);
	}

	if (window.navigator.standalone == true) {
		$("body").addClass("full-screen-app");
	}

	 var header = document.querySelector("#program-course-lookup .heading");
	// header.setAttribute("style", "height:100px;");

	if (iOSver = iOSversion()) {
		if (iOSver[0] < 8) {
			/* iOS7 position fixed: http://dansajin.com/2012/12/07/fix-position-fixed/ */
			if (Modernizr.touch) {
				var $body = $("body");

				$(document).on('focus', 'input', function(e) {
					$body.addClass('fixfixed');
				}).on('blur', 'input', function(e) {
					$body.removeClass('fixfixed');
				});
			}
		}
	}
});

});

app.controller("searchfilters", function($scope, $location, $http, $filter, $timeout, $animate, Variables, UserInfo, UserFavorites, CWApi, CWFeeds) {
	paramsHistory = '';
	$scope.form = {
		search: "",
		relevantSections: true,
		times: [
		sliderTimesStart[0],
		sliderTimesStart[1]
		],
		credits: [
		sliderCreditsStart[0],
		sliderCreditsStart[1]
		],
		levels: [
		sliderLevelsStart[0],
		sliderLevelsStart[1]
		],
		semesters: [
		{
			label: "Spring",
			id: "spring",
			value: 1
		},
		{
			label: "Summer",
			id: "summer",
			value: 2
		},
		{
			label: "Fall",
			id: "fall",
			value: 3
		}
		],
		days: [
		{
			label: "Mon",
			longLabel: "Monday",
			id: "monday",
			value: 'm'
		},
		{
			label: "Tue",
			longLabel: "Tuesday",
			id: "tuesday",
			value: 't'
		},
		{
			label: "Wed",
			longLabel: "Wednesday",
			id: "wednesday",
			value: 'w'
		},
		{
			label: "Thu",
			longLabel: "Thursday",
			id: "thursday",
			value: 'r'
		},
		{
			label: "Fri",
			longLabel: "Friday",
			id: "friday",
			value: 'f'
		},
		{
			label: "Sat",
			longLabel: "Saturday",
			id: "saturday",
			value: 's'
		},
		{
			label: "Sun",
			longLabel: "Sunday",
			id: "sunday",
			value: 'u'
		}
		]
	}

	$scope.formCheckboxes = {};
	$scope.contextualCourseData = {};

	$scope.courses = {}; /* (courses.data is inherited in parent/child) courses.data.term.course.section */
	$scope.displayedCourses = 0;
	$scope.coursesInQuery = 0;
	$scope.coursesInQueryExceeded = 0;
	$scope.coursesReady = 0;
	var UserFavoritesAll;
	var processingCourseTimer;
	var refreshRunning = 0;

	$scope.processContextualCourses = function(newVal, oldVal) {
		if (!newVal) {
			return;
		}
		else if (newVal == oldVal) {
			return;
		}

		if ($scope.courses.data) {
			$scope.coursesReady = 0;

			$filter('contextualCourses')($scope.courses.data, $scope.form, $scope.formCheckboxes, $scope.coursesWithEval);

			$scope.displayedCourses = 0;
			if (Object.keys($scope.courses.data)[0]) {
				for (term in $scope.courses.data) {
					$scope.displayedCourses += $scope.courses.data[term].coursesCount;
				}
			}

			$timeout.cancel(processingCourseTimer);
			processingCourseTimer = $timeout(function() {
				$scope.coursesReady = 1;
				$scope.global.rendered.courses = 1;
			}, 500);
		}
	}

	$scope.$on('$locationChangeStart', function() {
		path = $location.path();
		switch (true) {
			case /\/teacherwidget\-popup/.test(path):
			$scope.setActiveMobileSearchTab(1);
			break;
			case /\/courses/.test(path):
			$scope.searchUrlParams();
			break;
			case /\/my\-planner/.test(path):
			break;
			default:
			$scope.resetSearch();
		}
	});

	UserFavoritesAll = UserFavorites.all($scope.global.userFavoritesAllExpired);
	$scope.global.userFavoritesAllExpired = false;

	UserFavoritesAll.then(function(result) {
		if (result.data) {
			$scope.favorites.data = {};
			$scope.favorites.currentFavoritesCount = 0;
			for (i in $scope.global.currentTerms) {
				term = $scope.global.currentTerms[i];

				if (result.data.classes) {
					if (result.data.classes[term]) {
						$scope.favorites.data[term] = result.data.classes[term];
						$scope.favorites.favoritesCount[term] = Object.keys($scope.favorites.data[term]).length;
						$scope.favorites.currentFavoritesCount += $scope.favorites.favoritesCount[term];
					}
				}

				if (!$scope.favorites.data[term]) {
					$scope.favorites.data[term] = {};
					$scope.favorites.favoritesCount[term] = 0;
				}
			}
			$scope.favorites.ready = 1;
		}
		else if (result == -1) {
			user = ($scope.userinfo.data.first_name) ? $scope.userinfo.data.first_name : $scope.userinfo.data.uni;
			$scope.global.message = '<p>Sorry, '+ user +', there was a problem retrieving your favorites.</p><p><strong>Please reload</strong> Vergil.</p><p><a href="mailto:ias-service@columbia.edu?subject=Vergil problem retrieving favorites">Contact us</a> if this issue persists.</p>';
			$scope.global.messageShown = 1;

			document.location.hash = '/';

			ga('send', 'exception', {
				'exDescription': 'UserFavoritesAll fetch failed',
				'exFatal': false
			});
		}
	});

	CWFeeds.getVars().then(function(result) {
		$scope.teachers = result.eval_instructors;
		$scope.teachersUnis = [];
		for (teacher in $scope.teachers) {
			$scope.teachersUnis.push($scope.teachers[teacher].uni);
		}

		$scope.coursesWithEval = {};

		for (course in result.eval_courses) {
			courseIdentifier = result.eval_courses[course].substring(0, 9);
			$scope.coursesWithEval[courseIdentifier] = true;
		}
	});

	$scope.uniHasEval = function(uni) {
		if ($.inArray(uni, $scope.teachersUnis) != -1) {
			return true;
		}
		return false;
	}

	coursesPostRender = function() {
/*
    $(".course-item .heading-toggle a").on("click", function() {
      $(this).toggleClass("active-toggle");
    });
    */
    if ($scope.breakpoint.class != "mobile" && !Modernizr.touch) {
    	$("#course-list a[data-toggle='tooltip'], #course-list .badge[data-toggle='tooltip']").tooltip();
    }

    if ($scope.breakpoint.class != "mobile") {
    	gmap();

    	if ($scope.debug == 1) {
    		$timeout(function() {
    			console.log("gmapLookupCache", gmapLookupCache);
    		}, 1000);
    	}
    }

    if ($scope.termsCount == 1) {
    	var term = Object.keys($scope.courses.data)[0];
    	if ($scope.courses.data[term].coursesCount == 1) {

        // skip if UNI-based search or section key search
        if (!$scope.form.search.match(/^[a-z]+[0-9]+$/i) && !$scope.form.search.match(/^20[0-9]{3}[a-z]+/i)) {
        	$(".course-actions .toggle-info").click();
        	$scope.form.relevantSections = false;
        }
        else {
        	$scope.form.relevantSections = true;
        }
    }
    else {
    	$scope.form.relevantSections = true;
    }
}
else {
	$scope.form.relevantSections = true;
}

$scope.global.rendered.courses = 1;
}

initializeFormCheckboxes = function() {
	return {
		spring: true,
		summer: true,
		fall: true,
		monday: true,
		tuesday: true,
		wednesday: true,
		thursday: true,
		friday: true,
		saturday: true,
		sunday: true,
		withoutevals: true
	};
}
$scope.formCheckboxes = initializeFormCheckboxes();

$scope.toggleFormCheckboxes = function(variable) {
	$scope.formCheckboxes[variable] = !$scope.formCheckboxes[variable];
	if ($scope.debug == 1) {
		console.log("$scope.formCheckboxes", $scope.formCheckboxes);
	}
}

$scope.toggleRelevantSections = function() {
	$scope.form.relevantSections = !$scope.form.relevantSections;

	for (term in $scope.courses.data) {
		for (course in $scope.courses.data[term].courses) {
			$scope.courses.data[term].courses[course].sectionsFilteredOverride = false;
		}
	}
}

$scope.toggleSectionsFilteredOverride = function(course, state) {
	course.sectionsFilteredOverride = state;

	if (course.headingToggle == 0) {
		course.headingToggle = 1;
	}

	$scope.processContextualCourses(1);


	if ($scope.breakpoint.class != "mobile") {
		$timeout(function() {
			gmap();

			if ($scope.debug == 1) {
				$timeout(function() {
					console.log("gmapLookupCache", gmapLookupCache);
				}, 1000);
			}
		}, 0);
	}
}

$scope.togglePlannerLayout = function() {
	if ($scope.planner.layout == 2) {
		$scope.planner.layout = 0;
	}
	else {
		$scope.planner.layout = 2;
	}
	$scope.hideSections($scope.active.Tab);
}

$scope.togglePlannerMobileSched = function() {
	$scope.planner.mobileSched = !$scope.planner.mobileSched;
	$scope.hideSections($scope.active.Tab);
}

$scope.togglePlannerMobileCal = function() {
	$scope.planner.mobileCal = !$scope.planner.mobileCal;
	if ($scope.planner.mobileCal) {
		$("body").addClass("mobile-cal-shown");
		recalcScheduleItems();
	}
	else {
		$("body").removeClass("mobile-cal-shown");
	}
}

$scope.scrollToCourses = function() {
	$timeout(function() {
		if (!$scope.global.messagingShown && $scope.displayedCourses != 0) {
			if ($scope.breakpoint.class == "mobile") {
				$("body, html").scrollTop(0);
			}
			else {
				offsetPosition = $("#course-list").offset().top - parseInt($("body").css("padding-top"));
				$("body, html").animate({
					scrollTop: offsetPosition
				}, 100);
			}
		}
	}, 0);
}

$scope.initYear = function(term) {
	var semester = getSemesterFromTermYear(term);
	return {
		'courses': {},
		'termyear': term,
		'semester': semester,
		'year': term.substring(0, 4),
		'label': semester + " " + term.substring(0, 4),
		'labelCompact': semester + " '" + term.substring(2, 4)
	};
}

$scope.$on('onRepeatLast', function(scope, element, attrs) {
	eval(attrs.onLastRepeat);
});

buttonDelayedState = function(selector, text) {
	var origText = $(selector).text();

	$(selector).text(text);
	$timeout(function() { $(selector).text(origText); }, 2000);
}

$scope.processCoursesData = function(data) {
	var coursesData = {};
	var termKeys = [];
	var gmapExclude = ["To be announced", "ONLINE Only"];

	reformatTime = function(data) {
		var weekdaysObj = {};
		var formattedTimeWeekday = [];
		var translatedTimeWeekday = [];

		if (weekdays = data.split(" ")[0]) {
			for (var j = 0; j < weekdays.length; j++) {
				if (!weekdaysObj[weekdays[j]]) {
					weekdaysObj[weekdays[j]] = true;

					translatedTimeWeekday[j] = $scope.favorites.weekdays[weekdays[j]].translated;
					formattedTimeWeekday[j] = '<abbr title="'+ $scope.favorites.weekdays[weekdays[j]].label +'">' + $scope.favorites.weekdays[weekdays[j]].translated + '</abbr>';
				}
			}

			formattedTime = formattedTimeWeekday.join(" ") + " " + data.split(" ")[1];
			translatedTime = translatedTimeWeekday.join(" ") + " " + data.split(" ")[1];

			return [formattedTime, translatedTime, weekdaysObj];
		}
	}

	/* each class */
	for (var i = 0; i < data.length; i++) {

		var term = data[i].course.term;
		var course = data[i].course.course_identifier;

		/* each section */
		for (section in data[i].course.classes.class) {
			var thisSection = data[i].course.classes.class[section];
			var section = data[i].course.classes.class[section].section;
			if (!coursesData[term]) {
				coursesData[term] = $scope.initYear(term);
			}
			if (!coursesData[term].courses[course]) {
				var thisCourse = data[i].course;
				coursesData[term].courses[course] = {
					'id': term + course,
					'sections': {},
					'sectionsCount': thisCourse.classes.class.length,
					'course': course,
					'campus': thisCourse.campus.name,
					'description': (thisCourse.description) ? thisCourse.description.trim() : '',
					'department': thisCourse.department.name,
					'departmentUrl': thisCourse.department.url,
					'division': thisCourse.division.name,
					'number': thisCourse.bulletin.code + thisCourse.number,
					'number2': thisCourse.bulletin.code_2.trim() + thisCourse.number,
					'subject': thisCourse.subject.long_name,
					'ribbit': "http://bulletin.columbia.edu/ribbit/index.cgi?page=getcourse.rjs&code=" + thisCourse.subject.subject_code + "%20" + thisCourse.bulletin.code_2.trim() + thisCourse.number,
					'title': (thisCourse.course_name) ? thisCourse.course_name : thisCourse.classes.class[0].title,
					'subterm': (deeptest(thisCourse, "subterm.name")) ? thisCourse.subterm.name : null,
					'headingToggle': 0
				};
			}
			if (!coursesData[term].courses[course].sections[section]) {
				var fees = [],
				times = [],
				unit;

				for (charge in thisSection.charges) {
					fees[fees.length] = "$" + thisSection.charges[charge].amount.replace(".00", "") + " " + thisSection.charges[charge].message;
				}

				formattedTime = "";
				translatedTime = "";
				if (thisSection.days_times) {
					for (day in thisSection.days_times) {
						if (processed = reformatTime(thisSection.days_times[day].time)) {
							formattedTime = processed[0];
							translatedTime = processed[1];
							weekdays = processed[2];

							var location = (thisSection.days_times[day].location.room) ? String(thisSection.days_times[day].location.room.replace('RTBA', '') + " " + thisSection.days_times[day].location.name).trim() : null;

							var locationRich = (location && $.inArray(location, gmapExclude) == -1) ? '<span class="gmap-trigger">'+ location +'</span>' : location;

							times[times.length] = {
								'location': location,
								'locationRich': locationRich,
								'time': thisSection.days_times[day].time,
								'translatedTime': translatedTime,
								'formattedTime': formattedTime,
								'weekdays': weekdays,
								'mTimeFrom': (thisSection.days_times[day].mil_time_from) ? thisSection.days_times[day].mil_time_from.replace(':', '') : null,
								'mTimeTo': (thisSection.days_times[day].mil_time_to) ? thisSection.days_times[day].mil_time_to.replace(':', '') : null
							}

						}
					}
				}

				unit = {
					'max': (thisSection.unit.max) ? (parseInt(thisSection.unit.max) / 10).toPrecision(2) : '',
					'min': (thisSection.unit.min) ? (parseInt(thisSection.unit.min) / 10).toPrecision(2) : '',
					'default': (thisSection.unit.unit_count) ? (parseInt(thisSection.unit.unit_count) / 10).toPrecision(2) : '0',
					'label': "credits"
				}

				unit.formatted = (unit.max == 0 || unit.max == unit.default) ? unit.default : unit.default + "-" + unit.max;
				if (parseInt(unit.formatted) <= 1 && !unit.formatted.match("-")) {
					unit.label = "credit";
				}

				if (thisSection.instructors) {
					var instructorsNames = [];
					var instructorsHtmlLinked = [];
					var k = 0;

					for (instructor in thisSection.instructors) {
						var instructorHasEval = false;

						if (thisSection.instructors[instructor].uni && thisSection.instructors[instructor].uni != "" && thisSection.instructors[instructor].name != "Faculty") {
							instructorHasEval = $scope.uniHasEval(thisSection.instructors[instructor].uni);
						}


						if (thisSection.instructors[instructor].uni) {
							if (!instructorHasEval) {
								instructorsHtmlLinked[k] = '<span><a href="#/courses/'+ thisSection.instructors[instructor].uni +'">'+ thisSection.instructors[instructor].name +'</a></span>';
							}
							else {
								instructorsHtmlLinked[k] = '<span><a href="#/courses/'+ thisSection.instructors[instructor].uni +'">'+ thisSection.instructors[instructor].name +'</a> <a class="instructor-evaluations-link btn btn-xs btn-primary" href="#/evaluations/'+ thisSection.instructors[instructor].uni +'">evaluations</a></span>';
							}
						}
						else {
							if (thisSection.instructors[instructor].name != "Faculty") {
								instructorsHtmlLinked[k] = '<span><a href="#/courses/'+ thisSection.instructors[instructor].name +'">'+ thisSection.instructors[instructor].name +'</a></span>';
							}
							else {
								instructorsHtmlLinked[k] = '<span>'+ thisSection.instructors[instructor].name +'</span>';
							}
						}
						instructorsNames[k] = thisSection.instructors[instructor].name;




						k++;
					}
				}

				var examFormattedTime = "";
				if (thisSection.exam.time) {
					processed = reformatTime(thisSection.exam.time);

					examFormattedTime = processed[0];
				}


				var examLocation = (deeptest(thisSection, "exam.location.room")) ? thisSection.exam.location.room + " " + thisSection.exam.location.name : null;
				var examLocationRich = (examLocation && $.inArray(examLocation, gmapExclude) == -1) ? '<span class="gmap-trigger">'+ examLocation +'</span>' : examLocation;

				coursesData[term].courses[course].sections[section] = {
					'section': section,
					'uci': thisSection.universal_course_identifier,
					'callNumber': thisSection.call_number,
					'description': (thisSection.description) ? thisSection.description.trim() : '',
					// 'enrollment': (thisSection.enrollment.max && thisSection.enrollment.max != 999) ? thisSection.enrollment.max + ' max' : '',
					'status': (thisSection.enrollment.status == "F") ? " (Full)" : (thisSection.enrollment.count != "") ? ' (' + thisSection.enrollment.count + "/" + thisSection.enrollment.max + ')' : ' (' + 0 + "/" + thisSection.enrollment.max + ')',
					'note': thisSection.note,
					'openTo': thisSection.open_to,
					'sectionKey': thisSection.section_key,
					'universalCourseIdentifier': thisSection.universal_course_identifier,
					'listingValue': ((thisCourse.course_name) ? thisCourse.course_name : thisCourse.classes.class[0].title) + ", " + section + ", " + thisSection.universal_course_identifier,
					'type': thisSection.type.name,
					'website': thisSection.website.name,
					'websiteUrl': thisSection.website.url,
					'approval': thisSection.approval,
					'fee': fees.join(", "),
					'times': times,
					'exam': {
						'location': examLocation,
						'locationRich': examLocationRich,
						'date': thisSection.exam.date,
						'time': thisSection.exam.time,
						'formattedTime': examFormattedTime,
						'mTimeFrom': (thisSection.exam.mil_time_from) ? thisSection.exam.mil_time_from.replace(':', '') : null,
						'mTimeTo': (thisSection.exam.mil_time_to) ? thisSection.exam.mil_time_to.replace(':', '') : null
					},
					'instructors': thisSection.instructors,
					'instructorsHtml': (instructorsNames.length) ? '<span>' + instructorsNames.join("</span>, <div class=\"clearfix visible-xs-block\"></div><span>") + '</span>' : null,
					'instructorsHtmlLinked': instructorsHtmlLinked.join(", <div class='clearfix visible-xs-block'></div>"),
					'unit': unit,
					'subtitle': thisSection.subtitle,
					'moreInfoToggle': false
				};
			}
		}

		/* calculate course units */
		if (coursesData[term].courses[course]) {
			var unitBase = 0,
			unitMin = 0,
			unitMax = 0;
			for (section in coursesData[term].courses[course].sections) {
				var thisSection = coursesData[term].courses[course].sections[section];
				var min = ($.isNumeric(thisSection.unit.min)) ? thisSection.unit.min : null;
				unitBase = (unitBase == 0) ? thisSection.unit.default : unitBase;
				unitMin = (unitMin == 0) ? thisSection.unit.default : unitMin;

				unitBase = Math.min(thisSection.unit.default, unitMin, unitBase);
				unitMax = Math.max(thisSection.unit.max, unitMax);
			}
			coursesData[term].courses[course].units = (unitMax == 0 || unitMax == unitBase) ? unitBase : unitBase + "-" + unitMax;
			coursesData[term].courses[course].unitsLabel = "credits";
			if (!String(coursesData[term].courses[course].units).match("-") && parseInt(coursesData[term].courses[course].units) <= 1) {
				coursesData[term].courses[course].unitsLabel = "credit";
			}

			if ($scope.debug == 1) {
				if (!coursesData[term].courses[course].units && (unitBase != 0 || unitMax != 0)) {
					console.log("coursesData[term].courses[course]", coursesData[term].courses[course].course, "unitBase", unitBase, "unitMax", unitMax, "units", coursesData[term].courses[course].units);
				}
			}
		}
	}

	$scope.termsCount = Object.keys(coursesData).length;

	/* calculate term course counts */
	for (term in coursesData) {
		termKeys[termKeys.length] = term;
		coursesData[term].coursesCount = Object.keys(coursesData[term].courses).length;
	}

	termKeys.sort();

	for (term in coursesData) {
		coursesData[term].index = termKeys.indexOf(term);
	}

	if ($scope.debug == 1) {
		console.log("coursesData", coursesData);
	}

	UserFavoritesAll.then(function() {
		for (term in coursesData) {
			for (course in coursesData[term].courses) {
				for (section in coursesData[term].courses[course].sections) {
					var obj = coursesData[term].courses[course].sections[section];

					if (!obj.isPersonalEvent) {
						obj['Favorite'] = false;

						if ($scope.favorites.data) {
							for (var favorite in $scope.favorites.data[term]) {
								if ($scope.favorites.data[term][favorite]['class_id'] == obj['uci']) {
									obj['Favorite'] = true;
									break;
								}
							}
						}
					}
				}
			}
		}
	});

	return coursesData;
} /* /$scope.processCoursesData() */

refresh = function() {

	// window.filters.$$state.value.data['program_courses'] = program_courses;

	if (!refreshRunning) {
		$("#search-button").button('loading');

		refreshRunning = 1;

		var params = {};

		/* Keyword */
		var keywords = '';
		if ($scope.form.search) {
			keywords = $scope.form.search.trim();
		}
		else {
			keywords = '*';
		}

      // add quick test to see if this is where searches are set
      /*
      if(keywords == "lithum") {
        keywords = "Masterpieces of Western Literature and Philosophy";
      }
      */
      var nicknamesJson;

      /*
      const nickRequest = async() => {
        const response = await fetch("http://localhost:3000/api/getNicknames", {method: "post"});
        nicknamesJson = await response.json();
        console.log(nicknamesJson);

        $.each(nicknamesJson[0], function(k, v) {
          if(keywords == k) {
            keywords = v;
            console.log(keywords);
          }
        });
        return keywords;
      }
      */

      nicknames
        .then(function(resp) {
        	//console.log(resp);
          nicknamesJson = resp.data[0];
        }).then(function() {
          $.each(nicknamesJson, function(k, v) {
            if(keywords.toLowerCase() === k.toLowerCase()) {
              keywords = v;
            }
          });
        }).then(function() {
          //console.log(keywords);
        }).then(function() {
          params["key"] = keywords;

          /* Credits */
          if (val = $('#credits').val()) {
            var from = parseInt(val[0]).toPrecision(1);
            var to = parseInt(val[1]).toPrecision(1);
            if (!(from == sliderCreditsStart[0] && to == sliderCreditsStart[1])) {
              params["credit"] = from + "-" + to;
            }
          }

          /* Semesters */
          if ($('input[name="semester[]"]:not(:checked)').length) {
            var values = [];
            $('input[name="semester[]"]:checked').each(function() {
              values.push($(this).val());
            });
            params["term"] = values.join(",");
          }

          /* Days */
          if ($('input[name="days[]"]:not(:checked)').length) {
            var values = [];
            $('input[name="days[]"]:checked').each(function() {
              values.push($(this).val());
            });
            params["days"] = values.join("");
          }

          /* Subject */
          if ($scope.subject) {
            params["subject"] = $scope.subject;
          }

          /* Departments */
          if ($scope.department) {
            params["dept"] = $scope.department;
          }

          /* Class Types */
          if ($scope.classtype) {
            params["classtype"] = $scope.classtype;
          }

          /* School */
          if ($scope.school) {
            params["school"] = $scope.school;
          }

          /* Course Levels */
          if (val = $('#levels').val()) {
            var from = parseInt(val[0]);
            var to = parseInt(val[1]);
            if (!(from == sliderLevelsStart[0] && to == sliderLevelsStart[1])) {
              params["level"] = from + "-" + to;
            }
          }

          /* Times */
          if (val = $('#times').val()) {
            var from = parseInt(val[0]);
            var to = parseInt(val[1]);
            if (!(from == sliderTimesStart[0] && to == sliderTimesStart[1])) {
              params["miltimefrom"] = from;
              params["miltimeto"] = to;
            }
          }

          /* only process if keywords is not empty */
          if (params["key"]) {
            params["moreresults"] = 2;

            if ($scope.currentPage == 'home') { /* if home->courses, collapse expanded filters */
              $scope.global.moreFiltersShown = 0;
            }
    /*
            if ($scope.currentPage != 'courses') {
              $scope.mobileToggleSearch();
            }
            */

            $("#course-list").addClass("changed");


            $timeout(function() {
            	var newLocation = decodeURIComponent("#/courses/"+ keywords);

            	var currentLocation = (location.href.split("#")[1]) ? decodeURIComponent("#" + location.href.split("#")[1]) : "";
            	if (currentLocation != newLocation) {
            		if ($scope.debug == 1) {
            			newLocation += "?debug=1";
            		}

            		document.location.hash = newLocation;
            	}
            }, 0);

            var runRefresh = 0;
            if (angular.toJson(params) !== angular.toJson(paramsHistory)) {
            	runRefresh = 1;
            }
            else if ($scope.courses) {
            	if (!$scope.courses.data) {
            		runRefresh = 1;
            	}
            	else {
            		if (Object.keys($scope.courses.data).length === 0) {
            			runRefresh = 1;
            		}
            	}
            }

            if (runRefresh) {
            	paramsHistory = params;

            	if ($scope.courses.data) {
            		$scope.coursesReady = 0;

            		$scope.courses = {};
            	}

            	$scope.noResults = false;

            	$http({
            		"method": "GET",
            		"url": "doc-adv-queries.php",
            		"params": params
            	})
            	.success(function(data, status, headers, config) {
            		$scope.courses.data = $scope.processCoursesData(data);

            		$scope.active.expandCollapseAll = {};

            		$scope.coursesInQuery = 0;
            		$scope.coursesInQueryExceeded = 0;
            		for (term in $scope.courses.data) {
            			$scope.coursesInQuery += $scope.courses.data[term].coursesCount;
            			if ($scope.courses.data[term].coursesCount > 100) {
            				$scope.coursesInQueryExceeded = 1;
            			}
            		}
            		if ($scope.coursesInQuery == 302) {
            			$scope.coursesInQueryExceeded = 1;
            		}

            		if ($scope.courses.data[$scope.global.variables.current_term_year]) {
            			$scope.setActiveTab($scope.global.variables.current_term_year);
            			$scope.setActiveTabIndex($scope.courses.data[$scope.global.variables.current_term_year].index);
            		}
            		else if (Object.keys($scope.courses.data)[0]) {
            			var keys = Object.keys($scope.courses.data);
            			keys.sort();

            			$scope.setActiveTab(keys[0]);
            			$scope.setActiveTabIndex(0);
            		}

            		$scope.noResults = ($scope.termsCount) ? false : true;

            		$("#course-list").removeClass("changed");
            		$("#search-button").button('reset');
            		refreshRunning = 0;

            		$scope.global.searchResultsReady = 1;

            		$scope.scrollToCourses();

            		var gaParams = params;
            		delete gaParams.moreresults;
            		ga('send', 'pageview', {
            			'page': '/courses/'+ decodeURIComponent(gaParams.key) +'?' + $.param(gaParams),
            			'title': 'Course Search for "'+ gaParams.key +'"'
            		});
            	})
            	.error(function(data, status, headers, config) {
            		$("#course-list").removeClass("changed");
            		$("#search-button").button('reset');
            		refreshRunning = 0;

            		ga('send', 'exception', {
            			'exDescription': 'Search ('+ keywords +') failed',
            			'exFatal': false
            		});

            		return false;
            	});
            }
            else {
            	$("#course-list").removeClass("changed");
            	$("#search-button").button('reset');
            	refreshRunning = 0;

            	$scope.scrollToCourses();
            }
        }
        else {
        	$("#course-list").removeClass("changed");

        	$("#search-button").button('error').addClass('error');

        	$("#search").one("change keypress", function() {
        		$("#search-button").button('reset');
        		$("#search-button").removeClass('error');
        	})

        	if (!Modernizr.touch) {
        		try {
        			$scope.form.search.on('focus', function(event) {
        				scope.$evalAsync(function() {
        					fn(scope, {$event:event});
        				});
        			});
        		}
        		catch(err) {
        		}
        	}

        	refreshRunning = 0;
        }

        $("#search-button").blur();

    });
}
} /* /refresh() */

$scope.courseHeadingToggle = function(course_id) {
	var course = $scope.courses.data[$scope.active.Tab].courses[course_id];
	course.headingToggle = (course.filteredSectionsCount) ? !course.headingToggle : course.headingToggle;
	if (course.headingToggle && $scope.breakpoint.class != "mobile") {
		$timeout(function() {
			gmap();

			if ($scope.debug == 1) {
				$timeout(function() {
					console.log("gmapLookupCache", gmapLookupCache);
				}, 1000);
			}
		}, 0);
	}
}

$scope.expandAll = function() {
	if ($scope.active.expandCollapseAll[$scope.active.Tab] == 1) {
		$scope.active.expandCollapseAll[$scope.active.Tab] = 2;

		angular.forEach($scope.courses.data[$scope.active.Tab].courses, function(course) {
			angular.forEach(course.sections, function(section) {
				if (!section.moreInfoToggle) {
					section.moreInfoToggle = true;
				}
			});
		});
	}
	else if ($scope.active.expandCollapseAll[$scope.active.Tab] == 2) {
		$scope.active.expandCollapseAll[$scope.active.Tab] = 1;

		angular.forEach($scope.courses.data[$scope.active.Tab].courses, function(course) {
			angular.forEach(course.sections, function(section) {
				if (section.moreInfoToggle) {
					section.moreInfoToggle = false;
				}
			});
		});
	}
	else {
		$scope.active.expandCollapseAll[$scope.active.Tab] = 1;

		angular.forEach($scope.courses.data[$scope.active.Tab].courses, function(course) {
			if (course.filteredSectionsCount && course.headingToggle == 0) {
				course.headingToggle = 1;
			}
		});

		if ($scope.breakpoint.class != "mobile") {
			$timeout(function() {
				gmap();

				if ($scope.debug == 1) {
					$timeout(function() {
						console.log("gmapLookupCache", gmapLookupCache);
					}, 1000);
				}
			}, 0);
		}
	}
}
$scope.collapseAll = function() {
	if ($scope.active.expandCollapseAll[$scope.active.Tab] != 0) {
		$scope.active.expandCollapseAll[$scope.active.Tab] = 0;

		angular.forEach($scope.courses.data[$scope.active.Tab].courses, function(course) {
			if (course.filteredSectionsCount && course.headingToggle == 1) {
				course.headingToggle = 0;
			}
			angular.forEach(course.sections, function(section) {
				if (section.moreInfoToggle) {
					section.moreInfoToggle = false;
				}
			});
		});
	}
}

$scope.expandCollapseAllReset = function(excludeTerm) {
	angular.forEach($scope.active.expandCollapseAll, function(value, term) {
		if (term != excludeTerm) {
			if (value != 0) {
				$scope.active.expandCollapseAll[term] = 0;

				var i = 0;
				angular.forEach($scope.courses.data[term].courses, function(course) {
					if (i && course.filteredSectionsCount && course.headingToggle == 1) {
						course.headingToggle = 0;
					}
					angular.forEach(course.sections, function(section) {
						if (section.moreInfoToggle) {
							section.moreInfoToggle = false;
						}
					});
					i++;
				});
			}
		}
	});
}

$scope.setActiveTab = function(termyear) {
	$scope.active.Tab = termyear;

	$timeout(function() {
		if ($scope.currentPage == "planner") {
			$scope.recalcWeekdayCounts($scope.active.Tab);
		}
		else if ($scope.currentPage == "courses") {
			$scope.expandCollapseAllReset(termyear);
		}

		$(window).resize();
	}, 0);
}

$scope.setActiveTabIndex = function(index) {
	$scope.active.TabIndex = index;
}

$scope.setActiveModalTab = function(index) {
	$scope.active.ModalTab = index;

	/* For modal to calc. height */
	$timeout(function() {
		$(window).resize();
	}, 0);
}

$scope.clearSearch = function() {
	$scope.form.search = null;
	$("#search").typeahead('val', null);
}

/* initFilters */
$('#times').noUiSlider({
	start: sliderTimesStart,
	step: 1,
	range: {
		'min': sliderTimesStart[0],
		'max': sliderTimesStart[1]
	},
	serialization: {
		lower: [ toolTipTime ],
		upper: [ toolTipTime ]
	},
	connect: true
}).on('set', function(){
	var val = $(this).val();
	$scope.form.times[0] = parseInt(val[0]);
	$scope.form.times[1] = parseInt(val[1]);
	$timeout(function() {
		$scope.$apply($scope.form.times);
	}, 0);
});

$('#credits').noUiSlider({
	start: sliderCreditsStart,
	step: 1,
	range: {
		'min': sliderCreditsStart[0],
		'max': sliderCreditsStart[1]
	},
	serialization: {
		lower: [ toolTip ],
		upper: [ toolTip ]
	},
	connect: true
}).on('set', function(){
	var val = $(this).val();
	$scope.form.credits[0] = parseInt(val[0]);
	$scope.form.credits[1] = parseInt(val[1]);
	$timeout(function() {
		$scope.$apply($scope.form.times);
	}, 0);
});

$('#levels').noUiSlider({
	start: sliderLevelsStart,
	step: 500,
	range: {
		'min': sliderLevelsStart[0],
		'max': sliderLevelsStart[1]
	},
	serialization: {
		lower: [ toolTip ],
		upper: [ toolTip ]
	},
	connect: true
}).on('set', function(){
	var val = $(this).val();
	$scope.form.levels[0] = parseInt(val[0]);
	$scope.form.levels[1] = parseInt(val[1]);
	$timeout(function() {
		$scope.$apply($scope.form.levels);
	}, 0);
});

/*
  $('#search').keyup(function() {
    app.noResults = 0;
    $("#course-list").addClass("change-start");

    clearTimeout($.data(this, 'timer'));
    var wait = setTimeout(refresh, 200);
    $(this).data('timer', wait);
  }).focus();
  */

  $scope.searchKeyUp = function(e) {
  	if (e.keyCode == 13) {
  		$("#search-button").focus().blur();
  		$scope.form.search = e.target.value;
  		$scope.searchStart();
  	}
  }
  $scope.searchChange = function(e) {
  	if ($scope.form.search == "alpha") {
  		$scope.global.secret = true;
  	}
  	else {
  		$scope.global.secret = false;
  	}
  }

  $('#search').on("typeahead:selected", function(data) {
  	$timeout(function() {
  		$("#search-button").focus().blur();
  		$scope.form.search = $("#search").typeahead('val');

  		nicknames.then((result) => {
  			return result = result.data[0];
  		})
  		.then((result) => {
  			$scope.form.search = $scope.form.search.toLowerCase();
        $.each(result, function(k, v) {
          if($scope.form.search === k.toLowerCase()) {
            $scope.form.search = v;
          }
        });
  			$scope.searchStart();
  		})
  	}, 0);
  });

/*
  $("input[name='semester[]'], input[name='withoutevals'], input[name='days[]']").each(function() {
    $(this).on("change", function() {
      if ($(this)[0].checked) {
        $(this).siblings(".sprite").addClass("sprite-checkbox-on").removeClass("sprite-checkbox-off");
      }
      else {
        $(this).siblings(".sprite").addClass("sprite-checkbox-off").removeClass("sprite-checkbox-on");
      }
    });
  });
  */
  $scope.searchStart = function() {
  	$scope.coursesReady = 0;

  	if (!Object.keys($scope.global.variables).length) {
  		Variables.getVars().then(function(result) {
  			$scope.global.variables = result;
  			if (!$scope.global.userinfoReady) {
  				UserInfo.getVars().then(function(result) {
  					refresh();
  				});
  			}
  			else {
  				refresh();
  			}
  		});
  	}
  	else {
  		if (!$scope.global.userinfoReady) {
  			UserInfo.getVars().then(function(result) {
  				refresh();
  			});
  		}
  		else {
  			refresh();
  		}
  	}
  };

/*
  $("#search-classes").on("submit", function() {
    $scope.searchStart();
  });
  */

  $scope.resetSearch = function() {
//    $(this).blur();
$scope.clearSearch();
$("#search-classes")[0].reset();
$("#more-filters select[chosen]").val('').trigger("chosen:updated");

/*
    $("#search-classes").find("input[type=checkbox]").each(function() {
      $(this).prop("checked", true);
      $(this).parents("label").addClass("active");
    });
    */
    $('#times').val(sliderTimesStart).trigger('set');
    $('#credits').val(sliderCreditsStart).trigger('set');
    $('#levels').val(sliderLevelsStart).trigger('set');

    $timeout(function() {
    	$scope.$apply(function () {
    		$scope.formCheckboxes = initializeFormCheckboxes();
    		$scope.department = "";
    		$scope.year = "";
    		$scope.classtype = "";
    		$scope.subject = "";
    		$scope.school = "";
    	});
    }, 0);
}

$scope.searchUrlParams = function() {
	if (/\/courses\//.test($location.$$path)) {
		$scope.form.search = $location.$$path.replace("/courses/", "").replace("*", "");
		$scope.searchStart();
	}
}
//  $scope.searchUrlParams();

$scope.setFavorite = function(section, course, state) {
	var term = section.sectionKey.substring(0, 5);
	var uci = section.uci;

	var docPattern = course.course;
	var classSection = section.section;

	if ($scope.debug == 1) {
		console.log("setFavorite", section, course, state);
	}

	if (state === undefined) {
		section.Favorite = !section.Favorite;
		section.added_to_schedule = 0;
	}
	else {
		section.Favorite = state;
		section.added_to_schedule = 0;
	}
	if ($scope.courses.data[term] !== undefined) {
		$scope.courses.data[term].courses[docPattern].sections[classSection].Favorite = section.Favorite;
		$scope.courses.data[term].courses[docPattern].sections[classSection].added_to_schedule = 0;
	}

	/* add a favorite */
	if (section.Favorite) {
		if ($scope.global.variables.current_term_year == term) {
			/* For current term, check for Hints */
			hintReq = UserFavorites.hint({'classes': section.uci});

			hintReq.then(function(result) {
				if (result) {
					if (result.status == 1) { /* SSOL Hints working */
						for (item in result.data) {
							for (thisCourse in result.data[item]) {
								var hint = result.data[item][thisCourse];
								if (hint != "Open") {
									for (key in $scope.global.filters.hint_messages) {
										if ($scope.global.filters.hint_messages[key].value == hint.toLowerCase()) {
											$scope.$parent.modal.body = $scope.global.filters.hint_messages[key].label;
											$scope.$parent.modal.section = section;
											$scope.$parent.modal.course = course;
											$scope.$parent.modal.term = term;
											$("#hintsModal").removeData('bs.modal').modal();

											/* For modal to calc. height */
											$timeout(function() {
												$(window).resize();
											}, 0);

											return;
										}
									}
								}
							}
						}
					}
				}
			});
		}

		$scope.global.userFavoritesAllExpired = true;
		$scope.favorites.currentFavoritesCount++;
		$scope.favorites.favoritesCount[term]++;

		if ($scope.favorites.data) {
			if ($scope.favorites.data[term]) {
				if (!$scope.favorites.data[term][uci]) {
					$scope.favorites.data[term][uci] = {};
				}
				$scope.favorites.data[term][uci].class_id = uci;
				$scope.favorites.data[term][uci].Favorite = true;
				$scope.favorites.data[term][uci].added_to_schedule = 0;
			}
		}

		UserFavorites.create({'class_id': section.uci, 'added_to_schedule': 0}).then(function(result) {
			if (result.status == 0) { /* Error, cancel out previous feedback */
				$scope.global.userFavoritesAllExpired = true;
				$scope.favorites.currentFavoritesCount--;
				$scope.favorites.favoritesCount[term]--;
				delete $scope.favorites.data[term][uci];
				section.Favorite = false;

				user = ($scope.userinfo.data.first_name) ? $scope.userinfo.data.first_name : $scope.userinfo.data.uni;
				$scope.global.message = '<p>Sorry, '+ user +', there was a problem saving your favorite.</p><p>The error was: <strong>'+ result.message +'</strong></p><p><a href="mailto:ias-service@columbia.edu?subject=Vergil problem saving favorite&body=error: '+ result.message +'">Please contact us</a> regarding this.</p>';
				$scope.global.messageShown = 1;

				ga('send', 'exception', {
					'exDescription': 'UserFavoritesCreate ('+ section.uci +') failed',
					'exFatal': true
				});
			}
		});


	}
	else {
		UserFavorites.del(section.uci);
		$scope.global.userFavoritesAllExpired = true;
		$scope.favorites.currentFavoritesCount--;
		$scope.favorites.favoritesCount[term]--;

		if ($scope.favorites.data[term][uci]) {
			delete $scope.favorites.data[term][uci];
		}
	}

	/* CSS Animation */
	$("body").addClass("modified-favorites");
	$timeout(function() { $("body").removeClass("modified-favorites") }, 300);

	$scope.hideSections(term);
}

$scope.updateFavorite = function(section, term, docPattern, state) {
	if ($scope.debug == 1) {
		console.log("updateFavorite", section, term, docPattern, state);
	}

	if (section.isPersonalEvent) {
		$scope.courses.data[term].courses.personalEvents.sections[section.section].added_to_schedule = state.toString();
		UserFavorites.eventsUpdate({'class_id': section.section, 'added_to_schedule': state});
	}
	else {
		if ($scope.favorites.data[term][section.uci]) {
			$scope.favorites.data[term][section.uci].added_to_schedule = state.toString();
		}

		$scope.courses.data[term].courses[docPattern].sections[section.section].added_to_schedule = state.toString();
		UserFavorites.update({'class_id': section.uci, 'added_to_schedule': state});
	}

	$scope.global.userFavoritesAllExpired = true;

	$scope.recalcWeekdayCounts(term);

	if (!section.times.length && state == 1) {
		$scope.global.message = 'As this class does not currently contain day & time information, it does not appear on the calendar.';
		$scope.global.messageShown = 1;

		$scope.global.messageAutoClose = $timeout(function() {
			$scope.global.messageShown = 0;
		}, 10000);
	}
	else if ($scope.favorites.scheduledSectionsCount == 1 && state == 1) {
		$scope.global.message = '<p>Class has been added to your Vergil planning schedule.</p><p>Please remember to complete your class registration on SSOL for this semester.<p>';
		$scope.global.messageShown = 1;

		$scope.global.messageAutoClose = $timeout(function() {
			$scope.global.messageShown = 0;
		}, 10000);
	}

	$(window).resize();
}

$scope.removePersonalEvent = function(section, term, state) {
	if ($scope.debug == 1) {
		console.log("removePersonalEvent", section, term, state);
	}

	$scope.courses.data[term].courses.personalEvents.sections[section.section].added_to_schedule = 0;
	$scope.courses.data[term].courses.personalEvents.sections[section.section].Favorite = false;

	/* delay deletion to allow animation */
	setTimeout(function() {
		delete $scope.courses.data[term].courses.personalEvents.sections[section.section];
	}, 500);
	UserFavorites.eventsDel(section.section);
	$scope.global.userFavoritesAllExpired = true;

	$scope.recalcWeekdayCounts(term);

	$(window).resize();
}

$scope.removeFavorite = function(uci, term) {
	if ($scope.debug == 1) {
		console.log("removeFavorite", uci, term);
	}

	$("#hintsModal").modal("hide").removeData('bs.modal');

	UserFavorites.del(uci);
	$scope.global.userFavoritesAllExpired = true;
	$scope.favorites.currentFavoritesCount--;
	$scope.favorites.favoritesCount[term]--;

	if ($scope.favorites.data[term][uci]) {
		delete $scope.favorites.data[term][uci];
	}

	/* CSS Animation */
	$("body").addClass("modified-favorites");
	setTimeout(function() { $("body").removeClass("modified-favorites") }, 300);

	$scope.hideSections(term);

	if ($scope.courses.data[term]) {
		for (course in $scope.courses.data[term].courses) {
			for (courseSection in $scope.courses.data[term].courses[course].sections) {
				if ($scope.courses.data[term].courses[course].sections[courseSection].uci == uci) {
					$scope.courses.data[term].courses[course].sections[courseSection].Favorite = false;
					$scope.courses.data[term].courses[course].sections[courseSection].added_to_schedule = 0;
					break;
				}
			}
		}
	}

	$scope.recalcWeekdayCounts(term);
}

$scope.recalcWeekdayCounts = function(term) {
	var scheduledCredits = 0.0;
	var scheduledSectionsCount = 0;
	var personalEventsCount = 0;

	for (day in $scope.favorites.weekdays) {
		$scope.favorites.weekdays[day].scheduleCount[term] = 0;
	}

	if ($scope.courses.data) {
		if ($scope.courses.data[term]) {
			for (course in $scope.courses.data[term].courses) {
				for (section in $scope.courses.data[term].courses[course].sections) {
					if ($scope.courses.data[term].courses[course].sections[section].added_to_schedule == 1) {

						if (!$scope.courses.data[term].courses[course].sections[section].isPersonalEvent) {
							scheduledSectionsCount++;
						}
						else {
							personalEventsCount++;
						}
						scheduledCredits += parseFloat($scope.courses.data[term].courses[course].sections[section].unit.formatted);

						if (!$scope.courses.data[term].courses[course].sections[section].times.length) {
							$scope.favorites.weekdays.Uncat.scheduleCount[term]++;
						}
						else {
							for (time in $scope.courses.data[term].courses[course].sections[section].times) {
								for (day in $scope.courses.data[term].courses[course].sections[section].times[time].weekdays) {
									$scope.favorites.weekdays[day].scheduleCount[term]++;
								}
							}
						}
					}
				}
			}
		}
	}

	$scope.favorites.scheduledSectionsCount = scheduledSectionsCount;
	$scope.favorites.personalEventsCount = personalEventsCount;
	$scope.favorites.scheduledCredits = scheduledCredits;
}

sectionsPostRender = function() {
	if ($scope.breakpoint.class != "mobile" && !Modernizr.touch) {
		setTimeout(function() {
			$(".course-actions a[data-toggle='tooltip']").tooltip();
		}, 1);
	}
}

plannerPostRender = function() {
	setTimeout(function() {
		if ($scope.breakpoint.class != "mobile" && !Modernizr.touch) {
			$(".sections-toggle[data-toggle='tooltip'], .details-head-with-hint, .course-actions a[data-toggle='tooltip']").tooltip();
		}

		$("#planner-list").smartscroll(function(e) {
			$scope.planner.scrollX = $(this).scrollLeft();
			$("#favorite-sections-wrapper:visible").css('margin-left', Math.abs($scope.planner.scrollX) * -1);
		}).scroll();

		$("#planner-container").smartscroll(function(e) {
			$scope.planner.scrollY = ($scope.global.betaDesign && $scope.breakpoint.class != "mobile") ? $(this).scrollTop() : 0;
		}).scroll();

		recalcSections($scope.active.Tab);

	}, 1);
}

weekdaysPostRender = function() {
	setTimeout(function() {
		if ($scope.breakpoint.class != "mobile" && !Modernizr.touch) {
			$(".schedule-list-weekday-item-details button[data-toggle='tooltip'], #my-schedule-toggle a[data-toggle='tooltip']").tooltip();
		}
	}, 1);
}

$scope.hideSections = function(term) {
	if ($scope.courses.data[term]) {
		for (course in $scope.courses.data[term].courses) {
			$scope.courses.data[term].courses[course].sectionsShown = 0;
		}
	}
}

$scope.courseModal = function() {
	$('#courseModal').removeData('bs.modal').modal();

	$scope.CWApiReady = 0;
	$scope.CWApiAborted = 0;

	var validLogin = 0;
	if ($scope.userinfo) {
		if ($scope.userinfo.status == 1) {
			validLogin = 1;
		}
	}

	if (validLogin) {
		uni = ($scope.$parent.modalSection.instructors[0].uni) ? $scope.$parent.modalSection.instructors[0].uni : false;
		CWApi.priv($scope.$parent.modalSection.uci, uni).then(function(result) {
			if ($scope.debug == 1) {
				console.log("CW priv (" + $scope.$parent.modalSection.uci + ")", result.data);
			}

			if (result.status == 0) {
				$scope.CWApiAborted = 1;
			}
			else {
				syllabusData = "";
				if (deeptest(result, 'data.syllabus.data.content')) {
					if (iframeSrc = $(result.data.syllabus.data.content).find("iframe").attr("src")) {
//              syllabusData = '<iframe src="http://docs.google.com/viewer?url='+ encodeURIComponent(iframeSrc) +'&embedded=true" width="600" height="780" style="border: none;"></iframe>';
if (iframeSrc.match('.pdf')) {
//                syllabusData = '<div class="iframe-wrapper"><div class="loader three-quarters"></div><iframe id="syllabus-iframe" src="/lib/pdfjs/web/viewer.html?file='+ (iframeSrc) +'" width="600" height="530" style="border: none;"></iframe></div>';
syllabusData = '<p><a href="'+ (iframeSrc) +'" target="_blank"><span class="glyphicon glyphicon-file"></span>View PDF in new window</a></p>';
syllabusData += '<div class="iframe-wrapper"><div class="loader three-quarters"></div><iframe id="syllabus-iframe" src="'+ (iframeSrc) +'" width="600" height="530" style="border: none;"></iframe></div>';
}
else if (iframeSrc.match('.doc')) {
	syllabusData = '<p><a href="'+ (iframeSrc) +'" target="_blank"><span class="glyphicon glyphicon-file"></span>View document in new window</a></p>';
}
else {
	syllabusData = '<p><a href="'+ (iframeSrc) +'" target="_blank"><span class="glyphicon glyphicon-new-window"></span>View in new window</a></p>';
	syllabusData += '<div class="iframe-wrapper"><div class="loader three-quarters"></div><iframe id="syllabus-iframe" src="'+ (iframeSrc) +'" width="600" height="530" style="border: none;"></iframe></div>';
}

$timeout(function() {
	$("#syllabus-iframe").load(function() {
		$(".iframe-wrapper .loader").fadeOut("fast", function() {
			$("#syllabus-iframe").fadeIn("fast");

			/* For modal to calc. height */
			$(window).resize();
		});
	});
}, 0);
}
else {
	syllabusData = result.data.syllabus.data.content;
}

ga('send', 'event', 'Syllabus shown', $scope.$parent.modalSection.uci);
}
else {
	ga('send', 'event', 'Syllabus empty', $scope.$parent.modalSection.uci);
}

$scope.$parent.modalSection.cw = {
	books: (deeptest(result, 'data.books.data')) ? result.data.books.data : "",
	syllabus: syllabusData
};

if (deeptest(result, 'data.books.data.textbooks.0')) {
	ga('send', 'event', 'Textbooks (authenticated) shown', $scope.$parent.modalSection.uci);
}
else {
	ga('send', 'event', 'Textbooks (authenticated) empty', $scope.$parent.modalSection.uci);
}

if (uni) {
	$scope.$parent.modalSection.cw['evaluations'] = (result.data["eval"].data.evaluations) ? result.data["eval"].data.evaluations : false;

	if (result.data["eval"].data.evaluations.reports.length) {
		$scope.$parent.modalSection.cw.evaluationsList = {};

		var evaluations = result.data["eval"].data.evaluations.reports;

		for (evaluation in evaluations) {
			var thisEval = evaluations[evaluation];
			if (thisEval.courseId.indexOf($scope.$parent.modalCourse.course) !== -1) {
				year = (thisEval.courseId.substring(14, 18));
				semester = getSemesterFromIndex(thisEval.courseId.substring(19, 20));
				if (!$scope.$parent.modalSection.cw.evaluationsList[year]) {
					$scope.$parent.modalSection.cw.evaluationsList[year] = {}
				}
				$scope.$parent.modalSection.cw.evaluationsList[year][semester + " " + year] = thisEval.path;
			}
		}

		if ($scope.debug == 1) {
			console.log("evaluations", evaluations);
			console.log("evaluationsList", $scope.$parent.modalSection.cw.evaluationsList);
		}

		ga('send', 'event', 'Evaluation (modal) shown', $scope.$parent.modalSection.uci + " / " + uni);
	}
	else {
		ga('send', 'event', 'Evaluation (modal) empty', $scope.$parent.modalSection.uci + " / " + uni);
	}
}
}
$scope.CWApiReady = 1;

/* For modal to calc. height */
$timeout(function() {
	$(window).resize();
}, 0);

});
	}
	else {
		CWApi.pub($scope.$parent.modalSection.uci).then(function(result) {
			if ($scope.debug == 1) {
				console.log("CW pub (" + $scope.$parent.modalSection.uci + ")", result.data);
			}

			if (deeptest(result, "data.books.data")) {
				$scope.$parent.modalSection.cw = {
					books: result.data.books.data
				};

				ga('send', 'event', 'Textbooks (public) shown', $scope.$parent.modalSection.uci);
			}
			else {
				ga('send', 'event', 'Textbooks (public) empty', $scope.$parent.modalSection.uci);
			}

			$scope.CWApiReady = 1;

			/* For modal to calc. height */
			$timeout(function() {
				$(window).resize();
			}, 0);

		});
	}
};

$scope.modalEvaluations = function(section, course) {
	$scope.$parent.modalSection = section;
	$scope.$parent.modalCourse = course;
	$scope.setActiveModalTab(0);
	$scope.courseModal();
}

$scope.modalSyllabus = function(section, course) {
	$scope.$parent.modalSection = section;
	$scope.$parent.modalCourse = course;
	$scope.setActiveModalTab(1);
	$scope.courseModal();
}

$scope.hideCourseModal = function() {
	$("#courseModal").modal("hide").removeData('bs.modal');
}

$scope.modalBooks = function(section, course) {
	$scope.$parent.modalSection = section;
	$scope.$parent.modalCourse = course;
	$scope.setActiveModalTab(2);
	$scope.courseModal();
}

// $scope.hoverEnterReviewsButton = function(section, course) {
// 	console.log("Ay you HOVERED THO")
// }

// $scope.hoverLeaveReviewsButton = function(section, course) {
// 	console.log("Ay you LEFT THO")
// }

$scope.reviewsButton = function(section, course) {
	$scope.$parent.modalSection = section;
	$scope.$parent.modalCourse = course;
	var profName = $scope.modalSection.instructors[0].name;
	var courseNumber = course.title; 
	console.log("Getting reviews for:", name);

	//testing...
	// name = "Ken Ross"
	// console.log("jk we only have 2 people in our database, getting our boi Ken Ross instead");

	$http({
	    method: 'POST',
	   	url: "http://localhost:3000/api/getReviews", //localhost needs to be changed eventually everywhere in file. Also http -> https after testing everywhere in file
	   	headers: {'Content-Type':'application/json'},
		data: `{"profName": "${profName}", "courseNumber": "${courseNumber}"}`
	}).success(function(data, status) {
	    	console.log(data, "and status is", status)
	    	setReviewModal(data)
	});
}

function avgNums(data, key) {
	vals = [];
	for (var i=0; i<data.length; i++) {
		vals.push(data[i][key]);
	}
	sum = vals.reduce(function(a, b) { return a + b; });
	return Math.floor(sum/vals.length);
}

function avgBool(data, key) {
	truths = 0;
	for (var i=0; i<data.length; i++) {
		if (data[i][key]) { truths += 1; }
	}
	var ans = Math.floor(((truths * 100)/data.length)).toString() + "%"
	return ans;
}

function avgPresence(data, key) {
	count = 0;
	for (var i=0; i<data.length; i++) {
		if (data[i].includes(key)) {
			count += 1;
		}
	}
	var ans = Math.floor(((count * 100)/data.length)).toString() + "%"
	return ans;
}

function groupFactors(data) {
	facts = [];
	for (var i=0; i<data.length; i++) {
		facts.push(data[i]['factors']);
	}
	return facts;
}

function setReviewModal(data){
  	console.log("Review data:", data)
  	$scope.$parent.activeReviews = data;
  	var dataDisplay, header;
  	if (data.length != 0) {
		header = `<div><h1>${$scope.modalSection.instructors[0].name}</h1><h2>${data[0].courseNumber}</h2></div>`
		
		// Template for booleans in future
		// Would ${data[0].professor["take-professor-again"] ? "DEFINITLY" : "DEFINITLY NOT"} take a class with this professor again.<br/>

		results = {};
		factors_results = {};
		disp_numbers = ["hoursPerWeek", "grading", "interesting", "effective", "selfTeach", "organized", "recommendation"];
		disp_bools = ["requirement"];
		disp_factors = [
        	"mandatory recitations",
        	"pop quizzes",
        	"graded in class assignments",
        	"attendance factors into the grade",
        	"participating in class factors into the grade",
        	"high monetary costs to taking class",
        	"class is not curved"
    	]
    	grp_factors = groupFactors(data);
		disp_numbers.forEach(function(key) {
			results[key] = avgNums(data, key);
		})
		disp_bools.forEach(function(key) {
			results[key] = avgBool(data, key);
		})
		disp_factors.forEach(function(key) {
			factors_results[key] = avgPresence(grp_factors, key);
		})
		console.log(factors_results);

		dataDisplay = `<div class="viewingSliderText hours">
							<div>
								<h4 class="question"> Hours Per Week: ${results["hoursPerWeek"]}</h4>
								<input type="range" min="0" max="50" value=${results["hoursPerWeek"]} class="p_rate" disabled><br/>
							</div>
							<div>
								<h4 class="question"> Harshness of Grading: ${results["grading"]}</h4>
								<input type="range" min="0" max="5" value=${results["grading"]} class="p_rate" disabled><br/>
							</div>
							<div>
								<h4 class="question"> Interesting: ${results["interesting"]}</h4>
								<input type="range" min="0" max="5" value=${results["interesting"]} class="p_rate" disabled><br/>
							</div>
							<div>
								<h4 class="question"> Effectiveness: ${results["effective"]}</h4>
								<input type="range" min="0" max="5" value=${results["effective"]} class="p_rate" disabled><br/>
							</div>
							<div>
								<h4 class="question"> Necessary to Self-Teach: ${results["selfTeach"]}</h4>
								<input type="range" min="0" max="5" value=${results["selfTeach"]} class="p_rate" disabled><br/>
							</div>
							<div>
								<h4 class="question"> Organized: ${results["organized"]}</h4>
								<input type="range" min="0" max="5" value=${results["organized"]} class="p_rate" disabled><br/>
							</div>
							<div>
								<h4 class="question"> Would Recommend: ${results["recommendation"]}</h4>
								<input type="range" min="0" max="5" value=${results["recommendation"]} class="p_rate" disabled><br/>
							</div>
							<br>FACTORS<br>`
		
		Object.keys(factors_results).forEach(function(factor) {
			dataDisplay += `${factor}: ${factors_results[factor]} said yes<br>`
		})

		dataDisplay += `</div>`;

//this makes the pretty tags
		modalBody = `
			<div ng-init="review=0" class="showReview">
				<div class="navigator">
					<button ng-disabled="review == 0" ng-click="review = review - 1">&#8249;</button>
					<p class="page-number" ng-bind="review ? review : 'Summary'"></p>
					<button ng-disabled="review == ${data.length}" ng-click="review = review + 1">&#8250;</button>
				</div>
				<div ng-show="review == 0">${dataDisplay}</div>
				<div ng-show="review != 0">

					<div class="row">
						<div class="col-md-6 col-sm-6">
							<h4 class="studentInfoTitle">STUDENT INFO</h4>
							<h4 class="studentInfo">
								School: {{activeReviews[review-1]["personal"]["school"]}}<br/>
								Year: {{activeReviews[review-1]["personal"]["year"]}}<br/>
								Major: {{activeReviews[review-1]["personal"]["major"]}}
							</h4>
							<h4 class="studentInfoTitle">COURSE INFO</h4>
							<h4 class="studentInfo">
								Professor: {{activeReviews[review-1]["professor"]}}<br/>
								{{activeReviews[review-1]["personal"]["semester"]}}
							</h4>
						</div>

						<div class="col-md-6 col-sm-6">
							<div class="tags"><br/>
								<label class="pageTag" ng-repeat="tag in activeReviews[review - 1]['factors']">{{tag}}</label>
							</div>
						</div>
					</div>

					<div class="viewingSliderText hours">
						<div>
							<h4 class="question">Hours Per Week: {{activeReviews[review - 1]["hoursPerWeek"]}}</h4>
							<input type="range" min="0" max="50" ng-model="activeReviews[review - 1]['hoursPerWeek']" class="p_rate" disabled>
						</div>
						
						<div>
							<h4 class="question">Interesting: {{activeReviews[review - 1]["interesting"]}}</h4>
							<input type="range" min="0" max="5" ng-model="activeReviews[review - 1]['interesting']" class="p_rate" disabled>
						</div>

						<div ng-if="activeReviews[review - 1]['whyInteresting'].length > 0">
							<h4 class="question">Why Interesting:</h4>
							<input type="text" value="{{activeReviews[review - 1]['whyInteresting']}}" class="p_rate" readonly>
						</div>

						<div>
							<h4 class="question">Effectiveness: {{activeReviews[review - 1]["effective"]}}</h4>
							<input type="range" min="0" max="5" ng-model="activeReviews[review - 1]['effective']" class="p_rate" disabled>
						</div>

						<div>
							<h4 class="question">Necessary to Self-Teach: {{activeReviews[review - 1]["selfTeach"]}}</h4>
							<input type="range" min="0" max="5" ng-model="activeReviews[review - 1]['selfTeach']" class="p_rate" disabled>
						</div>

						<div>
							<h4 class="question">A-range: {{activeReviews[review - 1]["A-possible"]}}</h4>
							<input type="range" min="0" max="5" ng-model="activeReviews[review - 1]['A-possible']" class="p_rate" disabled>
						</div>

						<div>
							<h4 class="question">Harshness of Grading: {{activeReviews[review - 1]["grading"]}}</h4>
							<input type="range" min="0" max="5" ng-model="activeReviews[review - 1]['grading']" class="p_rate" disabled>
						</div>
						
						<div>
							<h4 class="question">Organized: {{activeReviews[review - 1]["organized"]}}</h4>
							<input type="range" min="0" max="5" ng-model="activeReviews[review - 1]['organized']" class="p_rate" disabled>
						</div>
						
						<div>
							<h4 class="question">Would Recommend: {{activeReviews[review - 1]["recommendation"]}}</h4>
							<input type="range" min="0" max="5" ng-model="activeReviews[review - 1]['recommendation']" class="p_rate" disabled>
						</div>
						
						<div ng-if="activeReviews[review - 1]['explain_recommendation'].length > 0">
							<h4 class="question">Explain Recommendation:</h4>
							<input type="text" value="{{activeReviews[review - 1]['explain_recommendation']}}" class="p_rate" readonly>
						</div>
					</div>
				</div>`		

		modalBody +=
				`	<div class="navigator">
						<button ng-disabled="review == 0" ng-click="review = review - 1">&#8249;</button>
						<p class="page-number" ng-bind="review ? review : 'Summary'"></p>
						<button ng-disabled="review == ${data.length}" ng-click="review = review + 1">&#8250;</button>
					</div>
				</div>
				`

		// dataDisplay = 
	 //  		`<h4> Professor Effective: ${data[0].effective}<br/>
		// 	Professor Grading: ${data[0].grading}<br/>
		// 	Hours Per Week: ${data[0].hoursPerWeek}<br/>
	 //  		This professor is: ${data[0].factors}</h4>`;
	  	
	} else { // inform user that no review data currently exists
		var courseNum = $scope.modalSection.subtitle;
		var instructor = $scope.modalSection.instructors[0].name;
		header = `<div><h1>${instructor}</h1><h2>${courseNum}</h2></div>`
		datas = "No data for " + instructor + " teaching " + courseNum;
		modalBody = "<h4> No data has been submitted for " + instructor + " teaching " + courseNum + ".<br>Please contribute by reviewing this class!<br>"
	}

	$scope.modalChange(header, modalBody);
	$('#myModal').modal('show');
}

$scope.submitReviewsButton = function(section, course) {
	$scope.$parent.modalSection = section;
	$scope.$parent.modalCourse = course;

	var header = `<div class="review-modal-header">
					<p>${$scope.modalSection.instructors[0].name}</p>
					<p>${course.title}</p>
				</div>`;

	var submissionForm = `<form ng-submit="submitForm(\'${section.instructors[0].name}\', \'${course.title}\');">`;

	var radioButtons = function(options, name){
		submissionForm += `<div id="${name}">`
		options.forEach(function(value){
			submissionForm += `<label class="radioDiv"> ${value}<input type="radio" value="${value}" name="${name}"checked="checked"/><span class="radioSpan"></span></label><br>`
		})
		submissionForm += `</div>`
	}

	var questionTitle = function(question, required){
		if(required){
			submissionForm += `<div class="hours"><h4>${question}<span class="star">*</span></h4></div>`
		} else {
			submissionForm += `<div class="hours"><h4>${question}</h4></div>`
		}
	}

	var slider = function(options, idName){
		// options[parseInt($("#"+idName).prop("value"))]
		console.log($("#" + idName));
		console.log()

		if (window.sliderOptions === undefined) window.sliderOptions = {}
		window.sliderOptions[idName] = options;

		submissionForm += `<br/><div><output class="sliderOutput" id="${idName}Out">${options[2]}</output></div>`
		submissionForm += `<div class="hours">
								<input type="range" 
										min="0" max="4" 
										value="2" 
										class="hours" 
										id="${idName}" 
										oninput="${idName}Out.value = window.sliderOptions['${idName}'][${idName}.value]">
								<br>
							</div>`
		/* submissionForm += `<input type="range" min="0" max="4" value="2" class="slider" id="${idName}" oninput="${idName}Out.value = ${options[${idName}.value")]}"><br>` */
	}

	var textbox = function(placeHolder, idName, text = "") {
		submissionForm += `<div id="${idName}"><textarea placeholder="${placeHolder}">${text}</textarea></div>`
	}


	questionTitle("What year are you?", true)
	radioButtons(["freshman", "sophomore", "junior", "senior"], 'yearQ')

	questionTitle("What school are you?", true)
	radioButtons(["CC", "SEAS", "Barnard", "GS", "Graduate"], 'schoolQ')

	questionTitle("What major are you?", true)
	textbox("Enter major here", "majorEntry")

	questionTitle("What is your second major or concentration, if any?", false)
	textbox("Enter second major/concentration here", "secondMajor")

	questionTitle("What professor did you have?", true)
	textbox("", "professorName", $scope.modalSection.instructors[0].name, )

	questionTitle("What semester did you take this course?", true)
	radioButtons(["Fall 2015", "Spring 2016", "Fall 2016", "Spring 2017", "Fall 2017", "Spring 2018", "Fall 2018"], 'semesterQ')

	questionTitle("On average, how many hours per week do you devote to this course?", true)
	submissionForm += `<div id="hoursPerWeek"><input type="number"
		placeholder="0" 
		step="1" 
		min="0" 
		max="50"/>
	<label >hours per week</label></div>`	

	questionTitle("How harsh, fair, or lenient was the grading for your class?", true)
	slider(prof_rate, "prof_rating")

	questionTitle("Overall, I found this class interesting, enjoyable, or useful enough to justify the amount of effort this class required.", true)
	slider(disToAgree, "interest_class")

	questionTitle("What made this class interesting or uninteresting to you?", false)
	textbox("", "whyInteresting")

	questionTitle("I am satisfied with how effective this professor was at teaching, being clear, answering questions, and explaining concepts.", true)
	slider(disToAgree, "good_teacher")

	questionTitle("I did not need to self-teach material in order to do assignments/exams because the lectures were adequate.", true)
	slider(disToAgree, "self_teaching")

	questionTitle("It is possible to get an A-range grade without attending most lectures.", true)
	slider(disToAgree, "easy_a")

	questionTitle("How organized and structured is the professor, the curriculum, and the class overall?", true)
	slider(["Very disorganized", "Somewhat disorganized", "Average", "Somewhat organized", "Very Organized"], "organizational_skills")

	questionTitle("I would recommend my particular professor for this course.", true)
	slider(disToAgree, "recommend_prof")

	questionTitle("Please explain further", false)
	textbox("", "recommendProfText")

	questionTitle("Please check off all the factors that apply to this class", false)

	const tags = ["Mandatory Recitations",
		"Pop Quizzes",
		"Graded In-class Assignments",
		"Attendance Factors Into The Grade",
		"Participating In Class Factors Into The Grade",
		"High Monetary Costs To Taking Class",
		"Class Is Not Curved"];

	submissionForm += `<div class="tags" id="tagChoices">`
	for (var i = 0; i < tags.length; i++) {
		submissionForm += "<input type=\"checkbox\" value=\""+tags[i]+"\" id=\""+tags[i]+"\"><label for=\""+tags[i]+"\"> "+tags[i]+"</label>"
	}
	submissionForm += `</div>`

	//submissionForm += `</div>`
	// submissionForm += `<br/><input class="btn btn-lg btn-submit" type="submit" value="Submit" ng-click="submitForm(\'${section.instructors[0].name}\', \'${course.title}\')"></form></div>`
	submissionForm += `<br/><input class="btn btn-lg btn-submit" type="submit" value="Submit"></form></div>`

	var footer = `<div><p><a ng-click="moreInfoClicked(\'${section.instructors[0].name}\', \'${course.title}\')">More information</a></p></div>`

	$scope.modalChange(header, `<div class="submissionForm">${submissionForm}</div>`, footer);
	$('#myModal').modal('show');
}

});



app.controller("searchresults", function($scope, $location, $http, $filter, $timeout, UserFavorites, CWApi, CWFeeds) {
	var formListener = $scope.$watch('form', $scope.processContextualCourses, true);
	var coursesDataListener = $scope.$watch('courses.data', $scope.processContextualCourses);
	var formCheckboxesListener = $scope.$watchCollection('formCheckboxes', $scope.processContextualCourses);

	var searchresultsDestroy = $scope.$on('$destroy', function() {
		formListener();
		coursesDataListener();
		formCheckboxesListener();
		searchresultsDestroy();
	});
});


app.controller("myplanner", function($scope, $location, $http, $timeout, Variables, UserInfo, UserFavorites) {
	$scope.favoritesTerms = {};
	$scope.favoritesTimes = ["7am", "8am", "9am", "10am", "11am", "Noon", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm"];
	$scope.plannerReady = 0;
	$scope.hintReqData = {};
	$scope.plannerMessageShown = 1;
	$scope.activeWDay = 0;
	$scope.scheduleFocus = 0;

	var sectionsZIndex = 0;
	var UserFavoritesAll;
	var docClasses = [];

	UserInfo.getVars().then(function(result) {
		if (result) {
			$scope.userinfo = result;

			if ($scope.userinfo.status == -1) {
				setTimeout(function() {
					$scope.global.message = '<p>Must be logged in to see My Planner.</p>';
					$scope.global.messageShown = 1;

					document.location.hash = '/';
				}, 0);
			}
		}
	});

	/* Show My Planner / "All Classes" on load */
	$scope.myPlannerToggle(true);

	$scope.plannerMessageToggle = function() {
		$scope.plannerMessageShown = ($scope.plannerMessageShown == 1) ? 0 : 1;
	}

	$scope.inspectWDay = function(wday) {
		if ($scope.activeWDay == wday) {
			wday = 0;
		}

		/* reset any hanging schedule focus */
		$scope.scheduleFocus = 0;

		$scope.activeWDay = wday;

		$timeout(function() {
			$(".schedule-list-weekday:not([data-weekday="+ wday +"]) .my-schedule-item .inner").each(function() {
				$(this).css({
					"top": 0
				});
			});

			$(".schedule-list-weekday[data-weekday="+ wday +"] .my-schedule-item .inner").each(function(index) {
				var parentTopOffset = $(this).parent().position().top;
				$(this).css({
					"top": (index+1) * 40 - parentTopOffset + 19
				});
			});
		}, 0);
	}

	$scope.showFavoriteSections = function(section, term, docPattern, state) {
		if ($scope.debug == 1) {
			console.log("section, term, docPattern, state", section, term, docPattern, state);
		}

		var sectionsShown = $scope.courses.data[term].courses[docPattern].sectionsShown;
		sectionsShown = (state) ? 0 : section.uci;

		if ($scope.breakpoint.class == "mobile") {
			var togglePosition = $("#planner-list #sections-toggle-" + section.uci).offset();
			if (state == 0) {
				$scope.hideSections($scope.active.Tab);
			}
		}
		else {
			var togglePosition = $("#planner-all-classes #sections-toggle-" + section.uci).offset();
		}

		/* set uci to track last favorite */
		var sectionsTopOffset = ($scope.breakpoint.class == "mobile") ? $("#planner-list-wrapper").offset().top : $("#planner-container").offset().top;

		$("#favorite-sections-doc-pattern-" + term + "-" + docPattern).css({
			top: togglePosition.top - sectionsTopOffset + $scope.planner.scrollY,
			left: togglePosition.left - 12 + $scope.planner.scrollX,
			zIndex: 1000 + sectionsZIndex
		}).attr("data-uci", section.uci);

		if (sectionsShown) {
			$scope.courses.data[term].courses[docPattern].sectionsShown = sectionsShown;
		}
		else {
			/* same docPattern as currently shown with different section */
			if (section.uci != state) {
				$scope.courses.data[term].courses[docPattern].sectionsShown = section.uci;
			}
			else {
				$scope.courses.data[term].courses[docPattern].sectionsShown = sectionsShown;
			}
		}
		sectionsZIndex++;
	}

	recalcSections = function(term) {
		if ($scope.courses.data) {
			if ($scope.courses.data[term]) {
				for (course in $scope.courses.data[term].courses) {
					if ($scope.courses.data[term].courses[course].sectionsShown) {
						var uci = $("#favorite-sections-doc-pattern-" + term + "-" + course).attr("data-uci");
						var togglePosition = $("#sections-toggle-" + uci + ":visible").offset();

						if (togglePosition) {
							var sectionsTopOffset = ($scope.breakpoint.class == "mobile") ? $("#planner-list-wrapper").offset().top : $("#planner-container").offset().top;

							$("#favorite-sections-doc-pattern-" + term + "-" + course).css({
								top: togglePosition.top - sectionsTopOffset + $scope.planner.scrollY,
								left: togglePosition.left - 12 + $scope.planner.scrollX
							});
						}
					}
				}
			}
		}
	}

	$scope.scheduleFocusChange = function(uci, weekday) {
		if (uci == 0 || $scope.activeWDay == 0 || $scope.activeWDay == weekday) {
			$scope.scheduleFocus = uci;
		}
	}

	$scope.weekdayNotEmpty = function(day, term) {
		if ($scope.favorites.weekdays[day].scheduleCount[term] > 0) {
			return true;
		}
	}

	UserFavoritesAll = UserFavorites.all($scope.global.userFavoritesAllExpired);
	$scope.global.userFavoritesAllExpired = false;

	$('#personal-events-time').noUiSlider({
		start: sliderTimesStart,
		step: 0.5,
		range: {
			'min': sliderTimesStart[0],
			'max': sliderTimesStart[1]
		},
		serialization: {
			lower: [ toolTipTime30 ],
			upper: [ toolTipTime30 ]
		},
		connect: true
	});

	$scope.addPersonalEventModal = function() {
		$("#personalEventsModal").removeData('bs.modal').modal();

		/* For modal to calc. height */
		$timeout(function() {
			$(window).resize();
		}, 0);

		$("#add-personal-event").tooltip('destroy').removeAttr("data-toggle");
	}
	$scope.savePersonalEvent = function() {
		var times = $('#personal-events-time').val();
		var event = {
			'title': $scope.personalEventsTitle,
			'day': $scope.personalEventsWeekday,
			'start_time': pad(times[0].replace(".50", ".30").replace(".", ""), 4),
			'end_time': pad(times[1].replace(".50", ".30").replace(".", ""), 4),
			'term_year': $scope.active.Tab
		};

		if ($scope.debug == 1) {
			console.log("savePersonalEvent()", event);
		}

		UserFavoritesEventsCreate = UserFavorites.eventsCreate(event);
		$scope.global.userFavoritesAllExpired = true;

		UserFavoritesEventsCreate.then(function(result) {
			if (result.data) {
				event.event_id = result.data.event_id;

				$scope.eventPreRender(event);
				$scope.recalcWeekdayCounts($scope.active.Tab);
				setTimeout(function() {
					recalcScheduleItems();
				}, 200);

				if ($scope.debug == 1) {
					console.log("personalEvents", $scope.courses.data[event.term_year].courses['personalEvents']);
				}

				ga('send', 'event', 'Personal Event created', $scope.personalEventsTitle);
			}
		});

		$("#personalEventsModal").modal("hide");

		/* Reset modal fields */
		$("#personal-events-title").val('');
		$("#personal-events-weekday").val('').trigger("chosen:updated");
		$('#personal-events-time').val(sliderTimesStart);
	}

	$scope.exportIcs = function() {
		var events = [];

		$("#export-to-calendar").tooltip('destroy').removeAttr("data-toggle");

		for (course in $scope.courses.data[$scope.active.Tab].courses) {
			var thisCourse = $scope.courses.data[$scope.active.Tab].courses[course];
			for (section in $scope.courses.data[$scope.active.Tab].courses[course].sections) {
				var thisSection = $scope.courses.data[$scope.active.Tab].courses[course].sections[section];
				if (thisSection.added_to_schedule == 1 && !thisSection.isPersonalEvent) {
					if (thisSection.times[0]) {
						for (weekday in thisSection.times[0].weekdays) {
							data = {
								'eventId': thisSection.uci,
								'title': thisCourse.title,
								'description': thisSection.description,
								'startTime': String(thisSection.times[0].mTimeFrom) + "00",
								'endTime': String(thisSection.times[0].mTimeTo) + "00",
								'location': thisSection.times[0].location,
								'dayOfWeek': $scope.favorites.weekdays[weekday].unit
							};
							events.push(data);
						}
					}
				}
			}
		}
		if (events.length) {
			$icsExport = $().vergilics({'events': events});
			$icsExport.vergilics.download();

			ga('send', 'event', 'Export to Calendar', $scope.active.Tab);
		}
	}

	$scope.exportGcal = function() {
		$scope.modalChange(
			"Calendar List",
			"<div class='dropdown'><select class='calList'></select></div>",
			`
			<div ng-init="clicked = false">
				<button type="button" class="btn btn-default" ng-show="!clicked" ng-click="gcal.callback(); clicked = true">Submit</button>
				<button class="btn btn-success" ng-show="clicked">Success!</button>
			</div>
			`
		);
		var events = [];
		var CLIENT_ID= "685293451899-jv0dpc73t9rcgjsic0orv459sungpf6f.apps.googleusercontent.com"
		var API_KEY = "AIzaSyB1W0eqGjeUiWZjCyk0_wn5LoUPRLWJs-s";
		var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
		var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

		$("#export-to-calendar").tooltip('destroy').removeAttr("data-toggle");

		for (course in $scope.courses.data[$scope.active.Tab].courses) {
			var thisCourse = $scope.courses.data[$scope.active.Tab].courses[course];
			for (section in $scope.courses.data[$scope.active.Tab].courses[course].sections) {
				var thisSection = $scope.courses.data[$scope.active.Tab].courses[course].sections[section];
				if (thisSection.added_to_schedule == 1 && !thisSection.isPersonalEvent) {
					if (thisSection.times[0]) {
						for (weekday in thisSection.times[0].weekdays) {
							data = {
								'eventId': thisSection.uci,
								'title': thisCourse.title,
								'description': thisSection.description,
								'startTime': String(thisSection.times[0].mTimeFrom) + "00",
								'endTime': String(thisSection.times[0].mTimeTo) + "00",
								'location': thisSection.times[0].location,
								'dayOfWeek': $scope.favorites.weekdays[weekday].unit
							};
							events.push(data);
						}
					}
				}
			}
		}
		if (events.length) {
			$icsExport = $().vergilgcal({'events': events});
			//$icsExport.vergilics.download();

			ga('send', 'event', 'Export to Google Calendars', $scope.active.Tab);
		}
	}

	$scope.pushToSSOL = function() {
		ga('send', 'event', 'Push to SSOL', $scope.active.Tab);
	}

	$scope.eventPreRender = function(thisEvent) {
		function mTimeto12(value) {
			if (value < 1200) {
				value = String(value);
				var position = value.length - 2;
				value = value.substr(0, position) + ":" + value.substr(position) + "am";
			}
			else {
				if (value > 1200) {
					value -= 1200;
				}
				value = String(value);
				var position = value.length - 2;
				value = value.substr(0, position) + ":" + value.substr(position) + "pm";
			}

			return value;
		}

		var wday = Object.keys($scope.favorites.weekdays)[thisEvent.day];

		if (!$scope.courses.data[thisEvent.term_year].courses['personalEvents']) {
			$scope.courses.data[thisEvent.term_year].courses['personalEvents'] = {
				sections: {}
			}
		}

		$scope.courses.data[thisEvent.term_year].courses['personalEvents'].sections[thisEvent.event_id] = {
			title: thisEvent.title,
			section: thisEvent.event_id,
			Favorite: true,
			isPersonalEvent: true,
			unit: { formatted: 0 },
			added_to_schedule: 0,
			uci: 'personal_event_'+ thisEvent.event_id,
			times: [{
				mTimeFrom: thisEvent.start_time,
				mTimeTo: thisEvent.end_time,
				weekdays: {}
			}]
		};
		$scope.courses.data[thisEvent.term_year].courses['personalEvents'].sections[thisEvent.event_id].times[0].weekdays[wday] = true;
		$scope.courses.data[thisEvent.term_year].courses['personalEvents'].sections[thisEvent.event_id].times[0].weekdayDisplay = $scope.favorites.weekdays[wday].label;

		$scope.courses.data[thisEvent.term_year].courses['personalEvents'].sections[thisEvent.event_id].times[0].time = mTimeto12(thisEvent.start_time) + " - " + mTimeto12(thisEvent.end_time);

		/* delay to allow for animation */
		$scope.courses.data[thisEvent.term_year].courses['personalEvents'].sections[thisEvent.event_id].added_to_schedule = (thisEvent.added_to_schedule) ? thisEvent.added_to_schedule : 1;
		setTimeout(function() {
			$scope.recalcWeekdayCounts(thisEvent.term_year);
		}, 1);

	}

	UserFavoritesAll.then(function(result) {
		if (result.data) {
			$scope.favorites.events = result.data.events;
			$scope.favorites.data = result.data.classes;

			var i = 0;
			for (term in $scope.favorites.data) {
				if ($.inArray(term, $scope.global.currentTerms) != -1) { /* Exclude favorites from non-current terms */
					for (course in $scope.favorites.data[term]) {
						if ($.type($scope.favorites.data[term][course]) == "object") {
							var uci = $scope.favorites.data[term][course].class_id;

							/* Special: X = Barnard */
							var pattern = uci.substring(0, 4) + uci.substring(4, 5).replace("X", "BC") + uci.substring(5, 9);
							docClasses[i] = uci;

							$scope.favorites.data[term][course].docPattern = pattern;
							$scope.favorites.data[term][course].section = uci.substring(10, 13);
							$scope.favorites.data[term][course].Favorite = true;
							$scope.favorites.data[term][course].added_to_schedule = $scope.favorites.data[term][course].added_to_schedule;
							i++;
						}
					}
				}
			}

			var params = {
				"key": docClasses.join("|"),
				"moreresults": 2
			};

			$http({
				"method": "GET",
				"url": "doc-adv-queries.php",
				"params": params
			})
			.success(function(data, status, headers, config) {
				var hintReqClasses = [];

				$scope.courses.data = $scope.processCoursesData(data);

				/* Determine Term Tabs */
				Variables.getVars().then(function(result2) {
					$scope.global.variables = result2;
					var term;

					for (i in $scope.global.currentTerms) {
						term = $scope.global.currentTerms[i];
						$scope.favoritesTerms[term] = {
							value: term,
							label: getSemesterFromTermYear(term) + " " + term.substring(0, 4),
							labelCompact: getSemesterFromTermYear(term) + " '" + term.substring(2, 4)
						};

						if (!$scope.courses.data[term]) {
							$scope.courses.data[term] = $scope.initYear(term);
						}
					}

					keys = Object.keys($scope.favoritesTerms);
					keys.sort();

					for (i = 0; i < keys.length; i++) {
						$scope.favoritesTerms[keys[i]].index = i;
					}


					$scope.favoritesTermsCount = i;

					/* set active tab based on URL or current state */
					path = $location.path();
					if (param = path.split("/")[2]) {
						$scope.active.Tab = param;

						if ($scope.favoritesTerms[param]) {
							$scope.$parent.setActiveTab(param);
							$scope.$parent.setActiveTabIndex($scope.favoritesTerms[param].index);
						}
						else { /* If term provided is out-of-range, redirect to default term */
							setTimeout(function() {
								$scope.global.message = '<p>Incorrect semester provided.</p>';
								$scope.global.messageShown = 1;

								document.location.hash = '/';
							}, 0);
						}
					}
					else if ($scope.active.Tab == 0) {
						if ($scope.favoritesTerms[$scope.global.variables.current_term_year]) {
							$scope.$parent.setActiveTab($scope.global.variables.current_term_year);
							$scope.$parent.setActiveTabIndex($scope.favoritesTerms[$scope.global.variables.current_term_year].index);
						}
						else {
							if (term) {
								$scope.$parent.setActiveTab(term);
							}
							$scope.$parent.setActiveTabIndex(i);
						}
					}
					else {
						$scope.$parent.setActiveTab($scope.active.Tab); /* Force redraw */
						$scope.$parent.setActiveTabIndex($scope.favoritesTerms[$scope.active.Tab].index);
					}

					/* Hide My Planner if classes have been added to schedule */
          /*
          if (result.data.classes[$scope.active.Tab]) {
            for (course in result.data.classes[$scope.active.Tab]) {
              if (result.data.classes[$scope.active.Tab][course].added_to_schedule == 1) {
                $scope.global.myPlannerShown = false;
                break;
              }
            }
          }
          */

          if ($scope.favorites.events) {
          	for (term in $scope.favorites.events) {
          		if (!$scope.courses.data[term]) {
          			$scope.courses.data[term] = $scope.initYear(term);
          		}

          		$scope.courses.data[term].courses['personalEvents'] = { sections: {} };

          		for (item in $scope.favorites.events[term]) {
          			var event = $scope.favorites.events[term][item];
          			event.event_id = item;

          			$scope.eventPreRender(event);
          		}

          		if ($scope.debug == 1) {
          			console.log("personalEvents", $scope.courses.data[term].courses['personalEvents']);
          		}
          	}
          }

          for (term in $scope.courses.data) {
          	$scope.courses.data[term].sectionsShown = 1;

          	for (course in $scope.courses.data[term].courses) {
          		$scope.courses.data[term].courses[course].sectionsShown = 0;

          		for (section in $scope.courses.data[term].courses[course].sections) {
          			var thisSection = $scope.courses.data[term].courses[course].sections[section];
          			if ($scope.favorites.data[term]) {
          				if ($scope.favorites.data[term][thisSection.uci]) {
          					$scope.courses.data[term].courses[course].sections[section].added_to_schedule = $scope.favorites.data[term][thisSection.uci].added_to_schedule;
          					$scope.courses.data[term].courses[course].Favorite = true;
          				}
          			}
          			if (term == $scope.global.variables.current_term_year) {
          				hintReqClasses[hintReqClasses.length] = thisSection.uci;
          			}
          		}
          	}
          }

          /* For current term, check for Hints */
          if (hintReqClasses.length) {
          	hintReqMultiple = UserFavorites.hint({'classes': hintReqClasses});

          	hintReqMultiple.then(function(result) {
          		if (result) {
          			if (result.status == 1) { /* SSOL Hints working */
          				for (item in result.data) {
          					for (thisCourse in result.data[item]) {
          						var hint = result.data[item][thisCourse];
          						if (hint != "Open") {
          							for (key in $scope.global.filters.hint_messages) {
          								if ($scope.global.filters.hint_messages[key].value == hint.toLowerCase()) {
          									$scope.hintReqData[thisCourse] = $scope.global.filters.hint_messages[key].label;
          									break;
          								}
          							}
          						}
          					}
          				}

          				if ($scope.breakpoint.class != "mobile" && !Modernizr.touch) {
          					setTimeout(function() {
          						$(".details-head-with-hint").tooltip();
          					}, 1);
          				}
          			}
          		}
          	});
          }

          setTimeout(function() {
          	$scope.recalcWeekdayCounts($scope.active.Tab);
          }, 1);

      });

recalcScheduleItems = function() {
	setTimeout(function() {
		var wdays = {};
		var tableBodyTargetTop = ($(".my-schedule:visible:eq(0) .table-body").length) ? $(".my-schedule:visible:eq(0) .table-body").position().top : 0;

		$scheduleTable = $(".schedule-table:visible:eq(0)");

		$(".my-schedule-item").each(function() {
			var wday = $(this).parents(".schedule-list-weekday:eq(0)").attr("data-weekday");
			if (wdays[wday] == undefined) {
				wdays[wday] = 0;
			}
			else {
				wdays[wday] += 1;
			}
			var $parent = $(this).parents(".schedule-list-weekday:eq(0)");
			var $tableTarget = $(".my-schedule:visible:eq(0) .wday:eq("+ (parseInt(wday) - 1) +")");

			if ($tableTarget.position()) {
				var dataFrom = $(this).attr("data-time-from");
				var dataTo = $(this).attr("data-time-to");

				var fromMinutes = parseInt(dataFrom.slice(0, 2)) * 60 + parseInt(dataFrom.slice(2, 4));
				var toMinutes = parseInt(dataTo.slice(0, 2)) * 60 + parseInt(dataTo.slice(2, 4));

				var posTop = tableBodyTargetTop + 20 + (fromMinutes - 420) / 60 * 40; /* 420 = minutes offset from 7:00 */

				var posLeft = $tableTarget.position().left + wdays[wday] * 5;

				var itemWidth = $tableTarget.width() - wdays[wday] * 5
				if (!$scope.global.betaDesign) {
					itemWidth -= 3;
				}

				if ($scope.breakpoint.class == "mobile" || $scope.breakpoint.class == "break768") {
					posLeft += $scope.planner.scheduleScrollX;
				}

				var itemHeight = ((toMinutes - fromMinutes) / 60 * 40) - 1;
				var newPosition = {
					top: posTop,
					left: posLeft,
					height: itemHeight,
					width: itemWidth
				};

				$(this).css(newPosition).addClass("ready");
			}
		});

		var tableHeight = $scheduleTable.height();
		if ($scope.global.betaDesign) {
			$("#planner-container").css("height", tableHeight - 50);
		}
		else {
			$(".schedule-list:visible:eq(0)").css("height", tableHeight);
		}

	}, 1);
}

if ($scope.courses.data[$scope.active.Tab]) {
	$scope.setActiveTab($scope.active.Tab);
	$scope.setActiveTabIndex($scope.courses.data[$scope.active.Tab].index);
}
else {

}

$scope.plannerReady = 1;
$scope.global.rendered.planner = 1;

$(window).smartresize(function(){
	recalcScheduleItems();
	setTimeout(function() {
		recalcSections($scope.active.Tab);
	}, 200);
}).resize();

$(".my-schedule-inner").scroll(function(){
	$scope.planner.scheduleScrollX = $(this).scrollLeft();

	recalcScheduleItems();
	setTimeout(function() {
		recalcSections($scope.active.Tab);
	}, 200);
});

var progressMessages = [
'Step 1. Add classes to your favorites.',
'Step 2. Move classes to your schedule.',
'Step 3. After finalizing your schedule, complete your registration on SSOL.'
];
$scope.$watchGroup(['favorites.favoritesCount', 'favorites.scheduledSectionsCount', 'active.Tab'], function() {
	if ($scope.favorites.favoritesCount[$scope.active.Tab] == 0) {
		$scope.favorites.progressStep = 1;
		$scope.favorites.progressPct = 30;
	}
	else if ($scope.favorites.favoritesCount[$scope.active.Tab] > 0 && $scope.favorites.scheduledSectionsCount == 0) {
		$scope.favorites.progressStep = 2;
		$scope.favorites.progressPct = 50;
	}
	else {
		$scope.favorites.progressStep = 3;
		$scope.favorites.progressPct = 100;
	}
	$scope.favorites.progressMessage = progressMessages[$scope.favorites.progressStep-1];
});

$scope.$on('$destroy', function() {
	$(window).off("resize.sr");
	$(".my-schedule-inner, #planner-list, #planner-container").off("scroll");
	delete UserFavoritesAll;
	delete $scope.courses.data;
});

if ($scope.debug == 1) {
	console.log("$scope.courses.data (from planner)", $scope.courses.data);
	console.log("favorites", $scope.favorites.data);
}
});

}
else if (result == -1) {
	user = ($scope.userinfo.data.first_name) ? $scope.userinfo.data.first_name : $scope.userinfo.data.uni;
	$scope.global.message = '<p>Sorry, '+ user +', there was a problem retrieving your favorites.</p><p><strong>Please reload</strong> Vergil.</p><p><a href="mailto:ias-service@columbia.edu?subject=Vergil problem retrieving favorites">Contact us</a> if this issue persists.</p>';
	$scope.global.messageShown = 1;

	document.location.hash = '/';
}
});
});

app.controller("evaluations", function($scope, $location, $http, CWFeeds, CWApi, UserInfo) {
	$scope.teachers = {};
	$scope.CWEvalApiReady = 0;
	$scope.CWEvalApiAborted = 0;

	UserInfo.getVars().then(function(result) {
		if (result) {
			$scope.userinfo = result;

			if ($scope.userinfo.status == -1) {
				setTimeout(function() {
					$scope.global.message = '<p>Must be logged in to see Evaluations.</p>';
					$scope.global.messageShown = 1;

					document.location.hash = '/';
				}, 0);
			}
		}
	});

	$scope.searchForClasses = function() {
		$scope.form.search = $scope.global.instructorName;
		$scope.basicFiltersToggle(1);

		if ($scope.global.instructor) { /* if UNI is available */
			var newLocation = '#/courses/' + $scope.global.instructor;
		}
		else {
			var newLocation = '#/courses/' + encodeURIComponent($scope.global.instructorName.replace(".", "").replace(/\s[a-zA-Z]\s/g, " "));
		}

		if ($scope.debug == 1) {
			newLocation += "?debug=1";
		}

		/* Reset course data */
		$scope.courses = {}
		document.location.hash = newLocation;
	}

	CWFeeds.getVars().then(function(result) {
		$scope.teachers = result.eval_instructors;

		updateTeacher = function() {
			$scope.CWEvalApiReady = 0;
			$scope.CWEvalApiAborted = 0;

			/* retrieve full name */
			if ($scope.global.instructor) {
				for (teacher in result.eval_instructors) {
					if (result.eval_instructors[teacher].uni == $scope.global.instructor) {
						$scope.global.instructorName = result.eval_instructors[teacher].name;
						break;
					}
				}
			}

			uni = $scope.global.instructor;
			CWApi.evaluation(uni).then(function(result) {
				if (result.status == 0) {
					$scope.CWEvalApiAborted = 1;
					$scope.CWEvalApiReady = 1;
				}
				else {
					if ($scope.debug == 1) {
						console.log("CW eval (" + uni + ")", result.data);
					}

					var check;
					if (check = deeptest(result, 'data.eval.data.evaluations.reports')) {
						check = Object.keys(check).length;
					}

					if (check) {
						$scope.evaluations = (result.data["eval"].data.evaluations) ? result.data["eval"].data.evaluations : false;

						$scope.evaluationsList = {};

						var evaluations = result.data["eval"].data.evaluations.reports;
						for (evaluation in evaluations) {
							var thisEval = evaluations[evaluation];
							year = (thisEval.courseId.substring(14, 18));
							semester = getSemesterFromIndex(thisEval.courseId.substring(19, 20));

              // INAFU8882_001
              course = thisEval.courseId.substring(0, 9);
              if (!$scope.evaluationsList[course]) {
              	$scope.evaluationsList[course] = { years: {} }
              }
              if (!$scope.evaluationsList[course].years[year]) {
              	$scope.evaluationsList[course].years[year] = {}
              }
              if (!$scope.evaluationsList[course].years[year][semester + " " + year]) {
              	$scope.evaluationsList[course].years[year][semester + " " + year] = []
              }
              $scope.evaluationsList[course].years[year][semester + " " + year].push(thisEval.path);
          }

          /* lookup course information */
          var courses = [];
          for (course in $scope.evaluationsList) {
          	courses[courses.length] = course;
          }

          var params = {
          	"key": courses.join("|"),
          	"moreresults": 2
          };

          $http({
          	"method": "GET",
          	"url": "doc-adv-queries.php",
          	"params": params
          })
          .success(function(data, status, headers, config) {
          	$scope.courses.data = $scope.processCoursesData(data);

          	for (course in $scope.evaluationsList) {
          		for (term in $scope.courses.data) {
          			if ($scope.courses.data[term].courses[course]) {
          				$scope.evaluationsList[course].courseData = $scope.courses.data[term].courses[course];
          				break;
          			}
          		}
          	}

          	if ($scope.debug == 1) {
          		console.log("evaluations", evaluations);
          		console.log("evaluationsList", $scope.evaluationsList);
          	}

          	$scope.CWEvalApiReady = 1;

          });

          ga('send', 'event', 'Evaluation (page) shown', uni);
      }
      else {
      	ga('send', 'event', 'Evaluation (page) empty', uni);

      	$scope.CWEvalApiReady = 1;
      }
  }
});
		}
		updateTeacher();

		$scope.$on('$locationChangeStart', function() {
			if ($scope.currentPage == "evaluations") {
				updateTeacher();
			}
		});

		$scope.$on('$destroy', function() {
			$scope.courses = {};
		});
	});
});


app.controller("teacherwidget", function($scope, CWFeeds) {
	$scope.teachers = {};
	$scope.teachersDataReady = 0;

	CWFeeds.getVars().then(function(result) {
		$scope.teachers = result.eval_instructors;
		$scope.teachersDataReady = 1;
	});

	$scope.toggleTeacherPopup = function(state) {
		var newState = (state) ? state : !$scope.global.teacherPopupShown;
		$scope.clearMenuDropdowns();

		$scope.global.teacherPopupShown = newState;
		$scope.global.menuDropdownVisible = newState;
		$("body").toggleClass("content-defocus", newState);
	}
});


app.controller("progwidget", function($scope, $http, $timeout) {
	$scope.programInfo = "";

	if ($scope.breakpoint.class != "mobile" && !Modernizr.touch) {
		$("#progwidget button[data-toggle='tooltip']").tooltip();
	}

	recalcHeight = function() {
		$("#branding, header, footer").filter(function() {
			return $(this).css("position") === 'fixed';
		});
/*
    var otherHeights = 0;

    .each(function() {
      otherHeights += $(this).outerHeight();
    });
    windowHeight = $(window).height();
    availHeight = windowHeight - otherHeights + 1;
    $("#progwidget").height(availHeight);
    */
}

$(window).smartresize(function(){
	recalcHeight();
}).resize();

$scope.$on('$destroy', function() {
	$(window).off("resize.sr");
});

$scope.anchor = function(val) {
	console.log(val);
}

var make_checkbox = function(txt, id) {
	var div = document.createElement("div");

	var cb = document.createElement("input");
	cb.setAttribute("value", txt);
	cb.setAttribute("type", "checkbox");

	var status = localStorage.getItem("checkboxes:" + LZString.compressToUTF16(id));
	cb.checked = status;

	cb.addEventListener("click", (event) => {
		localStorage.setItem("checkboxes:" + LZString.compressToUTF16(id), cb.checked);
	})
	// return cb;

	div.innerText = txt;
	div.insertBefore(cb, div.firstChild);
	return div;
}

var build_checklist = function(data, travel) {

	// comment
	if (typeof data == 'string') {
		var b = document.createElement("b");
		b.innerHTML = data;
		return b;
	}

	// array of classes
	if (data instanceof Array) {
		var ul = document.createElement("ul");
		ul.setAttribute("style", "list-style: none");
		for (var i=0; i<data.length; i++) {
			var li = document.createElement("li");
			li.appendChild( build_checklist(data[i], travel + i) );
			ul.appendChild(li);
		}
		return ul;
	}

	// class item -- just return checkbox of it
	var kys = Object.keys(data);
	if (kys.indexOf('code')!=-1 && kys.indexOf('title')!=-1) {
		return make_checkbox(" " + data['code'] + " " + data['title'], travel);
	}

	if (kys.length == 1) {
		var div = document.createElement("div");
		var h4 = document.createElement("h4");
		h4.innerHTML = kys[0];
		div.appendChild(h4);
		div.appendChild( build_checklist(data[kys[0]], travel + kys[0]));
		return div;
	} else {
		var children = [];
		var ul = document.createElement("ul");
		ul.setAttribute("style", "list-style: none");
		for (var i=0; i<kys.length; i++) {
			var pass_data = {};
			pass_data[kys[i]] = data[kys[i]];
			var this_list = build_checklist(pass_data, travel + kys[i]);
			var li = document.createElement("li");
			li.appendChild(this_list);
			ul.appendChild(li);
		}
	}
	return ul;
}

$scope.$watch('program', function() {

	// $scope.$on('click', function() { console.log("HERE"); })

	if ($scope.program !== undefined && $scope.program !== null) {
		$scope.programInfo = '';

		$scope.global.progwidgetSelected = true;

		// $("#program-information .ng-scope").show()
		// var my_url = 'https://ves.columbiaspectator.com/api/getMajorData';
		var my_url = 'http://localhost:3000/api/getMajorData';
		majorDataGet = $http({
			"method": "POST",
			"url": my_url,
			"data": angular.toJson({'Department': $scope.program, "School": $('#school_select').val()}),
			"headers": {},
			"responseType": 'json',
			'ignoreLoadingBar': true
		});

		majorDataGet.then(function(my_rec_data) {
			data = my_rec_data['data'];
			var travel_data = data.Department;
			delete data._id;
			delete data.Department;

			var this_prog = $('#program_chosen').get(0).firstChild.firstChild.innerHTML;

			$scope.sendEmailFxn = function() {
				var fdbk = prompt("Please tell us the issue with this data so we can fix it!");
		    	if (fdbk != null) {
			    	sendEmail = $http({
						"method": "POST",
						"url": my_url,
						"data": angular.toJson({'program': this_prog, "feedback": fdbk}),
						"headers": {},
						"responseType": 'json',
						'ignoreLoadingBar': true
					});
					sendEmail.then(function(data) { console.log("Email sent for " + $scope.program); });
			    }
		    };

			// my_url = 'https://ves.columbiaspectator.com/api/reportBadData';
			my_url = 'http://localhost:3000/api/reportBadData';
		    var bad_data_btn = document.createElement("button");
		    bad_data_btn.innerHTML = "Inaccurate data?";
		    bad_data_btn.setAttribute("style","color: black");
		    bad_data_btn.setAttribute("id", "badData");
		    bad_data_btn.setAttribute('ng-click', 'sendEmailFxn()');

		    $scope.programInfo = bad_data_btn.outerHTML;
			$scope.programInfo += build_checklist(data, travel_data).outerHTML;
	    });

		if (!$scope.programInfo) {
			$scope.programInfo = "Sorry, no information is available for this program.";
			ga('send', 'event', 'Program Information empty', $scope.program);
		}
		else {
			ga('send', 'event', 'Program Information shown', $scope.program);
		}

		$timeout(function() {
			$("#program-information").scrollTop(0);
		}, 0);

		$("#program-information").on("click", "a.unify_course", function(e) {
			e.preventDefault();

			$('#programModal').removeData('bs.modal');
			$("#programModal").modal({
				backdrop: true,
				remote: "clunify-remote.php?text="+ escape($(this).text()) +"&url="+ escape($(this).attr("href"))
			});

			/* For modal to calc. height */
			$timeout(function() {
				$(window).resize();
			}, 0);

			$("#programModal").on("click", "a.unify_course", function(e) {
				e.preventDefault();

				$('#programModal').removeData('bs.modal');
				$("#programModal").modal({
					backdrop: false,
					remote: "clunify-remote.php?text="+ escape($(this).text()) +"&url="+ escape($(this).attr("href"))
				});

				/* For modal to calc. height */
				$timeout(function() {
					$(window).resize();
				}, 0);
			});
		});
	}
	else {
		$scope.global.progwidgetSelected = false;
	}
});

});

var LZString=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null===o||void 0===o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module&&(module.exports=LZString);
