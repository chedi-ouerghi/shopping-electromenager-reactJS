import React from "react";
import './temoignages.css'

const Temoignages = () => {
  return (
      <div className="section-temoignages">

      <section className="container container--testimonials-temoignages">
        <div className="testimonial-temoignages">
          <p className="testimonial__text-temoignages mb-25-temoignages">
            At first, it may be intimidating to see all of the available courses.
            Pick a track that interests you and work through it at your own pace.
          </p>
          <div className="testimonial__details-temoignages">
            <div className="testimonial__img-temoignages">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Timmy Dicki"
              />
            </div>
            <div className="testimonial__info-temoignages">
              <h4 className="testimonial__name-temoignages">Timmy Dicki</h4>
              <h5 className="testimonial__job-temoignages">Railroad Engineer</h5>
            </div>
          </div>
        </div>
        <div className="testimonial-temoignages">
          <p className="testimonial__text-temoignages mb-25-temoignages">
            I believe it would be very useful to teach cognitive neuroscience and
            psychology students all some coding skills.
          </p>
          <div className="testimonial__details-temoignages">
            <div className="testimonial__img-temoignages">
              <img
                src="https://images.unsplash.com/photo-1583664426440-daef00e4ad6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Valerie King"
              />
            </div>
            <div className="testimonial__info-temoignages">
              <h4 className="testimonial__name-temoignages">Valerie King</h4>
              <h5 className="testimonial__job-temoignages">Customer Service Representative</h5>
            </div>
          </div>
        </div>
        <div className="testimonial-temoignages">
          <p className="testimonial__text-temoignages mb-25-temoignages">
            I had looked into learning Javascript, but was too intimidated to start.
            Codecademy was perfect: we both really like learning by doing.
          </p>
          <div className="testimonial__details-temoignages">
            <div className="testimonial__img-temoignages">
              <img
                src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Terrell O'Keefe"
              />
            </div>
            <div className="testimonial__info-temoignages">
              <h4 className="testimonial__name-temoignages">Terrell O'Keefe</h4>
              <h5 className="testimonial__job-temoignages">Marketing Professional</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Temoignages;
