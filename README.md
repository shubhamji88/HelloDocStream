# Doc Stream

![image](https://user-images.githubusercontent.com/50829119/174479315-a9d4405d-c35a-4c18-b19f-4ec7a3e69abd.png)

# 👋 Introduction

## DocStream
DocStream full form is Document Stream, as name suggest DocStream allows **users to host their documents, allows access from anywhere, allws team mates to collaborate in real time.**

**DocStream alows a 2 step solution to host documents which is the minimum I could be 😁.**

- Enter any xxxx such that   **docstream/xxxx** is available if available its yours 
- Edit Document or copy paste a local document to host online
- You are done simply share the link with team or with friends
- Note:- User have an option to secure the document by adding a password, others who want to access the link will have to enter the password.
- Encrypt all your documents and passwords access them anywhere. 
- Simple. Fast. Free. No ads. Secure - don't trust us, check the [code](https://github.com/kdsinghcoder/docstream) yourself.

![image](https://user-images.githubusercontent.com/50829119/174479335-a8913cc2-c101-4dc1-80e6-a3446ca9440c.png)

The idea for downstream evolved from Three different apps let's first discuss them separately.

## Running on Local System

Running the project on local system is **strongly recommended**, even if you are not working on the backend. This is becuase to test the middlewars, client applications, or any other component, an instance of DocStreme server is required. Make sure that you have a mongodb instance running. This step might be different depending on your installation type. If you do not have mongodb database installed, refer [this link](https://docs.mongodb.com/manual/administration/install-community/)

- Make sure you have instaled the server you can find the details [here](https://github.com/shubhamji88/HelloDocStream)
- Also make sure you have an instance of mongoDB running locally
- Start the Server as per details given in first point.
- Details to install the client side code 
  - Clone the repository to your system using `https://github.com/shubhamji88/HelloDocStream`
  - Now open the cloned repository using `cd docstream`
  - Install yarn globally `npm install --global yarn` or find alternative ways [here](https://classic.yarnpkg.com/en/docs/install#windows-stable)
  - The project depends on numerous npm packages. Install them using `yarn install`
  - Run `yarn build` to launch a development server.
  - Run `yarn dev` to launch a development server.
  - Now go to the cloned repository  root open terminal and run `cd docstreme-server`
  - The project depends on numerous npm packages. Install them using `yarn install`
  - Run `yarn start` to launch backend server.
  - Now go to the cloned repository  root open terminal and run `cd HelloSignServer`
  -  Install dependencies using `yarn install`
  - Run `node index.js` to launch backend server to support Hello Sign API.
  - Open [localhost:3000](http://localhost:3000) and ensure that the server is running.


## Idea Discussion 

### First inspiration

>**[ProtectText.com](protecttext.com)**

**the basic idea is to Enter any URL, e.g. protectedText.com/anything if available - it's yours!**

This allows protecttext.com to be opened in one single click and start making notes without any long signing up forms and signing in every single time one enters. One simply enters the link sent a password and it's done. This allows maintaining user's privacy

- this is the easiest way to store text online in just one click
- The safest site on the web for storing your text!
- Enter any URL, e.g. protectedText.com/anything You find it - it's yours!
- Encrypt all your notes, access them anywhere. 
- Simple. Fast. Free. No ads. Secure.


### Second Inspiration

> **[codeshare](https://codeshare.io/)**

**Share Code in Real-time with Developers**

- codeshare allocates one link to one code user can share and which can be accessed by anyone in real-time allowing teams to collaborate.

### Third Inspiration

>**[Google Docs](https://docs.google.com/)**
- A real time doc editor
- no need to keep saving
- can be accessed from everywhere
- allows user to collaborate

## Designs

  ### Story Board
  ![image](https://user-images.githubusercontent.com/50829119/174478944-f7f95a11-f848-4692-b9a1-29b969ccb35d.png)
  
  ### HTA
  ![image](https://user-images.githubusercontent.com/50829119/174479005-5085be0a-3178-4a2d-bbd1-bf9fb30fa8c0.png)




