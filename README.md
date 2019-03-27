# fib-calculator-kubernetes

![Fibonacci Calculator](https://res.cloudinary.com/dquez/image/upload/v1551918242/Screen_Shot_2019-03-05_at_4.21.18_PM_nno3ug.png)

This app is an overly complicated fibonacci calculator, and for good reason. It dives into a multitude of technologies and services, including docker, redis, postgres, react, node and ngnix.

## Built With

* [axios](https://www.npmjs.com/package/axios) - Make XMLHttpRequests from the browser
* [body-parser](https://www.npmjs.com/package/body-parser) - Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [docker](https://www.docker.com) - Packaged Software into Standardized Units for Development, Shipment and Deployment
* [express](https://www.npmjs.com/package/express) - Framework we used to handle HTTP requests
* [nodemon](https://www.npmjs.com/package/nodemon) - Watches the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
* [pg](https://www.npmjs.com/package/pg) - Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
* [react](https://reactjs.org/) - A JavaScript library for building component-based user interfaces
* [redis](https://www.npmjs.com/package/redis) - A complete and feature rich Redis client for node.js. 
* [travis-ci](https://travis-ci.org) - Travis CI is a hosted, distributed continuous integration service used to build and test software projects hosted at GitHub.


## Inspiration
We've all come across the fibonacci sequence one time or another in our lives. I wanted to elevate the functionality of a fibonacci calculator to the level of a robust, scalable application deployed to AWS. This was the first iteration of the project, I have a separate repo for the fib calculator I deployed to Google Cloud Platform. [Kubernetes fibonacci calculator](https://github.com/Dquez/fib-calculator-kubernetes) 

## How I built it
This app's design is simple enough that I didn't spend much time wireframing. I instead wanted to focus on the overall application design, routing to and from the backend, and eventually containerization. The front-end for the web app is built with react. The backend is built with a node server, express, redis, postgres, docker, kubernetes. The extension uses HTML, bootstrap, and jquery/javascript. The development process looked more or less like this: 
 * Wireframe the react app and connections to the backend
 * Node-express server with front-end boilerplate code for React
 * Organize my storage into two separate locations, Redis and Postgres
 * Containerize and deploy application to AWS 


## Challenges I ran into
I could've created this app with no backend, but I wanted to challenge myself to learn new technologies in the process. 
* Thinking of a meaningful way to integrate postgres and redis into an otherwise simple application. 
* Communicating between different containers with the exposal of ports

## Accomplishments that I'm proud of
Taking a simple application and deploying it dockerhub and AWS was extremely rewarding. Although my devops chops are budding, I'm glad I got the chance to dive under the hood to figure out what's happening during the deployment process for cloud providers.  

## What's next for Docker-fib-calculator
Since I've already built this application to scale, I'd like to update the design so the app isn't so rough around the edges. Possibly even simplify the application or make it more of a boilerplate to deploy a web app to cloud service providers using kubernetes.

## Author

- [Dariell Vasquez](https://github.com/Dquez)
