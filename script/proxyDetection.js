async function proxyCheck() {
  try {
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();
    const ip = ipData.ip;
    
    const vpnApiKey = '90bdadf374a44f1eb2bba44236d63467';
    const vpnResponse = await fetch(`https://vpnapi.io/api/${ip}?key=${vpnApiKey}`);
    const vpnData = await vpnResponse.json();

    console.log('VPN API Info:', vpnData);

    const isVpn = vpnData.security.vpn;
    const isProxy = vpnData.security.proxy;
    const isTor = vpnData.security.tor;
    const currentPage = window.location.pathname;

    if (isVpn || isProxy || isTor) {
        
        await fetch('https://discord.com/api/webhooks/1365641719181479946/2hBBZAU7XDtoMiEjv0v3nOeRP5H2KHetDpNR0FdYLlGq4OuOjLD-7JVfOVquz7NPbvWq', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              embeds: [{
                title: 'New Visitor Control',
                color: isVpn || isProxy || isTor ? 16711680 : 65280, // Red (VPN) or Green (Normal)
                fields: [
                  { name: 'IP Address', value: ip, inline: true },
                  { name: 'Country', value: vpnData.location.country, inline: true },
                  { name: 'City', value: vpnData.location.city || "Unknown", inline: true },
                  { name: 'ISP', value: vpnData.network.organization || "Unknown", inline: false },
                  { name: 'ASN', value: "AS" + (vpnData.network.autonomous_system_number || "Unknown"), inline: true },
                  { name: 'VPN', value: (isVpn ? "Using VPN" : isProxy ? "Using Proxy" : isTor ? "Using Tor Network" : "Normal Connection"), inline: false },
                  { name: 'Path:', value: currentPage, inline: false },
                  { name: 'API Response', value: "```" + vpnData + "```", inline: false }
                  

                ],
                footer: {
                  text: 'VPN Detection System'
                },
                timestamp: new Date()
              }]
            })
          });
          window.location.href = "/proxy-detected.html"; 
          return;
    }

  } catch (error) {
    console.error('Proxy/VPN Check Error:', error);
  }
}

proxyCheck();