import React, {useState, useEffect} from 'react';
import AppLayout from '../components/layouts/app'
import {
  setRegistered
} from '../state/actions/index'
import {
  connect
} from 'react-redux';
import SyncModal from '../components/modals/SyncModal';

let mapStateToProps = state => {
  return {
    registered: state.registered,
    showModal: state.showModal
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setRegistered: data => dispatch(setRegistered(data))
  }
}

const Dashboard = (props) => {
  const [showModal, setShowModal] = useState(props.showModal)
  useEffect(() => {
    if(props.showModal == 1) {
      props.setRegistered({
        registered: props.registered,
        showModal: 0
      })
    }

  }, [])

  const handleClose = () => {
    setShowModal(0)
  }
  return (
    <AppLayout>
      <div className="row">
        <div className="col-12 text-left">
          <div className="container py-4">
            <h4>
              Dashboard
            </h4>
            <p>To be completed in Version 1.0.2</p>
          </div>
        </div>
      </div>
      <SyncModal show={showModal} handleClose={handleClose}>
        <div className="row justify-content-center">
          <div className="col-10">
            <h3><strong>Please note that on registration the offers are syncing up with our database. This might take up to 30 minutes...</strong></h3>
          </div>
        </div>
      </SyncModal>
    </AppLayout>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
