In this project, let's build a Destination Search app by applying the concepts we have learned till now.

Refer to the image below:

![image](https://github.com/bukka5sandhya/React-Js-Destination-Search/assets/133884532/be99f4ce-2dc7-4c75-aac1-4bbe79278d2a)

https://assets.ccbp.in/frontend/content/react-js/destination-search-output-v2.gif

Design Files

Click to view

Extra Small (Size < 576px) and Small (Size >= 576px)

Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)

Set Up Instructions

Click to view

Download dependencies by running npm install

Start up the app using npm start

Completion Instructions

Functionality to be added

The app must have the following functionalities

Initially, all destinations in the destinationsList should be displayed

When a value is provided in the search input, only the destinations whose names contain the value provided in the search input should be displayed irrespective of the case

The DestinationSearch component receives the destinationsList as a prop. It consists of a list of destination objects with the following properties in each destination object

Key	Data Type

id	Number

name	String

imgUrl	String

components Struture

![image](https://github.com/bukka5sandhya/React-Js-Destination-Search/assets/133884532/eeccbda9-4c73-4176-a254-a0fce763653a)

Implementation Files

Use these files to complete the implementation:


src/components/DestinationSearch/index.js

src/components/DestinationSearch/index.css

src/components/DestinationItem/index.js

src/components/DestinationItem/index.css

Important Note

Click to view

The following instructions are required for the tests to pass

The search for the destination should be case insensitive. You can use the toLowerCase method to convert a string into lower case letters.

const text = 'Learn JavaScript'
console.log(text.toLowerCase()); // learn javascript

Each DestinationItem should have an HTML image element with alt attribute value as the value of the key name in destinationsList

Resources
Image URLs

https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png alt should be search icon

Colors

Hex: #252627

Hex: #0f172a

Hex: #f1f5f9

Hex: #000000

Font-families

Roboto

Open Sans

Things to Keep in Mind

All components you implement should go in the src/components directory.

Don't change the component folder names as those are the files being imported into the tests.

Do not remove the pre-filled code

Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.

console.log(text.toLowerCase()); // learn javascript
