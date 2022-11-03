const express = require('express');
const router = express.Router();

// arreglo de boletas
const bills = [
  {numero: '022499', subtotal: 99.10, cajero: 'Juan Perez', estado: 'Entregado', producto: 'Americana'},
  {numero: '022156', subtotal: 158.90, cajero: 'Maria Sanchez', estado: 'Despachado', producto: 'Hawaiana'},
  {numero: '022456', subtotal: 58.70, cajero: 'Cesar Lopez', estado: 'Entregado', producto: 'Napolitana'},
  {numero: '022787', subtotal: 110.50, cajero: 'Luis Garcia', estado: 'En preparacion', producto: 'Napolitana'},
  {numero: '022441', subtotal: 76.20, cajero: 'Roberto Chavez', estado: 'Despachado', producto: 'Napolitana'},
];

router.get('/bills', (req, res) => {
  /* #swagger.responses[200] = {
          description: "Operacion exitosa",
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
  const bill = bills.find(c => c.numero === req.params.numero);
  /* #swagger.responses[200] = {
          description: "Operacion exitosa",
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

router.post('/bills', (req, res) => {
  const bill = {
    numero: (Math.floor(100000 + Math.random() * 900000)).toString(),
    subtotal: Math.floor(100 + Math.random() * 900),
    cajero: "Raquel Salas",
    estado: "Registrado",
    producto: req.body.producto
  }
  /* #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/Bill"
            }
          }
        }
      }

     #swagger.responses[200] = {
        description: "Operacion exitosa",
        content: {
          "application/json": {
            schema: {
              $ref: "#/definitions/Bill"
            }
          }
        }
      }
  */

  bills.push(bill);
  res.send(bill);
})

module.exports = router;