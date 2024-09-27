-- CREATE DATABASE VetCentral
--     ENCODING UTF8
--     TEMPLATE template0;


create table Pet (
    petId UUID NOT NULL CONSTRAINT PK_Pet_Id PRIMARY KEY,
    age INTEGER,
    gender VARCHAR(255),
    weight FLOAT,
    createdDate timestamptz
);

create table User (
    Id UUID NOT NULL CONSTRAINT PK_User_Id PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)L,
    encryptedPassword VARCHAR(255),
    telNo VARCHAR(255),
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    gender VARCHAR(40),
    age INTEGER,
    address VARCHAR(255),
    createdDate timestamptz
    petId UUID, 
    CONSTRAINT fk_User
        FOREIGN KEY(petId)
        REFERENCES Pet(petId)
);