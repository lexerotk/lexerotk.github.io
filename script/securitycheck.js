(async () => {
    const scriptTag = document.currentScript;
    const nextPage = scriptTag.getAttribute("data-next") || "index.html";
    const trust = JSON.parse(localStorage.getItem("security_trust") || "null");

    const userIp = await fetch("https://api.ipify.org?format=json")
        .then(r => r.json())
        .then(d => d.ip)
        .catch(() => null);

    if (!userIp && userIp != null) {
        window.location.href = "blocked.html";
        return;
    }

    const now = Date.now();
    const threeHours = 3 * 60 * 60 * 1000;

    if (!trust || trust.ip !== userIp || now - trust.timestamp > threeHours) {
        window.location.href = `gate.html?next=${encodeURIComponent(nextPage)}`;
    }
})();