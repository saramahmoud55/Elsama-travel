import "./service.css";
import { animationVariants } from "../../constants/animationVariants";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { servicesData } from "../../constants/servicesData";
import React, { useState, useRef } from "react";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";

const ServicePage = ({ title, titleAR }) => {
  const { t } = useTranslation();
  const param = useParams();
  const serviceData = servicesData[param.id - 1];
  useEffect(() => {
    document.title =`${t("ServiceName",{ServiceName:title ,ServiceNameAR:titleAR})} - ${t("Name")} `
  }, [param]);
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Message Sent",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = ({ firstName, lastName, email, phone, message }) => {
    let _error;
    if (
      firstName &&
      firstName.trim() &&
      lastName &&
      lastName.trim() &&
      email &&
      email.trim() &&
      isValidEmail(email.trim()) &&
      phone &&
      phone.trim() &&
      message &&
      message.trim()
    ) {
      _error = false;
    } else {
      if (
        !firstName &&
        !firstName.trim() &&
        !lastName &&
        !lastName.trim() &&
        !email &&
        !email.trim() &&
        !isValidEmail(email.trim()) &&
        !phone &&
        !phone.trim() &&
        !message &&
        !message.trim()
      ) {
        errorToast("Fill the fields first!", "error");
      } else if (!firstName || !firstName.trim()) {
        errorToast("Enter the firstName!", "error");
      } else if (!lastName || !lastName.trim()) {
        errorToast("Enter the lastName!", "error");
      } else if (!email || !email.trim()) {
        errorToast("Enter the email!", "error");
      } else if (!isValidEmail(email.trim())) {
        errorToast("Enter the valid  email!", "error");
      } else if (!phone || !phone.trim()) {
        errorToast("Enter the phone no!", "error");
      } else if (!message || !message.trim()) {
        errorToast("Enter the message!", "error");
      }
    }
    return _error;
  };
  const formRef = useRef(null);
  const scriptUrl = serviceData.scriptUrl;
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm({ firstName, lastName, email, phone, message });
    console.log(scriptUrl);
    if (errors === false) {
      setLoading(true);
      fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(formRef.current),
      })
        .then((res) => {
          console.log("SUCCESSFULLY SUBMITTED", res);
          showToast();
          setLoading(false);
          setEmail("");
          setFirstName("");
          setLastName("");
          setPhone("");
          setMessage("");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          errorToast(err.message, "error");
          console.error("Error submitting form:", err);
        });
    }
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${serviceData.image})`,
        }}
        className="relative bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white "
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50"></div>
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-md:text-5xl max-sm:text-4xl font-semibold z-10"
        >
          {t("placeName", { placename: title, placenameAR: titleAR })}
        </motion.h1>
      </div>
      {/* contact form section start */}
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto w-full p-10 py-28 max-sm:px-5 flex max-lg:flex-wrap-reverse  gap-12"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          id="contact"
          style={{ boxShadow: "0 20px 50px rgba(0, 43, 86, .1)" }}
          className="w-1/2 max-lg:w-full p-6 py-7 rounded-md flex flex-col h-auto justify-between items-start gap-5"
        >
          <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
            <h1 className="font-semibold text-black ">
              {t("placeName", { placename: title, placenameAR: titleAR })}
            </h1>

            <div className="name w-full gap-5 text-white max-sm:flex-col flex mb-5">
              <Input
                pl={3}
                fontSize={19}
                variant={"outline"}
                borderColor={"#002b561a"}
                focusBorderColor="#001d3b4d"
                maxLength={20}
                autoComplete="off"
                _focus={{ borderWidth: 0.1 }}
                color={"black"}
                _placeholder={{ color: "#696969" }}
                placeholder={t("FirstName")}
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                pl={3}
                fontSize={19}
                variant={"outline"}
                borderColor={"#002b561a"}
                focusBorderColor="#001d3b4d"
                maxLength={20}
                autoComplete="off"
                color={"black"}
                _placeholder={{ color: "#696969" }}
                placeholder={t("LastName")}
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <Input
              pl={3}
              mb={3}
              fontSize={19}
              variant={"outline"}
              borderColor={"#002b561a"}
              focusBorderColor="#001d3b4d"
              autoComplete="off"
              maxLength={40}
              color={"black"}
              _placeholder={{ color: "#696969" }}
              placeholder={t("Email")}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              pl={3}
              mb={3}
              fontSize={19}
              variant={"outline"}
              borderColor={"#002b561a"}
              focusBorderColor="#001d3b4d"
              autoComplete="off"
              color={"black"}
              _placeholder={{ color: "#696969" }}
              type="number"
              placeholder={t("PhoneNo")}
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Textarea
              pl={3}
              mb={3}
              fontSize={19}
              variant={"outline"}
              borderColor={"#002b561a"}
              focusBorderColor="#001d3b4d"
              autoComplete="off"
              maxLength={200}
              color={"black"}
              _placeholder={{ color: "#696969" }}
              placeholder={t("Message")}
              minHeight={"180px"}
              className="w-ful text-white"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
               _hover={{ backgroundColor: "white", color: "#0D5BE1" }}
               backgroundColor={"#0D5BE1"}
               color={"white"}
               borderColor={"#0D5BE2"}
              variant={"outline"}
              size={"lg"}
              isLoading={loading}
              type="submit"
              loadingText={t("Sending")}
              className="w-full"
              transitionDuration={"300ms"}
              fontWeight={"normal"}
              fontSize={"20px"}
              borderRadius={"4px"}
              value={loading ? t("Loading") : t("Submit")}
            >
             {t("Submit")}
            </Button>
          </form>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomIn}
          viewport={{ once: true, amount: 0.2 }}
          className="w-1/2 flex flex-col gap-5 max-lg:w-full"
        >
          <img src={serviceData.image} alt={t("placeName", { placename: title, placenameAR: titleAR })} />
        </motion.div>
      </div>
    </>
  );
};

export default ServicePage;
