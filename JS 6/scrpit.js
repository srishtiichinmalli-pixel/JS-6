// ==========================================
// SMART HOSPITAL MANAGEMENT SYSTEM
// ==========================================

const patients = [
  { name: "Rahul", age: 25, bill: 1500, status: "Admitted" },
  { name: "Priya", age: 45, bill: 3000, status: "Discharged" },
  { name: "Amit", age: 35, bill: 2500, status: "Admitted" },
  { name: "Sneha", age: 19, bill: 1000, status: "Waiting" }
];

let medicalSupplies = [
  "🩹 Bandages",
  "💊 Medicines",
  "🧤 Gloves",
  "🩺 Stethoscope"
];

const hospitalDepartments = [
  "Reception",
  "Emergency",
  "Cardiology",
  "Neurology",
  "Pharmacy"
];

// 1. Date - Get Methods
function demo1() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();

  document.getElementById("out-1").innerHTML =
    `📅 Hospital Record Date:<br>` +
    `Year: <b>${year}</b> | Month: <b>${month}</b><br>` +
    `Day: <b>${day}</b> | Hour: <b>${hours}:00</b>`;
}

// 2. Date - Set Methods
function demo2() {
  const appointment = new Date();

  appointment.setDate(appointment.getDate() + 7);

  document.getElementById("out-2").innerHTML =
    `🗓️ Follow-up Appointment:<br>` +
    `<b>${appointment.toDateString()}</b>`;
}

// 3. String Methods
function demo3() {
  const rawName = "   rahul sharma   ";

  const trimmed = rawName.trim();
  const upper = trimmed.toUpperCase();
  const replaced = upper.replace("SHARMA", "PATIENT");
  const sub = trimmed.substring(0, 10);

  document.getElementById("out-3").innerHTML =
    `Original: "${rawName}"<br>` +
    `Trimmed: <b>${trimmed}</b><br>` +
    `Uppercase: <b>${upper}</b><br>` +
    `Replace: <b>${replaced}</b><br>` +
    `Substring: <i>${sub}...</i>`;
}

// 4. Array forEach()
function demo4() {
  let listHTML = "<b>🏥 Medical Supplies:</b><ul>";

  medicalSupplies.forEach((item, index) => {
    listHTML += `<li>Item ${index + 1}: ${item}</li>`;
  });

  listHTML += "</ul>";

  document.getElementById("out-4").innerHTML = listHTML;
}

// 5. Array map()
function demo5() {
  const patientNames = patients.map(patient => {
    return `${patient.name} - Age ${patient.age}`;
  });

  document.getElementById("out-5").innerHTML =
    `<b>Patient Records:</b><br>` +
    patientNames.join("<br>");
}

// 6. Array filter()
function demo6() {
  const admittedPatients = patients.filter(patient => {
    return patient.status === "Admitted";
  });

  const names = admittedPatients.map(patient => {
    return `${patient.name} (${patient.status})`;
  }).join("<br>");

  document.getElementById("out-6").innerHTML =
    `<b>Currently Admitted Patients:</b><br>` +
    (names || "No admitted patients");
}

// 7. Array find()
function demo7() {
  const patient = patients.find(patient => {
    return patient.name === "Priya";
  });

  document.getElementById("out-7").innerHTML =
    patient
      ? `<b>Patient Found:</b> ${patient.name}<br>` +
        `Age: ${patient.age}<br>` +
        `Bill: ₹${patient.bill}<br>` +
        `Status: ${patient.status}`
      : "Patient record not found";
}

// 8. Array reduce()
function demo8() {
  const totalBills = patients.reduce((sum, patient) => {
    return sum + patient.bill;
  }, 0);

  document.getElementById("out-8").innerHTML =
    `💰 Total Patient Bills:<br><b>₹${totalBills}</b>`;
}

// 9. Array sort()
function demo9() {
  const sortedPatients = [...patients].sort((a, b) => {
    return b.bill - a.bill;
  });

  let table = "<table><tr><th>Patient</th><th>Bill</th></tr>";

  sortedPatients.forEach(patient => {
    table +=
      `<tr><td>${patient.name}</td><td>₹${patient.bill}</td></tr>`;
  });

  table += "</table>";

  document.getElementById("out-9").innerHTML =
    `<b>Patient Bills: Highest to Lowest</b>` + table;
}

// 10. Array some() & every()
function demo10() {
  const allHaveNames = patients.every(patient => {
    return patient.name.length > 0;
  });

  const hasWaitingPatient = patients.some(patient => {
    return patient.status === "Waiting";
  });

  document.getElementById("out-10").innerHTML =
    `All records have patient names? ` +
    `<b>${allHaveNames ? "YES ✅" : "NO ❌"}</b><br>` +
    `Any patient waiting? ` +
    `<b>${hasWaitingPatient ? "YES ⏳" : "NO ✅"}</b>`;
}

// 11. Array includes() & indexOf()
function demo11() {
  const target = "Cardiology";

  const exists = hospitalDepartments.includes(target);
  const index = hospitalDepartments.indexOf(target);

  document.getElementById("out-11").innerHTML =
    `Department: <b>${target}</b><br>` +
    `Available? <b>${exists}</b><br>` +
    `Department Index: <b>${index}</b>`;
}

// 12. Date - Format and Join Dates
function demo12() {
  const appointmentDates = [
    new Date(2026, 0, 15),
    new Date(2026, 4, 20),
    new Date(2026, 9, 31)
  ];

  const formattedDates = appointmentDates.map(date => {
    return date.toLocaleDateString("en-IN");
  });

  document.getElementById("out-12").innerHTML =
    `<b>📅 Hospital Appointment Timeline:</b><br>` +
    formattedDates.join(" ➜ ");
}

// 13. Array push() & pop()
function demo13() {
  const supplies = ["🩹 Bandages", "🧤 Gloves"];

  supplies.push("💊 Medicines");
  const afterPush = [...supplies];

  const removedItem = supplies.pop();

  document.getElementById("out-13").innerHTML =
    `Added with push():<br>${afterPush.join(", ")}<br><br>` +
    `Removed with pop():<br><b>${removedItem}</b><br><br>` +
    `Final Supplies:<br>${supplies.join(", ")}`;
}

// 14. Final Hospital Summary
function demo14() {
  const totalPatients = patients.length;

  const totalBills = patients.reduce((sum, patient) => {
    return sum + patient.bill;
  }, 0);

  const admittedCount = patients.filter(patient => {
    return patient.status === "Admitted";
  }).length;

  const highestBill = [...patients].sort((a, b) => {
    return b.bill - a.bill;
  })[0];

  const totalSupplies = medicalSupplies.length;

  document.getElementById("out-14").innerHTML = `
    <table>
      <tr><th>Hospital Metric</th><th>Result</th></tr>
      <tr><td>Total Patient Records</td><td>${totalPatients}</td></tr>
      <tr><td>Admitted Patients</td><td>${admittedCount}</td></tr>
      <tr><td>Total Patient Bills</td><td>₹${totalBills}</td></tr>
      <tr><td>Highest Bill</td>
          <td>${highestBill.name} - ₹${highestBill.bill}</td></tr>
      <tr><td>Medical Supplies</td><td>${totalSupplies} Items</td></tr>
      <tr><td>System Status</td><td>🟢 Hospital Dashboard Ready</td></tr>
    </table>
  `;
}