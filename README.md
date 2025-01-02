Description of Key Folders and Files
1. assets/
Store all static resources like images, fonts, or videos.
Helps organize the project and makes it easier to manage assets.

2. components/
For reusable UI components like buttons, form inputs, etc.
Example: If you have a custom button for the "Sign In" and "Sign Up" actions, put it here.

3. screens/
Each screen corresponds to a page in your app (e.g., Sign In, Sign Up).
It keeps your project modular and organized.

4. navigation/
Store all navigation-related logic here (e.g., stack or tab navigators).
Example: AppNavigator.js to manage navigation between the SignIn and SignUp screens.

5. constants/
Define shared constants such as color themes, font sizes, or API endpoints.

6. utils/
Utility functions or helpers such as form validation, date formatting, or API requests.

7. Root Files
App.js: Entry point for your app. Sets up navigation and renders the main app.
app.json: Configuration file for Expo (e.g., app name, icon).
babel.config.js: Babel configuration required for Expo.
package.json: Contains the list of dependencies for your app.
tsconfig.json (if TypeScript is used): Configures TypeScript for your project.