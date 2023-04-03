import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetcher(data) {
    try {
      setLoading(true);
      const response = await fetch("/api/gpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
        setAnswer(result);
      } else {
        console.error("Bad Response");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const data = Object.fromEntries(formData);
          fetcher(data);
        }}
      >
        <label htmlFor="persona">Type of Person:</label>
        <input type="text" id="persona" name="persona" />
        <hr />
        <label htmlFor="message">Question:</label>
        <input type="text" id="message" name="message" />
        <button>submit</button>
      </form>

      {loading ? <p>loading..</p> : <p>{answer?.answer.content}</p>}
    </>
  );
}
