import React from "react";
import { Button, Table, Placeholder } from "react-bootstrap";
import { useData } from "../../context/data-context";
import { useNavigate } from "react-router-dom";
import { Download, Eye } from "react-bootstrap-icons";
import { useUser } from "../../context/user-context";

const Public = () => {
  const navigate = useNavigate();
  const { Data, setCurrentList, publicLists } = useData();
  const { user } = useUser();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      publicLists.length && setLoading(false);
    }, 1000);
  }, [publicLists]);

  const handleNavigate = (id) => {
    setCurrentList(id);
    navigate(`${id}`);
  };

  const handleAddToMyList = (item) => {
    Data.copyList(item);
  };

  React.useEffect(() => {
    Data.getPublicLists();
  }, []);

  return (
    <Table hover style={{ marginTop: 10 }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Created At</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        {loading && (
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
        {!loading &&
          publicLists.map((item, index) => (
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
                  <Eye />
                </Button>

                {user && (
                  <Button
                    variant="outline-primary"
                    size="sm"
                    style={{ marginLeft: "5px" }}
                    onClick={() => handleAddToMyList(item.data())}
                  >
                    <Download aria-label="Add to my list" />
                  </Button>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default Public;
