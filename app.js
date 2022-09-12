
import UAuth from '@uauth/js'

const uauth = new UAuth({
  clientID: '339ebeee-a9ac-4e52-8951-7dc743bacfe5',
  redirectUri: 'https://bit.ly/3Tn39cZ',
  scope: "openid wallet"
})


// {
//     clientID: "339ebeee-a9ac-4e52-8951-7dc743bacfe5",
//     redirectUri: "https://bit.ly/3Tn39cZ",
//     scope: "openid wallet"
//   }


window.login = async () => {
  try {
    const authorization = await uauth.loginWithPopup()
 
    console.log(authorization)
  } catch (error) {
    console.error(error)
  }
}


window.logout = async () => {
  await uauth.logout()
  console.log('Logged out with Unstoppable')
}