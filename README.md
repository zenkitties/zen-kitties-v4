# Zen Flow | Work flow ease for Angular projects
A skeleton of my workflow to speed up project creations.

# After pulling the flow
You'll want to make sure to bring a command line up and cd into the directory.
Input the following commands to get scss up and running.

```
npm init
npm install gulp-sass
npm install gulp
gulp
```

This should give you all the files you need to run gulp and to start up the watcher for converting your scss files into the collected css.

# Why are my scss folder and node_modules folders being ignored?
For this repo specifically, we are using the bare minimum of node_modules.
So in an effort to preserve space we don't include it in pushes.
We've also taken the scss folder out of pushes because this is a developers tool.
It is used to make a developers life easier but doesn't exactly serve a purpose in production.
In production, all that matters is that the .css filed gets compiled.