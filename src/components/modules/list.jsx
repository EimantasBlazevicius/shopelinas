import React, { useEffect, useState } from "react";
import { Button, Col, Row, ListGroup, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useData } from "../../context/data-context";

const List = (props) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { Data, currentItems, setCurrentList } = useData();

  useEffect(() => {
    setCurrentList(id);
    Data.getListItems();
  }, [Data, id, setCurrentList]);

  return (
    <Row style={{ marginTop: 10 }}>
      <Col xs={12} lg={8}>
        <ListGroup variant="flush">
          {currentItems &&
            currentItems.map((item, index) => (
              <ListGroup.Item key={index}>
                <span>
                  <b>{item.title}</b>:{" "}
                </span>
                <span>{item.description}</span>
                <Button
                  variant="danger"
                  style={{ float: "right" }}
                  onClick={() =>
                    Data.deleteListItem(item.title, item.description)
                  }
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
      <Col xs={4}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Item name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Milk"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            // eslint-disable-next-line react-hooks/rules-of-hooks
            onClick={() => Data.createListItem(title, description)}
          >
            Create
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default List;
