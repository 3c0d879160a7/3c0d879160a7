async function pingIP(ip) {
  const start = Date.now();
  try {
    const response = await fetch(`http://${ip}`, { method: 'HEAD', mode: 'no-cors' });
    const duration = Date.now() - start;
    return { success: true, time: duration };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Sử dụng
pingIP('192.168.1.1').then(result => console.log(result));
