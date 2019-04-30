# Overview
This site is built using [webpack](https://github.com/webpack/webpack) with a very simple configuration that should be accessible and easy enough to use for anyone that needs to make modifications to the content.  Best practices are ensuring this simple static site is lightweight and performant. 

This site uses the [Bulma CSS Framework](https://bulma.io).

# Development Workflow
1. Copy Repository
2. Running `npm install` will install all required dependencies
3. Running `npm run build` will ensure that the website is compiled and ready to serve
4. Running `npm run start:dev` will do the following:
	1. Start the webpack webserver which runs at [http://localhost:8080](http://localhost:8080)
	2. Watch for any code changes and recompile on save
	3. Refresh the browser to reflect the code change


# Deploying to Production
To compile the site for produciton use, run `npm run build` which builds optimized/minified assets and compiles the pages of the site into /dist.  The dist directory is what should be uploaded to the production web server. 

# Structure
```
|-- Boilerplate
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- webpack.config.js
    |-- src
        |-- index.html
        |-- index.js
        |-- assets
        |   |-- images
        |   |   |-- logo-2018.svg
        |   |   |-- security-banner.png
        |   |-- js
        |   |   |-- bulma-hamburger-menu.js
        |   |   |-- scripts.js
        |   |-- styles
        |       |-- styles.scss
        |       |-- typography.scss
        |       |-- modules
        |           |-- footer.scss
        |           |-- gradient-hero.scss
        |           |-- navbar.scss
        |           |-- social-icons.scss
        |-- partials
            |-- content
            |   |-- content-block.html
            |-- layout
                |-- footer.html
                |-- navbar.html
                |-- social-links.html
```

## /src
All edits to the website should be made in the files and directories located within here.

### *index.js*
This file serves as the entry point for webpack.  As configured at the time of launch, this file should not need to be modified

### *index.html*
The homepage (and currently only page) of the website.  

## /src/assets
This folder contains all JS, SCSS and image files used across the website.

### */assets/js/scripts.js*
This file is used to load any required javascript files.  All files and code loaded into this file will be compiled and minified into the dist directory

### */assets/scss/styles.scss*
This file is used to load any required CSS or SCSS files across the site.  Any customization and overwrites of Bulma should follow the [guidlines outlined on this page](https://bulma.io/documentation/customize/).

The SCSS is broken apart into seperate 'modules' that correspond to the content/sections that they control.  The naming convention of these files is meant to be self-explainitory. 

## /src/partials
/src/index.html loads several partials that are all located within the partials directory.  This directory is broken down into two directories (content and layout).

### */src/paritals/content*
The files in this section break apart the various sections of content into smaller, more managable files.  Any content changes will likely occur within the files in this section.  The current naming convention of these files follows the text headings of each section as per the design.

### */src/partials/layout*
The files located in this section are more structural in nature and will likely not need many edits in the future. 
