# Summary
## Project Name - (temporary) ACEKnow
[![](https://github.com/UTACE/ACEKnow/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/UTACE/ACEKnow/actions/workflows/codeql-analysis.yml) 
[![](https://github.com/UTACE/ACEKnow/actions/workflows/linux_build.yml/badge.svg)](https://github.com/UTACE/ACEKnow/actions/workflows/linux_build.yml)
[![GitHub contributors](https://img.shields.io/github/contributors/UTACE/ACEKnow.svg)](https://GitHub.com/UTACE/ACEKnow/graphs/contributors/)
[![GitHub issues](https://img.shields.io/github/issues/UTACE/ACEKnow.svg)](https://GitHub.com/UTACE/ACEKnow/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/UTACE/ACEKnow.svg)](https://GitHub.com/UTACE/ACEKnow/pulls/)

## Project Scope
The goal of this project is to provide an easy access point for all new/return students where they can find useful information. The project is in the form of a web app.

## Project Site: 
https://github.com/UTACE/ACEKnow

## Implementation Summary
Frontend
 * React.js + bootstrap style
   - https://reactjs.org/
   - https://react-bootstrap.github.io/
    
Backend 
 * Django(RESTful style APIs)
   - https://www.djangoproject.com/
   - https://www.django-rest-framework.org/

## More about SW Development
### Please make sure to install the following…

Frontend
*	Node version >= 12.18.1
*	Npm version >= 6.14.10 (npm is defaultly installed when you install the latest version of Node, so you don’t have to install npm manually)
*	All libraries listed in package.json (run “npm i” under “./frontend”)

Backend
*	Python version >= 3.6
*	All Python libraries listed in requirements.txt

### How to run the project…

Note: ```.``` means the path to the folder ```aceknow```
#### Production Build
1. Package the whole frontend [It may takes some time] 

   Run the following command under “./frontend”.
   ```
   npm run build
   ```

2. Let Django collect all static files

   Run the following command under “./”
   ```
   python manage.py collectstatic
   ```
   Note that if you encounter syntax error, try the following command instead:
   ```
   python3 manage.py collectstatic
   ```
3. Modify Django setting to DEBUG=False
   
   Edit “setting.py” and modify “DEBUG=True” to “DEBUG=False”
4. Run the project
   
   Run <code>python manage.py runserver</code>

#### Development Build: (reactjs has hot-reload capability)
Run frontend and backend in two instances
1. Run the project in one command line
    
   Run <code>python manage.py runserver</code>
2. Run the frontend in another command line

   Run <code>npm run start</code> under “./frontend”.
      
Note: If you don’t need any frontend backend communication, you can test your change by only running the frontend.

Note: pycache files should not be included, if the gitignore file is not working, run the following command in terminal:
```bash
git rm -r --cached . && git add . && git commit -m "fixing .gitignore"
```
This will remove the pycache stuff, add ., and commit. After running this command you are ready to push whatever branch to GitHub. 





