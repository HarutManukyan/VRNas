import PageTop from "../components/PageTop";
import person1 from "../img/person1.png";
import person2 from "../img/person2.png";

function Privacy() {
  return (
    <div className="terms">
      <div style={{ width: "60%", margin: "0 auto" }}>
        <PageTop title={"Privacy Policy"} />
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
        <h4 className="terms__subtitle">Privacy Policy</h4>
        <h2 className="terms__title">Privacy Policy</h2>
        <p className="terms__text">
          This Privacy Policy describes how [Company Name] collects, uses, and
          protects the personal information of our website visitors and
          customers.
        </p>

        <h3 className="terms__name">Information We Collect</h3>
        <p className="terms__explanation">
          We may collect the following types of personal information: Name,
          email address, and other contact information. Demographic information
          such as age, gender, and location. Payment information such as credit
          card details. Information about how you use our website and services.
        </p>
        <h3 className="terms__name">How We Use Your Information</h3>
        <p className="terms__explanation">
          We may use your personal information for the following purposes: To
          provide you with our services and products. To process payments and
          fulfill orders. To send you marketing and promotional materials. To
          improve our website and services.
        </p>
        <h3 className="terms__name">How We Protect Your Information</h3>
        <p className="terms__explanation">
          We implement a variety of security measures to maintain the safety of
          your personal information when you place an order or enter, submit, or
          access your personal information. We use encryption to protect
          sensitive information transmitted online, and we also protect your
          information offline.
        </p>
        <h3 className="terms__name">Information Sharing</h3>
        <p className="terms__explanation">
          We do not sell or rent your personal information to third parties.
          However, we may share your information with our trusted third-party
          service providers who assist us in operating our website and services.
        </p>
        <h3 className="terms__name">Cookies and Tracking</h3>
        <p className="terms__explanation">
          We use cookies and other tracking technologies to collect information
          about your browsing behavior and preferences. This information is used
          to personalize your experience on our website and to analyze how
          visitors use our website.
        </p>
        <h3 className="terms__name">Your Rights</h3>
        <p className="terms__explanation">
          You have the right to access, update, or delete your personal
          information. You can contact us using the information provided on our
          contact page to exercise these rights.
        </p>
        <h3 className="terms__name">Changes to Privacy Policy</h3>
        <p className="terms__explanation">
          We reserve the right to update this Privacy Policy at any time. We
          will notify you of any changes by posting the new Privacy Policy on
          our website.
        </p>
        <h3 className="terms__name">Contact Us</h3>
        <p className="terms__explanation">
          If you have any questions about our Privacy Policy, please contact us
          using the information provided on our contact page.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
