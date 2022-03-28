
'use strict';
 
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
 
const packagePath = path.resolve(__dirname, './package.json');
const indexPath = path.resolve(__dirname, './dist/index.html');
// const errorPath = path.resolve(__dirname, './src/public/404.html');
const packageData = JSON.parse(fs.readFileSync(packagePath));
 
// 获取原index.html文件内容
let indexContent = fs.readFileSync(indexPath, 'utf-8');
indexContent = indexContent
  .replace(
    '<meta charset="utf-8" />',
    `<meta charset="utf-8" />\n  <meta name="version" content="V${
      packageData.version
    }">\n  <meta name="name" content="${packageData.name}">\n  <meta name="author" content="${
      packageData.author.name
    } || ${packageData.author.email}">\n  <meta name="keyword" content="${packageData.keywords.join(
      ',',
    )}">\n  <meta name="description" content="${packageData.description}">`,
  )
  .replace(/\/assets/g, `${packageData.author.url}/assets`);
// 写入模式打开index.html
const fd = fs.openSync(indexPath, 'w');
// 内容写入
fs.writeFile(fd, indexContent, 'utf8', function (writeErr) {
  if (!writeErr) {
    console.log(chalk.blue(`index.html 文件 Publish 成功！`));
    fs.closeSync(fd);
  } else {
    console.log(chalk.red(writeErr));
  }
});
// 同步更新404文件
// const errorfd = fs.openSync(errorPath, 'w');
// fs.writeFile(errorfd, indexContent, 'utf8', function (writeErr) {
//   if (!writeErr) {
//     console.log(chalk.blue(`404.html 文件 Synchronous update 成功！`));
//     fs.closeSync(errorfd);
//   } else {
//     console.log(chalk.red(writeErr));
//   }
// });