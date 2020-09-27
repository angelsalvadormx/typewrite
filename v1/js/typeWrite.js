function startApp(data){
  startCount(data.count);
}

function startCount(conf){
  var { time } = conf;
  var className = 'app-count';
  var attribute = 'data-count';
  var elements = document.getElementsByClassName(className);
  var dataCount = 0
  Object.keys(elements).forEach(function(key) {
    dataCount = elements[key].getAttribute(attribute);
    innerNum(time,elements[key],dataCount);
  });
}


function innerNum(time,element,count){
  var i = 0;
  var increase = count/10
  var innerNumInterval = setInterval(() => {
    console.log('interval',i);
    if(i<= count){
      element.innerHTML = i;
      i += increase;
    }else{
      clearInterval(innerNumInterval);
    }
  }, time);
}