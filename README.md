# ZEMOGA

test app

## To access the web version of the application, use the following URL:

## http://65.109.137.184:19006/.

Note that the correct protocol is "http" not "https"

## To install the application,

you need to have Node.js installed, preferably a version older than 16, and the package manager Yarn. You can find installation instructions for Yarn at https://classic.yarnpkg.com/lang/en/docs/install/ and for Node.js at https://nodejs.org/en/download.

## Once you have the prerequisites installed, follow these steps:

Create a folder to hold all the project files.
Place all the project files in this folder.
Open a command line interface in the "zemoga" folder.
Run the command: yarn install. You might receive some warnings during the installation process; this is normal.
The application was developed using Metro, which allows you to test it on both the web and Android platforms.

## To run the app:

Execute the command: npm start.
You'll have two options:
a. To run the web version, press "w" and scan the QR code with your device to view it.
b. To run the app on an emulator (if you have it installed), choose that option.
To initially load data from the API, press the "Api call" button. This will load the list of posts. You can mark a post as a favorite by tapping the heart icon (which will change its color), and you can undo this by tapping it again.

Additionally, you can tap on a list item to view its details. From there, you can also mark or unmark a post as a favorite. Navigating between screens is done using the native method, typically an arrow in the upper part of the screen.

If you want to delete all posts except for your favorites, you can do so by pressing the delete button.
