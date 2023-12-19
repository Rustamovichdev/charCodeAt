const info_ctn = document.querySelector('.info_ctn');
const charCode = document.querySelector('.charCode');
const result = document.querySelector('.result-p');
const hello = document.querySelector('.hello_text');
const info = document.querySelector('.info');
const dec = document.querySelector('.dec');
const oct = document.querySelector('.oct');
const hec = document.querySelector('.hec');
const bin = document.querySelector('.bin');

document.addEventListener('keypress', function(event) {
    result.textContent = `Symbol: ${event.key}`; 
    hello.textContent = `Welcome to my first work!`; 

    info.textContent = 'Your result is: ';
    dec.textContent = `DEC: ${event.charCode}`;
    oct.textContent = `OCT: ${event.charCode.toString(8)}`; 
    hec.textContent = `HEX: ${event.charCode.toString(16)}`;
    bin.textContent = `BIN: ${event.charCode.toString(2)}`; 

    result.style.border = "10px solid #58B502";
    info_ctn.style.outline = "10px solid #58B502";
    charCode.style.outline = "10px solid #58B502";
});