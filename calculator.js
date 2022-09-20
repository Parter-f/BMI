<<<<<<< HEAD
function szamol(){

    let sulyszam = document.getElementById("suly").value;
    let magassagszam = document.getElementById("magassag").value;

    let eredmenyszam = sulyszam / (magassagszam/100) ** 2;
    document.getElementById('eredmeny').value = eredmenyszam;

}

=======
function szamol(){

    let sulyszam = document.getElementById("suly").value;
    let magassagszam = document.getElementById("magassag").value;

    let eredmenyszam = sulyszam / (magassagszam/100) ** 2;
    document.getElementById('eredmeny').value = eredmenyszam;

}

>>>>>>> beaf6266e5a25b8c23edfb124d8196e41d74196a
document.getElementById('szamit').addEventListener('click' , szamol);