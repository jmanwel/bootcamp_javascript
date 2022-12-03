The program requires for console the one of the following options:

1 - Add a spent
2 - Modify a spent
3 - Delete a spent
4 - Show list of spents        
7 - Exit

Each option trigger a function for CRUD operation in localStorage.

1 - Add a spent
The data is stored in localStorage, a timestamp is generated for unique key.
A message is shown to confirm that the action was succesfully performed or if a failure was raised.

2 - Modify a spent
This function takes two parameters (key and new value to be stored). 
Also show by console the prevous value and the new value.

3 - Delete a spent
This function take one parameter (key) to delete data in localStorage.
A message is shown to confirm that the action was succesfully performed or if a failure was raised.

4 - Show list of spents        
This function show in console all the data stored in localStorage.

7 - Exit
Exit the loop.