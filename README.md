# Project Title

## Description

This repository contains the backend code for managing todos and CVs using the NestJS framework. It includes modules for todo management, CV CRUD operations, and middleware for authentication simulation.

## Modules

### CommonModule

- A frequently used module providing common functionalities.
- Includes a function `uuid` for generating UUIDs.
- Contains modules and services for testing purposes.

### Todo Module

- Manages todo items in the application.
- Provides functionalities for adding, updating, and deleting todos.
- Includes API endpoints for retrieving todos and obtaining counts for each status.

### CV Module

- Implements CRUD operations for CVs.
- Includes functionalities for creating, reading, updating, and deleting CVs.
- Utilizes middleware for simulating an authentication process.

## Entity Setup

### TodoEntity

- Represents todo items in the database.
- Configured with TypeORM to manage fields such as `createdAt`, `updatedAt`, and `deletedAt`.
- Includes constraints and custom error messages for adding and updating todos.

### CV Entity

- Represents CVs in the application.
- Manages fields such as `name`, `title`, `description`, etc.
- Includes relationships and associations as needed.

## Middleware

- Implements middleware to simulate an authentication process.
- Checks for the existence of an `auth-user` header containing a JWT token.

## Standalone Application for Database Seeding

- Provides a standalone Nest application layer for seeding the database.
- Allows for easy initialization of the database with initial data.
