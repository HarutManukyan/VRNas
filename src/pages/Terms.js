import PageTop from "../components/PageTop";
import person1 from "../img/person1.png";
import person2 from "../img/person2.png";

function Terms() {
  return (
    <div className="terms">
      <div style={{ width: "60%", margin: "0 auto" }}>
        <PageTop title={"Tems & Conditions"} />
      </div>

      <div className="faq-page__person1-container faq-page__person-container">
        <img
          className="faq-page__person1 faq-page__person"
          src={person1}
          alt="person"
        />
      </div>
      <div className="faq-page__person2-container faq-page__person-container">
        <img
          className="faq-page__person2 faq-page__person"
          src={person2}
          alt="person"
        />
      </div>

      <div className="terms__content">
        <h4 className="terms__subtitle">Tems & Conditions</h4>
        <h2 className="terms__title">Terms and Conditions</h2>
        <p className="terms__text">
          Welcome to VRNas. Please read these Terms and Conditions carefully
          before using our website and services.
        </p>

        <h3 className="terms__name">Acceptance of Term</h3>
        <p className="terms__explanation">
          By accessing or using any part of our website or services, you agree
          to be bound by these Terms and Conditions. If you do not agree to all
          the terms and conditions of this agreement, then you may not access
          the website or use any services.
        </p>
        <h3 className="terms__name">Use of Website and Services</h3>
        <p className="terms__explanation">
          You may use our website and services solely for lawful purposes and in
          accordance with these Terms and Conditions. You agree not to use our
          website or services: In any way that violates any applicable federal,
          state, local or international law or regulation. To transmit, or
          procure the sending of, any advertising or promotional material,
          including any "junk mail", "chain letter" or "spam" or any other
          similar solicitation. To impersonate or attempt to impersonate
          [Company Name], a [Company Name] employee, another user or any other
          person or entity. To engage in any other conduct that restricts or
          inhibits anyone's use or enjoyment of the website or services, or
          which, as determined by us, may harm [Company Name] or users of the
          website or services or expose them to liability.
        </p>
        <h3 className="terms__name">Intellectual Property</h3>
        <p className="terms__explanation">
          The content and materials available on our website and services,
          including but not limited to text, graphics, logos, images, and
          software, are the property of [Company Name] or its licensors and are
          protected by copyright, trademark, and other intellectual property
          laws. You may not use any of our content or materials for commercial
          purposes without obtaining a license to do so from [Company Name] or
          its licensors.
        </p>
        <h3 className="terms__name">Limitation of Liability</h3>
        <p className="terms__explanation">
          In no event shall [Company Name] be liable for any direct, indirect,
          incidental, consequential, special, or exemplary damages arising out
          of or in connection with your use of our website or services.
        </p>
        <h3 className="terms__name">Changes to Terms and Conditions</h3>
        <p className="terms__explanation">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms and Conditions at any time. By continuing to access or use
          our website and services after any revisions become effective, you
          agree to be bound by the revised terms.
        </p>
        <h3 className="terms__name">Contact Us</h3>
        <p className="terms__explanation">
          If you have any questions about these Terms and Conditions, please
          contact us using the information provided on our contact page.
        </p>
      </div>
    </div>
  );
}

export default Terms;
