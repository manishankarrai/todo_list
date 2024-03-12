const { validationResult, check } = require('express-validator');

const validateTask = (req, res, next) => {
    const validationRules = [
        check('task').notEmpty().isLength({ min: 1, max: 255 }),
        check('description').optional({ nullable: true }).isLength({ max: 2000 }),
        check('deadline').optional({ nullable: true }).isDate(),
        check('status').optional({ nullable: true }).isIn(['pending', 'completed', 'fail']),
    ];

    // Run validation
    Promise.all(validationRules.map(validationRule => validationRule.run(req)))
        .then(() => {
            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ success: false, errors: errors.array() });
            }
            next(); // Move to the next middleware or route handler
        })
        .catch(error => {
            res.status(500).json({ success: false, errors:  'Internal Server Error'  });
        });
};

const validateTaskOnUpdate = (req, res, next) => {
    const validationRules = [
        check('task').optional({ nullable: true }).isLength({ min: 1, max: 255 }),
        check('description').optional({ nullable: true }).isLength({ max: 2000 }),
        check('deadline').optional({ nullable: true }).isDate(),
        check('status').optional({ nullable: true }).isIn(['pending', 'completed', 'fail']),
    ];

    // Run validation
    Promise.all(validationRules.map(validationRule => validationRule.run(req)))
        .then(() => {
            // Check for validation errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ success: false, errors: errors.array() });
            }
            next(); // Move to the next middleware or route handler
        })
        .catch(error => {
            res.status(500).json({ success: false, errors: 'Internal Server Error'  });
        });
};



module.exports = {
    validateTask , validateTaskOnUpdate
}