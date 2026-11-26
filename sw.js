// service worker ของ RSleave — ไม่เก็บแคชหน้าแอป (อัปเดตแล้วเห็นทันที) ใช้แค่ให้ติดตั้งเป็นแอปได้ และขึ้นข้อความเมื่อไม่มีเน็ต
const OFFLINE = '<!doctype html><html lang="th"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>RSleave</title><body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif;background:#F93194;color:#fff;text-align:center"><div><h1 style="font-size:22px;margin:0 0 8px">ไม่มีการเชื่อมต่ออินเทอร์เน็ต</h1><p style="margin:0 0 16px">ตรวจสอบ Wi-Fi หรืออินเทอร์เน็ตมือถือ แล้วลองใหม่</p><button onclick="location.reload()" style="font-size:16px;padding:10px 20px;border:0;border-radius:99px;background:#fff;color:#9D174D;font-weight:700">ลองใหม่</button></div></body></html>';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;          // ไฟล์อื่น / การเรียก Apps Script ผ่านตามปกติ
  e.respondWith(fetch(e.request).catch(() => new Response(OFFLINE, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
