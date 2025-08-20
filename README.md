# FINAL_PROJECT


<p align="center">
  <img src="src/assets/logo.png" alt="Logo" width="200"/>
</p>

<h1 align="center">Office Insights </h1>


Office Insights is a modern video sharing application that gives tips on how to use Microfost office applications which is built with React for the frontend and a Sequelize/Node/MySQL backend. This platform empowers professionals to share content, develop their skills and take their careers to the next step.

## Team Members / Roles

- **Steve** : Project lead, wireframe, React single-page layout design
- **Dan** : MySQL database creation and lead on backend scripting
- **Andomski** : Models and routes for backend (JavaScript)
- **Harley** : Folder structure organization, presentation menu structure
- **Csilla** : Frontend components and CSS styling

## Features

- **React-powered frontend** for seamless video browsing and sharing
- **MySQL database** for storing user and video information
- **Sequelize ORM** for database modeling
- **JWT authentication** for secure login
- **Node.js & Express backend** for handling API requests
- **Video sharing functionality** designed for professionals
- **Full-stack integration** with streamlined development workflow

## Installation

Follow these steps to install and set up Office Insights locally:

### 1. Clone the Repository

```sh
git clone https://github.com/stevehunt70/final_project.git
cd final_project
```

### 2. Install Dependencies
Run the following command in the root directory to install dependencies.

#### Required dependencies

```sh
npm i dotenv react react-dom react-router-dom mysql jsonwebtoken vite sequelize express nodemon concurrently mysql2 bcrypt cors
```

#### Install Development dependencies:

```sh
npm i @vitejs/plugin-react
```

## Additional Setup Instructions
#### 1. Create your .env file in the server folder. Include your MySQL credentials:

```sh
DB_PASSWORD=your_mysql_password
DB_DATABASE=gota_video_db
```
#### 2. Check if db/schema.sql exists, then log into MySQL:

```sh
mysql -u root -p
```

#### 3. Create the database by running:

```sh
source db/schema.sql;
```

#### 4. Seed the database with test data:

```sh
source db/seed_data.sql;
```

## Running the Application

```sh
npm run dev
```
- Frontend will run at: http://localhost:5173
- Backend will run at: http://localhost:3001

## License

This project is licensed under **Gurus of the Apocalypse**.