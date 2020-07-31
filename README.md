**# nodeReactLearning
Learning Node.js, React , Express**

1. Open teh Terminal in in VS Code and type node --verison to check which version of node is installed.
2. npn --init cmd is used to create package.json file which is used to save all the dependecies/libraries of the project going forward.
3. If you have mention the entry point as index.js while the package creation create a index.js file
4.  Next step is to setup the server we will use two ways 
    a.  Traditional By using the nodejs 

       A Node.js server makes your app available to serve HTTP requests. It provides the interaction between users and your application.

    b) By using express which is a framework built on nodejs

         *   Install the express framework using the following cmd 
        npm install express -s   [-s is to save the dependency entry in package.json, -g is for global install]
        * Write the code in index.js and run cmd (*save the file)
        * node index.js

5. Next we learn about the type of variable declarations that came in ES6

    a. var : The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

    var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

    b. let : Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:

        let greeting = "say Hi";
        greeting = "say Hello instead";

        let greeting = "say Hi";
        let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

    c. const : Variables declared with the const maintain constant values.

6. Using some inbuilt functions like fs, path, os etc..

7. Callback : 
    a. Callback is an asynchronous equivalent for a function. 
    b. Helps in non blocking code.        
    c. Helps to maintain performance for single threaded node.js 

8. Call Back Hell : Nesting the callback function creates many if statements and that can cause callback hell. To solve this issue we can make funciton calls.

