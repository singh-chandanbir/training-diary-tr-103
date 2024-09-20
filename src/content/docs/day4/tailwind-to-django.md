---
title: Tailwind to Django
description: A guide in my new Starlight docs site.
---

Install Tailwind CSS in your Django project
-------------------------------------------

> How to add tailwind to your Django project and Django Admin

Tailwind CSS is a CSS framework that allows you to build custom styles for your web pages. It provides a set of pre-built classes that you can use to style your HTML elements.

Before we run the next command we need pip to be installed in your system. So far, we have been using `uv` to install packages, which is new and not yet supported by many packages.

Terminal window

    python -m ensurepip --upgrade
    # alternativelypython -m pip install --upgrade pip

To install Tailwind CSS in your Django project, you can use the following steps:

Terminal window

    pip install django-tailwindpip install 'django-tailwind[reload]'

This will install the `django-tailwind` package and the `django-tailwind[reload]` package, which includes the `tailwind-django` command-line tool.

Once you have installed Tailwind CSS, you can use the `tailwind-django` command to generate the necessary files for your project. This command will create a `tailwind.config.js` file in your project directory, as well as a `static/css/tailwind.css` file that contains the compiled Tailwind CSS.

Now, add `tailwind` to your `INSTALLED_APPS` in your `settings.py` file:

    INSTALLED_APPS = [    # ...    'tailwind',    # ...]

Next, run the `tailwind-django` command to generate the necessary files for your project:

Terminal window

    python manage.py tailwind init

Add the newly create `theme` to your INSTALLED\_APPS in your `settings.py` file:

    INSTALLED_APPS = [    # ...    'theme',    # ...]TAILWIND_APP_NAME = 'theme' # This is the name of the app that will be used to generate the tailwind filesINTERNAL_IPS = ['127.0.0.1']

Now run the following command to generate the necessary files for your project:

Terminal window

    python manage.py tailwind install

You can now use the Tailwind CSS classes in your Django templates. All though, tailwind provides you a base template that you can use to start your project but you can now use tailwind in any base template you want.

    {% load static tailwind_tags %}...<head>   ...   {% tailwind_css %}   ...</head>

> ☕️ I was not able to get tailwind intellisense to work in my IDE, so I had to create a `tailwind.config.js` file manually. This file is totally empty but works

Finally, suggestions are there but you are not getting the desired result. That’s because this app needs nodejs to be installed in your system. And you need to provide the path to the nodejs executable in your `settings.py` file: You can use command `which node` to find the path to the nodejs executable.

    NPM_BIN_PATH = '/usr/local/bin/npm'
    # for windowsNPM_BIN_PATH = r"C:\Program Files\nodejs\npm.cmd"

Now everything is ready and we need 2 terminals to run the app.

First terminal:

Terminal window

    python manage.py runserver

Second terminal:

Terminal window

    python manage.py tailwind start

> for production change this command to `python manage.py tailwind build`

Hot Reloading
-------------

Since we have already installed the `django-tailwind[reload]` package, we can use the `tailwind-django` command to enable hot reloading in our project.

Add it to your `INSTALLED_APPS` in your `settings.py` file:

    INSTALLED_APPS = [    # ...    'django_browser_reload',    #...]

Add following code to your `settings.py` file:

    MIDDLEWARE = [  # ...  "django_browser_reload.middleware.BrowserReloadMiddleware",  # ...]

Add following code to your `urls.py` file:

    from django.urls import include, pathurlpatterns = [    ...,    path("__reload__/", include("django_browser_reload.urls")),]

Enable the admin panel in Django
--------------------------------

Now that we have Tailwind CSS installed and configured, we can enable the admin panel in our Django project. All settings and urls for the admin panel are already provided in django.

First run the migrate command to create the necessary tables for the admin panel:

Terminal window

    python manage.py migrate

Next is to create the admin user:

Terminal window

    python manage.py createsuperuser

Add your username, email (this can be empty), and password to the `createsuperuser` command.

Now you can acces the admin panel by going to `http://localhost:8000/admin/` in your browser. Enter your username and password to log in.

Take a tour of the admin panel and in case you are wondering, yes, we can change the look and feel of the admin panel using so many plugins and themes that are available in the market but that is out of the scope of this tutorial.

Conclusion
----------

In this tutorial, we have learned how to install and configure Tailwind CSS in a Django project. We have also learned how to use the admin panel in Django and how to enable hot reloading in our project. With these skills, you can now start building your own Django projects with Tailwind CSS and other plugins and themes that you need.

Now, go and subscribe to `chai aur code` to get notified about new tutorials and updates on my channel.

[Previous  
Jinja Templates App in Django](/jinja-templates-app-in-django/) [Next  
A Guide on Django Models](/django-models/)