import { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/7/comments"
        );

        const data = await response.json();

        const names = [
          "Олександр Коваль",
          "Марія Бондар",
          "Ігор Савчук",
          "Вікторія Мельник",
          "Андрій Петренко",
        ];

        const texts = [
          "Андрій показав себе відповідальним та уважним до деталей розробником.",
          "Продемонстрував хороші знання веброзробки та вміння працювати в команді.",
          "Швидко адаптується до нових технологій та виконує задачі вчасно.",
          "Дисциплінований спеціаліст із хорошими технічними навичками.",
          "Має хороше розуміння HTML, CSS та JavaScript.",
        ];

        const preparedReviews = data.slice(0, 5).map((item, index) => ({
          id: item.id,
          name: names[index],
          text: texts[index],
        }));

        setReviews(preparedReviews);
      } catch (error) {
        console.error(error);
      }
    }

    loadReviews();
  }, []);

  return (
    <section style={{ padding: "30px" }}>
      <h2>Відгуки роботодавців</h2>

      {reviews.map((review) => (
        <div
          key={review.id}
          style={{
            background: "#f3f4f6",
            color: "#111827",
            padding: "15px",
            marginBottom: "15px",
            borderLeft: "4px solid #2563eb",
            borderRadius: "8px",
          }}
        >
          <h3>{review.name}</h3>
          <p>{review.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Reviews;