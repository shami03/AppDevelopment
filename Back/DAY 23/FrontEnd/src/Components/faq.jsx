import React from 'react';
import './faq.css';

function Faq() {
  return (
    <div className="faq">
      <div className="intro">
        <h2>
          <strong>Frequently Asked Questions</strong>
        </h2>
        <br />
      </div>
      <div className="navigation">
        <ul className="snip1198">
          <br />
          <li>
            <a href="#whatis">What is the Gaming Portal?</a>
          </li>
          <li>
            <a href="#howaccessed">How do I access the portal?</a>
          </li>
          <li>
            <a href="#done">What can I do in the portal?</a>
          </li>
          <li>
            <a href="#profile">How do I update my gaming profile?</a>
          </li>
          <li>
            <a href="#forgot">What should I do if I forget my password or username?</a>
          </li>
          <li>
            <a href="#support">How can I get help or support if I encounter issues with the portal?</a>
          </li>
          <li>
            <a href="#mobile">Can I access the portal on my mobile device?</a>
          </li>
          <li>
            <a href="#safe">Is my gaming information secure in the portal?</a>
          </li>
        </ul>
        <br />
      </div>
      <div className="row">
        <div className="col-2">
          <h3 id="whatis">
            <strong>What is the Gaming Portal?</strong>
          </h3>
          <br />
          <p>
            • The Gaming Portal is an online platform designed to help gamers manage their gaming profiles, access games, and connect with the gaming community.
          </p>
          <br />
          <h3 id="howaccessed">
            <strong>How do I access the portal?</strong>
          </h3>
          <br />
          <p>
            • You can access the portal by visiting www.gamingportal.com and logging in with your gaming credentials. If you're a new user, you may need to register first.
          </p>
          <div id="done">
            <h3>
              <strong>What can I do in the portal?</strong>
            </h3>
          </div>
          <br />
          <p>• Access a wide variety of games and gaming resources.</p>
          <p>• Connect with other gamers and form teams or groups.</p>
          <p>• Customize your gaming profile and track your gaming achievements.</p>
          <p>• Stay updated with the latest gaming news and events.</p>
          <br />
          <h3 id="support">
            <strong>How can I get help or support if I encounter issues with the portal?</strong>
          </h3>
          <br />
          <p>
            • If you encounter any issues or have questions about using the portal, you can reach out to our support team by emailing support@gamingportal.com or by calling [phone number]. You can also visit the Help Desk on our gaming platform for assistance.
          </p>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <h3 id="profile">
        <strong>How do I update my gaming profile?</strong>
      </h3>
      <br />
      <p>
        • You can update your gaming profile information, including your gamer tag, avatar, and gaming preferences, in the "Profile Settings" section of the portal. Keep your gaming profile up-to-date to connect with other gamers effectively.
      </p>
      <br />
      <h3 id="forgot">
        <strong>What should I do if I forget my password or username?</strong>
      </h3>
      <br />
      <p>
        • If you forget your password or username, click on the "Forgot Password" or "Forgot Username" link on the login page. Follow the instructions provided to reset your credentials.
      </p>
      <br />
      <h3 id="mobile">
        <strong>Can I access the portal on my mobile device?</strong>
      </h3>
      <br />
      <p>
        • Yes, the portal is mobile-responsive, so you can access it on your smartphone or tablet. We recommend using a modern web browser for the best gaming experience.
      </p>
      <br />
      <h3 id="safe">
        <strong>Is my gaming information secure in the portal?</strong>
      </h3>
      <br />
      <p>
        • Yes, we take the security and privacy of your gaming information seriously. The portal uses advanced encryption and security measures to protect your gaming data. Always log out of the portal when you're finished gaming, especially on shared devices.
      </p>
      <br />
    </div>
  );
}

export default Faq;
