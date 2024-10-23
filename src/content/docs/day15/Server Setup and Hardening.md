---
title: Server Setup and Hardening
description: A guide in my new Starlight docs site.
---

Introduction
------------

In this tutorial, we will learn how to set up a server for hosting. We will cover topics such as server selection, server configuration, and server hardening.

Server Selection
----------------

Before setting up a server, it’s important to choose the right server for your needs. There are several factors to consider when selecting a server, including:

*   Budget: Determine how much you can afford to spend on a server.
*   Purpose: Decide what you want to use the server for, such as hosting a website, running a business, or running a development environment.
*   Location: Choose a server that is close to your users and has good connectivity.
*   Security: Ensure that the server is secure and protected against potential threats.

Server Configuration
--------------------

Once you have chosen a server, you need to configure it properly. This involves setting up the server’s operating system, configuring the server’s network settings, and setting up any necessary software or applications.

### Operating System Configuration

The first step in configuring a server is to set up the operating system. This involves installing the operating system and any necessary software packages. Here are some steps to follow:

1.  Choose an operating system: Select an operating system that is compatible with your needs and budget. Some popular options include Ubuntu, CentOS, and Debian.
2.  Install the operating system. Use a package manager like `apt` or `yum` to install the operating system on the server.
3.  Configure the network settings: Set up the network settings, such as IP address, subnet mask, and gateway, to ensure that the server can communicate with other devices on the network.
4.  Install any necessary software: Install any necessary software packages, such as web servers, database servers, or development tools, on the server.

Get an account on any cloud provider
------------------------------------

We will use Linode as our cloud provider. Linode is a cloud hosting provider that offers a wide range of virtual private servers (VPS) with varying configurations and prices. It is a popular choice for hosting web applications and other types of software.

Once the account is created, you can choose the plan that best suits your needs. The plan will determine the number of servers you can create, the amount of storage space available, and the price per month.

Once the machine is created and up and running, you can connect to it using your terminal, in my case I am using `warp` terminal. You can use `warp` to connect to your machine and manage it remotely.

Terminal window

    ssh root@192.IP.IP.IP

Now we are inside our machine and we can start installing the necessary packages and software but before that let’s upgrade our system.

Terminal window

    apt updateapt upgrade

Always run the `apt update` command before `apt upgrade` to ensure that you have the latest packages available.

Change password (optional)
--------------------------

Although most cloud providers offer a way to change the password of your machine directly from the control panel but in case you want to do it manually, you can use the following command:

Terminal window

    passwd

This will prompt you to enter your current password and then you will be prompted to enter a new password. Once you have entered the new password, you will be prompted to confirm it. After that, the password will be changed.

Add non-root user and add it to sudoers
---------------------------------------

To add a non-root user, you can use the following command:

Terminal window

    useradd -m -s /bin/bash usernamegroups username

This will create a new user with the specified username and you can check the groups of the user using the `groups` command. After that, you can add the user to the sudoers group using the following command:

Terminal window

    usermod -aG sudo username

This will add the user to the sudoers group, giving them the ability to run commands with sudo privileges. Now lets create a password for the user:

Terminal window

    sudo passwd username

This will prompt you to enter a new password for the user. After that, you can log in as the user using the following command:

Terminal window

    ssh username@192.IP.IP.IP

Finally, logged in as the user.

Connect to the server using SSH
-------------------------------

Setting up SSH key on your machine is fairly easy and you need to do it once. You can generate it once as your machine identification and then you can use it to connect to the server. Here is a link to the [official documentation](https://www.linode.com/docs/guides/use-public-key-authentication-with-ssh/?tabs=ed25519-recommended%2Cssh-add%2Cusing-ssh-copy-id-recommended) on how to generate SSH keys on Linux and MacOS.

Here are some simple steps to follow:

Terminal window

    ssh-keygen -t ed25519 -C "user@domain.tld"

to view the public key

Terminal window

    cat ~/.ssh/id_ed25519.pub

Once you have generated the SSH keys, you can add them to your server using the following command (assuming you have copied the public key to your clipboard):

On your server, run the following command to copy the public key to the server. Create a new directory called `.ssh` in your home directory if it doesn’t already exist. Then create a new file called `authorized_keys` in the `.ssh` directory and paste the public key into the file.

Terminal window

    nano ~/.ssh/authorized_keys

Paste the public key into the file.

add it to the ssh utility

Terminal window

    ssh-add -k ~/.ssh/id_ed25519

Disable password login in the server
------------------------------------

After this, no one will be able to log in to your server using the username and password. Be careful with this.

Terminal window

    sudo nano /etc/ssh/sshd_config

Open this file in nano editor and search for `PasswordAuthentication` and change it to `no`. Optionally, you can also change the `PermitRootLogin` to `no` to prevent root user from logging in.

Now, restart the ssh service using the following command:

Terminal window

    sudo service ssh restart

Firewall Configuration
----------------------

You can install firewall package to protect your server from external attacks. In my case I will use linode firewall that I can easily configure from the control panel. Some people prefer to use ufw (Uncomplicated Firewall) which is a simple and easy to use firewall.

To install ufw, run the following command:

Terminal window

    sudo apt install ufw

Once the package is installed, you can configure the firewall using the following command:

Terminal window

    sudo ufw status

This will show the current status of the firewall. To enable the firewall, run the following command:

Terminal window

    sudo ufw enable

This will enable the firewall and allow all incoming and outgoing traffic. To allow incoming traffic on a specific port, run the following command:

Terminal window

    sudo ufw allow <port>

For example, to allow incoming traffic on port 22, run the following command:

Terminal window

    sudo ufw allow 22

To allow incoming traffic on multiple ports, run the following command:

Terminal window

    sudo ufw allow <port1>,<port2>,<port3>

For example, to allow incoming traffic on ports 22, 80, and 443, run the following command:

Terminal window

    sudo ufw allow 22,80,443

