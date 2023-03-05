import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Sukses extends Component {
  render() {
    return (
      <div className='mt-4 text-center'>
        <Image src="assets/images/order_success.png" width={200}/>
        <h2>Halaman Sukses..</h2>
        <p>Pesanan Anda sudah diteruskan ke Dapur untuk diproses..</p>
        <Button variant="primary" as={Link} to='/'>
            Kembali
        </Button>
      </div>
    )
  }
}
