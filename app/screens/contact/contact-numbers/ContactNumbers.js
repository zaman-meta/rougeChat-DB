import React from "react";

const ContactNumbers = () => {
  return (
    <section className="contact-section ">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-4">
            <div className="row call">
              <div className="col-auto">
                <div className="call-us-icon bg-white ">
                  <i className="ri-phone-fill contact-icon"></i>
                </div>
              </div>
              <div className="col">
                <div className="call-us mb-1 mt-2">Call us</div>
                <div className="call-number">
                  <a
                    href="tel:+61(0)435785822"
                    target="_new"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    +61 (0)435785822
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row call">
              <div className="col-auto">
                <div className="call-us-icon bg-white ">
                  <i className="ri-whatsapp-fill contact-icon whatsapp-icon"></i>
                </div>
              </div>
              <div className="col">
                <div className="call-us mb-1 mt-2">Whatsapp</div>
                <div className="call-number">
                  <a
                    href="https://api.whatsapp.com/send?phone=+61435785822"
                    target="_new"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    +61 (0)435785822
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row call">
              <div className="col-auto">
                <div className="call-us-icon bg-white ">
                  <i className="ri-mail-send-line contact-icon mail-icon"></i>
                </div>
              </div>
              <div className="col">
                <div className="call-us mb-1 mt-2">Mail to</div>
                <div className="call-number">
                  <a
                    href="mailto:sales@metarouge.com.au"
                    target="_new"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    sales@metarouge.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNumbers;
