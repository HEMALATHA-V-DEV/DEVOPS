# AWS Hands-On: Deploy a Containerized App to EKS using eksctl and kubectl

## What is eksctl?
**eksctl** is a command-line tool designed to simplify the creation and management of Amazon Elastic Kubernetes Service (EKS) clusters. It provides an easy way to set up and maintain Kubernetes clusters on AWS by automating the provisioning of resources such as EC2 instances, networking configurations, and IAM roles.

### Why We Use eksctl
- **Cluster Management**: Automates the creation, updating, and deletion of EKS clusters, reducing manual work.
- **Simplicity**: Offers a straightforward interface for managing clusters, enabling users to focus on application deployment.
- **Infrastructure as Code**: Allows users to define their clusters in configuration files, promoting reproducibility and version control.
- **Integration with AWS Services**: Seamlessly connects with other AWS services for easier resource management.

---

## What is kubectl?
**kubectl** is the command-line tool for interacting with Kubernetes clusters. It allows users to manage Kubernetes resources and applications deployed within the cluster. With kubectl, you can perform operations like deploying applications, scaling services, and troubleshooting.

### Why We Use kubectl
- **Resource Management**: Facilitates the creation, modification, and deletion of Kubernetes resources like pods, deployments, services, and more.
- **Cluster Interaction**: Enables users to communicate with the Kubernetes API server to monitor and manage applications running in the cluster.
- **Flexibility**: Supports a wide range of commands for various operations, allowing for detailed control over the Kubernetes environment.

---

## Steps to Deploy a Containerized Application to EKS

1. **Clone the Repository**
   - Clone the application code from GitHub to get the necessary files for deployment.

2. **Verify Kubernetes Configuration**
   - Confirm that your Kubernetes context is correctly set up and that you can access the cluster. Check for nodes, pods, and other resources to ensure everything is functioning as expected.

3. **Containerize the Application**
   - Create a Dockerfile that defines how to build the application container. This typically involves specifying a base image, copying application files, installing dependencies, and defining how to run the application.

4. **Build and Test Docker Image**
   - Build the Docker image using the Dockerfile. Run the container locally to ensure the application is functioning correctly before deploying it to EKS.

5. **Push Image to Docker Hub**
   - Upload the Docker image to a container registry (like Docker Hub) so that it can be pulled by EKS during deployment.

6. **Create EKS Cluster**
   - Use eksctl to create a new EKS cluster. Specify the cluster name, version, region, and node configurations. This step sets up the necessary infrastructure on AWS to run your Kubernetes workloads.

7. **Update kubeconfig**
   - Once the EKS cluster is active, update your kubeconfig file to allow kubectl to interact with your newly created cluster. This step ensures that you can manage your EKS cluster using kubectl.

8. **Deploy the Application**
   - Apply the deployment configuration using kubectl. This typically involves specifying the deployment and service configurations in YAML files. Ensure that the service is set up to expose your application externally (e.g., using a LoadBalancer).

9. **Delete the Cluster**
   - After testing and using the application, clean up resources by deleting the EKS cluster to avoid incurring unnecessary costs.

## Conclusion
By utilizing **eksctl** for cluster management and **kubectl** for application deployment, you can efficiently deploy and manage containerized applications on Amazon EKS. This combination simplifies the Kubernetes experience on AWS, allowing teams to focus on building and scaling applications without getting bogged down in infrastructure complexities.

---

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

---

# Deploying Docker Containers on AWS Elastic Container Service (ECS)

## Overview

AWS Elastic Container Service (ECS) is a powerful service that allows you to run and manage Docker containers in the cloud. This guide provides a step-by-step procedure for deploying a Docker containerized application on AWS ECS, using the Elastic Container Registry (ECR) for storing your Docker images and leveraging auto-scaling for resource optimization.

## Steps to Deploy Docker Containers on AWS ECS

# Deploying Docker Containers on AWS Elastic Container Service (ECS)

