# registration-form
ReactJS+ Python(Django) + Postgres Demo Application


Note:
I'm not importing the frontEnd/gui/node_modules directory as it will many dependencies. 
To install the dependencies follow package.json file.


Here is the sample CRUD application with frontEnd reactjs, backEnd python (Django framework for REST) & Postgres database.

About application :

SetUp:

	1. Installing "reate-react-app gui" under project folder.
	2. Run react server using "npm start".
	3. checked localhost:3000.
	4. Setting Django framework for backEnd.
	5. Run Django server "python manage.py runserver".
	6. Checked localhost:8000.
	7. Setup database connection in settings.py
	8. Make migration and migrate "python manage.py makemigration" and "python manage.py migrate"
	9. Checking the table created in database.

FrontEnd:

	1. Configured routes under index.js. 
	2. Created two components for CRUD operations(AddEditUser.js & ShowUsers.js).
	3. Used many dependencies like react-router, react-router-dom, babel, axios (refer package.json to follow)

BackEnd:

	1. Started Django "users" app by "python manage.py startapp users". 
	2. Created Model to create model, View controller, Url to map urls for execute CRUD REST operations.
	3. Used Django-rest-frameworks for REST.
