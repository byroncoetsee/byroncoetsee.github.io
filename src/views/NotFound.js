import React from 'react';
import AppLayout from '../components/layouts/app'

const NotFound = () => {
  return (
    <AppLayout>
      <div className="row">
        <div className="col-12 text-left">
          <div className="container py-4">
            <h4>
              Whoops, the page you are looking for does not exist!
            </h4>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default NotFound;
