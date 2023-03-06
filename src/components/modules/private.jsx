import React from "react";
import { Button, Col, Row, Table, Form } from "react-bootstrap";

const Private = () => {
  const [name, setName] = React.useState();
  const [isPublic, setIsPublic] = React.useState(false);

  const handleCreate = () => {};

  return (
    <Row style={{ marginTop: 10 }}>
      <Col xs={12} lg={8}>
        <Table hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Potato</td>
              <td>2022-07-89</td>
              <td>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col xs={4}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name of the new dish</Form.Label>
            <Form.Control
              type="text"
              placeholder="Taco salad"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Is it available publicly?"
              checked={isPublic}
              onChange={() => setIsPublic(!isPublic)}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleCreate}>
            Create
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Private;
