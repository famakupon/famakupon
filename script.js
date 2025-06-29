document.getElementById("promoForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const telefon = document.getElementById("telefon").value;
  const jabatan = document.getElementById("jabatan").value;

  const response = await fetch("https://script.google.com/macros/s/AKfycbzFP50C0ZORjqs3UZL1QkgyTYsDBiXTQw26ikHcxkFndKvN99DwU6-jsy74vO9ffo6zVA/exec", {
    method: "POST",
    body: JSON.stringify({ nama, telefon, jabatan })
  });

  const text = await response.text();
  document.getElementById("result").innerHTML = text.replace(/\\n/g, "<br>");

});
