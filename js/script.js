document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Fetch form values
    const serialNumber = document.getElementById("serialNumber").value;
    const name = document.getElementById("name").value;
    const className = document.getElementById("class").value;
    const batch = document.getElementById("batch").value;
    const collegeName = document.getElementById("collegeName").value;
    const roll = document.getElementById("roll").value;
    const year = document.getElementById("year").value;
    const photo = document.getElementById("photo").value;

    // Create new row in the table
    const table = document.getElementById("dataTable");
    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    

    cell1.innerHTML = serialNumber;
    cell2.innerHTML = name;
    cell3.innerHTML = className;
    cell4.innerHTML = batch;
    cell5.innerHTML = collegeName;
    cell6.innerHTML = roll;
    cell7.innerHTML = year;
    cell8.innerHTML = `<img src="${photo}" alt="${name}" width="50">`;

    // Clear form fields
    document.getElementById("studentForm").reset();

    // Show success message
    showMessage("Successfully Student data added. Thank You.");
});

function showMessage(message) {
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = message;
    successMessage.style.display = "block";

    // Hide the message after 3 seconds
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 3000);
}

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("studentForm").reset();
});

document.getElementById("showDataBtn").addEventListener("click", function() {
    const table = document.getElementById("dataTable");
    const btn = document.getElementById("showDataBtn");
    const form = document.getElementById("studentForm");
    const container = document.querySelector(".container");
    const headers = document.getElementById("tableHeaders");
    
    if (table.classList.contains("hidden")) {
        table.classList.remove("hidden");
        btn.textContent = "Hide Data";
        form.classList.add("hidden");
        container.removeChild(headers);
    } else {
        table.classList.add("hidden");
        btn.textContent = "Show Data";
        form.classList.remove("hidden");
        container.insertBefore(headers, table);
    }
});
