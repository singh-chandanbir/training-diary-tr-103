---
title: Creating first views
description: A guide in my new Starlight docs site.
---



Create a new file called **views.py** in the **chaiaurdjango** directory. In this file, we will define a few views that are simple functions that return a response. We want to have home page, about page, and contact page. Each of these pages will return html content.

```py
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Welcome to Chai's Django Project: Home page</h1>")

def about(request):
    return HttpResponse("<h1>Welcome to Chai's Django Project: About page</h1>")

def contact(request): 
   return HttpResponse("<h1>Welcome to Chai's Django Project: Contact page</h1>")
```
Now, let’s create a new file called **urls.py** in the **chaiaurdjango** directory. In this file, we will define the URL patterns for our application. If the file is already there, you can just add the following code to the end of the file:

```py
from django.urls import pathfrom . import views
urlpatterns = [
        path('', views.home, name='home'),
        path('about/', views.about, name='about'),
        path('contact/', views.contact, name='contact'),
        ]
```

Now, let’s run the server again and visit the following URLs:

*   **[http://localhost:8000/](http://localhost:8000/)**
*   **[http://localhost:8000/about/](http://localhost:8000/about/)**
*   **[http://localhost:8000/contact/](http://localhost:8000/contact/)**

You should see the following output:

    Welcome to Chai's Django Project: Home pageWelcome to Chai's Django Project: About pageWelcome to Chai's Django Project: Contact page

Adding Templates
----------------

In Django, templates are used to generate HTML pages. They are used to display data and perform logic in a web application. To create a template, you can create a new file called **templates/index.html** in the **chaiaurdjango** directory. Make sure that template folder is at same level as **manage.py** file. In this file, you can write HTML code that will be used to generate the HTML page.

```html
<!DOCTYPE html>
<html>
    <head> 
        <title>Welcome to Chai's Django Project</title>
    </head>
    <body>
        <h1>Welcome to Chai's Django Project</h1>
    </body>
</html>
```
Now, let’s run the server again and visit the **[http://localhost:8000/](http://localhost:8000/)** URL. You should see the following output:

    Welcome to Chai's Django Project

Adding CSS and JavaScript
-------------------------

To add CSS and JavaScript to your Django project, you can create a new file called **static/css/style.css** in the **chaiaurdjango** directory. In this file, you can write CSS code that will be used to style the HTML page. You can also create a new file called **static/js/script.js** in the **chaiaurdjango** directory. In this file, you can write JavaScript code that will be used to add interactivity to the HTML page.
```css
body {
    background-color: #161616;
    font-family: Arial, sans-serif;
    color: #fff;
}

```
```js
    console.log("Hello, world!");
```

To add this css file go to **settings.py** and add the following line:
```py
import os # at the top of settings.py
'DIRS': ['templates'], # inside template section

STATIC_URL = '/static/' # below this add the following line
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
```

In the index.html file, add the following line:

at the top of the file:
```html
{% load static %}
```
```html

<link rel="stylesheet" href="{% static 'css/style.css' %}">

```

Now, let’s change the **home** view to use the new template:

```py
from django.shortcuts import render
def home(request):    return render(request, 'index.html')
```

Now, let’s run the server again and visit the **[http://localhost:8000/](http://localhost:8000/)** URL. You should see the following output:

    Welcome to Chai's Django Project
