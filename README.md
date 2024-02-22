
**DOCKER-REACT-WEBSITE-STARTER**

******************************************************************************

SCREENSHOTS: [link](https://imgur.com/a/uenB4vn)

TLDR: This is intended to be a quick starter for getting a node/react website (template for a brick-and-mortar retail establishment) up and running in a docker container.

******************************************************************************

Here is a website that runs from a docker container on localhost port 80, utilizing yarn, node, React, React-Bootstrap.

The docker container uses an installation of Ubuntu 22.04 with several common tools (such as htop and vim) installed. The node/React website itself is of low-medium complexity, built for a ficticious business, featuring a home page with several menu items and navigation, some images, and a method for supporting multiple languages (configured for English/Spanish in this example).


**Prerequisites**

1) docker needs to be installed.

2) 'doit' is a LINUX script. If you are not running linux then deconstruct this script for your docker commands as appropriate.

**To Run**

Run the script "doit" (options b, then r) to build and then run this website. Shortly after the container has started running, the website should be accessible via the browser at 'localhost'.
 
**Notes**
1) The first time is probably going to take several minutes, some warnings, and the install may even appear to hang after the "Happy hacking! Done in xx.xxs." messages. Hang in there. After the first time things should go much quicker. Also, the first time, if you get a timeout error (might happen with yarn install on a pi3), run option 'b' again and that should resolve the issue.
2) After running the container, make sure to give yarn about a minute to start up the server, before checking the output on your browser at localhost.
3) To use your own project (which was created with create react-app or create-react-app), replace the src and public folders and package.json with your own. 
4) react-scripts 3.2.0 (instead of 3.3.0) is being used in the package.json file, due to incompatibility issue between 3.3.0 and React-Bootstrap.

************************************************


*(this page last updated: 20240221)*
