export const dynamicParams = true;
export const revalidate = 21600;

export default async function handler(req, res) {
  const accessToken =
    "IGQWRPRW1jUzJWendBSnR6OGp6Y2ZAHUEtycERqM0l3Nl9qVTVvR2w1dE90bVBwdTlXTlRXWGZAKRWhaeHZANVHk0YXZAxbklYbkNGVVpEZAFBkNlFQVXM0NGxjb19EY2QxZAFNLalVSZAnY5R0ZA5azczUl9YMmdfSTNIS1UZD";
  const userId = "1642264763007349"; //https://graph.instagram.com/me?access_token=${accessToken}
  const limit = 8;

  //görmeye yetkili kullanıcı ile yapmak gerekiyor, kanal sahibi daha iyi olur.
  const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink,timestamp&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    // Son 8 paylaşımı döndürelim
    const lastEightPosts = data.data.slice(0, 8);

    res.status(200).json(lastEightPosts);
  } catch (error) {
    res.status(500).json({ error: "Instagram API request failed." });
  }
}
