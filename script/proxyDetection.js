import("https://cdn.jsdelivr.net/npm/ua-parser-js/dist/ua-parser.min.js")

async function proxyCheck() {
    try {
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipRes.json();
      const ip = ipData.ip;
  
      const apiKey = 'XCkWPdabPg8stIapqVEchzNZQyzHLiIa'; 
      const qualityRes = await fetch(`https://webhook-forwarder-ashen.vercel.app/api/qualityscore?ip=${ip}`);
      const qualityData = await qualityRes.json();
  
      console.log('IP Quality Data:', qualityData);
  
      const isVpn = qualityData.vpn;
      const isProxy = qualityData.proxy;
      const isTor = qualityData.tor;
      const isHost = qualityData.host;
      const asn = qualityData.asn || "Unknown";
      const isp = qualityData.isp || "Unknown";
      const country = qualityData.country_code || "Unknown";
      const city = qualityData.city || "Unknown";
  
      const parser = new UAParser();
      const deviceInfo = parser.getResult();
  
      const browserName = deviceInfo.browser.name || "Unknown";
      const browserVersion = deviceInfo.browser.version || "Unknown";
      const osName = deviceInfo.os.name || "Unknown";
      const osVersion = deviceInfo.os.version || "Unknown";
      const deviceType = deviceInfo.device.type || "Desktop"; 
  
      if (isVpn || isProxy || isTor || isHost) {
        await fetch('https://webhook-forwarder-ashen.vercel.app/api/forward', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              embeds: [{
                title: '🛡️ VPN/Proxy Detection Log',
                color: (isVpn || isProxy || isTor || isHost) ? 16711680 : 65280,
                fields: [
                  { name: '🌐 IP', value: ip, inline: true },
                  { name: '🌎 Country', value: country, inline: true },
                  { name: '🏙️ City', value: city, inline: true },
                  { name: '🏢 ISP', value: isp, inline: false },
                  { name: '🔢 ASN', value: `AS${asn}`, inline: true },
                  { name: '🛡️ VPN', value: isVpn ? ":white_check_mark:" : ":x:", inline: true },
                  { name: '🛡️ Proxy', value: isProxy ? ":white_check_mark:" : ":x:", inline: true },
                  { name: '🛡️ TOR', value: isTor ? ":white_check_mark:" : ":x:", inline: true },
                  { name: '🏢 Hosting', value: isHost ? ":white_check_mark:" : ":x:", inline: true },
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
  