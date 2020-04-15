export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#4099FF'
    },
    /*
     ** Global CSS
     */
    css: [
      '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
      '~/plugins/fontawesome.js',
        '~/plugins/buefy.js',
        // '~/plugins/logrocket.js',
        '~/plugins/vuelidate.js',
        '~/plugins/axios.js',
        '~/plugins/date-fns.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: "http://localhost:8000/api/v1"
    },
    auth: {
          token: {
            prefix: 'Bearer', //  Default prefix used in building a key for token storage across all storage providers.
          },
        cookie: {
            options: {
                expires: 7
            }
        },
        redirect: {
            login: '/auth/login',
            logout: '/',
            //   // callback: '/login',
            home: '/'
        },
          strategies: {
            local: {
              endpoints: {
                login: { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, url: '/login/access-token', method: 'post', propertyName: 'access_token' },
                // logout: { url: '/auth/token/logout/', method: 'post', propertyName: false },
                user: { url: '/auth/users/me/', method: 'get', propertyName: false },
              },
              // tokenRequired: true,
              tokenType: 'Token',
              tokenName: 'Authorization'
            }
          }
    },
    router: {
        middleware: ['auth']
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
