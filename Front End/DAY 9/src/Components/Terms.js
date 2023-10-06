<<<<<<< HEAD
import React, { Component } from 'react';
import './Terms.css';
import { Link } from 'react-router-dom';

class Terms extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'tab_item_1',
    };
  }

  handleTabClick = (tabData) => {
    this.setState({ activeTab: tabData });
  };

  render() {
    const { activeTab } = this.state;

    return (
    <div>
      <div className="wrapper flex_align_justify">
        <div className="tc_wrap">
          <div className="tabs_list">
            <ul>
              <li
                data-tc="tab_item_1"
                className={activeTab === 'tab_item_1' ? 'active' : ''}
                onClick={() => this.handleTabClick('tab_item_1')}
              >
                Privacy Policy
                <div></div>
              </li>
              <li
                data-tc="tab_item_2"
                className={activeTab === 'tab_item_2' ? 'active' : ''}
                onClick={() => this.handleTabClick('tab_item_2')}
              >
                Terms and Conditions
              </li>
              <li
                data-tc="tab_item_3"
                className={activeTab === 'tab_item_3' ? 'active' : ''}
                onClick={() => this.handleTabClick('tab_item_3')}
              >
                
              </li>
              
              
            </ul>
          </div>
          <div className="tabs_content">
            <div className="tab_head">
             
            </div>
            <div className="tab_body">
              <div className={`tab_item tab_item_1 ${activeTab === 'tab_item_1' ? 'active' : ''}`}>
              <h2 className='priv'>Privacy Policy</h2>
              <br></br>
                <div>These Terms and Conditions ("Terms") govern your use of the    WordGame Hub, operated by GameHub. By accessing or using the Website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
                <br></br>
                <br></br>
1. User Eligibility
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;1.1. You must be at least 12 years old to use the Website. By using the Website, you represent and warrant that you meet this age requirement.
<br></br>
<br></br>
<br></br>
2. User Accounts
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;2.1. To access certain features of the Website, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
<br></br>
&nbsp;&nbsp;&nbsp;2.2. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
<br></br>
&nbsp;&nbsp;&nbsp;2.3. You are solely responsible for any actions taken using your account, whether or not authorized by you. If you suspect any unauthorized use of your account, you must notify us immediately.
<br></br>
<br></br>
<br></br>
3. User Conduct
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;3.1. You agree to use the Website in compliance with all applicable laws and regulations.
<br></br>
&nbsp;&nbsp;&nbsp;3.2. You may not:
<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Use the Website for any unlawful purpose or in a manner that violates these Terms.
<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Attempt to gain unauthorized access to the Website, other user accounts, or any part of the Website's systems or networks.
<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. Post, transmit, or otherwise make available through the Website any content that is false, misleading, defamatory, obscene, offensive, or infringing on intellectual property rights.
<br></br>
<br></br>
<br></br>
4. Intellectual Property
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;4.1. All content on the Website, including text, graphics, logos, and software, is the property of [Your Company Name] and is protected by copyright and other intellectual property laws.
<br></br>
&nbsp;&nbsp;&nbsp;4.2. You may not reproduce, distribute, modify, or create derivative works of any content on the Website without our prior written consent.
<br></br>
<br></br>
<br></br>
5. Termination
<br></br>
<br></br>
5.1. We reserve the right to suspend or terminate your account and access to the Website at our sole discretion, without notice, for any reason, including a violation of these Terms.
<br></br>
<br></br>
<br></br>
6. Disclaimer of Warranties
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;6.1. The Website is provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement.
<br></br>
<br></br>
<br></br>
7. Limitation of Liability
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;7.1. To the extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
<br></br>
<br></br>
<br></br>
8. Governing Law
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;8.1. These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction].
<br></br>
<br></br>
<br></br>
9. Contact Information
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;9.1. For questions or concerns regarding these Terms, please contact us at [Your Contact Information].
<br></br>
<br></br>
<br></br>
<h2 className='priv'>Terms and Conditions</h2>
<br></br>
By using the Website, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</div>
       {/* Content for "Terms of use" tab */}
              </div>
              <div className={`tab_item tab_item_2 ${activeTab === 'tab_item_2' ? 'active' : ''}`}>
                <div></div>

                {/* Content for "Intellectual property rights" tab */}
              </div>
              <div className={`tab_item tab_item_3 ${activeTab === 'tab_item_3' ? 'active' : ''}`}>
                <div>Terms and Conditions for [Your Word Game Website]

Effective Date: [Date]

Please read these Terms and Conditions ("Terms") carefully before using [Your Word Game Website] ("we," "us," or "our"). By accessing or using [Your Word Game Website], you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our website.
<br></br>
<br></br>
1. Acceptance of Terms

By accessing or using [Your Word Game Website], you agree to be bound by these Terms, our Privacy Policy, and any additional terms and policies referenced herein. If you do not agree with any part of these Terms, please refrain from using our website.
<br></br>
<br></br>
2. Changes to the Terms

We may update and modify these Terms at any time without notice. Any changes will be effective immediately upon posting on our website. You are responsible for regularly reviewing these Terms to stay informed of any changes. Your continued use of [Your Word Game Website] after any modifications indicates your acceptance of the updated Terms.
<br></br>
<br></br>
3. Registration and Accounts

To access certain features of [Your Word Game Website], you may be required to create an account. You agree to provide accurate and complete information during the registration process and to update your information promptly to ensure its accuracy. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access or use of your account.
<br></br>
<br></br>
4. User Conduct

By using [Your Word Game Website], you agree to abide by the following rules of conduct:

- You will not use our website for any unlawful purpose.
- You will not impersonate any other person or entity or provide false information.
- You will not upload, post, or transmit any content that is defamatory, offensive, obscene, or violates the rights of others.
- You will not engage in any activity that could harm, disrupt, or interfere with [Your Word Game Website]'s operation or any user's experience.
- You will not attempt to gain unauthorized access to any part of our website, servers, or systems.
<br></br>
<br></br>
5. Intellectual Property

All content on [Your Word Game Website], including text, graphics, logos, images, software, and other materials, is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, distribute, or otherwise use any content from our website without our prior written consent.
<br></br>
<br></br>
6. Termination

We reserve the right to terminate or suspend your access to [Your Word Game Website] at our sole discretion and without prior notice for any violation of these Terms or for any other reason. Upon termination, you must cease using our website immediately.
<br></br>
<br></br>
7. Disclaimer of Warranties

[Your Word Game Website] is provided "as is" and "as available" without warranties of any kind, whether express or implied. We do not warrant that our website will be error-free, secure, or uninterrupted. You use our website at your own risk.
<br></br>
<br></br>
8. Limitation of Liability

To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in any way connected with your use of [Your Word Game Website].
<br></br>
<br></br>
9. Governing Law and Jurisdiction
<br></br>
<br></br>
These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the courts of [Your Jurisdiction], and you consent to the personal jurisdiction of such courts.
<br></br>
<br></br>
10. Contact Information
<br></br>
<br></br>
If you have any questions or concerns about these Terms, please contact us at [Your Contact Information].
<br></br>
<br></br>
By using [Your Word Game Website], you agree to these Terms and Conditions. If you do not agree to these Terms, please do not use our website.</div>
              </div>
              
            
              
            </div>
            <div className="tab_foot flex_align_justify">
              <button className="decline" onClick={() => console.log('Decline clicked')}>
                <Link to="/home">

                Decline
                </Link>
              </button>
              <button className="agree" onClick={() => console.log('Agree clicked')}>
                <Link to="/home">

                Agree
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    );
  }
}

