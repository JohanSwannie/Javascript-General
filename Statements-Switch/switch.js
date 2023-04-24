function determineAge(description) {
  let ageDescr = "";
  switch (description) {
    case "Early Childhood":
      ageDescr = "0 and 6 years old.";
      break;
    case "Primary School Child":
      ageDescr = "7 and 13 years old.";
      break;
    case "Secondary School Child":
      ageDescr = "14 and 18 years old";
      break;
    case "University Student":
      ageDescr = "19 and 27 years old.";
      break;
    case "Young Adult":
      ageDescr = "20 and 30 years old.";
      break;
    case "Matured Adult":
      ageDescr = "31 and 44 years old.";
      break;
    case "Middle Aged Person":
      ageDescr = "45 and 55 years old.";
      break;
    case "Pensioner":
      ageDescr = "65 and 85 years old";
      break;
    case "Elderly Person":
      ageDescr = "80 and 120 years old.";
      break;
    default:
      ageDescr = `The age doesn't fall within a valid category`;
  }
  return ageDescr;
}

const container = document.querySelector(".container");

let descriptions = [
  "Early Childhood",
  "Primary School Child",
  "Secondary School Child",
  "University Student",
  "Young Adult",
  "Matured Adult",
  "Middle Aged Person",
  "Pensioner",
  "Elderly Person",
];

for (let i = 0; i < descriptions.length; i++) {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `The person with a description of ${
    descriptions[i]
  } is normally between ${determineAge(descriptions[i])}`;
  container.appendChild(paragraph);
}
