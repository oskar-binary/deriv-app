import classNames        from 'classnames';
import PropTypes         from 'prop-types';
import React             from 'react';
import ObjectUtils       from 'deriv-shared/utils/object';
import { localize }      from 'App/i18n';
import { urlFor }        from '_common/url';
import UpgradeButton     from 'App/Containers/RealAccountSignup/upgrade-button.jsx';
import Icon              from 'Assets/icon.jsx';
import { requestLogout } from 'Services/index';
import { connect }       from 'Stores/connect';
import Localize          from 'App/Components/Elements/localize.jsx';

class AccountSwitcher extends React.Component {
    setWrapperRef = (node) => {
        this.wrapper_ref = node;
    };

    handleClickOutside = (event) => {
        const accounts_toggle_btn = !(event.target.classList.contains('acc-info'));
        if (this.wrapper_ref && !this.wrapper_ref.contains(event.target)
            && this.props.is_visible && accounts_toggle_btn) {
            this.props.toggle();
        }
    };

    handleLogout = () => {
        this.props.toggle();
        if (this.props.is_positions_drawer_on) {
            this.props.togglePositionsDrawer(); // TODO: hide drawer inside logout, once it is a mobx action
        }
        requestLogout().then(this.props.cleanUp);
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    async doSwitch(loginid) {
        this.props.toggle();
        if (this.props.account_loginid === loginid) return;
        await this.props.switchAccount(loginid);

        if (this.props.has_error) {
            this.props.clearError();
        }
    }

    get can_manage_currency () {
        return this.props.can_change_currency ||
            (!this.props.is_virtual && !this.props.has_fiat && this.props.can_upgrade_to);
    }

    render() {
        if (!this.props.is_logged_in) return false;
        // TODO: Once we allow other real accounts (apart from CR), assign correct title and group accounts into list with correct account title/types
        // e.g - Real, Financial, Gaming, Investment
        const real_accounts = this.props.account_list.filter(acc => !acc.is_virtual);
        const vrt_account   = this.props.account_list.find(acc => acc.is_virtual);

        const main_account_title = real_accounts.length > 1 ? localize('Real accounts') : localize('Real account');

        return (
            <div className='acc-switcher__list' ref={this.setWrapperRef}>
                {
                    // Make sure this block is not rendered if there are no real accounts
                    !!(this.props.account_list.length && real_accounts.length) &&
                    <div className='acc-switcher__list-group'>
                        <span className='acc-switcher__list-title'>
                            {main_account_title}
                        </span>
                        <div className='acc-switcher__accounts'>
                            {
                                real_accounts.map((account) => (
                                    <div
                                        id={`dt_${account.loginid}`}
                                        key={account.loginid}
                                        className={classNames('acc-switcher__account', {
                                            'acc-switcher__account--selected': (account.loginid === this.props.account_loginid),
                                        })}
                                        onClick={this.doSwitch.bind(this, account.loginid)}
                                    >
                                        <span className={'acc-switcher__id'}>
                                            <Icon
                                                icon='IconAccountsCurrency'
                                                className={`acc-switcher__id-icon acc-switcher__id-icon--${account.icon}`}
                                                type={account.icon}
                                            />
                                            {account.loginid}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>

                        {this.can_manage_currency &&
                            <UpgradeButton
                                onClick={this.props.openRealAccountSignup}
                                outlined
                            >
                                <Icon icon='IconAdd' />
                                <div className='btn__text'>
                                    <Localize
                                        i18n_default_text='Add/manage account'
                                    />
                                </div>
                            </UpgradeButton>
                        }
                    </div>
                }
                {
                    !ObjectUtils.isEmptyObject(vrt_account) &&
                    <div className='acc-switcher__list--virtual'>
                        <span className='acc-switcher__list-title'>
                            {localize('Demo account')}
                        </span>
                        <div className='acc-switcher__accounts'>
                            <div
                                id={`dt_${this.props.virtual_loginid}`}
                                className={classNames('acc-switcher__account', {
                                    'acc-switcher__account--selected': (this.props.virtual_loginid === this.props.account_loginid),
                                })}
                                onClick={this.doSwitch.bind(this, this.props.virtual_loginid)}
                            >
                                <span className={classNames('acc-switcher__id', 'acc-switcher__id--virtual')}>
                                    {this.props.virtual_loginid}
                                </span>
                            </div>
                        </div>
                    </div>
                }
                { !!(this.props.is_upgrade_enabled && this.props.is_virtual && this.props.can_upgrade_to) &&
                <UpgradeButton
                    onClick={() => {
                        if (this.props.can_upgrade_to === 'svg') {
                            this.props.openRealAccountSignup();
                        } else {
                            window.open(urlFor('new_account/maltainvestws', undefined, undefined, true));
                        }
                    }}
                    outlined
                >
                    <Icon icon='IconAdd' />
                    <div className='btn__text'>
                        <Localize
                            i18n_default_text='Add a real account'
                        />
                    </div>
                </UpgradeButton>
                }
                <div id='dt_logout_button' className='acc-switcher__logout' onClick={this.handleLogout}>
                    <span className='acc-switcher__logout-text'>{localize('Log out')}</span>
                    <Icon icon='IconLogout' className='acc-switcher__logout-icon drawer__icon' />
                </div>
            </div>
        );
    }
}

AccountSwitcher.propTypes = {
    account_list          : PropTypes.array,
    account_loginid       : PropTypes.string,
    cleanUp               : PropTypes.func,
    clearError            : PropTypes.func,
    has_error             : PropTypes.bool,
    has_fiat              : PropTypes.bool,
    is_logged_in          : PropTypes.bool,
    is_positions_drawer_on: PropTypes.bool,
    is_upgrade_enabled    : PropTypes.bool,
    is_virtual            : PropTypes.bool,
    is_visible            : PropTypes.bool,
    onClickUpgrade        : PropTypes.func,
    toggle                : PropTypes.func,
    togglePositionsDrawer : PropTypes.func,
    upgrade_info          : PropTypes.object,
    virtual_loginid       : PropTypes.string,
};

const account_switcher = connect(
    ({ client, ui, modules }) => ({
        has_fiat              : client.has_fiat,
        can_change_currency   : client.can_change_currency,
        account_list          : client.account_list,
        can_upgrade           : client.can_upgrade,
        can_upgrade_to        : client.can_upgrade_to,
        account_loginid       : client.loginid,
        is_logged_in          : client.is_logged_in,
        is_virtual            : client.is_virtual,
        switchAccount         : client.switchAccount,
        upgrade_info          : client.upgrade_info,
        cleanUp               : client.cleanUp,
        virtual_loginid       : client.virtual_account_loginid,
        clearError            : modules.contract_trade.clearError,
        has_error             : modules.contract_trade.has_error,
        is_positions_drawer_on: ui.is_positions_drawer_on,
        openRealAccountSignup : ui.openRealAccountSignup,
        togglePositionsDrawer : ui.togglePositionsDrawer,
    }),
)(AccountSwitcher);

export { account_switcher as AccountSwitcher };
