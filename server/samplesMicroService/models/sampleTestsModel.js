const db = require('../config/dbConfig');

// Pobierz wszystkie testy dla konkretnej próbki
const getTestsBySampleId = async (sampleId) => {
    const result = await db.query(`SELECT * FROM sampleTests WHERE sampleId = $1`, [sampleId]);
    return result.rows;
};

// Pobierz test według ID dla konkretnej próbki
const getTestById = async (sampleId, testId) => {
    const result = await db.query(`SELECT * FROM sampleTests WHERE sampleId = $1 AND id = $2`, [sampleId, testId]);
    return result.rows[0];
};

// Dodaj nowy test do próbki
const createTest = async (testData) => {
    const { sampleId, testType, testResult, performedBy, completedAt } = testData;
    const result = await db.query(
        `INSERT INTO sampleTests (sampleId, testType, testResult, performedBy, completedAt)
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [sampleId, testType, testResult, performedBy, completedAt]
    );
    return result.rows[0];
};

// Zaktualizuj istniejący test dla próbki
const updateTest = async (testId, testData) => {
    const { sampleId, testType, testResult, performedBy, completedAt } = testData;
    const result = await db.query(
        `UPDATE sampleTests SET
            sampleId = COALESCE($1, sampleId),
            testType = COALESCE($2, testType),
            testResult = COALESCE($3, testResult),
            performedBy = COALESCE($4, performedBy),
            completedAt = COALESCE($5, completedAt)
         WHERE id = $6 RETURNING *`,
        [sampleId, testType, testResult, performedBy, completedAt, testId]
    );
    return result.rows[0];
};

// Usuń test
const deleteTest = async (testId) => {
    const result = await db.query(`DELETE FROM sampleTests WHERE id = $1 RETURNING *`, [testId]);
    return result.rows[0];
};

module.exports = {
    getTestsBySampleId,
    getTestById,
    createTest,
    updateTest,
    deleteTest
};