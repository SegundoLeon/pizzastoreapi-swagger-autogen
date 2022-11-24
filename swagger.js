import swaggerAutogen from 'swagger-autogen';

const outputFile = "./swagger_output.json"
const endpointsFiles = ['./src/routes/bills.routes.js']

const doc = {
  openapi: '3.0.0',
  info: {
    title: 'Pizza Store API',
    description: 'Proyecto Pizza Store API',
  },
  servers: [
    {
      url: "https://infobaseapi.herokuapp.com/api"
    }
  ],
  components: {
    "@schemas": {
      Bill: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "numero de la boleta",
            example: "015673"
          },
          subtotal: {
            type: "number",
            description: "sub total de la boleta",
            example: 99.99
          },
          attendedby: {
            type: "string",
            description: "persona que cobro el servicio",
            example: "Carlos Reyes"
          },
          state: {
            type: "string",
            description: "estado del servicio",
            example: "Despachado"
          },
          product: {
            type: "string",
            description: "nombre del producto",
            example: "Americana"
          }          
        },
        example: {
          id: "015673",
          subtotal: 99.99,
          attendedby: "Carlos Reyes",
          state: "Despachado",
          product: "Americana"
        }
      }
    }
  },
  definitions: {
    myReferencedBillArray: [{ $ref: "#/definitions/Bill" }]
  }
};

swaggerAutogen()(outputFile, endpointsFiles, doc);