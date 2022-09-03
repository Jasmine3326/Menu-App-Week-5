

//creating the placeholders for the class of player with the name and type of chef
//Your able to name your chef,name his position(cook,baker,grill). This class defines the player and what it does.

class Player {
    constructor(name,position) {
      this.name = name;
      this.position = position;
    }
      describe() {
      return '$(this.name) gets $(this.position),';
     }
  }
  
  // creating the if else problem where the person who gets on the page creates a chef. If the player creates the instance of player then push "player" if not they say "you can only add a instance of a chef"
  //instanceof Operator, constructor operator, This class defines the player as a whole what type of chef you'll descibe yourself as.
  class Chef {
    constructor(name) {
      this.name = name;
      this.players = [];
    }
  
    addplayer(player) {
     if (player instanceof player) {
      this.players.push(player);
     } else {
      throw new Error('You can only add a instance of a chef. Argument is not a player; ${player}');
     }
    } 
  
    describe() {
      return '$(this.name) has $(this.players.length) players.';
    }
  }
    // creating a menu with the placeholders we made early on to zero out 
    //we had to start where the menu options will show up then we make a while problem and switch problem to add the options
   //that will show up on the menu. Afterwards we alert the player with saying "goodbye".
  
   class Menu {
    constructor(){
      this.chefs = [];
      this.selectedChefs = null; 
    } 
    start(){ 
      let selection = this.showMainMenuOptions();
      while (selection != 0) {
        switch(selection) {
          case '1': 
            this.createChef();
            break;
          case '2':
            this.viewChef();
            break;
          case '3':
            this.deleteChef();
            break;
          case '4': 
            this.displayChefs();
            break;
          default:
              selection = 0;
        }
        selection = this.showMainMenuOptions();
      }
      alert('Goodbye!');
    }
  
  
   //here we write out the show menu options prompt and where its supposed to show up at 
   //to be displayed and how.So after someone clicks on it these will be the popups displayed.
  
    showMainMenuOptions() {
        return prompt(`
        0)  Exit
        1)  Create new Chef
        2)  View Chefs
        3)  Delete Chef 
        4)  Display all Chefs
        `);
    }
  
   //Afterwards we write out the menu options prompt for the "chef info". 
  
    showChefMenuOptions(chefInfo) {
      return prompt(`
        0) Back
        1) Create player
        2) Delete player 
        - - - - - - - - - - -
        ${chefInfo}
  
        `);
    }
  
   //this is where we make a loop that would repeat the length of the chefs names on screen 
   //we write the displaychef as coding to display a list of the chefs, we create let as a var leave it blank,then loop through chefs length
    
    displayChefs(){
      let chefString = '';
      for (let i = 0; i < this.chefs.length; i++) {
        chefString += i + ') ' + this.chefs[i].name + '\n';
      }
      alert(chefString);
    }
      
    //here we want the prompt "enter new name for chef" to pop up so we push a chefs name.
    
    createChef() {
      let name = prompt('Enter new name for chef:');
      this.chefs.push(new Chef(name));
    }
    //here we're creating a prompt that will give us the option to pick through the chefs we made.We say if our index is less then -1 and the index is bgger them length of the chefs names then then selected chef will equal the chefs index. Let the description be the chefs name and we loop again. 
    //where it says let selection we're letting the selection of the menu options description show up as listing to create or delete one of the players.
    
    viewChef() {
     let index = prompt('Enter the index of the chef you wish to view:');
     if (index > -1 && index < this.chefs.length) {
        this.selectedChef = this.chefs[index];
        let description = 'Chef Name: ' + this.selectedChef.name + '\n';
  
        for (let i = 0; i < this.selectedChef.players.length; i++) {
          description += i + ') ' + this.selectedChef.players[i].name
           + ' - ' + this.selectedChef.players[i].typeOfChefs + '\n';
        }
        
        let selection = this.showChefMenuOptions(description);
        switch(selection) {
          case '1':
            this.createPlayer();
            break;
          case '2':
            this.deletePlayer();
        }
      }
    }
  
  
   //here we include the prompts that would show up after someone clicks on creating the the player, their type, and 
   //we name variables then we use .push to display the name and type of chef.
  
    deleteChef() {
      let index = prompt('Enter the index of the chef you wish to delete:');
      if (index > -1 && index < this.chefs.length) {
        this.chefs.splice(index,1)
      }
    }
  
  
    createPlayer() {
     let name = prompt('Enter name for new player:')
     let position = prompt('Enter position for new player');
     this.selectedChef.players.push(new Player(name,position));
    }
  
   //here we're creating the prompts to delete a character by writing the prompt, using a loop to run through the players and then by deleting the player when adding the .splice(index).
   //Loops are used to run through the selection of players, .splice(index,0) is used to remove a element from the index and adding the location.
  
    deletePlayer() {
     let index = prompt('Enter the index of the player you wish to delete:');
     if (index > -1 && index < this.selectedChef.players.length) {
       this.selectedChef.players.splice(index,1);
      }
    }
}
let menu = new Menu();
menu.start();
  
  



