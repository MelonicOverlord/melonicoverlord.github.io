function clock() {
    var time = new Date(),
        
        
        hours = time.getHours(),
        
        
        minutes = time.getMinutes(),
        
        
        seconds = time.getSeconds();
    
    document.querySelectorAll('.clock')[0].innerHTML = `It Is Currently: ${harold(hours)}:${harold(minutes)}:${harold(seconds)}`;
      
      function harold(standIn) {
        if (standIn < 10) {
          standIn = '0' + standIn
        }
        return standIn;
      }
    }
    setInterval(clock, 1000);