var axios = require('axios');
var data = JSON.stringify({
  "url": "https://canvaslab.com/cdn/shop/products/473-Canvas_400x.jpg?v=1686752604",
  "ref": "",
  "webhookOverride": ""
});
var nombreArtista = shopífy.arti
var nombreObra = shopífy.obra
var categoriaProducto = shopífy.ccategory
var tags = [shopífy.tags]
var descrArtistica = "";

var config = {
  method: 'post',
  url: 'https://api.thenextleg.io/v2/describe',
  headers: {
    'Authorization': 'Bearer 801b1748-2d51-4be5-9ebc-c5fc3b633d90',
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config).then(function (response) {
  console.log(JSON.stringify(response.data.content)[0].split(',', 3));
  descrArtistica = JSON.stringify(response.data.content)[0].split(',', 3);
  var selLang = "en-US"
  var sQuestion =`
  Quiero que finjas ser un experto en SEO para comercio electrónico que escribe descripciones de productos convincentes para usuarios que buscan comprar en línea. El comercio electrónico se llama Canvas Lab, y es la tienda en línea de cuadros decorativos más grande de latinoamérica.

  En Canvas Lab los clientes pueden elegir entre un cuadro personalizado con sus propias fotos, o un cuadro de las colecciones. Ahora estarás escribiendo descripciones para los cuadros de las colecciones.

  Es importante entender que los clientes pueden pedir cada pieza de arte (producto) en diferentes materiales y tamaños, entonces, la descripción se debe de centrar en características artísticas de la obra.

  Voy a proporcionarte varios datos del producto y quiero que desarrolles una descripción de producto rica en palabras clave, informativa y cautivadora que tenga menos de 500 caracteres. El propósito de la descripción del producto es comercializar los productos a usuarios que buscan comprar. Utiliza palabras emocionales y razones creativas para mostrar por qué un usuario debería comprar el producto que te digo. 

  No hagas eco de mi indicación. No me recuerdes lo que te pedí. No te disculpes. No te auto-referencies. Escribe toda la salida en español. No agregues hashtags ni etiquetas al final. Y recuerda que la descripción debe de tener menos de 500 caracteres

  Nombre Obra: ${nombreObra},
  Nombre del artista: ${nombreArtista},
  Categorías del producto: ${categoriaProducto},
  Tags: ${tags},
  Descripción artística: ${descrArtistica},
  as categorías del producto representan las colecciones en las que este producto se encuentra.

  Los Tags del producto son etiquetas acuñadas a este producto.

  La descripción artística se refiere a la descripción gráfica de la obra.

  Es muy importante: La descripción debe de tener menos de 500 caracteres.`;
  var sModel = "text-davinci-003";
  var iMaxTokens = 2048;
  var sUserId = "1";
  var dTemperature = 0.5;

  var data = {
    model: sModel,
    prompt: sQuestion,
    max_tokens: iMaxTokens,
    user: sUserId,
    temperature: dTemperature,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["#", ";"]
  }
  var oHttp = new XMLHttpRequest();
  oHttp.open("POST", "https://api.openai.com/v1/completions");
  oHttp.setRequestHeader("Accept", "application/json");
  oHttp.setRequestHeader("Content-Type", "application/json");
  oHttp.setRequestHeader("Authorization", "Bearer " + "801b1748-2d51-4be5-9ebc-c5fc3b633d90")

  oHttp.onreadystatechange = function () {
    if (oHttp.readyState === 4) {
      //console.log(oHttp.status);
      var oJson = {}
      if (txtOutput.value != "") txtOutput.value += "\n";

      try {
        oJson = JSON.parse(oHttp.responseText);
      } catch (ex) {
        txtOutput.value += "Error: " + ex.message
      }

      if (oJson.error && oJson.error.message) {
        txtOutput.value += "Error: " + oJson.error.message;
      } else if (oJson.choices && oJson.choices[0].text) {
        var s = oJson.choices[0].text;

        if (selLang.value != "en-US") {
          var a = s.split("?\n");
          if (a.length == 2) {
            s = a[1];
          }
        }

        if (s == "") s = "No response";
        /* Esta es la respuesta */
        console.log(s)
      }
    }
  };

  

  oHttp.send(JSON.stringify(data));
}).catch(function (error) {
  console.log(error);
});


var customConfig = {
  method: 'post',
  url: 'https://api.thenextleg.io/v2/describe',
  headers: {
    'Authorization': 'Bearer 801b1748-2d51-4be5-9ebc-c5fc3b633d90',
    'Content-Type': 'application/json'
  },
  data: data
};
var data = JSON.stringify({
  "url": "https://canvaslab.com/cdn/shop/products/473-Canvas_400x.jpg?v=1686752604",
  "ref": "",
  "webhookOverride": ""
});
function client() {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  return window
    .fetch("https://api.thenextleg.io/v2/describe", config)
    .then(async response => {
      if (response.ok) {
        return await response.json()
      } else {
        const errorMessage = await response.text()
        return Promise.reject(new Error(errorMessage))
      }
    })
}