export default Terms;

=======
import React, { Component } from 'react';
import './Terms.css';
import { Link } from 'react-router-dom';

class Terms extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'tab_item_1',
    };
  }

  handleTabClick = (tabData) => {
    this.setState({ activeTab: tabData });
  };

  render() {
    const { activeTab } = this.state;

    return (
    <div>
      <div className="wrapper flex_align_justify">
        <div className="tc_wrap">
          <div className="tabs_list">
            <ul>
              <li
                data-tc="tab_item_1"
                className={activeTab === 'tab_item_1' ? 'active' : ''}
                onClick={() => this.handleTabClick('tab_item_1')}
              >
                Privacy Policy
                <div></div>
              </li>
              <li
                data-tc="tab_item_2"
                className={activeTab === 'tab_item_2' ? 'active' : ''}
                onClick={() => this.handleTabClick('tab_item_2')}
              >
                Terms and Conditions
              </li>
              <li
                data-tc="tab_item_3"
                className={activeTab === 'tab_item_3' ? 'active' : ''}
                onClick={() => this.handleTabClick('tab_item_3')}
              >
                
              </li>
              
              
            </ul>
          </div>
          <div className="tabs_content">
            <div className="tab_head">
             
            </div>
            <div className="tab_body">
              <div className={`tab_item tab_item_1 ${activeTab === 'tab_item_1' ? 'active' : ''}`}>
              <h2 className='priv'>Privacy Policy</h2>
              <br></br>
                <div>These Terms and Conditions ("Terms") govern your use of the    WordGame Hub, operated by GameHub. By accessing or using the Website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the Website.
                <br></br>
                <br></br>
1. User Eligibility
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;1.1. You must be at least 12 years old to use the Website. By using the Website, you represent and warrant that you meet this age requirement.
<br></br>
<br></br>
<br></br>
2. User Accounts
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;2.1. To access certain features of the Website, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
<br></br>
&nbsp;&nbsp;&nbsp;2.2. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
<br></br>
&nbsp;&nbsp;&nbsp;2.3. You are solely responsible for any actions taken using your account, whether or not authorized by you. If you suspect any unauthorized use of your account, you must notify us immediately.
<br></br>
<br></br>
<br></br>
3. User Conduct
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;3.1. You agree to use the Website in compliance with all applicable laws and regulations.
<br></br>
&nbsp;&nbsp;&nbsp;3.2. You may not:
<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. Use the Website for any unlawful purpose or in a manner that violates these Terms.
<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. Attempt to gain unauthorized access to the Website, other user accounts, or any part of the Website's systems or networks.
<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c. Post, transmit, or otherwise make available through the Website any content that is false, misleading, defamatory, obscene, offensive, or infringing on intellectual property rights.
<br></br>
<br></br>
<br></br>
4. Intellectual Property
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;4.1. All content on the Website, including text, graphics, logos, and software, is the property of [Your Company Name] and is protected by copyright and other intellectual property laws.
<br></br>
&nbsp;&nbsp;&nbsp;4.2. You may not reproduce, distribute, modify, or create derivative works of any content on the Website without our prior written consent.
<br></br>
<br></br>
<br></br>
5. Termination
<br></br>
<br></br>
5.1. We reserve the right to suspend or terminate your account and access to the Website at our sole discretion, without notice, for any reason, including a violation of these Terms.
<br></br>
<br></br>
<br></br>
6. Disclaimer of Warranties
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;6.1. The Website is provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, warranties of merchantability, fitness for a particular purpose, or non-infringement.
<br></br>
<br></br>
<br></br>
7. Limitation of Liability
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;7.1. To the extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
<br></br>
<br></br>
<br></br>
8. Governing Law
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;8.1. These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction].
<br></br>
<br></br>
<br></br>
9. Contact Information
<br></br>
<br></br>
&nbsp;&nbsp;&nbsp;9.1. For questions or concerns regarding these Terms, please contact us at [Your Contact Information].
<br></br>
<br></br>
<br></br>
<h2 className='priv'>Terms and Conditions</h2>
<br></br>
By using the Website, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</div>
       {/* Content for "Terms of use" tab */}
              </div>
              <div className={`tab_item tab_item_2 ${activeTab === 'tab_item_2' ? 'active' : ''}`}>
                <div></div>

                {/* Content for "Intellectual property rights" tab */}
              </div>
              <div className={`tab_item tab_item_3 ${activeTab === 'tab_item_3' ? 'active' : ''}`}>
                <div>Terms and Conditions for [Your Word Game Website]

Effective Date: [Date]

Please read these Terms and Conditions ("Terms") carefully before using [Your Word Game Website] ("we," "us," or "our"). By accessing or using [Your Word Game Website], you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our website.
<br></br>
<br></br>
1. Acceptance of Terms

By accessing or using [Your Word Game Website], you agree to be bound by these Terms, our Privacy Policy, and any additional terms and policies referenced herein. If you do not agree with any part of these Terms, please refrain from using our website.
<br></br>
<br></br>
2. Changes to the Terms

We may update and modify these Terms at any time without notice. Any changes will be effective immediately upon posting on our website. You are responsible for regularly reviewing these Terms to stay informed of any changes. Your continued use of [Your Word Game Website] after any modifications indicates your acceptance of the updated Terms.
<br></br>
<br></br>
3. Registration and Accounts

To access certain features of [Your Word Game Website], you may be required to create an account. You agree to provide accurate and complete information during the registration process and to update your information promptly to ensure its accuracy. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access or use of your account.
<br></br>
<br></br>
4. User Conduct

By using [Your Word Game Website], you agree to abide by the following rules of conduct:

- You will not use our website for any unlawful purpose.
- You will not impersonate any other person or entity or provide false information.
- You will not upload, post, or transmit any content that is defamatory, offensive, obscene, or violates the rights of others.
- You will not engage in any activity that could harm, disrupt, or interfere with [Your Word Game Website]'s operation or any user's experience.
- You will not attempt to gain unauthorized access to any part of our website, servers, or systems.
<br></br>
<br></br>
5. Intellectual Property

All content on [Your Word Game Website], including text, graphics, logos, images, software, and other materials, is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, distribute, or otherwise use any content from our website without our prior written consent.
<br></br>
<br></br>
6. Termination

We reserve the right to terminate or suspend your access to [Your Word Game Website] at our sole discretion and without prior notice for any violation of these Terms or for any other reason. Upon termination, you must cease using our website immediately.
<br></br>
<br></br>
7. Disclaimer of Warranties

[Your Word Game Website] is provided "as is" and "as available" without warranties of any kind, whether express or implied. We do not warrant that our website will be error-free, secure, or uninterrupted. You use our website at your own risk.
<br></br>
<br></br>
8. Limitation of Liability

To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in any way connected with your use of [Your Word Game Website].
<br></br>
<br></br>
9. Governing Law and Jurisdiction
<br></br>
<br></br>
These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the courts of [Your Jurisdiction], and you consent to the personal jurisdiction of such courts.
<br></br>
<br></br>
10. Contact Information
<br></br>
<br></br>
If you have any questions or concerns about these Terms, please contact us at [Your Contact Information].
<br></br>
<br></br>
By using [Your Word Game Website], you agree to these Terms and Conditions. If you do not agree to these Terms, please do not use our website.</div>
              </div>
              
            
              
            </div>
            <div className="tab_foot flex_align_justify">
              <button className="decline" onClick={() => console.log('Decline clicked')}>
                <Link to="/home">

                Decline
                </Link>
              </button>
              <button className="agree" onClick={() => console.log('Agree clicked')}>
                <Link to="/home">

                Agree
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    );
  }
}

export default Terms;

>>>>>>> origin/main
