# ReactJS Blog App

This is a React application that fetches blog posts from an external API and renders them on the page using the BlogPosts and BlogPostCard components.

## Features

- Fetches blog posts from an external API.
- Shows loading spinner while fetching posts.
- Displays error notification in case of an error.
- Displays blog posts in a grid layout. Each post is displayed using the BlogPostCard component.

## Components

- `BlogPosts`: This component fetches the blog posts, handles the loading and error states, and maps the fetched posts to the BlogPostCard component.
- `BlogPostCard`: This component takes a BlogPost object as a prop and renders the post data. It extracts the required data from the post object using the `useMemo` hook for optimization.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/react-blog-app.git
   cd react-blog-app

2. Install the dependencies:
  
   #### Using npm:
   ```bash
   npm install
    ```
  
   #### Or using yarn:
   ```bash
   yarn install
   ```
   
3. Run the development server:
   
   #### Using npm:
   ```bash
   npm start
   ```
   #### Or using yarn:
   ```bash
   yarn start
   ```
#### Open http://localhost:3000 to view it in the browser.

## Testing

This project uses Jest for testing. To run the tests, use:

#### Using npm:
   ```bash
   npm run test
   ```
#### Or using yarn:
   ```bash
   yarn test
   ```

## Building

To build the project for production, use:

#### Using npm:
   ```bash
   npm run build
   ```
#### Or using yarn:
   ```bash
   yarn build
   ```

This command will create a build folder with a production-ready build of the project.

### Built With
- ReactJS
- @canonical/react-components - UI components

### Note

As this was a code task with the assumption to take a couple of hours, it was not used Redux or other state management tools in this project. However, for scalability and managing complex state interactions, it is recommended to configure a state management tool like Redux.