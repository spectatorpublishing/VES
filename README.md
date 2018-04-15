# VES
*Most of this project is AngularJS code that it is completely unnecessary to understand. Here are the parts we edited for the features of our extension.*

### Overriding Vergil's Default Dropdown Data
The way Vergil sets up their jQuery-Chosen dropdowns makes it very difficult to edit the given options dynamically through Javascript. The workaround we have found for this is to edit variables such as Filters and CWFeeds, which is done through excerpts of code in js/VES_0.0.1.js structured as app.factory('Filters') or app.factory('CWFeeds'). Use Network tab of Developer Tools to see what the original files are/what you should be overriding.

### Major Requirements
Department/major requirements are requested in the function arg of "$scope.$watch('program')". It calls to VES-Webapp endpoint, which refers to a MongoDB database on the VES-Webapp server.

### Smart Search
For manual searching: the function refresh(), we fetch course nicknames from a VES-Webapp endpoint and, if the search term is found, replace the colloquial term with the official term. For user clicking colloquial term from dropdown: $('#search').on("typeahead:selected") takes a callback function where we switch the term to its official name for Vergil to search.