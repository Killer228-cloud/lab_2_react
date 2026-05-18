import { useEffect, useState } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          width: "400px",
          position: "relative",
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            border: "none",
            background: "none",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <h2>Зворотний зв’язок</h2>

        <form
          action="https://formspree.io/f/mnjrqkvo"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Ім’я"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
          />

          <textarea
            name="message"
            placeholder="Повідомлення"
            required
          />

          <button type="submit">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;