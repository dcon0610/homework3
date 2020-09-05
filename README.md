# homework3

code is commented line by line, and a summary of steps is shown below:
1.  possible password values are declared as a string
2.  a do while loop which prompts the user for the length of the password and combination of potential inputs (special characters, upper and lower case letters), and if the conditions are not met
    to prompt the user again, notifying of which condition was not met.
        1.  an object of functions prompts the user for the conditions
        2. another object collects the returned conditions.
        3. an if/else statement tests to see whether the length of the password is acceptable, and sets a boolean operator to true or false accordingly
        4. another if/else statement tests to see whether one of the conditions is valid, and sets a boolean operator to true or false accordingly (true if one valid selection, false if none selected)
        5. if one or both of Boolean operators false, the loop begins the prompts again.
3. a password Selection criteria string initialised as empty, and then its length set from the password length selected above. 
4. if lowercase option selected, all possible lowercase options added, if uppercase option selected, all possible uppercase options added, if special characters option selected, all possible special characters added. 
5.  loop over the length of the password, find a random number, convert it to a character from the passwordSelectionArray string using "charAt"
6.  return the character to the password until the password length filled
7.  password is then passed to the relevant element to be displayed on the screen. 