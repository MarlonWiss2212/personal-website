"use client"

import React, {useState} from "react";
import {SendMailType} from "@/types/send-mail-type";
import {useTranslations} from "next-intl";
import {Button, Input, Textarea, useDisclosure} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader} from "@nextui-org/modal";

export default function ContactForm() {
  const t = useTranslations("contact.contactForm")
  const tGeneral = useTranslations("general")
  const errorModal = useDisclosure();
  const successModal = useDisclosure();

  const [form, setForm] = useState<SendMailType>({
    message: "",
    title: "",
    sendFromEmail: "",
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const request = await fetch(e.currentTarget.action, {
      body: JSON.stringify(form),
      headers: {"Content-Type": "application/json"},
      method: "post",
    });

    if (request.status !== 200) {
      errorModal.onOpen()
    } else {
      successModal.onOpen()
      setForm({
        message: "",
        title: "",
        sendFromEmail: "",
        phoneNumber: ""
      });
    }
  }

  return (
    <>
      {/** Error Modal */}
      <Modal isOpen={errorModal.isOpen} onOpenChange={errorModal.onOpenChange}>
        <ModalContent>
          <ModalHeader>{t("error")}</ModalHeader>
        </ModalContent>
      </Modal>
      {/** Success Modal */}
      <Modal isOpen={successModal.isOpen} onOpenChange={successModal.onOpenChange}>
        <ModalContent>
          <ModalHeader>{t("success")}</ModalHeader>
        </ModalContent>
      </Modal>
      <div className="w-full mt-10">
        <h2 className="text-2xl font-bold">{t("sendAMessage")}:</h2>
        <form method='POST' action={"/api/contact"} onSubmit={handleSubmit} className="grid gap-2 grid-cols-2 mt-4">
          <Input
            value={form.sendFromEmail}
            onChange={(e) => setForm(
              value => ({...value, sendFromEmail: e.target.value})
            )}
            label={t("email")}
          />
          <Input
            value={form.phoneNumber}
            onChange={(e) => setForm(
              value => ({...value, phoneNumber: e.target.value})
            )}
            label={t("phoneNumber")}
          />
          <Input
            value={form.title}
            onChange={(e) => setForm(
              value => ({...value, title: e.target.value})
            )}
            className="col-span-2"
            label={t("title")}
          />
          <Textarea
            value={form.message}
            onChange={(e) => setForm(
              value => ({...value, message: e.target.value})
            )}
            label={t("message")}
            className="col-span-2 m-0 p-0"
          />
          <Button className="col-span-2" color="primary" type="submit">{tGeneral("send")}</Button>
        </form>
      </div>
    </>
  )
}