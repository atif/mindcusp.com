import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const {
    isOpen: isErrorVisible,
    onClose: onErrorClose,
    onOpen: onErrorOpen,
  } = useDisclosure({ defaultIsOpen: false });

  const {
    isOpen: isSuccessVisible,
    onClose: onSuccessClose,
    onOpen: onSuccessOpen,
  } = useDisclosure({ defaultIsOpen: false });

  function onSubmit(values) {
    axios
      .post(`/mail/api`, { values })
      .then((response) => {
        onErrorClose();
        onSuccessOpen();
        reset();
      })
      .catch((error) => {
        onErrorOpen();
        onSuccessClose();
      });
  }

  return (
    <div>
      {isErrorVisible && (
        <Alert status="error" borderRadius={"lg"}>
          <AlertIcon />
          <Box width={"full"}>
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>
              Some error occured while sending the email. Please try again!
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={onErrorClose}
          />
        </Alert>
      )}

      {isSuccessVisible && (
        <Alert status="success" borderRadius={"lg"}>
          <AlertIcon />
          <Box width={"full"}>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your message has been sent. We will get back to you!
            </AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={onSuccessClose}
          />
        </Alert>
      )}

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
            className="sm:w-full lg:w-1/3 border border-primary-200"
            width="full"
            size="lg"
            borderRadius={"full"}
            background="brand.100"
            color="brand.600"
            _hover={{ background: "brand.200" }}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
