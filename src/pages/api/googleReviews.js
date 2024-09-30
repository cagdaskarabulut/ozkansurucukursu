export const dynamicParams = true;
export const revalidate = 21600;

export default async function handler(req, res) {
  const placeId = "ChIJ1bSLfJ3Yh0ARqClpWZO0uwk";
  const apiKey = "AIzaSyCaVjU4IuEElrRa_nVaL85fsrg1LhMObBY"; //process.env.GOOGLE_PLACES_KEY; // API anahtarını env dosyasına koyun
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=tr&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result && data.result.reviews) {
      // Puanı 5 olan yorumları filtreleyin
      const filteredReviews = data.result.reviews.filter(
        (review) => review.rating === 5
      );

      // Tarihe göre en güncelden eskiye doğru sıralayın (time_stamp kullanarak)
      const sortedReviews = filteredReviews.sort((a, b) => b.time - a.time);

      // İlk 20 yorumu döndürün (veya elinizde kaç yorum varsa)
      const limitedReviews = sortedReviews.slice(0, 20);

      res.status(200).json(limitedReviews);
    } else {
      res.status(404).json({ message: "Yorum bulunamadı" });
    }
  } catch (error) {
    res.status(500).json({ message: "Hata oluştu", error: error.message });
  }
}
