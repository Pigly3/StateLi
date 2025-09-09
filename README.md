# StateLi
A simple reactive HTML/state library for vanilla JavaScript.

## Importing
To use StateLi, simply host ```stateli.js``` on your web server and import it in the HTML.

```attributes.js``` is an optional add-on that adds HTML attributes with useful features, like ```goto="/path"``` or ```fa="<fa icon classes>"```, which automatically prefixes all classes inside it with ```fa-```, to isolate FontAwesome classes from other classes.

```attributes.js``` is imported in the same way.

## Usage
Usage is also shown in ```example.html```.

### Creating State
~~~javascript
const [getCount, setCount] = useState(0, "count")
~~~
This will create reactive state, with similar syntax to React. In this case `count` is the indentifier that we will use to link it to HTML.

### Using Callbacks
~~~javascript
const [getTwiceCount, setTwiceCount] = useState(2, "twicecount")
useCallback("count", (value) =>{ setTwiceCount(2*value) }) 
~~~
When `useCallback(identifier, callback)` is run, it automatically runs the callback with the current value of the state.

Whenever the value of the state changes, the callback will be rerun.

### Connecting to HTML
~~~html
<button onclick="setCount(getCount()+1)" state="count"></button>
~~~
`state="count"` binds the button to the state `count`. It's innerHTML will always be the value of `count`

### Changing textContent
~~~javascript
function useState(value, name, type="html")
~~~
By setting the type to `"text"`, we can have the library change the textContent instead of innerHTML of elements. 

### Changing Attributes
~~~html
<a href="/" bind="href" state="url">Click Me</a>
~~~

This code will bind the `href` of the link to the value of the state `url`.