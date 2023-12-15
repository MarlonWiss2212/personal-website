export class ValidationUsecases {

  /**
   * @param email - The email to check
   * @return boolean - if the email is valid or not
   */
  isEmailValid(email: string): boolean {
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return regexp.test(email)
  }

  /**
   *
   * @param phoneNumber - The phone number to check
   * @return boolean - if the phone number is valid or not
   */
  isPhoneNumberValid(phoneNumber: string): boolean {
    const regexp = new RegExp(/^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/)
    return regexp.test(phoneNumber)
  }
}