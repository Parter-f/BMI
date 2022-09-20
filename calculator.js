function szamol(){

    let sulyszam = document.getElementById("suly").value;
    let magassagszam = document.getElementById("magassag").value;

    let eredmenyszam = sulyszam / (magassagszam/100) ** 2;
    document.getElementById('eredmeny').value = eredmenyszam;

}