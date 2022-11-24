import {Bill} from '../models/Bill.js'

export const getBills =  async (req, res) => {
    try {
        const bills = await Bill.findAll()          
        res.json(bills)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
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
}

export const getBill = async (req, res) => {
    try {
        const { id } = req.params
        const bill = await Bill.findOne({
            where: {
                id
            }            
        })

        if (!bill) 
            return res.status(400).json({message: 'Bill does not exist'})
        res.json(bill)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
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
}

export const createBill = async (req, res) => {
    const {product} = req.body
    try {
        const newBill = await Bill.create({
            id: (Math.floor(100000 + Math.random() * 900000)).toString(),
            subtotal: Math.floor(100 + Math.random() * 900),
            attendedby: 'Raquel Salas',
            state: 'Registrado',
            product
        })
        res.json(newBill)
    } catch (error) {
        return res.status(500).json({message: error.message})
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
}