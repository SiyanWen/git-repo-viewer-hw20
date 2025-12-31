Demo of using 2 async approach of JavaScript to call github API to get repositories of given user id.

1.  Create an **HTML page**
    
2.  Add:
    
    -   A **text box** for GitHub user ID
        
    -   A **submit button**
        
3.  Call this API **asynchronously**:
    
    ```bash
    https://api.github.com/users/{user_id}/repos
    ```
    
4.  Display the result in **JSON format**
    
5.  Handle errors with a **custom, user-friendly message**
    
6.  Use **more than one async approach** if possible
    
You can switch which function is called by changing:
```javascript
// Use Async/Await Approach (Recommended)
<button onclick="getRepos()">Submit</button>

// Promise (.then / .catch) Approach
<button onclick="getReposPromise()">Submit</button>
```