function startApp(data) {
  startCount(data.count);
  showWords();
}

function showWords() {
  var ElClassName = 'app-showWords';
  var elements = document.getElementsByClassName(ElClassName);
  var word = '';
  Object.keys(elements).forEach(function (key) {
    word = elements[key].getAttribute('word');
    innerWord(word, elements[key]);
  });
}

function innerWord(word, element) {
  console.log(word, element);
  var style = 'app-showWord';
  var words = word.split(' ');
  words.forEach(function(word){
    element.appendChild(createElement('div',word,style));
  });
}

function createElement(type, insertText, style) {
  var element = document.createElement(type);
  element.innerHTML = insertText;
  console.log(element);
  element.classList.add(style);
  return element;
}

// 
function startCount(conf) {
  var { time } = conf;
  var ElClassName = 'app-count';
  var attribute = 'data-count';
  var elements = document.getElementsByClassName(ElClassName);
  var dataCount = 0
  Object.keys(elements).forEach(function (key) {
    dataCount = elements[key].getAttribute(attribute);
    innerNum(time, elements[key], dataCount);
  });
}

function innerNum(time, element, count) {
  var i = 0;
  var increase = count / 10
  var innerNumInterval = setInterval(() => {
    console.log('interval', i);
    if (i <= count) {
      element.innerHTML = i;
      i += increase;
    } else {
      clearInterval(innerNumInterval);
    }
  }, time);
}