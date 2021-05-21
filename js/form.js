  class Form {
    constructor() {
        
    }
  
  
    display(){
      var title = createElement('h2')
      title.html("Multipalyer Car Racing Game");
      title.position(350, 100);

      var input = createInput("Name:");
      var button = createButton("Play");

      input.position(450, 200);
      button.position(480, 230);
  
      button.mousePressed(()=>{
        input.hide()
        button.hide()
  
        var name = input.value();
        
        playerCount =playerCount +1 ;
        player.index = playerCount
        player.update(name)
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(450, 160)
      });
  
    }
  }
  
  