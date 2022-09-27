const countwords = () =>{
    let character = document.getElementById('character').value.length;
    let words = document.getElementById('character').value;
    document.getElementById('control').innerHTML = character;
    words = words.match(/\w+/g);
    words = words.length;
    document.getElementById('control2').innerHTML=words;

}
const eraseText = ()=>{
    document.getElementById("character").value='';
}