export const unrecoverable_errors = [
    'InsufficientBalance',
    'CustomLimitsReached',
    'OfferingsValidationError',
    'InvalidCurrency',
    'ContractBuyValidationError',
    'NotDefaultCurrency',
    'PleaseAuthenticate',
    'FinancialAssessmentRequired',
    'PositiveNumberExpected',
    'OptionError',
    'IncorrectPayoutDecimals',
    'IncorrectStakeDecimals',
    'NoMFProfessionalClient',
];

export const message_types = Object.freeze({
    ERROR: 'error',
    NOTIFY: 'notify',
    SUCCESS: 'success',
    BUTTON: 'button',
});

export const error_types = Object.freeze({
    RECOVERABLE_ERRORS: 'recoverable_errors',
    UNRECOVERABLE_ERRORS: 'unrecoverable_errors',
});
