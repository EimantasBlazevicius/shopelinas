import React from "react";
import { Button, Col, Row, Table, Form, Placeholder } from "react-bootstrap";
import { useData } from "../../context/data-context";
import { useUser } from "../../context/user-context";
import { useNavigate } from "react-router-dom";
import { PencilFill, TrashFill } from "react-bootstrap-icons";

const Combine = () => {
  const [name, setName] = React.useState();
  const [isPublic, setIsPublic] = React.useState(false);

  const navigate = useNavigate();
  const { Data, setCurrentList } = useData();
  const { user, userData } = useUser();

  const handleNavigate = (id, items) => {
    setCurrentList(id);
    navigate(`${id}`);
  };

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
            {!userData.length && (
              <>
                <tr>
                  <td colSpan={4}>
                    <Placeholder as="p" animation="glow">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <Placeholder as="p" animation="glow">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <Placeholder as="p" animation="glow">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </td>
                </tr>
              </>
            )}
            {userData &&
              userData.map((item, index) => (
                <tr key={item.data().name}>
                  <td>{index + 1}</td>
                  <td>{item.data().name}</td>
                  <td>{item.data().createdDate}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleNavigate(item.id)}
                    >
                      <PencilFill />
                    </Button>
                    <Button
                      variant="outline-danger"
                      style={{ marginLeft: 5 }}
                      onClick={() =>
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        Data.deleteList(item.id)
                      }
                      size="sm"
                    >
                      <TrashFill />
                    </Button>
                  </td>
                </tr>
              ))}
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
          <Button
            variant="primary"
            type="button"
            onClick={() => Data.createList(name, isPublic, user.uid)}
          >
            Create
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Combine;
