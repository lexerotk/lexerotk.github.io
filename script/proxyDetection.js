import("https://cdn.jsdelivr.net/npm/ua-parser-js/dist/ua-parser.min.js")

async function getWebRTCIP() {
  return new Promise((resolve) => {
    const rtc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    });
    
    rtc.createDataChannel("check");
    rtc.createOffer()
      .then(offer => rtc.setLocalDescription(offer))
      .catch(err => reject(err));
    
    rtc.onicecandidate = event => {
      if (event && event.candidate && event.candidate.candidate) {
        const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
        const ipMatch = event.candidate.candidate.match(ipRegex);
        if (ipMatch) {
          resolve(ipMatch[1]);
          rtc.onicecandidate = null;
        }
      }
    };

    setTimeout(() => {
      resolve("Browser Privacy Protection Error");
    }, 4000);
  });
}

function getReadableTimestamp() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

async function proxyCheck() {
    try {
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipRes.json();
      const ip = ipData.ip;
  
      const proxyCheckAPIRes= await fetch(`https://webhook-forwarder-ashen.vercel.app/api/proxyCheck?ip=${ip}`);
      const proxyCheckAPI = await proxyCheckAPIRes.json();
      console.log('ProxyCheck.io:', proxyCheckAPI[ip]);
      
      let gpu = "Unknown";
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      } catch (e) {}

      const parser = new UAParser();

      const deviceInfo = parser.getResult();
      const browserName = deviceInfo.browser.name || "Unknown";
      const browserVersion = deviceInfo.browser.version || "Unknown";
      const osName = deviceInfo.os.name || "Unknown";
      const osVersion = deviceInfo.os.version || "Unknown";
      const deviceType = deviceInfo.device.type || "Desktop";
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
      const screenRes = `${screen.availWidth}x${screen.availHeight}`;
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const touchSupport = 'ontouchstart' in window ? "Yes" : "No";
      const webrtcIP = await getWebRTCIP();
      const languages = navigator.languages;
      const cpuThreads = navigator.hardwareConcurrency;
      const deviceMemory = navigator.deviceMemory || 'N/A';
      const connectionType = navigator.connection?.effectiveType || 'unknown';

      // YES I DONT HIDE ANYTHING. THIS IS WHAT WILL I SEE IF YOU USE VPN/PROXY. THIS IS HOW I PROTECT MYSELF AND MY WEBSITE.
      const message = {
        text: `
      🕒 *Timestamp*: ${getReadableTimestamp()}
      
      🌐 *IP*: ${ip}
      🌐 *WebRTC IP*: ${webrtcIP}
      🌎 *Country*: ${country}
      🏙️ *Region*: ${region}
      🏙️ *City*: ${city}
      🏢 *ISP*: ${provider}
      🔢 *ASN*: ${asn}
      🛡️ *Proxy*: ${isProxy}
      🛡️ *VPN*: ${isVPN}
      🛡️ *Proxy Type*: ${proxyType}
      ⚠️ *Risk*: ${risk}%

      🏳️ *Language*: ${language}, ${languages}
      🕒 *Timezone*: ${timezone}
      🖥️ *Device Type*: ${deviceType}
      🌐 *Browser*: ${browserName} ${browserVersion}
      🔗 *Connection Type*: ${connectionType}
      🖥️ *Screen Res*: ${screenRes}
      📱 *Touch Support*: ${touchSupport}
      💿 *OS*: ${osName} ${osVersion}
      🖥️ *CPU Threads*: ${cpuThreads}
      🖥️ *Memory*: At least ${deviceMemory}GB
      🎥 *GPU*: ${gpu}

      📄 *Path*: ${window.location.href}
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
          alert("Something went wrong. Please continue.")
          window.location.href = "/proxy-detected.html";
          return;
      }
  
    } catch (error) {
      console.error('PROXY DETECTION ERROR:', error);
    }
  }
  
  proxyCheck();
  