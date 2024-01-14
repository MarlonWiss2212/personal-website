import jwt from "jsonwebtoken"

export class AuthenticationUsecases {

  /**
   * @param password - The password to login
   * @return {string | undefined} - token or undefined wheather the login was successfull or not
   */
  login(password: string): string | undefined {
    if (process.env.PAGE_PASSWORD != password) {
      return undefined
    }
    return jwt.sign({}, process.env.PAGE_PASSWORD!, { expiresIn: 60 * 60 * 24 * 31 })
  }

  /**
   *
   * @param token - The JWT token to check
   * @param deleteCookieFunction - A function that should contain logic to delete the cookie
   * @return {boolean} - boolean wheather the verify was successfull or not
   */
  verifyToken(token: string, deleteCookieFunction: () => void): boolean {
    let response = false

    jwt.verify(token, process.env.PAGE_PASSWORD!, (error, data) => {
      if(error != null) {
        deleteCookieFunction()
        response = false
      } else {
        response = true
      }
    })

    return response
  }
}