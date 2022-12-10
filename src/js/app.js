import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  var count = 0;

  document.body.addEventListener("click", () => {

    for(let i = 0; i < 5; i++) {
      let x = document.createElement("article");
       
      count += length;

      x.setAttribute("id", "myArticle" + count)
      document.appendChild(x);

      let text = "some text..." + count;

      document.getElementById("myArticle" + count).innerText = text;

      document.getElementById("myArticle" + count).classList.add("message");
    }

  })

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
