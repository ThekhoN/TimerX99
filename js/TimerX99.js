function polyfill_qSA_SupportQ(){
  if(supportsQuerySelectors){
    console.log('querySelector && querySelectorAll are supported!');  
  }
  else {
    //download and polyfill it
    ['https://cdn.polyfill.io/v2/polyfill.min.js'].forEach(function(src) {
            var script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.head.appendChild(script);
    });
  }
  function supportsQuerySelectors() {
    return (document['querySelector']&&document['querySelectorAll'])!=null;
  }
}
polyfill_qSA_SupportQ();

var TimerX99 = (function() {
    /* GUIDE - dataType,syntax etc
    *startEnd_TargetID_typeArr must be an array of the format
      [startDate, endDate, TargetID]
    *Date must be in the format
      Sept 20 2016 00:00:00 GMT+0530
    *Time must be in 24Hrs format '+ GMT+0530'(wrt Indian Standart Time)
    example:
    var startEnd_TargetID_typeArr = [
        ['Jan 25 2016', 'Sept 20 2016 00:00:00 GMT+0530', 'timerDomEleDiv1'],
        ['Jun 06 2016', 'Jun 07 2016 00:00:00 GMT+0530', 'timerDomEleDiv2'],
    ];
    */
    ///* * *internal methods
    var priv8eMX99 = {};
    //init Clock
    priv8eMX99._initCountDown = function(id, endTime, show) {
        //get remainingTime
        _getRemainingTime = function(endTime) {
            var t = Date.parse(endTime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        };      
        var timerDomEle = document.getElementById(id);
        if(show=='false' || show==false){
          timerDomEle.style.display = 'none';   
        }
        else {
          timerDomEle.style.display = 'block';  
        }
        var dayV_Wrap = timerDomEle.querySelector('.dayV_timerX');
        var hrV_Wrap = timerDomEle.querySelector('.hrV_timerX');
        var minV_Wrap = timerDomEle.querySelector('.minV_timerX');
        var secV_Wrap = timerDomEle.querySelector('.secV_timerX');

        function updateClock() {
            var t = _getRemainingTime(endTime);
            dayV_Wrap.innerHTML = ('0' + t.days).slice(-2);
            hrV_Wrap.innerHTML = ('0' + t.hours).slice(-2);
            minV_Wrap.innerHTML = ('0' + t.minutes).slice(-2);
            secV_Wrap.innerHTML = ('0' + t.seconds).slice(-2);
            if (t.total <= 0) {
                clearInterval(timeInterval);
                timerDomEle.style.display = 'none';
                //reload page on reaching endTime
                window.location.reload(true);
            }
        }
        //newFunction - callback
        updateClock();
        var timeInterval = setInterval(updateClock, 1000);
    };
    ///* * *public methods
    var publicMX99 = {};
    publicMX99.initCountDwnX99 = function(startEnd_TargetID_typeArr) {
        //onsole.log('initCountDwnX99 initiated!!!');
        if (startEnd_TargetID_typeArr instanceof Array) {
            if (startEnd_TargetID_typeArr.length < 1) {
                console.log('define settings in arg Array');
            } else {
                for (var i = 0, len = startEnd_TargetID_typeArr.length; i < len; i++) {
                    var this_startEnd = startEnd_TargetID_typeArr[i];
                    var startDate = this_startEnd[0];
                    var endDate = this_startEnd[1];
                    var domTargetID = this_startEnd[2];
                    //adding callback
                    var callback = this_startEnd[3];
                    if(!callback || callback.length<1){
                      console.log('no callback defined');
                    }
                    //adding showTimerOptionx

                    var show = this_startEnd[4];
                    if(show == 'false' || show == false){
                      console.log('hide this timer');
                    }
                    else if(!show || show.length < 1){
                      console.log('show undefined but show timer anyway');  
                    }
                    else {
                      console.log('show this timer');
                    }
                    var startDate_ms = Date.parse(startDate);
                    var endDate_ms = Date.parse(endDate);
                    var currDate_ms = Date.parse(new Date());
                    if (startDate_ms > endDate_ms) {
                        console.log('error in startDate, startDate is more than end Date');
                    }
                    if (startDate_ms < currDate_ms) {
                        console.log('startDate: ' + startDate);
                    }
                    if (endDate_ms > currDate_ms && currDate_ms >= startDate_ms) {
                        priv8eMX99._initCountDown(domTargetID, endDate, show);
                        if(callback){
                          if(!isFunction(callback)){
                            console.log('callback must be a function expression like this:' + '\n' + 'function myCallback(){ //do something }');
                            return;  
                          }
                          else {
                            //run the callback
                            console.log('running callback:');
                            callback();  
                          } 
                        }
                    }
                }
            }
        } else {
            console.log('arg must be an Array');
        }
    }; 
  //utilities
    function isFunction(functionToCheck) {
      var getType = {};
      return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }
    //setPluginHTMLContent into DOM
    function setHTML(){  
    }  
    return publicMX99;
})();


//options
var startEnd_TargetID_typeArr = [
    ['August 05 2016 17:10:00 GMT +0530', 'August 05 2016 18:15:00 GMT +0530', 'CountDwnX99_01', hideHourlyDealsHeader, false],
    ['August 05 2016 18:15:00 GMT +0530', 'August 05 2016 18:27:00 GMT +0530', 'CountDwnX99_02', showHourlyDealsHeader, true],
    ['August 05 2016 18:27:00 GMT +0530', 'August 05 2017 18:52:00 GMT +0530', 'CountDwnX99_03', hideHourlyDealsHeader, false]
];

//init
TimerX99.initCountDwnX99(startEnd_TargetID_typeArr);

//The callback ~ updateHTMLContentnClass_header
function updateHTMLContentnClass_header(){
    console.log('updateHTMLContentnClass_header running!');
    var updateThisHeader = document.getElementById('updateThisHeader');
    var span_updateThisHeader = updateThisHeader.getElementsByTagName('span')[0];
      updateThisHeader.classList.remove('otherIcon');
      updateThisHeader.classList.add('hourlyIcon');
      span_updateThisHeader.firstChild.nodeValue = 'Hourly Offers';
}
    
function hideHourlyDealsHeader(){
    console.log('hideHourlyDeals_nTimer running!');
    var updateThisHeader = document.getElementById('updateThisHeader');
    var span_updateThisHeader = updateThisHeader.getElementsByTagName('span')[0];
      updateThisHeader.classList.remove('hourlyIcon');
      updateThisHeader.classList.add('otherIcon');
      span_updateThisHeader.firstChild.nodeValue = 'Other Offers';
    
}
    
function showHourlyDealsHeader(){
    console.log('showHourlyDeals_nTimer running!');
    var updateThisHeader = document.getElementById('updateThisHeader');
    var span_updateThisHeader = updateThisHeader.getElementsByTagName('span')[0];
      updateThisHeader.classList.remove('otherIcon');
      updateThisHeader.classList.add('hourlyIcon');
      span_updateThisHeader.firstChild.nodeValue = 'Hourly Offers';
    
}

