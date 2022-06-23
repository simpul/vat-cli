const ejs = require('ejs');

const fs = require('fs');
const path = require('path');

const filePaths = ['package.json', 'vue.config.js', 'src/settings.js'];

module.exports = function(projectDir, answers) {
  return new Promise((resolve, reject) => {
    filePaths.forEach(filePath => {
      ejs.renderFile(path.join(projectDir, filePath), answers, (err, result) => {
        if (err) {
          reject(err);
        } else {
          fs.writeFileSync(path.join(projectDir, filePath), result);
        }
      });
    });
    resolve();
  });
}