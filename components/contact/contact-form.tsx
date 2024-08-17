"use client"

import React, {useState} from "react";
import {SendMailType} from "@/types/send-mail-type";
import {useTranslations} from "next-intl";
import {Button, Input, Textarea, useDisclosure} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalFooter} from "@nextui-org/modal";
import { ContactRouteResponseType } from "@/types/contact-route-response-type";

export default function ContactForm() {
  const t = useTranslations("contact.contactForm")
  const tGeneral = useTranslations("general")
  const errorModal = useDisclosure();
  const successModal = useDisclosure();

  const [error, setError] = useState<ContactRouteResponseType>({
    messageError: false,
    phoneNumberError: false,
    titleError: false,
    sendFromEmailError: false,
  })
  const [form, setForm] = useState<SendMailType>({
    message: "",
    title: "",
    sendFromEmail: "",
    testing: false
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const response = await fetch(e.currentTarget.action, {
      body: JSON.stringify(form),
      headers: {"Content-Type": "application/json"},
      method: e.currentTarget.method,
    });

    if (response.status !== 200) {
      const data: ContactRouteResponseType | null = await response.json()
      if(data != null) {
        setError(data)
      } else {
        setError({
          messageError: false,
          phoneNumberError: false,
          titleError: false,
          sendFromEmailError: false,
        })
      }
      errorModal.onOpen()
    } else {
      setError({
        messageError: false,
        phoneNumberError: false,
        titleError: false,
        sendFromEmailError: false,
      })
      successModal.onOpen()
      setForm({
        message: "",
        title: "",
        sendFromEmail: "",
        phoneNumber: "",
        testing: false
      });
    }
  }

  return (
    <>
      {/** Error Modal */}
      <Modal isOpen={errorModal.isOpen} onOpenChange={errorModal.onOpenChange}>
        <ModalContent>
          <ModalHeader>{t("error")}</ModalHeader>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={errorModal.onOpenChange}>
              {t('close')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/** Success Modal */}
      <Modal isOpen={successModal.isOpen} onOpenChange={successModal.onOpenChange}>
        <ModalContent>
          <ModalHeader>{t("success")}</ModalHeader>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={successModal.onOpenChange}>
            {t('close')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="w-full mt-12">
        <h2 className="text-2xl font-bold">{t("sendAMessage")}:</h2>
        <form method='POST' action={"/api/contact"} onSubmit={handleSubmit} className="grid gap-2 grid-cols-2 mt-4">
          <Input
            isInvalid={error.sendFromEmailError}
            value={form.sendFromEmail}
            onChange={(e) => setForm(
              value => ({...value, sendFromEmail: e.target.value})
            )}
            label={`${t("email")}*`}
          />
          <Input
            isInvalid={error.phoneNumberError}
            value={form.phoneNumber}
            onChange={(e) => setForm(
              value => ({...value, phoneNumber: e.target.value})
            )}
            label={t("phoneNumber")}
          />
          <Input
            isInvalid={error.titleError}
            value={form.title}
            onChange={(e) => setForm(
              value => ({...value, title: e.target.value})
            )}
            className="col-span-2"
            label={`${t("title")}*`}
          />
          <Textarea
            isInvalid={error.messageError}
            value={form.message}
            onChange={(e) => setForm(
              value => ({...value, message: e.target.value})
            )}
            label={`${t("message")}*`}
            minRows={6}
            maxRows={10}
            className="col-span-2 m-0 p-0"
          />
          <Button className="col-span-2" color="primary" type="submit">{tGeneral("send")}</Button>
        </form>
      </div>
    </>
  )
}