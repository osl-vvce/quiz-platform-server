# Schema

## Quizzes

Name | Data Type
------------ | -------------
Quiz ID | integer(P)
Name | varchar
Owner | varchar
Quiz Details | line
Start Date | date
End Date | date
First Question ID | integer
Last Question ID | integer

### Querry

CREATE TABLE quizzes (
    quizID serial PRIMARY KEY,
    name VARCHAR(100),
    owner VARCHAR(100),
    quizDetails line,
    startDate TIMESTAMP NOT NULL,
    endDate TIMESTAMP,
    firstQuestionID INT NOT NULL,
    lastQuestionID INT NOT NULL
);

## Questions

Name | Data Type
------------ | -------------
Question ID | integer(P)
Quiz ID | integer
First Question ID | integer
Last Question ID | integer

### Querry

CREATE TABLE quizzes (
    questionID serial PRIMARY KEY,
    quizID serial PRIMARY KEY,
    firstQuestionID INT NOT NULL,
    lastQuestionID INT NOT NULL
);

## Users

Name | Data Type
------------ | -------------
User ID | integere (P)
Name | name
Email | text

### Querry

CREATE TABLE quizzes (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email text UNIQUE
);

## Game

Name | Data Type
------------ | -------------
Game ID | integer(P)
Status | varchar
User ID | integer
Question ID | integer
Quiz ID | integer
Score | smallint

### Querry

CREATE TABLE quizzes (
    gameID serial PRIMARY KEY,
    status VARCHAR(100),
    id INT NOT NULL,
    questionID INT NOT NULL,
    quizID INT NOT NULL,
    score INT DEFAULT 0
);

> P -> Primary Key