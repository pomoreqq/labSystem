
CREATE TYPE role AS ENUM ('admin', 'labTechnician' ,'manager', 'inevntoryWorker');

CREATE TYPE sampleType AS ENUM ('biological','chemical', 'environmental', 'clincial', 'industrial', 'pharmaceutical', 'food', 'material');

CREATE TYPE sampleStatus AS ENUM ('new', 'inAnalysis', 'analyzed');

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    role role NOT NULL,
    password VARCHAR(50)
);


CREATE TABLE samples (
    id SERIAL PRIMARY KEY,
    sampleNumber UUID DEFAULT uuid_generate_v4(),
    sampleType sampleType NOT NULL,
    description TEXT,
    collected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status sampleStatus NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    availability BOOLEAN NOT NULL,
    location VARCHAR(50) NOT NULL
);

CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    equipment_id INT,
    FOREIGN KEY (equipment_id) REFERENCES equipment(id),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    startTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    endTime TIMESTAMP
);


CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    unit VARCHAR(10) NOT NULL,
    expirationDate TIMESTAMP,
    supplier VARCHAR(30) NOT NULL,
    location VARCHAR(50) NOT NULL
);


CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    generatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reportType VARCHAR(30) NOT NULL,
    content TEXT NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE analysisresults (
    id SERIAL PRIMARY KEY,
    sample_id INT,
    FOREIGN KEY (sample_id) REFERENCES samples(id),
    resultData JSON NOT NULL,
    dateAnalysis TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    analyzed_by INT,
    FOREIGN KEY (analyzed_by) REFERENCES users(id)
);