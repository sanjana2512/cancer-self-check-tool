// Cancer Type Dropdown Handler
// 🔹 Symptom lists per cancer type
// Symptom data per cancer type
// Symptom data per cancer type
const symptomData = {
  oral: [
    "White/red patches in mouth",
    "Tongue pain or swelling",
    "Mouth sores that don't heal",
    "Difficulty chewing or swallowing",
    "Unexplained bleeding in mouth"
  ],
  lung: [
    "Persistent cough",
    "Chest pain",
    "Shortness of breath",
    "Coughing up blood",
    "Unexplained weight loss"
  ],
  breast: [
    "Lump in breast or underarm",
    "Change in breast size or shape",
    "Nipple discharge",
    "Redness or flaky skin",
    "Pain in breast area"
  ],
  colon: [
    "Blood in stool",
    "Persistent constipation or diarrhea",
    "Abdominal pain or cramps",
    "Sudden weight loss",
    "Feeling of incomplete bowel movement"
  ]
};

// Dropdown handler
document.getElementById('cancerType').addEventListener('change', function () {
  const type = this.value;
  const container = document.getElementById('symptomChecklist');
  const resultBox = document.getElementById('resultBox');
  const checkBtn = document.getElementById('checkBtn');

  // Reset everything
  container.innerHTML = "";
  resultBox.style.display = 'none';
  resultBox.textContent = '';
  checkBtn.style.display = 'none';

  if (!type || !symptomData[type]) return;

  // Heading
  const heading = document.createElement("h3");
  heading.textContent = "Select symptoms you’re experiencing:";
  container.appendChild(heading);

  // Create symptom checkboxes
  symptomData[type].forEach((symptom, index) => {
    const label = document.createElement("label");
    label.style.display = "block";
    label.style.margin = "5px 0";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = symptom;
    checkbox.name = "symptom";
    checkbox.id = `symptom_${type}_${index}`;

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + symptom));
    container.appendChild(label);
  });

  // Show the check button
  checkBtn.style.display = 'block';
});

// Result logic on button click
document.getElementById('checkBtn').addEventListener('click', function () {
  const checkboxes = document.querySelectorAll('input[name="symptom"]:checked');
  const selectedCount = checkboxes.length;

  const resultBox = document.getElementById('resultBox');
  resultBox.style.display = 'block';

  if (selectedCount === 0) {
    resultBox.textContent = "❗ Please select at least one symptom.";
    resultBox.style.background = "#fff3cd";
    resultBox.style.color = "#856404";
  } else if (selectedCount <= 2) {
    resultBox.textContent = "🟢 Result: Mild – Stay aware, monitor symptoms.";
    resultBox.style.background = "#d4edda";
    resultBox.style.color = "#155724";
  } else if (selectedCount <= 4) {
    resultBox.textContent = "🟠 Result: Warning – Consider visiting a doctor.";
    resultBox.style.background = "#fff3cd";
    resultBox.style.color = "#856404";
  } else {
    resultBox.textContent = "🔴 Result: Critical – Please consult a specialist.";
    resultBox.style.background = "#f8d7da";
    resultBox.style.color = "#721c24";
  }
});
