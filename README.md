
# Continents List

This Project is displays the list of continents present and it shows details like list of countries present in it. 

Code is done using *typescript* which handles all those type related issues . Fetching the data from the server is done using *graphql*. Test cases are written for the two components using *react-testing-library.*

 **Progressive Web Apps** this app also satisfies the conditions of PWA and acts as a PWA.



## Tech Stack

**Client:** React, Typescript , GraphQL , Apollo-client, React-testing-library

## Tech description 

* This project is built using **React** CRA. 
* It uses plain **css** for styling. 
* All code is done using **Typescript** where's some part of the code line service worker are done using **Javascript** . 
* It uses **GraphQL** for fetching the data from the server, along with the help of **Apollo-Client.**
* **React-testing-library** for handling the testing part . Here we use unit testing.




  
## API Reference

GraphQL basically 

#### Get all Continents

```https
   countries.trevorblades.com
```

#### Get Continent

```https
  query Continent($code: ID!) 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

 

  ## Folder Structure

Folders are splitted into 4 major this 
* Components 
* Common
* GraphQL
* _ tests_

### Components 
This is the major folder which will have two sub folders for list and details . Each folder will have a index.tsx which is the entry point of the folder and will have it's respective css file as _index.css_ if needed. 

The entry file for the components folder will have all the logic and states and it will send the need states as props to the relevant components like details and list.  

By this way we can make the unit test more easier and _decouple_ the things

### Common

Common folder will have the things that are used widely in more than one component . It will have the helper functions , constants and other things . This way can make things easier where we need to modify things.

### GraphQL 

This folder will have two sub folders as query and mutation , the get queries will be in the query folder and mutation will have the update things like post/put.

### _ tests_

This folder will have the unit test of each component named in their respective components name .
## Demo
 https://admiring-meitner-f351dc.netlify.app/

## Report 
![report](https://github.com/karthick3018/continents-list/blob/main/public/report.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/karthick3018/continents-list
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## Deployment

To deploy this project run

```bash
  npm run deploy
```

  
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

  