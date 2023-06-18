import React from "react";
import {Col, Row, Spinner} from "@canonical/react-components";

/**
 * Renders a loader/spinner component.
 * @returns - The rendered loader component.
 */
const Loader = () => (
  <Row>
    <Col size={12} className="u-vertically-center u-align--center">
      <Spinner text="Loading..."/>
    </Col>
  </Row>
)

export default Loader