## Overview
AWS Elastic Container Service (ECS) is a fully managed container orchestration service that enables you to easily deploy, manage, and scale Docker containers in a production environment. This document outlines the steps to deploy Docker containers on ECS, focusing on the key concepts and processes involved.

## Key Concepts

### Container Orchestration
Container orchestration automates the deployment, scaling, and management of containerized applications. ECS manages the lifecycle of your containers, ensuring they run as intended and can scale based on demand.

### Docker Containers
Docker containers package your application and its dependencies into a standardized unit, ensuring consistency across different environments.

## Steps to Deploy Docker Containers on ECS

**Why Use AWS ECS for Container Orchestration?**

Amazon Elastic Container Service (ECS) is a highly scalable and fully managed container orchestration service. Here are some key reasons for using ECS:

- Simplified Management: ECS automates the deployment, scaling, and management of containerized applications, allowing developers to focus on application development instead of infrastructure management.

- Integration with AWS Services: ECS seamlessly integrates with other AWS services like Elastic Load Balancing, Amazon ECR (Elastic Container Registry), and AWS CloudWatch, providing a comprehensive ecosystem for managing applications.

- Scalability: ECS allows you to scale applications up or down based on demand, ensuring optimal performance and resource utilization.

- High Availability: ECS automatically replaces unhealthy tasks and offers features like service discovery, making it easier to build resilient applications.

- Cost-Effective: You only pay for the resources you use, allowing for cost-efficient application hosting.

### **Steps to Deploy Docker Containers on AWS ECS**

### 1. **Containerization of Your Application**
- Package your application into a Docker image using a Dockerfile. This image contains everything needed to run your application, including code, libraries, and runtime.

### 2. **Creating an Amazon Elastic Container Registry (ECR) Repository**
- Set up an ECR repository to store your Docker images. ECR is a managed container image registry that integrates seamlessly with ECS.

### 3. **Building and Pushing Your Docker Image**
- Build your Docker image locally and push it to your ECR repository. This makes the image available for ECS to deploy.

### 4. **Setting Up an ECS Cluster**
- Create an ECS cluster, which is a logical grouping of tasks and services. A cluster allows you to manage resources efficiently and deploy multiple services.

### 5. **Defining a Task Definition**
- A task definition acts as a blueprint for your application. It specifies the Docker image to use, resource requirements (like CPU and memory), and networking configurations.

### 6. **Creating a Service in the ECS Cluster**
- Define a service that uses the task definition. The service manages the desired number of task instances, ensuring they are running and healthy.

### 7. **Implementing Auto-Scaling**
- Configure auto-scaling for your service to automatically adjust the number of running tasks based on traffic and resource usage. This helps maintain performance and cost-effectiveness.

### 8. **Setting Up Load Balancing**
- Integrate an Application Load Balancer (ALB) to distribute incoming traffic across your tasks. This enhances availability and responsiveness.

### 9. **Health Monitoring and Management**
- Implement health checks to monitor the status of your tasks. ECS can automatically replace unhealthy tasks to maintain application availability.

### 10. **Rolling Updates**
- To update your application without downtime, use rolling updates. This process gradually replaces old task instances with new ones running the updated image.

### 11. **Monitoring and Logging**
- Use AWS CloudWatch for monitoring your ECS services and tasks. Set up logging to capture application output, which can help with troubleshooting and performance optimization.

### 12. **Cleaning Up Containers and Resources**

**What to Do**: Remove resources when they are no longer needed.

**Explanation**: To avoid incurring unnecessary costs, clean up by deleting your ECS service, cluster, and ECR repository when you are done testing or using them. This step helps ensure that you are not billed for unused resources.

By following these steps, you can effectively deploy and manage Docker containers using AWS ECS. This setup provides a robust and scalable environment for running containerized applications, allowing you to focus on building and improving your software rather than managing infrastructure.

