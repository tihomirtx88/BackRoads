import Title from "@/components/Title";
import { services } from "../data";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title title="our" subTitle="services" />
        <div className="section-center services-center">
          {services.map((service) => {
            const { id, icon, text, title } = service;
            return (
              <article className="service" key={id}>
                <span className="service-icon">
                  <i className={icon} />
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
