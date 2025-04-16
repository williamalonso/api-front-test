// pages/api/checkout.ts

export default async function handler(req: any, res: any) {
  // Adiciona os cabeçalhos CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos

  // Se for uma requisição OPTIONS (preflight), só retorne os cabeçalhos CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      // Dados do corpo da requisição
      const { payload } = req.body;

      // A URL da API que você deseja enviar os dados
      const apiUrl = 'https://app.landingpage.com.br/api/checkoutloja/LPL2gc/5d87eb644e5631bc6a03f1e43a804e1c';

      // Enviar a requisição para a API externa
      const apiResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Verificar se a requisição foi bem-sucedida
      if (apiResponse.ok) {
        // Resposta da API externa
        const data = await apiResponse.json();
        // Extrair a URL de redirecionamento da resposta da API
        const redirectUrl = data.redirect_url;
        // Retornar o redirecionamento para o front-end
        // Redirecionar o usuário para a URL fornecida
        res.status(200).json({ redirect_url: redirectUrl });
      } else {
        // Se algo deu errado na API externa, retornar erro
        res.status(apiResponse.status).json({ message: 'Erro na API externa' });
      }
    } catch (error) {
      // Em caso de erro na requisição
      console.error('Erro no servidor:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  } else {
    // Caso não seja uma requisição POST
    res.status(405).json({ message: 'Método não permitido' });
  }
}