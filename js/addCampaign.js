const submit = document.querySelector("#button");

submit.addEventListener("click", showAlert);

function showAlert(e) {
  let alert = `
  <div class="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-2" role="alert">
  <p>Campaign successfully added</p>
</div>

`;

  document.getElementById("alert").innerHTML = alert;
  setTimeout(() => document.querySelector("#alert").remove(), 1000);
  e.preventDefault();
}
//
