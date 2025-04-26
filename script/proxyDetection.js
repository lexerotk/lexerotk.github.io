import("https://cdn.jsdelivr.net/npm/ua-parser-js/dist/ua-parser.min.js")

async function proxyCheck() {
    try {
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
      const operator = proxyCheckAPI[ip].operator || "Unknown";
      const asn = proxyCheckAPI[ip].asn || "Unknown";
      const location = "Latitude: " + proxyCheckAPI[ip].latitude + " Longitude: " + proxyCheckAPI[ip].latitude
      const provider = proxyCheckAPI[ip].provider || "Unknown";
      const country = proxyCheckAPI[ip].country || "Unknown";
      const region = proxyCheckAPI[ip].region || "Unknown";
      const city = proxyCheckAPI[ip].city || "Unknown";
  
      const parser = new UAParser();
      const deviceInfo = parser.getResult();
  
      const browserName = deviceInfo.browser.name || "Unknown";
      const browserVersion = deviceInfo.browser.version || "Unknown";
      const osName = deviceInfo.os.name || "Unknown";
      const osVersion = deviceInfo.os.version || "Unknown";
      const deviceType = deviceInfo.device.type || "? Desktop ?"; 
  
      if (isProxy == "yes" || isVPN == "yes") {
        await fetch('https://webhook-forwarder-ashen.vercel.app/api/forward', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              embeds: [{
                title: '🛡️ VPN/Proxy Detection Log',
                fields: [
                  { name: '🌐 IP', value: ip, inline: true },
                  { name: '🌎 Country', value: country, inline: true },
                  { name: '🏙️ Region', value: region, inline: true },
                  { name: '🏙️ City', value: city, inline: true },
                  { name: '📍 Location', value: location, inline: false },
                  { name: '🏢 ISP', value: provider, inline: false },
                  { name: '🔢 ASN', value: `${asn}`, inline: true },
                  { name: '🛡️ Proxy', value: isProxy, inline: true },
                  { name: '🛡️ VPN', value: isVPN, inline: true },
                  { name: '🛡️ Proxy Type', value: proxyType, inline: true },
                  { name: '🛡️ Risk', value: risk, inline: true },
                  { name: '🛡️ Operator', value: operator, inline: true },
                  { name: '📄 Path', value: window.location.href, inline: false },
                  { name: '🖥️ Device Type', value: deviceType, inline: true },
                  { name: '🌐 Browser', value: `${browserName} ${browserVersion}`, inline: true },
                  { name: '💻 OS', value: `${osName} ${osVersion}`, inline: true }
                ],
                footer: { text: "By @lexerotk" },
                timestamp: new Date().toISOString()
              }]
            })
          });

        window.location.href = "/proxy-detected.html"; 
        return;
      }
  
    } catch (error) {
      console.error('VPN CHECK ERROR:', error);
    }
  }
  
  proxyCheck();
  