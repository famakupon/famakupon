document.getElementById("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  document.getElementById("loading").style.display = "block";
  document.getElementById("result").innerHTML = "";

  const data = {
    nama: document.getElementById("nama").value,
    telefon: document.getElementById("telefon").value,
    jabatan: document.getElementById("jabatan").value
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwwBKeu5SdBPMP1qccjKtRYngvPkeQt_JROqi8UVQESVsvBtitUiPBooZkKU0yjbXW50w/exec", {
      method: "POST",
      body: JSON.stringify(data)
    });

    const text = await response.text();
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").innerHTML = text.replace(/\\n/g, "<br>");
  } catch (error) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").innerHTML = "Ralat semasa menghantar. Sila cuba semula.";
  }
});
