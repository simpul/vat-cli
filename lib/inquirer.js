const inquirer = require('inquirer');

module.exports = function() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: '项目名称',
      default: 'vue-admin-template'
    },
    {
      type: 'input',
      name: 'description',
      message: '项目描述',
      default: 'A vue admin template with Element UI & axios & iconfont & permission control & lint'
    },
    {
      type: 'input',
      name: 'version',
      message: '版本',
      default: '1.0.0'
    },
    {
      type: 'input',
      name: 'author',
      message: '作者',
      default: 'simple'
    },
    {
      type: 'input',
      name: 'port',
      message: '默认端口号',
      default: 9528
    }
  ]);
}