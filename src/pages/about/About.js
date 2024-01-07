import FAQ from "../../components/FAQ";
import PageTop from "../../components/PageTop";
import HomePartners from "../homepage/HomePartners";
import AboutChoose from "./AboutChoose";
import AboutLearn from "./AboutLearn";
import AboutTeam from "./AboutTeam";

function About() {
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
  const width = window.outerWidth;
  return (
    <div className="about">
      <PageTop title={"About us"} />
      <AboutLearn />
      <AboutChoose />
      <AboutTeam />
      {width > 1000 ? <HomePartners /> : null}
      <FAQ faq={faq} />
    </div>
  );
}

export default About;
