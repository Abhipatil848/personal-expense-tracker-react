
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col} from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './dashboard.css';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-4">
      <Row>
        <Col sm={4}>
          <Card  className="dashboard_card">
            
            <Card.Body>
              <Card.Title>Total Products</Card.Title>
              <Card.Text>
               Products Names are already Available in our System If Not You can add at your own....!! 
              </Card.Text>
              <div className="dasboardnumber">2564</div>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col >
        <Col sm={4}>
          <Card className="dashboard_card">
            <Card.Body>
              <Card.Title>Monthly Expense</Card.Title>
              <Card.Text>
              Total Count That represent that how much money you spent Monthly...!!
              </Card.Text>
              <div className="dasboardnumber">2564</div>
              {/* <Button variant="primary">Todays Expense</Button> */}
            </Card.Body>
          </Card>
        </Col >
        <Col sm={4}>
          <Card className="dashboard_card">
          <FontAwesomeIcon icon="fa-solid fa-credit-card" />
            <Card.Body>
              <Card.Title>Recent Transactions</Card.Title>
              <Card.Text>
                Recent Transactions Done BY you...!!
              </Card.Text>
              <div className="dasboardnumber">2564</div>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col >
        <div className="d-grid gap-2 mt-3">
      <Link className="btn btn-primary" variant="primary" size="lg" to={"/addtransaction"}>
        ADD TRANSACTIONS
      </Link>
      </div>
      </Row>
      
    </div>
    
  );
}

export default Dashboard;
