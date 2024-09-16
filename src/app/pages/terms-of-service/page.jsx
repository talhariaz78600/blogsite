import React from 'react';

const Page = () => {
  return (
    <div>
      <main
        id="MainContent"
        className="content-for-layout focus-none px-20 md:px-80"
        role="main"
        tabIndex="-1"
      >
        <article className="terms-of-service__container">
          <header className="terms-of-service__title">
            <h1>Terms of Service</h1>
          </header>

          <section className="terms-of-service__body">
            <div className="rte">
              <p className="terms-of-service__paragraph">
                Welcome to Guest Glow. These Terms of Service govern your use of our
                website and any related services. By accessing or using our website,
                you agree to comply with these terms. If you do not agree, please do
                not use our services.
              </p>
              <p className="terms-of-service__paragraph">
                <strong>1. User Responsibilities</strong>
                <br />
                You are responsible for ensuring that your use of our website complies
                with all applicable laws and regulations. You agree not to engage in
                any unlawful or prohibited activities while using our website.
              </p>
              <p className="terms-of-service__paragraph">
                <strong>2. Content Ownership</strong>
                <br />
                All content on our website, including articles, images, and graphics, is
                owned by Guest Glow or its content providers. You may not use, reproduce,
                or distribute any content without our prior written permission.
              </p>
              <p className="terms-of-service__paragraph">
                <strong>3. Intellectual Property</strong>
                <br />
                All trademarks, logos, and service marks displayed on our website are
                the property of their respective owners. You may not use these
                trademarks without our prior written consent.
              </p>
              <p className="terms-of-service__paragraph">
                <strong>4. User Submissions</strong>
                <br />
                If you submit content to our website, you grant us a non-exclusive,
                royalty-free, perpetual, and worldwide license to use, modify, and
                display such content. You are responsible for the content you submit
                and agree not to submit content that is illegal, offensive, or violates
                the rights of others.
              </p>
              <p className="terms-of-service__paragraph">
                <strong>5. Limitation of Liability</strong>
                <br />
                We are not liable for any damages arising from your use of our website,
                including but not limited to direct, indirect, incidental, or
                consequential damages. Our liability is limited to the fullest extent
                permitted by law.
              </p>
              <p className="terms-of-service__paragraph">
                <strong>6. Changes to Terms</strong>
                <br />
                We reserve the right to update or modify these Terms of Service at any
                time. Any changes will be effective when posted on our website. Your
                continued use of the website constitutes acceptance of the revised
                terms.
              </p>
              <p className="terms-of-service__paragraph">
                <strong>7. Contact Information</strong>
                <br />
                If you have any questions about these Terms of Service, please contact us
                at: <a href="mailto:support@guestglow.site">muhammadtalha1005@gmail.com</a>.
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Page;
