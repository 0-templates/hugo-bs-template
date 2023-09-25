This file is to provide documentation for the template repo (can be deleted when the template is turned into a new project.)

After cloning this repo, run `npm i` to install everything.

To prevent PurgCSS from purging certian rules, you can either use comments in the scss file to tell PurgeCSS to ignore a section, or you can also use the safelist section of postcss.config.js.

Checklist: 
Rename admin to obscure it - you will need to change: 
    1. The name of the admin dir in /static
    2. The redirect in /static/js/invite-redirect.js

Add an OG image
    Put it in assets/images and name it og-img*, and hugo should find it.

Add the Favicon
    I like to use https://realfavicongenerator.net/
    Put the files into /favicon

Add Google Analytics

Todo: 
set up purgecss
check scss


Possibly in the future, would it be a good idea to move hugo into its own directory to keep things more organized?
