// #Declaracion de Strings

const option1="Hola mundo"
const option2=String("Hola mundo")
const option3=new String("Hola mundo")

// console.info(option1)
// console.info(option2)
// console.info(option3)


// // #Extraccion de datos

// const message ="Este es un mensaje para pruebas"
// document.write(message)

// // #Extraer la cantidad de caracteres

// console.log(message.length)

// // #Extraer un caracter
// console.info(message[1])
// console.info(message.charAt(1))
// console.info(message.search("mensaje"))
// console.info(message.includes("mensaje de prueba"))


// #Concater cadenas

const messageOne ="Este es un mensaje para"
const messageTwo = "practicar concatenación"
const fullName = "Esteban Garcia"


console.log(messageOne)
console.log(messageTwo)

console.info("option 1 (+)" + messageOne + " " + messageTwo)
console.info("option 2 (,)", messageOne, messageTwo)
console.info(`option 3 (\`): ${messageOne} ${messageTwo}`)

//#Componenete de JavaScript con HTML para el header
const header=`<header>
<h1>Hola mundo mi nombre es ${fullName}</h1>
</header>`

document.write(header)