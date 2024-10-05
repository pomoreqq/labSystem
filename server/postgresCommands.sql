




CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(200) UNIQUE NOT NULL,
    roleId INT,
    FOREIGN KEY (roleId) REFERENCES roles(id),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updatedAT TIMESTAMP,
    isActive BOOLEAN DEFAULT TRUE
);


CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    roleName VARCHAR(100) NOT NULL,
    persmissions TEXT
);


CREATE TABLE samples (
    id SERIAL PRIMARY KEY,
    clientId INT NULL,
    FOREIGN  KEY (clientId) REFERENCES clients(id),
    sampleType VARCHAR (100) NOT NULL,
    recivedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    storageConditions VARCHAR(200) NOT NULL,
    STATUS VARCHAR(20) NOT NULL,
    createdBy INT,
    FOREIGN KEY (createdBy) REFERENCES users(id)
);


CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    phoneNumber VARCHAR(20)
);


CREATE TABLE sampleTests (
    id SERIAL PRIMARY KEY,
    sampleId INT,
    FOREIGN KEY (sampleId) REFERENCES samples(id),
    testType VARCHAR(50) NOT NULL,
    testResult VARCHAR (300) NOT NULL,
    performedBy INT,
    FOREIGN KEY (performedBy) REFERENCES users(id),
    completedAt TIMESTAMP
);


CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    category VARCHAR(50),
    status VARCHAR(20) NOT NULL,
    location VARCHAR(50)
);


CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    equipmentId INT,
    FOREIGN KEY (equipmentId) REFERENCES equipment(id),
    userId INT,
    FOREIGN KEY (userId) REFERENCES users(id),
    startTime TIMESTAMP NOT NULL,
    endTime TIMESTAMP NOT NULL,
    purpose TEXT
);



CREATE TABLE inventoryItems(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    supplierId INT,
    FOREIGN KEY (supplierId) REFERENCES suppliers(id)
);


CREATE TABLE suppliers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contactInfo TEXT
);


CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    reportType VARCHAR(50) NOT NULL,
    generatedBy INT,
    FOREIGN KEY (generatedBy) REFERENCES users(id),
    filePath VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP NOT NULL
);



