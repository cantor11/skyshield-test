# Environmental issues: Air
## Software development II

### Authors

- Junior Cantor Arévalo - 2224949 
- Cristian Cabrera Pantoja - 2226285
- Néstor Heredia - 2058558
- Juan Guerrero - 2040798
- Oscar Cuaical - 2270657
- Kevin Jordan Alzate - 2228507

### Introduction
This project aims to develop a collaborative and interactive 3D web page designed to raise awareness and educate users about environmental issues related to air. Through an immersive experience, users will learn about the causes, impacts, and solutions to problems such as the: 
- Greenhouse effect
- Ozone layer depletion
- Smog

### Terminology and Features

1. Homepage:
- General introduction to air-related environmental issues.
- Interactive navigation to explore each issue in an immersive manner.
- Summary of environmental problems with links to detailed sections that explore causes, impacts, and solutions through visuals.

2. Environmental Issues Section 
- Each issue (greenhouse effect, ozone depletion, smog) is presented immersively, including:
  - Introduction to the Issue: Clear explanation of the environmental problem and its context.
  - Awareness: Visual elements and graphics to help understand the impact of the problem.
  - Solutions: Practical proposals with simulations illustrating how to implement them.

### Technologies
- Frontend: React, React Three Fiber, Three.js, Drei.
- Backend: Firebase.
- 3D Tools: Blender, Spline.
- Deployment: Global in versel and local in kubernetes with docker.

### Tests
To view test results in GitHub Actions, go to the Actions tab of the repository, select the workflow that ran the tests, and then click the corresponding job. Within the job logs, you will be able to see the results of the tests, indicating whether they passed or failed.

### Deployment
The Dockerfile creates an image to build and serve a web application. First, use Node.js to install the dependencies and build the application. Then, it uses Nginx to serve the static files generated in the build. The container exposes port 80 to access the application.

To use this Dockerfile, follow these steps:

- Build the image: Run docker build -t my-app . in the terminal from the project directory to create the Docker image.
- Run the container: Use docker run -p 80:80 my-app to run the container and expose the application on port 80.
- Access the application: Open a browser and go to http://localhost to see the application served by Nginx.
