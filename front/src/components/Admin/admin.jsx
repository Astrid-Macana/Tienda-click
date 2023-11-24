import React, { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";

import AdmProductos from "./admProductos";

function Admin() {
  const [key, setKey] = useState("productos");

  return (
    <Container>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab
          eventKey="productos"
          title={
            <span
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "blue",
                width: "200px",
              }}
            >
              Productos
            </span>
          }
        >
          <AdmProductos />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Admin;