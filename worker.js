const SITE_HOST = '' // 为空则自动推断
const BING_COOKIE = '_EDGE_V=1; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=CA4E149C75E344B3B5071BF7FA5647BD&dmnchg=1; BFBFB=F%3D2%26L%3D2%26S%3D2%26SS%3D2%26E%3D2%26O%3D2%26EDS%3D2%26SDS%3D2%26CDS%3D2; BFB=AxBAro85viCiMFmai2ipKM2FvrwkxqBHxa_ayO98qR9zyZSgCW1ooBdnPQERTzk1I7-Z-hhV2g7iIxBiGiakpUitNOM6nxYtZCNA3ceSYVU28tb1kCu5OxlACTzIMug0_XRvTtpkxsPdnqei72qSGUwHv1bAr_qd3t-Oy9-ygSrkFnmCubTdXIr9MSG7TkZMVCQ; BCP=AD=1&AL=1&SM=1; OIDS=1; MUID=2C8AC854338D6AAB2DBBDBD032416B95; MUIDB=2C8AC854338D6AAB2DBBDBD032416B95; _EDGE_CD=m=en-us; _clck=1cx1hi0%7C2%7Cfhf%7C0%7C1437; _UR=cdxcls=0&QS=0&TQS=0; MicrosoftApplicationsTelemetryDeviceId=737b45e0-756a-41f1-a3ef-ba3c3acc019e; MSPTC=YKPlEypreKCBUyJaTkR4EUR0D59g9VsEeieKrwqB9As; USRLOC=HS=1&ELOC=LAT=51.46626281738281|LON=-0.3675067722797394|N=%E8%B1%AA%E6%81%A9%E6%96%AF%E6%B4%9B%EF%BC%8CGreater%20London|ELT=6|; ABDEF=V=13&ABDV=13&MRNB=1703333135758&MRB=0; ANON=A=041DC7BF55D3A08D2E823D48FFFFFFFF&E=1d3c&W=7; NAP=V=1.9&E=1ce2&C=8uUbzWr3M_mdqK0uU7p4tB_BnuM1S0XHbNoylE1v3NnYP5Hkt2owWQ&W=7; PPLState=1; KievRPSSecAuth=FABaBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACIjxnfxjaESvGATdu5fh1zRTQA432xlP1Pxj7IFz8Coh1ZSCInVkY1S4pHPOP5hfQaFvv8IpEXITJy1Y7X1U8d0b/KJG/oE3cQw5fpwvIXWuUhVruXiNKVRlaUE36uUP5FOThkzfW9Xgwj406J59zu9j8HlaoCioMX165MF1DBLWMNlvihgN4ho7x1BGLUjqocvxvoW46+uEYrBGZu7GKL6XIMC9vg+QWmWp+ubQ9cn/bbXu2szjrGbNr+S/qYgOSQ3arpPKlmcE8hFR0Hawxt/WVZYqZX9dcbSfi95/rdXBD6QhxkFiBAUQzCdhSelh+IsOBPPfO4wlrv8NVNaJWPum3HevK6OqrFqAvc0rnknGsKWFApirIwV5jQZZ62REWSOEn9SGqTG29e3Cp9V916e33O4TzgqqmHCIkY2qh8V8LrCXt178RhxuDjeWHrpMaITB6wSIk5rCr6f+Wf+6o/LUCVaVT8+2oWxCay/4VozR6pQvHScKI9PTfemptnn8R5HSpWfw3DZvzkv+TrudAMeHZx9pWEhN5ABfhpGUKp45WgiMoiGXnc8Lm6tvXAM+P7rP81tNcYNy7B/RHvJrYMK8q6+jZwwQrELaopqYsbouRYzNY0KI0tKRYgHuG/F7a8UDpxW5fBC5X35oKS44rTNZHgUaHAD1jLv3sfMChrDZsiI98nOtdoA9UVd4E++8VhE4oiZNgQGT+lWRce/9Eb7IepjS6AHHDdXHwWlnMIZfvNizypVKpdGrwADdqXndP4UTE5N2BHPafxv1dweBlQlVZyUtVJ5efuLOeLmLoyEvP1lXmHdrlNZiDyn/bHtTz+sZ5NUkyXyjXy6QR00yGKNcvxcbxaNOg7H0/9fVpxRsETKqtLI2Bno/b34/48JpCEE7dYk+RXEoEebbWMlJeJV/YmmIzSd7qMXWdOF5gCF0g37xwyC6niC0JFpxp8n5Wo0V0Ny1HkFiEZXWXtCx4Gbuet9EdWx9GtXYNxVSXnva4ig/MWiNnPvJj0xfEWFxPd7GjheQZCzLaidswoWZ4lhJCDJZvCch7pLc5ZBQoLw+FhxWCVldvTwmrzN/18TEva6r609e/UGon+fjs08S0WKINrYjvd8XxnQvCYmkiuk87oWSBd7a7Ut7KGL873Hku2hH7lojmq/h/SdccJ6+MyB65haAxGSeoSqc2c2ih2jpfrLdVVRny/+6IZqnffyIEwli1dgLtSWF60cS/G5/GjCzdeHHeLPZNlaCx7t4I7PRdmlhAXThzdKTWkQF4G8tEw82ZFVQ0Pqjay5kx2xzSFlSLJF1e2wRSDVWeZrXWR/D7SmqxgXf/dBMPhJ3tnkzLDAIBn4SUEPJvyisw+zfr7Byoa97LnhDi8+AgRm6TcRmUmwlhVWWl9/V2Z1JMnxgyfX8FADEw8C2I/Pt2kvUCjOi/ceg4JCnRw==; _U=17gRRCvGws1jgZbP75HcAJlba-bMm8eZ9dGvAnkgMmnAXDDAF9DEyUfTIyp2mnplPmEd4Gi-8CizIG1-LnKN4WajgPmFp6R_rEshIGgr1Pi3KrQetibyJFuLVB9Ev8zm_yfv4LDknVmffP_yOjezOnPwHA4l2jvaIx53zWLWju8BIS7XbrRcr8o7fD7x4KNJ4j6ZyBdAjJb5IgHiqzfJbEQ; WLID=/btLmo98XRTLhzYJvwUZ9wpudfp2mMWoM/2Xo06Jf8BvJE6Lju+C0nVu9WtP/meW4itl7xyTZaj6fbMC/DiV392KFEJz61wcJ7DZUtaaBD0=; _HPVN=CS=eyJQbiI6eyJDbiI6OCwiU3QiOjAsIlFzIjowLCJQcm9kIjoiUCJ9LCJTYyI6eyJDbiI6OCwiU3QiOjAsIlFzIjowLCJQcm9kIjoiSCJ9LCJReiI6eyJDbiI6OCwiU3QiOjAsIlFzIjowLCJQcm9kIjoiVCJ9LCJBcCI6dHJ1ZSwiTXV0ZSI6dHJ1ZSwiTGFkIjoiMjAyMy0xMi0zMVQwMDowMDowMFoiLCJJb3RkIjowLCJHd2IiOjAsIlRucyI6MCwiRGZ0IjpudWxsLCJNdnMiOjAsIkZsdCI6MCwiSW1wIjo1OSwiVG9ibiI6MH0=; SnrOvr=X=rebateson; cct=8v4MaNQNbt9KRLjuNAqF2y4Ptj9B8-kk1qMY9AXqn_4ElyZUtBYeq_qyEr8oYBuK_sOzF2mQ9VO50EbzggJGOg; _EDGE_S=SID=1D82767EFC4C6D7E08756580FD686C77; WLS=C=b0e53c083b3128f3&N=jkoy; _RwBf=r=1&ilt=1&ihpd=1&ispd=0&rc=1995&rb=1995&gb=0&rg=0&pc=1995&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=1&l=2024-01-06T08:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&ard=0001-01-01T00:00:00.0000000&o=0&p=BINGCOPILOTWAITLIST&c=MY00IA&t=1605&s=2023-08-22T10:54:31.5149911+00:00&ts=2024-01-06T13:21:24.6252746+00:00&rwred=0&wls=2&wlb=0&wle=0&ccp=0&lka=0&lkt=0&aad=0&TH=&mta=0&e=TZLCfoh9dSyIkp_22nl9qlnCTVb_RgpC3bJWCpIsOT8b1TolMyP8tt857abHvgjDJEdFmTdObMR9mvsNcHLkrw&A=&rwdbt=0001-01-01T16:00:00.0000000-08:00; _Rwho=u=d; _SS=SID=1D82767EFC4C6D7E08756580FD686C77&R=1995&RB=1995&GB=0&RG=0&RP=1995; OID=AxAqyPRqOWnSjr5r3FMziMup3SKGMaWT_xYA7Q_M8q-8cQ; SRCHUSR=DOB=20231208&T=1702047421000&TPC=1704547297000&POEX=W; SRCHHPGUSR=SRCHLANG=zh-Hans&PV=0.1.0&BRW=S&BRH=S&CW=1094&CH=506&SCW=1094&SCH=112&HV=1704547297&IG=DB1AC12AD9D44EF1AFE49EC0287F7985&PRVCW=475&PRVCH=506&DPR=1.3&UTC=480&DM=0&CIBV=1.1381.15&WTS=63839284184&cdxtone=Balanced&cdxtoneopts=galileo,saharagenconv5&BZA=0; ipv6=hit=1704550900781&t=6' // 换成你自己的 BING_COOKIE，操作参见 README.md
const TARGET_HOST = 'www.bing.com' // 后台服务，默认不需要修改

