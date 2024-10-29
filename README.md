# Push Docker Image to AWS ECR using Jenkins Pipeline

## Prerequisites

- **AWS Account**: Ensure you have an AWS account with admin privileges.
- **GitHub Account**: To store your source code.

## Step 1: Configuring EC2 Instance in AWS
Begin by logging into your AWS account and navigating to the EC2 dashboard. Create a new EC2 instance, selecting Ubuntu 22.04 LTS as the operating system. This instance will host your Jenkins server.

## Step 2: Install Java on Ubuntu 22.04 LTS
Once you have SSH access to your EC2 instance, you need to install Java. Start by updating the package list, then install OpenJDK 17. This is necessary for Jenkins to run, as it requires Java.

## Step 3: Install Jenkins on Ubuntu 22.04 LTS
Next, add the Jenkins repository to your system and install Jenkins. This involves importing the Jenkins GPG key, adding the Jenkins repository, and then using the package manager to install Jenkins.

## Step 4: Enable and Start Jenkins
After installation, configure Jenkins to start automatically on boot. You will also need to start the Jenkins service manually for the first time. Confirm that Jenkins is running properly by checking its status.

## Step 5: Install Git on Ubuntu 22.04 LTS
To clone your application repository, you need Git installed on your EC2 instance. Use the package manager to install Git.

## Step 6: Access Jenkins on Browser
Open your web browser and navigate to the Jenkins interface by entering the public IP address of your EC2 instance followed by port 8080. During the initial setup, you will be prompted to enter an administrator password, which you can retrieve from the terminal.

## Step 7: Add AWS Credentials in Jenkins
In Jenkins, navigate to "Manage Jenkins" and then "Credentials." Here, you can add your AWS credentials (Access Key ID and Secret Access Key) so that Jenkins can interact with your AWS resources securely.

## Step 8: Install Docker on Ubuntu 22.04 LTS
To build and push Docker images, install Docker on your EC2 instance. After installation, you may need to configure permissions to allow the Jenkins user to run Docker commands without sudo.

## Step 9: Installing Plugins in Jenkins
In Jenkins, go to "Manage Jenkins" and then "Manage Plugins." Install the necessary plugins, including the Docker plugin, Docker Pipeline plugin, and Amazon ECR plugin, which are essential for integrating Docker and AWS ECR functionalities.

## Step 10: Creating ECR Repository in AWS
In the AWS Management Console, navigate to the ECR service and create a new repository. This is where your Docker images will be stored after being pushed from Jenkins.

## Step 11: Create IAM Role for ECR
You need to create an IAM role with the policy `AmazonEC2ContainerRegistryFullAccess`. Attach this role to your EC2 instance so that it has the necessary permissions to access the ECR.

## Step 12: Install AWS CLI on Ubuntu 22.04 LTS
To facilitate interactions with AWS services, install the AWS Command Line Interface (CLI) on your EC2 instance. This will enable you to run commands to manage your AWS resources.

## Step 13: Push Docker Image to AWS ECR using Jenkins Pipeline
1. **Create a New Pipeline**: In Jenkins, create a new pipeline job.
2. **Write the Jenkinsfile**: Define the pipeline stages for logging into AWS ECR, cloning your Git repository, building the Docker image, and pushing the image to ECR.
3. **Run the Pipeline**: Execute the pipeline to build the Docker image and push it to your ECR repository. Monitor the console output for any errors.

Steps to configure an EC2 instance, install necessary software (Java, Jenkins, Git, Docker), set up AWS credentials, create an ECR repository, and push a Docker image to AWS ECR using a Jenkins pipeline. Following these steps will help automate the process of deploying Docker containers in a cloud environment.

# Deploying Docker Containers on AWS Elastic Container Service (ECS)

## Overview

AWS Elastic Container Service (ECS) is a powerful service that allows you to run and manage Docker containers in the cloud. This guide provides a step-by-step procedure for deploying a Docker containerized application on AWS ECS, using the Elastic Container Registry (ECR) for storing your Docker images and leveraging auto-scaling for resource optimization.

