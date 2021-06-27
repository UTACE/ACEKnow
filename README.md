# Summary
## Project Name - (temporary) ACEKnow

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
   python manage.py collectstatics
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





