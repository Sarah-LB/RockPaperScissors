<h1 align="center">Rock Paper Scissors</h1>

[View the live project here.](https://sarah-lb.github.io/MySecondProject/)

This site has been created for my Milestone Project 2: Interactive Frontend Development.  It is an online Rock Paper Scissors game for the purpose of having fun!

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn how to play the game.
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
        3. As a First Time Visitor, I want to locate the social media links to see their followings on social media and find any other games that are available.

    -   #### Returning Visitor and Frequent User Goals

        1. As a Returning Visitor, I want to play and have fun.
        2. As a Returning Visitor, I want to find social media links.

    -   #### Developer and Site Owner Goals

        1. As a Developer/Site Owner, I want to build an interactive frontend site.
        2. As a Developer/Site Owner, I want to have fun playing on the game.
        3. As a Returning Visitor, I want to make my social media links accessible in order to promote any other games I build.

-   ### Design
    -   #### Colour Scheme
        -   The four main colours used in Rock Paper Scissors are a mustard yellow, warm orange, dark red and deep purpley blue.  These were inspired by the [Adobe Color library](https://color.adobe.com/trends/Game-design).  Yellow is associated with playfulness, happiness and fun, which suggests it would promote appropriate emotions in the user.  Blue promotes relaxation whilst orange symbolises energy, friendliness and action.
    -   #### Typography
        -   The Patrick Hand font is the main font used throughout the whole website with Cursive as the fallback font in case the font isn't being imported into the site correctly. Patrick Hand is a clean and clear font with the casual hand-written style adding a more fun and friendly feel.
    -   #### Imagery
        -   Imagery is important. The large, game play images are designed to be striking and catch the user's attention. The bright, bold background has a fun, energetic and playful aesthetic.

*   ### Wireframes

    -   Home Page Wireframe - [View](assets/images/landing-page.png)

    -   Game Play Wireframe - [View](assets/images/play-game.png)

    -   How to Play Wireframe - [View](assets/images/how-to-play.png)

## Features

-   The site is responsive on all device sizes

-   There are interactive elements to the game

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScipt](https://www.javascript.com/)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the navbar to change the colour of menu items while being hovered over and to change the size of the game play icons whenbeing hovered over.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Indie Flower' and 'Patrick Hand' fonts.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for social media.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.
1. [SweetAlert2](https://sweetalert2.github.io/)
    - SweetAlert2 was used to make more attractive gamne alerts.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results]()
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results]()
-   [JavaScript Validator](https://jshint.com/)
-   [HTML, CSS and JavaScript formatter](https://webformatter.com/)
-   Lighthouse used for responsiveness, compatability, accessibility etc. - [Results]()

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn how to play the game.

        1. Upon entering the site, users are automatically greeted with two clear and easily readable buttons to go to the page of their choice.
        2. The how to play instructions are clear and explain to the user the rules of the game.

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        1. At the top of each page there is a clean navigation bar, each link describes the page they will end up at clearly.

    3. As a First Time Visitor, I want to locate the social media links to see their followings on social media and find any other games that are available.
        
        1. The user can find social media links prominently poisitioned at the top of the page, in the navbar, on every page.

-   #### Returning Visitor and Frequent Visitor Goals

    1. As a Returning Visitor, I want to play and have fun.

        1. The game is easy to play and the site is easy to navigate so returning visitors can get back to the game immediately.

    2. As a Returning Visitor, I want to find social media links.

        1. The user can find social media links prominently poisitioned at the top of the page, in the navbar, on every page.
    
-   #### Developer and Site Owner Goals

    1. As a Developer/Site Owner, I want to build an interactive frontend site.
        
        1. Players muct interact with the site in order to play the game.

    2. As a Developer/Site Owner, I want to have fun playing on the game.
        
        1. The game is fun and intuitive.

    3. As a Returning Visitor, I want to make my social media links accessible in order to promote any other games I build.
        1. Social media links are prominently poisitioned at the top of the page, in the navbar, on every page.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone6, Samsung Galaxy A71 & iPad.
-   A large amount of testing was done to ensure that all pages were linking correctly and game play was working.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Fixed Bugs
-   When the player selected their image, the game alerts were appearing before the images appeared in the boxes.  The image sizes were reduced but this did not solve the issue.  After much research, a Timeout was set to allow the DOM to be updated before the alert is generated.
-   When the computerChoice was set to paper, the alerts were not appearing.  By logging each variable and play outcome it became apparent that once the computerChoice was set to paper, the rest of the script was not running.  There was a return at the end of the if else statement that needed to be removed.
-   The game play icons get slightly larger when hovered over.  This was originally implemented using javascript mouseenter and mouseleave but caused problems on touchscreen devices so was replaces with css hover.

### Known Bugs

-   No known bugs.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Sarah-LB/MySecondProject)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://sarah-lb.github.io/MySecondProject/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Sarah-LB/MySecondProject)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Sarah-LB/MySecondProject)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

-   [SweetAlert2](https://sweetalert2.github.io/): SweetAlert2 was used to make more attractive gamne alerts.

-   The README code was taken and adapted from the [Code Institute Sample ReadMe](https://github.com/Code-Institute-Solutions/SampleREADME/commit/982e3b0e0086ced89d9a643d9e4d9d0c6f938ec2).

-   [Box shadows](https://getcssscan.com/css-box-shadow-examples): Used code to put box shadows on buttons on index.html page.

-   Navbar code taken and edited from [W3 Schools](https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp).

### Content

-   All content was written by the developer.

-   Psychological properties of colours text in the README.md was found [here](https://www.trajectorywebdesign.com/blog/web-design-color-psychology/).

### Media

-   Rock image created by [macrovector](https://www.freepik.com/macrovector) and sourced from [Freepik](https://www.freepik.com/vectors/clip-art).
-   Paper image created by [brgfx](https://www.freepik.com/brgfx) and sourced from [Freepik](https://www.freepik.com/vectors/clip-art).
- Scissors image created by [brgfx](https://www.freepik.com/brgfx) and sourced from [Freepik](https://www.freepik.com/vectors/clip-art).

### Acknowledgements

-   My Mentors, Akshat Garg and Narender Singh, for continuous helpful feedback.

-   Tutor support at Code Institute for their guidance.