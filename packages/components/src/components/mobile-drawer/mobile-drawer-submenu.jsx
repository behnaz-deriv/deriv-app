import classNames        from 'classnames';
import React             from 'react';
import { CSSTransition } from 'react-transition-group';
import Icon              from '../icon';

class SubMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            is_expanded: false,
        };
    }

    toggleMenu = () => {
        this.setState({ is_expanded: !this.state.is_expanded });
    }

    render() {
        return (
            <>
                <div
                    className={classNames(
                        'dc-mobile-drawer__submenu-toggle',
                        this.props.submenu_toggle_class,
                    )}
                    onClick={this.toggleMenu}
                >
                    {this.props.submenu_icon &&
                        <Icon
                            className='dc-mobile-drawer__submenu-toggle-icon'
                            icon={this.props.submenu_icon}
                        />
                    }
                    {this.props.submenu_title &&
                    <h3 className='dc-mobile-drawer__submenu-toggle-text'>
                        {this.props.submenu_title}
                    </h3>
                    }
                    {this.props.submenu_suffix_icon &&
                        <Icon
                            className='dc-mobile-drawer__submenu-toggle-suffix-icon'
                            icon={this.props.submenu_suffix_icon}
                        />
                    }
                </div>
                <SubMenuList
                    has_subheader={this.props.has_subheader}
                    is_expanded={this.state.is_expanded}
                    submenu_title={this.props.submenu_title}
                    collapse={this.toggleMenu}
                >
                    {this.props.children}
                </SubMenuList>
            </>
        );
    }
}

const SubMenuList = ({ is_expanded, collapse, children, has_subheader, submenu_title }) => (
    <CSSTransition
        in={is_expanded}
        classNames={{
            enter    : 'dc-mobile-drawer__submenu-list--enter',
            enterDone: 'dc-mobile-drawer__submenu-list--enter-done',
            exit     : 'dc-mobile-drawer__submenu-list--exit',
        }}
        timeout={250}
        unmountOnExit
    >
        <div
            className={classNames('dc-mobile-drawer__submenu-list', {
                'dc-mobile-drawer__submenu-list--has-subheader': has_subheader,
            })}
        >
            <div className='dc-mobile-drawer__submenu-list-title' onClick={collapse}>
                <div className='dc-mobile-drawer__submenu-back'>
                    <Icon
                        className='dc-mobile-drawer__submenu-back-icon'
                        icon='IcChevronLeft'
                    />
                </div>
                {submenu_title &&
                <h3 className='dc-mobile-drawer__submenu-list-title-text'>
                    {submenu_title}
                </h3>
                }
            </div>
            {children}
        </div>
    </CSSTransition>
);

export default SubMenu;
