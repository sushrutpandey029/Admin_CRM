import Cookie from 'js-cookie'

const RemoveCookie = (cookiename) => {
      Cookie.remove(cookiename,{path:''})
}

export default RemoveCookie;