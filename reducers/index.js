import { combineReducers } from 'redux';

/* Auto importing reducers using webpack require.context function */
const requireModule = require.context('.', false, /\.js$/);
const reducers = requireModule
  .keys()
  .reduce((modules, fileName) => {
    if (fileName === './index.js') return modules;

    const importedModule = requireModule(fileName);

    return {
      ...modules,
      [fileName.replace(/(\.\/|\.js)/g, '')]: importedModule.default || importedModule,
    };
  }, {});

const appReducers = combineReducers(reducers);

export default (state, action) => appReducers(state, action);
