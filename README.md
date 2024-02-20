### Todo List Application

This repository contains a simple Todo List application built using React. The application allows users to add, edit, and delete tasks, as well as mark them as completed.

#### Features:

- **Add Todo:** Users can add new tasks to the list by typing in the input field and clicking the "Add Todo" button.
- **Edit Todo:** Tasks can be edited by clicking the "Edit" button, modifying the text, and then clicking "Submit Edits".
- **Delete Todo:** Users can remove tasks from the list by clicking the "Delete" button.
- **Mark as Completed:** Tasks can be marked as completed by checking the checkbox next to each task.

#### Installation:

To run the application locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone <repository_url>
```

2. Navigate to the project directory:
```bash
cd <project_directory>
```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Start the development server:

  ```bash
  npm start
  ```

  or

  ```bash
  yarn start
  ```

5. Open your browser and visit http://localhost:3000 to view the application.
   
#### Project Structure

- `index.css`: Contains CSS styles for the entire application.
- `App.js`: Main component file containing the Todo List functionality.
- `reportWebVitals.js`: Provides functionality for measuring web vitals performance.
- `index.js`: Entry point of the application, renders the `App` component.

#### Technologies Used
- `REACT`: Frontend JavaScript library for building user interfaces.
- `LocalStorage`: Utilized for storing todo data locally in the user's browser.
- `CSS`: Used for styling the components and layout of the application.
