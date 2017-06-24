import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';

class Center extends React.Component {
    render = () => <Notifications notifications={ this.props.notifications } />
}

const mapStateToProps = state => ({
    notifications: state.get('notifications')
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({}, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Center);