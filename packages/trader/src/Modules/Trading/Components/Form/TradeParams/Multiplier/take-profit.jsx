import PropTypes from 'prop-types';
import React from 'react';
import { localize } from '@deriv/translations';
import Fieldset from 'App/Components/Form/fieldset.jsx';
import InputWithCheckbox from 'App/Components/Form/InputField/input-with-checkbox.jsx';
import { connect } from 'Stores/connect';

const TakeProfit = ({
    currency,
    has_take_profit,
    is_single_currency,
    onChange,
    onChangeMultiple,
    take_profit,
    validation_errors,
}) => {
    const changeValue = e => {
        if (e.target.name === 'has_take_profit') {
            const new_val = e.target.value;
            onChangeMultiple({
                [e.target.name]: new_val,
                ...(new_val ? { has_cancellation: false } : {}),
            });
        } else {
            onChange(e);
        }
    };

    return (
        <Fieldset className='trade-container__fieldset'>
            <InputWithCheckbox
                classNameInlinePrefix='trade-container__currency'
                classNameInput='trade-container__input'
                currency={currency}
                defaultChecked={has_take_profit}
                error_messages={has_take_profit ? validation_errors.take_profit : undefined}
                is_single_currency={is_single_currency}
                is_negative_disabled={true}
                is_input_hidden={!has_take_profit}
                label={localize('Take profit')}
                name='take_profit'
                onChange={changeValue}
                tooltip_label={localize(
                    'Your contract is closed automatically when your profit is more than or equals to this amount.'
                )}
                value={take_profit}
            />
        </Fieldset>
    );
};

TakeProfit.propTypes = {
    currency: PropTypes.string,
    has_take_profit: PropTypes.bool,
    is_single_currency: PropTypes.bool,
    onChange: PropTypes.func,
    onChangeMultiple: PropTypes.func,
    take_profit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    validation_errors: PropTypes.object,
};

export default connect(({ modules, client }) => ({
    is_single_currency: client.is_single_currency,
    currency: modules.trade.currency,
    has_take_profit: modules.trade.has_take_profit,
    onChange: modules.trade.onChange,
    onChangeMultiple: modules.trade.onChangeMultiple,
    take_profit: modules.trade.take_profit,
    validation_errors: modules.trade.validation_errors,
}))(TakeProfit);
