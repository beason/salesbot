angular.module('salesbot')
  .filter('case', caseController);

/* @ngInject */
function caseController(_) {

  return transformCase;

  function transformCase(string, style) {

    if (angular.isUndefined(string) || string === null) {
      return null;
    }

    if (angular.isUndefined(style) || style === null) {
      return null;
    }

    var newString;

    switch (style) {
    case 'camel':
      newString = _.camelCase(string);
      break;
    case 'lower':
      newString = _.lowerCase(string);
      break;
    case 'upper':
      newString = _.upperCase(string);
      break;
    case 'snake':
      newString = _.snakeCase(string);
      break;
    case 'capitalize':
      newString = _.capitalize(string);
      break;
    case 'kebab':
      newString = _.kebabCase(string);
      break;
    case 'start':
      newString = _.startCase(string);
      break;
    default:
      newString = _.capitalize(string);
    }

    return newString;
  }
}
