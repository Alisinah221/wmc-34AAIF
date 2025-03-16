document.getElementById("fetchButton").addEventListener("click", async () => {
    const response = await fetch("/api/data");
    const data = await response.json();
    document.getElementById("jsonOutput").value = JSON.stringify(data, null, 2);
});