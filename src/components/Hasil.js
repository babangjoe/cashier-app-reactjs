import React, { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/util";
import TotalBayar from "./TotalBayar";

export default class Hasil extends Component {
  render() {
    const { keranjangs } = this.props;

    return (
      <Col md={3} mt="2">
        <h4>
          <strong>Hasil</strong>
        </h4>
        <hr />
        {keranjangs.length !== 0 && (
          <ListGroup variant="flush">
            {keranjangs.map((menuKeranjang) => (
              <ListGroup.Item>
                <Row>
                  <Col xs={2}>
                    <h5>
                      <Badge pill bg="success">
                        {menuKeranjang.jumlah}
                      </Badge>
                    </h5>
                  </Col>
                  <Col>
                    <h6>{menuKeranjang.product.nama}</h6>
                    <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                  </Col>
                  <Col>
                    <strong className="float-right">Rp. {numberWithCommas(menuKeranjang.total_harga)}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}

        <TotalBayar keranjangs={keranjangs} {...this.props}/>
      </Col>
    );
  }
}
