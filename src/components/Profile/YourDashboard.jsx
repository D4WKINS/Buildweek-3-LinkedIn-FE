import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './YourDashboard.css';

const {REACT_APP_BACKEND_URL} = process.env;

class YourDashboard extends Component {
  render() {
    return (
      <Card className='rounded dashboard-card'>
        <Container>
          <Card.Title>Your Dashboard</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            <i>Private to you</i>
          </Card.Subtitle>
          <Row className='mt-3 justify-content-center'>
            <Card className='dash1 d-flex flex-row w-100'>
              <Col md={4}>
                <Link to=''>
                  <p className='viewspan'>10</p>
                  <p className='mb-2 text-muted'>Who viewed your profile</p>
                </Link>
              </Col>

              <Col
                style={{
                  borderRight: '1px solid lightgrey',
                  borderLeft: '1px solid lightgrey',
                }}
                md={4}
              >
                <Link to=''>
                  <p className='viewspan'>10</p>
                  <p className='mb-2 text-muted'>Article views</p>
                </Link>
              </Col>

              <Col md={4}>
                <Link to=''>
                  <p className='viewspan'>10</p>
                  <p className='mb-2 text-muted'>Search appearances</p>
                </Link>
              </Col>
            </Card>
          </Row>

          {/* New row */}

          <Row className='mt-3'>
            <Card className='dash2 d-flex flex-column w-100'>
              <Col className='d-flex p-0 mt-3'>
                <Col className='pr-0 pl-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    data-supported-dps='24x24'
                    fill='currentColor'
                    className='mercado-match'
                    width='24'
                    height='24'
                    focusable='false'
                  >
                    <path d='M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z'></path>
                  </svg>
                </Col>
                <Col
                  className='p-0'
                  xl={11}
                  style={{ borderBottom: '1px solid lightgrey' }}
                >
                  <Link to=''>
                    <span className=''>
                      Creator Mode: <span>Off</span>
                    </span>
                    <p className=' text-muted'>
                      Grow your audience and get discovered by highlighting
                      content on your profile
                    </p>
                  </Link>
                </Col>
              </Col>

              <Col className='d-flex p-0  mt-3'>
                <Col className='pr-0 pl-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    data-supported-dps='24x24'
                    fill='currentColor'
                    className='mercado-match'
                    width='24'
                    height='24'
                    focusable='false'
                  >
                    <path d='M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z'></path>
                  </svg>
                </Col>
                <Col
                  className='p-0'
                  xl={11}
                  style={{ borderBottom: '1px solid lightgrey' }}
                >
                  <Link to=''>
                    <span className=''>My Network</span>
                    <p className=' text-muted'>
                      Manage your connections, events and interests.
                    </p>
                  </Link>
                </Col>
              </Col>

              <Col className='d-flex p-0  mt-3'>
                <Col className='pr-0 pl-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    data-supported-dps='24x24'
                    fill='currentColor'
                    width='24'
                    height='24'
                    focusable='false'
                  >
                    <path d='M12 9.88A2.13 2.13 0 119.88 12 2.13 2.13 0 0112 9.88M12 9a3 3 0 103 3 3 3 0 00-3-3zm9-4H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zM4 7h2.13A2.13 2.13 0 014 9.13V7zm0 10v-2.12A2.13 2.13 0 016.13 17H4zm16 0h-2.12A2.13 2.13 0 0120 14.88V17zm0-3a3 3 0 00-3 3H7a3 3 0 00-3-3v-4a3 3 0 003-3h10a3 3 0 003 3v4zm0-4.87A2.13 2.13 0 0117.88 7H20v2.13z'></path>
                  </svg>
                </Col>
                <Col
                  className='p-0'
                  xl={11}
                  style={{ borderBottom: '1px solid lightgrey' }}
                >
                  <Link to=''>
                    <span className=''>Salary insights</span>
                    <p className=' text-muted'>
                      See how your salary compares to others in the community.
                    </p>
                  </Link>
                </Col>
              </Col>

              <Col className='d-flex p-0  mt-3'>
                <Col className='pr-0 pl-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    data-supported-dps='24x24'
                    fill='currentColor'
                    className='mercado-match'
                    width='24'
                    height='24'
                    focusable='false'
                  >
                    <path d='M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z'></path>
                  </svg>
                </Col>
                <Col className='p-0' xl={11}>
                  <Link to=''>
                    <span className=''>My items</span>
                    <p className='text-muted'>
                      Keep track of your jobs, courses and articles.
                    </p>
                  </Link>
                </Col>
              </Col>
            </Card>
          </Row>

          <Card.Body></Card.Body>
        </Container>
      </Card>
    );
  }
}

export default YourDashboard;
