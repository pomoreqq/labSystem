class validationError extends Error {
    constructor(errors) {
        super('Invalid storage conditions')
        this.name = 'Validation error',
        this.errors = errors
    }
}


module.exports = validationError