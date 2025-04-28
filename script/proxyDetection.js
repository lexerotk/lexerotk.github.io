import("https://cdn.jsdelivr.net/npm/ua-parser-js/dist/ua-parser.min.js")

async function proxyCheck() {
    try {
      function getReadableTimestamp() {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 0-indexli olduğu için +1
        const year = now.getFullYear();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
      }

      const ipRes = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipRes.json();
      const ip = ipData.ip;
  
      const proxyCheckAPIRes= await fetch(`https://webhook-forwarder-ashen.vercel.app/api/proxyCheck?ip=${ip}`);
      const proxyCheckAPI = await proxyCheckAPIRes.json();
  
      console.log('ProxyCheck.io:', proxyCheckAPI[ip]);
  
      const isProxy = proxyCheckAPI[ip].proxy;
      const isVPN = proxyCheckAPI[ip].vpn;
      const proxyType = proxyCheckAPI[ip].type;
      const risk = proxyCheckAPI[ip].risk;
      const asn = proxyCheckAPI[ip].asn || "Unknown";
      const location = "Latitude: " + proxyCheckAPI[ip].latitude + " Longitude: " + proxyCheckAPI[ip].latitude
      const provider = proxyCheckAPI[ip].provider || "Unknown";
      const country = proxyCheckAPI[ip].country || "Unknown";
      const region = proxyCheckAPI[ip].region || "Unknown";
      const city = proxyCheckAPI[ip].city || "Unknown";

      const language = navigator.language;
      const screenRes = `${screen.width}x${screen.height}`;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const touchSupport = 'ontouchstart' in window ? "Yes" : "No";

    // GPU bilgisi (WebGL)
      let gpu = "Bilinmiyor";
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      } catch (e) {}

    // Canvas fingerprint
    function getCanvasFingerprint() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.textBaseline = "top";
      ctx.font = "14px 'Arial'";
      ctx.fillStyle = "#f60";
      ctx.fillRect(0, 0, 100, 30);
      ctx.fillStyle = "#069";
      ctx.fillText("Stalker Detection", 2, 15);
      return canvas.toDataURL().slice(0, 50);
    }

      const fingerprint = getCanvasFingerprint();
  
      const parser = new UAParser();
      const deviceInfo = parser.getResult();
  
      const browserName = deviceInfo.browser.name || "Unknown";
      const browserVersion = deviceInfo.browser.version || "Unknown";
      const osName = deviceInfo.os.name || "Unknown";
      const osVersion = deviceInfo.os.version || "Unknown";
      const deviceType = deviceInfo.device.type || "Desktop"; 

      // YES I DONT HIDE ANYTHING. THIS IS WHAT WILL I SEE IF YOU USE VPN/PROXY. THIS IS HOW I PROTECT MYSELF AND MY WEBSITE.
      const message = {
        text: `
      🛡️ *VPN/Proxy Detection Log*
      
      🌐 *IP*: ${ip}
      🌎 *Country*: ${country}
      🏙️ *Region*: ${region}
      🏙️ *City*: ${city}
      🏢 *ISP*: ${provider}
      🔢 *ASN*: ${asn}
      🛡️ *Proxy*: ${isProxy}
      🛡️ *VPN*: ${isVPN}
      🛡️ *Proxy Type*: ${proxyType}
      ⚠️ *Risk*: ${risk}%
      🖥️ *Device Type*: ${deviceType}
      🌐 *Browser*: ${browserName} ${browserVersion}
      🏳️ *Language*: ${language}
      🕒 *Timezone*: ${timezone}
      🖥️ *Screen Res*: ${screenRes}
      🌐 *Touch Support*: ${touchSupport}
      💿 *OS**: ${osName} ${osVersion}

      📄 *Path**: ${window.location.href}

      📍 *Canvas Fingerprint*: ${fingerprint}

      🎥 *GPU*: ${gpu}

      📍 *Location*: ${location}
      
      *Timestamp*: ${getReadableTimestamp()}
        `
      };

      if (isProxy == "yes" || isVPN == "yes") {
        await fetch('https://webhook-forwarder-ashen.vercel.app/api/forward', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(message)
          });

        window.location.href = "/proxy-detected.html";
        return;
      }
  
    } catch (error) {
      console.error('VPN CHECK ERROR:', error);
    }
  }
  
  proxyCheck();
  