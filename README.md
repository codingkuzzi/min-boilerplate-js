Step by step guide to creating a new web app project (or you could just use yeoman!)

Prerequisites:
  - GIT
  - NodeJS
  - Bower

1. Create a folder and go into it
2. Run `git init`
3. copy .gitignore into the folder from using `curl "https://raw.githubusercontent.com/Epicodus-SZ/js-calculator/master/.gitignore" -o ".gitignore"`
4. Create a new github repository, and copy the URL
5. Create a link between your folder and github using `git remote add <YOUR INITIALS> https://github.com/<YOUR REPO>.git`
6. run `npm init`...and add your info to package.json.
7. run `bower init`...and add your info into bower.json.
8. Copy the devDependencies section of a previous projects package.json [example] (https://raw.githubusercontent.com/Epicodus-SZ/js-calculator/master/package.json) and paste them into the new projects package.json file.
9. Run `npm install` - to install all of those dependencies into your new project.
10. Copy the dependencies section from a previous bower.json file [example](https://raw.githubusercontent.com/Epicodus-SZ/js-calculator/master/bower.json), and paste them into your new projects bower.json file.
11.
