# Deployment

## Learning Objectives

* Launch a server ('droplet') on Digital Ocean
* Explain the difference between a web (HTTP) and applicaiton server, and how they work
  together
* Use linux commands to install ruby, rubygems, nginx, and passenger phusion

## Production Web Server Architecture

Diagram the various pieces of a deployed application:

**Physical server** - the hardware running various processes

**Web server** - accepts incoming HTTP requests, and either serves static files,
(e.g. JS/CSS) or forwards the request to the application server. Examples
include **nginx** and **apache**.

**Application Server** - runs the Rails (or Sinatra, or Express) application,
and accepts HTTP requests for dynamic content from web server. It processes the
request, and sends the response back to the web server (to be sent back to the
client). Examples include: **thin**, **unicorn**, **passenger phusion**,
**puma**, etc.

**Database Server** - runs the database, e.g. postgres or mongodb. Accepts SQL
requests from the application server, and responds with data.

**Load Balancer** - for large-scales sites, there may be many physical, web, app,
and db servers. The load balancer sits in front of everything, and forwards the
request to one of the web servers as appropriate to balance the load.

## Deploying to Digital Ocean

This lesson is largely given as a live demo (or code-along) of deploying a rails
app to digital ocean following this tutorial:

[Deploy Ruby On Rails on Ubuntu 14.04 Trusty Tahr (LTS)](https://gorails.com/deploy/ubuntu/14.04)

A screencast will be posted after the lesson.
