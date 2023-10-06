function introduction(name) {
    const greeting = `Hi, my name is ${name}.`;
    return greeting;
}

const value1 = introduction("Aki");
console.log(value1);

const value2 = introduction("Samip");
console.log(value2);

function introductionWithLanguageOptional(name, language = "JavaScript") {
    const greeting = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return greeting;
}

const value3 = introductionWithLanguageOptional("Aki", "Ember.js");
console.log(value3);

const value4 = introductionWithLanguageOptional("Samip", "React");
console.log(value4);

function introductionWithLanguage(name, language = "JavaScript") {
    const greeting = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return greeting;
  }
  
  const value5 = introductionWithLanguage("Gracie", "JavaScript");
  console.log(value5);
  
  const value6 = introductionWithLanguage("Gracie", "Python");
  console.log(value6);
  