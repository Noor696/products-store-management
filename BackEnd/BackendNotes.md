**To Create Virtual Environment:** 

`python -m venv .venv`
`python3.10 -m venv .venv`

**To Activate The Virtual Environment:**

`source .venv/bin/activate`

**To Deactivate The Virtual Environment:**

`deactivate`

**To Install Any Library:**

`pip3 install <library_name>`

**To Run A File As A Script:**

`python <file_name.py>`

**Requirements File:**

`pip3 freeze > requirements.txt`
`pip3 install -r requirements.txt`

**Install django by using pip**

`pip install django`

**Create a project**

django-admin startproject <project_name> .
project name : storeManagementProjet

**Create an application** 
python manage.py startapp <app_name>
app name: product , category

**create a super user**:
python manage.py createsuperuser

**update the database:**
`python manage.py makemigrations`
`python manage.py migrate`

* Django comes default with sqlite3 database and since we install django which is a python framework, this framework comes by default with tables like user tables, authentications and these tables needs to be created, so to create tables we will type `python manage.py migrate`

**create a super user:** 

`python manage.py createsuperuser`

- this user is what we use to login to the backend or the admin site of django

**How to Run Django Development Server:**

`python manage.py runserver`

**registering the modal in the admin.py**