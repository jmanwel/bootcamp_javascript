function add_spent(spent){
    let timestamp = Date.now();
    let init = localStorage.length; 
    localStorage.setItem(timestamp, JSON.stringify(spent));
    let final = localStorage.length;     
    if (final > init){
        alert("Data successfully stored");
    }
    else{
        alert("Something went wrong, please try again");
    }
}

function modify_spent(mod_key, new_value){
    console.log("=====================================");
    console.log("The previous value to be modificated is: " + JSON.parse(localStorage.getItem(mod_key)));    
    localStorage.setItem(mod_key, JSON.stringify(new_value));
    console.log("The new value is: " + JSON.parse(localStorage.getItem(mod_key)));    
    console.log("=====================================");
}

function delete_spent(del_key){
    console.log("This data is going to be erased: " + JSON.parse(localStorage.getItem(del_key)));    
    confirm = prompt('Confirm? y/n');
    if (confirm.toLowerCase() == "y"){
        let init = localStorage.length; 
        localStorage.removeItem(del_key);
        let final = localStorage.length;     
        if (final < init){
            alert("Data successfully erased");
        }
        else{
            alert("Something went wrong, please try again");
        }
    }
    else{
        console.log("Ok, no action performed");    
    }
}

function show_spent_list(){
    document.write("=====================================\n");
    for (var a in localStorage) {
        document.write('\n');
        document.write(a, ' = ', localStorage[a]);
        document.write('\n');
     }
     document.write("=====================================\n");

}

var option = 0
while (option != 7) {    
        console.log("+=====================================+");        
        console.log("| Choose the desired option: ");
        console.log("| 1 - Add a spent");
        let size = localStorage.length;
        if (size > 0){        
            console.log("| 2 - Modify a spent");        
            console.log("| 3 - Delete a spent");        
            console.log("| 4 - Show list of spents");
        }        
        console.log("| 7 - Exit");        
        console.log("+=====================================+");

        option = prompt('Introduce the desired option:');
        if (option == 1){
            add = prompt('Introduce the spent to store:');
            add_spent(add);
        }
        else if (option == 2){
            mod = prompt('Introduce the spent key to modify:');
            new_value = prompt('Introduce the spent key to modify:');
            modify_spent(mod, new_value);
        }
        else if (option == 3){
            mod = prompt('Introduce the spent key to delete:');
            delete_spent(mod);
        }
        else if (option == 4){
            document.write("Here you could see the list of money spented\n");
            show_spent_list();
        }
        else if (option == 7){
            document.write("See you soon!");
            break;
        }
  }

