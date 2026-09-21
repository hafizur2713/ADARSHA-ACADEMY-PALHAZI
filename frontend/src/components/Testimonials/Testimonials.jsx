import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Parent of a Student",
    role: "Parent",
    message:
      "Adarsha Academy provides a supportive learning environment where students can develop their knowledge, confidence and discipline.",
  },
  {
    id: 2,
    name: "Student",
    role: "Student",
    message:
      "The teachers are helpful and encourage us to learn new things. The school provides opportunities for both academic and personal development.",
  },
  {
    id: 3,
    name: "Parent of a Student",
    role: "Parent",
    message:
      "We appreciate the caring environment and the importance given to education, values and the overall growth of students.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading text-center">
          <span className="section-small-title">
            TESTIMONIALS
          </span>

          <h2>
            What Our <span>Community Says</span>
          </h2>

          <div className="section-heading-line"></div>

          <p>
            Hear from our students and parents about their
            experience at Adarsha Academy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">

          {testimonials.map((testimonial) => (
            <div
              className="testimonial-card"
              key={testimonial.id}
            >

              {/* Quote Icon */}
              <div className="testimonial-quote">
                <Quote size={30} strokeWidth={1.8} />
              </div>

              {/* Stars */}
              <div className="testimonial-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    fill="currentColor"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Message */}
              <p className="testimonial-message">
                {testimonial.message}
              </p>

              {/* Person Details */}
              <div className="testimonial-person">

                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;