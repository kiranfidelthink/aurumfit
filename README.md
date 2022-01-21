## Install the dependencies
nvm use v14.10    
npm install

## The main configuration files is serverless.yml. To deploy the code on AWS run,
serverless deploy

## ***Once deployed the endpoints will be available***


## The random API used gives new records everytime. We need to store those in a file or DB to test the pagination.



## 1. Query to get Users
### 1a. To get all the records pass limit=0 and no need of offset value.
### 1b. To get records as per the page requirements pass values in limit and offset

```
  query GetTestMessage {
  getAllUsers(limit : 10, offset : 0){
     firstName,
     lastName,
     email,
     mobile
  }
 }
```

## 2. To get records with input query
### 2. Pass either of the first, last and email. 

```
 query GetTestMessage($email : String, $first: String, $last: String) {
getUser(email : $email, first: $first, last : $last){
    firstName,
    lastName,
    email
}
}   
```