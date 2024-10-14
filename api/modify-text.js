import { geminiChat } from './geminiAPI'; // 假设现有的对话逻辑是通过这个函数处理

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { text } = req.body;  // 从请求体中获取文本
      if (!text) {
        return res.status(400).json({ error: 'No text provided' });
      }

      // 使用现有的 Geminiprochat 对话逻辑来处理文本
      const response = await geminiChat(text);
      
      // 假设返回的是处理过的文本内容
      return res.status(200).json({ modifiedText: response });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
