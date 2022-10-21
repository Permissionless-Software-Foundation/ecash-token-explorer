/*
  Component for displaying a token icon.
*/

import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

function TokenIcon (props) {
  if (props.iconUrl) {
    return (
      <>
        <br />
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <Image fluid src={props.iconUrl} alt='token icon' style={{ maxWidth: '300px' }} />
          </Col>
        </Row>
        <br />
      </>
    )
  } else {
    return null
  }
}

export default TokenIcon