/**
 * 生成随机字符串
 * @param {number} e
 * @returns
 */
const randomString = (e) => {
  e = e || 32;
  const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678_-+";
  var n = "";
  for (let i = 0; i < e; i++) n += t.charAt(getRandomInt(0, t.length));
  return n;
}

function parseCookie(cookie, cookieName) {
  if (!cookie || !cookieName) return ''
  const targetCookie = new RegExp(`(?:[; ]|^)${cookieName}=([^;]*)`).test(cookie) ? RegExp.$1 : cookie
  return targetCookie ? decodeURIComponent(targetCookie).trim() : cookie.indexOf('=') === -1 ? cookie.trim() : ''
}

function parseCookies(cookie, cookieNames) {
  const cookies = {}
  cookieNames.forEach(cookieName => {
    cookies[cookieName] = parseCookie(cookie, cookieName)
  })
  return cookies
}
function formatCookies(cookieObj) {
  return Object.keys(cookieObj).map(key => `${key}=${cookieObj[key]}`).join('; ')
}

const handlers = {
  async handleOptions(request) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
      'Access-Control-Max-Age': '86400',
    }

    if (
      request.headers.get('Origin') !== null &&
      request.headers.get('Access-Control-Request-Method') !== null &&
      request.headers.get('Access-Control-Request-Headers') !== null
    ) {
      return new Response(null, {
        headers: {
          ...corsHeaders,
          'Access-Control-Allow-Headers': request.headers.get(
            'Access-Control-Request-Headers'
          ),
        },
      })
    } else {
      return new Response(null, {
        headers: {
          Allow: 'GET, HEAD, POST, OPTIONS',
        },
      })
    }
  },

  async handleWebSocket(headers) {
    headers.set('Host', 'sydney.bing.com')
    return fetch('https://sydney.bing.com/sydney/ChatHub', {
      headers
    })
  },

  
