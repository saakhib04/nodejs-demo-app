## ⚙️ Continuous Integration & Deployment (CI/CD)

This project uses **GitHub Actions** to automate the CI/CD process for both the Node.js frontend and Python Flask backend. Every time code is pushed to the `main` branch or a pull request is opened, a workflow is triggered to verify that the application builds and runs successfully.

### 🔧 Workflow Overview

The GitHub Actions workflow is defined in `.github/workflows/ci-cd.yml`. It performs the following steps:

1. **Checkout the Code**  
   Retrieves the latest code from the repository.

2. **Set Up Node.js**  
   Configures the Node.js environment (version 18) and installs frontend dependencies using `npm install`.

3. **Build Frontend (Optional)**  
   Runs `npm run build` if a build script is present to compile the frontend code.

4. **Set Up Python**  
   Configures the Python environment (version 3.10) and installs backend dependencies from `requirements.txt`.

5. **Start Flask Server**  
   Launches the Flask application in the background using `nohup`, simulating a real backend server.

6. **Verify Flask API**  
   Sends a test request to the Flask API endpoint `/feedback` using `curl` to ensure the backend is responding correctly.

### ✅ Benefits of This Setup

- **Automated Testing**: Ensures that every change is verified in a clean, consistent environment.
- **Cross-Stack Validation**: Confirms compatibility between frontend and backend before merging.
- **Easy Debugging**: Detailed logs and status indicators are available under the repository’s **Actions** tab on GitHub.
- **Ready for Deployment**: This workflow can be extended to include auto-deployment steps to production servers or cloud platforms.

### 📍 Viewing Workflow Results

1. Navigate to the GitHub repository.
2. Click on the **Actions** tab.
3. Select the latest workflow run to view detailed logs and status for each step.

### 🚀 Extending CI/CD

This workflow provides a foundation for full automation. Future enhancements can include:

- Deploying to cloud platforms like Render, Railway, Heroku, or DigitalOcean.
- Running automated tests with tools like `pytest` or `Jest`.
- Integrating Slack or email notifications on failures.

---

This CI/CD pipeline helps maintain code quality, reduce manual steps, and streamline the development lifecycle.
