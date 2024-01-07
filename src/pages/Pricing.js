import PageTop from "../components/PageTop";
import FAQ from "../components/FAQ";
import HomeChoose from "./homepage/HomeChoose";

import { MdDoneOutline } from "react-icons/md";

function Pricing() {
  const faq = [
    {
      id: 1,
      question: "What is virtual reality?",
      answer:
        "Virtual reality (VR) is a technology that uses headsets or other devices to create a simulated environment. Users can interact with this environment as if it were real, allowing for immersive experiences in gaming, education, training, and more.",
    },
    {
      id: 2,
      question: "What types of VR services do you offer?",
      answer:
        "At our VR glasses website, we provide a diverse range of services. From offering various VR headsets to creating immersive content and developing custom applications for different industries, we strive to personalize your VR experience. Additionally, we offer expert consultation, support, accessories, and even VR event hosting, ensuring a seamless and captivating virtual journey.",
    },
    {
      id: 3,
      question: "How much does your VR services cost?",
      answer:
        "At our VR glasses website, pricing for our services varies based on the specific VR headsets, content creation, app development, and additional features tailored to your needs. We offer personalized consultations to understand your requirements and provide pricing details accordingly. Our aim is to ensure affordability while delivering high-quality and immersive VR experiences that match your budget and expectations.",
    },
    {
      id: 4,
      question: "What equipment do I need to use your VR services?",
      answer:
        "To access our VR services, you'll primarily need a compatible VR headset from our selection. Additionally, depending on the content or applications you're interested in, accessories like controllers or sensors may enhance your experience. Our team can guide you on the specific equipment needed for your chosen VR services, ensuring you have everything required for an immersive experience.",
    },
    {
      id: 5,
      question: "Can I try out your VR services before I commit?",
      answer:
        "Definitely! We offer trial options for certain VR services. Reach out to our team to explore trial opportunities or demo experiences to get a feel for our offerings before making a commitment. We want to ensure you're completely satisfied with your VR experience before you make any decisions.",
    },
  ];

  return (
    <div className="pricing">
      <PageTop title={"Pricing Plan"} />
      <div className="pricing__content">
        <h4 className="pricing__subtitle">PRICING</h4>
        <h2 className="pricing__title">Pricing Plans</h2>
        <p className="pricing__text">
          Choose the pricing plan that fits your needs and budget. All plans
          come with a free trial period so you can test out our service and see
          which plan works best for you.
        </p>

        <div className="pricing__card-container">
          <div className="pricing__card">
            <h4 className="pricing__plan">Basic Plan</h4>
            <div className="pricing__price">
              <span>$99</span>/ month
            </div>
            <ul className="pricing__list">
              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" />
                Access to a selection of VR games and experiences
              </li>

              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" />
                Limited access to educational content
              </li>

              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" />
                Limited access to architecture and design tools
              </li>

              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" />
                No access to exclusive events or promotions
              </li>
            </ul>
            <div className="pricing__btn-container">
              <button className="pricing__btn">Get 14 Days Free Trial</button>
            </div>
          </div>
          <div className="pricing__card">
            <h4 className="pricing__plan">Standard Plan</h4>
            <div className="pricing__price">
              <span>$149</span>/ month
            </div>
            <ul className="pricing__lsit">
              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" /> Access to a
                selection of VR games and experiences
              </li>

              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" /> Limited access to
                educational content
              </li>

              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" /> Limited access to
                architecture and design tools
              </li>

              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" /> Access to exclusive
                events and promotions
              </li>
            </ul>
            <div className="pricing__btn-container">
              <button className="pricing__btn">Get 14 Days Free Trial</button>
            </div>
          </div>
          <div className="pricing__card">
            <h4 className="pricing__plan">Standard Plan</h4>
            <div className="pricing__price">
              <span>$200</span>/ month
            </div>
            <ul className="pricing__lsit">
              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" /> Access to a
                selection of VR games and experiences
              </li>

              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" /> Limited access to
                educational content
              </li>

              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" /> Limited access to
                architecture and design tools
              </li>

              <li className="pricing__list-item">
                <MdDoneOutline className="pricing__icon" /> Priority access to
                exclusive events and promotions
              </li>
            </ul>
            <div className="pricing__btn-container">
              <button className="pricing__btn">Get 14 Days Free Trial</button>
            </div>
          </div>
        </div>
      </div>

      <HomeChoose />
      <FAQ faq={faq} />
    </div>
  );
}

export default Pricing;
