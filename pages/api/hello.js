export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
// API routes are good for the following:
// 1. Saving incoming data to your database (i.e. from as submission form)
// 2. Securely communicating with a third-party API
// 3. Previewing draft content from your CMS