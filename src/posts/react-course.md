---
title: React Course With Mosh Hamedani
date: 30 - 7 - 2020
tags: React, Course
---

# React Course

Here in this repo, I will start my journey in learning React Library :)  
 I'm learning React along side with [React Docs](https://reactjs.org/docs/getting-started.html) and [Mosh Hamedani Course](https://codewithmosh.com/p/mastering-react)

### 1- Getting Started

to get started and create your first react application, then you can type these command to start right now :)  
`npx create-react-app my-app`  
`cd my-app`  
`npm start`  
and then you will see the default react page in your browser.

This is the samllest React example looks like:

```JSX
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

and later on we will know more about that

### 2- JSX

So what is JSX?

```JSX
const element = <h1>Hello, world!</h1>;
```

it's may seems for the first time like HTML but it's not and also it's not JavaScript (string)

JSX is an extension syntax from JavaScript. It's recommended with React to describe how the UI should looks like, and it comes with full power of JavaScript.

so all you doing is that's you assing the tags in variables or return them directly in the functions.

so as we declared before, this comes with full power of JavaScript which means you can write JavaScript Expressions like using variables and functions. All you do is open brackets `{}` and in inside it use the JavaScript variables or functions.  
Here is an example for how we use it with variable

```JSX
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

_we will cover the render later._

Here is an example for how we use it with functions

```JSX
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

You can JSX inside if statement and for loop. Here is an example:

```JSX
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

NOW What about attributes?
well, it's the same as in HTML but not in everything for example: if there is an attribute from more than one word we use the camleCase. likes:  
`tabindex` => `tabIndex`  
`onclick` => `onClick`  
and so on, you should by now get the idea :)  
BUT, the `class` attributes is not the same but it's now called `className`

When we set a value for an attribute we use double quotes but if we used the JavaScript expression `{}` we don't need the double quotes.

```jsx
const element = <div tabIndex="0"></div>
```

```jsx
const element = <img src={user.avatarUrl}></img>
```

#### JSX tags and children:

In JSX you can't create element like thats:

```jsx
const element = (
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
);
```

BUT, They should be inside a div which will contain them. But this is not the only solution.  
you can also make them inside `React.Fragment` tag which is from reach libirary.

```jsx
const element = (
  <React.Fragment>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </React.Fragment>
)
```

this code will generate the `h1` and the `h2` in the html file without div bound them like before.

So Know let us see how our JSX code complied by babel.
let's say we write this code:

```jsx
const element = <h1 className="greeting">Hello, world!</h1>
```

this code will compile to the next code which is the form of react UI but we prefer JSX because it's easier to us and easy to understand.

```jsx
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
)
```
