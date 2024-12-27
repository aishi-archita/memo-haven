CREATE DATABASE MemoHaven;
USE MemoHaven;

-- Create Users table
CREATE TABLE IF NOT exists `MemoHaven`.`Users`(
	`userId` VARCHAR(40) NOT NULL,
    `email` VARCHAR(100) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL,
    `firstName` VARCHAR(30),
    `lastName` VARCHAR(30),
    PRIMARY KEY(`userId`)
) ENGINE = InnoDB; 

-- Create Tags Table
CREATE TABLE IF NOT exists `MemoHaven`.`Tags`(
	`tagId` VARCHAR(40) NOT NULL,
    `tagName` TEXT NOT NULL,
    `userId` VARCHAR(40) NOT NULL,
    PRIMARY KEY(`tagId`),
    FOREIGN KEY (`userId`) REFERENCES Users(`userId`)
) ENGINE = InnoDB;

-- Create Notes table
CREATE TABLE IF NOT exists `MemoHaven`.`Notes`(
	`noteId` VARCHAR(40) NOT NULL,
    `createdBy` VARCHAR(40) NOT NULL,
    `createdAt` DATETIME,
    `updatedAt` DATETIME,
    `heading` VARCHAR(100),
    `body` TEXT,
    `isPinned` VARCHAR(10) NOT NULL,
    `isArchived` VARCHAR(10) NOT NULL,
    `tagId` VARCHAR(40) NOT NULL,
    PRIMARY KEY(`noteID`),
    FOREIGN KEY (`createdBy`) REFERENCES Users(`userId`),
    FOREIGN KEY (`tagId`) REFERENCES Tags(`tagId`)
) ENGINE = InnoDB; 