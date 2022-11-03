const swaggerAutogen = require("swagger-autogen")({openapi: "3.0.0"});
const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/bill.js"];

const doc = {
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
          numero: {
            type: "string",
            description: "numero de la boleta",
            example: "015673"
          },
          subtotal: {
            type: "number",
            description: "sub total de la boleta",
            example: 99.99
          },
          cajero: {
            type: "string",
            description: "persona que cobro el servicio",
            example: "Carlos Reyes"
          },
          estado: {
            type: "string",
            description: "estado del servicio",
            example: "Despachado"
          },
          producto: {
            type: "string",
            description: "nombre del producto",
            example: "Americana"
          }          
        },
        example: {
          numero: "015673",
          subtotal: 99.99,
          cajero: "Carlos Reyes",
          estado: "Despachado",
          producto: "Americana"
        }
      }
    }
  },
  definitions: {
    myReferencedBillArray: [{ $ref: "#/definitions/Bill" }]
  }
};

swaggerAutogen(outputFile, endpointsFiles, doc);