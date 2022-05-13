document.getElementById("botao").addEventListener('click',(event)=>{
    event.preventDefault();
    let numa = document.getElementById("numa").value;
    let numb = document.getElementById("numb").value;
    let numc = document.getElementById("numc").value;
    let somar = Number(numa) + Number(numb) + Number(numc);
    document.getElementById("num").value = somar;
    
    let dsca = document.getElementById("dsca").value;
    let dscb = document.getElementById("dscb").value;
    let somad = Number(dsca) + Number(dscb);
    document.getElementById("dsct").value = somad;

    let somare = Number(somar) - Number(somad);
    document.getElementById("vlt").value = somare;


})
document.getElementById("reset").addEventListener('click', ()=>{
    let numa = document.getElementById("numa").value = "";
    let numb = document.getElementById("numb").value = "";
    let numc = document.getElementById("numc").value = "";
    document.getElementById("num").value = "";
    
    let dsca = document.getElementById("dsca").value = "";
    let dscb = document.getElementById("dscb").value = "";
    document.getElementById("dsct").value = "";

    document.getElementById("vlt").value = "";


})