---
title: Async/Await Comparitive Examples
date: "2018-12-21"
author:
 - name: Taylor Sturtz
   github: https://github.com/tsturtz
   twitter: taylorsturtz
tags:
 - JavaScript
 - ES6
 - ES8
---
<span style="display: none">Async</span>`async` and <span style="display: none">await</span>`await` are JavaScript ES8 (ECMAScript 2017) keywords that allow for working with asynchronous functions in a procedural way and avoiding [callback hell](http://callbackhell.com/). The code syntax is much more readable and pleasant to write comparitively.

To understand the use case and benefits of `async`/`await` syntax, you'll need to understand asynchronous
programming and promises (also known as futures) in JS.
[Here](https://eloquentjavascript.net/11_async.html) and
[here](https://developers.google.com/web/fundamentals/primers/promises) are a couple of great articles to get caught up.

#### Quick n' dirty code alert
> The goal of this post is to provide a short introduction and reference to a coding topic
> so that it is possible to implement basic functionality quickly.
> For deeper discovery, check out the additional resources linked at the [bottom of this page](#additional-resources).

---
## Basic example

Assume that we have this simple promise-based asynchronous function that resolves after 2 seconds:
```javascript
  const asyncFunc = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Done!')
      }, 2000)
    })
  }
```
We could catch the return value with `.then()`:
```javascript
  const yourFunc = () => {
    // calls .then() with return value when completed.
    asyncFunc().then((response) => {
      console.log(response) // 'Done!'
    })
  }
```
✅But here's what `async`/`await` syntax looks like:
```javascript
  const yourFunc = async () => {
    // return value is assigned to const when completed.
    const response = await asyncFunc()
    console.log(response) // 'Done!'
  }
```
Both are functionally the same, but the syntax of the latter is very straightforward and best of all, no more nesting async function calls inside of callbacks! 🎉
## Catching errors
Let's make our `asyncFunc` (from above) reject its promise instead...
```javascript
  const asyncFunc = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Something went wrong!')
      }, 2000)
    })
  }
```
You could chain a `.catch()` onto your function call as another callback:
```javascript
  const yourFunc = () => {
    asyncFunc()
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.warn(err) // 'Something went wrong!'
      })
  }
```
✅Or you could just wrap the whole thing in a `try`/`catch` block:
```javascript
  const yourFunc = async () => {
    try {
      const response = await asyncFunc()
      console.log(response)
    } catch(err) {
      console.warn(err) // 'Something went wrong!'
    }
  }
```

## Axios example *(HTTP request library)*

A simple example but this time instead of the `asyncFunc` we used above, we are using an actual HTTP request. Here we're using `.post()` but the concept is the same with any method.

`.then()` and `.catch()`:
```javascript
  const postUser = (userObj) => {
    axios.post('/users', userObj)
      .then((response) => {
        // do something with response
      })
      .catch((err) => {
        console.warn(err)
      })
  }
```
✅`async`/`await` in a `try`/`catch` block:
```javascript
  const postUser = async (userObj) => {
    try {
      const response = await axios.post('/users', userObj)
      // do something with response
    } catch (err) {
      console.warn(err)
    }
  }
```

## Fetch example *(native HTTP request API)*

Axios is very common, but if you want or need to use the native fetch API, here's a simple example.

`.then()`, `.then()`, and `.catch()`:
```javascript
  const getUsers = () => {
    fetch('/users')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        // do something with response json
      })
      .catch((err) => {
        console.warn(err)
      })
  }
```
✅`async`/`await` in a `try`/`catch` block (notice there are two promises we need to account for):
```javascript
  const getUsers = async () => {
    try {
      const response = await fetch('/users')
      const json = await response.json()
      // do something with response json
    } catch (err) {
      console.warn(err)
    }
  }
```

#### Additional resources

- https://eloquentjavascript.net/11_async.html
- https://developers.google.com/web/fundamentals/primers/promises
- https://javascript.info/async-await
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function