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
// console.info(message.startsWith("Este")
// console.info(message.endsWith("pruebas."))

// #Concater cadenas

const messageOne ="Este es un mensaje para"
const messageTwo = "practicar concatenación"
const fullName = "Esteban Garcia"


console.log(messageOne)
console.log(messageTwo)

console.info("option 1 (+)" + messageOne + " " + messageTwo)
console.info("option 2 (,)", messageOne, messageTwo)
console.info(`option 3 (\`): ${messageOne} ${messageTwo}`)
console.info("option 4 (concat()) simple:", messageOne.concat(" ").concat(messageTwo))
console.info("option 4 (concat()) abreviado:", messageOne.concat(" ", messageTwo))

//#Componenete de JavaScript con HTML para el header
const header =`<header>
<h1>Hola mundo mi nombre es ${fullName}</h1>
</header>`

document.write(header)


// #Depuración de SVGStringList
const message= "Hola CoMO eSTas"
document.write(message)

//      #Poner en minuscula todas las letras

console.info(message.toLocaleLowerCase())

//      #Poner en mayusculas

console.info(message.toLocaleUpperCase())

//      #Quitar los espacios al principio y al final
 const message3="     estebangccoder@gmail.com      "

 console.info(message3.trimStart())
 console.info(message3.trim())
 console.info(message3.trimEnd())


 //#Fragmentacion de un String
 const message5= "anita lava la tina porque se porto mal"
 document.write(message5)

        //#solo funciona con strings
        console.log(message5.substring(9))
        console.log(message5.substring(0,10))

        //#funciona con listas y con strings
        console.log(message5.slice(9))
        console.log(message5.slice(0,10))

        //#Reemplaza la primera coincidencia que encuentre
        console.info(message5.replace("a", "e"))

        //#Reemplaza todas las coincidencias
        console.info(message5.replaceAll("a", "e"))
        //#Reemplaza con una expresión regular
        console.info(message5.replaceAll(/[aeiou]/g, "x"))



//#Relleno de string

const message6= "Riwi - "
document.write(message6.repeat(10))

console.log(message6.repeat(10))

const message7= "Riwi"
//#Rellena los caracteres faltantes con # dejando una cadena de 10 caractares
console.info(message7.padStart(10,"#"))
console.info(message7.padEnd(10,"#"))


const message8="En riwi todos somos una familia"

document.write(message8)

console.log(message8.split(""))
console.log(message8.split())

console.table(message8.split(" "))
console.table(message8.split(" "),2)
