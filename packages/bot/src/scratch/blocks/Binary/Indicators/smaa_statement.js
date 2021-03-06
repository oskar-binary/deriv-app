import { expectValue } from '../../../shared';
import { translate }   from '../../../../utils/lang/i18n';

Blockly.Blocks.smaa_statement = {
    init() {
        this.jsonInit(this.definition());
    },
    definition(){
        return {
            message0: translate('set %1 to Simple Moving Average Array %2'),
            message1: '%1',
            args0   : [
                {
                    type    : 'field_variable',
                    name    : 'VARIABLE',
                    variable: 'smaa',
                },
                {
                    type: 'input_dummy',
                },
            ],
            args1: [
                {
                    type : 'input_statement',
                    name : 'STATEMENT',
                    check: null,
                },
            ],
            colour           : Blockly.Colours.Special4.colour,
            colourSecondary  : Blockly.Colours.Special4.colourSecondary,
            colourTertiary   : Blockly.Colours.Special4.colourTertiary,
            tooltip          : translate('Calculates Simple Moving Average line from a list with a period'),
            previousStatement: null,
            nextStatement    : null,
            category         : Blockly.Categories.Indicators,
        };
    },
    meta(){
        return {
            'display_name': translate('Simple Moving Average Array (SMAA)'),
            'description' : translate('Simple Moving Average Array (SMAA) is similar to SMA. The only difference is that it returns the entire SMA line, containing a list of all values for a given period. To learn more see SMA indicator.'),
        };
    },
    onchange: Blockly.Blocks.bb_statement.onchange,
};

Blockly.JavaScript.smaa_statement = block => {
    // eslint-disable-next-line no-underscore-dangle
    const varName = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('VARIABLE'),
        Blockly.Variables.NAME_TYPE
    );
    const input = expectValue(block.getChildByType('input_list'), 'INPUT_LIST');
    const period = block.childValueToCode('period', 'PERIOD') || '10';

    const code = `${varName} = Bot.smaa(${input}, ${period});\n`;
    return code;
};
