DROP DATABASE IF EXISTS Fraud_detect;
CREATE DATABASE Fraud_detect;
use Fraud_detect;

CREATE TABLE Contacts (
    id  INT auto_increment,
    username VARCHAR(100),
    email VARCHAR(100),
    phone INT,
    inquiry TEXT,
    Primary key(Id)
);


-- drop table Contacts;

select * from Contacts;

