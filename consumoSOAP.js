const axios = require('axios'); // Importar axios (asegúrate de instalarlo previamente)

const url = 'http://ejemplo.com/servicio-soap-endpoint';
const xmlRequest = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.ejemplo.com/webservice">
   <soapenv:Header/>
   <soapenv:Body>
      <web:MiMetodoSOAP>
         <!-- Aquí puedes incluir los parámetros del método -->
      </web:MiMetodoSOAP>
   </soapenv:Body>
</soapenv:Envelope>`;

axios.post(url, xmlRequest, {
  headers: {
    'Content-Type': 'text/xml;charset=UTF-8',
    'SOAPAction': 'AquiVaLaAccionDelMetodo' // Especifica la acción del método SOAP
  }
})
  .then(response => {
    // Manejar la respuesta del servicio SOAP
    console.log(response.data);
  })
  .catch(error => {
    // Manejar errores de la solicitud
    console.error(error);
  });
