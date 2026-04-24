// import { defineConfig } from "cypress";
const { defineConfig } = require('cypress')
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      let message;
      on("task",{
        writeMsg(msg){
          if(!msg){
            message= "No message is passed";
          }
          message=msg;
          return null;
        },
        readMsg(){
          
          return message;
        }
      })
      return config
    },
    watchForFileChanges:true
  },
});
