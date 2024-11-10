


const validateStorageJsonData = async (data) => {
    const errors = []

    if (!data.temperature) errors.push('temperature is required');
    if (!data.humidity) errors.push('humidity is required');
    if (!data.light) errors.push('light is required');
    if (!data.storageDuration) errors.push('storageDuration is required');
    if (!data.atmosphere) errors.push('atmosphere is required');
    if (!data.position) errors.push('position is required');
    if (data.vibrationFree === undefined) errors.push('vibrationFree is required');
    if (!data.accessTimeLimit) errors.push('accessTimeKimit is required');



    if (data.temperature && typeof data.temperature !== 'string') {
        errors.push('temperature must be a string');
    }
    if (data.humidity && typeof data.humidity !== 'string') {
        errors.push('humidity must be a string');
    }
    if (data.light && typeof data.light !== 'string') {
        errors.push('light must be a string');
    }
    if (data.storageDuration && typeof data.storageDuration !== 'string') {
        errors.push('storageDuration must be a string');
    }
    if (data.atmosphere && typeof data.atmosphere !== 'string') {
        errors.push('atmosphere must be a string');
    }
    if (data.position && typeof data.position !== 'string') {
        errors.push('position must be a string');
    }
   
    if (typeof data.vibrationFree !== 'boolean') {
        errors.push('vibrationFree must be a boolean');
    }
    if (data.accessTimeLimit&& typeof data.accessTimeLimit !== 'string') {
        errors.push('accessTimeLimit must be a string');
    }



    return {
        isValid: errors.length === 0,
        errors: errors
    }

}


module.exports = {
    validateStorageJsonData
}