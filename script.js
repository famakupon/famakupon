document.getElementById("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  // Tunjuk loading
  document.getElementById("loading").style.display = "block";
  document.getElementById("result").innerHTML = "";

  const data = {
    nama: document.getElementById("nama").value,
    telefon: document.getElementById("telefon").value,
    jabatan: document.getElementById("jabatan").value
  };

  const response = await fetch("https://script.google.com/macros/s/AKfycbzFP50C0ZORjqs3UZL1QkgyTYsDBiXTQw26ikHcxkFndKvN99DwU6-jsy74vO9ffo6zVA/exec", {
    method: "POST",
    body: JSON.stringify(data)
  });

  const text = await response.text();

  // Sembunyikan loading
  document.getElementById("loading").style.display = "none";

  // Papar kod promosi dengan baris baru
  document.getElementById("result").innerHTML = text.replace(/\n/g, "<br>");
});