async  websocketPorxy(request) {
  const reqUrl = new URL(request.url);
  reqUrl.hostname = "copilot.microsoft.com";
  reqUrl.protocol = "https:";
  reqUrl.port = "";
  const headers = new Headers(request.headers);
  if (headers.get("origin")) {
    headers.set("origin", "https://copilot.microsoft.com");
  }
  headers.append("X-forwarded-for", "104.28.7.189");
  return fetch(reqUrl, {
    body: request.body,
    headers,
    method: request.method
  });
},
  
  async fetch(request, env = {}) {
    const uri = new URL(request.url)
    console.log('uri', uri.toString())
    if (request.method === 'OPTIONS') {
      return this.handleOptions(request)
    }
    const headersObj = {}
    for (const [key, value] of request.headers.entries()) {
      if (key.startsWith('cf-') || key.startsWith('x-') || ['connection', 'origin', 'referer', 'host', 'authority'].includes(key)) continue
      headersObj[key] = value
    }
    headersObj['x-forwarded-for'] = request.headers.get('x-forwarded-for')?.split(',')?.[0]
    if (!headersObj['x-forwarded-for']) {
      delete headersObj['x-forwarded-for']
    }
    headersObj['x-ms-useragent'] = request.headers.get('x-ms-useragent') || 'azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.10.3 OS/Win32'
    headersObj['referer'] = 'https://www.bing.com/search?q=Bing+AI'
    const headers = new Headers(headersObj)
    console.log('headers', headersObj)

    const upgradeHeader = headers.get('Upgrade')
    if (upgradeHeader === 'websocket') {
    //  return this.handleWebSocket(headers)
      return this.websocketPorxy(request)
    }
    if (uri.pathname.startsWith('/turing/')) {
      if (BING_COOKIE || env.BING_COOKIE) {
        headers.set('cookie', formatCookies({
          ...parseCookies(env.BING_COOKIE || BING_COOKIE, ['MUID']),
          _U: randomString(32)
        }))
      }
      uri.host = 'www.bing.com'
    } else {
      if (uri.protocol === 'http:' && !/^[0-9.:]+$/.test(TARGET_HOST)) {
        uri.protocol = 'https:';
      }
      headers.set('x-endpoint', SITE_HOST || uri.host)
      // headers.set('x-ws-endpoint', SITE_HOST || uri.host)
      uri.host = TARGET_HOST
      uri.port = TARGET_HOST.split(':')[1] || ''
      headers.set('cookie', `IMAGE_ONLY=1; ${headers.get('cookie') || ''}`)
    }
    headers.set('Host', uri.host)
    return fetch(uri.toString(), {
      headers,
      method: request.method,
      redirect: request.redirect,
      body: request.body,
    })
  },
}

export default handlers

addEventListener("fetch", (event) => {
  event.respondWith(handlers.fetch(event.request))
})
