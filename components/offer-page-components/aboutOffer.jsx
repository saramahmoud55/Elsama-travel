import "./aboutOffer.css";
import { useParams } from "react-router-dom";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { offers } from "../../constants/offers";
import React, { useState,useRef } from "react";
import {
  FaCoins,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";

const AboutOffer = ({ heroImageSrc, attachment }) => {
  const { t } = useTranslation();
  const param = useParams();
  const offer = offers[param.id - 1];
  useEffect(() => {
    document.title =`${ t("ServiceName",{ServiceName:offer.city ,ServiceNameAR:offer.cityAr})} - ${t("Name")} `

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

  const validateForm = ({firstName,lastName,email,phone,message}) => {
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
      } else if (!phone|| !phone.trim()) {
        errorToast("Enter the phone no!", "error");
      } else if (!message || !message.trim()) {
        errorToast("Enter the message!", "error");
      }
    }
    return _error;
  };
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwpTzCdqSefV28CbbkHG31olY5kuL6CzzkFrquuXq7Dt3xoD-1mXyGxAfPEF0soLyYZ/exec"
  const [loading, setLoading] = useState(false)
  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');
  const [email, setEmail]=useState('');
  const [phone, setPhone]=useState('');
  const [message, setMessage]=useState('');
  const [offerName, setOfferName]=useState(offer.city);
  const handleSubmit = (e) =>{
      e.preventDefault()
     const errors = validateForm({firstName,lastName,email,phone,message});

    if (errors === false) {
      setLoading(true);
      fetch(scriptUrl, {
      method: 'POST', 
      mode: 'no-cors',
      body: new FormData(formRef.current),
      }).then(res => {
          console.log("SUCCESSFULLY SUBMITTED",res)
          showToast();
          setLoading(false)
          setEmail('')
          setFirstName('')
          setLastName('')
          setPhone('')
          setMessage('')
          setOfferName('')
        })
      .catch(err =>{
         console.log(err)
         setLoading(false);
          errorToast(err.message, "error");
       console.error("Error submitting form:", err);
        })
      }
  }
  return (
    
    <div className=" w-full overflow-hidden">
    <div className=" flex bg-[url('/banner.png')] pt-44 max-sm:pt-40 pb-32 bg-top bg-no-repeat bg-cover  ">
      <div
        style={{ maxWidth: 1200 }}
        className="mx-auto w-full text-white px-10 max-sm:px-5 flex flex-col max-lg:items-center max-lg:text-center gap-16"
      >
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-lg:mx-auto font-semibold max-sm:text-5xl max-w-lg "
        >
         {t("placeName", { placename:offer.city, placenameAR:offer.cityAr })}
        </motion.h1>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid gap-4 w-full text-start grid-cols-3 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-3"
        >
          <motion.div
            variants={animationVariants.fadeUp}
            className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
          >
            <div className="card-header text-2xl flex items-center gap-4">
              <div className="bg-blue-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                <FaEnvelope className="text-white" />
              </div>
              <h2 className="title-font font-semibold ">Services</h2>
            </div>
            <p>Neque porro quisquam est, qui dolorem ipsum.</p>
          </motion.div>
          <motion.div
            variants={animationVariants.fadeUp}
            className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
          >
            <div className="card-header text-2xl flex items-center gap-4">
              <div className="bg-blue-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                <FaCoins className="text-white" />
              </div>
              <h2 className="title-font font-semibold ">Pricing</h2>
            </div>
            <p>Neque porro quisquam est, qui dolorem ipsum.</p>
          </motion.div>
          <motion.div
            variants={animationVariants.fadeUp}
            className="card bg-white text-black rounded-md gap-5  p-6 pb-10 max-lg:p-5 max-lg:pb-8 max-md:p-6 max-md:py-7 max-md:pb-10 flex flex-col gap text-xl "
          >
            <div className="card-header text-2xl flex items-center gap-4">
              <div className="bg-blue-500 w-[60px] h-[58px] rounded-md text-xl flex gap-4 justify-center items-center">
                <FaMobileAlt className="text-white" />
              </div>
              <h2 className="title-font font-semibold ">Support</h2>
            </div>
            <p>Neque porro quisquam est, qui dolorem ipsum.</p>
          </motion.div>
        </motion.div>
      </div>

      {/* </Reveal> */}
    </div>

    {/* offer form section start */}
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
       <form  ref={formRef} onSubmit={handleSubmit} name="google-sheet">
         <h1 className="font-semibold text-black ">
         {t("placeName", { placename:offer.city, placenameAR:offer.cityAr })}
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
            onChange={(e)=>setFirstName(e.target.value)} 
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
            onChange={(e)=>setLastName(e.target.value)}
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
          onChange={(e)=>setEmail(e.target.value)}
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
          onChange={(e)=>setPhone(e.target.value)}
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
          onChange={(e)=>setMessage(e.target.value)}
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
          type="hidden"
          placeholder="Phone No"
          name="offerName"
          value={offerName}
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
        <img src={offer.coverImage}  alt={offer.city} />
      </motion.div>
    </div>


  </div>
  );
};

export default AboutOffer;
