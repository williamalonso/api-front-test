// pages/api/checkout.ts

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return; // ✅ importante evitar "return value" após o end
  }

  if (req.method === 'POST') {
    try {
      const payload = req.body;
      console.log("Payload recebido:", payload);

      const apiUrl = 'https://app.landingpage.com.br/api/checkoutloja/LPL2gc/5d87eb644e5631bc6a03f1e43a804e1c';

      const apiResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseText = await apiResponse.text();
      console.log("Status da API externa:", apiResponse.status);
      console.log("Resposta da API externa:", responseText);

      if (apiResponse.ok) {
        const data = JSON.parse(responseText);
        res.status(200).json({ redirect_url: data.redirect_url });
      } else {
        res.status(apiResponse.status).json({ message: 'Erro na API externa', body: responseText });
      }
    } catch (error) {
      console.error('Erro no servidor:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
