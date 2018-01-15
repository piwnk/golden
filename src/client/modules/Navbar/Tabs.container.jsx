import { connect } from 'react-redux';

import { setActiveTab } from './Navbar.actions';

import Tabs from './Tabs';

const mapStateToProps = state => ({
  activeTab: state.Navbar.activeTab,
});

const mapDispatchToProps = {
  setActiveTab,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
// export default connect(null, mapDispatchToProps)(Tabs);
