const db = require('../config/dbConfig');


const getAllSamples = async () => {
    const result = await db.query(`SELECT * FROM samples`);
    return result.rows;
};

const getSampleById = async (id) => {
    const result = await db.query(`SELECT * FROM samples WHERE id = $1`, [id]);
    return result.rows[0];
};


const createSample = async (sampleData) => {
    const { clientId, sampleType, receivedAt, storageConditions, status, createdBy } = sampleData;
    const result = await db.query(
        `INSERT INTO samples (clientId, sampleType, receivedAt, storageConditions, status, createdBy)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [clientId, sampleType, receivedAt, storageConditions, status, createdBy]
    );
    return result.rows[0];
};

const updateSample = async (id, sampleData) => {
    const { clientId, sampleType, receivedAt, storageConditions, status, createdBy } = sampleData;
    const result = await db.query(
        `UPDATE samples SET
            clientId = COALESCE($1, clientId),
            sampleType = COALESCE($2, sampleType),
            receivedAt = COALESCE($3, receivedAt),
            storageConditions = COALESCE($4, storageConditions),
            status = COALESCE($5, status),
            createdBy = COALESCE($6, createdBy)
         WHERE id = $7 RETURNING *`,
        [clientId, sampleType, receivedAt, storageConditions, status, createdBy, id]
    );
    return result.rows[0];
};


const deleteSample = async (id) => {
    const result = await db.query(`DELETE FROM samples WHERE id = $1 RETURNING *`, [id]);
    return result.rows[0];
};

module.exports = {
    getAllSamples,
    getSampleById,
    createSample,
    updateSample,
    deleteSample
};