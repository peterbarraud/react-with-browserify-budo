# ReactJS built with Budo & Browserify (along with Browserify CSS for pretty styling)
*And Browserify CSS add such front-end libs as Bootstrap, mini.css, et all*

Every time I go back to ReactJS, I hit a pretty long re-learning curve. quite a long relearn.

And that's the idea of this repo. It's got lots of very tiny examples bundled all into one project.

Now, to make sure that we don't have one big huge (and not a real get started *again*) project, I've broken it out. So, at one time only a little piece will work.

But first, to get going:
1. Clone this repo
2. `cd` into the resultant dir
3. Run `npm install` to get the dependencies
4. Run `npm start` to launch the project in your default browser running on a local (`Node`-based) web server with `livereload` - all setup.

That's it.

## So, what's in the project and how do I get the different pieces out to look at.
1. The best place to get started is by looking at the `index.html`. That's where it all begins. To start with React, this is where you put the id that you'll later add everything to.
1. `src/js/main.js`: A thin component that simply renders the `App` component to the `div` element in `index.html`.

    But importantly, notice the `App` component is included at the top.
    
    To try out the different samples, include the js from the `src/js/components` folder.
1. Samples in the `components` folder:

    *if you're looking for the first time, probably best in this order*)
    1. `render.content.js` - Shows the different (*function* vs *class*) syntax to display components
    1. `events.and.state.js` - How to use *constructors*, *events*, and *state*. Some pretty useful, IMHO, comments in this file.
    1. `routing.js` - Lazy routing
    1. `routing.not.lazy` - Not lazy routing
    1. `component.communication` - You're you're going to be passing data between components in almost any app you create.

Note: Mostly, I've used the prettier *arrow* functions syntax.
---

And, of course, when you're all done putting your stuff into the project, you can also make a prod-ready build
## Building the project for deployment
This is split into two parts
* `build.js`: Builds the `JS` and `CSS` outputs
* `html-dist.config`: Uses [html-dist](https://www.npmjs.com/package/html-dist) to inject the CSS into the HTML

Then generate build:
```
npm run build
```
### Testing the build
If you want to check the build - Just to make sure:
```
npm run testbuild
```
This runs `budo` on the build