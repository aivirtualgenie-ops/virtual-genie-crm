const app = document.getElementById("app");

app.innerHTML = `
    <div class="card">
        <h2>Today's Calls</h2>
        <div class="stat">0</div>
    </div>

    <div class="card">
        <h2>Follow-ups Today</h2>
        <div class="stat">0</div>
    </div>

    <div class="card">
        <h2>Active Opportunities</h2>
        <div class="stat">0</div>
    </div>

    <div class="card">
        <h2>Quick Actions</h2>
        <br>
        <button id="addLead">➕ Add Lead</button>
    </div>
`;

document.getElementById("addLead").addEventListener("click", () => {
    alert("Add Lead feature coming next!");
});
