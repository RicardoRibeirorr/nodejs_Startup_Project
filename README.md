<!-- Improved compatibility of back to top link: See: https://github.com/RicardoRibeirorr/nodejs_Startup_Project/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![Issues][issues-shield]][issues-url] -->

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Node.js MVC - Startup Project</h3>

  <p align="center">
    User + Authentification + Posts
    <br />
    <br />
    <a href="#how-to-install">How To Install</a>
    ·
    <a href="#hot-to-use">How To Use</a>
    ·
    <a href="https://github.com/RicardoRibeirorr/nodejs_Startup_Project/issues">Report Bug</a>
    ·
    <a href="https://github.com/RicardoRibeirorr/nodejs_Startup_Project/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

![image of the nodejs - startup project logo](https://ricardoribeirorr.github.io/assets/images/projects/nodejs_statup_project.png)

I've come from a Laravel background, here everything is easy to do and to understand. But I've come to a point where I needed to create a backend Node.js server that includes user authentication and some other stuff, and I could never figure out how to get started, what framework to use and how it works!

If you're filling like me or just want to get started easy with your project, then you're in the right place.
With this startup-project, you have a ready-to-go project that includes users, authentication (login; register; token generation and management), and even posts to make you started on relationships and the systems' architecture.

Of course, no one template will serve all projects, since your needs may be different. So I'll be adding more stuff in the "examples" folder in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

Thanks to all the people have contributed to expanding this template!

Use the `Node.js MVC - Startup Project` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

Download the folder or git clone the project.

- Clone the repo

  ```sh
  git clone https://github.com/RicardoRibeirorr/nodejs_Startup_Project.git
  ```

- Update npm

  ```sh
  npm install npm@latest -g
  ```

- Download your local server, and make sure it works
  - Wampp
  - Xampp

### Installation

1. Install NPM packages
   ```sh
   npm install
   ```
2. Create a database on your local server (Xampp, Wammp, ...)

3. Update `.env` file. If you don't fine one, rename your ".env_example" file in your project root folder to ".env", and fill the required configurations with yours:

   ```conf
    # Application
    APP_KEY=                         #(Required) Visit: https://ricardoribeirorr.github.io/app_key_generator

    # Database
    DB_CONNECTION=mysql              #(Required) local server (xampp, wampp, ...)
    DB_HOST=localhost                #(Required) local server (xampp, wampp, ...)
    DB_PORT=3308                     #(Required) local server (xampp, wampp, ...)
    DB_DATABASE=my_database          #(Required) local server (xampp, wampp, ...)
    DB_USERNAME=admin                #(Required) local server (xampp, wampp, ...)
    DB_PASSWORD=admin                #(Required) local server (xampp, wampp, ...)
   ```

   Note: You can generate your APP_KEY using (<a href="https://ricardoribeirorr.github.io/projects/generate_app_key/">Generate APP_KEY</a>)

4. Seed your project (i.e. create initial data) you can add your own next to the existing ones in `app/database/seeders`

   ```sh
   npm run seed
   ```

   Wait until the operation is finished with success to see if the connection with your database it's ok.

5. Serve your application

   ```sh
   npm run start
   ```

6. Serve your application
   ```sh
   npm run start
   ```
7. Check aplication in your browser `http://localhost:8080`
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Where's what you need to know about MVC and how to use this project.
This area is divided in steps that you should perform in this order as best-practices.

1. Migrations `app/database/migrations`
   Migrations are your new database tables. There is no need for creating those time expensive tables on your local server, now what you can do, it's just with some easy lines of code, create your tables easy and deploy to the database even faster.(<a href="https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/">Check more in Sequelize docs</a>)

2. Models `app/models`
   Models are the face of your tables, it's where you define the relationships between tables and the functions they should perform in their own data like filters, conversions, and so on.(<a href="https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/">Check more in Sequelize docs</a>)

3. Seeds `app/database/seeders`
   Use seeds for when there is initial data that you want to add to your database whenever you refresh/clear it. This may include admin users, basic company information, roles, etc...
   Or you can use it to store testing data while you're working in development mode, and avoid creating the same user over and over again... just an example!(<a href="https://sequelize.org/docs/v6/core-concepts/model-instances/">Check more in Sequelize docs</a>)

4. Controllers `app/controllers`
   Controllers it's where you perform the logic of your requests using your models data. Meaning, if you make a request to your server to create a post, it's in your `post.controller.js` that all the logic will be created, and this includes verifying if you're logged in, if you have permission to create a post, it's the length of data passed right, are the type of data right.(<a href="https://expressjs.com/en/guide/routing.html")

5. Routes `app/routes`
   Routes are the links of your application. There are a verity of methods you can use (GET;POST;DELETE;...) . This is where you call your controllers to create the data to retrieve or use the data you're getting. (<a href="">Check more in ExpressJS docs</a>)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Test Cases

### User

#### Register users with `/signup` API:

- admin with admin role
- mod with moderator and user roles
- zkoder with user role
  ![Register some users ](https://www.bezkoder.com/wp-content/uploads/2020/01/node-js-jwt-authentication-mysql-signup-new-user.png)

#### Login an account: POST `/api/auth/signin`

![Login an account](https://www.bezkoder.com/wp-content/uploads/2020/01/node-js-jwt-authentication-mysql-user-signin.png)

#### Login an account (with wrong password): POST `/api/auth/signin`

![Login an account (with wrong password)](https://www.bezkoder.com/wp-content/uploads/2020/01/node-js-jwt-authentication-mysql-user-signin-wrong-password.png)

### Access resources

#### Access public resource: GET `/api/test/all`

![Access public resource](https://www.bezkoder.com/wp-content/uploads/2020/01/node-js-jwt-authentication-mysql-get-public-content.png)

#### Access protected resource: GET `/api/test/user`

Ex.changing posts of other users it's a protected resource
![Access protected resource](https://www.bezkoder.com/wp-content/uploads/2020/01/node-js-jwt-authentication-mysql-get-authorized-content.png)

## Roadmap

- [x] Include Roles
- [-] Include Posts
- [ ] Include commands for testing connection
- [ ] Add Additional Templates w/ Examples
- [ ] Include storage features
- [ ] Include mysqlite in project folder without the need of extensive .env configuration (like Laravel)
- [ ] Convert project into package
- [ ] Include commands to create models, controllers, seeds and migrations
- [ ] Include commands to include features (auth;roles;posts;etc) into project
- [ ] Review dependencies

See the [open issues](https://github.com/RicardoRibeirorr/nodejs_Startup_Project/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewAmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some NewAmazingFeature'`)
4. Push to the Branch (`git push origin feature/NewAmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Ricardo Ribeiro - [@RicardoRibeiro](https://www.linkedin.com/in/ricardo-ribeiro-5a788712b/)

Project Link: [https://www.linkedin.com/in/ricardo-ribeiro-5a788712b/](https://www.linkedin.com/in/ricardo-ribeiro-5a788712b/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

- [Licence](https://github.com/RicardoRibeirorr/nodejs_Startup_Project/licence.txt)
- [GitHub Pages](https://pages.github.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-url]: https://github.com/RicardoRibeirorr/nodejs_Startup_Project/graphs/contributors
[forks-url]: https://github.com/RicardoRibeirorr/nodejs_Startup_Project/network/members
[stars-url]: https://github.com/RicardoRibeirorr/nodejs_Startup_Project/stargazers
[issues-url]: https://github.com/RicardoRibeirorr/nodejs_Startup_Project/issues
[license-url]: https://github.com/RicardoRibeirorr/nodejs_Startup_Project/licence.txt
[linkedin-url]: https://www.linkedin.com/in/ricardo-ribeiro-5a788712b/
[nodejs-url]: https://nodejs.org/
[expressjs-url]: https://expressjs.com/
[sequelize-url]: https://sequelize.org/
[contributors-shield]: https://img.shields.io/github/contributors/RicardoRibeirorr/nodejs_Startup_Project.svg?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/RicardoRibeirorr/nodejs_Startup_Project.svg?style=for-the-badge
[stars-shield]: https://img.shields.io/github/stars/RicardoRibeirorr/nodejs_Startup_Project.svg?style=for-the-badge
[issues-shield]: https://img.shields.io/github/issues/RicardoRibeirorr/nodejs_Startup_Project.svg?style=for-the-badge
[license-shield]: https://img.shields.io/badge/Licence-MIT-green
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
