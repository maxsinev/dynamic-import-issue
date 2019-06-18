## What is this?
This project demonstrates strange behavior (or even bug?) of dynamic import module resolving for string interpolation. 
But clean webpack project with dynamic import of js modules works fine, so I think there is an issue in a different layer of transpiling process.

### Project setup
```
npm install
```

### Run
```
npm run serve
```
### Unexpected behavior
Run project and try to navigate to `/test` route it will raise an error in console that `home` variable is not defined. Looks like template string does not go through module resolving or something with such configuration. Check `router.js` file to see details.
