import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pass@123',
  database: 'chicken24seven',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post('/api/orders', (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, product, size, price } = req.body;

  // Log the received data
  console.log('Received order data:', req.body);

  const query = 'INSERT INTO orders (first_name, last_name, email, phone_number, address, product, size, price) VALUES (?,?,?,?,?,?,?,?)';
  db.query(query, [firstName, lastName, email, phoneNumber, address, product, size, price], (err, results) => {
    if (err) {
      console.error('Error inserting order:', err.message);
      return res.status(500).send('Server error');
    }
    console.log('Order placed successfully:', results);

    // Send email notification with updated mailOptions
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'ajajkhatik4@gmail.com',
      subject: 'New Order Placed',
      text: `
        A new order has been placed by ${firstName} ${lastName}.
        
        **Order Details:**
        - **Product:** ${product}
        - **Size:** ${size}
        - **Price:** ${price} Rs

        **Customer Information:**
        - **Email:** ${email}
        - **Phone Number:** ${phoneNumber}
        - **Address:** ${address}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Error sending email');
      }
      console.log('Email sent: ', info.response);
      res.status(201).send('Order placed successfully');
    });
  });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
