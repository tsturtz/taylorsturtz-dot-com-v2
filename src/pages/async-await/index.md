---
title: Async / Await in JavaScript
date: "2018-12-21T06:06:56.911Z"
---
*Async* and *await* are simply JavaScript ES6 (syntactic sugar) keywords that allow for writing promises in a procedural way, resulting in code that is more fun to write and easier to read.

> The goal of these types of posts is to provide simple examples of what you're trying to learn and/or implement to get you back to tinkering in your editor. We'll leave it to you to dive deeper and discover the benefits of the topic for yourself.

### Basic implementation

Traditional promise:
```javascript
  const someFunction = () => {
    // promise example
  }
```
*Async*/*await*:
```javascript
  const someFunction = async () => {
    // await
  }
```

### Refactor an axios call

*.then()* and *.catch()*:
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
*Async*/*await* in a *try*/*catch* block:

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