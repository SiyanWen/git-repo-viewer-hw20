async function getRepos() {
  const username = document.getElementById("username").value.trim();
  const message = document.getElementById("message");
  const output = document.getElementById("output");

  message.textContent = "";
  output.textContent = "";

  if (!username) {
    message.textContent = "Please enter a GitHub username.";
    message.className = "error";
    return;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
      throw new Error("User not found or API limit exceeded.");
    }

    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);

  } catch (error) {
    message.textContent = `Error: ${error.message}`;
    message.className = "error";
  }
}
