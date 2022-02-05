const this_find_sport = document.querySelector(".this_find-sport");
const this_contain_href = document.querySelector(".this_contain-href-to-sport");

let Research_History = [];

this_contain_href.addEventListener("click", () => {
  Adding_to_Research_History();
  Resize_Research_History();
  Show_Research_History();
  Verification_Research_Exist();
});

function Verification_Research_Exist() {
  if (this_find_sport.value === "") {
    console.log("null");
    // Ajout d'une animation si la case est vide. {error anim}
  } else {
    const GET_ID = this_find_sport.value
      .toLowerCase()
      .replace(new RegExp("[^(a-zA-Z)]", "g"), "");

    if (document.getElementById(`${GET_ID}`)) {
      this_contain_href.href = `#${GET_ID}`;

      // Ajout d'une animation d'envoi vers l'image.
      // Ajout d'une classe à celle-ci.
    } else {
      // Ajout d'une animation si le sport n'existe pas. {error anim}
    }
  }
}

function Adding_to_Research_History() {
  if (Research_History.includes(this_find_sport.value)) {
  } else if (this_find_sport.value === "") {
  } else {
    Research_History.unshift(this_find_sport.value);
  }
  console.log(Research_History);
}

function Resize_Research_History() {
  if (Research_History.length > 3) {
    Research_History.pop();
  }
}

function Show_Research_History() {
  const Span_History = document.querySelectorAll(".show-research-history");

  if (Span_History[0].innerHTML = `${Research_History[0]}` === "undefined") {
    Span_History[0].innerHTML = "";
  } else {
    Span_History[0].innerHTML = `${Research_History[0]}`;
  }
  if (Span_History[1].innerHTML = `${Research_History[1]}` === "undefined") {
    Span_History[1].innerHTML = "";
  } else {
    Span_History[1].innerHTML = `${Research_History[1]}`;
  }
  if (Span_History[2].innerHTML = `${Research_History[2]}` === "undefined") {
    Span_History[2].innerHTML = ""; 
  } else {
    Span_History[2].innerHTML = `${Research_History[2]}`;
  }
}
