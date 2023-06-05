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

**Create an application** 
python manage.py startapp <app_name>

**create a super user**:
python manage.py createsuperuser

**update the database:**
python manage.py makemigrations
python manage.py migrate