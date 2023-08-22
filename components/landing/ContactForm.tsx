import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    axios
      .post(`/mail/api`, { values })
      .then((response) => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.log("Some error occured while sending the email");
      });
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5 py-5"
      >
        <FormControl isInvalid={errors.name}>
          <Input
            focusBorderColor={"brand.300"}
            type="name"
            borderRadius="full"
            size={"lg"}
            placeholder={"Please enter your name"}
            isRequired
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 4,
                message: "Minimum length should be 4",
              },
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email}>
          <Input
            focusBorderColor={"brand.300"}
            type="email"
            borderRadius="full"
            size={"lg"}
            placeholder={"Please enter your email address"}
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.subject}>
          <Input
            focusBorderColor={"brand.300"}
            type="subject"
            borderRadius="full"
            size={"lg"}
            placeholder={"Please choose a subject"}
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 5,
                message: "Minimum length should be 5",
              },
            })}
          />
          <FormErrorMessage>
            {errors.subject && errors.subject.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.message}>
          <Textarea
            borderRadius="lg"
            focusBorderColor={"brand.300"}
            size={"lg"}
            placeholder={"Write your message here"}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Minimum length should be 20",
              },
            })}
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>

        <div className="flex justify-end">
          <Button
            isLoading={isSubmitting}
            type="submit"
            className="sm:w-full lg:w-1/3"
            width="full"
            size="lg"
            borderRadius={"full"}
            background="brand.300"
            color="white"
            _hover={{ background: "brand.400" }}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
