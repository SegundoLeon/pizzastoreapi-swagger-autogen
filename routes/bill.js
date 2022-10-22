const express = require('express');
const router = express.Router();

// arreglo de boletas
const bills = [
  {numero: '022499', subtotal: 99.10, cajero: 'Juan Perez', estado: 'Entregado'},
  {numero: '022156', subtotal: 158.90, cajero: 'Maria Sanchez', estado: 'Despachado'},
  {numero: '022456', subtotal: 58.70, cajero: 'Cesar Lopez', estado: 'Entregado'},
  {numero: '022787', subtotal: 110.50, cajero: 'Luis Garcia', estado: 'En preparacion'},
  {numero: '022441', subtotal: 76.20, cajero: 'Roberto Chavez', estado: 'Despachado'},
];

router.get('/bills', (req, res) => {
  const token = req.query.token;  
  /* #swagger.responses[200] = {
          description: "Todas las boletas",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/myReferencedBillArray"                             
              }
            }
          }
      }
  */
  res.send(bills);
});

router.get('/bills/:numero', (req, res) => {
  //const bill = bills.find(c => c.numero === parseInt(req.params.numero));
  const bill = bills.find(c => c.numero === req.params.numero);
  /* #swagger.responses[200] = {
          description: "Una boleta",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/Bill"
              }
            }
          }
      }
  */
  if (!bill) return res.status(404).send('Boleta no encontrada');
  else res.send(bill);
});

module.exports = router;