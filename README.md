# issue-5523


### Steps to reproduce

1. Create a vue app.
2. Add Firebase using `yarn add firebase`
3. Replace the code of main.js file.
4. Run the program with `yarn serve`.


## Noticed behavior

* Initial run will work as intended. However, as mentioned by the developer, if you'll add a new data you'll encounter this error:

`Uncaught TypeError: newChildren.insert is not a function`

* Tried running the same code in react and it is working as intended. 
