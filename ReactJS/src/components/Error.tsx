import React from "react";
import {Col, Notification, Row} from "@canonical/react-components";

type Props = {
  error: string
}

/**
 * Renders an error notification.
 * @param error - The error message to display.
 * @returns - The rendered error component.
 */
const Error = ({error}: Props) => (
  <Row>
    <Col size={12} className="u-vertically-center u-align--center">
      <Notification
        severity="negative"
        title="Error"
      >
        {error}
      </Notification>
    </Col>
  </Row>
)

export default Error