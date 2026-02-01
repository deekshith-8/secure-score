document.getElementById("analyzeBtn").addEventListener("click", analyzeSecurity);
function analyzeSecurity() {
  let riskScore = 0;
  let weakPractices = [];
  let recommendations = [];
  const reusePasswords = document.getElementById("reusePasswords").checked;
  const use2FA = document.getElementById("use2FA").checked;
  const publicWifi = document.getElementById("publicWifi").checked;
  const browserPasswords = document.getElementById("browserPasswords").checked;
  const updateSoftware = document.getElementById("updateSoftware").checked;
  if (reusePasswords) {
    riskScore++;
    weakPractices.push("Reusing passwords across multiple sites");
    recommendations.push("Use unique passwords for each account.");
  }
  if (!use2FA) {
    riskScore++;
    weakPractices.push("Two-factor authentication not enabled");
    recommendations.push("Enable 2FA wherever possible.");
  }
  if (publicWifi) {
    riskScore++;
    weakPractices.push("Frequent use of public Wi-Fi");
    recommendations.push("Avoid public Wi-Fi for sensitive activities or use a VPN.");
  }
  if (browserPasswords) {
    riskScore++;
    weakPractices.push("Storing passwords in browser");
    recommendations.push("Use a dedicated password manager.");
  }
  if (!updateSoftware) {
    riskScore++;
    weakPractices.push("Software not updated regularly");
    recommendations.push("Keep your system and apps up to date.");
  }
  let riskLevel = "Low";
  if (riskScore >= 4) {
    riskLevel = "High";
  } else if (riskScore >= 2) {
    riskLevel = "Medium";
  }
  displayResults(riskLevel, weakPractices, recommendations);
}
function displayResults(level, weak, recs) {
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("riskLevel").innerText = `Risk Level: ${level}`;
 const weakList = document.getElementById("weakPractices");
  weakList.innerHTML = "<h3>Weak Practices</h3>";
  weak.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    weakList.appendChild(li);
  });
 const recList = document.getElementById("recommendations");
  recList.innerHTML = "<h3>Recommendations</h3>";
  recs.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    recList.appendChild(li);
  });
}
