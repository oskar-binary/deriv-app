import { translate } from '../../../../utils/lang/i18n';
import { setBlockTextColor } from '../../../utils';

Blockly.Blocks.tick_analysis = {
    init() {
        this.jsonInit(this.definition());
    },
    definition(){
        return {
            message0: translate('The content of this block is called on every tick %1 %2'),
            args0   : [
                {
                    type: 'input_dummy',
                },
                {
                    type : 'input_statement',
                    name : 'TICKANALYSIS_STACK',
                    check: null,
                },
            ],
            colour         : Blockly.Colours.RootBlock.colour,
            colourSecondary: Blockly.Colours.RootBlock.colourSecondary,
            colourTertiary : Blockly.Colours.RootBlock.colourTertiary,
            tooltip        : translate('You can use this block to analyze the ticks, regardless of your trades'),
            category       : Blockly.Categories.Tick_Analysis,
        };
    },
    meta(){
        return {
            'display_name': translate('Run on every tick'),
            'description' : translate('The content of this block is called on every tick. This blocks should be placed outside of any root block.'),
        };
    },
    onchange() {
        setBlockTextColor(this);
    },
};

Blockly.JavaScript.tick_analysis = block => {
    const stack = Blockly.JavaScript.statementToCode(block, 'TICKANALYSIS_STACK') || '';

    const code = `
    BinaryBotPrivateTickAnalysisList.push(function BinaryBotPrivateTickAnalysis() {
        ${stack}
    });\n`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