## Steps to Deploy Docker Containers on AWS ECS

### 1. Containerize Your Node.js Application

**What to Do**: Create a `Dockerfile` for your Node.js application.

**Explanation**: The Dockerfile is a blueprint for building your Docker image. It specifies the base operating system, the application code, and any dependencies required to run your application. This step is essential as it packages your application into a standardized format that Docker can run.

### 2. Build Your Docker Image

**What to Do**: Use the Docker CLI to build your image.

**Explanation**: Building the image transforms your Dockerfile into a runnable Docker container. This process collects all the necessary files and dependencies specified in your Dockerfile and creates a single image that can be executed in any Docker environment.

### 3. Create an ECR Repository

**What to Do**: Set up a new repository in AWS Elastic Container Registry (ECR).

**Explanation**: ECR serves as a secure storage location for your Docker images. By creating a repository, you prepare a space in the cloud where your images can be stored and managed. This is similar to how GitHub manages source code repositories.

### 4. Log in to ECR

**What to Do**: Authenticate your Docker client to access ECR.

**Explanation**: Logging in is crucial because it establishes a secure connection between your local Docker environment and AWS ECR. This step allows you to push and pull images to and from ECR.

### 5. Tag Your Docker Image

**What to Do**: Assign a tag to your image to prepare it for ECR.

**Explanation**: Tagging is like labeling your image so that AWS can recognize it correctly. The tag format is important, as it tells AWS where to find the image when you want to deploy it.

### 6. Push Your Image to ECR

**What to Do**: Upload your tagged image to the ECR repository.

**Explanation**: This step transfers your Docker image from your local environment to the cloud-based ECR. Once pushed, your image will be accessible for deployment by ECS.

### 7. Create an ECS Cluster

**What to Do**: Set up a new ECS cluster to manage your application.

**Explanation**: An ECS cluster is a logical grouping of resources that allows you to deploy and manage your containers. You can think of it as a container management group that handles scaling, load balancing, and health monitoring of your application.

### 8. Create a Task Definition

**What to Do**: Define how your container should run in ECS.

**Explanation**: The task definition serves as a configuration file that specifies the details for running your container, including the Docker image to use, resource requirements (like memory and CPU), and networking options. It acts as a blueprint for the tasks that ECS will launch.

### 9. Register the Task Definition

**What to Do**: Save your task definition in ECS.

**Explanation**: By registering your task definition, you inform ECS about how to run your application. This step makes it possible for ECS to use your configuration when launching containers.

### 10. Create a Service in the Cluster

**What to Do**: Set up a service to manage your running tasks.

**Explanation**: A service in ECS ensures that your desired number of task instances are running at all times. It manages the lifecycle of the tasks and can automatically restart them if they fail.

### 11. Set Up Auto Scaling

**What to Do**: Configure auto-scaling for your ECS service.

**Explanation**: Auto-scaling automatically adjusts the number of running tasks based on demand. For example, if traffic to your application increases, ECS can launch additional tasks to handle the load. This helps ensure that your application remains responsive.

### 12. Health Monitoring

**What to Do**: Implement health checks for your containers.

**Explanation**: Health checks allow ECS to monitor the status of your containers. If a container fails or becomes unresponsive, ECS can automatically replace it with a new one, ensuring high availability for your application.

### 13. Rolling Updates

**What to Do**: Deploy new versions of your application without downtime.

**Explanation**: Rolling updates enable you to update your application gradually. When you push new code, ECS can update tasks one at a time, maintaining availability while the update occurs. This minimizes service disruption.

### 14. Cleaning Up Containers and Resources

**What to Do**: Remove resources when they are no longer needed.

**Explanation**: To avoid incurring unnecessary costs, clean up by deleting your ECS service, cluster, and ECR repository when you are done testing or using them. This step helps ensure that you are not billed for unused resources.

By following these steps, you can successfully manage containerized applications in a scalable and efficient manner, taking advantage of AWS's robust infrastructure and features.

