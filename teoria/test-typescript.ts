const str1:string= "hola mundo"
const n:number =123

function suma(a:number,b:number ){

return a+b;
}
console.log(suma(1,2))

function saludo(nombre:string,edad:number,favorita:string):string{
    return `Hola soy ${nombre}, tengo ${edad} años y mi cosa favorita es : ${favorita}`
}

console.log(saludo("pablo",21,"javi ariza"))

type generoTipo ="Masculino"| "Femenino" | "LadyBoy"

function generarUsuario(){
    const nombre :string= "user" + Math.floor(Math.random() * 999)
    const genero :generoTipo="LadyBoy"
    return {nombre,genero}

}