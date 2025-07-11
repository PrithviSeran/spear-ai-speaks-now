import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker-dark.css"; // ✅ Custom styling file we'll create

const BookADemo = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !email) {
      alert("Please select a date and enter your email.");
      return;
    }

    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, email }),
    });

    if (res.ok) {
      alert("Booking confirmed!");
    } else {
      alert("Error submitting form.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f0f0f] p-10 rounded-2xl w-full max-w-3xl shadow-2xl border border-white/10"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">Book a Demo</h2>

        <div className="mb-6">
          <label className="block mb-2 text-lg">Pick a Date & Time:</label>
          <DatePicker
            selected={date}
            onChange={setDate}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="w-full p-4 rounded-lg bg-[#1c1c1c] text-white border border-white/10"
            calendarClassName="dark-datepicker"
          />
        </div>

        <div className="mb-8">
          <label className="block mb-2 text-lg">Your Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-lg bg-[#1c1c1c] text-white border border-white/10"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookADemo;
