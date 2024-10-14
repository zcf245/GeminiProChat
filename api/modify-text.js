import { geminiChat } from './geminiAPI'; // 假设现有的对话逻辑是通过这个函数处理

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: 'No text provided' });
      }

      // 调用现有的 Geminiprochat 逻辑
      const response = await geminiChat(text);
      if (!response) {
        return res.status(500).json({ error: 'Failed to modify text' });
      }

      return res.status(200).json({ modifiedText: response });
    } else {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Server error:', error); // 打印错误日志
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
