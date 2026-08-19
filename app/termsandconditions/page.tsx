import type { Metadata } from "next";
import { FadeUp } from "../components/motion";

export const metadata: Metadata = {
  title: "Terms and Conditions — WheelPay",
};

const sections = [
  {
    heading: "Article I: General",
    paragraphs: [
      `Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Wheelpay mobile application(s) or website (the "Service") operated by Neuse River Solutions, LLC ("us", "we", or "our").`,
      "Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.",
      "By accessing or using the Service you agree to be bound by these Terms and understand that there is no tolerance for objectionable content as outlined in our Community Standards section below. If you disagree with any part of the Terms then you may not access the Service.",
    ],
  },
  {
    heading: "Security",
    paragraphs: [
      "This Service is a cloud backed application that runs on Amazon Web Services (AWS), which is one of the most secure computing infrastructures in the world. It is relied upon by companies such as Netflix, Expedia, and SAP.",
      "The AWS global infrastructure is designed and managed according to security best practices as well as a variety of security compliance standards. The AWS infrastructure is built to satisfy the requirements of the most security-sensitive organizations. To learn more on visit: https://aws.amazon.com/security/.",
      "We may take different or additional security measures at any time with or without notice to you. At no point, and for no reason, are we obligated to take more than commercially reasonable measures to protect you and your data.",
      "Neuse River Solutions, LLC shall not be liable for any security breach that results from unauthorized usage of your account due to your lost or stolen password. You should take reasonable measures to protect your login credentials, including periodically changing your password and using a password that is a combination of numbers, letters, and symbols, and of sufficient length.",
    ],
  },
  {
    heading: "Privacy Policy",
    paragraphs: [
      "We collect certain personal information from you in order to make this Service effective, like address, telephone number, name, location, and credit card information. We will only provide this personal information to the merchants and credit card processors you are purchasing from to complete the transactions. We shall not sell or otherwise transfer any personally identifying information without your permission to any other third parties beyond what is necessary to provide this Service.",
      "We use geo targeting technology to help you find offerings near you as part of the Service. In order to use the Service effectively, you have to allow the geo targeting technology through your mobile device or computer.",
    ],
  },
  {
    heading: "Content",
    paragraphs: [
      "You represent and warrant that: (i) any content provided by you is yours (you own it) and you grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person.",
      "We are committed to protecting the intellectual property of third parties. If you believe someone is infringing on your legal copyright or trademark rights, you may email legal@wheelpay.com with the following information for our review: (1) The description of the content that infringes on your legal rights; (2) Your name, telephone number, address, and email address; (3) link to the infringing content; (4) a certification or sworn statement that you, or your client if submitted by an attorney, is the lawful owner of the content, and that the information submitted is true under penalty of perjury. You may also mail this request to 8480 Honeycutt Rd, Suite 234, Raleigh, NC 27617.",
    ],
  },
  {
    heading: "Accounts",
    paragraphs: [
      "When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.",
      "You are responsible for safeguarding the password that you use to access the Service and for any activities or actions from any person or entity that accesses the Service using your password, whether your password is with our Service or a third-party service.",
      "You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.",
    ],
  },
  {
    heading: "Termination",
    paragraphs: [
      "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
      "All provisions of the Terms which, by their nature should survive termination, shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability, and intellectual property.",
      "Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply reach out to our support team to stop using the Service.",
    ],
  },
  {
    heading: "Limitation Of Liability",
    paragraphs: [
      "In no event shall Neuse River Solutions, LLC, nor its directors, employees, partners, agents, subsidiaries, parents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from: (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; or (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.",
      "In no event shall Neuse River Solutions, LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any damages whatsoever exceeding the total amount paid by you over the immediately previous six month time period leading up to the first incident or event that caused damages to incur.",
      "Your recovery, if any, shall be limited to Neuse River Solutions, LLC, or its insurance carrier if a claim is presented by Neuse River Solutions, LLC to that carrier.",
    ],
  },
  {
    heading: "Disclaimer",
    paragraphs: [
      `Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. THE SERVICE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, AND NEUSE RIVER SOLUTIONS, LLC EXPRESSLY DISCLAIMS THE SAME, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT OR COURSE OF PERFORMANCE.`,
      "Neuse River Solutions, LLC its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements. Neuse River Solutions, LLC makes no promises as to any affect this Service will have in any commercial setting. Neuse River Solutions, LLC makes no promises, and cannot make any promises or warranties, regarding the quality, nature, safety, or provision of any product or service provided by any user or third party vendor, whether that user or third party vendor is affiliated with the Service or Neuse River Solutions, LLC in any way.",
    ],
  },
  {
    heading: "Governing Law",
    paragraphs: [
      "These Terms shall be governed and construed in accordance with the laws of the State of North Carolina, without regard to its conflict of law provisions, except that Federal Law will apply to only those issues where Federal Law preempts state law.",
      "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.",
    ],
  },
  {
    heading: "License",
    paragraphs: [
      "During the term of this Agreement and until terminated, for any reason, Neuse River Solutions, LLC shall grant to you a limited, revocable, non-transferrable, non-exclusive license to use the Service for its intended purposes. You agree, as part of this license, that you do not own and will not claim or represent any ownership over the Service, and you will not modify or attempt to use the Service in any unintended way, including using another person's password or account, accessing or attempting to access data that you do not have permission to access, making changes to any code appearing through the Service, trying to backwards engineer the Service, or otherwise attempting to harm, disrupt, or alter the Service in anyway.",
      `"Wheelpay", is a trademark of Neuse River Solutions, LLC and is not to be used without the expressed written permission of Neuse River Solutions, LLC. Neuse River Solutions, LLC may expand, reduce, or revoke any license to use its trademarks at any time for any reason, with or without notice to you.`,
    ],
  },
  {
    heading: "Payments",
    paragraphs: [
      "Wheelpay acts as an intermediary for purchased between a consumer and a merchant. Therefore, refund policies are up to the discretion of the merchant. Any refund processed after the transaction has been processed by a third party or credit card processing company may incur a fee or be otherwise unable to be refunded wholly, if at all. You should be aware of your purchases and be careful to ensure no one has unauthorized access to your mobile device.",
      "By using the Service, you specifically authorize us, or our affiliates, to process and charge amounts to your credit or debit cards kept on file for goods and services provided by the merchants in the Service.",
      "You may setup reoccurring payments as part of the Service. Such reoccurring payments are subject to the terms and conditions of the merchant you're purchasing from.",
      "Wheelpay does not input prices or manage inventory on behalf of any merchants; therefore, you're responsible for ensuring the correct price is charged and that the goods purchased are in stock prior to purchasing them. Any replacements, faulty goods, or upgrades are subject to the policies of the merchant you purchase from.",
    ],
  },
  {
    heading: "Changes",
    paragraphs: [
      "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.",
      "By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.",
      "To ask questions or comment about these Terms, please contact us at legal@wheelpay.com or by snail mail at:",
      "Neuse River Solutions LLC — 7711 Welborn Street #105, Raleigh NC 27615",
    ],
  },
  {
    heading: "Article II: Merchants",
    paragraphs: [
      "The following terms and conditions found in this Article II applies solely to the Merchants and Merchant Accounts utilizing the Service.",
    ],
  },
  {
    heading: "Additional Terms",
    paragraphs: [
      "Merchants are also required to accept the payment terms of any payment processing partners as well as any modifications or updates to those terms.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <section className="pt-40 pb-28 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <FadeUp>
          <p className="text-xs uppercase tracking-[0.4em] text-green mb-6">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight tracking-tight mb-2 text-balance">
            Terms and Conditions
          </h1>
          <p className="text-sm text-mist mb-12">Last updated: 11/20/2019</p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-lg font-bold text-ink mb-3">{section.heading}</h2>
                <div className="space-y-4 text-mist leading-relaxed text-sm">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
