<<<<<<< HEAD
import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
        <div className='backs'>
          <div className="Hero Parallax aa-contact-us-page-hero-image col-xs-12">
            <div className="row">
              <div className="col-xs-6 col-xs-offset-3 col text-container">
                <h2>Contact Us</h2>
                <h3>
                  Contact us for all your word game needs. We'll get back to you within 24 hours. To learn more about our word game services, visit our About Us section.
                </h3>
              </div>
            </div>
            <a className="contact-form-anchor-link">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle-thin fa-stack-2x"></i>
                <i className="fa fa-angle-down fa-stack-1x" style={{ fontSize: '1.5em' }}></i>
              </span>
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="container aa-contact-us-page-address text-center">
        <div className="row">
          <div className="col-xs-12">
            <p className="details">
              Word Game Hub<br />
              Address:<br />
              Play Zone<br />
              Coimbatore <br /><br />
              Phone:<br />
              6381611287<br />
              E-mail:<br />
              <a href="mailto:info@wordgamehub.com" target="_blank" rel="noopener noreferrer">shamikshasaravanakumar@gmail.com</a><br />
            </p>
          </div>
        </div>
      </div>
      <div className="contact-us-form">
        <div className="inner-contact-us-form">
          <h1 className="contact-us-form-header">Enter Your Queries</h1>
          <div className="contact-us-form-body">
            <form id="contact-us-form" action="https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
              <input type="hidden" name="oid" value="00D24000000YRPu" />
              <input type="hidden" name="retURL" value="" />
              <fieldset>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="first_name">First Name</label>
                  <input id="first_name" maxLength="40" name="first_name" size="20" type="text" />
                </div>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="last_name">Last Name</label>
                  <input id="last_name" maxLength="80" name="last_name" size="20" type="text" />
                </div>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="email">Email</label>
                  <input id="email" maxLength="80" name="email" size="20" type="text" />
                </div>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" maxLength="40" name="phone" size="20" type="text" />
                </div>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="00N2400000EtJeo">Favorite Word Game Type</label>
                  <select id="00N2400000EtJeo" name="00N2400000EtJeo" title="Word Game Type">
                    <option value="">--Select--</option>
                    <option value="Crossword">Crossword</option>
                    <option value="Scrabble">Scrabble</option>
                    <option value="Word Search">Word Search</option>
                    <option value="Anagrams">Anagrams</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="contact-us-form-field-wrapper">
                  <span className="label">Frequency of Playing</span>
                  <div className="checkbox-group">
                    <div className="contact-us-form-field-wrapper">
                      <input id="play-daily" name="00N2400000Istrm" type="checkbox" value="Daily" />
                      <label htmlFor="play-daily" className="form-checkbox">Daily</label>
                    </div>
                    <div className="contact-us-form-field-wrapper">
                      <input id="play-weekly" name="00N2400000Istrm" type="checkbox" value="Weekly" />
                      <label htmlFor="play-weekly" className="form-checkbox">Weekly</label>
                    </div>
                    <div className="contact-us-form-field-wrapper">
                      <input id="play-monthly" name="00N2400000Istrm" type="checkbox" value="Monthly" />
                      <label htmlFor="play-monthly" className="form-checkbox">Monthly</label>
                    </div>
                  </div>
                </div>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="00N2400000EB8hh">Message</label>
                  <textarea id="00N2400000EB8hh" name="00N2400000EB8hh" rows="8" type="text" wrap="soft"></textarea>
                </div>
                <br></br>
                <div className="clear">
                  <button type="submit" className="buttn" form="contact-us-form" value="submit">Submit</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

=======
import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
        <div className='backs'>
          <div className="Hero Parallax aa-contact-us-page-hero-image col-xs-12">
            <div className="row">
              <div className="col-xs-6 col-xs-offset-3 col text-container">
                <h2>Contact Us</h2>
                <h3>
                  Contact us for all your word game needs. We'll get back to you within 24 hours. To learn more about our word game services, visit our About Us section.
                </h3>
              </div>
            </div>
            <a className="contact-form-anchor-link">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle-thin fa-stack-2x"></i>
                <i className="fa fa-angle-down fa-stack-1x" style={{ fontSize: '1.5em' }}></i>
              </span>
            </a>
          </div>
          </div>
        </div>
      </div>
      <div className="container aa-contact-us-page-address text-center">
        <div className="row">
          <div className="col-xs-12">
            <p className="details">
              Word Game Hub<br />
              Address:<br />
              Play Zone<br />
              Coimbatore <br /><br />
              Phone:<br />
              6381611287<br />
              E-mail:<br />
              <a href="mailto:info@wordgamehub.com" target="_blank" rel="noopener noreferrer">shamikshasaravanakumar@gmail.com</a><br />
            </p>
          </div>
        </div>
      </div>
      <div className="contact-us-form">
        <div className="inner-contact-us-form">
          <h1 className="contact-us-form-header">Enter Your Queries</h1>
          <div className="contact-us-form-body">
            <form id="contact-us-form" action="https://www.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
              <input type="hidden" name="oid" value="00D24000000YRPu" />
              <input type="hidden" name="retURL" value="" />
              <fieldset>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="first_name">First Name</label>
                  <input id="first_name" maxLength="40" name="first_name" size="20" type="text" />
                </div>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="last_name">Last Name</label>
                  <input id="last_name" maxLength="80" name="last_name" size="20" type="text" />
                </div>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="email">Email</label>
                  <input id="email" maxLength="80" name="email" size="20" type="text" />
                </div>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" maxLength="40" name="phone" size="20" type="text" />
                </div>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="00N2400000EtJeo">Favorite Word Game Type</label>
                  <select id="00N2400000EtJeo" name="00N2400000EtJeo" title="Word Game Type">
                    <option value="">--Select--</option>
                    <option value="Crossword">Crossword</option>
                    <option value="Scrabble">Scrabble</option>
                    <option value="Word Search">Word Search</option>
                    <option value="Anagrams">Anagrams</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="contact-us-form-field-wrapper">
                  <span className="label">Frequency of Playing</span>
                  <div className="checkbox-group">
                    <div className="contact-us-form-field-wrapper">
                      <input id="play-daily" name="00N2400000Istrm" type="checkbox" value="Daily" />
                      <label htmlFor="play-daily" className="form-checkbox">Daily</label>
                    </div>
                    <div className="contact-us-form-field-wrapper">
                      <input id="play-weekly" name="00N2400000Istrm" type="checkbox" value="Weekly" />
                      <label htmlFor="play-weekly" className="form-checkbox">Weekly</label>
                    </div>
                    <div className="contact-us-form-field-wrapper">
                      <input id="play-monthly" name="00N2400000Istrm" type="checkbox" value="Monthly" />
                      <label htmlFor="play-monthly" className="form-checkbox">Monthly</label>
                    </div>
                  </div>
                </div>
                <div className="contact-us-form-field-wrapper">
                  <label htmlFor="00N2400000EB8hh">Message</label>
                  <textarea id="00N2400000EB8hh" name="00N2400000EB8hh" rows="8" type="text" wrap="soft"></textarea>
                </div>
                <br></br>
                <div className="clear">
                  <button type="submit" className="buttn" form="contact-us-form" value="submit">Submit</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

>>>>>>> origin/main
export default Contact;