var Stopwatch = function(elem, options) {
    var timer       = createTimer(),
        startButton = createButton("start", start),
        stopButton  = createButton("stop", stop),
        resetButton = createButton("reset", reset),
        offset,
        clock,
        interval;

    // default options
    options = options || {};
    options.delay = options.delay || 1;

    // append elements     
    elem.appendChild(timer);

    // initialize
    reset();

    // private functions
    function createTimer() {
      return document.createElement("span");
    }

    function createButton(action, handler) {
      var a = document.createElement("a");
      a.href = "#" + action;
      a.innerHTML = action;
      a.addEventListener("click", function(event) {
        handler();
        event.preventDefault();
      });
      return a;
    }

    function start() {
      if (!interval) {
        offset   = Date.now();
        interval = setInterval(update, options.delay);
      }
    }

    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }

    function reset() {
      clock = 0;
      render();
    }

    function update() {
      clock += delta();
      render();
    }

    function render() {

      var seconds = Math.floor(clock/1000);

      var minutes = 0;

      while(seconds > 59)
      {
        seconds -= 59;
        minutes++; 
      }

      if(minutes < 10)
      {
        minutes = "0"+minutes;
      }

      if(seconds < 10)
      {
        seconds = "0"+seconds;
      }

      
      timer.innerHTML = minutes+":"+seconds; 
    }

    function delta() {
      var now = Date.now(),
          d   = now - offset;

      offset = now;
      return d;
    }

    // public API
    this.start  = start;
    this.stop   = stop;
    this.reset  = reset;
};