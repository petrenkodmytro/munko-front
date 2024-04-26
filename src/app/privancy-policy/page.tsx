// 'use client';

import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import React from 'react';

const PrivacyPolicy = () => {
  // const currentPathname = usePathname()
  // console.log(currentPathname)
  return (
    <section className="text-[#08080D] px-4 pt-6 pb-10 md:px-5 md:pb-[72px] xl:px-20 xl:pt-9">
      <p className="text-2xl font-semibold text-center mb-6 md:text-3xl">
        Privacy Policy
      </p>
      <div className="mb-4 text-xs md:mb-6 md:text-base">
        <Link className="underline" href={'/'}>
          Home page
        </Link>
        / Privacy Policy
      </div>
      <div className="flex flex-col gap-4 font-semibold text-base md:text-lg">
        <p>
          Introduction <br /> This privacy policy describes how we, Munko,
          collect, use and protect the information that you give us when you use
          our online store. We are committed to ensuring your privacy and
          security by complying with all applicable regulations and requirements
          regarding the processing of personal data.
        </p>
        <p>
          Collection of information <br /> We may collect a variety of
          information from users of our store, including but not limited to the
          following:
          <br />
          Personal Information: Your name, address, email, phone number, and
          other personal information you provide when you register and at other
          times while using our services.
          <br /> Usage Information: We may collect information about your online
          store activity, such as product views, order actions, feedback, and
          other interactions with our store. <br />
          Device Information: We may collect information about your device,
          including IP address, browser type, mobile carrier and other technical
          information.
        </p>
        <p>
          Use of information <br /> We use the collected information for the
          following purposes: <br /> Provision of services: To process orders,
          provide access to the online store functions and provide interaction
          between users.
          <br /> Security: To protect you and other users from fraudsters and
          unwanted actions on the online store. <br /> Service Improvement: To
          analyze and improve the functionality of our online store and provide
          you with a better user experience.
        </p>
        <p>
          Disclosure of information <br /> We may disclose your information to
          third parties only in the following cases: <br /> User Consent: We may
          disclose your data if you have consented to such disclosure. <br />{' '}
          Legal Requirement: We may disclose your information as required by
          law, court orders, or government requests.
        </p>
        <p>
          Protection of information <br /> We take all possible measures to
          ensure the security of your information and prevent unauthorized
          access or data leakage.
        </p>
        <p>
          Changes to the privacy policy <br /> We may update this privacy policy
          from time to time and any changes will be posted on this page with the
          new effective date.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
