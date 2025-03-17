document.getElementById("submit").addEventListener("click", () => {
    console.log("Button clicked!");
  
    fetch("http://localhost:8000/data")
      .then((response) => {
        console.log("Response received:", response);
        if (!response.ok) {
          throw new Error("HTTP error: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        document.getElementById("textarea").value = JSON.stringify(data, null, 2);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  });
  